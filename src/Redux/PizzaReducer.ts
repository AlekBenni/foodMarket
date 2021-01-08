import { v1 } from "uuid"

const ADD_PRODUCT_TO_PIZZA_REDUCER = 'ADD-PRODUCT-TO-PIZZA-REDUCER'

type addProductToPizzaType = {
    type: 'ADD-PRODUCT-TO-PIZZA-REDUCER'
    price: number
    title: string
    images: string
    availability: boolean
    description: string
    consist: string
}


type ActionType = addProductToPizzaType

let initialState = [
    {id: v1(), title: 'Гавайская', availability: true, price: 120, parent: 'blockPizza',
    img: "https://cdn22.img.ria.ru/images/98976/61/989766135_0:100:2000:1233_600x0_80_0_0_6d6bae20fceb464509076685137302b6.jpg",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    },
    {id: v1(), title: 'Моцарелла', availability: false, price: 150,  parent: 'blockPizza',
    img: "https://academy.oetker.ru/upload/iblock/195/19519a82c8131d46d8e7a4718fb7e2d2.png",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    },   
    {id: v1(), title: 'Четыре сыра', availability: true, price: 130,  parent: 'blockPizza',
    img: "https://www.patee.ru/r/x6/0d/22/88/960m.jpg",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    },  
    {id: v1(), title: 'Особая', availability: true, price: 160, parent: 'blockPizza',
    img: "https://diamondbar.ru/image/cache//catalog/picca-32sm/picca_hot-dog-1200x800.jpg",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    },  
    {id: v1(), title: 'Лепёшка простая', availability: true, price: 30.25, parent: 'blockPizza',
    img: "https://ic.pics.livejournal.com/rebro_a_dama/38047746/372398/372398_900.jpg",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    }, 
    {id: v1(), title: 'Диетическая', availability: true, price: 158, parent: 'blockPizza',
    img: "https://www.delonghi.com/Global/recipes/multifry/3.jpg",
    description: 'Lorem ipsum dollor',
    consist: 'тесто для пиццы, соус томатный, сыр Моцарелла для пиццы, помидоры, базилик зелёный, масло оливковое'
    }
]


const PizzaReducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case ADD_PRODUCT_TO_PIZZA_REDUCER:{
            let newProduct = {
                id: v1(),
                title: action.title,
                availability: action.availability,
                price: action.price,
                img: action.images,
                description: action.description,
                consist: action.consist,
                parent: 'blockPizza'
            }
            let stateCopy = [...state]
            stateCopy.push(newProduct)
            return stateCopy
        }
    }
    return state
}

export const addProductToPizzaReducer = (price: number, title:string, images: string,
    availability: boolean, description:string, consist:string):addProductToPizzaType => ({
        type:ADD_PRODUCT_TO_PIZZA_REDUCER, 
        price, title, images, availability, description, consist
    })

export default PizzaReducer