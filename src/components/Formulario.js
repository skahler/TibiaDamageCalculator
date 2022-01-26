import React, {useState,useEffect} from "react";
import "../index.css"
import Stats from "./Stats";

export function Formulario(){
    const [charLevel,setCharLevel] = useState(0);
    const [wattack,setWattack] = useState(0);
    const [skills,setSkills] = useState(0);
    const [offDamage,setOffDamage] = useState(0);
    const [balDamage,setBalDamage] = useState(0);
    const [defDamage,setDefDamage] = useState(0);
    const [offDistance,setOffDistance] = useState(0);
    const [balDistance,setBalDistance] = useState(0);
    const [defDistance,setDefDistance] = useState(0);

    let myStyle = {
        width:"2.5rem", 
        marginRight:"2rem",
    }

    useEffect(()=>{
        setOffDamage((charLevel/5)+(6/5*wattack)*(skills+4)/28);
        setBalDamage((charLevel/5)+(wattack*(skills+4)/28));
        setDefDamage((charLevel/5)+(3/5*wattack)*(skills+4)/28);
        setOffDistance(0.09*1*skills*wattack+(charLevel/5));
        setBalDistance(0.09*0.75*skills*wattack+(charLevel/5));
        setDefDistance(0.09*0.5*skills*wattack+(charLevel/5));
    },[charLevel,wattack,skills])

    return(
        <>
            <Stats />
            <div className="columna">
                <h3 className="Offensive"> Offensive Mode Damage(Melee): </h3>
                <h4 className="Offensive">{Math.round(offDamage)}</h4>
                <h3 className="Offensive">Offensive Mode Damage(Distance): </h3>
                <h4 className="Offensive">{Math.round(charLevel/5)} - {Math.round(offDistance)}</h4> 
            </div>
            <div className="columna">
                <h3 className="Balanced">Balance Mode Damage(Melee): </h3>
                <h4 className="Balanced">{Math.round(balDamage)}</h4>
                <h3 className="Balanced">Balance Mode Damage(Distance): </h3>
                <h4 className="Balanced">{Math.round(charLevel/5)} - {Math.round(balDistance)}</h4>
            </div>
            <div className="columna">
                <h3 className="Defensive">Defensive Mode Damage(Melee): </h3>
                <h4 className="Defensive">{Math.round(defDamage)}</h4>
                <h3 className="Defensive">Defensive Mode Damage(Distance): </h3>
                <h4 className="Defensive">{Math.round(charLevel/5)} - {Math.round(defDistance)}</h4>
            </div>
        </>
    );
}