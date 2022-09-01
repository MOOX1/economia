import React from "react";
import * as C from "./styles"
import { Card } from "./Card/Card";

export const Cards = () => {

    return (
        <C.Container>
            <Card/>
            <Card/>
            <Card/>
        </C.Container>
    )

}