import axios from "axios";

export async function getListTypeCustomer (){
const res = await axios.get("http://localhost:8080/type-customer");
return res.data
}
