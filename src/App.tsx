import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Footer />
    </>
  );
}

export default App;
