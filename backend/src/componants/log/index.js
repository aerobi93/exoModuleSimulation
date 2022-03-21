import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles.scss'

const Logs = () => {
  const { id } = useParams()
  const [logState, setLogState] = useState() 
  const [nameM, setNameM] = useState() 
  const [changeState, setChangeState] = useState(Boolean) 

  
  useEffect(() => {
    let url = 'http://localhost:4000/IOT'
    if (id) {
      url += `/${id}`
    }
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(result)
        const {logs, measures, name} = result
       let  allLogs =[
          ...logs,
          ...measures,
       ]
       let sort = allLogs.sort((a, b) => {
         if (a.date < b.date) {
           return -1
         }
         if (a.date > b.date) {
           return 1
         }
       })
       setLogState(sort)
       setNameM(result.name)
      })

  }, [changeState]) 

  const handlerClick = (id, value) => {
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

  return (
      <div className="log">
        <button className="log__alldelete">suprimer la totalite des logs {id ? 'associer au module' + ' ' + nameM  : 'de tous les modules'}</button>
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
            <div className="log__detail" key={log.date}>
              <time className="log__date">date : {log.date}</time>
              <span className={`log__message log__message--${varian}`}> {message}</span>
              <button className="log__delete" onClick={() => handlerClick(log.id, log.value)}/> 
            </div>
            )
            })
          }
        </div>
    </div>
  )
}
export default Logs;