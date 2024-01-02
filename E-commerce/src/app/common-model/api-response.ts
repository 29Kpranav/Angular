export interface ApiResponse<TEntity>{

      data:TEntity;
     httpStatusCode:number;
    message:string;
}