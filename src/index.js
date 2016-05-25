import React, { PropTypes } from 'react';

export default class InstagramFeed extends React.Component {
  static propTypes = {
    apiKey: PropTypes.string,
    jsonURI: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  renderLoadingMessage() {
    return (
      <div>Loading...</div>
    );
  }

  renderResults() {
    return (
      <div>Instagram Feed</div>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingMessage();
    }
    return this.renderResults();
  }
}
