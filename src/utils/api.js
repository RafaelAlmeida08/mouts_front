
import axios from "axios";

export const baseURL = 'http://localhost:3333';

export async function getCidades() {
    return await axios.get(`${baseURL}/cidades`).then(response => response.data);     
}

export async function getTipos() {
    return await axios.get(`${baseURL}/localidadestipos`).then(response => response.data);     
}

export async function postLocalidades(data) {
    return await axios({
        method: 'POST',
        url: `${baseURL}/localidades`,
        data: data
    })    
    .then(response => response.data);     
}
