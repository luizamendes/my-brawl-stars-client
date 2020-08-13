import React from "react";
import styled from "styled-components";

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;
  /* padding: 0 16px; */
  box-sizing: border-box;
  font-family: "Open Sans";
  /* h1,
  h2,
  h3,
  h5,
  h6 {
    font-family: "Kaushan Script";
  } */
`;

export const PageLayout = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};
