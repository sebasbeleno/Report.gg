webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _images_poro_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/poro.png */ "./src/images/poro.png");
/* harmony import */ var _images_poro_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_poro_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SummonerForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SummonerForm */ "./src/components/SummonerForm.js");
var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  handleSubmit(e) {
    e.preventDefault();
    var summonerName = e.target.summoner.value;
    console.log(summonerName);
    this.props.history.push("/summoner/".concat(summonerName));
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("div", {
      className: "container ",
      tyle: "height: 100px;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-6 col-sm-6 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Obt\xE9n asistencia, est\xE1distica & mucho m\xE1s "), __jsx(_components_SummonerForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onSubmit: this.handleSubmit.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))))), __jsx("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "container inforcontainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("img", {
      src: _images_poro_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      className: "img-fluid",
      alt: "Poro :D",
      width: "560px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("div", {
      className: "col-sm-6 textInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "By LATAM, for LATAM "), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Report.gg is develod by", " ", __jsx("a", {
      href: "http://sebasbeleno.herokuapp.com/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Sebastian Bele\xF1o"), ", LoL and coffee lover. This proyect is open source, you can wacht the full code in GitHub :D."), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "If you wanna, you can donate to the proyect to implement new upgrades and new features :D."))))));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.f231a90d3f3791a83f9e.hot-update.js.map