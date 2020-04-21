webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/rootReducer.js":
/*!******************************!*\
  !*** ./redux/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./redux/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  shoppingListData: [],
  itemsInCart: [],
  applyRangeFilter: [],
  applySearchFilter: "",
  applySortActionData: ""
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var newState = _objectSpread({}, state);

  switch (action.type) {
    case "FETCH_ITEM_SUCCESS":
      console.log("Inside reducer", action.result);
      newState.shoppingListData = action.result;
      break;

    case "GET_ITEMS_IN_CART":
      newState.itemsInCart = newState.itemsInCart;
      console.log("To get items in cart ", newState.itemsInCart);
      break;

    case "ADD_ITEM_TO_CART":
      console.log("Addinf more items ", action.payload);
      var tempData = action.payload;
      var existingItems = newState.itemsInCart;
      console.log("Existoing items in cart ", existingItems);

      if (!existingItems.includes(action.payload.item.name)) {
        var _newState$itemsInCart = newState.itemsInCart,
            temp = _newState$itemsInCart === void 0 ? [] : _newState$itemsInCart;
        temp.push(tempData);
        newState.itemsInCart = temp;
      }

      console.log("After Adding items", newState.itemsInCart);
      break;

    case "DELETE_ITEM_FROM_CART":
      console.log("Addinf more items ", action.payload);
      var tempDelData = action.payload;
      var tempDel = newState.itemsInCart;
      tempDel.push(tempDelData);
      newState.itemsInCart = tempDel;
      break;

    case "APPLY_FILTER":
      newState.applyRangeFilter = action.payload;
      newState.applySortActionData = "";
      break;

    case "APPLY_SEARCH":
      newState.applySearchFilter = action.payload;
      newState.applySortActionData = "";
      break;

    case "APPLY_SORT":
      newState.applySortActionData = action.payload;
      break;
  }

  return newState;
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.ad5ffa9393c1ba4724ac.hot-update.js.map