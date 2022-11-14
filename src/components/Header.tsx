import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header4 from "../components/Header4";
import Header3 from "../components/Header3";

type HeaderType = "personal" | "business";

const Header = () => {
  const [currentTab, setCurrentTab] = useState<HeaderType>("personal");
  //when we select the tab => highlight it  => add className => let us name it  selected
  //then we target this class with css li a selected {color:red}
  return (
    <>
      <ul className="header_style">
        <li className={currentTab === "personal" ? "selected" : ""}>
          <a
            onClick={() => {
              setCurrentTab("personal");
            }}
          >
            Personal
          </a>
        </li>
        <li className={currentTab === "business" ? "selected" : ""}>
          <a
            onClick={() => {
              setCurrentTab("business");
            }}
          >
            Business
          </a>
        </li>
      </ul>
      {currentTab === "personal" ? <Header3 /> : null}
      {currentTab === "business" ? <Header4 /> : null}
    </>
  );
};
export default Header;
