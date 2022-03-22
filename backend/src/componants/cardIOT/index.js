import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import './styles.scss';

import NumberError from "./numberError";
import { DatePesonalise } from "../../utils";
import { MutatingDots } from "react-loader-spinner";

const CardModule = () => {
  const [DataM, setDataM] = useState()
  const [IOTstate, setIOTState] = useState(Boolean)
  setInterval(() => {
    setIOTState(!IOTstate)
  }, 1000 * 60 * 2)

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
    const confirm = window.confirm( 'voulez vous suprimez ce module')
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
      {!DataM && 
        <div className="cardModule__loading">
          <MutatingDots
            className = 'log__l'
            type="Spinner Type"
            color="rgb(7, 190, 223)"
            height={150}
            width={150}
            timeout={1000}
        />
      </div>   
      }
      {DataM &&  
        <>
          {
            DataM.map((data) => {              
            let update_at = DatePesonalise(data.update_at)
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
                          <div className="cardModule__lastValueDate" >
                            date :  {' ' + DatePesonalise(data.date)}
                          </div>
                        </div>
                    ))}
                <NumberError typeError={nbrestart} message={'redemarage automatique'} />
                <NumberError typeError={nbSurcharge}message={'fois ou le seuil  a été dépassé'} />
                <div className="cardModule__etat">etat  : 
                  <span className={`cardModule__power ${data.power ?  'cardModule__power--green': 'cardModule__power--red'} `}>
                    {data.power ?  'allumé': 'eteint' }
                  </span> 
                </div>
                {(data.logs.length > 0 || data.measures.length > 0) && <Link to={`/logs/${data.id}`} className="cardModule__detail"> + detail</Link>}
                {(data.logs.length == 0 && data.measures.length == 0) && <div className="cardModule__noLog">  pas de logs pour ce module</div>}
                      <div className="cardModule__update"> {update_at}</div>
              </div>
            
            )})
          }
        </>}
      
    </div>
  )
}
export default CardModule