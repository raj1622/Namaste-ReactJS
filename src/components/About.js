import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount(){
    
}

  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2></h2>
        <UserClass
          name={"Aryan Raj (class)"}
          location={"Delhi (class)"}
        />
      </div>
    );
  }
}

export default About;
