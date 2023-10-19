import styled, { css, keyframes } from "styled-components";

type MenuProp = {
  isMenuOpened: boolean;
};

const fadeIn = keyframes`
 from {
    transform: translateZ(20px);
    opacity: 0;
  }
  to {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const MenuWrapper = styled.aside`
  height: 100vh;
  background-color: #e6e6e6;
`;

export const MenuItem = styled.a<MenuProp>`
  display: flex;
  align-items: center;

  gap: 1rem;
  padding: 1rem;

  font-weight: bold;
  color: #5f6cb0;

  transition: background-color 0.2s;
  animation: ${fadeIn} 0.3s ease;

  svg {
    color: #5f6cb0;
  }

  &:hover {
    background-color: #ccd0dc;
  }

  @media (min-width: 768px) {
    span:nth-child(2) {
      display: ${({ isMenuOpened }) => !isMenuOpened && "none"};
    }
  }

  @media (max-width: 768px) {
    span:nth-child(2) {
      display: ${({ isMenuOpened }) => !isMenuOpened && "none"};
    }

    ${({ isMenuOpened }) =>
      isMenuOpened &&
      css`
        width: 100vw;
        z-index: 1;
        overflow: hidden;

        align-items: center;
        justify-content: center;
      `}
  }
`;
