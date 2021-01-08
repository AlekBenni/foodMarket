import { v1 } from "uuid"

type ActionType = {

}

let initialstate = [
    {id: v1(), 
    title: 'Введи название', 
    availability: true, 
    price: "Введи цену",
    img: 'Введи изображение',
    description: "",
    consist: ""
    }
]

const ModalReducer = (state = initialstate, action: ActionType) => {
    return state
}

export default ModalReducer