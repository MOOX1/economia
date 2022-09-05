import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/Cards/Cards";
import { Controll } from "../../components/Controll/Controll";
import { List } from "../../components/List/List";
import CurrencyBRL from "../../components/currencyBRL/currencyBRL";

interface item {
  descricao: string;
  valor: number;
  id: number;
}

interface data {
  entradas: Array<item>;
  saidas: Array<item>;
}

const Home = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [valorEntrada, setValorEntrada] = useState<number>(0);
  const [valorSaida, setValorSaida] = useState<number>(0.0);
  const [valorTotal, setValorTotal] = useState<number>(0.0);
  const [descricao, setDescricao] = useState<string>("");
  const [data, setData] = useState<data>();
  const [valor, setValor] = useState<number>();

  const PegandoDados = () => {
    fetch("http://localhost:3001")
      .then((Response) => Response.json())
      .then((Response) => {
        let totalEntradas = 0;
        Response.data.entradas?.map((item) => {
          var t = item.valor + totalEntradas;
          totalEntradas = t;
        });
        setValorEntrada(totalEntradas);

        let totalSaidas = 0;
        Response.data.saidas.map((item) => {
          var t = item.valor + totalSaidas;
          totalSaidas = t;
        });
        setValorSaida(totalSaidas);

        setValorTotal(totalEntradas - totalSaidas);
        setData(Response.data);
      });
  };

  useEffect(() => {
    PegandoDados();
  }, []);

  const AdicionarDados = () => {
    const tipo = isChecked ? "entradas" : "saidas";
    fetch(
      `http://localhost:3001/?descricao=${descricao}&valor=${valor}&tipo=${tipo}`
    ).then(() => PegandoDados());
  };

  const HandleRadio = () => {
    if (isChecked == false) {
      setIsChecked(true);
    } else if (isChecked == true) {
      setIsChecked(false);
    }
  };

  const ApagarDado = (id: number) => {
    const tipo = isChecked ? "entradas" : "saidas";
    fetch(`http://localhost:3001/?id=${id}&tipo=${tipo}&del=1`).then(() =>
      PegandoDados()
    );
  };

  const handleDescricao = (e: string) => {
    setDescricao(e);
  };

  const handleValor = (e: number) => {
    let ei = e.toLocaleString().replace(".", "").replace(".","").replace(".", "").replace(",",".")
    
    setValor(Number(ei))
    console.log(Number(ei))
  };

  return (
    <>
      <Header />
      <Cards
        valorTotal={valorTotal}
        valorSaida={valorSaida}
        valorEntrada={valorEntrada}
      />
      <Controll
        value={valor}
        adicionar={() => AdicionarDados()}
        onChangeValor={(e: any) => handleValor(e.target.value)}
        onChangeDescricao={(e: any) => handleDescricao(e.target.value)}
        checked={isChecked}
        onClick={() => HandleRadio()}
      />
      <List apagar={(e: number) => ApagarDado(e)} data={data} />
    </>
  );
};

export default Home;
