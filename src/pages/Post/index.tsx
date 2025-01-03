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
import Markdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { useRepository } from "../../hooks/useRepository";
import {
  formatDateToString,
  getDateRelativeFromNow,
} from "../../utils/DateFormatter";
export function Post() {
  const { id } = useParams();
  const { getIssue } = useRepository();

  const issue = getIssue(id ? id : "");

  if (!issue) {
    return;
  }

  return (
    <ContentContainer>
      <SummaryContainer>
        <SummaryHeader>
          <NavLink to="/">
            <img src={GoBackSVG} alt="" />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to={issue.URL}>
            <span>VER NO GITHUB</span>
            <img src={NewTabLinkSVG} alt="" />
          </NavLink>
        </SummaryHeader>
        <SummaryTitle>{issue.title}</SummaryTitle>
        <SummaryFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {issue.owner}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time
              title={formatDateToString(issue.createdAt)}
              dateTime={issue.createdAt}
            >
              {getDateRelativeFromNow(issue.createdAt)}
            </time>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            {issue.commentsAmount} comentários
          </div>
        </SummaryFooter>
      </SummaryContainer>

      <Content>
        <Markdown>{issue.content}</Markdown>
      </Content>
    </ContentContainer>
  );
}
