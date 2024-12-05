import axios from "axios";
const user: string = localStorage.getItem("user") as string;


const instance = axios.create({
    baseURL: `http://localhost:3001/api`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(user)?.accessToken}`
    }
})


export default instance;
