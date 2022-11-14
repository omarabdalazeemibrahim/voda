import React from "react";
import { Icon } from "@iconify/react";
const Header3 = () => {
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
        <a href="#">Shop</a>
      </li>

      <li className="hoverClass">
        {"  "}
        <a href="#">Support</a>
      </li>
      <li className="hoverClass">
        <a href="#">My Vodafone</a>
      </li>
      <ul className="header_style3">
        <li>
          <a className="vodafone_icon  " href="#">
            <Icon icon="cil:search" color="black" width="50" height="35" />
          </a>
        </li>
        <li>
          <a className="vodafone_icon  active" href="#">
            <Icon
              icon="carbon:shopping-cart"
              color="black"
              width="50"
              height="35"
            />
          </a>
        </li>
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

export default Header3;
