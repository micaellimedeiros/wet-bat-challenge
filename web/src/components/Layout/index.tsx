import { ReactNode } from "react";
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
  Icon,
  Avatar,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { HeaderContainer, FooterContainer, Wrapper, Holder } from "./styles";

type Props = {
  children?: ReactNode;
};

const currentYear = new Date().getFullYear();

const Layout = ({ children }: Props) => {
  return (
    <div>
      <HeaderContainer>
        <Holder>
          <Icon as={BsGridFill} color="white" w={6} h={6} />
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

          <Icon as={BsFillBellFill} color="white" w={6} h={5} />
          <Icon as={BsFillChatLeftFill} color="white" w={6} h={5} />
          <Icon as={BsGearFill} color="white" w={6} h={5} />

          <Wrap>
            <WrapItem>
              <Avatar
                name="Micaelli Medeiros"
                src="https://avatars.githubusercontent.com/u/54600663?v=4"
              />
            </WrapItem>
          </Wrap>
        </Holder>
      </HeaderContainer>

      {children}

      <FooterContainer>
        <Wrapper>
          <p>
            © {currentYear} - Todos os direitos reservados <br /> Wet Bat
          </p>
        </Wrapper>
      </FooterContainer>
    </div>
  );
};

export default Layout;
