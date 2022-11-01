import React from "react";
import "./Header.css";
import { FiHome, FiHelpCircle, FiInfo } from "react-icons/fi";
import { MdBugReport } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";

const Header = () => {
  return (
    <header class="css-16euuc9">
      {/* <BsCardImage/> */}
      <h1 class="css-nedazh">IMAGE FORGERY DETECTION</h1>
      <div class="css-1h5u173">
        <div title="Toggle code editor" class="css-548piz">
          <FiHome style={{ margin: "10px" }} />
          <span class="css-gwiobj">Home</span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <FiInfo style={{ margin: "10px" }} />
          <span class="css-gwiobj">About</span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <FiHelpCircle style={{ margin: "10px" }} />
          <span class="css-gwiobj">Help</span>
        </div>
        <div title="Toggle preview" class="css-548piz">
          <MdBugReport style={{ margin: "10px" }} />
          <span class="css-gwiobj">Report Bug</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
