import {
  ProfileContainer,
  ProfileImage,
  ProfileHeader,
  ProfileContent,
  ProfileFooter,
} from "./styles";
import NewTabLinkSVG from "../../../../assets/new-tab-link.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUserGroup,
  faFolderTree,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Octokit } from "octokit";
import { useEffect, useState } from "react";

interface UserInfos {
  avatar_url: string | null;
  login: string | null;
  name: string | null;
  bio: string | null;
  followers: number | null;
  company: string | null;
  public_repos: number | null;
  html_url: string | null;
}

export function Profile() {
  const [userInfos, setUserInfos] = useState({} as UserInfos);
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const octokit = new Octokit({
    auth: accessToken,
  });

  async function getProfileInfos() {
    const { data } = await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const userInfos = {
      avatar_url: data.avatar_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      company: data.company,
      public_repos: data.public_repos,
      html_url: data.html_url,
    } as UserInfos;
    setUserInfos(userInfos);
  }

  useEffect(() => {
    getProfileInfos();
    console.log(userInfos);
  }, []);

  return (
    <ProfileContainer>
      <ProfileImage
        src={userInfos.avatar_url ? userInfos.avatar_url : ""}
        alt=""
      />
      <ProfileContent>
        <ProfileHeader>
          <p>{userInfos.name}</p>
          <a href={userInfos.html_url ? userInfos.html_url : ""}>
            GITHUB
            <img src={NewTabLinkSVG} alt="" />
          </a>
        </ProfileHeader>
        <p>{userInfos.bio}</p>

        <ProfileFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {userInfos.login}
          </div>
          <div>
            <FontAwesomeIcon icon={faFolderTree} />
            {userInfos.public_repos}
          </div>
          {userInfos.company ? (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              {userInfos.company}
            </div>
          ) : null}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {userInfos.followers} seguidores
          </div>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
