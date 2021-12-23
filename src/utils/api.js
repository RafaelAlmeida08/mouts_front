
import axios from "axios";

export const baseURL = 'http://localhost:3333';

export default class Api {

    async getCidades() {
        const cidades = await axios({
            method: 'GET',
            url:`${baseURL}/cidades`
        });
        return cidades;
    }
}
