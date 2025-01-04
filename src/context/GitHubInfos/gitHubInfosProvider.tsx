import { ReactNode, useCallback, useEffect, useMemo, useReducer } from "react";
import { GitHubInfosContext, IUser, IIssue } from "./gitHubInfosContext";
import { ApiService } from "../../services/apiService";
import { gitHubInfosReducer } from "../../reducer/GitHubInfos/reducer";
import {
  getRepositoryIssueList,
  getRepositoryIssueListById,
  getUser,
} from "../../reducer/GitHubInfos/actions";

interface GitHubInfosProps {
  children: ReactNode;
}

export function GitHubInfosProvider({ children }: GitHubInfosProps) {
  const [gitHubInfosState, dispatch] = useReducer(
    gitHubInfosReducer,
    {
      issueList: [] as IIssue[],
      user: {} as IUser,
    },
    (initialState) => {
      const storedJSON = localStorage.getItem("@time:githubinfos-state-1.0.0");
      if (storedJSON) {
        return JSON.parse(storedJSON);
      }
      return initialState;
    }
  );

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
    Promise.all([getAuthUser(), getIssueList()]);
  }, [getAuthUser, getIssueList]);

  useEffect(() => {
    const stateJSON = JSON.stringify(gitHubInfosState);
    localStorage.setItem("@time:githubinfos-state-1.0.0", stateJSON);
  }, [gitHubInfosState]);

  return (
    <GitHubInfosContext.Provider
      value={{
        user: gitHubInfosState.user,
        issueList: gitHubInfosState.issueList,
        getIssueByTerm,
      }}
    >
      {children}
    </GitHubInfosContext.Provider>
  );
}
