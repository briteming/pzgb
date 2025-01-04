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
import {
  formatDateToString,
  getDateRelativeFromNow,
} from "../../utils/dateFormatter";
import { IIssue } from "../../context/GitHubInfos/gitHubInfosContext";
import { useGitHubInfos } from "../../hooks/useGitHubInfos";
export function Post() {
  const { id } = useParams();
  const { issueList } = useGitHubInfos();

  const issue = issueList.find(
    (item) => item.id == parseInt(id as string)
  ) as IIssue;

  const { URL, commentsAmount, content, createdAt, owner, title } = issue;
  return (
    <ContentContainer>
      <SummaryContainer>
        <SummaryHeader>
          <NavLink to="/">
            <img src={GoBackSVG} alt="" />
            VOLTAR
          </NavLink>
          <NavLink to={URL}>
            VER NO GITHUB
            <img src={NewTabLinkSVG} alt="" />
          </NavLink>
        </SummaryHeader>
        <SummaryTitle>{title}</SummaryTitle>
        <SummaryFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {owner}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time title={formatDateToString(createdAt)} dateTime={createdAt}>
              {getDateRelativeFromNow(createdAt)}
            </time>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            {commentsAmount} comentários
          </div>
        </SummaryFooter>
      </SummaryContainer>

      <Content>
        <Markdown>{content}</Markdown>
      </Content>
    </ContentContainer>
  );
}
