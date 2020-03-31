webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Dropdownform.js":
/*!****************************************!*\
  !*** ./src/components/Dropdownform.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/beleno/Desktop/Proyectos/Personales/Reportgg/report/src/components/Dropdownform.js";
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

class DropdownForm extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Componen {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleChange", (e, {
      value
    }) => this.setState({
      value
    }));
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      placeholder: "Selecciona Regi\xF3n",
      selection: true,
      options: servers,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DropdownForm);

/***/ })

})
//# sourceMappingURL=index.js.3de12de1268db1358d15.hot-update.js.map