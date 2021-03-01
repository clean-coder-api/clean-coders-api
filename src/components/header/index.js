import React from "react";
import { ReactComponent as TeamLogo } from "../../assets/svg/teamLogo.svg";
import { Link } from "react-router-dom";
import "../../styles.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/peoples/1">
        <TeamLogo className="logo" />
      </Link>
      <Link to="/times">times</Link>
      <Link to="/tags">tags</Link>
      <h1 className="team-name">Clean Coders</h1>
    </div>
  );
};

export default Header;
