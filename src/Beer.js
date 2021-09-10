import React, { Component } from 'react'
import "./li.css"

class Beer extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  

  render(){
    const label = this.state.liked ? 'Yuck' : 'Yum'
    return <li className="item" style={{margin:"10px"}}>
      <img
        style={{width:"100px"}}
        src={this.props.singleBeer.image_url}
        alt={this.props.singleBeer.name}
      />
      <h2>{this.props.singleBeer.name}</h2>
      <button onClick={this.handleClick}> {label} </button>
    </li>
  };
  
}

export default Beer;