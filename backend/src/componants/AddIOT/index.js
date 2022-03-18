import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

import './styles.scss';

const AddIOT = () => {
  let navigate  = useNavigate()
  const [typeMeasure, setTypeMeasure] = useState()
  const [IDmesasure, setIDmesure] = useState()
  const [newValue, setNewValue] = useState(String)
  const [newValueType, setNewValueType] = useState(String)
  const [displaytypeForm, setDisplaytypeForm] = useState(Boolean)
  useEffect(() => {
    fetch('http://localhost:4000/type_measure')
      .then((result) => result.json())
      .then((result) => {
        setTypeMeasure(result)
      })
  }, [])

  useEffect(() => {
    if (IDmesasure == "add") {
      console.log('change')
      setDisplaytypeForm(!displaytypeForm)
    }
  }, [IDmesasure])

  const params = {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json;charset=utf-8'
   },
  }



  const handlerSubmit= (evt) => {
    evt.preventDefault();
    if (newValue &&  IDmesasure != '' & IDmesasure != "add") {
      let sendAddIOT = {
        name : newValue,
        typeMeasure_id : +IDmesasure
      }
      let paramsIOT = {
        ...params,
        body: JSON.stringify(sendAddIOT)
      }
    fetch('http://localhost:4000/IOT/add', paramsIOT)
      .then((result)=> {
        navigate('/')
        alert('type ajouter, vous pouvez ajouter un module avec ce type juste en tapant le nom du module ')
        }
      )
    }
  }

  const SubmitType = (evt) => {
    evt.preventDefault()
    if (newValueType) {
      let length = typeMeasure.length
      const lastId = typeMeasure[length - 1].id;
      let sendAddType = {
        value : newValueType
      }
      let paramsType= {
        ...params, 
        body: JSON.stringify(sendAddType)
      }
      fetch('http://localhost:4000/type_measure/add', paramsType)
      .then(()=> {
        setIDmesure(lastId + 1)
       alert('type ajouter et associcier automatique, veiller juste enter un nom de Module et l ajouter')
       setDisplaytypeForm(!displaytypeForm)
      })
      }
  }
  return (
    <div className="addIOT">
      <form className="addIOT__form" onSubmit={(evt) => handlerSubmit(evt)}>
        <input 
          type='text' className="addIOT__input" 
          placeholder="ajouter un nom de module"  
          value= {newValue} onChange={(evt) =>setNewValue(evt.target.value)}
        />
        <select className="addIOT__select"    onChange={(evt) => setIDmesure(evt.target.value)}>
          <option className="addIOT__option" value=''> type de mesure </option>
          {typeMeasure && typeMeasure.map((mesure) => (
            <option 
              className="addIOT__option" 
              value={mesure.id}
              onChange={() => setIDmesure(1)}> 
                {mesure.value}
            </option>
          ))}
            <option className="addIOT__option addIOT__option--add" value='add' > ajouter une nouvel mesure </option>
        </select>
          <button type='submit' className="addIOT__submit"> ajouter</button>
      </form>
        { displaytypeForm && 
          <form className="addIOT__form" onSubmit={(evt) => SubmitType(evt)}>
            <span className="addIOT__textAddType"> ajouter un type de mesasure</span>
              <input 
                  type='text' className="addIOT__input addIOT__input--type" 
                  placeholder="ajoute un type de mesure"  
                  value= {newValueType} onChange={(evt) =>setNewValueType(evt.target.value)}
                />  
              <button type='submit' className="addIOT__submit addIOT__submit--type "> ajouter</button>
          </form>
        }
    
    </div>
  
  )
}

export default AddIOT