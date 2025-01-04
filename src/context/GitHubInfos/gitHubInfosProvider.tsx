import { ReactNode, useCallback, useEffect, useMemo, useReducer } from "react";
import { IUser, IIssue, GitHubInfosContext } from "./gitHubInfosContext";
import { ApiService } from "../../services/apiService";
import { gitHubInfosReducer } from "../../reducer/GitHubInfos/reducer";
import {
  getRepositoryIssueList,
  getRepositoryIssueListById,
  getUser,
} from "../../reducer/GitHubInfos/actions";

interface GitHubInfo {
  user: IUser;
  issueList: IIssue[];
}

interface GitHubInfosProps {
  children: ReactNode;
}

export function GitHubInfosProvider({ children }: GitHubInfosProps) {
  const [githubUser, dispatch] = useReducer(gitHubInfosReducer, {
    issueList: [] as IIssue[],
    user: {} as IUser,
  } as GitHubInfo);

  const apiService = useMemo(() => new ApiService(), []);

  const getAuthUser = useCallback(async () => {
    const data = await apiService.getUser().catch((err) => {
      console.log("Failed to fetch User ", err);
      throw err;
    });
    dispatch(getUser(data));
  }, [apiService]);

  const getIssueList = useCallback(async () => {
    const data = await apiService.getIssueList().catch((err) => {
      console.log("Failed to fetch Issue list ", err);
      throw err;
    });
    dispatch(getRepositoryIssueList(data));
  }, [apiService]);

  const getIssueByTerm = useCallback(
    async (term: string) => {
      const data = await apiService.getIssueByTerm(term).catch((err) => {
        console.log("Failed to search Issue by term ", err);
        throw err;
      });
      dispatch(getRepositoryIssueListById(data));
    },
    [apiService]
  );

  useEffect(() => {
    getAuthUser();
    getIssueList();
  }, [getAuthUser, getIssueList]);

  return (
    <GitHubInfosContext.Provider
      value={{
        user: githubUser.user,
        issueList: githubUser.issueList,
        getIssueByTerm,
      }}
    >
      {children}
    </GitHubInfosContext.Provider>
  );
}
