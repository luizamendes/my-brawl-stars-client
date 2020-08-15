import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./index.scss";

export const SearchBox = () => (
  <div className="search-box">
    <Input placeholder="Enter your player code" />
    <Button type="button" text="search" />
  </div>
);
