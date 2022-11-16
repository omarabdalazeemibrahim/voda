import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import NewFooter from "./components/NewFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <NewFooter />
    </>
  );
}

export default App;
