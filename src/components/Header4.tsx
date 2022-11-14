import React from "react";
import { Icon } from "@iconify/react";
const Header4 = () => {
  return (
    <ul className="header_style2">
      <li>
        <a className="vodafone_icon " href="#">
          <Icon
            icon="simple-icons:vodafone"
            color="red"
            width="50"
            height="45"
          />
        </a>
      </li>
      <li className="hoverClass">
        <a href="#">Mobile</a>
      </li>

      <li className="hoverClass">
        {"  "}
        <a href="#">Broadband</a>
      </li>
      <li className="hoverClass">
        <a href="#">Business Apps</a>
      </li>
      <li className="hoverClass">
        <a href="#">Solutions</a>
      </li>
      <li className="hoverClass">
        <a href="#">Discover </a>
      </li>
      <li className="hoverClass">
        <a href="#">Support </a>
      </li>
      <ul className="header_style3">
        <li>
          <a className="vodafone_icon  active" href="#">
            <Icon
              icon="iconoir:profile-circled"
              color="black"
              width="50"
              height="45"
            />
          </a>
        </li>
      </ul>
    </ul>
  );
};

export default Header4;
