
export class Category{

    public categoryId !: number;
    public categoryName !: string;
    public categoryStatus !: number;

    constructor(categoryId : number, categoryName : string, categoryStatus : number){

        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.categoryStatus = categoryStatus;
    }
}

export class categoryMap{

   public categories !: Category[];
}