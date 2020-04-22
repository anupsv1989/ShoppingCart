webpackHotUpdate("static\\development\\pages\\cart.js",{

/***/ "./components/CartList.js":
/*!********************************!*\
  !*** ./components/CartList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/action */ "./redux/action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");







var _jsxFileName = "D:\\RandDChamber\\MyGitHub\\AdobeShoppingCart\\ShoppingCart\\components\\CartList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var getItemsinCart = _redux_action__WEBPACK_IMPORTED_MODULE_10__["default"].getItemsinCart;

var CartList = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CartList, _Component);

  var _super = _createSuper(CartList);

  function CartList(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CartList);

    _this2 = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "calculatePriceSum", function () {
      var price = 0;
      var discountedPrice = 0;

      _this2.state.cartDisplayItems.map(function (x) {
        price += x.item.price.actual;
        discountedPrice += x.item.price.display;
      });

      var discPrice = discountedPrice - price;

      _this2.setState({
        totalPriceOfItems: price,
        totalPriceDisplay: discountedPrice,
        totalDiscountedPrice: discPrice
      });

      return price;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "increment", function (item, index) {
      var price = _this2.state.totalPriceOfItems;
      var discPrice = _this2.state.totalDiscountedPrice;
      var firstPrice = _this2.state.totalPriceDisplay;
      price += item.price.actual;
      firstPrice += item.price.display;
      discPrice = firstPrice - price;

      _this2.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
        totalPriceOfItems: price,
        totalPriceDisplay: firstPrice,
        totalDiscountedPrice: discPrice
      }, index + item.name, _this2.state[index + item.name] ? _this2.state[index + item.name] + 1 : _this2.state.initialItems + 1));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "decrement", function (item, index) {
      var price = _this2.state.totalPriceOfItems;
      var discPrice = _this2.state.totalDiscountedPrice;
      var firstPrice = _this2.state.totalPriceDisplay;

      if (_this2.state[index + item.name] != undefined) {
        price -= item.price.actual;
        firstPrice -= item.price.display;
        discPrice = firstPrice - price;
      }

      _this2.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
        totalPriceOfItems: price,
        totalPriceDisplay: firstPrice,
        totalDiscountedPrice: discPrice
      }, index + item.name, _this2.state[index + item.name] ? _this2.state[index + item.name] - 1 : _this2.state.initialItems - 1));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "removeItems", function (item, idx) {
      var arr = _this2.state.cartDisplayItems;

      var _this = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2);

      var index = arr.map(function (x) {
        return x.key;
      }).indexOf(item.key);
      arr.splice(index, 1);
      console.log("Items in cart after deletion : ", arr.length);
      console.log("Items in cart after deletion arr data : ", arr);

      _this2.setState({
        cartDisplayItems: arr
      }, function () {
        if (_this.state.cartDisplayItems.length > 0) {
          _this.calculatePriceSum();
        }
      });
    });

    _this2.state = {
      cartDisplayItems: [],
      initialItems: 1,
      totalPriceOfItems: 0,
      totalDiscountedPrice: 0,
      totalPriceDisplay: 0
    };
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CartList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.setState({
        cartDisplayItems: this.props.itemsInCart
      }, function () {
        if (_this.props.itemsInCart && _this.props.itemsInCart.length > 0) _this.calculatePriceSum();
      });
      console.log(" this.props.itemsInCart did mount", this.props.itemsInCart);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log("NExt props in cartjs", nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var itemsInCart = this.props.itemsInCart;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "cartContainerDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }, this.state.cartDisplayItems && this.state.cartDisplayItems.length > 0 ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "cartContainerDiv__cartLeftNav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 33
        }
      }, this.state.cartDisplayItems.map(function (i, index) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
          gutter: 16,
          key: index,
          className: "cartContainerDiv__cartLeftNav--Row",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 41
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          span: 6,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "cartContainerDiv__cartLeftNav--cartListDiv",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 49
          }
        }, __jsx("img", {
          alt: "example",
          src: "https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 53
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          span: 6,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "cartContainerDiv__cartLeftNav--cartListText",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 49
          }
        }, __jsx("span", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 53
          }
        }, i.item.name), __jsx("p", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 53
          }
        }, __jsx("span", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 57
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 63
          }
        }, "\u20B9 ", i.item.price.actual), " "), __jsx("span", {
          className: "shoppingListWrap__listCols--cardprice",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 57
          }
        }, i.item.price.display), __jsx("span", {
          className: "shoppingListWrap__listCols--carddiscount",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 57
          }
        }, i.item.discount, " % off")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          span: 6,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "cartContainerDiv__cartLeftNav--cartListText",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 49
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["PlusOutlined"], {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 97
            }
          }),
          size: "middle",
          onClick: function onClick() {
            return _this3.increment(i.item, index);
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 53
          }
        }), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "dashed",
          style: {
            margin: "5px"
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 53
          }
        }, _this3.state[index + i.item.name] > 0 ? _this3.state[index + i.item.name] : _this3.state.initialItems), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["MinusOutlined"], {
            __self: _this3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 97
            }
          }),
          size: "middle",
          disabled: _this3.state[index + i.item.name] == 1 ? true : false,
          onClick: function onClick() {
            return _this3.decrement(i.item, index);
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 53
          }
        }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
          span: 6,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "cartContainerDiv__cartLeftNav--cartListText",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 49
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "link",
          danger: true,
          onClick: function onClick() {
            return _this3.removeItems(i.item, index);
          },
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 53
          }
        }, __jsx("strong", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 57
          }
        }, " Remove ")))));
      }))), __jsx("div", {
        className: "cartContainerDiv__cartRightNav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 29
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Price Details",
        className: "cartContainerDiv__cartRightNav--card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 33
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        gutter: 16,
        className: "cartContainerDiv__cartRightNav--row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 37
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 16,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 41
        }
      }, "Price"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 41
        }
      }, this.state.totalPriceDisplay)), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        gutter: 16,
        className: "cartContainerDiv__cartRightNav--row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 37
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 16,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 41
        }
      }, "Discount"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 41
        }
      }, this.state.totalDiscountedPrice)), __jsx("hr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 37
        }
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        gutter: 16,
        className: "cartContainerDiv__cartRightNav--row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 37
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 16,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 41
        }
      }, "Total"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 41
        }
      }, this.state.totalPriceOfItems))))) : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }
      }, "Cart is Empty To add items into cart click", __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 39
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 33
        }
      }, " Home")))));
    }
  }]);

  return CartList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    itemsInCart: state.itemsInCart
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  getItemsinCart: getItemsinCart
})(CartList));

/***/ })

})
//# sourceMappingURL=cart.js.72c00dfbc308f2aff852.hot-update.js.map