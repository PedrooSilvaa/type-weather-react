import React from 'react'
import logo from '../assets/cloud.png';
import './Dash.css'

const Dash = () => {
return (
    <div className='container'>
        <div className="localCard">
            <div className="pesquisa">
                <img src={logo} alt="logo" />
                <input type="text" placeholder='Buscar local'/>
            </div>
        </div>
    </div>
)
}

export default Dash