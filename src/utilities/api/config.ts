import axios from "axios";

const user: string = localStorage.getItem("user") as string;

const instance = axios.create({
    baseURL: "https://highland-coffee.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(user)?.accessToken}`
    }
})


export default instance;
