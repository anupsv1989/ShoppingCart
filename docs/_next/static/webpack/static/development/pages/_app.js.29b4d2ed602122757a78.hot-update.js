webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/rootSaga.js":
/*!***************************!*\
  !*** ./redux/rootSaga.js ***!
  \***************************/
/*! exports provided: get, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./redux/action.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(onFetchItem),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);

// import { delay } from "redux-saga";


var headers = {
  'Content-Type': 'application/json'
};
function get(url) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function get$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            try {
              var options = {
                method: 'GET',
                headers: headers
              };
              fetch(url, options).then(function (res) {
                if (200 === res.status) {
                  return res.json();
                } else {
                  var error = {
                    response: res
                  };
                  console.log("Error");
                }
              }).then(function (res) {
                resolve(res);
              });
            } catch (error) {
              console.log("Error");
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

var fetchListData = function fetchListData() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchListData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(get("https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380"));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
}; // await get("https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d");


function onFetchItem() {
  var errMsg, searchResult;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function onFetchItem$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // yield delay(4000);
          console.log("Inside sAga On Fethc Item"); // let res = localStorage.getItem("parentReleaseData")
          // yield put({ type: "FETCH_ITEM_SUCCESS", result: res });

          errMsg = "Error in fetching data.";
          _context3.prev = 2;
          // const searchResult = yield call(fetchListData);//Saga is suspended until the Promise returned by call
          // commented the api call and appended static data as all the api links have expired .
          searchResult = [{
            "name": "item 1",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 2",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 3",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 4",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 5",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 6",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 7",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }, {
            "name": "item 8",
            "price": {
              "actual": 319,
              "display": 900
            },
            "discount": 64
          }];

          if (!(searchResult !== undefined)) {
            _context3.next = 12;
            break;
          }

          if (!(searchResult.items.length > 0)) {
            _context3.next = 10;
            break;
          }

          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].onFetchItemSuccess(searchResult));

        case 8:
          _context3.next = 12;
          break;

        case 10:
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].onFetchItemError(errMsg));

        case 12:
          _context3.next = 18;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          _context3.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_action__WEBPACK_IMPORTED_MODULE_2__["default"].onFetchItemError(errMsg));

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked, null, [[2, 14]]);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])("FETCH_ITEM", onFetchItem);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked2);
}

/***/ })

})
//# sourceMappingURL=_app.js.29b4d2ed602122757a78.hot-update.js.map