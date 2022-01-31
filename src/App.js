import React, { Component } from 'react';
import './App.css'
import AddItem from './components/AddItem';
import Counter from './components/Counter';

export default class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     title: "WS-State"
  //   }
  // }

  state = {
    title: "WS-State",
    age: 25,
    obj: {
      name: "Skander",
      age: 28
    },
    count: 0,
    arr: [1, 2, 3]
  }


  add=(x)=>{
    this.setState({
      arr:[...this.state.arr, x]
    })
  }



  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1
      })
  }

  render() {
    return (<div className='App'>
      {/* <h1>{this.state.title}</h1>
      <h4>{this.state.age}</h4>
      <h2>{this.state.obj.name}</h2>
      <h5>{this.state.obj.age}</h5> */}

      {/* <button onClick={this.increment} >+</button> */}
      {/* <h2>{this.state.count}</h2> */}
      {/* <Counter count={this.state.count} />
      <button onClick={this.decrement} >-</button> */}

      <AddItem add={this.add} />
      <div>{this.state.arr.map(el => <p>{el}</p>)}</div>
    </div>);
  }
}

