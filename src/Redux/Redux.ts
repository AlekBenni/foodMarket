import {createStore, combineReducers} from 'redux'
import IcecreamReducer from './IcecreamReducer'
import ModalReducer from './ModalReducer'
import PizzaReducer from './PizzaReducer'
import SalatReducer from './SalatReducer'
import SendwichReducer from './SendwichReducer'
import SweetReducer from './SweetReducer'
import VodkaReducer from './VodkaReducer'

export let reducer = combineReducers({
    blockPizza: PizzaReducer,
    blockSendwich: SendwichReducer,
    blockSalat: SalatReducer,
    blockVodka: VodkaReducer,
    blockIcecream: IcecreamReducer,
    blockSweet: SweetReducer,
    blockModal: ModalReducer
})

export type ParentObjType = {
    id: string,
    title:string
    availability: string
    price: number
    img: string
    description: string
    consist: string
    parent: string
}

let store = createStore(reducer)

export type AppStateType = ReturnType<typeof reducer>

export type ParentType = ReturnType<keyof typeof reducer>

export default store