import {
  Content,
  ContentContainer,
  SummaryContainer,
  SummaryFooter,
  SummaryHeader,
  SummaryTitle,
} from "./styles";
import NewTabLinkSVG from "../../assets/new-tab-link.svg";
import GoBackSVG from "../../assets/go-back-icon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
export function Post() {
  return (
    <ContentContainer>
      <SummaryContainer>
        <SummaryHeader>
          <NavLink to="/">
            <img src={GoBackSVG} alt="" />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to="/post">
            <span>VER NO GITHUB</span>
            <img src={NewTabLinkSVG} alt="" />
          </NavLink>
        </SummaryHeader>
        <SummaryTitle>JavaScript data types and data structures</SummaryTitle>
        <SummaryFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </div>
        </SummaryFooter>
      </SummaryContainer>

      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </Content>
    </ContentContainer>
  );
}
