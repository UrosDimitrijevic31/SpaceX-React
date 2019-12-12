import React, {useState, useEffect} from 'react'
import { getHeader } from '../utility/space-x-service';

const Header = (props) => {
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getHeader().then(data => {
            let heder = {
                name: data.name,
                founder: data.founder,
                ceo: data.ceo
            }
            setData(heder);
        })
    }, []);

    return (
        <header>
            <h1>{data.name}</h1>
            <div>Founder: {data.founder}</div>
            <div>CEO: {data.ceo}</div>
        </header>
    )
}
export default Header