import { getUsers,deleteUser } from "../server/userService";

export const getListUser = () => {
  return async (dispatch) => {
    const data = await getUsers();
    console.log(data);
    dispatch({
      type: "LIST",
      payload: data,
    });
  };
};

export const deleteUserById = (id) => {
  return async (dispatch) => {
    await deleteUser(id);
    const data = await getUsers();
    dispatch({
      type: "DELETE",
      payload: data,
    });
  };
};
