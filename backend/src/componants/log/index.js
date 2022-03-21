import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './styles.scss'


const Logs = () => {
  
  const navigate = useNavigate()
  const { id } = useParams()
  const [logState, setLogState] = useState() 
  const [nameM, setNameM] = useState() 
  const [changeState, setChangeState] = useState(Boolean) 

 
  setInterval(() => {
    setChangeState(!changeState)
  }, 1000 * 60 * 2);
  useEffect(() => {
    let url = 'http://localhost:4000/IOT'
    if (id) {
      url += `/${id}`
    }
    fetch(url)
      .then((result) => result.json())
      .then((result) => {

        const sort = (array) => {
          let newSort = array.sort((a, b) => {
            if (a.date < b.date) {
              return -1
            }
            if (a.date > b.date) {
              return 1
            }
          })
          return newSort
        }

        if(!id) {
          let allLog = []
          result.map((newResult) => {
            if (newResult.logs.length > 0) {
              allLog.push(...newResult.logs)
            }
            if (newResult.measures.length > 0) {
              allLog.push(...newResult.measures)
            }
            setLogState(sort(allLog))  
         })
        }
        if(id) {
          let allLog = [
            ...result.logs,
            ...result.measures
          ]
          setLogState(sort(allLog))
          setNameM(result.name)
        }
       })

  }, [changeState]) 
  const deleteU = (id, value) => {
    const params = {
      method: 'DELETE',
        headers: {
      'Content-Type': 'application/json;charset=utf-8'
      }
    }
    const confirm = window.confirm( 'voulez vous suprimes ces donnee')
    if (confirm) {
      if (value && id) {
        fetch(`http://localhost:4000/measure/delete/${id}`, params)
        .then(
          alert('les donnéé ont ete efface'),
          setChangeState(!changeState)
        )
      }
      else if (!value && id) {
        fetch(`http://localhost:4000/log/delete/${id}`, params)
        .then(
          alert('les donnéé ont ete efface'),
          setChangeState(!changeState)
        )
      }
    }
  }

  const deleteMAny = (id) => {
    const confirm = window.confirm( 'voulez vous suprimes ces donnee')
    if (confirm) {
      const params = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      let urlLog = 'http://localhost:4000/log/delete'
      let urlmeasure = 'http://localhost:4000/measure/delete'
      if (id) {
        urlLog+= `/module/${id}`
        urlmeasure+= `/module/${id}`
      }
      fetch(urlLog, params)
      .then(
        fetch(urlmeasure, params)
          .then(
            alert('les logs ont bien ete suprimme'),
            navigate('/')
            
          )
      )
    }
  }
  return (
      <div className="log">
        <button className="log__alldelete" onClick={() => deleteMAny(id)}>
          suprimer la totalite des logs {id ? 'associer au module' + ' ' + nameM  : 'de tous les modules'}
        </button>
        <div className="log__container">
          {logState && 
            logState.map((log) => {
              let message
              let varian 
              if (log.dysfunction) {
                message = 'erreur de fonctionnement'
                varian = 'red'
              }
              else if (log.surcharge) {
                message = 'depassemement des limites de mesure'
                varian='red'
              }
              else if (log.restart) {
                message = 'redemarage'
                varian='green'
              }
              else if (log.value) {  
                message = 'valeur prise: ' + log.value
                varian='green'
              }
              return (
            <div className="log__detail" key={log.id}>
              <time className="log__date">date : {log.date}</time>
              <span className={`log__message log__message--${varian}`}> {message}</span>
              <button className="log__delete" onClick={() => deleteU(log.id, log.value)}/> 
            </div>
            )
            })
          }
        </div>
    </div>
  )
}
export default Logs;