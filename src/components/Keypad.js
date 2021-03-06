// Code Keypad Component Here
import React from "react";

export default class Keypad extends React.Component {
  logIt = () => console.log("Entering password...");

  render() {
    return <input onKeyUp={this.logIt} type="password" />;
  }
}
