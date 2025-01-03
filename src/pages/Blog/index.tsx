import { Profile } from "./components/Profile";
import { ContentContainer, PostList, Post } from "./styles";

import { useRepository } from "../../hooks/useRepository";
import {
  formatDateToString,
  getDateRelativeFromNow,
} from "../../utils/DateFormatter";

export function Blog() {
  const { issueList } = useRepository();

  return (
    <>
      <ContentContainer>
        <Profile />
        <section>
          <p>
            Publicações <span>6 publicações</span>
          </p>
          <form action="">
            <input type="text" placeholder="Buscar conteúdo" />
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
