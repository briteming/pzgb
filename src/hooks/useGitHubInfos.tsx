import {
  GitHubInfosContext,
  GitHubInfosContextType,
} from "../context/GitHubInfos/gitHubInfosContext";
import { useContextSelector } from "use-context-selector";

export function useGitHubInfos<K extends keyof GitHubInfosContextType>(
  value: K
): GitHubInfosContextType[K] {
  return useContextSelector(GitHubInfosContext, (context) => context[value]);
}
