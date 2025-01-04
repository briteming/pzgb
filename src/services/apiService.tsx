import { Octokit } from "octokit";

export class ApiService {
  private accessToken = import.meta.env.VITE_GITHUB_TOKEN;
  private owner = import.meta.env.VITE_GITHUB_OWNER;
  private repo = import.meta.env.VITE_GITHUB_REPO;

  private octokit = new Octokit({
    auth: this.accessToken,
  });

  async getUser() {
    const { data } = await this.octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return data;
  }

  async getIssueList() {
    const { data } = await this.octokit.request(
      "GET /repos/{owner}/{repo}/issues",
      {
        owner: this.owner,
        repo: this.repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    return data;
  }

  async getIssueByTerm(term: string) {
    const { data } = await this.octokit.request("GET /search/issues", {
      q: `repo:${this.owner}/${this.repo} ${term} type:issue`,

      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return data.items;
  }
}
