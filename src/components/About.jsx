//import Users from "./Users";
//import UsersClass from "./UsersClass";
//import React from "react";
//import { Component } from "react";

// Class base component
// class About extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return this.state(
//             <div className="about-page">
//                 <h1>Meet Our Team</h1>
//                 <UsersClass/>
//             </div>
//         )
//     }
// }

/*
const About = () => {
    return (
        <div>
            <h1>This is About US Page</h1>
            <UsersClass name={"Mohammad Maaz Adil"} location={"Karachi, Pakistan"} contact={"03344002018"} />
        </div >
    )
};
*/

import { useState, useEffect } from "react";
import UsersClass from "./UsersClass";
import Shimmer from "./Shimmer";

const About = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds shimmer
  }, []);

  return (
    loading ? (<Shimmer type="about" />) : (
      <div className="about-page">
        <h1>Meet Our Team</h1>
        <UsersClass />
      </div>
    )
  );
};

export default About;