import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const blockstack = require('blockstack');

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.saveNewFile = this.saveNewFile.bind(this);
    this.loadFile = this.loadFile.bind(this);
  }
  onTextChange(event) {
    this.setState({
      content: event.target.value,
    });
  }
  saveNewFile() {
    if (this.state.content) {
      blockstack.putFile("/hello.txt", this.state.content, true)
      .then(() => {
        // /hello.txt exists now, and has the contents "hello world!".
        alert('Done! Created hello.txt');
      }).catch((e) => {
        console.log('e');
        console.log(e);
        alert(e.message);
      });
    } else {
      alert('Textbox cannot be blank.');
    }
  }
  loadFile() {
    blockstack.getFile("/hello.txt", true)
    .then((fileContents) => {
      alert('Loaded hello.txt\n' + fileContents );
    }).catch((e) => {
      console.log('e');
      console.log(e);
      alert(e.message);
    });
  }
  render() {
    if (!blockstack.isUserSignedIn()) {
      return (
        <p>Welcome to my website</p>
      );
    }

    return (
      <div>
        <input
          type="text"
          onChange={this.onTextChange}
          value={this.state.content}
        />
        <button
          onClick={this.saveNewFile}
        >Save</button>
        <br/>
        <br/>
        <button
          onClick={this.loadFile}
        >Get Past Content</button>
      </div>
    );
  }
}

export default InputForm;
