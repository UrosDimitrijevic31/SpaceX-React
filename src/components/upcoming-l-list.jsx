import React, { useState, useEffect } from 'react';
import LaunchList from './launch-list';
import {DatafutureYearFilter} from './data-year-filter';
import { fillFutureYearsToArray } from '../utility/date-utility'
import { getUpcomingLaunches } from '../utility/space-x-service';




const UpcomingLList = (props)=>{
    const [data, setData] = useState([]);
    const [displayData,setDisplayData]= useState(data)
    

    useEffect(() => {
        getUpcomingLaunches().then(data => {
            setData(data);
            setDisplayData(data);
        })
    }, []);

    const handleChange=(e)=>{
        console.log(e.target.value);
        setDisplayData(data.filter(x=>{return x.launch_year===e.target.value}));
    }
    return (
        <>
        <DatafutureYearFilter handleChange={handleChange} fillFutureYearsToArray={fillFutureYearsToArray}/>
        <LaunchList data={displayData}/>
        </>
    );
}

export default UpcomingLList;