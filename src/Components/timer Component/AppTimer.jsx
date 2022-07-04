import { Component } from 'react';
import Ctimer from './class Timer/ClassTimer';
import FTimer from './functionTimer/FTimer';

class AppTimer extends Component {
    state = {
        isShow : true , 
        count : 0 , 
      } 

      toggleHandler= () => { 
          this.setState({isShow : !this.state.isShow}) 
          console.log(this.state.isShow);
      }

    render() { 
        return (
            <div>  
               
                <button onClick={() => this.toggleHandler()} >  
                    {this.state.isShow ? "Start" : "End"}
                </button>
            {!this.state.isShow && <FTimer /> }

            </div>
        );
    }
}
 
export default AppTimer;