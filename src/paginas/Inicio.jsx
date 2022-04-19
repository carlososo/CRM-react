import { useEffect, useState } from 'react'
import Cliente from '../component/Cliente'


const inicio = () => {

  const [clientes, setClientes] = useState([])

  useEffect(() => {
    const obtenerClientesApi = async () =>{
      try {
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch( url);
        const resultado = await respuesta.json()
        setClientes(resultado)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerClientesApi()
  }, [])

  const handleEliminarClientes = async (id) =>{
    console.log("Eliminando...");
    const confirmar = confirm("¿Deseas Eliminar a este cliente?")
    if(confirmar){
      try{
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url, {
          method:"DELETE",
          headers:{
              "Content-Type": "application/json"
          }
      })
      await respuesta.json()
      const filteredClientes = clientes.filter(cliente =>cliente.id !==id)
      setClientes(filteredClientes)
      }catch (error){
        console.log(error)  
      }
    }
  }
  
  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
    <p className='mt-10'>Administra tus clientes</p>

    <table className='w-full mt-5 table-auto shadow-md bg-white rounded-md' >
      <thead className='bg-blue-800 text-white'>
        <tr>
          <th className='p-2'>Nombre</th>
          <th className='p-2'>Contacto</th>
          <th className='p-2'>Empresa</th>
          <th className='p-2'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map( cliente => (
          <Cliente 
            key={cliente.id} 
            cliente={cliente}
            handleEliminarClientes={handleEliminarClientes}
          />
        ))}
      </tbody>
    </table>

</>
  )
}

export default inicio