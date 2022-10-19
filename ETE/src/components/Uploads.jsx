import axios from 'axios';
import React, { Component } from 'react';
// import axios from 'axios';

// eslint-disable-next-line react/prefer-stateless-function
export default class Uploads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedFile: '',
    };
  }

  myHandler = (events) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      selectedFile: events.target.files[0],
    });
  }

  submitHandler = async (e) => {
    e.preventDefault();
    const url = 'https://httpbin.org/post';
    const formdata = new FormData();
    // eslint-disable-next-line react/destructuring-assignment
    formdata.append('myFile', this.state.selectedFile, this.state.selectedFile.name);
    const response = await axios.post(url, formdata);
    // eslint-disable-next-line no-undef, no-console, react/destructuring-assignment
    console.log(response);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="file" name="myFile" onChange={this.myHandler} />
          <button type="submit" className="font-bold py-2 px-4 rounded bg-lime-600 text-white hover:bg-red-700">Upload</button>
        </form>
      </div>
    );
  }
}
