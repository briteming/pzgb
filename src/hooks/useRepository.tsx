import { useContext } from "react";
import { RepositoryContext } from "../context/Repository/repositoryContext";

export function useRepository() {
  return useContext(RepositoryContext);
}
