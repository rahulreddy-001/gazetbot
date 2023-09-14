import React from "react";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Deals from "./components/Deals";
import Top from "./components/Top";

export default function Home() {
  return (
    <>
      <Menu />
      <Slider />
      <Deals />
      <Top />
    </>
  );
}
