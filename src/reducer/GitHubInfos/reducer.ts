import { IIssue, IUser } from "../../context/GitHubInfos/gitHubInfosContext";
import { issueFormatter, userFormatter } from "../../utils/repositoryFormatter";
import { ActionTypes, ActionTypesProps } from "./actions";

interface GitHubInfo {
  user: IUser;
  issueList: IIssue[];
}

export function gitHubInfosReducer(
  { issueList, user }: GitHubInfo,
  action: ActionTypesProps
) {
  switch (action.type) {
    case ActionTypes.GET_USER: {
      const formattedUser = userFormatter(action.payload.data);
      return { issueList, user: formattedUser };
    }

    case ActionTypes.GET_ISSUE_LIST: {
      const newIssueList = action.payload.data.map((item) =>
        issueFormatter(item)
      );

      const nonRepeatIssueList = newIssueList.map((newIssue) => {
        const alreadyPosted = issueList.find(
          (issue) => issue.id === newIssue.id
        );

        if (alreadyPosted) return alreadyPosted;
        else return newIssue;
      });

      return { user, issueList: nonRepeatIssueList };
    }

    case ActionTypes.GET_ISSUE_LIST_BY_TERM: {
      const issueListByTerm = action.payload.data.map((item) =>
        issueFormatter(item)
      );

      return { user, issueList: issueListByTerm };
    }

    default:
      return { user, issueList };
  }
}
