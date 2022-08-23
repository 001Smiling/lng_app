import React from "react";
import Card from "./cards";
import Button from "./button";
import { wordsen } from "./word";
import './main.scss';

const Main = () => {
    return (
        <main className="main">
            <Card english={wordsen[0].english} />
            <Button  />
        </main>
    );
}

export default Main;