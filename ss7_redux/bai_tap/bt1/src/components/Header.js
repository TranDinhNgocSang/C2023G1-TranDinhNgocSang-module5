import { useNavigate} from "react-router-dom"
function Header(){
    const navigate = useNavigate();

    const handelButtonGetUsers = ()=>{
navigate("/list");
    }
    return(
        <>
        <h1>User list</h1>
        <button onClick={handelButtonGetUsers}>Get users</button>
        </>
    )
}

export default Header;