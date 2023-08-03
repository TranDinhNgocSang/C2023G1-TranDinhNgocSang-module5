import axios from "axios";

export async function getListCustomer() {
  const res = await axios.get("http://localhost:8080/customer");
  return res.data;
}

export async function addCustomer(customer) {
  const res = await axios.post("http://localhost:8080/customer", customer);
}

export async function getCustomerById(id) {
  const res = await axios.get("http://localhost:8080/customer/"+id);
  return res.data;
}

export async function deleteCustomerById(id) {
  const res = await axios.delete("http://localhost:8080/customer/"+id);
  return res.data;
}

export async function editCustomer(customer) {
    const res = await axios.put("http://localhost:8080/customer/"+customer.id, customer);
    return res.data;
  }

  export async function searchCustomerByName(name) {
    const res = await axios.get("http://localhost:8080/customer?name_like="+name);
    return res.data;
  }


  export async function pageCustomer(num) {
    const res = await axios.get(`http://localhost:8080/customer?_page=${num}&_limit=2`);
    return res.data;
  }
