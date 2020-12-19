import Axios from "axios";
import React, { Component } from "react";

export class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    Axios.get("https://reqres.in/api/users?page=1")
      .then((response) => response.data)
      .then((res) => {
        let { data } = res;
        let local = [];
        
        data.forEach(x=>{
          local.push(x['email']);
        })

        this.setState({
            lists: local
          });
      });
  }

  render() {
    return (
        <h1>
          {this.state.lists[1]}
          hI
        </h1>
    );
  }
}

export default State;
