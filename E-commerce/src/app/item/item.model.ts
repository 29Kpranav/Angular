
export class Item{
    public itemId !: number;
    public categoryId !: number;
    public itemName !: string;
    public price !: number;
    public itemStatus !: number;

    constructor( itemId: number, categoryId: number, itemName: string, price: number, itemStatus: number){
        this.itemId = itemId;
        this.categoryId = categoryId;
        this.itemName = itemName;
        this.price = price;
        this.itemStatus = itemStatus;
    }

}

export class itemMap{

    public items !: Item[];

}