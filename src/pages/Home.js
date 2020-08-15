import React, { useEffect } from "react";
import { PageLayout } from "../components/PageLayout";
import { SearchBox } from "../components/SearchBox";
import image from "../images/brawl-stars-logo.png";
import "./index.scss";

export const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8000/player/id").then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    });
  }, []);

  return (
    <>
      <PageLayout>
        <img className="brawl-stars-logo" src={image} alt="brawl-stars-logo" />
        <SearchBox />
      </PageLayout>
    </>
  );
};
