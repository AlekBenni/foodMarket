import { v1 } from "uuid"

type ActionType = {

}

let initialstate = [
    {id: v1(), title: 'Абсолют', availability: true, price: '255 руб',
    img: "https://avatars.mds.yandex.net/get-mpic/1514097/img_id2840001808389356636.jpeg/9hq",
    description: "Lorem ipsum dollor",
    consist: "Спирт очищенный 'Люкс', вода"
    },
    {id: v1(), title: 'Столичная', availability: true, price: '165 руб',
    img: "https://wine-shopper.ru/image/cache/data/ST/1403_20ST-600x600.jpg",
    description: "Lorem ipsum dollor",
    consist: "Спирт очищенный 'Люкс', вода"
    },
    {id: v1(), title: 'Ханская', availability: false, price: '50 руб',
    img: "https://s.winestyle.ru/images_gen/117/117207/0_0_orig.jpg",
    description: "Lorem ipsum dollor",
    consist: "Спирт очищенный 'Люкс', вода"
    },
    {id: v1(), title: 'Русская в ассортименте', availability: true, price: '60 руб',
    img: "https://wine-shopper.ru/image/cache/data/ST/1403_20ST-600x600.jpg",
    description: "Lorem ipsum dollor",
    consist: "Спирт очищенный 'Люкс', вода"
    },
    {id: v1(), title: 'Настойка Боярышника', availability: true, price: '23,50 руб',
    img: "https://icdn.lenta.ru/images/2016/11/25/14/20161125144429793/pic_11a5f36951800a6bbc863a0d14c6d868.jpg",
    description: "Lorem ipsum dollor",
    consist: "Лучше этого не знать!"
    }
]

const VodkaReducer = (state = initialstate, action: ActionType) => {
    return state
}

export default VodkaReducer