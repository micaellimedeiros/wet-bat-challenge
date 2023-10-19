import { ReactNode, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  BsGridFill,
  BsFillBellFill,
  BsFillChatLeftFill,
  BsGearFill,
} from "react-icons/bs";

import {
  InputLeftElement,
  Input,
  InputGroup,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import {
  HeaderContainer,
  FooterContainer,
  Wrapper,
  Holder,
  ChildrenContent,
} from "./styles";

import Menu from "../Menu";

type Props = {
  children?: ReactNode;
};

const currentYear = new Date().getFullYear();

const Layout = ({ children }: Props) => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleOpenMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleCloseMenuClick = () => {
    setIsMenuOpened(false);
  };

  return (
    <div>
      <HeaderContainer>
        <Holder>
          <BsGridFill onClick={() => handleOpenMenuClick()} />
          <a href="/">
            <img src="/logo.png" alt="Logo - Wet Bat" />
          </a>
        </Holder>

        <Holder>
          <InputGroup>
            <InputLeftElement>
              <SearchIcon color="gray.500" />
            </InputLeftElement>
            <Input background="white" />
          </InputGroup>

          <div>
            <BsFillBellFill />
            <BsFillChatLeftFill />
            <BsGearFill />
          </div>

          <Wrap>
            <WrapItem>
              <Avatar
                name="Micaelli Medeiros"
                src="https://avatars.githubusercontent.com/u/54600663?v=4"
                size={{ base: "sm", md: "md" }}
              />
            </WrapItem>
          </Wrap>
        </Holder>
      </HeaderContainer>

      <ChildrenContent>
        <Menu
          isMenuOpened={isMenuOpened}
          onCloseMenuClick={handleCloseMenuClick}
        />

        <div>{children}</div>
      </ChildrenContent>

      <FooterContainer>
        <Wrapper>
          <p>
            © {currentYear} - All rights reserved <br /> Wet Bat
          </p>
        </Wrapper>
      </FooterContainer>
    </div>
  );
};

export default Layout;
