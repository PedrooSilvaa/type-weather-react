import React from 'react'
import logo from '../assets/cloud.png';
import today from '../assets/Today.png';
import './Dash.css'

const Dash = () => {
return (
        
    <div className="containerDash">
        <div className="localCard">
            <div className="pesquisa">
                <img src={logo} alt="logo" />
                <input type="text" placeholder='Buscar local'/>
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
                    <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span><span>32°c</span> 26°c</span>
                    </h3>
                    <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span><span>32°c</span> 26°c</span>
                    </h3>
                    <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span><span>32°c</span> 26°c</span>
                    </h3>
                    <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span><span>32°c</span> 26°c</span>
                    </h3>
                    <h3>
                        Amanhã
                        <img src={logo} alt="" />
                        <span>Temporal</span>
                        <span><span>32°c</span> 26°c</span>
                    </h3>
            </div>
            </div>
        </div>
    </div>
    
)
}

export default Dash