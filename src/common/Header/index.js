import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import "./styles.scss";

const Header = () => {
  const dataSource = useContext(DataContext);
  return (
    <div className="container">
      <Link to={"/"}>
        <img src={dataSource.site.logoImage} className="home-icon" />
      </Link>
      <div className="title"> {dataSource.site.title}</div>
      <Link to={"/profile"}>
        <div
          children={`Welcome ${dataSource.profile.firstName}`}
          className="welcome"
        />
      </Link>
    </div>
  );
};

export default Header;
