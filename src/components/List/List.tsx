import { sign } from "crypto";
import React, { useEffect, useState } from "react";
import * as C from "./style";
import { iconEntradaGreen, iconSaidaRed, lixo } from "../../../public/icons";
import CurrencyBRL from "../../components/currencyBRL/currencyBRL"

interface item {
  descricao: string;
  valor: number 
  id: number;
}
interface data {
  entradas: Array<item>;
  saidas: Array<item>;
}

export const List = (props: { data: data; apagar: Function }) => {
  const [entradas, setEntradas] = useState<Array<item>>();
  const [saidas, setSaidas] = useState<Array<item>>();
  useEffect(() => {
    setEntradas(props.data?.entradas);
    setSaidas(props.data?.saidas);
  }, [props]);
  return (
    <C.Container>
      <C.Content>
        <C.TitleUl>
          <C.Li>Descrição</C.Li>
          <C.Li className="valor">Valor</C.Li>
          <C.Li>Tipo</C.Li>
          <C.Li>Deletar</C.Li>
        </C.TitleUl>
        {saidas?.map((item: item, index: number) => (
          <C.Ul key={index}>
            <C.Li>{item.descricao}</C.Li>
            <C.Li className="valor">{CurrencyBRL(item.valor)}</C.Li>
            <C.Li>{iconSaidaRed}</C.Li>
            <C.Li onClick={() => props.apagar(item.id)}> {lixo}</C.Li>
          </C.Ul>
        ))}
        {entradas?.map((item: item, index: number) => (
          <C.Ul key={index}>
            <C.Li>{item.descricao}</C.Li>
            <C.Li className="valor">{CurrencyBRL(item.valor)}</C.Li>
            <C.Li>{iconEntradaGreen}</C.Li>
            <C.Li onClick={() => props.apagar(item.id)}> {lixo} </C.Li>
          </C.Ul>
        ))}
      </C.Content>
    </C.Container>
  );
};
