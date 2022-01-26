import React,{useState,useEffect} from "react";

const Damage = ({charLevel,wattack,skills,type}) => {
    const [damage,setDamage] = useState(0)

    /*
    useEffect(()=>{
        setOffDamage((charLevel/5)+(6/5*wattack)*(skills+4)/28);
        setBalDamage((charLevel/5)+(wattack*(skills+4)/28));
        setDefDamage((charLevel/5)+(3/5*wattack)*(skills+4)/28);
        setOffDistance(0.09*1*skills*wattack+(charLevel/5));
        setBalDistance(0.09*0.75*skills*wattack+(charLevel/5));
        setDefDistance(0.09*0.5*skills*wattack+(charLevel/5));
    },[charLevel,wattack,skills])
*/

    useEffect(() => {
        let dmg = Math.round((charLevel/5)+(wattack*((Number(skills)+4)/28)));
        setDamage(dmg);
        
    },[charLevel,wattack,skills])

    return(
        <div>
            {type === "fullMode" ? <h3>Offesive Mode Damage(Melee)</h3> : "" }
            {type === "balancedMode" ? <h3>Balanced Mode Damage(Melee)</h3> : "" }
            {type === "defensiveMode" ? <h3>Defensive Mode Damage(Melee)</h3> : ""}
            <h4 className="Offensive">{damage}</h4>
        </div>
    );
}

export default Damage;