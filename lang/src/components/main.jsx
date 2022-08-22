import React from "react";
import Card from "./cards";
import { wordsen } from "./word";
import './main.scss';

const Main = () => {
    return (
        <main className="main">
            <Card english={wordsen[0].english} />
        </main>
    );
}

export default Main;