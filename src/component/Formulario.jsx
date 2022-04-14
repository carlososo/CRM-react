import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import Alerta from './Alerta'
import * as Yup from 'yup'

const Formulario = () => {
    const navigate = useNavigate()
    const handleSubmit = async (valores, resetForm)=>{
          try {
              const url = "http://localhost:4000/clientes"

              const respuesta = await fetch(url, {
                  method:"POST",
                  body: JSON.stringify(valores),
                  headers:{
                      "Content-Type": "application/json"
                  }
              })
              
              const resultado = await respuesta.json()
              if (resultado){
                  resetForm()
                  navigate("/clientes")
                }
              
          } catch (error) {
              console.log(error);
          }
    }
    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(40, 'El nombre es muy largo')
                    .required('El nombre del cliente es obligatorio.'),
        empresa:Yup.string()
                    .required("El nombre de la empresa es obligatorio"),
        mail:Yup.string()
                .email('El formato no es valido')
                .required('El email es obligatorio'),
        telefono:Yup.number()
                    .integer('Número no válido')
                    .positive('Número no válido')
                    .typeError('El numero no es válido')
    })

  return (
    <div className='bg-white mt-10 px-5 py-10 rounderd-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
        <Formik
            initialValues={{
                nombre:"",
                empresa:"",
                mail:"",
                telefono:"",
                notas:""
            }}
            onSubmit={(values, {resetForm})=>handleSubmit(values, resetForm)}
            validationSchema ={nuevoClienteSchema}
        >
            {({errors, touched})=>{
                return(
            <Form 
                className='mt-10'    
            >
                <div 
                    className='mb-4'
                >
                    <label 
                        className='text-gray-800'
                        htmlFor="nombre"

                        >Nombre:</label>
                    <Field 
                        id="nombre"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Nombre Del Cliente"
                        name="nombre"
                    />
                    {errors.nombre && touched.nombre && <Alerta alerta={errors.nombre}/>}
                </div>
                <div 
                    className='mb-4'
                >
                    <label 
                        className='text-gray-800'
                        htmlFor="empresa"

                        >Empresa:</label>
                    <Field 
                        id="empresa"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Empresa Del Cliente"
                        name="empresa"
                    />
                    {errors.empresa && touched.empresa && <Alerta alerta={errors.empresa}/>}
                </div>
                <div 
                    className='mb-4'
                >
                    <label 
                        className='text-gray-800'
                        htmlFor="email"

                        >Email:</label>
                    <Field 
                        id="email"
                        type="email"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Email Del Cliente"
                        name="mail"
                    />
                    {errors.mail && touched.mail && <Alerta alerta={errors.mail}/>}
                </div>
                <div 
                    className='mb-4'
                >
                    <label 
                        className='text-gray-800'
                        htmlFor="telefono"

                        >Telefono:</label>
                    <Field 
                        id="telefono"
                        type="tel"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Teléfono Del Cliente"
                        name="telefono"
                    />
                    {errors.telefono && touched.telefono && <Alerta alerta={errors.telefono}/>}
                </div>
                <div 
                    className='mb-4'
                >
                    <label 
                        className='text-gray-800'
                        htmlFor="notas"
                        >Notas:</label>
                    <Field
                        as="textarea" 
                        id="nombre"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50 h-40"
                        placeholder="Notas Del Cliente"
                        name="notas"
                    />
                </div>
                <input 
                    type="submit"
                    value="Agregar Cliente"
                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                />  
            </Form>
            )}}
        </Formik>
    </div>
  )
}

export default Formulario