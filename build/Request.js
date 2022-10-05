"use strict";

Liferay.Loader.define("react-clay@1.0.0/Request", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.docUPDATE = exports.docPOST = exports.UPDATE = exports.POST = exports.GET = exports.DELETE = void 0;
    var liferayId = themeDisplay.getSiteGroupId();

    var POST = function POST(headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/blog-postings"), {
        method: 'POST',
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


    exports.POST = POST;

    var GET = function GET(local) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/").concat(local), {
        method: 'GET'
      }).then(function (r) {
        return r.json();
      });
    }; //


    exports.GET = GET;

    var UPDATE = function UPDATE(local, Id, headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/".concat(local, "/").concat(Id), {
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

    var DELETE = function DELETE(local, id) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/".concat(local, "/").concat(id), {
        method: 'DELETE' //headers: { 
        //    'Content-Type': 'application/json'
        //}

      });
    }; //


    exports.DELETE = DELETE;

    var docPOST = function docPOST() {
      var input = document.getElementById('fileDoc').files[0];
      var data = new FormData();
      data.append('file', input);
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(liferayId, "/documents"), {
        method: 'POST',
        body: data
      }).then(function (r) {
        window.location.reload();
      });
    }; //


    exports.docPOST = docPOST;

    var docUPDATE = function docUPDATE(id) {
      var doc = document.querySelector('input[type="file"]');
      var data = new FormData();
      data.append("file", doc.files[0]);
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(id, "/documents"), {
        body: data,
        method: 'PUT'
      });
    };

    exports.docUPDATE = docUPDATE;
    //# sourceMappingURL=Request.js.map
  }
});
//# sourceMappingURL=Request.js.map