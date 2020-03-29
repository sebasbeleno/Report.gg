webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Home.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/pages/styles/Home.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../../images/Bg.png */ "./src/images/Bg.png");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Khand:400,700&display=swap);"]);
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
// Module
exports.push([module.i, "body{\n    background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    font-family: Khand;\n    color: white;\n}\nh1{\n    font-weight: 700 !important;\n}\n\n.title{\n    padding-top: 50%;\n}\n\n.info{\n    background: #6441A5;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    height: 100vh;\n    border-radius: 30px 30px 0px 0px;\n}\n\n.inforcontainer{\n    padding-top: 7%;\n}\n\n.textInfo p{\n    font-size: 30px;\n}\n\n.textInfo a{\n    color: white;\n    text-decoration: none;\n    font-weight: 700 !important;\n}\n\n.btn-primary {\n    background-color: #4B23B4 !important;\n}", "",{"version":3,"sources":["/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/pages/styles/Home.css"],"names":[],"mappings":"AAEA;IACI,oDAA4C;IAC5C,sBAAsB;IACtB,4BAA4B;IAC5B,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB,GAAG,8BAA8B,GACe,+BAA+B;IAClG,uDAAuD,EAAE,qEAAqE;IAC9H,aAAa;IACb,gCAAgC;AACpC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,2BAA2B;AAC/B;;AAEA;IACI,oCAAoC;AACxC","file":"Home.css","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Khand:400,700&display=swap');\n\nbody{\n    background-image: url('../../images/Bg.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    font-family: Khand;\n    color: white;\n}\nh1{\n    font-weight: 700 !important;\n}\n\n.title{\n    padding-top: 50%;\n}\n\n.info{\n    background: #6441A5;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #2a0845, #6441A5,);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    height: 100vh;\n    border-radius: 30px 30px 0px 0px;\n}\n\n.inforcontainer{\n    padding-top: 7%;\n}\n\n.textInfo p{\n    font-size: 30px;\n}\n\n.textInfo a{\n    color: white;\n    text-decoration: none;\n    font-weight: 700 !important;\n}\n\n.btn-primary {\n    background-color: #4B23B4 !important;\n}"]}]);


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/images/Bg.png":
/*!***************************!*\
  !*** ./src/images/Bg.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Bg.0cc134c849f4945fa8efe34909e96f59.png";

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
        lineNumber: 22
      },
      __self: this
    }, "// TODO: Add metatags"), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      key: router.route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/pages/styles/Home.css":
/*!***********************************!*\
  !*** ./src/pages/styles/Home.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Home.css");

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
      /*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Home.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../node_modules/postcss-loader/src??__nextjs_postcss!./Home.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/styles/Home.css");

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
//# sourceMappingURL=_app.js.b14ecbf228efd6a79c09.hot-update.js.map