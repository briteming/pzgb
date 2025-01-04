import { IIssue, IUser } from "../context/GitHubInfos/gitHubInfosContext";

interface IssueData {
  id: number;
  comments: number;
  body?: string | null | undefined;
  title: string;
  created_at: string;
  user: {
    login: string;
  } | null;
  html_url: string;
}
interface UserData {
  avatar_url: string;
  login: string;
  name: string | null;
  bio: string | null;
  followers: number;
  company: string | null;
  public_repos: number;
  html_url: string;
}

export function issueFormatter(data: IssueData) {
  return {
    id: data.id,
    commentsAmount: data.comments,
    content: data.body ?? "",
    title: data.title,
    createdAt: data.created_at,
    owner: data.user?.login ?? "",
    URL: data.html_url,
  } as IIssue;
}

export function userFormatter(data: UserData) {
  return {
    avatarURL: data.avatar_url,
    login: data.login,
    name: data.name ?? "",
    bio: data.bio ?? "",
    followers: data.followers,
    company: data.company ?? "",
    publicRepos: data.public_repos,
    htmlURL: data.html_url,
  } as IUser;
}
