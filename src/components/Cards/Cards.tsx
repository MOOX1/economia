import React from "react";
import * as C from "./styles";
import { Card } from "./Card/Card";
import { iconEntrada, iconSaida, iconTotal } from "../../../public/icons";

interface props {
  valorEntrada: number
  valorSaida: number
  valorTotal: number
}

export const Cards = (props: props) => {
  return (
    <C.Container>
      <C.Content>
        <Card valor={props.valorEntrada}  title="Entrada" margin={-50} icon={iconEntrada} />
        <Card valor={props.valorSaida} title="Saida" margin={10} icon={iconSaida} />
        <Card valor={props.valorTotal} title="Total" margin={10} icon={iconTotal} />
      </C.Content>
    </C.Container>
  );
};
