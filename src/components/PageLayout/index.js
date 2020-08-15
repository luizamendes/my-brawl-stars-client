import React from "react";
import styled from "styled-components";

const Content = styled.main`
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "Open Sans";
`;

export const PageLayout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};
