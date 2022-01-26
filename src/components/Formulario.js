import React from "react";
import Stats from "./Stats";

export function Formulario(){
    return(
        <>
            <h1 className="tittle">Damage Calculator: </h1>
            <h5>The result is the average damage You'll deal to a monster</h5>
            <Stats />
        </>
    );
}