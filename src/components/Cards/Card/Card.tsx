import React, { Component } from "react";
import * as C from "./styles";

export const Card = (props: { margin: number; title: string; icon: any }) => {
  return (
    <C.Container margin={props.margin}>
      <C.Content>
        <C.Header>
          <C.Title>{props.title}</C.Title>
          <C.icon>{props.icon}</C.icon>
        </C.Header>
        <C.Total>
          <C.totalTitle> 1000 </C.totalTitle>
        </C.Total>
      </C.Content>
    </C.Container>
  );
};
