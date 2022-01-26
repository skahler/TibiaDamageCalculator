import React, {useState} from 'react';
import MeleeDamage from './MeleeDamage';
import DistanceDamage from './DistanceDamage';
import '../index.css';

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
        <div className='stats'>
            <label htmlFor="charLevel" >Level: </label>
            <input type="number" name="charLevel" value={stats.charLevel} onChange={handleChange} style={{width:"50px", marginRight:"2rem"}}/>
            <label htmlFor="wattack" >Weapon Attack: </label>
            <input type="number" name="wattack" value={stats.wattack} onChange={handleChange} style={{width:"50px", marginRight:"2rem"}}/>
            <label htmlFor="skills" >Skills: </label>
            <input type="number" name="skills" value={stats.skills} onChange={handleChange} style={{width:"50px", marginRight:"2rem"}}/>
        </div>

        <div className="results">
            <MeleeDamage charLevel={stats.charLevel} wattack={(6/5)*stats.wattack} skills={stats.skills} type="fullMode"/>
            <MeleeDamage charLevel={stats.charLevel} wattack={stats.wattack} skills={stats.skills} type="balancedMode"/>
            <MeleeDamage charLevel={stats.charLevel} wattack={((3/5)*stats.wattack)} skills={stats.skills} type="defensiveMode"/>
        </div>
        
        <div className="results">
            <DistanceDamage charLevel={stats.charLevel} wattack={stats.wattack} skills={stats.skills} type="fullMode"/>
            <DistanceDamage charLevel={stats.charLevel} wattack={0.75*stats.wattack} skills={stats.skills} type="balancedMode"/>
            <DistanceDamage charLevel={stats.charLevel} wattack={0.5*stats.wattack} skills={stats.skills} type="defensiveMode"/>
        </div>     
    </div>);
}

export default Stats; 