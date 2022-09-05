import React from "react";

const CurrencyBRL = (price: number) => {
  let newNumber = "";
  let currencyBRL: string = price
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    .replace(".", ".");
  newNumber = currencyBRL;
  return <>{newNumber}</>;
};

export default CurrencyBRL;
