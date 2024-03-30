import {increase,decrease,reset} from "../redux/features/counter/counterSlice";
import { useSelector,useDispatch } from "react-redux";


const CounterApp = ()=>{
    const count =  useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter App</h1>
            <h3>Count : {count}</h3>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CounterApp;