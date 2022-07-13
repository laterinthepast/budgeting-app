import React from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/home.css";



const list= [
    {name:"home", path:"/"},
    {name:"login", path:"/login"},
    {name:"budget", path:"/budget"}
]


const Home = () => {
    const menu= list.map(item=>(
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return (
        <div>
             <nav>
            <ul>
               {menu}
            </ul>
           </nav>  
        </div>
           
        

    )
}

export default Home