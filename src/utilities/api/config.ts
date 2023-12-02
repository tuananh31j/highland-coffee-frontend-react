import axios from "axios";
import 'dotenv/config';
const user: string = localStorage.getItem("user") as string;


const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(user)?.accessToken}`
    }
})


export default instance;
