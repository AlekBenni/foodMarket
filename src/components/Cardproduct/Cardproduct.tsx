import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType, ParentType, ParentObjType } from '../../Redux/Redux'
import { NavLink, useParams } from 'react-router-dom'

function Cardproduct (){

    let { id, parent } = useParams<{id: string, parent:ParentType}>()

    let sweetCount = useSelector<AppStateType, Array<ParentObjType>>((state:AppStateType) => state[parent])

    let result = sweetCount.filter(count => count.id === id).map(item => {
        return (
    <div key={item.id}>
        <div className="row mb-3"> 
            <div className="col">  
                <img src={item.img} className="card-img-top " alt="..." />
            </div>
            <div className="col">  
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text mt-0 mb-0">Наличие: {item.availability? <i className="text-danger fas fa-check-circle"></i> : <i className="text-danger fas fa-times-circle"></i>}</p>              
                <p className="card-text mt-0 mb-3">Цена: {item.price} рублей</p>       
            </div>
        </div>

        <div className="alert alert-info" role="alert">
            {item.description}
        </div>
        <div className="alert alert-info" role="alert">
            {item.consist}
        </div>
    </div>    
        )
    })

    return (
        <>{result}
        <a href="javascript:history.back();">
            <button type="button" className="mb-3 btn btn-info">Вернуться Назад</button>
        </a></>)
}

export default Cardproduct