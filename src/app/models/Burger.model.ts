export class Burger {
    constructor(
        public id: number,
        public quantity: number,
        public price: number,
        public name: string,
        public ingredients: any[],
        public isAvailable: boolean,
        public url: string
    ) {}
}