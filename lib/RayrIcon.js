'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RayrIcon = function (_React$Component) {
    _inherits(RayrIcon, _React$Component);

    function RayrIcon() {
        _classCallCheck(this, RayrIcon);

        return _possibleConstructorReturn(this, (RayrIcon.__proto__ || Object.getPrototypeOf(RayrIcon)).apply(this, arguments));
    }

    _createClass(RayrIcon, [{
        key: 'render',
        value: function render() {

            var _cls = 'rayr-icon-' + (this.props.model || 'default') + ' rayr-icon-' + this.props.type;

            return _react2.default.createElement('i', { ref: 'rayrIcon', className: 'rayr-icon ' + _cls });
        }
    }]);

    return RayrIcon;
}(_react2.default.Component);

RayrIcon.propTypes = {
    type: _propTypes2.default.string,
    model: _propTypes2.default.string
};
RayrIcon.defaultProps = {
    type: 'battery',
    model: 'default'
};
exports.default = RayrIcon;
module.exports = exports['default'];