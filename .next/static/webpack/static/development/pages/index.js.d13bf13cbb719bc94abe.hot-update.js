webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SummonerForm.js":
/*!****************************************!*\
  !*** ./src/components/SummonerForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/components/SummonerForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const servers = [{
  key: 'LAN',
  text: 'LAN',
  value: 'LAN'
}, {
  key: 'LAS',
  text: 'LAS',
  value: 'LAS'
}, {
  key: 'NA',
  text: 'NA',
  value: 'NA'
}];

class DropdownForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      region: 'LAN'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", (e, {
      value
    }) => this.setState({
      region: value
    }));
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      placeholder: "Selecciona Regi\xF3n",
      selection: true,
      value: this.state.region,
      options: servers,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    });
  }

}

class SummonerForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("form", {
      onSubmit: this.props.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "input-group mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(DropdownForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx("input", {
      placeholder: "Type your summoner name",
      type: "text",
      className: "form-control",
      name: "summoner",
      id: "summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("div", {
      className: "input-group-prepend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("button", {
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Buscar"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SummonerForm);

/***/ })

})
//# sourceMappingURL=index.js.d13bf13cbb719bc94abe.hot-update.js.map