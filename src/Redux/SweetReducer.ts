import { v1 } from "uuid"

const ADD_PRODUCT_TO_SWEET_REDUCER = 'ADD-PRODUCT-TO-SWEET-REDUCER'
const FIND_PRODUCT = 'FIND-PRODUCT'

type addProductSweetType = {
    type: 'ADD-PRODUCT-TO-SWEET-REDUCER'
    price: number
    title: string
    images: string
    availability: boolean
    description: string
    consist: string
}

type findProductType = {
    type: 'FIND-PRODUCT'
}

type ActionType =  addProductSweetType | findProductType

let initialstate = [
    {id: v1(), title: 'Ferrero', availability: true, price: 450, parent: 'blockSweet',
    img: "https://images.izi.ua/19728515",
    description: "Lorem ipsum dollor",
    consist: "Молочный шоколад (сахар, масло какао, тертое какао, сухое обезжиренное молоко, молочный жир, эмульгатор: лецитины, ароматизатор), лесные орехи, сахар, растительный жир, пшеничная мука, сухая молочная сыворотка, обезжиренный какао-порошок, эмульгатор: лецитины, разрыхлитель: гидрокарбонат натрия, соль, ароматизатор"
    },
    {id: v1(), title: 'Красный октябрь', availability: true, price: 165,  parent: 'blockSweet',
    img: "https://www.alenka.ru/upload/iblock/fbf/fbfed250415c5bb7dece23cbdfb117e1.jpg",
    description: "Lorem ipsum dollor",
    consist: "Молочный шоколад (сахар, масло какао, тертое какао, сухое обезжиренное молоко, молочный жир, эмульгатор: лецитины, ароматизатор), лесные орехи, сахар, растительный жир, пшеничная мука, сухая молочная сыворотка, обезжиренный какао-порошок, эмульгатор: лецитины, разрыхлитель: гидрокарбонат натрия, соль, ароматизатор"
    },
    {id: v1(), title: 'Подарочный набор', availability: false, price: 250,  parent: 'blockSweet',
    img: "https://content.podarki.ru/goods-images/c96fb8df-ef20-4843-bef2-60f167b51c20.jpg",
    description: "Lorem ipsum dollor",
    consist: "Молочный шоколад (сахар, масло какао, тертое какао, сухое обезжиренное молоко, молочный жир, эмульгатор: лецитины, ароматизатор), лесные орехи, сахар, растительный жир, пшеничная мука, сухая молочная сыворотка, обезжиренный какао-порошок, эмульгатор: лецитины, разрыхлитель: гидрокарбонат натрия, соль, ароматизатор"
    },
    {id: v1(), title: 'Киндер', availability: true, price: 60,  parent: 'blockSweet',
    img: "https://avatars.mds.yandex.net/get-mpic/1865885/img_id2731993452617903995.jpeg/orig",
    description: "Lorem ipsum dollor",
    consist: "Молочный шоколад (сахар, масло какао, тертое какао, сухое обезжиренное молоко, молочный жир, эмульгатор: лецитины, ароматизатор), лесные орехи, сахар, растительный жир, пшеничная мука, сухая молочная сыворотка, обезжиренный какао-порошок, эмульгатор: лецитины, разрыхлитель: гидрокарбонат натрия, соль, ароматизатор"
    },
    {id: v1(), title: 'Диетический', availability: true, price: 80,  parent: 'blockSweet',
    img: "https://pp.vk.me/c411529/v411529264/90e7/5ib8gIHESKY.jpg",
    description: "Lorem ipsum dollor",
    consist: "Молочный шоколад (сахар, масло какао, тертое какао, сухое обезжиренное молоко, молочный жир, эмульгатор: лецитины, ароматизатор), лесные орехи, сахар, растительный жир, пшеничная мука, сухая молочная сыворотка, обезжиренный какао-порошок, эмульгатор: лецитины, разрыхлитель: гидрокарбонат натрия, соль, ароматизатор"
    }
]

const SweetReducer = (state = initialstate, action: ActionType) => {
    switch(action.type){
        case ADD_PRODUCT_TO_SWEET_REDUCER:{
        let newProduct = {
            id: v1(),
            title: action.title,
            availability: action.availability,
            price: action.price,
            img: action.images,
            description: action.description,
            consist: action.consist,
            parent: 'blockSweet'
        }
        let stateCopy = [...state]
        stateCopy.push(newProduct)
        return stateCopy
    }
    default: return state
    }
}

export const addProductToSweetReducerAC = (price: number, title:string, images: string,
    availability: boolean, description:string, consist:string
    ):addProductSweetType => ({type: ADD_PRODUCT_TO_SWEET_REDUCER,
        price, title, images, availability, description, consist
})

// export const findProductAC = ():findProductType => ({type: FIND_PRODUCT})

export default SweetReducer