import React,{useState,useEffect} from "react";

const DistanceDamage = ({charLevel,wattack,skills,type}) => {
    const [damage,setDamage] = useState(0)

    useEffect(() => {
        let dmg = Math.round(0.09*wattack*skills+(charLevel/5));
        setDamage(dmg);  
    },[charLevel,wattack,skills])

    return(
        <div>
            {type === "fullMode" ? <h3 style={type === "fullMode" ? {color:"#BA4A00"} : {}}>Offesive Mode Damage(Distance)</h3> : "" }
            {type === "balancedMode" ? <h3 style={type === "balancedMode" ? {color:"#F4D03F"} : {}}>Balanced Mode Damage(Distance)</h3> : "" }
            {type === "defensiveMode" ? <h3 style={type === "defensiveMode" ? {color:"#2ECC71"} : {}}>Defensive Mode Damage(Distance)</h3> : ""}
            <h4>{Math.round(charLevel/5)}-{damage}</h4>
        </div>
    );
}

export default DistanceDamage;