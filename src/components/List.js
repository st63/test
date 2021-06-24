import React, { memo } from "react";
import { ListItem } from "./ListItem";

export const List = memo(function List(props) {
  return (
    <ul>
        {props.products.map(({id, name}) => {
          return <ListItem key={id}>{name}</ListItem>;
        })}
    </ul>
  )
});