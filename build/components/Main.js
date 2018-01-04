'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Main;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _Welcome = require('./Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _accordionEg = require('./views/accordionEg.js');

var _accordionEg2 = _interopRequireDefault(_accordionEg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main(props) {
    var userInfo = props.userInfo;

    console.log(userInfo);
    return _react2.default.createElement(
        'div',
        null,
        'Your SSR React Router Node App initialised with data!',
        _react2.default.createElement(_reactRouter.Route, { path: '/u/', exact: true, component: _Welcome2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/u/list', exact: true, component: _accordionEg2.default })
    );
};