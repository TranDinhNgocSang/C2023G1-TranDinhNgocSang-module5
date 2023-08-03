import axios from "axios";

export async function getListTypeCustomer (){
const res = await axios.get("http://localhost:8080/type-customer");
return res.data
}

export async function getTypeCustomerById (id){
    const res = await axios.get("http://localhost:8080/type-customer/"+id);
    return res.data
    }
