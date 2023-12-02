import Category from "./Category";
  
interface Product {
    name: string;
    price: number;
    view:number;
    img: string | (File | undefined)[] | undefined;
    category_id:Category | string,
    des: string;
    sale: number;
    updateAt: string;
    createAt:string;
    _id:string,
    __v?:number | string;
    curPrice?: string | number;
}



export default Product
