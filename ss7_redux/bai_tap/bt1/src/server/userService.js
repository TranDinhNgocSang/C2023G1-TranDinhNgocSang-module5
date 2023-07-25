import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080';

export async function getUsers () {
    const res = await axios.get('/listUser');
    return res.data;
}

export async function deleteUser(id){
    await axios.delete("/listUser/"+ id)
    };