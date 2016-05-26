import React from 'react';
import ReactDOM from 'react-dom';

import InstagramFeed from '../src/InstagramFeed';

class App extends React.Component {

  render() {
    return (
      <div>
        <InstagramFeed
          jsonURI="http://url-returning.json"
          size="m" />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
