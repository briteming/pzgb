import { Profile } from "./components/Profile";
import { ContentContainer, PostList, Post } from "./styles";

import { useGitHubInfos } from "../../hooks/useRepository";
import {
  formatDateToString,
  getDateRelativeFromNow,
} from "../../utils/dateFormatter";
import { useForm } from "react-hook-form";

interface SearchPostInput {
  term: string;
}

export function Blog() {
  const { issueList, getIssueByTerm } = useGitHubInfos();
  const { register, handleSubmit } = useForm<SearchPostInput>();

  function handleSearchByString({ term }: SearchPostInput) {
    getIssueByTerm(term);
  }

  return (
    <>
      <ContentContainer>
        <Profile />
        <section>
          <p>
            Publicações <span>{issueList.length} publicações</span>
          </p>
          <form action="" onSubmit={handleSubmit(handleSearchByString)}>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              {...register("term")}
            />
          </form>
        </section>

        <PostList>
          {issueList.map(({ content, createdAt, title, id }) => (
            <Post key={id} to={`/post/${id}`}>
              <div>
                <p>{title}</p>
                <time
                  title={formatDateToString(createdAt)}
                  dateTime={createdAt}
                >
                  {getDateRelativeFromNow(createdAt)}
                </time>
              </div>
              <p>{content}</p>
            </Post>
          ))}
        </PostList>
      </ContentContainer>
    </>
  );
}
