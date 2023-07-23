
import useIncrement from "../hooks/useIncrement";

function Counter2(){
    const [count,increase] = useIncrement();
return(
    <>
    <p>Count: {count}</p>
    <button onClick={()=>increase(2)}>Add1</button>
    </>
)
}
export default Counter2;