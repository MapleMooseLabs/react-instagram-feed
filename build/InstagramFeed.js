'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('whatwg-fetch');

var _InstagramImage = require('./InstagramImage');

var _InstagramImage2 = _interopRequireDefault(_InstagramImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstagramFeed = function (_React$Component) {
  (0, _inherits3.default)(InstagramFeed, _React$Component);

  function InstagramFeed(props) {
    (0, _classCallCheck3.default)(this, InstagramFeed);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InstagramFeed).call(this, props));

    _this.state = {
      isLoading: true,
      imageJSON: []
    };
    return _this;
  }

  (0, _createClass3.default)(InstagramFeed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchImageJSON();
    }
  }, {
    key: 'fetchImageJSON',
    value: function fetchImageJSON() {
      var _this2 = this;

      var jsonURI = this.props.jsonURI;

      if (!jsonURI || jsonURI.length === 0) {
        return;
      }

      fetch(jsonURI).then(function (response) {
        return response.json();
      }).then(function (jsonData) {
        _this2.setState({
          isLoading: false,
          imageJSON: [].concat(jsonData)
        });
      }).catch(function (error) {
        return console.log('Fetch error %s', error);
      });
    }
  }, {
    key: 'renderLoadingMessage',
    value: function renderLoadingMessage() {
      return _react2.default.createElement(
        'div',
        { className: 'instagram-feed' },
        _react2.default.createElement('div', { className: 'instagram-feed__loader' })
      );
    }
  }, {
    key: 'renderResults',
    value: function renderResults() {
      var _this3 = this;

      var imageJSON = this.state.imageJSON;

      return _react2.default.createElement(
        'div',
        { className: 'instagram-feed' },
        imageJSON.map(function (imageObj, index) {
          return _react2.default.createElement(_InstagramImage2.default, { key: index, data: imageObj, size: _this3.props.size || 'l' });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isLoading) {
        return this.renderLoadingMessage();
      }
      return this.renderResults();
    }
  }]);
  return InstagramFeed;
}(_react2.default.Component);

exports.default = InstagramFeed;


InstagramFeed.defaultProps = {
  jsonURI: ''
};