const  newCall = async (url, valores)=> {
    try{
        const respuesta = await fetch(url, {
            method:"POST",
            body: JSON.stringify(valores),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const resultado = await respuesta.json()
        return resultado
    }catch{( err =>console.log(err))}
}

const editCall = async (url, valores)=>{
    try{
        const respuesta = await fetch(url, {
            method:"PUT",
            body: JSON.stringify(valores),
            headers:{
                "Content-Type": "application/json"
            }
        })
        const resultado = await respuesta.json()
        return resultado
    }catch{( err =>console.log(err))}
}
export {
    newCall,
    editCall
}