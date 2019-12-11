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
            <p>Founder: {data.founder}</p>
            <p>CEO: {data.ceo}</p>
        </header>
    )
}
export default Header