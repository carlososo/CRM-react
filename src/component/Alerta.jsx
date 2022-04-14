import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className='text-center bg-red-600 text-white font-bold p-3 uppercase'>
        {alerta}
    </div>
  )
}

export default Alerta