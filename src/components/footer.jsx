
import React, { useState, useEffect } from 'react';
import { getFooter } from '../utility/space-x-service';

const Footer = (props) =>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        getFooter().then(data => {
            let footer ={
                name: data.name,
                orbit_type: data.orbit_type,
                details: data.details
            }
            setData(footer);
        })
    }, [])
    return(
        <footer>
            <p>Name: {data.name}</p>
            <p>Orbit-type: {data.orbit_type}</p>
            <p>Details: {data.details}</p>
        </footer>
    )    
}
export default Footer
