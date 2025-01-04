import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { RepositoryContext, IUser, IIssue } from "./repositoryContext";
import { ApiService } from "../../services/apiService";
import { issueFormatter, userFormatter } from "../../utils/repositoryFormatter";

interface RepositoryProviderProps {
  children: ReactNode;
}

export function RepositoryProvider({ children }: RepositoryProviderProps) {
  const [user, setUser] = useState({} as IUser);
  const [issueList, setIssueList] = useState([] as IIssue[]);

  const apiService = useMemo(() => new ApiService(), []);

  const getAuthUser = useCallback(async () => {
    try {
      const data = await apiService.getUser();

      const user = userFormatter(data);

      setUser(user);
    } catch (err) {
      console.log("Failed to fetch User ", err);
    }
  }, [apiService]);

  const getIssueList = useCallback(async () => {
    try {
      const data = await apiService.getIssueList();

      const newIssueList = data.map((item) => issueFormatter(item));

      setIssueList((state) =>
        newIssueList.map((newIssue) => {
          const alreadyPosted = state.find((issue) => issue.id === newIssue.id);
          if (alreadyPosted) return alreadyPosted;
          else return newIssue;
        })
      );
    } catch (err) {
      console.log("Failed to fetch Issue list ", err);
    }
  }, [apiService]);

  const getIssueByTerm = useCallback(
    async (term: string) => {
      try {
        const data = await apiService.getIssueByTerm(term);

        setIssueList(data.map((item) => issueFormatter(item)));
      } catch (err) {
        console.log("Failed to search Issue by term ", err);
      }
    },
    [apiService]
  );

  function findIssueById(issueId: string) {
    const id = parseInt(issueId);

    const foundIssue = issueList.find((item) => item.id == id);

    return foundIssue;
  }

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
