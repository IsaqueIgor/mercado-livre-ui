import React from "react";
import logoimg from "../../assets/logo.png";
import promo from "../../assets/promo.png";
import {
  Container,
  SearchWrapper,
  SearchInput,
  Logo,
  PromoContainer,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoimg} />
      <SearchWrapper>
        <SearchInput placeholder="Buscar produtos, marcas e muito mais..." />
      </SearchWrapper>
      <PromoContainer src={promo} />
    </Container>
  );
};

export default Header;
