import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Select from "react-dropdown-select";

export class Dropdown_1 extends Component {
  state = {
    options: []
  };

  componentDidMount() {
    window
      .fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(result => {
        this.setState({
          options: result.map(user => ({
            label: user.username,
            value: user.email
          }))
        });
      });
  }

  customNoDataRenderer = ({ props, state, methods }) => (
    <div>
      Ooops! nothing found for <strong>{state.search}</strong>, search{" "}
      <a
        href={`https://jsonplaceholder.typicode.com/users`}
        target="_blank"
      >
        Google
      </a>{" "}
      instead
    </div>
  );

  render() {
    return (
      <div>
        <p>
          react-dropdown-select demo |{" "}
          <a href="https://jsonplaceholder.typicode.com/users">Test</a>
        </p>

        <Select
          placeholder=""
          multi
          noDataRenderer={this.customNoDataRenderer}
          onChange={() => undefined}
          values={[]}
          options={this.state.options}
        />
      </div>
    );
  }
}
export default Dropdown_1;
