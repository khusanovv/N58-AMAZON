import React from 'react';
import { Link } from 'react-router-dom';
import c from "./MainCard.module.css";
import { v4 as uuidv4 } from 'uuid';

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  return (
    <div className={c.card}>
      <h2>{title}</h2>
      {
      cardImages ?
        <div>
           {
            cardImages.map(item => 
              <Link key={uuidv4()} to={item.link}>
                <img src={item.image} alt="" />
                <p>{item.subtitle}</p>
              </Link>  
            )
           }
        </div> : <img  src={image}/>
      }
      <Link to={linkURL}>{linkText}</Link>
    </div>
  )
}

export default MainCard