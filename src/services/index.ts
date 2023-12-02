import fetch from "../utilities/api";

const getProList = async () => {
    const {data} = await fetch.getAll(`products`)
    return data;
}

export {getProList};