import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import './styles.scss';

import NumberError from "./numberError";

const CardModule = () => {
  const [DataM, setDataM] = useState()
  const [IOTstate, setIOTState] = useState(Boolean)

  useEffect(() => {
    fetch('http://localhost:4000/IOT')
        .then((result) => result.json())
        .then((result) => {
            setDataM(result)
        })
  }, [IOTstate])

  const ChangeStateModule = (id, state) => {
    const changePower = {
      power : !state
    }
    const params = {
      method: 'PATCH',
      headers: {
       'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify(changePower)
    }
    fetch(`http://localhost:4000/IOT/update/${id}`, params)
    .then(() => setIOTState(!IOTstate))
  }

  const deleteIOT = (id) => {
    const confirm = window.confirm( 'voulez vous suprimes ce module')
    if (confirm) {
      const params = {
        method: 'DELETE',
          headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }
      }
      fetch(`http://localhost:4000/IOT/delete/${id}`, params)
      .then(() => {
        alert('le module a bien ete suprime')
        setIOTState(!IOTstate)

      })
    }
  
  }
  return (
    <div className="cardModule">
      {DataM &&  
        <>
          {
            DataM.map((data) => {
              let nbrestart = 0
              let nbSurcharge = 0
              data.logs.map((log) => {
                if (log.restart) {
                  nbrestart += 1
                }
                if (log.surcharge) {
                  nbSurcharge+= 1
                } 
              })
              const lastResut = data.measures.slice(0, 1)
              const typeMeasure = data.type_measures.value
              return (
              <div className="cardModule__card" key = {data.id}>
                <h2 className="cardModule__name">{data.name}</h2>
                <div 
                  className='cardModule__delete' onClick={() =>deleteIOT(data.id)} />
                <div 
                  className={`cardModule__onOff ${data.power ? 'cardModule__onOff--on' : 'cardModule__onOff--off' }`} 
                  onClick={() =>ChangeStateModule(data.id, data.power)} />
                    {lastResut.map((data)=> (
                      <div className="cardModule__lastValueContainer" key={data.id}>
                        <div className="cardModule__lastValue" > derniere mesure : 
                            {' ' + data.value + ' ' + typeMeasure }
                          </div>
                          <span className="cardModule__lastValueDate" >
                            date :  {' ' + data.date}
                          </span>
                        </div>
                    ))}
                <NumberError typeError={nbrestart} message={'redemarage automatique'} />
                <NumberError typeError={nbSurcharge}message={'ou  le seuil  a été dépassé'} />
                <div className="cardModule__etat">etat  : 
                  <span className={`cardModule__power ${data.power ?  'cardModule__power--green': 'cardModule__power--red'} `}>
                    {data.power ?  'allumé': 'eteint' }
                  </span> 
                </div>
                {(data.logs.length > 0 || data.measures.length > 0) && <Link to={`/logs/${data.id}`} className="cardModule__detail"> + detail</Link>}
                {(data.logs.length == 0 && data.measures.length == 0) && <div className="cardModule__noLog">  pas de logs pour ce module</div>}
             
              </div>
            
            )})
          }
        </>}
      
    </div>
  )
}
export default CardModule