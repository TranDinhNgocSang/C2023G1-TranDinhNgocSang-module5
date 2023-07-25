
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {deleteUserById} from "../redux/Action";

function ListUsers() {
  
  const listUser = useSelector( state => state.users)
  const dispatch = useDispatch();

  const handelButtonDeleteUser = (id) => {
    const confirm = window.confirm("ban co muon xoa");
    if(confirm){
        dispatch(deleteUserById(id));
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
          {listUser.map((us) => {
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
