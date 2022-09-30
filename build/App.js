"use strict";

Liferay.Loader.define("react-clay@1.0.0/App", ['module', 'exports', 'require', 'react-clay$react', './Methods'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireDefault(require("react-clay$react"));

    var _Methods = require("./Methods");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function App() {
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "teste app"), /*#__PURE__*/_react["default"].createElement(_Methods.MethodPost, null), /*#__PURE__*/_react["default"].createElement(_Methods.MethodGet, null), /*#__PURE__*/_react["default"].createElement(_Methods.MethodUpdate, null), /*#__PURE__*/_react["default"].createElement(_Methods.MethodDelete, null))
      );
    }

    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map