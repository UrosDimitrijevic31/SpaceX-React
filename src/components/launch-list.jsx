import React from 'react';
import Launch from './launch';


//has attribute data, with array that uses for display
const LaunchList = (props) => {
    let {data} = props; 
    console.log(data);
    
    return(
        <launchlist>
            {data.map(x =>{return <Launch launch = {x} key={x.flight_number}/>})}        
        </launchlist>
    );
} 

export default LaunchList;