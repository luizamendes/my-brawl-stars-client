import React, { useEffect } from "react";
import { SearchInput } from "../shared/SearchInput";
import { PageLayout } from "../shared/PageLayout";

export const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8000/player/id").then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    });
  }, []);

  return (
    <PageLayout>
      <SearchInput placeholder="Enter your player code" />
    </PageLayout>
  );
};
