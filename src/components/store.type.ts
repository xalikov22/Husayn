export type productstype={
    id:string,
    name:string,
    title:string,
    img: string;
    description:string,
    price:string,
    createdAt:string

}


export type storetype={
    loading:boolean,
    products:productstype[],
    error:unknown,
    getproducts:()=>void,
    post:(product:any)=>void
    deleteproduct:(id:number)=> Promise<void>

}




