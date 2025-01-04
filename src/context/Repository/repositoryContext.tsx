import { createContext } from "react";

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

interface RepositoryContextType {
  user: IUser;
  issueList: IIssue[];
  findIssueById: (id: string) => IIssue | undefined;
  getIssueByTerm: (term: string) => Promise<void>;
}

export const RepositoryContext = createContext({} as RepositoryContextType);
