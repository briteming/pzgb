import { useState } from "react";
import { Profile } from "./components/Profile";
import { ContentContainer, PostList, Post } from "./styles";
import { format, formatDistanceToNow } from "date-fns";
import { parse } from "date-fns/parse";

import { ptBR } from "date-fns/locale/pt-BR";
interface Post {
  title: string;
  createdAt: string;
  content: string;
}
const publishedDateFormatted = format(
  parse("02/12/2024 12:30", "dd/MM/yyyy HH:mm", new Date()),
  "d 'de' LLLL 'às' HH:mm'h'",
  {
    locale: ptBR,
  }
);

const publishedDateRelativeToNow = formatDistanceToNow(
  parse("02/12/2024 12:30", "dd/MM/yyyy HH:mm", new Date()),

  {
    locale: ptBR,
    addSuffix: true,
  }
);
const post = {
  title: "JavaScript data types and data structures",
  content:
    "Programming languages all have built-in data structures, but these often differ from one language to another. II- Programming languages all have built-in data structures, but these often differ from one language to another.",
  createdAt: publishedDateRelativeToNow,
} as Post;

const postPreList: Post[] = [];
for (let i = 0; i <= 20; i++) {
  postPreList.push(post);
}

export function Blog() {
  const [postList] = useState<Post[]>(postPreList);

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
          {postList.map(({ content, createdAt, title }) => (
            <Post>
              <div>
                <p>{title}</p>
                <time dateTime={publishedDateFormatted}>{createdAt}</time>
              </div>
              <p>{content}</p>
            </Post>
          ))}
        </PostList>
      </ContentContainer>
    </>
  );
}
