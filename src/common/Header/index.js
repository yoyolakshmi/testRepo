import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { brandprimary, brandhighlight, brandviolet } from "../../utils/colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background-color: ${brandprimary};
  user-select: none;
`;

const HomeIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Title = styled.div`
  color: ${brandhighlight};
  font-size: 40px;
  font-family: "sans-serif";
`;

const Welcome = styled.a`
  color: ${brandviolet};
  font-size: 20px;
  align-self: center;
  text-decoration: underline;
  cursor: pointer;
`;

const Header = () => {
  const dataSource = useContext(DataContext);
  return (
    <Container>
      <Link to={"/"}>
        <HomeIcon src={dataSource.site.logoImage} />
      </Link>
      <Title children={dataSource.site.title} />
      <Link to={"/profile"}>
        <Welcome children={`Welcome ${dataSource.profile.firstName}`} />
      </Link>
    </Container>
  );
};

export default Header;
