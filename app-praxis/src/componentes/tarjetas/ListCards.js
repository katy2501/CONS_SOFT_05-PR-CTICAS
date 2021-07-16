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
        }, []}
    )
    // console.log(celebridades[0].name.last)
    return (
        <div className="container">
            <div className="row">
            { celebridades.map(users => (
                <div className="col-sm-6 col-nd-4 col-lg-3" key={users.login.uuid}>
                    <Cards user={user}/>
                </div>
            ))
            }
            </div>
        </div>
    ) 
}
export default ListCards
