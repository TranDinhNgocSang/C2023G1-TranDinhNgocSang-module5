import { useState } from "react";

function useIncrement(){
    const [count, setCount] = useState(0);

    const increase = (add) =>{
        setCount((previousState)=>previousState+add);
    }

    return [count,increase];
}

export default useIncrement;