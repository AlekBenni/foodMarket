import React from 'react'

function Stock(){
    return(
        <div className="card mb-3">
            <img src="https://www.obradoval.ru/resources/fotogr/2011_12/6cd9a3c699d5958_main_foto460.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Продуктовые наборы</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" className="btn btn-info">Смотреть</button>
            </div>
        </div>
    )
}

export default Stock