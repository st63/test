import React, { memo } from "react";

export const Button = memo(function Button(props) {
  console.count("render button");
  return <button {...props} style={{ backgroundColor: "lightgray" }} />;
}, () => true);