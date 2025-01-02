import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;

  padding: 2rem 2.5rem;
  margin-top: -88px;

  display: flex;
  gap: 2rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors["base-profile"]};
`;

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;

  object-fit: cover;
`;

export const ProfileContent = styled.div`
  flex: 1;

  > p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors["base-text"]};

    ${({ theme }) => theme.fonts.textM};
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors["base-title"]};

    ${({ theme }) => theme.fonts.titleL};
  }
  a {
    color: ${({ theme }) => theme.colors["blue"]};
    ${({ theme }) => theme.fonts.link};

    text-decoration: none;
    cursor: pointer;

    img {
      width: 0.75rem;
      height: 0.75rem;

      margin-left: 0.75rem;
    }
  }
`;

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.25rem;

  div {
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    ${({ theme }) => theme.fonts.textM};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;

    margin-right: 0.5rem;

    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
