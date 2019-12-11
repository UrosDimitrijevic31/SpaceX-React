const SPACEX_API = 'https://api.spacexdata.com/v3';
const LAUNCES_PAST = '/launches/past'; 
const LAUNCHES_UPCOMING = '/launches/upcoming';
const ROADSTER = '/roadster';
const COMPANYINFO = '/info';

export function getPastLaunches(){
    return fetch(`${SPACEX_API}${LAUNCES_PAST}`).then(res => res.json());
}

export function getUpcomingLaunches(){
    return fetch(`${SPACEX_API}${LAUNCHES_UPCOMING}`).then(res => res.json());
}

export function getFooter(){
    return fetch(`${SPACEX_API}${ROADSTER}`).then(res => res.json());
}

export function getHeader(){
    return fetch(`${SPACEX_API}${COMPANYINFO}`).then(res => res.json());
}