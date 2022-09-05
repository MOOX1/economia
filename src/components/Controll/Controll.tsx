import { type } from "os";
import React, { useState } from "react";
import * as C from "./styles";
import CurrencyBRL from "../currencyBRL/currencyBRL"
import MaskedInput from "react-text-mask"
import CurrencyMask from "../../../public/Mask/currencyMask"

interface props {
  checked: boolean,
  onClick: Function,
  onChangeDescricao: Function,
  onChangeValor: any,
  adicionar: Function,
  value: string
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
            <MaskedInput  mask={CurrencyMask}  value={props.value} onChange={props.onChangeValor}   />
          </C.Div>
        </C.DivInput>
        <C.DivRadio>
          <C.DivRadio>
            <C.Input onChange={props.onClick} id="RadioEntrada" name="RadioEntrada" checked={props.checked} type="radio" />
            <C.Label for="RadioEntrada" > Entrada </C.Label>
          </C.DivRadio>
          <C.DivRadio>
            <C.Input onChange={props.onClick} id="RadioSaida" name="RadioSaida" type="radio" checked={props.checked? false: true} />
            <C.Label for="RadioSaida"> Saida </C.Label>
          </C.DivRadio>
        </C.DivRadio>
        <C.Buttom onClick={props.adicionar}> ADICIONAR </C.Buttom>
      </C.Content>
    </C.Container>
  );
};
