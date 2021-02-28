// node modules
import React , {Component} from 'react';
// svg 
//cpmponents 
import HeaderTime from './time';

class Header extends Component {
    state={
        interval: "",
        time: Date.now()
    }

    componentDidMount(){
        this.setState({interval : setInterval(()=> this.setState({time:Date.now()}) , 1000)})
    }
    componentWillUnmount(){
        clearInterval(this.state.interval);
    }

     render(){
         return(
        <div className="showNowTime">
            <span>now time:</span>
            <HeaderTime time={this.state.time} />
        </div>

         )
     }
}


export default Header;