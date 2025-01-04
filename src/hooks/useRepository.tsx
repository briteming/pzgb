import { useContext } from "react";
import { GitHubInfosContext } from "../context/GitHubInfos/gitHubInfosContext";

export function useGitHubInfos() {
  return useContext(GitHubInfosContext);
}
