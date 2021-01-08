import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar (){
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">FoodStore</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Главная <span className="sr-only">(current)</span></a>
      </li>
       <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Жратва
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

        <NavLink className="dropdown-item" to="/pizza">Пицца</NavLink>
        <NavLink className="dropdown-item" to="/sendwich">Сэндвич</NavLink>
        <NavLink className="dropdown-item" to="/salat">Салат</NavLink>
        <NavLink className="dropdown-item" to="/vodka">Водяра</NavLink>
        <NavLink className="dropdown-item" to="/icecream">Мороженное</NavLink>
        <NavLink className="dropdown-item" to="/sweet">Конфеты</NavLink>
          {/* <div className="dropdown-divider"></div> */}

        </div>
      </li>     
      <li className="nav-item">
        <a className="nav-link" href="#">Доставка</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Оплата</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    )
}

export default Navbar