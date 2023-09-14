import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUserCircle,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";
import logo from "../../assets/logo/2.png";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src={logo}
          alt="logo"
          className="header_logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </div>
      <div className="header_center">
        <div className="search-input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search GAZETBOT"
            className="header_center_input"
          />
        </div>
      </div>
      <div className="header_right">
        <div className="header_right_signin">
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          <div className="signin-container">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            <span className="signin-text">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
