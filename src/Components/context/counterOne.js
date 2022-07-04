import { useCount, useCountAction } from "./counterProvider";


const CounterOne = () => {
    const count = useCount()
    console.log(count);
    const dispatch = useCountAction()
    return ( 
        <div> 
            salam Az counter One {count}
            <button onClick={() => dispatch({type : 'add' , value : 1 })}> click +1  </button>
            <button onClick={() => dispatch ({type : 'dcr' , value : 4 })}> click  -4  </button>
            <button onClick={() => dispatch ({type : 'reset' })}> reset </button>

        </div>
    );
}
 
export default CounterOne;

