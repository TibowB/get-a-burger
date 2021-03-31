import { Burger } from "./Burger.model";

export class Order {
    constructor(
        public id: number,
        public user: string,
        public email: string,
        public burgers: Burger[],
        public price: number,
        public isValidated?: boolean
    ) {}
}