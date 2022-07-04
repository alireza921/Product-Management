import { useState } from "react";
import { useEffect } from "react";


const FTimer = () => {
   
    const [count , setCount] = useState(0)
   
    useEffect(()=> { 
       const timer = setInterval(()=>{ 
           setCount((prv) => prv +1 )
           console.log(count);
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    
    
    return ( 
        <div> 
            {count}
        </div>
     );
}
 
export default FTimer;