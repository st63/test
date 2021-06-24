import React, { memo } from "react";

export const ListItem = memo(function ListItem({ children }) {
  console.count("render list item");
  return (
    <li>
      {children}
      <label style={{ fontSize: "smaller" }}>
        <input type="checkbox" />
        Add to cart
      </label>
    </li>
  );
});