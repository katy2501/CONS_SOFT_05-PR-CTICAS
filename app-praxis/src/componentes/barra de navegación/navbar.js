import { useState } from "react"
const Navbar = () => { 
    const[user, setUser] = useState(null)
    const login = () => {
      setUser({id:1,nombre:'Lbarcoc2'})
    }
    const logaut = () => {
      setUser(null)
    }
    return(
      <nav className="Navbar Navbar-light bg-success bg-gradient">
            <div className="container-fluid">
              <span className="navbar-brand mb-0  fs-4 text-white">User:{user ? user.nombre : 'No Autentificado'}</span>
              { user ? (<button type="button" class="btn btn-outline-light" onClick = {logaut}>Cerrar Seccion</button>) : (<button type="button" class="btn btn-outline-light" onClick = {login}>Iniciar Seccion</button>)}
            </div>
      </nav>
    )
}
export default Navbar
