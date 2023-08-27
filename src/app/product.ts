export class Product {
    id : number;
    name : string;
    price : number;
    size : string;
    color : string;
    qteStock : number;
    category : string;
    image : string;
    
    constructor(id : number , name : string , price : number , size : string, color : string, qteStock : number, category : string, image : string){
        this.id = id;
        this.name=name;
        this.price=price;
        this.size=size;
        this.color=color;
        this.qteStock=qteStock;
        this.category=category;
        this.image=image;
    }
}
