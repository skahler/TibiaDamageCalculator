import React from "react";
import Stats from "./Stats";

export function Formulario(){
    return(
        <>
            <h2>Damage Calculator: </h2>
            <h5>The result is the average damage You'll deal to a monster</h5>
            <Stats />
        </>
    );
}