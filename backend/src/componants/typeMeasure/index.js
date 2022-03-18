import React, { useEffect, useState } from "react";
import './styles.scss';

const TypeMeasure = () => {
    const [typeMeasure, setTypeMeasure] = useState()
    const [change, setchange] = useState(Boolean)
    useEffect(() => {
        fetch('http://localhost:4000/type_measure')
            .then((result) => result.json())
            .then((result) => setTypeMeasure(result))
    }, [change])
  const handlerClick= (id) => {
    const confirm = window.confirm( 'voulez vous suprimer ce module')
    if (confirm) {
      const params = {
        method: 'DELETE',
          headers: {
        'Content-Type': 'application/json;charset=utf-8'
        }
      }
      fetch(`http://localhost:4000/type_measure/delete/${id}`, params)
      .then(() => {
        alert('le type de mesure a bien ete suprime')
        setchange(!change)

      })
    }
  
}
  return (
    <div className="type">
      {typeMeasure && typeMeasure.map((type) => (
        <div className="type__flex" key={type.id}>
          <span className="type__name"> {type.value} </span>
          <span className="type__delete" onClick={()=> handlerClick(type.id)} />
      </div>
    ))}
     </div>   
    )
}

export default TypeMeasure