import axios from "axios";


type Product = {
    id:number;
    name:string;
    extras?:Record<string,number>; //replace 'extras' with the actual field name where value type is unknown
}

export const getProducts = async ():Promise<Product[]> => {
    const res = await axios.get(<Products[]>('/api/products'))
    return res.data;
}