import { type } from "os";
import React, { useState } from "react";
import * as C from "./styles";

interface props {
  checked: boolean,
  onClick: Function,
  onChangeDescricao: Function,
  onChangeValor: Function
}

export const Controll : React.FC<props> = (props: props) => {
  return (
    <C.Container>
      <C.Content>
        <C.DivInput>
          <C.Div>
            <C.Title>Descrição</C.Title>
            <C.Input onChange={props.onChangeDescricao} type="text" />
          </C.Div>
          <C.Div>
            <C.Title>Valor</C.Title>
            <C.Input onChange={props.onChangeValor} type="number" />
          </C.Div>
        </C.DivInput>
        <C.DivRadio>
          <C.DivRadio>
            <C.Input onClick={props.onClick} id="RadioEntrada" name="RadioEntrada" checked={props.checked} type="radio" />
            <C.Label for="RadioEntrada" > Entrada </C.Label>
          </C.DivRadio>
          <C.DivRadio>
            <C.Input onClick={props.onClick} id="RadioSaida" name="RadioSaida" type="radio" checked={props.checked? false: true} />
            <C.Label for="RadioSaida"> Saida </C.Label>
          </C.DivRadio>
        </C.DivRadio>
        <C.Buttom> ADICIONAR </C.Buttom>
      </C.Content>
    </C.Container>
  );
};
