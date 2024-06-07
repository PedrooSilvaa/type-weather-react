import React from 'react'
import './Card.css';


const Card = ({ cidade, data, temp, tempMax, tempMin, icones }) => {
  return (
    <div className="containerCard">
        <div className="headerCard">
            <h2>{cidade}</h2>
            <h3>{data}</h3>
        </div>
        <div className="footerCard">
            <h1>
                {temp}
                <span>{tempMax} / {tempMin}</span>
            </h1>
            <img src={icones} alt="icone" />
            
        </div>
    </div>
  )
}

export default Card