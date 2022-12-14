"use strict";

Liferay.Loader.define("react-clay@1.0.0/Methods", ['module', 'exports', 'require', 'react-clay$react', './Request', '@react-clay$clayui/table', '@react-clay$clayui/form', '@react-clay$clayui/button'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MethodUpdate = exports.MethodPost = exports.MethodGet = exports.MethodDelete = void 0;

    var _react = require("react-clay$react");

    var _Request = require("./Request");

    var _table = _interopRequireDefault(require("@react-clay$clayui/table"));

    var _form = require("@react-clay$clayui/form");

    var _button = _interopRequireDefault(require("@react-clay$clayui/button"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    var MethodPost = function MethodPost() {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          headline = _useState2[0],
          setHeadline = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          articleBody = _useState4[0],
          setArticleBody = _useState4[1];

      return (/*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement(_form.ClayForm, null, /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "basicInput"
        }, "headline"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "headline",
          onChange: function onChange(e) {
            return setHeadline(e.target.value);
          },
          placeholder: "headline",
          type: "text",
          value: headline
        })), /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "basicInput"
        }, "articleBody"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "articleBody",
          onChange: function onChange(e) {
            return setArticleBody(e.target.value);
          },
          placeholder: "articleBody",
          type: "text",
          value: articleBody
        })), /*#__PURE__*/_react.React.createElement(_button["default"], {
          onClick: function onClick() {
            return (0, _Request.POST)(headline, articleBody).then(function () {
              return setHeadline('');
            }, setArticleBody(''));
          },
          displayType: "primary"
        }, "CADASTRAR")))
      );
    }; //


    exports.MethodPost = MethodPost;

    var MethodGet = function MethodGet() {
      var _useState5 = (0, _react.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          postLima = _useState6[0],
          setPostLima = _useState6[1];

      (0, _react.useEffect)(function () {
        (0, _Request.GET)().then(function (r) {
          return setPostLima(r.items);
        });
      }, [postLima]);
      return (/*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement(_table["default"], null, /*#__PURE__*/_react.React.createElement(_table["default"].Head, null, /*#__PURE__*/_react.React.createElement(_table["default"].Row, null, /*#__PURE__*/_react.React.createElement(_table["default"].Cell, {
          headingCell: true
        }, 'id'), /*#__PURE__*/_react.React.createElement(_table["default"].Cell, {
          headingCell: true
        }, 'headline'), /*#__PURE__*/_react.React.createElement(_table["default"].Cell, {
          headingCell: true
        }, 'articleBody'))), /*#__PURE__*/_react.React.createElement(_table["default"].Body, null, /*#__PURE__*/_react.React.createElement(_table["default"].Row, {
          key: postLima.id
        }, /*#__PURE__*/_react.React.createElement(_table["default"].Cell, null, postLima.id), /*#__PURE__*/_react.React.createElement(_table["default"].Cell, null, postLima.headline), /*#__PURE__*/_react.React.createElement(_table["default"].Cell, null, postLima.articleBody)))), /*#__PURE__*/_react.React.createElement(MethodPost, null))
      );
    }; //


    exports.MethodGet = MethodGet;

    var MethodUpdate = function MethodUpdate() {
      var _useState7 = (0, _react.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          headline = _useState8[0],
          setheadline = _useState8[1];

      var _useState9 = (0, _react.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          articleBody = _useState10[0],
          setArticleBody = _useState10[1];

      var _useState11 = (0, _react.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          id = _useState12[0],
          setId = _useState12[1];

      return (/*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement(_form.ClayForm, null, /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("h1", null, "UPDATE"), /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "id"
        }, "ID"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "id",
          onChange: function onChange(e) {
            return setId(e.target.value);
          },
          placeholder: "id",
          type: "text",
          value: id
        })), /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("h1", null, "UPDATE HeadLine"), /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "id"
        }, "HeadLine"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "id",
          onChange: function onChange(e) {
            return setHeadLine(e.target.value);
          },
          placeholder: "headline",
          type: "text",
          value: headline
        })), /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("h1", null, "UPDTE ArticleBody"), /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "id"
        }, "ArticleBody"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "id",
          onChange: function onChange(e) {
            return setArticleBody(e.target.value);
          },
          placeholder: "articlebody",
          type: "text",
          value: articleBody
        })), /*#__PURE__*/_react.React.createElement(_button["default"], {
          onClick: (0, _Request.UPDATE)(id, headline, articleBody),
          displayType: "primary"
        }, "UPDATE")))
      );
    }; //


    exports.MethodUpdate = MethodUpdate;

    var MethodDelete = function MethodDelete() {
      var _useState13 = (0, _react.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          id = _useState14[0],
          setId = _useState14[1];

      return (/*#__PURE__*/_react.React.createElement(_react.React.Fragment, null, /*#__PURE__*/_react.React.createElement(_form.ClayForm.Group, {
          className: "form-group-sm"
        }, /*#__PURE__*/_react.React.createElement("label", {
          htmlFor: "id"
        }, "Delete"), /*#__PURE__*/_react.React.createElement(_form.ClayInput, {
          id: "id",
          onChange: function onChange(e) {
            return setId(e.target.value);
          },
          placeholder: "Delete",
          type: "text",
          value: id
        })), /*#__PURE__*/_react.React.createElement(_button["default"], {
          onClick: (0, _Request.DELETE)(id),
          displayType: "primary"
        }, "DELETE"))
      );
    };

    exports.MethodDelete = MethodDelete;
    //# sourceMappingURL=Methods.js.map
  }
});
//# sourceMappingURL=Methods.js.map