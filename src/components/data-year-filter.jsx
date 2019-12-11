import React from 'react';
import { fillYearsToArray,fillFutureYearsToArray } from "../utility/date-utility";

const DataYearFilter = (props) => {

    let { handleChange } = props;

    let years = fillYearsToArray();
    return (
        <select id="year-filter" onChange={handleChange}>
            {years.map(x => { return <option value={x}>{x}</option> })}
        </select>

    );
}
const DatafutureYearFilter = (props) => {

    let { handleChange } = props;

    let years = fillFutureYearsToArray();
    return (
        <select id="year-filter" onChange={handleChange}>
            {years.map(x => { return <option value={x}>{x}</option> })}
        </select>

    );
}


export {DataYearFilter,DatafutureYearFilter}