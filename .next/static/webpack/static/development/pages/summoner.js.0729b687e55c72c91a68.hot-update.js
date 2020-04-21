webpackHotUpdate("static/development/pages/summoner.js",{

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const BASE_URL = "https://reportggapi.rj.r.appspot.com";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  summoner: {
    general(region, summonerName) {
      return callApi("/summoner?region=".concat(region, "&summoner_name=").concat(summonerName));
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ })

})
//# sourceMappingURL=summoner.js.0729b687e55c72c91a68.hot-update.js.map