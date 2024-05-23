import React from 'react'
import { useState } from 'react'
import './Search.css'
import logo from '../assets/cloud.png';

const Search = () => {
    const chave = 'a1aac202a64668472fff5a3689bc4c61';
const [temp, setTemp] = useState();
const [tempMin, setTempMin] = useState();
const [tempMax, setTempMax] = useState();
const [local, setLocal] = useState();
const callApi = () => {

    // e.preventDefault();

const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&appid=${chave}&units=metric`;
    console.log('vai chamar uma api de temperatura')
    console.log(local)
    fetch(url)
    .then((resposta) => {
        return resposta.json();
    })
        .then((dadoTemperatura) => {
            setTemp((dadoTemperatura.main.temp % 1) >= 0.5 ? Math.ceil(dadoTemperatura.main.temp) + '°C' : Math.floor(dadoTemperatura.main.temp) + '°C')
            setTempMin((dadoTemperatura.main.temp_min % 1) >= 0.5 ? Math.ceil(dadoTemperatura.main.temp_min) + '°C' : Math.floor(dadoTemperatura.main.temp_min) + '°C')
            setTempMax((dadoTemperatura.main.temp_max % 1) >= 0.5 ? Math.ceil(dadoTemperatura.main.temp_max) + '°C' : Math.floor(dadoTemperatura.main.temp_max) + '°C')
            console.log(dadoTemperatura.main.temp)
            console.log(dadoTemperatura.main.temp_min)
            console.log(dadoTemperatura.main.temp_max)

        })
        .catch(() =>{
            alert('Cidade não encontrada')
        })
        
}


const handleKey = (e) =>{
    if(e.key === 'Enter'){
        callApi()
    }
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
            onKeyPress={handleKey}
            onChange={(e) => setLocal(e.target.value)} type="text"/>
        </div>
        
        
    </div>
)
}

export default Search