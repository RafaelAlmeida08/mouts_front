
import axios from "axios";

export const baseURL = 'http://localhost:3333';

export default async function getCidades() {
    return await axios.get(`${baseURL}/cidades`).then(response => response.data);     
}
