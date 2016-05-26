#React Instagram Feed

Still very much a work in progress. Currently you need to pass in a full url that returns JSON. Eventually the component will handle authentication and fetching from specific endpoints based on props passed in.

So, it's not really an "Instagram Feed" quite yet. But it will be. Soon. Probably.

## Installation
Until this is a little further along, we don't want to publish it to npm.org. So, for now install it from Github by using: `npm install opentrace/react-instagram-feed`.

## Example

```javascript
/* app.js */
import React from 'react';
import ReactDOM from 'react-dom';

import InstagramFeed from 'react-instagram-feed';

class App extends React.Component {

  render() {
    return (
      <div>
        <InstagramFeed jsonURI="http://url-returning.json" size="m" />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('example'));
```

```html
<!-- example.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/example.css"/>
    <title>React Instagram Feed</title>
  </head>
  <body>
    <div id="example"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

You can use the default styles by including the CSS in your HTML: `node_modules/react-instagram-feed/build/instagram-feed.css`. Or, if you're using SASS, you can import `node_modules/react-instagram-feed/src/instagram-feed.scss` into your project. Currently there is only one variable set, `$instagram-feed-images-per-row`, which has a default value of `5`.
