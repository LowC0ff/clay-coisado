"use strict";

Liferay.Loader.define("react-clay@1.0.0/Request", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UPDATE = exports.POST = exports.GET = exports.DELETE = void 0;
    var liferayId = themeDisplay.getSiteGroupId();

    var POST = function POST(headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/blog-postings"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('test@liferay.com:123')
        },
        body: JSON.stringify({
          headline: headline,
          articleBody: articleBody
        })
      }).then(function (r) {
        return r.json();
      });
    }; //


    exports.POST = POST;

    var GET = function GET() {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/blog-postings"), {
        method: 'GET'
      }).then(function (r) {
        return r.json();
      });
    }; //


    exports.GET = GET;

    var UPDATE = function UPDATE(liferayId, headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/blog-postings"), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          headline: headline,
          articleBody: articleBody
        })
      }).then(function (r) {
        return r.json();
      });
    }; //


    exports.UPDATE = UPDATE;

    var DELETE = function DELETE(id) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(id, "/blog-postings"), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (r) {
        return r.json();
      });
    };

    exports.DELETE = DELETE;
    //# sourceMappingURL=Request.js.map
  }
});
//# sourceMappingURL=Request.js.map