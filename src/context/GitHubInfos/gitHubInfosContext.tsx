import { createContext } from "use-context-selector";

export interface IUser {
  avatarURL: string;
  login: string;
  name: string;
  bio: string;
  followers: number;
  company: string;
  publicRepos: number;
  htmlURL: string;
}

export interface IIssue {
  id: number;
  content: string;
  title: string;
  createdAt: string;
  commentsAmount: number;
  owner: string;
  URL: string;
}

export interface GitHubInfosContextType {
  user: IUser;
  issueList: IIssue[];
  getIssueByTerm: (term: string) => Promise<void>;
}

export const GitHubInfosContext = createContext({} as GitHubInfosContextType);
