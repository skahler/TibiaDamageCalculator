import React, {useState} from 'react';
import MeleeDamage from './MeleeDamage';

const initialStats = {
    charLevel:0,
    wattack:0,
    skills:0
}

const Stats = () => {
    const [stats,setStats] = useState(initialStats)

    const handleChange = (e) => {
        setStats({
            ...stats,[e.target.name]:(e.target.value <= 0 ? 0 : e.target.value || e.target.value > 0 ? e.target.value.replace(/^0+/, '') : 0)
        });
    }

    return(
    <div>
        <label htmlFor="charLevel" >Level: </label>
        <input type="number" name="charLevel" value={stats.charLevel} onChange={handleChange}/>
        <label htmlFor="wattack" >Weapon Attack: </label>
        <input type="number" name="wattack" value={stats.wattack} onChange={handleChange}/>
        <label htmlFor="skills" >Skills: </label>
        <input type="number" name="skills" value={stats.skills} onChange={handleChange}/>

        <MeleeDamage charLevel={stats.charLevel} wattack={(6/5)*stats.wattack} skills={stats.skills} type="fullMode"/>
        <MeleeDamage charLevel={stats.charLevel} wattack={stats.wattack} skills={stats.skills} type="balancedMode"/>
        <MeleeDamage charLevel={stats.charLevel} wattack={((3/5)*stats.wattack)} skills={stats.skills} type="defensiveMode"/>
    </div>);
}

export default Stats; 