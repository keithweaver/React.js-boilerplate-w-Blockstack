import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SignInBlockstackButton } from 'blockstack-signin-btn';

import InputForm from '../../components/Home/InputForm';

const blockstack = require('blockstack');


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // A lot of this was taken from here:
    // https://blockstack.github.io/blockstack.js/index.html#authentication
    // Not the blockstack.js README docs.


    // Just adding this for dev to verify it's properly loaded.
    // console.log('blockstack:');
    // console.log(blockstack);

    let signedInForm = null;
    if (blockstack.isUserSignedIn()) {
      console.log('user is currently logged in');

      // Show the current user
      const userData = blockstack.loadUserData();
      console.log('userData', userData);

      const person = new blockstack.Person(userData.profile);
      console.log('person', person);

      signedInForm = (<InputForm />);
    }

    return (
      <div>
        <p className="app-text">App</p>
        <SignInBlockstackButton />
        {
          signedInForm
        }
      </div>
    );
  }
}

export default App;
