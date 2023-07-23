
import useIncrement from "../hooks/useIncrement";

function Counter1(){
    const [count,increase] = useIncrement();
return(
    <>
    <p>Count: {count}</p>
    <button onClick={()=>increase(1)}>Add1</button>
    </>
)
}
export default Counter1;