import { ReactNode, useCallback, useEffect, useState } from "react";
import { RepositoryContext, IUser, IIssue } from "./repositoryContext";
import { ApiService } from "../../services/apiService";

interface RepositoryProviderProps {
  children: ReactNode;
}

const apiService = new ApiService();
export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [user, setUser] = useState({} as IUser);
  const [issueList, setIssueList] = useState([] as IIssue[]);

  const getAuthUser = useCallback(async () => {
    const data = await apiService.getUser();

    const user = {
      avatarURL: data.avatar_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      company: data.company,
      publicRepos: data.public_repos,
      htmlURL: data.html_url,
    } as IUser;

    setUser(user);
  }, []);

  const getIssueList = useCallback(async () => {
    const data = await apiService.getIssueList();

    const newIssueList = data.map(
      (item) =>
        ({
          id: item.id,
          commentsAmount: item.comments,
          content: item.body,
          title: item.title,
          createdAt: item.created_at,
          owner: item.user?.login,
          URL: item.html_url,
        } as IIssue)
    );

    setIssueList((state) =>
      newIssueList.map((newIssue) => {
        const alreadyPosted = state.find((issue) => issue.id === newIssue.id);
        if (alreadyPosted) return alreadyPosted;
        else return newIssue;
      })
    );
  }, []);

  function findIssueById(issueId: string) {
    const id = parseInt(issueId);

    const foundIssue = issueList.find((item) => item.id == id);

    if (foundIssue) return foundIssue;
    else return null;
  }

  const getIssueByTerm = useCallback(
    async (term: string) => {
      const data = await apiService.getIssueByTerm(term);

      const formattedIssueList = data.map(
        (item) =>
          ({
            id: item.id,
            commentsAmount: item.comments,
            content: item.body,
            title: item.title,
            createdAt: item.created_at,
            owner: item.user?.login,
            URL: item.html_url,
          } as IIssue)
      );

      setIssueList(formattedIssueList);
    },
    [apiService]
  );

  useEffect(() => {
    getAuthUser();
    getIssueList();
  }, [getAuthUser, getIssueList]);

  return (
    <RepositoryContext.Provider
      value={{ user, issueList, findIssueById, getIssueByTerm }}
    >
      {children}
    </RepositoryContext.Provider>
  );
}
