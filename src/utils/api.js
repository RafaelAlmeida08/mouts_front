
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

export async function postCidades(data) {
    return await axios({
        method: 'POST',
        url: `${baseURL}/cidades`,
        data: data
    })
    .then(response => response.data);     
}

export async function updateLocalidade(data, id) {
    return await axios({
        method: 'PUT',
        url: `${baseURL}/localidades/${id}`,
        data: data
    })
    .then(response => response.data);     
}

export async function showLocalidade(id) {
    return await axios({
        method: 'GET',
        url: `${baseURL}/localidades/show/${id}`
    })
    .then(response => response.data);     
}

export async function deleteLocalidade(id) {
    return await axios({
        method: 'DELETE',
        url: `${baseURL}/localidades/${id}`
    }) 
    .then(response => response.data);     
}
 