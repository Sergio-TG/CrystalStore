import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-violet sticky-top" id="botonera">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html">
      <img src="./public/logocs.svg" id="logo" alt="logo de la tienda Crystal Store"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">  
          <li className="nav-item">
            <a className="nav-link" href="#">Promociones</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Cristales</a></li>
              <li><a className="dropdown-item" href="#">Gemas</a></li>
              <li><a className="dropdown-item" href="#">Piedras</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#">Joyas</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
    <CartWidget />
  </nav>
     
  );
}
export default NavBar;