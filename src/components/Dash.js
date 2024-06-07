import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../assets/cloud.png';
import today from '../assets/Today.png';
import chuva from '../assets/Type=cloud-rain-light.png';
import umidade from '../assets/Type=drop-light.png';
import termometro from '../assets/Type=thermometer-simple-light.png';
import vento from '../assets/Type=wind-light.png';
import './Dash.css'
import Card from './Card';

const Dash = ({localizacao, handleLocal}) => {

    const chave = 'a1aac202a64668472fff5a3689bc4c61';
    const [ data, setData ] = useState({
        temp: '', 
        tempMin: '',
        tempMax: '',
        sensacaoTerm: "",
        probChuva: "",
        veloVento: "",
        umidade: "",
        day: "",
        icons: ""
    });
    const [local, setLocal] = useState();
    const [temps, setTemps] = useState([]);
    const [icons, setIcons] = useState([]);
    const [day, setDay] = useState([]);

    setLocal({localizacao})

    const handleKey = (e) =>{
        handleLocal(local)
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${local}&lang=pt_br&appid=${chave}&units=metric`;
        console.log(local)
        fetch(url)
        .then((resposta) => {
            return resposta.json();
        })
        .then((dadoTemperatura) => {
            
            console.log(dadoTemperatura)
                var temperaturas = [];
                var icones = [];
                var dia = [];

                for(var i = 3; i <= 35; i+=8){
                    temperaturas.push((dadoTemperatura.list[i].main.temp % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[i].main.temp) + '°C' : Math.floor(dadoTemperatura.list[i].main.temp) + '°C' );

                    icones.push(`https://openweathermap.org/img/wn/${dadoTemperatura.list[i].weather[0].icon}@2x.png`)

                    let textDia = dadoTemperatura.list[i].dt_txt
                    dia.push(textDia.slice(5, 11))
                }

                setTemps(temperaturas);
                setIcons(icones);
                setDay(dia);

                let textDia = dadoTemperatura.list[0].dt_txt;

                setData({
                    temp: ((dadoTemperatura.list[0].main.temp % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp) + '°C'),

                    tempMin: ((dadoTemperatura.list[0].main.temp_min % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp_min) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp_min) + '°C'),

                    tempMax: ((dadoTemperatura.list[0].main.temp_max % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.temp_max) + '°C' : Math.floor(dadoTemperatura.list[0].main.temp_max) + '°C'),

                    sensacaoTerm: ((dadoTemperatura.list[0].main.feels_like % 1) >= 0.5 ? Math.ceil(dadoTemperatura.list[0].main.feels_like) + '°C' : Math.floor(dadoTemperatura.list[0].main.feels_like) + '°C'),

                    probChuva: (dadoTemperatura.list[0].pop + "%"),

                    veloVento: (Math.ceil(dadoTemperatura.list[0].wind.speed * 10) + "km/h"),
                    
                    umidade: ((dadoTemperatura.list[0].main.humidity) + "%"),

                    day: (textDia.slice(5, 11)),

                    icons: (`https://openweathermap.org/img/wn/${dadoTemperatura.list[0].weather[0].icon}@2x.png`)
                    
                })

                console.log(data.temp, data.tempMax, data.tempMin)
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
            <Card cidade={local} data={data.day} temp={data.temp} tempMax={data.tempMax} tempMin={data.tempMin} icones={data.icons}/>
        </div>

        <div className="localDetalhes">
            <div className="detalhes">
                <h3>Detalhes do clima hoje</h3>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={termometro} alt="" />
                        Sensação térmica
                    </p>
                    <p className='infoDois'>
                        {data.sensacaoTerm}
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={chuva} alt="" />
                        Probabilidade de chuva
                    </p>
                    <p className='infoDois'>
                        {data.probChuva}
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={vento} alt="" />
                        Velocidade do vento
                    </p>
                    <p className='infoDois'>
                        {data.veloVento}
                    </p>
                </div>

                <div className="linhaDetalhe">
                    <p className='infoUm'>
                        <img src={umidade} alt="" />
                        Umidade do ar
                    </p>
                    <p className='infoDois'>
                        {data.umidade}
                    </p>
                </div>

            </div>

            <div className="proximosDias">
                <h3>Previsão para 5 dias</h3>

                <div className="itens">
                    <div className="tempsFut">
                        {temps.map((temp, index) =>
                            <h3 key={index}>{temp}</h3>
                        )}
                    </div>

                    <div className="iconsFut">
                        {icons.map((icon, index) =>
                            <img className='iconesFuturos' key={index} src={icon}/>
                        )}
                    </div>

                    <div className="daysFut">
                        {day.map((days, index) =>
                            <h3 key={index}>{days}</h3>
                        )}
                    </div>
                    
            </div>
            </div>
        </div>
    </div>
    
)
}

export default Dash