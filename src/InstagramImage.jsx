import React from 'react';

export default class InstagramImage extends React.Component {

  componentDidMount() {
    let { data, size } = this.props;
    let { container } = this.refs;
    container.style.backgroundImage = 'url(' + data.instagram_url + 'media/?size=' + size + ')';
  }

  render() {
    let { data, size } = this.props;
    return (
      <div className="instagram-feed__item" ref="container">
        <a href={ data.instagram_url } target="_blank" />
      </div>
    )
  }
}
