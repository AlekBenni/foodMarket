import React from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../Redux/Redux'

function Vodka (){

    let vodkaCount = useSelector((state:AppStateType) => state.blockVodka)

    let resultVodkaCount = vodkaCount.map(item => {
        return (
        <div className="col mb-4">
            <div className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text mt-0 mb-0">Наличие: {item.availability? <i className="text-danger fas fa-check-circle"></i> : <i className="text-danger fas fa-times-circle"></i>}</p>              
                <p className="card-text mt-0 mb-3">Цена: {item.price}</p>
            <button type="button" disabled={!item.availability} className="btn btn-info">Смотреть</button>
            </div>               
            </div>
        </div>
        )
    })

    return (
        <>
        <div className="alert alert-info" role="alert">
            <h5>Все товары категории водка:</h5>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {resultVodkaCount}
        </div>
        </>
    )
}

export default Vodka