import React from "react";
import * as C from "./styles";

export const Controll = () => {
  return (
    <C.Container>
      <C.Content>
        <C.DivInput>
          <C.Div>
            <C.Title>Descrição</C.Title>
            <C.Input type="text" />
          </C.Div>
          <C.Div>
            <C.Title>Valor</C.Title>
            <C.Input type="number" />
          </C.Div>
        </C.DivInput>
        <C.DivRadio>
          <C.DivRadio>
            <C.Input type="radio" />
            <C.Title> Entrada </C.Title>
          </C.DivRadio>
          <C.DivRadio>
            <C.Input type="radio" />
            <C.Title> Saida </C.Title>
          </C.DivRadio>
        </C.DivRadio>
        <C.Buttom> ADICIONAR </C.Buttom>
      </C.Content>
    </C.Container>
  );
};
