import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }

    incrementCount = () => {
        this.setState({count: this.state.count+1});
    } 

    decrementCount = () => {
        this.setState({count: this.state.count-1});
    } 


    render() {
        return (
        <div>
            <h2>Counter App</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment</button>
            <button onClick={this.decrementCount}>Decrement</button>
        </div>
        );
    }
}

export default Counter;