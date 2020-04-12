module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/YCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2U8R");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  getItemsinCart
} = _redux_action__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"];

class CartIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.props.getItemsinCart();
  }

  render() {
    return __jsx("span", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      count: this.props.itemsInCart ? this.props.itemsInCart.length : 0
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartOutlined"], {
      style: {
        fontSize: "20px"
      }
    })));
  }

}

const mapStateToProps = state => {
  return {
    itemsInCart: state.itemsInCart
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getItemsinCart
})(CartIcon));

/***/ }),

/***/ "2U8R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// exporting default actions;
const actions = {
  FETCH_ITEM: "FETCH_ITEM",
  FETCH_ITEM_SUCCESS: "FETCH_ITEM_SUCCESS",
  FETCH_ITEM_FAILURE: "FETCH_ITEM_FAILURE",
  GET_ITEMS_IN_CART: "GET_ITEMS_IN_CART",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  DELETE_ITEM_FROM_CART: "DELETE_ITEM_FROM_CART",
  APPLY_FILTER: "APPLY_FILTER",
  APPLY_SEARCH: "APPLY_SEARCH",
  onFetchItem: () => ({
    type: actions.FETCH_ITEM,
    value: 1
  }),
  onFetchItemSuccess: result => ({
    type: actions.FETCH_ITEM_SUCCESS,
    result
  }),
  onFetchItemError: result => ({
    type: actions.FETCH_ITEM_FAILURE,
    result
  }),
  getItemsinCart: () => ({
    type: actions.GET_ITEMS_IN_CART
  }),
  onAddItemtoCart: payload => ({
    type: actions.ADD_ITEM_TO_CART,
    payload
  }),
  deleteItemfromCart: payload => ({
    type: actions.DELETE_ITEM_FROM_CART,
    payload
  }),
  onApplyFilter: payload => ({
    type: actions.APPLY_FILTER,
    payload
  }),
  onApplySearch: payload => ({
    type: actions.APPLY_SEARCH,
    payload
  })
};
/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("oVyb");


/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oVyb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./redux/action.js
var action = __webpack_require__("2U8R");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/Filter.js

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  onApplyFilter
} = action["a" /* default */];

class Filter_Filter extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "getAmountRange", value => {
      console.log("Value", value);
      this.setState({
        amountRange: value
      }); //this returns an aray
    });

    _defineProperty(this, "onApplyFilter", () => {
      console.log("Price range", this.state.amountRange);
      this.props.onApplyFilter(this.state.amountRange);
    });

    this.state = {
      amountRange: [100, 900]
    };
  }

  render() {
    const marks = {
      100: {
        style: {
          color: "grey"
        },
        label: __jsx("strong", null, " \u20B9 100")
      },
      3000: {
        style: {
          color: 'grey',
          marginLeft: "-60px"
        },
        label: __jsx("strong", null, " \u20B9 3000")
      }
    };
    return __jsx("div", {
      className: "filterConatiner"
    }, __jsx("h3", null, "Filters"), __jsx("div", {
      className: "filterConatiner__slider"
    }, __jsx(external_antd_["Slider"], {
      range: true,
      min: 100,
      max: 3000,
      marks: marks,
      defaultValue: [100, 900],
      tooltipVisible: true,
      tooltipPlacement: "top",
      onChange: this.getAmountRange
    })), __jsx(external_antd_["Button"], {
      type: "primary",
      shape: "round",
      size: "middle",
      className: "filterConatiner__btn",
      onClick: this.onApplyFilter
    }, "Apply"));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ var components_Filter = (Object(external_react_redux_["connect"])(mapStateToProps, {
  onApplyFilter
})(Filter_Filter));
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./components/Sorter.js

var Sorter_jsx = external_react_default.a.createElement;

function Sorter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  SubMenu
} = external_antd_["Menu"];
class Sorter_Sorter extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    Sorter_defineProperty(this, "state", {
      current: 'mail'
    });

    Sorter_defineProperty(this, "handleClick", e => {
      console.log('click ', e.key);
      let active = e.key;
      this.setState({
        current: e.key
      });

      if (active == "highlow") {
        this.applySort("HL");
      } else if (active == "lowhigh") {
        this.applySort("LH");
      } else if (active == "discount") {
        this.applySort("DIS");
      } else {
        console.log("Else");
      }
    });

    Sorter_defineProperty(this, "applySort", type => {
      // test data
      // let items = [
      //     { "name": "item 1", "price": { "actual": 100, "display": 900 }, "discount": 64 },
      //     { "name": "item 2", "price": { "actual": 200, "display": 900 }, "discount": 64 },
      //     { "name": "item 3", "price": { "actual": 300, "display": 900 }, "discount": 64 },
      //     { "name": "item 4", "price": { "actual": 700, "display": 900 }, "discount": 64 },
      //     { "name": "item 5", "price": { "actual": 600, "display": 900 }, "discount": 64 },
      //     { "name": "item 6", "price": { "actual": 900, "display": 900 }, "discount": 64 },
      //     { "name": "item 7", "price": { "actual": 400, "display": 900 }, "discount": 64 },
      //     { "name": "item 8", "price": { "actual": 200, "display": 900 }, "discount": 64 }
      // ]
      let items = this.props.listData;
      items.sort(function (a, b) {
        if (type == "HL") {
          return a.price.actual - b.price.actual;
        }

        if (type == "LH") {
          return b.price.actual - a.price.actual;
        }

        if (type == "DIS") {
          return a.discount - b.discount;
        }
      });
      console.log("Items sorted", items);
      this.props.callParent(items);
    });
  }

  render() {
    return Sorter_jsx("div", null, Sorter_jsx(external_antd_["Menu"], {
      onClick: this.handleClick,
      selectedKeys: [this.state.current],
      mode: "horizontal"
    }, Sorter_jsx(external_antd_["Menu"].Item, {
      key: "sortby",
      disabled: true
    }, Sorter_jsx("span", {
      className: "sorter__menu--nav1"
    }, "Sort By  ")), Sorter_jsx(external_antd_["Menu"].Item, {
      key: "highlow"
    }, Sorter_jsx(icons_["FallOutlined"], null), "Price -- High Low"), Sorter_jsx(external_antd_["Menu"].Item, {
      key: "lowhigh"
    }, Sorter_jsx(icons_["RiseOutlined"], null), "Price -- Low High"), Sorter_jsx(external_antd_["Menu"].Item, {
      key: "discount"
    }, Sorter_jsx(icons_["MoneyCollectOutlined"], null), "Discount")));
  }

}
// CONCATENATED MODULE: ./components/ShoppingList.js

var ShoppingList_jsx = external_react_default.a.createElement;

function ShoppingList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  onAddItemtoCart,
  getItemsinCart
} = action["a" /* default */];

class ShoppingList_ShoppingList extends external_react_["Component"] {
  constructor(props) {
    super(props);

    ShoppingList_defineProperty(this, "searchFilteredList", val => {
      console.log("Search value", val);
      let tempArr = [];
      let {
        listData: currentData = []
      } = this.props;
      currentData.map(item => {
        if (item.name == val) {
          tempArr.push(item);
        }
      });
      this.setState({
        displayList: tempArr
      });
    });

    ShoppingList_defineProperty(this, "amountFilteredList", rangeVal => {
      // if the price range is between rangeval then add that item to another array
      let tempArr = [];
      let currentData = this.props.listData;
      currentData.map(item => {
        if (item.price.actual > rangeVal[0] && item.price.actual < rangeVal[1]) {
          tempArr.push(item);
        }
      });
      this.setState({
        displayList: tempArr
      });
    });

    ShoppingList_defineProperty(this, "addItemtoCart", (item, index) => {
      let dataObj = {
        index,
        item
      };
      this.setState({
        [index + item.name]: true
      });
      this.props.onAddItemtoCart(dataObj);
      this.props.getItemsinCart();
    });

    this.state = {
      existingItemsinCart: [],
      displayList: [],
      isDisabled: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      applyRangeFilter = []
    } = nextProps;
    this.setState({
      displayList: nextProps.listData
    });

    if (nextProps.renderSortedData && nextProps.renderSortedData.length > 0) {
      this.setState({
        displayList: nextProps.renderSortedData
      });
    }

    if (applyRangeFilter.length > 0) {
      this.amountFilteredList(applyRangeFilter);
    }

    if (nextProps.applySearchFilter && nextProps.applySearchFilter != "") {
      this.searchFilteredList(nextProps.applySearchFilter);
    }
  }

  componentDidMount() {
    this.props.getItemsinCart();
  }

  render() {
    const {
      listData: displayList = []
    } = this.props;
    console.log("renderSortedData <<<<<>>>>>> renderSortedData", this.props.renderSortedData);
    return ShoppingList_jsx("div", null, ShoppingList_jsx("div", {
      className: "shoppingListWrap"
    }, ShoppingList_jsx(external_antd_["Row"], {
      gutter: 16
    }, this.state.displayList.map((item, index) => ShoppingList_jsx(external_antd_["Col"], {
      span: 4,
      className: "shoppingListWrap__listCols",
      key: index
    }, ShoppingList_jsx(external_antd_["Card"], {
      className: "shoppingListWrap__listCols--card",
      cover: ShoppingList_jsx("img", {
        alt: "example",
        src: "https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg"
      })
    }, ShoppingList_jsx("p", null, item.name), ShoppingList_jsx("p", null, ShoppingList_jsx("span", null, ShoppingList_jsx("strong", null, " \u20B9", item.price.actual, " "), " "), ShoppingList_jsx("span", {
      className: "shoppingListWrap__listCols--cardprice"
    }, " ", item.price.display), ShoppingList_jsx("span", {
      className: "shoppingListWrap__listCols--carddiscount"
    }, "  ", item.discount, "% off")), ShoppingList_jsx(external_antd_["Button"], {
      type: "primary",
      shape: "round",
      size: "middle",
      disabled: this.state[index + item.name] ? this.state[index + item.name] : this.state.isDisabled,
      className: "shoppingListWrap__listCols--AddBtn",
      onClick: () => this.addItemtoCart(item, index)
    }, "Add to Cart")))))));
  }

}

const ShoppingList_mapStateToProps = state => {
  return {
    itemsInCart: state.itemsInCart,
    applySearchFilter: state.applySearchFilter,
    applyRangeFilter: state.applyRangeFilter
  };
};

/* harmony default export */ var components_ShoppingList = (Object(external_react_redux_["connect"])(ShoppingList_mapStateToProps, {
  onAddItemtoCart,
  getItemsinCart
})(ShoppingList_ShoppingList));
// EXTERNAL MODULE: ./components/CartIcon.js
var CartIcon = __webpack_require__("/YCn");

// CONCATENATED MODULE: ./pages/list.js

var list_jsx = external_react_default.a.createElement;

function list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  onFetchItem
} = action["a" /* default */];
const jsondata = [{
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

class list_ListPage extends external_react_["Component"] {
  constructor(props) {
    super(props);

    list_defineProperty(this, "callChild", dataFromSorter => {
      this.setState({
        dataFromSorter: dataFromSorter
      });
    });

    this.state = {
      dataFromSorter: []
    };
  }

  render() {
    console.log("props data", this.props.shoppingListData);
    return list_jsx(external_react_default.a.Fragment, null, list_jsx("div", {
      className: "containerDiv"
    }, list_jsx("div", {
      className: "leftNav"
    }, list_jsx(components_Filter, null)), list_jsx("div", {
      className: "mainComponent"
    }, list_jsx(Sorter_Sorter, {
      callParent: this.callChild,
      listData: this.props.shoppingListData
    }), list_jsx(components_ShoppingList, {
      listData: this.props.shoppingListData,
      renderSortedData: this.state.dataFromSorter
    }))));
  }

}

const list_mapStateToProps = state => {
  return {
    shoppingListData: state.shoppingListData
  };
};

/* harmony default export */ var list = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(list_mapStateToProps, {
  onFetchItem
})(list_ListPage));

/***/ })

/******/ });