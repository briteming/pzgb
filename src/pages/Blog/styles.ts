import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.main`
  width: 54rem;

  margin: 0 auto;

  section {
    margin-top: 4.75rem;
    margin-bottom: 3rem;

    p {
      margin-bottom: 0.75rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${({ theme }) => theme.colors["base-subtitle"]};

      ${({ theme }) => theme.fonts.titleS};
    }

    span {
      color: ${({ theme }) => theme.colors["base-span"]};
      ${({ theme }) => theme.fonts.textS};
    }
  }

  input {
    width: 100%;

    padding: 0.75rem 1rem;

    color: ${({ theme }) => theme.colors["base-text"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};

    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    border-radius: 6px;
    ${({ theme }) => theme.fonts.textM};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors["base-border"]};
  }
  :focus {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  ::-webkit-scrollbar {
    width: 12px; /* Largura para barras verticais */
  }

  /* Cor e forma do trilho da barra */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-background"]};
    border-radius: 10px;
  }
  /* Cor e forma do "polegar" da barra */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors["base-border"]};
    border-radius: 10px;
  }
`;

export const PostList = styled.div`
  height: 52.75rem;
  width: 56rem;

  padding-bottom: 5rem;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: repeat(2, 26rem);
  grid-template-rows: 16.25rem;
  gap: 2rem;
`;

export const Post = styled(NavLink)`
  padding: 2rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors["base-post"]};

  cursor: pointer;

  text-decoration: none;

  border: 1px solid transparent;
  transition: border-color 0.4s ease, border-width 0.4s ease;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors["base-label"]};
  }
  div {
    margin-bottom: 1.25rem;

    display: flex;

    p {
      width: 17.68rem;

      color: ${({ theme }) => theme.colors["base-title"]};
      ${({ theme }) => theme.fonts.titleM};
    }

    time {
      margin-top: 0.25rem;

      flex: 1;
      text-align: end;

      color: ${({ theme }) => theme.colors["base-span"]};
      ${({ theme }) => theme.fonts.textS};
    }
  }

  > p {
    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textM};

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
