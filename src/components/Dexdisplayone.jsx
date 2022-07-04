import React, {Component} from "react"
import axios from "axios";
import DisplayImage from "./DisplayImage";



class DexDisplayOne extends Component {
    constructor(){
        super();
        this.state={
            pokeName: []
        }
        
    }
        componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/155/`).then(res=>{
            this.setState({pokeName: res.data.name}) 
          })}
     
    render(){
        return(
            <div>
              <h1>Name: {this.state.pokeName}</h1>
              <DisplayImage/>
            </div>
            
        )
    }
}
export default DexDisplayOne;