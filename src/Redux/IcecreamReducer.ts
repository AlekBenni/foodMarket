import { v1 } from "uuid"

type ActionType = {

}

let initialstate = [
    {id: v1(), title: 'Крутой стаканчик', availability: false, price: '50 руб',
    img: "https://cdnimg.rg.ru/img/content/169/50/84/iStock-685816670_d_850.jpg",
    description: "Lorem ipsum dollor",
    consist: "молоко коровье натуральное, пастеризованное, сгущённое цельное с сахаром; сгущённые и сухие сливки, масло коровье, яйца куриные; пахта (обезжиренные сливки) и сыворотка; ягоды, фрукты, кофе, какао-продукты"
    },
    {id: v1(), title: 'Домашнее', availability: true, price: '65 руб',
    img: "https://cdn.lifehacker.ru/wp-content/uploads/2019/05/Depositphotos_68972477_xl-2015_1559126153-e1559129205144-630x315.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Фитнес', availability: false, price: '80 руб',
    img: "https://images.cdn.inmyroom.ru/inmyroom/thumb/940x600/jpg:85/uploads/food_recipe/teaser/10/1074/jpg_1000_1074a94c-86f7-47af-8234-fb5521b3bf9b.jpg?sign=b89369513ad044bbb6e29e873ad1c3acfd036c7bda0c24480e8aa2e9444dcc95",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Фирменное', availability: true, price: '100 руб',
    img: "https://static.1000.menu/img/content/35935/tvorojnoe-morojenoe-v-domashnix-usloviyax_1560852702_1_max.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Детское "Клоун"', availability: true, price: '65 руб',
    img: "https://i.pinimg.com/originals/8a/c6/4e/8ac64e4fe1ff6f1c9f195e8735c24464.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    }
]

const IcecreamReducer = (state = initialstate, action: ActionType) => {
    return state
}

export default IcecreamReducer