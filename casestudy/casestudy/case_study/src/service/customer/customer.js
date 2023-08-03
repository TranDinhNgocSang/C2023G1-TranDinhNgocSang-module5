import axios from "axios";

export async function showListCustomer() {
    const res = await axios.get("http://localhost:8080/customers");
    return res.data;
  }

export async function addCustomer(customer){
  await axios.post("http://localhost:8080/customers",customer);
}

export async function deleteCustomer(id){
  await axios.delete("http://localhost:8080/customers/"+id);
}

export async function getCustomerById(id) {
  const res = await axios.get("http://localhost:8080/customers/"+id);
  return res.data;
}

export async function editCustomer(customer){
  await axios.put("http://localhost:8080/customers/"+customer.id, customer);
}

export async function getCustomerByName(name) {
  const res = await axios.get("http://localhost:8080/customers?name_like="+name);
  return res.data;
}