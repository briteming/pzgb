import {
  ProfileContainer,
  ProfileImage,
  ProfileHeader,
  ProfileContent,
  ProfileFooter,
} from "./styles";
import NewTabLinkSVG from "../../../../assets/new-tab-link.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=50&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <ProfileContent>
        <ProfileHeader>
          <p>Cameron Williamson</p>
          <NavLink to="/post">
            GITHUB
            <img src={NewTabLinkSVG} alt="" />
          </NavLink>
        </ProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </div>
        </ProfileFooter>
      </ProfileContent>
    </ProfileContainer>
  );
}
