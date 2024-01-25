
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
          <h3>Mateicos</h3>
      </Link>
        <div>
            <NavLink to={`/category/mates`} className={({ isActive}) ? 'ActiveOption' : 'Option'}> </NavLink>
            <NavLink to={`/category/termos`} className={({ isActive}) ? 'ActiveOption' : 'Option'}></NavLink>
            
        </div>
        <CartWidget/>
    </nav>
   
  )
}

export default NavBar