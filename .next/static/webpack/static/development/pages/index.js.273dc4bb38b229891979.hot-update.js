webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Navbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true
    };
    this.handleHome = this.handleHome.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

  render() {
    return __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("nav", {
      className: "navbar mr-auto navbar-expand-lg navbar-light bg-transparent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      onClick: this.handleHome,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      src: logo,
      width: "70",
      alt: "DatBig Logo",
      className: "DatBigLogo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }))), __jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarsExampleDefault",
      "aria-controls": "navbarsExampleDefault",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("span", {
      className: "navbar-toggler-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx("div", {
      className: "collapse navbar-collapse mr-3",
      id: "navbarsExampleDefault",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("ul", {
      className: "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, this.state.isHome === true ? __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      "data-scroll": true,
      href: "#solutions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Soluciones")) : __jsx("li", {
      className: "nav-item active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      onClick: this.handleHome,
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      "data-scroll": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Home"))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      className: "",
      onClick: this.handleContact,
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("a", {
      className: "contacButtom nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Contact us")))))));
  }

  handleContact() {
    this.setState({
      isHome: false
    });
  }

  handleHome() {
    this.setState({
      isHome: true
    });
  }

}

/***/ })

})
//# sourceMappingURL=index.js.273dc4bb38b229891979.hot-update.js.map