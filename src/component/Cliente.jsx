
import { useNavigate } from "react-router-dom"
const Cliente = ({cliente, handleEliminarClientes}) => {
    const navigate = useNavigate()

    const {nombre,empresa, email, telefono, notas, id} = cliente
  return (
      <tr className='hover:bg-gray-200 border-b'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p> <span className='text-gray-800 uppercase font-bold'>Email:</span>{email}</p>
            <p> <span className='text-gray-800 uppercase font-bold'>Tel:</span>{telefono}</p>
        </td>
        <td className='p-3'>{empresa}</td>
        <td className='p-3'>
            <button 
                className='bg-yellow-500 hover:bg-yellow-600 block 
                        text-white uppercase w-full font-bold text-xs p-1 mt-3'
                onClick={()=>{navigate(`/clientes/${id}`)}}
            >
                Ver
            </button>
            <button 
                className='bg-blue-600 hover:bg-blue-700 block 
                        text-white uppercase w-full font-bold text-xs p-1 mt-3'
                        onClick={()=>navigate(`editar/${id}`)}
            >
                Editar
            </button>
            <button 
                className='bg-red-600 hover:bg-red-700 block 
                        text-white uppercase w-full font-bold text-xs mt-3 p-1'
                        onClick={()=>handleEliminarClientes(id)}
            >
                Eliminar
            </button>
        </td>
      </tr>
  )
}

export default Cliente