import React from "react";
import { Icon } from "@iconify/react";

import "font-awesome/css/font-awesome.min.css";
const NewFooter = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            {" "}
            <span>Social</span>
            <div className="media-icons">
              <a href="">
                {" "}
                <Icon
                  icon="ic:baseline-facebook"
                  color="white"
                  width="30"
                  height="30"
                />
              </a>
              <a href="">
                <Icon icon="mdi:twitter" color="white" width="30" height="30" />
              </a>
              <a href="">
                <Icon
                  icon="mdi:instagram"
                  color="white"
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
          <div>
            <Icon
              icon="simple-icons:vodafone"
              color="white"
              width="50"
              height="65"
            />
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">About Vodafone</li>
            <li>About us</li>
            <li>Careers</li>
            <li>News and press releases</li>
            <li>Accesability</li>
            <li>Netwrok</li>
            <li>Complaints and code of Practice</li>
          </ul>
          <ul className="box">
            <li className="link_name">Support</li>
            <li>Help with Devices</li>
            <li>Home phone & broadband </li>
            <li>Lost and Stolen phone</li>
            <li>Internet security advice </li>
            <li>Roaming</li>
            <li>Smart tech</li>
          </ul>
          <ul className="box">
            <li className="link_name">Most popular phones</li>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Google</li>
            <li>Xiaomi</li>
            <li>Tcl</li>
          </ul>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Switch to Vodafone</li>
          </ul>
          <ul className="box">
            <li className="link_name">Find a store</li>
          </ul>
          <ul className="box">
            <li className="link_name">Switch to Business</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
