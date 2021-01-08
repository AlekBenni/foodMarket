import { type } from 'os';
import { v1 } from "uuid"

const ADD_PRODUCT_TO_SENDWICH_REDUCER = "ADD-PRODUCT-TO-SENDWICH-REDUCER"

type addProductSendwichType = {
    type: "ADD-PRODUCT-TO-SENDWICH-REDUCER"
    price: number
    title: string
    images: string
    availability: boolean
    description: string
    consist: string
}

type ActionType = addProductSendwichType

let initialstate = [
    {id: v1(), title: 'Клубный', availability: false, price: 45,
    img: "https://www.gastronom.ru/binfiles/images/20160208/b8a59842.jpg", parent: 'blockSendwich',
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Острый', availability: true, price: 65,
    img: "https://img.povar.ru/main/a1/26/ee/ad/klubnii_sendvich-42028.jpg", parent: 'blockSendwich',
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Безколорийный', availability: false, price: 50, parent: 'blockSendwich',
    img: "https://aif-s3.aif.ru/images/009/063/38a54410603bce9f2405e4539227edee.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Вгетарианский', availability: true, price: 60 , parent: 'blockSendwich',
    img: "https://www.gastronom.ru/binfiles/images/20160208/b8a59842.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Вокзальный пьяница', availability: true, price: 23.50, parent: 'blockSendwich',
    img: "https://yummybook.ru/cloud/images/recipe/item/667/image_middle_531459b3ac0940c12_04947463.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    }
]

const SendwichReducer = (state = initialstate, action: ActionType) => {
    switch(action.type){
        case ADD_PRODUCT_TO_SENDWICH_REDUCER:{
        let newProduct = {
            id: v1(),
            title: action.title,
            availability: action.availability,
            price: action.price,
            img: action.images,
            description: action.description,
            consist: action.consist,
            parent: 'blockSendwich'
        }
        let stateCopy = [...state]
        stateCopy.push(newProduct)
        return stateCopy
    }
    default: return state
    }
}

export const addProductToSendwichReducerAC = (price: number, title:string, images: string,
    availability: boolean, description:string, consist:string):addProductSendwichType => ({
type:ADD_PRODUCT_TO_SENDWICH_REDUCER, price, title, images, availability, description, consist
})

export default SendwichReducer