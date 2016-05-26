import React from 'react';
import 'whatwg-fetch';

import InstagramImage from './InstagramImage';

export default class InstagramFeed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      imageJSON: [],
    };
    this.accessToken = null;
  }

  componentDidMount() {
    this.fetchImageJSON();
  }

  fetchImageJSON() {
    const { jsonURI } = this.props;

    if (!jsonURI || jsonURI.length === 0) {
      return;
    }

    fetch(jsonURI)
      .then(response => response.json())
      .then(jsonData => {
        this.setState({
          isLoading: false,
          imageJSON: [].concat(jsonData),
        });
      })
      .catch(error => console.log('Fetch error %s', error));
  }

  renderLoadingMessage() {
    return (
      <div className="instagram-feed">
        <div className="instagram-feed__loader" />
      </div>
    );
  }

  renderResults() {
    let { imageJSON } = this.state;
    return (
      <div className="instagram-feed">
        {
          imageJSON.map((imageObj, index) => {
            return (
              <InstagramImage key={ index } data={ imageObj } size={ this.props.size || 'l'} />
            );
          })
        }
      </div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingMessage();
    }
    return this.renderResults();
  }
}

InstagramFeed.defaultProps = {
  jsonURI: ''
};
