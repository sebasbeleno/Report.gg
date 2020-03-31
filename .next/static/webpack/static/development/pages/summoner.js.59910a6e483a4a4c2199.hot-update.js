webpackHotUpdate("static/development/pages/summoner.js",{

/***/ "./src/pages/summoner.js":
/*!*******************************!*\
  !*** ./src/pages/summoner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageLoading */ "./src/components/PageLoading.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/api.js");

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/pages/summoner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      loading: true,
      error: null,
      urlParams: {
        region: "None",
        summonerName: "None"
      },
      summoner: null,
      summonerIcon: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchData", async e => {
      this.setState({
        loading: true,
        error: null
      });
      console.log(this.state.urlParams);

      try {
        console.log("Data.");
        const data = await _api__WEBPACK_IMPORTED_MODULE_4__["default"].summoner.general(this.state.urlParams.region, this.state.urlParams.summonerName);
        console.log("No se");
        console.log(data);
        this.setState({
          loading: false,
          summoner: data,
          summonerIcon: "http://avatar.leagueoflegends.com/lan/".concat(data.summonerName, ".png")
        });
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
          error: err
        });
      }
    });
  }

  static getInitialProps({
    query
  }) {
    return {
      query
    };
  }

  componentDidMount() {
    console.log(this.props.query.region);
    console.log(this.props.query.summonerName);
    this.setState({
      urlParams: {
        region: "".concat(this.props.region),
        summonerName: "".concat(this.props.query.summonerName)
      }
    });
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("div", {
      className: "container inforcontainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      src: this.state.summonerIcon,
      alt: this.state.summoner.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    })), __jsx("div", {
      className: "col-sm-6 textInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, this.state.summoner.name), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Level: ", __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.state.summoner.summonerLevel)))))));
  }

}

/***/ })

})
//# sourceMappingURL=summoner.js.59910a6e483a4a4c2199.hot-update.js.map