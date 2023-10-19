import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 0.1rem;

  height: 5rem;
  background-color: #5f6cb0;

  img {
    width: 10rem;
  }

  svg {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    padding: 0.5rem;
    height: 7rem;

    > :first-child {
      order: 2;
    }
  }
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #5f6cb0;

  color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-weight: 300;
`;

export const ChildrenContent = styled.div`
  display: flex;
  min-height: 100vh;

  > div {
    margin: 0.6rem;
  }
`;
