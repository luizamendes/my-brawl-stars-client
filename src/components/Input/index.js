import React from "react";
import "./index.scss";

export const Input = ({ text, kind, ...props }) => (
  <input class="brawl-input" {...props} />
);
