import { createContext } from "react";

export interface IUser {
  avatarURL: string | null;
  login: string | null;
  name: string | null;
  bio: string | null;
  followers: number | null;
  company: string | null;
  publicRepos: number | null;
  htmlURL: string | null;
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
  getIssue: (id: string) => IIssue | undefined;
}

export const RepositoryContext = createContext({} as RepositoryContextType);
