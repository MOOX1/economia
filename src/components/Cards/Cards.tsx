import React from "react";
import * as C from "./styles";
import { Card } from "./Card/Card";
import { iconEntrada, iconSaida, iconTotal } from "../../../public/icons";

export const Cards = () => {
  return (
    <C.Container>
      <C.Content>
        <Card title="Entrada" margin={-50} icon={iconEntrada} />
        <Card title="Saida" margin={10} icon={iconSaida} />
        <Card title="Total" margin={10} icon={iconTotal} />
      </C.Content>
    </C.Container>
  );
};
