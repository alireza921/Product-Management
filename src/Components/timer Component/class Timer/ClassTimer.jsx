import { Component } from 'react';

class Ctimer extends Component {
    state = { 
        count : 0 ,
     } 

     componentDidMount() {
         this.timer = setInterval(() => { 
            this.setState({ count :this.state.count +1 })
         },1000)
     }

     componentWillUnmount =() => { 
         clearInterval(this.timer); 
     }

    render() { 
        return (
           <div>
                <h1>  Ctimer CPM - count is : { this.state.count }</h1>
           </div> 
        );
    }
}
 
export default Ctimer;