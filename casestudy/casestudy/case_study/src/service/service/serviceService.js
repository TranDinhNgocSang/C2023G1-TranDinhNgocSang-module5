import axios from "axios";

export async function showListService() {
    const res = await axios.get("http://localhost:8080/services");
    return res.data;
  }

  export async function addService(service) {
    const res = await axios.post("http://localhost:8080/services",service);
    return res.data;
  }

  export async function deleteService(id) {
    const res = await axios.delete("http://localhost:8080/services/"+id);
  }