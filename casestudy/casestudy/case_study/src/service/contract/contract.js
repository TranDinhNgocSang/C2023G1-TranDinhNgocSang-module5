import axios from "axios";

export async function getListContract() {
  const res = await axios.get("http://localhost:8080/contracts");
  return res.data;
}

export async function addContract(contract) {
    const res = await axios.post("http://localhost:8080/contracts",contract);
    return res
  }