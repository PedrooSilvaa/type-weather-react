import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../assets/cloud.png';
import today from '../assets/Today.png';
import './Dash.css'

const Dash = ({localizacao, handleLocal}) => {

    const chave = 'a1aac202a64668472fff5a3689bc4c61';
    const [temp, setTemp] = useState();
    const [tempMin, setTempMin] = useState();
    const [tempMax, setTempMax] = useState();
    
    const [local, setLocal] = useState({localizacao});

    const handleKey = (e) =>{
        handleLocal(local)
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=S%C3%A3o%20Paulo&lang=pt_br&appid=a1aac202a64668472fff5a3689bc4c61&units=metric`;
        console.log(local)
        fetch(url)
        .then((resposta) => {
            return resposta.json();
        })
            .then((dadoTemperatura) => {
                setTemp((dadoTemperatura.list[0].main.temp % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp) + '°C')
                setTempMin((dadoTemperatura.list[0].main.temp_min % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp_min) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp_min) + '°C')
                setTempMax((dadoTemperatura.list[0].main.temp_max % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp_max) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp_max) + '°C')
                console.log(dadoTemperatura.list[3])
                console.log(dadoTemperatura.list[11])
                console.log(dadoTemperatura.list[35])
            })
            .catch(() =>{
                alert('Cidade não encontrada')
            })
    }

useEffect(() => {
    handleKey();
}, []);
    

return (
        
    <div className="containerDash">
        <div className="localCard">
            <div className="pesquisa">
                <img src={logo} alt="logo" />
                <input placeholder='Buscar local'
            onChange={(e) => setLocal(e.target.value)} type="text"/>
            <button onClick={handleKey}>Buscar</button>
            </div>
            <img src={today} alt="" className="climaHoje" />
        </div>

        <div className="localDetalhes">
            <div className="detalhes">
                <h3>Detalhes do clima hoje</h3>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={logo} alt="" />
                        Sensação térmica
                    </p>
                    <p className='infoDois'>
                        26°c
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={logo} alt="" />
                        Probabilidade de chuva
                    </p>
                    <p className='infoDois'>
                        26°c
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={logo} alt="" />
                        Velocidade do vento
                    </p>
                    <p className='infoDois'>
                        26°c
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={logo} alt="" />
                        Umidade do ar
                    </p>
                    <p className='infoDois'>
                        26°c
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={logo} alt="" />
                        Índice UV
                    </p>
                    <p className='infoDois'>
                        26°c
                    </p>
                </div>
            </div>

            <div className="proximosDias">
                <h3>Previsão para 5 dias</h3>

                <div className="itens">
                    {/* Parei por aqui, pegar codigo do lapa */}
                    {/* {for (let i = 0; i <= 35; i + 8) {
                        <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span> 26°c</span>
                    </h3>
                    }} */}
                    
            </div>
            </div>
        </div>
    </div>
    
)
}

export default Dash