import React, { Component } from "react";
import * as C from "./styles";

interface props {
  margin: number;
  title: string;
  valor: JSX.Element
  icon: JSX.Element;
}

export const Card = (props: props) => {
  return (
    <C.Container margin={props.margin}>
      <C.Content>
        <C.Header>
          <C.Title>{props.title}</C.Title>
          <C.icon>{props.icon}</C.icon>
        </C.Header>
        <C.Total>
          <C.totalTitle> {props.valor} </C.totalTitle>
        </C.Total>
      </C.Content>
    </C.Container>
  );
};
