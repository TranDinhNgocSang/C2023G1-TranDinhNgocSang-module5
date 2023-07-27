import axios from "axios";

export async function showListTypeServer() {
    const res = await axios.get("http://localhost:8080/type-service");
    return res.data;
  }

  export async function getTypeServerById(id) {
    const res = await axios.get("http://localhost:8080/type-service"+id);
    return res.data;
  }