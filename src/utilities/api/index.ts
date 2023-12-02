import Product from "../../types/Product";
import instance from "./config";
import { FormLogin, FormRegister } from "../../types/Auth";


const getAll = (link:string) => {
    const url = `/${link}`;
    return instance.get(url);
}

const getOne = (link:string,id:string | undefined) => {
    const url = `/${link}/${id}`;
    return instance.get(url)
}

const edit = (link:string, id:string, data:Partial<Product | undefined>) => {
    const url = `/${link}/${id}`;
    return instance.patch(url, data);
}
const add = (link:string, data:Partial<Product>) => {
    const url = `/${link}`;
    return instance.post(url, data);
}
const remove = (link:string, id:string) => {
    const url = `/${link}/${id}`;
    return instance.delete(url);
}

const login = (data:FormLogin) => {
    const url = `/auth/login`;
    return instance.post(url, data)
}
const register = (data:FormRegister) => {
    const url = `/auth/register`;
    return instance.post(url, data)
}

export default {getAll,getOne,edit,remove, login, add, register};