import React from "react";
import "./Header.css";
import { FiHome, FiHelpCircle, FiInfo } from "react-icons/fi";
import { MdBugReport } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc"

const Header = () => {
  let navigate = useNavigate();

  return (
    <header class="css-16euuc9">
      <h1 class="css-nedazh"><FcSearch/> IMAGE FORGERY DETECTION</h1>
      <div class="css-1h5u173">
        <div title="Toggle code editor" class="css-548piz">
          <FiHome style={{ margin: "10px" }} />
          <span
            class="css-gwiobj"
            onClick={() => {
              navigate(`/`);
            }}
          >
            Home
          </span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <FiInfo style={{ margin: "10px" }} />
          <span
            class="css-gwiobj"
            onClick={() => {
              navigate(`/about`);
            }}
          >
            About
          </span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <FiHelpCircle style={{ margin: "10px" }} />
          <span
            class="css-gwiobj"
            onClick={() => {
              navigate(`/help`);
            }}
          >
            Help
          </span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <MdBugReport style={{ margin: "10px" }} />
          <span
            class="css-gwiobj"
            onClick={() => {
              navigate(`/reportbug`);
            }}
          >
            Report Bug
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
