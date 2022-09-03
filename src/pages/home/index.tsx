import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/Cards/Cards";
import { Controll } from "../../components/Controll/Controll";

const Home = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [valorEntrada, setValorEntrada] = useState<number>(0.0);
  const [valorSaida, setValorSaida] = useState<number>(0.0);
  const [valorTotal, setValorTotal] = useState<number>(0.0);
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<number>(0);

  const PegandoDados = () => {
    fetch("http://localhost:3001")
      .then((Response) => Response.json())
      .then((Response) => {
        setValorEntrada(Response.data.entradas[0].valor);
        setValorSaida(Response.data.saidas[0].valor);
        setValorTotal(Response.data.entradas[0].valor - Response.data.saidas[0].valor);
      });

  }

  useEffect(() => {
    PegandoDados()
  }, []);
  
  const HandleRadio = () => {
    if (isChecked == false) {
      setIsChecked(true);
    } else if (isChecked == true) {
      setIsChecked(false);
    }
  };

  const handleDescricao = (e: string) => {
    setDescricao(e);
  };

  const handleValor = (e: number) => {
    setValor(e);
  };

  const Adicionar = () => {
    fetch("http://localhost:3001")
    .then((Response) => Response.json())
    .then((Response) => console.log(Response));
  }

  return (
    <>
      <Header />
      <Cards
        valorTotal={valorTotal}
        valorSaida={valorSaida}
        valorEntrada={valorEntrada}
      />
      <Controll
        onChangeValor={(e : any) => handleValor(e.target.value)}
        onChangeDescricao={(e : any) => handleDescricao(e.target.value)}
        checked={isChecked}
        onClick={() => HandleRadio()}
      />
    </>
  );
};

export default Home;
