webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Global.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/pages/styles/Global.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body{\n    height: 100vh;\n}", "",{"version":3,"sources":["/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/pages/styles/Global.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB","file":"Global.css","sourcesContent":["body{\n    height: 100vh;\n}"]}]);


/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Styles_Navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Styles/Navbar.css */ "./src/components/Styles/Navbar.css");
/* harmony import */ var _components_Styles_Navbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Styles_Navbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Home.css */ "./src/pages/styles/Home.css");
/* harmony import */ var _styles_Home_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Global.css */ "./src/pages/styles/Global.css");
/* harmony import */ var _styles_Global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Global_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      router
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "// TODO: Add metatags"), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      key: router.route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/pages/styles/Global.css":
/*!*************************************!*\
  !*** ./src/pages/styles/Global.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Global.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Global.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Global.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.5b5da2defc82aefee49c.hot-update.js.map