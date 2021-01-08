import React, {ChangeEvent, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppStateType} from '../../Redux/Redux'
import { addProductToPizzaReducer } from '../../Redux/PizzaReducer'
import { NavLink } from 'react-router-dom'

function Pizza (){

    let pizzaCount = useSelector((state:AppStateType) => 
    state.blockPizza)

    let resultPizzaCount = pizzaCount.map(item => {
        return (
            <div className="col mb-4">
            <div className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text mt-0 mb-0">Наличие: {item.availability? <i className="text-danger fas fa-check-circle"></i> : <i className="text-danger fas fa-times-circle"></i>}</p>              
                <p className="card-text mt-0 mb-3">Цена: {item.price}</p>
            <NavLink className="" to={`/cardproduct/${item.id}/${item.parent}`}>
                <button type="button" disabled={!item.availability} className="btn btn-info">Смотреть</button>
            </NavLink>
            </div>               
            </div>
        </div>
        )
    })

    let dispatchPizzaProduct = useDispatch()

    let [price, setPrice] = useState(0)
    let [title, setTitle] = useState('Введи название товара')
    let [images, setImages] = useState('Введи изображение')
    let [availability, setAvailability] = useState(true)
    let [description, setDescription] = useState('Введи описание товара')
    let [consist, setConsist] = useState('Введи состав товара')

    let addPrice = (e:ChangeEvent<HTMLInputElement>) => {
        let price = parseInt(e.currentTarget.value)
        setPrice(price)
    }

    let addTitle = (e:ChangeEvent<HTMLInputElement>) => {
        let title = e.currentTarget.value
        setTitle(title)
    }

    let addImages = (e:ChangeEvent<HTMLInputElement>) => {
        let images = e.currentTarget.value
        setImages(images)
    }

    let addAvailability = (e:ChangeEvent<HTMLInputElement>) => {
      let availability = e.currentTarget.checked
      setAvailability(availability)
    }

    let addDescription = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let description = e.currentTarget.value
      setDescription(description)
    }

    let addConsist = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let consist = e.currentTarget.value
      setConsist(consist)
    }

    let addSweetProduct = () => {  
        dispatchPizzaProduct(addProductToPizzaReducer(price, title, images, availability,
      description, consist
      ))
    }

    return (
        <>
        <div className="alert alert-info" role="alert">
            <h5>Все товары категории пицца:</h5>
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {resultPizzaCount}
        </div>

        <div className="alert alert-light text-right" role="alert">
            <button type="button"
            data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"
            className="btn btn-dark">Добавить</button>
        </div>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Добавление товара</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">

                    <input type="text"
                    value={images}
                    onChange={addImages}
                    className="form-control mt-2 mb-2" id="recipient-name" />

                    <input type="text"
                    value={title}
                    onChange={addTitle}
                    className="form-control mt-2 mb-2" id="recipient-name" />  

                    <input type="text"
                    value={price}
                    onChange={addPrice}
                    className="form-control" id="recipient-name" />

                    <label className="form-check-label" htmlFor="exampleCheck1">Есть ли в наличии:</label>
                    <input type="checkbox"
                    checked={availability}
                    onChange={addAvailability}
                    className="ml-2 form-check-input"/>

                  </div>
                  <div className="form-group">          
                    <textarea className="form-control"
                    value={description}
                    onChange={addDescription}
                    id="message-text"></textarea>
                  </div>

                  <div className="form-group">          
                    <textarea className="form-control"
                    value={consist}
                    onChange={addConsist}
                    id="message-text"></textarea>
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button"
                onClick={addSweetProduct}
                className="btn btn-primary">Send message</button>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}

export default Pizza