import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

const Child = ({ fromChildToParentCallback }) => (
  <div onClick={() => fromChildToParentCallback(42)}>Click me</div>
);

class Parent extends React.Component {
  receiveChildValue = value => {
    console.log("Parent received value from child: " + value); // value is 42
  };
  render() {
    return <Child fromChildToParentCallback={this.receiveChildValue} />;
  }
}

class A extends React.Component {
  render() {
    return <div>test</div>;
  }
}

function B() {
  return <div>bbbbbb</div>;
}

ReactDOM.render(<B />, document.getElementById("container"));
