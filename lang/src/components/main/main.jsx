import React from "react";
import Card from "../cardwords/cardword";
import Button from "../cardwords/button";
import Table from "../allwords/allwords";
import { wordsen } from "../data/word1";
import './main.scss';

const Main = () => {
    return (
        <main className="main">
            <Card 
            english={wordsen[0].english}
            transcription={wordsen[0].transcription}
            russian={wordsen[0].russian}
            />
            <Button  />
            <Table  />
        </main>
    );
}

export default Main;