"use strict";

Liferay.Loader.define("react-clay@1.0.0/App", ['module', 'exports', 'require', 'react-clay$react', './MethodDelete', './MethodGet', './MethodUpdate'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireDefault(require("react-clay$react"));

    var _MethodDelete = _interopRequireDefault(require("./MethodDelete"));

    var _MethodGet = _interopRequireDefault(require("./MethodGet"));

    var _MethodUpdate = _interopRequireDefault(require("./MethodUpdate"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function App() {
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MethodGet["default"], null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_MethodUpdate["default"], null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_MethodDelete["default"], null))
      );
    }

    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map