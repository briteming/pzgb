import { Endpoints } from "@octokit/types";

type GetUserResponse = Endpoints["GET /user"]["response"]["data"];
type ListIssuesResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
type ListIssuesByTermResponse =
  Endpoints["GET /search/issues"]["response"]["data"]["items"];

export enum ActionTypes {
  GET_USER = "GET_USER",
  GET_ISSUE_LIST = "GET_ISSUE_LIST",
  GET_ISSUE_LIST_BY_TERM = "GET_ISSUE_LIST_BY_TERM",
}
export type ActionTypesProps =
  | {
      type: ActionTypes.GET_ISSUE_LIST_BY_TERM;
      payload: { data: ListIssuesByTermResponse };
    }
  | { type: ActionTypes.GET_ISSUE_LIST; payload: { data: ListIssuesResponse } }
  | { type: ActionTypes.GET_USER; payload: { data: GetUserResponse } };

export function getUser(data: GetUserResponse): ActionTypesProps {
  return {
    type: ActionTypes.GET_USER,
    payload: {
      data,
    },
  };
}
export function getRepositoryIssueList(
  data: ListIssuesResponse
): ActionTypesProps {
  return {
    type: ActionTypes.GET_ISSUE_LIST,
    payload: {
      data,
    },
  };
}
export function getRepositoryIssueListById(
  data: ListIssuesByTermResponse
): ActionTypesProps {
  return {
    type: ActionTypes.GET_ISSUE_LIST_BY_TERM,
    payload: {
      data,
    },
  };
}
