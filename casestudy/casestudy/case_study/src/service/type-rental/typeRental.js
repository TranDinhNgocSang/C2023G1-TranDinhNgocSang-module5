import axios from "axios";

export async function showListTypeRental() {
    const res = await axios.get("http://localhost:8080/type-rental");
    return res.data;
  }

  export async function getTypeRentalById(id) {
    const res = await axios.get("http://localhost:8080/type-rental/"+id);
    return res.data;
  }