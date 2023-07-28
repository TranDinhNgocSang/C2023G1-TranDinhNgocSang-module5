import axios from "axios";
export async function getCovids() {
    const response = await axios.get('http://localhost:8080/covids');
    return response.data;
  
}