import React from 'react';
import getSerbianDate from '../utility/date-utility'

//has atribute launch
const Launch = (props) => {
    let {launch} = props; //destruktuiranje objekta, iz objekta props(po defaultu) izvlacimo launch
    
    let {
        mission_name: m_name, 
        //launch_year: l_year,
        launch_date_utc: l_date,
        rocket: {rocket_name: r_name},
        links: {mission_patch: m_patch}
    
    } = launch; //sa desne str znaka jednako iz cega izvlacimo pdoatke, sa leve sta izvlacimo
    
    let date = new Date(l_date);
    
    return(
        <launch>
            <img src={m_patch} className={'mission_logo'} alt=''/>
            <label>{m_name} - </label>
            <label>{r_name} - </label>
            <label>{getSerbianDate(date)}</label>   
        </launch>

    );
} 

export default Launch;