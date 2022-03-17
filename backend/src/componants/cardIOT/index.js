import React, { useEffect, useState } from "react";
import './styles.scss';

const CardModule = () => {
  const [DataM, setDataM] = useState()

  useEffect(() => {
    fetch('http://localhost:4000/IOT')
        .then((result) => result.json())
        .then((result) => {
            setDataM(result)
        })
  }, [])
  const handlerClick =(evt) => {
    
  }
  return (
    <div className="cardModule">
      {DataM &&  
        <>
          {
            DataM.map((data) => (
              <div className="cardModule__card">
                <h2 className="cardModule__name">{data.name}</h2>
                <span className="cardModule__update">derniere mise a jour : {data.update_at}</span>
                <div className="cardModule__etat">etat  : 
                  <span className={`cardModule__power ${data.power ?  'cardModule__power--green': 'cardModule__power--red'} `}>
                    {data.power ?  'allumé': 'eteint' }
                  </span> 
                </div>
                <button onClick={(evt)=> handlerClick(evt) } className="cardModule__detail"> + detail</button>
              </div>
            
            ))
          }
        </>}
    </div>
  )
}
export default CardModule