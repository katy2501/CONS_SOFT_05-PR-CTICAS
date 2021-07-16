import Cards from './Cards'
//import celebridades from '../../helpers/usuarios'
import React, { useEffect, useState} from 'react'

const ListCards= () => {
    const [celebridades, setcelebridades] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        const etusuarios = async() => {
            try{
                 const res = await fetch("https://randomuser.me/api/?results=70")
                 const data = res.json()
                 setcelebridades(data.results)
                 setError(false)
             }catch(err) {
               console.log(err)
               setError(true)
            }
             }
             getUsuario()
         }, [])
    if (error){
        return <h1 class="alert alert-success" role="alert">
                  Error al ingresar al api <a href="https://randomuser.me" class="alert-link">Verifique el link</a>
               </h1>
    }
    return (
        <div className="container">
         <div className="row">
         { usuarios.map(user => (
             <div className="col-md-4" key={user.login.uuid}>
                  <Cards user={user}/>
            </div>
         ))}
                 
             </div>
         </div>

    )
}
export default ListCards
