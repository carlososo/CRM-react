import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from '../component/Spinner'


const VerCliente = () => {
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)
  const {id} = useParams();
  const {nombre, empresa, mail, telefono, notas} = cliente

  useEffect(() => {
    const obtenerClientesApi = async ()=>{
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch( url );
        const resultado = await respuesta.json();
        setCliente(resultado)
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando)

    }
    obtenerClientesApi()
  }, [])
  
  return (
    cargando ?
      (  
       <Spinner />
      ): Object.keys(cliente).length===0 ? <p>No hay Resultados</p>:(
      <div>
          <h1 className='font-black text-4xl text-blue-900'>Ver Cliente</h1>
          <p className='mt-10'>Muestra la información del cliente seleccionado</p>

        <section className="my-0 mx-auto" >
          {nombre && (
            <p className="text-gray-600 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold">Nombre:</span>
              {nombre}
            </p>
          )}
          {empresa && (
            <p className="text-gray-600 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold">Empresa:</span>
              {empresa}
            </p>
          )}
          {mail && (
            <p className="text-gray-600 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold">E-mail:</span>
              {mail}
            </p>
          )}
          {telefono && (
            <p className="text-gray-600 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold">Telefono:</span>
              {telefono}
            </p>
          )}
          {notas && (
            <p className="text-gray-600 mt-4 text-2xl">
              <span className="text-gray-700 uppercase font-bold">Notas:</span>
              {notas}
            </p>
          )}
        </section>
      </div>
    )
  )
}

export default VerCliente