import { ReactNode, useCallback, useEffect, useState } from "react";
import { RepositoryContext, IUser, IIssue } from "./repositoryContext";
import { Octokit } from "octokit";

interface RepositoryProviderProps {
  children: ReactNode;
}

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [user, setUser] = useState({} as IUser);
  const [issueList, setIssueList] = useState([] as IIssue[]);

  const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
  const octokit = new Octokit({
    auth: accessToken,
  });

  const getUser = useCallback(async () => {
    const { data } = await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const {
      avatar_url,
      login,
      name,
      bio,
      followers,
      company,
      public_repos,
      html_url,
    } = data;

    const user = {
      avatarURL: avatar_url,
      login: login,
      name: name,
      bio: bio,
      followers: followers,
      company: company,
      publicRepos: public_repos,
      htmlURL: html_url,
    } as IUser;

    console.log(user);
    setUser(user);
  }, [octokit]);

  const getIssueList = useCallback(async () => {
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;

    const response = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(response.data);
    setIssueList((state) =>
      response.data.map((item) => {
        const { comments, created_at, title, body, id, html_url, user } = item;

        const newIssue = {
          id,
          commentsAmount: comments,
          content: body,
          title,
          createdAt: created_at,
          owner: user?.login,
          URL: html_url,
        } as IIssue;

        const alreadyPosted = state.find((post) => post.id === newIssue.id);

        if (alreadyPosted) return alreadyPosted;

        return newIssue;
      })
    );
  }, [octokit]);

  function getIssue(issueId: string) {
    const id = parseInt(issueId);

    const foundIssue = issueList.find((item) => item.id == id);
    if (foundIssue) return foundIssue;
  }
  useEffect(() => {
    getUser();
    getIssueList();
  }, []);

  return (
    <RepositoryContext.Provider value={{ user, issueList, getIssue }}>
      {children}
    </RepositoryContext.Provider>
  );
}
