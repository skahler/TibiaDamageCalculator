import React, {useState,useEffect} from 'react';

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
        <h2>Damage Calculator: </h2>
            <h5>The result is the average damage You'll deal to a monster</h5>
            <label htmlFor="charLevel" >Level: </label>
            <input type="number" name="charLevel" value={stats.charLevel} onChange={handleChange}/>
            <label htmlFor="wattack" >Weapon Attack: </label>
            <input type="number" name="wattack" value={stats.wattack} onChange={handleChange}/>
            <label htmlFor="skills" >Skills: </label>
            <input type="number" name="skills" value={stats.skills} onChange={handleChange}/>
    </div>);
}

export default Stats; 