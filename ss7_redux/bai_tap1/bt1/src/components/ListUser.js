import { getUsers, deleteBook } from "../server/userService";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function ListUsers() {
  const [user, setUser] = useState([]);
  const [flag, setFlag] = useState(false);

  const getListUser = async () => {
    const data = await getUsers();
    setUser(data);
  };

  useEffect(() => {
    getListUser();
  }, [flag]);

  const handelButtonDeleteUser = async(id) => {
    const confirm = window.confirm("ban co muon xoa");
    if(confirm){
        await deleteBook(id);
        await setFlag(!flag);
        alert("xoa thanh cong")
    }
  };

  return (
    <>
      <table border={1} cellSpacing={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((us) => {
            return (
              <tr key={us.id}>
                <td>{us.id}</td>
                <td>{us.name}</td>
                <td>{us.email}</td>
                <td>{us.address.city}</td>
                <td>
                  <button onClick={() => handelButtonDeleteUser(us.id)}>
                    Delete user
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"/"}>Back home</Link>
    </>
  );
}

export default ListUsers;
