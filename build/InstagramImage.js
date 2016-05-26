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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstagramImage = function (_React$Component) {
  (0, _inherits3.default)(InstagramImage, _React$Component);

  function InstagramImage() {
    (0, _classCallCheck3.default)(this, InstagramImage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InstagramImage).apply(this, arguments));
  }

  (0, _createClass3.default)(InstagramImage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var data = _props.data;
      var size = _props.size;
      var container = this.refs.container;

      container.style.backgroundImage = 'url(' + data.instagram_url + 'media/?size=' + size + ')';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var data = _props2.data;
      var size = _props2.size;

      return _react2.default.createElement(
        'div',
        { className: 'instagram-feed__item', ref: 'container' },
        _react2.default.createElement('a', { href: data.instagram_url, target: '_blank' })
      );
    }
  }]);
  return InstagramImage;
}(_react2.default.Component);

exports.default = InstagramImage;