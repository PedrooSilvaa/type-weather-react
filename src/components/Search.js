import React from 'react'
import { useState } from 'react'
import './Search.css'
import logo from '../assets/cloud.png';

const Search = ({handleLocal}) => {

const [local, setLocal] = useState();


const handleKey = (e) =>{
    handleLocal(local)
}
return (
    <div className='container'>
        <div className="headerSearch">
            <img src={logo} alt="" />
            <h1>TypeWeather</h1>
        </div>
        
        <div className="mainSearch">
            <h1>Boas vindas ao <span> TypeWeather </span></h1>
            <p>Escolha um local para ver a previsão do tempo</p>
            <input 
            placeholder='Buscar local'
            onChange={(e) => setLocal(e.target.value)} type="text"/>
            <button onClick={handleKey}>Buscar</button>
        </div>
        
        
    </div>
)
}

export default Search