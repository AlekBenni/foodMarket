import { type } from "os"
import { v1 } from "uuid"

type ActionType = {

}

let initialstate = [
    {id: v1(), title: 'Фирменный', availability: true, price: '145 руб',
    img: "https://lh3.googleusercontent.com/proxy/Bi6QosM2zDaOWRn6n__OPzeQhTFUZoXXjwLZHGhiAS3idWvU0_C6ubBHYCUHaZHmubsvV-BkBy1x3qLmp8bLFuCtJNrTtw",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Лёгкий', availability: true, price: '95 руб',
    img: "https://grandkulinar.ru/uploads/posts/2020-06/1591212074_legkij-salat-v-italyanskoj-zapravke.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Низкоколорийный', availability: true, price: '150 руб',
    img: "https://zira.uz/wp-content/uploads/2018/07/italyanskiy-salat-2.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Вгетарианский', availability: false, price: '120 руб',
    img: "https://www.koolinar.ru/all_image/recipes/154/154421/recipe_a37a272a-afcf-4206-b277-74f6b504975c_large.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    },
    {id: v1(), title: 'Закуска алкашей', availability: true, price: '13,80 руб',
    img: "https://www.diet-health.info/images/recipes/1400/4749930477-0308bab231-o.jpg",
    description: "Lorem ipsum dollor",
    consist: "Тостевый хлеб, ветчина, сыр Чеддар, помидор, зелёный салат, яйцо, сухари, оливковое масло, соль, перец"
    }
]

const SalatReducer = (state = initialstate, action: ActionType) => {
    return state
}

export default SalatReducer