import React, { Component } from "react";
import Shape from "./components/Shape";
import shapes from "./shapes.json";

class App extends Component {
  
state= {
    shapes,
    count:0,
    clickedId:0
   };

   incScore = id => {
   
    this.setState({ clickedId: this.id});
    console.log(this.state.clickedId);
    this.setState({ count: this.state.count + 1 });

  };

  clicked = id => {
    if (this.state.clickedId == this.id)
    {
      alert("Game over!  You score" + this.setState.count);
      this.setState({count: 0});
    }
  }
  
  render() {
    return (
   <div>
        {this.state.shapes.map(shape => (
          <div>
          <Shape
            clicked={this.clicked}
            incScore={this.incScore}
            id={shape.id}
            key={shape.id}
            name={shape.name}
            image={shape.image}
          />
         </div>
        
        ))}
     <p>Click Count: {this.state.count}</p>
        </div>
    );

  }


}
export default App;
