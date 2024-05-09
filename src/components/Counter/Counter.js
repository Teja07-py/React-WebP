import "./Counter.css";
import { useState } from "react";
function Counter()
{   
    let [state,setState]=useState(100);
    const incCount1=()=>
    {
        setState(state+1);
    };

    const decCount=()=>
    {
        setState(state-1);
    }
    return (
        <div className="mt-5 text-center mystyles" id="root">
            <h2>Count Value:{state}</h2>
            <button className="btn btn-success mx-3" onClick={incCount1}>incCount</button>
            <button className="btn btn-success mx-3" onClick={decCount}>decCount</button>

        </div>

    )
}
export default Counter
