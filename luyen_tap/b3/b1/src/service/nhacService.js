import axios from "axios";

export async function getListMusic(page,size) {
  const res = await axios.get(`http://localhost:8080/music/${page}/${size}`);
  return res.data.content;
}

export async function addMusic(music) {
    const res = await axios.post("http://localhost:8080/music",music);
    return res.data;
  }

  export async function getMusicById(id) {
    const res = await axios.get("http://localhost:8080/music/"+id);
    return res.data;
  }

  export async function editMusic(music) {
    const res = await axios.put("http://localhost:8080/music/"+music.id,music);
  }

  export async function searchMusicByName(name,page,size) {
    const res = await axios.get(`http://localhost:8080/music/search/${name}/${page}/${size}`);
    return res.data;
  }

  export async function deleteMusic(id) {
    const res = await axios.delete("http://localhost:8080/music/"+id);
    return res.data;
  }