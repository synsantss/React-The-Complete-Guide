import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  // update: 1
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps", props);
    return state;
  }

  // Have to return true or false
  // update: 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  // Used to save some previos props/state values and use it
  // in the componentDidUpdate()
  // update: 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { image: "ok" };
  }

  // Fetch new data from server/etc
  // update: 5
  componentDidUpdate(revProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdated", snapshot);
  }

  // update: 3
  render() {
    console.log("[Persons.js] redering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
        />
      );
    });
  }
}

export default Persons;
