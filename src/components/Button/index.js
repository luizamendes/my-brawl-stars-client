import React from "react";
import "./index.scss";

export const Button = ({ text, kind, ...props }) => (
  <button className="primary-button" {...props}>
    {text}
  </button>
);
