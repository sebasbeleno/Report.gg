webpackHotUpdate("static/development/pages/summoner/[region]/[summonerName].js",{

/***/ "./src/pages/summoner/[region]/[summonerName].js":
/*!*******************************************************!*\
  !*** ./src/pages/summoner/[region]/[summonerName].js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MatchList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MatchList */ "./src/components/MatchList.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_PageLoading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/PageLoading */ "./src/components/PageLoading.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api */ "./src/api.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Report.gg/src/pages/summoner/[region]/[summonerName].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      loading: true,
      error: null,
      summoner: null,
      summonerIcon: null,
      winRatio: null,
      emblem: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "fetchData", async e => {
      this.setState({
        loading: true,
        error: null
      });

      try {
        const data = await _api__WEBPACK_IMPORTED_MODULE_6__["default"].summoner.general(this.props.query.region, this.props.query.summonerName);
        let win_ratio = 0;
        let lose_ratio = 0;
        win_ratio = data.win_ratio;
        lose_ratio = 100 - win_ratio;
        console.log(win_ratio);
        console.log(lose_ratio);
        let winRate;
        winRate = {
          datasets: [{
            data: [win_ratio, lose_ratio],
            backgroundColor: ["#4ac036", "#f45247"]
          }]
        };
        this.setState({
          winRatio: winRate
        });
        this.setState({
          summoner: data
        });
        console.log(this.state.summoner.ranked_solo_fives.tier);
        this.loadImage(this.state.summoner.ranked_solo_fives.tier);
        this.setState({
          loading: false
        });
      } catch (err) {
        this.setState({
          loading: false,
          error: err
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "loadImage", imageName => {
      __webpack_require__("./src/images lazy recursive ^\\.\\/Emblem_.*\\.png$")("./Emblem_".concat(imageName, ".png")).then(image => {
        this.setState({
          image
        });
      });
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
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return __jsx(_components_PageLoading__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 14
        }
      });
    }

    if (this.state.error) {
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 12
        }
      }, this.state.error, "}");
    }

    const {
      image
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "contenedor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "profileIcon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "notify-badge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, this.state.summoner.level), __jsx("img", {
      src: this.state.summoner.iconUrl,
      alt: this.state.summoner.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }))), __jsx("div", {
      className: "summonerBasicInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, this.state.summoner.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      content: "Actualizar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
      data: this.state.winRatio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "rankedInfo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    }, image && __jsx("img", {
      src: image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "rankedText",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, this.state.summoner.ranked_solo_fives.tier, " ", this.state.summoner.ranked_solo_fives.division), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, "Ranked solo fives"), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, this.state.summoner.ranked_solo_fives.league_points))), __jsx("div", {
      className: "MatchList",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx(_components_MatchList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      MatchList: this.state.summoner.matchs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "mostPlayed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, "Campeones m\xE1s jugados"), this.state.summoner.campeones_mas_jugados.map(campeon => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "campeonIcon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: campeon.campeon.icon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "campeonName",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }, campeon.campeon.nombre)), __jsx("div", {
        className: "campeonCantidad",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }
      }, campeon.cantidad)));
    }))));
  }

}

/***/ })

})
//# sourceMappingURL=[summonerName].js.7c0657dd303bb0a8223e.hot-update.js.map