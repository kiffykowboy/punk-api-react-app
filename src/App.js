import React from "react";
import Beer from "./Beer";
import "./beer.css";


console.clear()

const URL = "https://api.punkapi.com/v2/beers"

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      beers: [],
      liked: false,
    }
  }

//async/await

  // componentDidUpdate(){
  //   console.log("updated", this.state.beers)
  // }

  async componentDidMount() {
    console.log("MOUNTED ", this.state.beers);

    try{
      const res = await fetch(URL);
      const data = await res.json();
      this.setState({
        beers : data,
      });
  } catch{
    console.error("FAILLLLLL");
  }
}

  componentDidUpdate(){
    console.log("updated", this.state.beers)
  }

//   componentDidMount(){
//     console.log("MOUNTED ", this.state.beers)

//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => 
//         this.setState({
//           beers: data,
//         })
// );
//   }



  render() {
    return <div className="box">
      <h1 className="h1">BEERSSSS</h1>
      <ul className="list">
        {this.state.beers.map((beer) => {
          return <Beer singleBeer={beer}/>
        })}
      </ul>;
      </div>
  }
}


export default App;
