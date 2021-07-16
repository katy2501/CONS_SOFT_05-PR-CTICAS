import { useState } from 'react'
// import foto from'../../componets/image/PicsArt_06-06-08.10.12.jpg'
import { useState } from "react"
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [color, setcolor] = useState(true)
    console.log(user)
    return (
        <div className="card">
            <img src={picture.large} className="card-img-top" alt={login.userName}/>
            <div className="card-body">
                <h5 className="card-title">{name.last}</h5>
                <button className={color ? "btn btn-primary" : "btn btn-light"} onClick= {() => setcolor(!color)}>Seguir</button>
            </div>
        </div>

    )
}
export default Cards
