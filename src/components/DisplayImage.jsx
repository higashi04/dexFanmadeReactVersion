import React, { Component } from "react";
import axios from "axios";

class DisplayImage extends Component{
    constructor(){
        super();
        this.state={
            pokeImage: ''
        }
    }
    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/150/`).then(res=>{
            this.setState({pokeImage: res.data.sprites.front_default}) 
          })}
    render(){
        return(
            <div>
                <img src={this.state.pokeImage} alt="" />
            </div>
        )
    }
}
export default DisplayImage;