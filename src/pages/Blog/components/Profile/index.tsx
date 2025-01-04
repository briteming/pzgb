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
import { useGitHubInfos } from "../../../../hooks/useGitHubInfos";

export function Profile() {
  const { user } = useGitHubInfos();
  const {
    avatarURL,
    bio,
    company,
    followers,
    htmlURL,
    login,
    name,
    publicRepos,
  } = user;
  return (
    <ProfileContainer>
      <ProfileImage src={avatarURL ? avatarURL : ""} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <p>{name}</p>
          <a href={htmlURL ? htmlURL : ""}>
            GITHUB
            <img src={NewTabLinkSVG} alt="" />
          </a>
        </ProfileHeader>
        <p>{bio}</p>

        <ProfileFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </div>
          <div>
            <FontAwesomeIcon icon={faFolderTree} />
            {publicRepos} repositórios
          </div>
          {company ? (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              {company}
            </div>
          ) : null}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {followers} seguidores
          </div>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
