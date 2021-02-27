import React from "react";
import {ReactComponent as TeamLogo} from '../../assets/svg/teamLogo.svg'
import '../../styles.css'
const Header=()=> {
    return (
      <div className="header">
              <TeamLogo className="logo"/>
          <h1 className="team-name">Clean Coders</h1>
      </div>
    );
  }
  
  export default Header;
  