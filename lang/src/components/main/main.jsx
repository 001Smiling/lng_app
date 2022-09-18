import React from "react";
import Card from "../cardwords/cardcontainer";
import Button from "../cardwords/button";
import Table from "../allwords/allwords";
import './main.scss';

const Main = () => {
    return (
        <main className="main">
            <Card />
            <Button  />
            <Table  />
        </main>
    );
}

export default Main;