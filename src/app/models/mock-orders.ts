import { Order } from './Order.model';

export const ORDERS: Order[] = [
    {
    id: 1,
    user: 'John',
    email: "mynameisejohn@gmail.com",
    burgers: [
        { id: 1,
        quantity: 2,
        price: 8.50,
        name: "Cocktail Burger",
        ingredients: ["pain", "salade", "sauce cocktail"],
        isAvailable: true,
        url: "./assets/cocktail-burger.jpg"}
    ],
    price: 17,
    isValidated: true
    },
    {
    id: 2,
    user: 'Mike',
    email: "magic.mike@gmail.com",
    burgers: [
        { id: 2,
        quantity: 4,
        price: 7.50,
        name: "Bacon Burger",
        ingredients: ["pain", "salade", "bacon"],
        isAvailable: false,
        url: "./assets/bacon-burger.jpg"}
    ],
    price: 30,
    isValidated: false
    }
];