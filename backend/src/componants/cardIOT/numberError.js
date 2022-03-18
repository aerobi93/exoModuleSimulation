import react from "react";

const NumberError  = ({typeError, message}) => (
  <div className='cardModule__error'>
    nombre de {message} :
    <span className={`cardModule__nberror ${typeError === 0 ? 'cardModule__nberror--green' :  'cardModule__nberror--red' }`}>
      {' ' + typeError}
    </span>
  </div>
)

export default NumberError;