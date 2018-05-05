(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Paginator"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Paginator"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PAGINATION_SIZE: 5,
  PAGE_START_INDEX: 1,
  With_FIRST_AND_LAST: true,
  SHOW_ALL_PAGE_BTNS: false,
  FIRST_PAGE_TEXT: '<<',
  PRE_PAGE_TEXT: '<',
  NEXT_PAGE_TEXT: '>',
  LAST_PAGE_TEXT: '>>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE_TITLE: 'first page',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  HIDE_SIZE_PER_PAGE: false,
  HIDE_PAGE_LIST_ONLY_ONE_PAGE: false
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapper = __webpack_require__(5);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    wrapperFactory: _wrapper2.default,
    options: options
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

var _pagination = __webpack_require__(10);

var _pagination2 = _interopRequireDefault(_pagination);

var _page = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base, _ref) {
  var _class, _temp;

  var remoteResolver = _ref.remoteResolver;
  return _temp = _class = function (_remoteResolver) {
    _inherits(PaginationWrapper, _remoteResolver);

    function PaginationWrapper(props) {
      _classCallCheck(this, PaginationWrapper);

      var _this = _possibleConstructorReturn(this, (PaginationWrapper.__proto__ || Object.getPrototypeOf(PaginationWrapper)).call(this, props));

      _this.handleChangePage = _this.handleChangePage.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);

      var currPage = void 0;
      var currSizePerPage = void 0;
      var options = props.pagination.options;

      var sizePerPageList = options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST;

      // initialize current page
      if (typeof options.page !== 'undefined') {
        currPage = options.page;
      } else if (typeof options.pageStartIndex !== 'undefined') {
        currPage = options.pageStartIndex;
      } else {
        currPage = _const2.default.PAGE_START_INDEX;
      }

      // initialize current sizePerPage
      if (typeof options.sizePerPage !== 'undefined') {
        currSizePerPage = options.sizePerPage;
      } else if (_typeof(sizePerPageList[0]) === 'object') {
        currSizePerPage = sizePerPageList[0].value;
      } else {
        currSizePerPage = sizePerPageList[0];
      }

      _this.state = { currPage: currPage, currSizePerPage: currSizePerPage };
      _this.saveToStore(currPage, currSizePerPage);
      return _this;
    }

    _createClass(PaginationWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var needNewState = false;
        var _state = this.state,
            currPage = _state.currPage,
            currSizePerPage = _state.currSizePerPage;
        var _nextProps$pagination = nextProps.pagination.options,
            page = _nextProps$pagination.page,
            sizePerPage = _nextProps$pagination.sizePerPage,
            pageStartIndex = _nextProps$pagination.pageStartIndex,
            onPageChange = _nextProps$pagination.onPageChange;


        if (typeof page !== 'undefined' && currPage !== page) {
          // user defined page
          currPage = page;
          needNewState = true;
        } else if (nextProps.isDataChanged) {
          // user didn't defined page but data change
          currPage = typeof pageStartIndex !== 'undefined' ? pageStartIndex : _const2.default.PAGE_START_INDEX;
          needNewState = true;
        }

        if (typeof sizePerPage !== 'undefined') {
          currSizePerPage = sizePerPage;
          needNewState = true;
        }

        this.saveToStore(currPage, currSizePerPage);

        if (needNewState) {
          if (onPageChange) {
            onPageChange(currPage, currSizePerPage);
          }
          this.setState(function () {
            return { currPage: currPage, currSizePerPage: currSizePerPage };
          });
        }
      }
    }, {
      key: 'saveToStore',
      value: function saveToStore(page, sizePerPage) {
        this.props.store.page = page;
        this.props.store.sizePerPage = sizePerPage;
      }
    }, {
      key: 'handleChangePage',
      value: function handleChangePage(currPage) {
        var currSizePerPage = this.state.currSizePerPage;
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onPageChange) {
          options.onPageChange(currPage, currSizePerPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return { currPage: currPage };
        });
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(currSizePerPage, currPage) {
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onSizePerPageChange) {
          options.onSizePerPageChange(currSizePerPage, currPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return {
            currPage: currPage,
            currSizePerPage: currSizePerPage
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            options = _props.pagination.options,
            store = _props.store;
        var _state2 = this.state,
            currPage = _state2.currPage,
            currSizePerPage = _state2.currSizePerPage;

        var withFirstAndLast = typeof options.withFirstAndLast === 'undefined' ? _const2.default.With_FIRST_AND_LAST : options.withFirstAndLast;
        var alwaysShowAllBtns = typeof options.alwaysShowAllBtns === 'undefined' ? _const2.default.SHOW_ALL_PAGE_BTNS : options.alwaysShowAllBtns;
        var hideSizePerPage = typeof options.hideSizePerPage === 'undefined' ? _const2.default.HIDE_SIZE_PER_PAGE : options.hideSizePerPage;
        var hidePageListOnlyOnePage = typeof options.hidePageListOnlyOnePage === 'undefined' ? _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE : options.hidePageListOnlyOnePage;
        var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;

        var data = this.isRemotePagination() ? this.props.data : (0, _page.getByCurrPage)(store, pageStartIndex);

        return [_react2.default.createElement(Base, _extends({ key: 'table' }, this.props, { data: data })), _react2.default.createElement(_pagination2.default, {
          key: 'pagination',
          dataSize: options.totalSize || store.data.length,
          currPage: currPage,
          currSizePerPage: currSizePerPage,
          onPageChange: this.handleChangePage,
          onSizePerPageChange: this.handleChangeSizePerPage,
          sizePerPageList: options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST,
          paginationSize: options.paginationSize || _const2.default.PAGINATION_SIZE,
          pageStartIndex: pageStartIndex,
          withFirstAndLast: withFirstAndLast,
          alwaysShowAllBtns: alwaysShowAllBtns,
          hideSizePerPage: hideSizePerPage,
          hidePageListOnlyOnePage: hidePageListOnlyOnePage,
          firstPageText: options.firstPageText || _const2.default.FIRST_PAGE_TEXT,
          prePageText: options.prePageText || _const2.default.PRE_PAGE_TEXT,
          nextPageText: options.nextPageText || _const2.default.NEXT_PAGE_TEXT,
          lastPageText: options.lastPageText || _const2.default.LAST_PAGE_TEXT,
          prePageTitle: options.prePageTitle || _const2.default.PRE_PAGE_TITLE,
          nextPageTitle: options.nextPageTitle || _const2.default.NEXT_PAGE_TITLE,
          firstPageTitle: options.firstPageTitle || _const2.default.FIRST_PAGE_TITLE,
          lastPageTitle: options.lastPageTitle || _const2.default.LAST_PAGE_TITLE
        })];
      }
    }]);

    return PaginationWrapper;
  }(remoteResolver(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageResolver2 = __webpack_require__(11);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _sizePerPageDropdown = __webpack_require__(12);

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

var _paginationList = __webpack_require__(14);

var _paginationList2 = _interopRequireDefault(_paginationList);

var _const = __webpack_require__(3);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */


var Pagination = function (_pageResolver) {
  _inherits(Pagination, _pageResolver);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.closeDropDown = _this.closeDropDown.bind(_this);
    _this.toggleDropDown = _this.toggleDropDown.bind(_this);
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
    _this.state = _this.initialState();
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var dataSize = nextProps.dataSize,
          currSizePerPage = nextProps.currSizePerPage;

      if (currSizePerPage !== this.props.currSizePerPage || dataSize !== this.props.dataSize) {
        var totalPages = this.calculateTotalPage(currSizePerPage, dataSize);
        var lastPage = this.calculateLastPage(totalPages);
        this.setState({ totalPages: totalPages, lastPage: lastPage });
      }
    }
  }, {
    key: 'toggleDropDown',
    value: function toggleDropDown() {
      var dropdownOpen = !this.state.dropdownOpen;
      this.setState(function () {
        return { dropdownOpen: dropdownOpen };
      });
    }
  }, {
    key: 'closeDropDown',
    value: function closeDropDown() {
      this.setState(function () {
        return { dropdownOpen: false };
      });
    }
  }, {
    key: 'handleChangeSizePerPage',
    value: function handleChangeSizePerPage(sizePerPage) {
      var _props = this.props,
          currSizePerPage = _props.currSizePerPage,
          onSizePerPageChange = _props.onSizePerPageChange;

      var selectedSize = typeof sizePerPage === 'string' ? parseInt(sizePerPage, 10) : sizePerPage;
      var currPage = this.props.currPage;

      if (selectedSize !== currSizePerPage) {
        var newTotalPages = this.calculateTotalPage(selectedSize);
        var newLastPage = this.calculateLastPage(newTotalPages);
        if (currPage > newLastPage) currPage = newLastPage;
        onSizePerPageChange(selectedSize, currPage);
      }
      this.closeDropDown();
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(newPage) {
      var page = void 0;
      var _props2 = this.props,
          currPage = _props2.currPage,
          pageStartIndex = _props2.pageStartIndex,
          prePageText = _props2.prePageText,
          nextPageText = _props2.nextPageText,
          lastPageText = _props2.lastPageText,
          firstPageText = _props2.firstPageText,
          onPageChange = _props2.onPageChange;
      var lastPage = this.state.lastPage;


      if (newPage === prePageText) {
        page = this.backToPrevPage();
      } else if (newPage === nextPageText) {
        page = currPage + 1 > lastPage ? lastPage : currPage + 1;
      } else if (newPage === lastPageText) {
        page = lastPage;
      } else if (newPage === firstPageText) {
        page = pageStartIndex;
      } else {
        page = parseInt(newPage, 10);
      }

      // if (keepSizePerPageState) { this.closeDropDown(); }

      if (page !== currPage) {
        onPageChange(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          totalPages = _state.totalPages,
          lastPage = _state.lastPage,
          open = _state.dropdownOpen;
      var _props3 = this.props,
          sizePerPageList = _props3.sizePerPageList,
          currSizePerPage = _props3.currSizePerPage,
          hideSizePerPage = _props3.hideSizePerPage,
          hidePageListOnlyOnePage = _props3.hidePageListOnlyOnePage;

      var pages = this.calculatePageStatus(this.calculatePages(totalPages), lastPage);

      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-6 mx-auto', {
        'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'row react-bootstrap-table-pagination' },
        sizePerPageList.length > 1 && !hideSizePerPage ? _react2.default.createElement(_sizePerPageDropdown2.default, {
          currSizePerPage: '' + currSizePerPage,
          options: this.calculateSizePerPageStatus(),
          onSizePerPageChange: this.handleChangeSizePerPage,
          onClick: this.toggleDropDown,
          onBlur: this.closeDropDown,
          open: open
        }) : null,
        _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_paginationList2.default, { pages: pages, onPageChange: this.handleChangePage })
        )
      );
    }
  }]);

  return Pagination;
}((0, _pageResolver3.default)(_react.Component));

Pagination.propTypes = {
  dataSize: _propTypes2.default.number.isRequired,
  sizePerPageList: _propTypes2.default.array.isRequired,
  currPage: _propTypes2.default.number.isRequired,
  currSizePerPage: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  pageStartIndex: _propTypes2.default.number,
  paginationSize: _propTypes2.default.number,
  firstPageText: _propTypes2.default.string,
  prePageText: _propTypes2.default.string,
  nextPageText: _propTypes2.default.string,
  lastPageText: _propTypes2.default.string,
  nextPageTitle: _propTypes2.default.string,
  prePageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  withFirstAndLast: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  hideSizePerPage: _propTypes2.default.bool,
  hidePageListOnlyOnePage: _propTypes2.default.bool
};

Pagination.defaultProps = {
  pageStartIndex: _const2.default.PAGE_START_INDEX,
  paginationSize: _const2.default.PAGINATION_SIZE,
  withFirstAndLast: _const2.default.With_FIRST_AND_LAST,
  alwaysShowAllBtns: _const2.default.SHOW_ALL_PAGE_BTNS,
  firstPageText: _const2.default.FIRST_PAGE_TEXT,
  prePageText: _const2.default.PRE_PAGE_TEXT,
  nextPageText: _const2.default.NEXT_PAGE_TEXT,
  lastPageText: _const2.default.LAST_PAGE_TEXT,
  sizePerPageList: _const2.default.SIZE_PER_PAGE_LIST,
  nextPageTitle: _const2.default.NEXT_PAGE_TITLE,
  prePageTitle: _const2.default.PRE_PAGE_TITLE,
  firstPageTitle: _const2.default.FIRST_PAGE_TITLE,
  lastPageTitle: _const2.default.LAST_PAGE_TITLE,
  hideSizePerPage: _const2.default.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};

exports.default = Pagination;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-mixed-operators: 0 */
exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(PageResolver, _ExtendBase);

    function PageResolver() {
      _classCallCheck(this, PageResolver);

      return _possibleConstructorReturn(this, (PageResolver.__proto__ || Object.getPrototypeOf(PageResolver)).apply(this, arguments));
    }

    _createClass(PageResolver, [{
      key: "backToPrevPage",
      value: function backToPrevPage() {
        var _props = this.props,
            currPage = _props.currPage,
            pageStartIndex = _props.pageStartIndex;

        return currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      }
    }, {
      key: "goToNextPage",
      value: function goToNextPage() {
        var currPage = this.props.currPage;
        var lastPage = this.state.lastPage;

        return currPage + 1 > lastPage ? lastPage : currPage + 1;
      }
    }, {
      key: "initialState",
      value: function initialState() {
        var totalPages = this.calculateTotalPage();
        var lastPage = this.calculateLastPage(totalPages);
        return { totalPages: totalPages, lastPage: lastPage, dropdownOpen: false };
      }
    }, {
      key: "calculateTotalPage",
      value: function calculateTotalPage() {
        var sizePerPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.currSizePerPage;
        var dataSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.dataSize;

        return Math.ceil(dataSize / sizePerPage);
      }
    }, {
      key: "calculateLastPage",
      value: function calculateLastPage(totalPages) {
        var pageStartIndex = this.props.pageStartIndex;

        return pageStartIndex + totalPages - 1;
      }
    }, {
      key: "calculatePages",
      value: function calculatePages() {
        var totalPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.totalPages;
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props2 = this.props,
            currPage = _props2.currPage,
            paginationSize = _props2.paginationSize,
            pageStartIndex = _props2.pageStartIndex,
            withFirstAndLast = _props2.withFirstAndLast,
            firstPageText = _props2.firstPageText,
            prePageText = _props2.prePageText,
            nextPageText = _props2.nextPageText,
            lastPageText = _props2.lastPageText,
            alwaysShowAllBtns = _props2.alwaysShowAllBtns;


        var pages = void 0;
        var endPage = totalPages;
        if (endPage <= 0) return [];

        var startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
        endPage = startPage + paginationSize - 1;

        if (endPage > lastPage) {
          endPage = lastPage;
          startPage = endPage - paginationSize + 1;
        }

        if (startPage !== pageStartIndex && totalPages > paginationSize && withFirstAndLast) {
          pages = [firstPageText, prePageText];
        } else if (totalPages > 1 || alwaysShowAllBtns) {
          pages = [prePageText];
        } else {
          pages = [];
        }

        for (var i = startPage; i <= endPage; i += 1) {
          if (i >= pageStartIndex) pages.push(i);
        }

        if (endPage <= lastPage && pages.length > 1) {
          pages.push(nextPageText);
        }
        if (endPage !== lastPage && withFirstAndLast) {
          pages.push(lastPageText);
        }
        return pages;
      }
    }, {
      key: "calculatePageStatus",
      value: function calculatePageStatus() {
        var _this2 = this;

        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props3 = this.props,
            currPage = _props3.currPage,
            pageStartIndex = _props3.pageStartIndex,
            firstPageText = _props3.firstPageText,
            prePageText = _props3.prePageText,
            nextPageText = _props3.nextPageText,
            lastPageText = _props3.lastPageText,
            alwaysShowAllBtns = _props3.alwaysShowAllBtns;

        var isStart = function isStart(page) {
          return currPage === pageStartIndex && (page === firstPageText || page === prePageText);
        };
        var isEnd = function isEnd(page) {
          return currPage === lastPage && (page === nextPageText || page === lastPageText);
        };

        return pages.filter(function (page) {
          if (alwaysShowAllBtns) {
            return true;
          }
          return !(isStart(page) || isEnd(page));
        }).map(function (page) {
          var title = void 0;
          var active = page === currPage;
          var disabled = isStart(page) || isEnd(page);

          if (page === nextPageText) {
            title = _this2.props.nextPageTitle;
          } else if (page === prePageText) {
            title = _this2.props.prePageTitle;
          } else if (page === firstPageText) {
            title = _this2.props.firstPageTitle;
          } else if (page === lastPageText) {
            title = _this2.props.lastPageTitle;
          } else {
            title = "" + page;
          }

          return { page: page, active: active, disabled: disabled, title: title };
        });
      }
    }, {
      key: "calculateSizePerPageStatus",
      value: function calculateSizePerPageStatus() {
        var sizePerPageList = this.props.sizePerPageList;

        return sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNumber = _sizePerPage.value || _sizePerPage;
          return {
            text: "" + pageText,
            page: pageNumber
          };
        });
      }
    }]);

    return PageResolver;
  }(ExtendBase);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizePerPageOption = __webpack_require__(13);

var _sizePerPageOption2 = _interopRequireDefault(_sizePerPageOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function SizePerPageDropDown(props) {
  var open = props.open,
      hidden = props.hidden,
      onClick = props.onClick,
      onBlur = props.onBlur,
      options = props.options,
      className = props.className,
      variation = props.variation,
      btnContextual = props.btnContextual,
      currSizePerPage = props.currSizePerPage,
      onSizePerPageChange = props.onSizePerPageChange;


  var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };
  var dropdownClasses = (0, _classnames2.default)(open ? 'open show' : '', sizePerPageDefaultClass, variation, className);

  return _react2.default.createElement(
    'span',
    {
      style: dropDownStyle,
      className: dropdownClasses
    },
    _react2.default.createElement(
      'button',
      {
        id: 'pageDropDown',
        className: 'btn ' + btnContextual + ' dropdown-toggle',
        'data-toggle': 'dropdown',
        'aria-expanded': open,
        onClick: onClick,
        onBlur: onBlur
      },
      currSizePerPage,
      _react2.default.createElement(
        'span',
        null,
        ' ',
        _react2.default.createElement('span', { className: 'caret' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
      options.map(function (option) {
        return _react2.default.createElement(_sizePerPageOption2.default, _extends({}, option, {
          key: option.text,
          onSizePerPageChange: onSizePerPageChange
        }));
      })
    )
  );
};

SizePerPageDropDown.propTypes = {
  currSizePerPage: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  btnContextual: _propTypes2.default.string,
  variation: _propTypes2.default.oneOf(['dropdown', 'dropup']),
  className: _propTypes2.default.string
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: ''
};

exports.default = SizePerPageDropDown;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint jsx-a11y/href-no-hash: 0 */
var SizePerPageOption = function SizePerPageOption(_ref) {
  var text = _ref.text,
      page = _ref.page,
      onSizePerPageChange = _ref.onSizePerPageChange;
  return _react2.default.createElement(
    'li',
    { key: text, role: 'presentation', className: 'dropdown-item' },
    _react2.default.createElement(
      'a',
      {
        href: '#',
        tabIndex: '-1',
        role: 'menuitem',
        'data-page': page,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onSizePerPageChange(page);
        }
      },
      text
    )
  );
};

SizePerPageOption.propTypes = {
  text: _propTypes2.default.string.isRequired,
  page: _propTypes2.default.number.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired
};

exports.default = SizePerPageOption;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageButton = __webpack_require__(15);

var _pageButton2 = _interopRequireDefault(_pageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatonList = function PaginatonList(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'pagination react-bootstrap-table-page-btns-ul' },
    props.pages.map(function (pageProps) {
      return _react2.default.createElement(_pageButton2.default, _extends({
        key: pageProps.page
      }, pageProps, {
        onPageChange: props.onPageChange
      }));
    })
  );
};

PaginatonList.propTypes = {
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    active: _propTypes2.default.bool,
    disable: _propTypes2.default.bool,
    title: _propTypes2.default.string
  })).isRequired,
  onPageChange: _propTypes2.default.func.isRequired
};

exports.default = PaginatonList;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */


var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PageButton, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          title = _props.title,
          active = _props.active,
          disabled = _props.disabled;

      var classes = (0, _classnames2.default)({
        active: active,
        disabled: disabled,
        'page-item': true
      });

      return _react2.default.createElement(
        'li',
        { className: classes, title: title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.handleClick, className: 'page-link' },
          page
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  onPageChange: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  active: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

exports.default = PageButton;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getByCurrPage = exports.getByCurrPage = function getByCurrPage(store, pageStartIndex) {
  var dataSize = store.data.length;
  if (!dataSize) return [];
  var getNormalizedPage = function getNormalizedPage() {
    var offset = Math.abs(1 - pageStartIndex);
    return store.page + offset;
  };
  var end = getNormalizedPage() * store.sizePerPage - 1;
  var start = end - (store.sizePerPage - 1);

  var result = [];
  for (var i = start; i <= end; i += 1) {
    result.push(store.data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOTY1ZTAwMmYzMjFiYzBmNTgzMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLW9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi1saXN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS5qcyJdLCJuYW1lcyI6WyJQQUdJTkFUSU9OX1NJWkUiLCJQQUdFX1NUQVJUX0lOREVYIiwiV2l0aF9GSVJTVF9BTkRfTEFTVCIsIlNIT1dfQUxMX1BBR0VfQlROUyIsIkZJUlNUX1BBR0VfVEVYVCIsIlBSRV9QQUdFX1RFWFQiLCJORVhUX1BBR0VfVEVYVCIsIkxBU1RfUEFHRV9URVhUIiwiTkVYVF9QQUdFX1RJVExFIiwiTEFTVF9QQUdFX1RJVExFIiwiUFJFX1BBR0VfVElUTEUiLCJGSVJTVF9QQUdFX1RJVExFIiwiU0laRV9QRVJfUEFHRV9MSVNUIiwiSElERV9TSVpFX1BFUl9QQUdFIiwiSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRSIsIm9wdGlvbnMiLCJ3cmFwcGVyRmFjdG9yeSIsIkJhc2UiLCJyZW1vdGVSZXNvbHZlciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSIsImN1cnJQYWdlIiwiY3VyclNpemVQZXJQYWdlIiwicGFnaW5hdGlvbiIsInNpemVQZXJQYWdlTGlzdCIsIkNvbnN0IiwicGFnZSIsInBhZ2VTdGFydEluZGV4Iiwic2l6ZVBlclBhZ2UiLCJ2YWx1ZSIsInN0YXRlIiwic2F2ZVRvU3RvcmUiLCJuZXh0UHJvcHMiLCJuZWVkTmV3U3RhdGUiLCJvblBhZ2VDaGFuZ2UiLCJpc0RhdGFDaGFuZ2VkIiwic2V0U3RhdGUiLCJzdG9yZSIsImlzUmVtb3RlUGFnaW5hdGlvbiIsImhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UiLCJvblNpemVQZXJQYWdlQ2hhbmdlIiwid2l0aEZpcnN0QW5kTGFzdCIsImFsd2F5c1Nob3dBbGxCdG5zIiwiaGlkZVNpemVQZXJQYWdlIiwiaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UiLCJkYXRhIiwidG90YWxTaXplIiwibGVuZ3RoIiwicGFnaW5hdGlvblNpemUiLCJmaXJzdFBhZ2VUZXh0IiwicHJlUGFnZVRleHQiLCJuZXh0UGFnZVRleHQiLCJsYXN0UGFnZVRleHQiLCJwcmVQYWdlVGl0bGUiLCJuZXh0UGFnZVRpdGxlIiwiZmlyc3RQYWdlVGl0bGUiLCJsYXN0UGFnZVRpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIlBhZ2luYXRpb24iLCJjbG9zZURyb3BEb3duIiwidG9nZ2xlRHJvcERvd24iLCJpbml0aWFsU3RhdGUiLCJkYXRhU2l6ZSIsInRvdGFsUGFnZXMiLCJjYWxjdWxhdGVUb3RhbFBhZ2UiLCJsYXN0UGFnZSIsImNhbGN1bGF0ZUxhc3RQYWdlIiwiZHJvcGRvd25PcGVuIiwic2VsZWN0ZWRTaXplIiwicGFyc2VJbnQiLCJuZXdUb3RhbFBhZ2VzIiwibmV3TGFzdFBhZ2UiLCJuZXdQYWdlIiwiYmFja1RvUHJldlBhZ2UiLCJvcGVuIiwicGFnZXMiLCJjYWxjdWxhdGVQYWdlU3RhdHVzIiwiY2FsY3VsYXRlUGFnZXMiLCJwYWdlTGlzdENsYXNzIiwiY2FsY3VsYXRlU2l6ZVBlclBhZ2VTdGF0dXMiLCJudW1iZXIiLCJhcnJheSIsImZ1bmMiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwiTWF0aCIsImNlaWwiLCJlbmRQYWdlIiwic3RhcnRQYWdlIiwibWF4IiwiZmxvb3IiLCJpIiwicHVzaCIsImlzU3RhcnQiLCJpc0VuZCIsImZpbHRlciIsIm1hcCIsInRpdGxlIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJfc2l6ZVBlclBhZ2UiLCJwYWdlVGV4dCIsInRleHQiLCJwYWdlTnVtYmVyIiwiRXh0ZW5kQmFzZSIsInNpemVQZXJQYWdlRGVmYXVsdENsYXNzIiwiU2l6ZVBlclBhZ2VEcm9wRG93biIsImhpZGRlbiIsIm9uQ2xpY2siLCJvbkJsdXIiLCJjbGFzc05hbWUiLCJ2YXJpYXRpb24iLCJidG5Db250ZXh0dWFsIiwiZHJvcERvd25TdHlsZSIsInZpc2liaWxpdHkiLCJkcm9wZG93bkNsYXNzZXMiLCJvcHRpb24iLCJvbmVPZiIsIlNpemVQZXJQYWdlT3B0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiUGFnaW5hdG9uTGlzdCIsInBhZ2VQcm9wcyIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsImRpc2FibGUiLCJQYWdlQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJjbGFzc2VzIiwiZ2V0QnlDdXJyUGFnZSIsImdldE5vcm1hbGl6ZWRQYWdlIiwib2Zmc2V0IiwiYWJzIiwiZW5kIiwic3RhcnQiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFB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LEM7Ozs7Ozs7QUNSZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUkE7QUFDQTs7O0lBU01DLFU7OztBQUNKLHNC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RSxTQUFWLENBQW9CLENBQUN2RSxvQkFBVXlCLE1BQVgsRUFBbUJ6QixvQkFBVTRCLE1BQTdCLENBQXBCLEVBQTBEMUIsVUFGM0M7QUFHckIwQyxVQUFRNUMsb0JBQVU2QixJQUFWLENBQWUzQixVQUhGO0FBSXJCMkMsWUFBVTdDLG9CQUFVNkIsSUFBVixDQUFlM0IsVUFKSjtBQUtyQnlDLFNBQU8zQyxvQkFBVTRCO0FBTEksQ0FBdkI7O2tCQVFlNkMsVTs7Ozs7Ozs7Ozs7O0FDOUNSLElBQU1HLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ2xHLEtBQUQsRUFBUVYsY0FBUixFQUEyQjtBQUN0RCxNQUFNdUMsV0FBVzdCLE1BQU1RLElBQU4sQ0FBV0UsTUFBNUI7QUFDQSxNQUFJLENBQUNtQixRQUFMLEVBQWUsT0FBTyxFQUFQO0FBQ2YsTUFBTXNFLG9CQUFvQixTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBTUMsU0FBUy9DLEtBQUtnRCxHQUFMLENBQVMsSUFBSS9HLGNBQWIsQ0FBZjtBQUNBLFdBQU9VLE1BQU1YLElBQU4sR0FBYStHLE1BQXBCO0FBQ0QsR0FIRDtBQUlBLE1BQU1FLE1BQU9ILHNCQUFzQm5HLE1BQU1ULFdBQTdCLEdBQTRDLENBQXhEO0FBQ0EsTUFBTWdILFFBQVFELE9BQU90RyxNQUFNVCxXQUFOLEdBQW9CLENBQTNCLENBQWQ7O0FBRUEsTUFBTWlILFNBQVMsRUFBZjtBQUNBLE9BQUssSUFBSTdDLElBQUk0QyxLQUFiLEVBQW9CNUMsS0FBSzJDLEdBQXpCLEVBQThCM0MsS0FBSyxDQUFuQyxFQUFzQztBQUNwQzZDLFdBQU81QyxJQUFQLENBQVk1RCxNQUFNUSxJQUFOLENBQVdtRCxDQUFYLENBQVo7QUFDQSxRQUFJQSxJQUFJLENBQUosS0FBVTlCLFFBQWQsRUFBd0I7QUFDekI7QUFDRCxTQUFPMkUsTUFBUDtBQUNELENBaEJNLEMiLCJmaWxlIjoicmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvZGlzdC9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwVGFibGUyUGFnaW5hdG9yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Qm9vdHN0cmFwVGFibGUyUGFnaW5hdG9yXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTk2NWUwMDJmMzIxYmMwZjU4MzIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgUEFHSU5BVElPTl9TSVpFOiA1LFxuICBQQUdFX1NUQVJUX0lOREVYOiAxLFxuICBXaXRoX0ZJUlNUX0FORF9MQVNUOiB0cnVlLFxuICBTSE9XX0FMTF9QQUdFX0JUTlM6IGZhbHNlLFxuICBGSVJTVF9QQUdFX1RFWFQ6ICc8PCcsXG4gIFBSRV9QQUdFX1RFWFQ6ICc8JyxcbiAgTkVYVF9QQUdFX1RFWFQ6ICc+JyxcbiAgTEFTVF9QQUdFX1RFWFQ6ICc+PicsXG4gIE5FWFRfUEFHRV9USVRMRTogJ25leHQgcGFnZScsXG4gIExBU1RfUEFHRV9USVRMRTogJ2xhc3QgcGFnZScsXG4gIFBSRV9QQUdFX1RJVExFOiAncHJldmlvdXMgcGFnZScsXG4gIEZJUlNUX1BBR0VfVElUTEU6ICdmaXJzdCBwYWdlJyxcbiAgU0laRV9QRVJfUEFHRV9MSVNUOiBbMTAsIDI1LCAzMCwgNTBdLFxuICBISURFX1NJWkVfUEVSX1BBR0U6IGZhbHNlLFxuICBISURFX1BBR0VfTElTVF9PTkxZX09ORV9QQUdFOiBmYWxzZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9jb25zdC5qcyIsImltcG9ydCB3cmFwcGVyRmFjdG9yeSBmcm9tICcuL3NyYy93cmFwcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMgPSB7fSkgPT4gKHtcbiAgd3JhcHBlckZhY3RvcnksXG4gIG9wdGlvbnNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvaW5kZXguanMiLCIvKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vcGFnaW5hdGlvbic7XG5pbXBvcnQgeyBnZXRCeUN1cnJQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgKEJhc2UsIHtcbiAgcmVtb3RlUmVzb2x2ZXJcbn0pID0+XG4gIGNsYXNzIFBhZ2luYXRpb25XcmFwcGVyIGV4dGVuZHMgcmVtb3RlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VQYWdlID0gdGhpcy5oYW5kbGVDaGFuZ2VQYWdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlID0gdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZS5iaW5kKHRoaXMpO1xuXG4gICAgICBsZXQgY3VyclBhZ2U7XG4gICAgICBsZXQgY3VyclNpemVQZXJQYWdlO1xuICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSBwcm9wcy5wYWdpbmF0aW9uO1xuICAgICAgY29uc3Qgc2l6ZVBlclBhZ2VMaXN0ID0gb3B0aW9ucy5zaXplUGVyUGFnZUxpc3QgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUO1xuXG4gICAgICAvLyBpbml0aWFsaXplIGN1cnJlbnQgcGFnZVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN1cnJQYWdlID0gb3B0aW9ucy5wYWdlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5wYWdlU3RhcnRJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3VyclBhZ2UgPSBvcHRpb25zLnBhZ2VTdGFydEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclBhZ2UgPSBDb25zdC5QQUdFX1NUQVJUX0lOREVYO1xuICAgICAgfVxuXG4gICAgICAvLyBpbml0aWFsaXplIGN1cnJlbnQgc2l6ZVBlclBhZ2VcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3VyclNpemVQZXJQYWdlID0gb3B0aW9ucy5zaXplUGVyUGFnZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNpemVQZXJQYWdlTGlzdFswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY3VyclNpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2VMaXN0WzBdLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclNpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2VMaXN0WzBdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRlID0geyBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlIH07XG4gICAgICB0aGlzLnNhdmVUb1N0b3JlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBsZXQgbmVlZE5ld1N0YXRlID0gZmFsc2U7XG4gICAgICBsZXQgeyBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBwYWdlLCBzaXplUGVyUGFnZSwgcGFnZVN0YXJ0SW5kZXgsIG9uUGFnZUNoYW5nZSB9ID0gbmV4dFByb3BzLnBhZ2luYXRpb24ub3B0aW9ucztcblxuICAgICAgaWYgKHR5cGVvZiBwYWdlICE9PSAndW5kZWZpbmVkJyAmJiBjdXJyUGFnZSAhPT0gcGFnZSkgeyAvLyB1c2VyIGRlZmluZWQgcGFnZVxuICAgICAgICBjdXJyUGFnZSA9IHBhZ2U7XG4gICAgICAgIG5lZWROZXdTdGF0ZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5leHRQcm9wcy5pc0RhdGFDaGFuZ2VkKSB7IC8vIHVzZXIgZGlkbid0IGRlZmluZWQgcGFnZSBidXQgZGF0YSBjaGFuZ2VcbiAgICAgICAgY3VyclBhZ2UgPSB0eXBlb2YgcGFnZVN0YXJ0SW5kZXggIT09ICd1bmRlZmluZWQnID8gcGFnZVN0YXJ0SW5kZXggOiBDb25zdC5QQUdFX1NUQVJUX0lOREVYO1xuICAgICAgICBuZWVkTmV3U3RhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemVQZXJQYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdXJyU2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZTtcbiAgICAgICAgbmVlZE5ld1N0YXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zYXZlVG9TdG9yZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcblxuICAgICAgaWYgKG5lZWROZXdTdGF0ZSkge1xuICAgICAgICBpZiAob25QYWdlQ2hhbmdlKSB7XG4gICAgICAgICAgb25QYWdlQ2hhbmdlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2F2ZVRvU3RvcmUocGFnZSwgc2l6ZVBlclBhZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUucGFnZSA9IHBhZ2U7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnNpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2U7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlUGFnZShjdXJyUGFnZSkge1xuICAgICAgY29uc3QgeyBjdXJyU2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5zYXZlVG9TdG9yZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcblxuICAgICAgaWYgKG9wdGlvbnMub25QYWdlQ2hhbmdlKSB7XG4gICAgICAgIG9wdGlvbnMub25QYWdlQ2hhbmdlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgY3VyclBhZ2UgfSkpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVNpemVQZXJQYWdlKGN1cnJTaXplUGVyUGFnZSwgY3VyclBhZ2UpIHtcbiAgICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBvcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLnNhdmVUb1N0b3JlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuXG4gICAgICBpZiAob3B0aW9ucy5vblNpemVQZXJQYWdlQ2hhbmdlKSB7XG4gICAgICAgIG9wdGlvbnMub25TaXplUGVyUGFnZUNoYW5nZShjdXJyU2l6ZVBlclBhZ2UsIGN1cnJQYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3RlUGFnZUNoYW5nZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XG4gICAgICAgIGN1cnJQYWdlLFxuICAgICAgICBjdXJyU2l6ZVBlclBhZ2VcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9LCBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHdpdGhGaXJzdEFuZExhc3QgPSB0eXBlb2Ygb3B0aW9ucy53aXRoRmlyc3RBbmRMYXN0ID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIENvbnN0LldpdGhfRklSU1RfQU5EX0xBU1QgOiBvcHRpb25zLndpdGhGaXJzdEFuZExhc3Q7XG4gICAgICBjb25zdCBhbHdheXNTaG93QWxsQnRucyA9IHR5cGVvZiBvcHRpb25zLmFsd2F5c1Nob3dBbGxCdG5zID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIENvbnN0LlNIT1dfQUxMX1BBR0VfQlROUyA6IG9wdGlvbnMuYWx3YXlzU2hvd0FsbEJ0bnM7XG4gICAgICBjb25zdCBoaWRlU2l6ZVBlclBhZ2UgPSB0eXBlb2Ygb3B0aW9ucy5oaWRlU2l6ZVBlclBhZ2UgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgQ29uc3QuSElERV9TSVpFX1BFUl9QQUdFIDogb3B0aW9ucy5oaWRlU2l6ZVBlclBhZ2U7XG4gICAgICBjb25zdCBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSA9IHR5cGVvZiBvcHRpb25zLmhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIENvbnN0LkhJREVfUEFHRV9MSVNUX09OTFlfT05FX1BBR0UgOiBvcHRpb25zLmhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlO1xuICAgICAgY29uc3QgcGFnZVN0YXJ0SW5kZXggPSB0eXBlb2Ygb3B0aW9ucy5wYWdlU3RhcnRJbmRleCA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBDb25zdC5QQUdFX1NUQVJUX0lOREVYIDogb3B0aW9ucy5wYWdlU3RhcnRJbmRleDtcblxuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkgP1xuICAgICAgICB0aGlzLnByb3BzLmRhdGEgOlxuICAgICAgICBnZXRCeUN1cnJQYWdlKHN0b3JlLCBwYWdlU3RhcnRJbmRleCk7XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIDxCYXNlIGtleT1cInRhYmxlXCIgeyAuLi50aGlzLnByb3BzIH0gZGF0YT17IGRhdGEgfSAvPixcbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBrZXk9XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBkYXRhU2l6ZT17IG9wdGlvbnMudG90YWxTaXplIHx8IHN0b3JlLmRhdGEubGVuZ3RoIH1cbiAgICAgICAgICBjdXJyUGFnZT17IGN1cnJQYWdlIH1cbiAgICAgICAgICBjdXJyU2l6ZVBlclBhZ2U9eyBjdXJyU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlUGFnZSB9XG4gICAgICAgICAgb25TaXplUGVyUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgIHNpemVQZXJQYWdlTGlzdD17IG9wdGlvbnMuc2l6ZVBlclBhZ2VMaXN0IHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCB9XG4gICAgICAgICAgcGFnaW5hdGlvblNpemU9eyBvcHRpb25zLnBhZ2luYXRpb25TaXplIHx8IENvbnN0LlBBR0lOQVRJT05fU0laRSB9XG4gICAgICAgICAgcGFnZVN0YXJ0SW5kZXg9eyBwYWdlU3RhcnRJbmRleCB9XG4gICAgICAgICAgd2l0aEZpcnN0QW5kTGFzdD17IHdpdGhGaXJzdEFuZExhc3QgfVxuICAgICAgICAgIGFsd2F5c1Nob3dBbGxCdG5zPXsgYWx3YXlzU2hvd0FsbEJ0bnMgfVxuICAgICAgICAgIGhpZGVTaXplUGVyUGFnZT17IGhpZGVTaXplUGVyUGFnZSB9XG4gICAgICAgICAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2U9eyBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSB9XG4gICAgICAgICAgZmlyc3RQYWdlVGV4dD17IG9wdGlvbnMuZmlyc3RQYWdlVGV4dCB8fCBDb25zdC5GSVJTVF9QQUdFX1RFWFQgfVxuICAgICAgICAgIHByZVBhZ2VUZXh0PXsgb3B0aW9ucy5wcmVQYWdlVGV4dCB8fCBDb25zdC5QUkVfUEFHRV9URVhUIH1cbiAgICAgICAgICBuZXh0UGFnZVRleHQ9eyBvcHRpb25zLm5leHRQYWdlVGV4dCB8fCBDb25zdC5ORVhUX1BBR0VfVEVYVCB9XG4gICAgICAgICAgbGFzdFBhZ2VUZXh0PXsgb3B0aW9ucy5sYXN0UGFnZVRleHQgfHwgQ29uc3QuTEFTVF9QQUdFX1RFWFQgfVxuICAgICAgICAgIHByZVBhZ2VUaXRsZT17IG9wdGlvbnMucHJlUGFnZVRpdGxlIHx8IENvbnN0LlBSRV9QQUdFX1RJVExFIH1cbiAgICAgICAgICBuZXh0UGFnZVRpdGxlPXsgb3B0aW9ucy5uZXh0UGFnZVRpdGxlIHx8IENvbnN0Lk5FWFRfUEFHRV9USVRMRSB9XG4gICAgICAgICAgZmlyc3RQYWdlVGl0bGU9eyBvcHRpb25zLmZpcnN0UGFnZVRpdGxlIHx8IENvbnN0LkZJUlNUX1BBR0VfVElUTEUgfVxuICAgICAgICAgIGxhc3RQYWdlVGl0bGU9eyBvcHRpb25zLmxhc3RQYWdlVGl0bGUgfHwgQ29uc3QuTEFTVF9QQUdFX1RJVExFIH1cbiAgICAgICAgLz5cbiAgICAgIF07XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3dyYXBwZXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcGFnZVJlc29sdmVyIGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgU2l6ZVBlclBhZ2VEcm9wRG93biBmcm9tICcuL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24nO1xuaW1wb3J0IFBhZ2luYXRpb25MaXN0IGZyb20gJy4vcGFnaW5hdGlvbi1saXN0JztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIHBhZ2VSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duID0gdGhpcy5jbG9zZURyb3BEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEcm9wRG93biA9IHRoaXMudG9nZ2xlRHJvcERvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlID0gdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGFTaXplLCBjdXJyU2l6ZVBlclBhZ2UgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoY3VyclNpemVQZXJQYWdlICE9PSB0aGlzLnByb3BzLmN1cnJTaXplUGVyUGFnZSB8fCBkYXRhU2l6ZSAhPT0gdGhpcy5wcm9wcy5kYXRhU2l6ZSkge1xuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlKGN1cnJTaXplUGVyUGFnZSwgZGF0YVNpemUpO1xuICAgICAgY29uc3QgbGFzdFBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUxhc3RQYWdlKHRvdGFsUGFnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsUGFnZXMsIGxhc3RQYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duT3BlbiA9ICF0aGlzLnN0YXRlLmRyb3Bkb3duT3BlbjtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiB7IGRyb3Bkb3duT3BlbiB9O1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiB7IGRyb3Bkb3duT3BlbjogZmFsc2UgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVNpemVQZXJQYWdlKHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3QgeyBjdXJyU2l6ZVBlclBhZ2UsIG9uU2l6ZVBlclBhZ2VDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gdHlwZW9mIHNpemVQZXJQYWdlID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHNpemVQZXJQYWdlLCAxMCkgOiBzaXplUGVyUGFnZTtcbiAgICBsZXQgeyBjdXJyUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VsZWN0ZWRTaXplICE9PSBjdXJyU2l6ZVBlclBhZ2UpIHtcbiAgICAgIGNvbnN0IG5ld1RvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZShzZWxlY3RlZFNpemUpO1xuICAgICAgY29uc3QgbmV3TGFzdFBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUxhc3RQYWdlKG5ld1RvdGFsUGFnZXMpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gbmV3TGFzdFBhZ2UpIGN1cnJQYWdlID0gbmV3TGFzdFBhZ2U7XG4gICAgICBvblNpemVQZXJQYWdlQ2hhbmdlKHNlbGVjdGVkU2l6ZSwgY3VyclBhZ2UpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhZ2UobmV3UGFnZSkge1xuICAgIGxldCBwYWdlO1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJQYWdlLFxuICAgICAgcGFnZVN0YXJ0SW5kZXgsXG4gICAgICBwcmVQYWdlVGV4dCxcbiAgICAgIG5leHRQYWdlVGV4dCxcbiAgICAgIGxhc3RQYWdlVGV4dCxcbiAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICBvblBhZ2VDaGFuZ2VcbiAgICAgIC8vIGtlZXBTaXplUGVyUGFnZVN0YXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsYXN0UGFnZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChuZXdQYWdlID09PSBwcmVQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IHRoaXMuYmFja1RvUHJldlBhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IG5leHRQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IChjdXJyUGFnZSArIDEpID4gbGFzdFBhZ2UgPyBsYXN0UGFnZSA6IGN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IGxhc3RQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IGxhc3RQYWdlO1xuICAgIH0gZWxzZSBpZiAobmV3UGFnZSA9PT0gZmlyc3RQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IHBhZ2VTdGFydEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQobmV3UGFnZSwgMTApO1xuICAgIH1cblxuICAgIC8vIGlmIChrZWVwU2l6ZVBlclBhZ2VTdGF0ZSkgeyB0aGlzLmNsb3NlRHJvcERvd24oKTsgfVxuXG4gICAgaWYgKHBhZ2UgIT09IGN1cnJQYWdlKSB7XG4gICAgICBvblBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG90YWxQYWdlcywgbGFzdFBhZ2UsIGRyb3Bkb3duT3Blbjogb3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBzaXplUGVyUGFnZUxpc3QsXG4gICAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICBoaWRlU2l6ZVBlclBhZ2UsXG4gICAgICBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5jYWxjdWxhdGVQYWdlU3RhdHVzKHRoaXMuY2FsY3VsYXRlUGFnZXModG90YWxQYWdlcyksIGxhc3RQYWdlKTtcblxuICAgIGNvbnN0IHBhZ2VMaXN0Q2xhc3MgPSBjcyhcbiAgICAgICdyZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvbi1saXN0JyxcbiAgICAgICdjb2wtNiBteC1hdXRvJywge1xuICAgICAgICAncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXBhZ2luYXRpb24tbGlzdC1oaWRkZW4nOiAoaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UgJiYgdG90YWxQYWdlcyA9PT0gMSlcbiAgICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvblwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNpemVQZXJQYWdlTGlzdC5sZW5ndGggPiAxICYmICFoaWRlU2l6ZVBlclBhZ2UgP1xuICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPFNpemVQZXJQYWdlRHJvcERvd25cbiAgICAgICAgICAgICAgICAgIGN1cnJTaXplUGVyUGFnZT17IGAke2N1cnJTaXplUGVyUGFnZX1gIH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyB0aGlzLmNhbGN1bGF0ZVNpemVQZXJQYWdlU3RhdHVzKCkgfVxuICAgICAgICAgICAgICAgICAgb25TaXplUGVyUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMudG9nZ2xlRHJvcERvd24gfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5jbG9zZURyb3BEb3duIH1cbiAgICAgICAgICAgICAgICAgIG9wZW49eyBvcGVuIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBwYWdlTGlzdENsYXNzIH0+XG4gICAgICAgICAgPFBhZ2luYXRpb25MaXN0IHBhZ2VzPXsgcGFnZXMgfSBvblBhZ2VDaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGRhdGFTaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNpemVQZXJQYWdlTGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGN1cnJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJTaXplUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU2l6ZVBlclBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VTdGFydEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwYWdpbmF0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3RQYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlUGFnZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5leHRQYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFzdFBhZ2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuZXh0UGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZpcnN0UGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0UGFnZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3aXRoRmlyc3RBbmRMYXN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWx3YXlzU2hvd0FsbEJ0bnM6IFByb3BUeXBlcy5ib29sLFxuICBoaWRlU2l6ZVBlclBhZ2U6IFByb3BUeXBlcy5ib29sLFxuICBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBwYWdlU3RhcnRJbmRleDogQ29uc3QuUEFHRV9TVEFSVF9JTkRFWCxcbiAgcGFnaW5hdGlvblNpemU6IENvbnN0LlBBR0lOQVRJT05fU0laRSxcbiAgd2l0aEZpcnN0QW5kTGFzdDogQ29uc3QuV2l0aF9GSVJTVF9BTkRfTEFTVCxcbiAgYWx3YXlzU2hvd0FsbEJ0bnM6IENvbnN0LlNIT1dfQUxMX1BBR0VfQlROUyxcbiAgZmlyc3RQYWdlVGV4dDogQ29uc3QuRklSU1RfUEFHRV9URVhULFxuICBwcmVQYWdlVGV4dDogQ29uc3QuUFJFX1BBR0VfVEVYVCxcbiAgbmV4dFBhZ2VUZXh0OiBDb25zdC5ORVhUX1BBR0VfVEVYVCxcbiAgbGFzdFBhZ2VUZXh0OiBDb25zdC5MQVNUX1BBR0VfVEVYVCxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QsXG4gIG5leHRQYWdlVGl0bGU6IENvbnN0Lk5FWFRfUEFHRV9USVRMRSxcbiAgcHJlUGFnZVRpdGxlOiBDb25zdC5QUkVfUEFHRV9USVRMRSxcbiAgZmlyc3RQYWdlVGl0bGU6IENvbnN0LkZJUlNUX1BBR0VfVElUTEUsXG4gIGxhc3RQYWdlVGl0bGU6IENvbnN0LkxBU1RfUEFHRV9USVRMRSxcbiAgaGlkZVNpemVQZXJQYWdlOiBDb25zdC5ISURFX1NJWkVfUEVSX1BBR0UsXG4gIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlOiBDb25zdC5ISURFX1BBR0VfTElTVF9PTkxZX09ORV9QQUdFXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2luYXRpb24uanMiLCIvKiBlc2xpbnQgbm8tbWl4ZWQtb3BlcmF0b3JzOiAwICovXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRCYXNlID0+XG4gIGNsYXNzIFBhZ2VSZXNvbHZlciBleHRlbmRzIEV4dGVuZEJhc2Uge1xuICAgIGJhY2tUb1ByZXZQYWdlKCkge1xuICAgICAgY29uc3QgeyBjdXJyUGFnZSwgcGFnZVN0YXJ0SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKGN1cnJQYWdlIC0gMSkgPCBwYWdlU3RhcnRJbmRleCA/IHBhZ2VTdGFydEluZGV4IDogY3VyclBhZ2UgLSAxO1xuICAgIH1cblxuICAgIGdvVG9OZXh0UGFnZSgpIHtcbiAgICAgIGNvbnN0IHsgY3VyclBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGxhc3RQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgcmV0dXJuIChjdXJyUGFnZSArIDEpID4gbGFzdFBhZ2UgPyBsYXN0UGFnZSA6IGN1cnJQYWdlICsgMTtcbiAgICB9XG5cbiAgICBpbml0aWFsU3RhdGUoKSB7XG4gICAgICBjb25zdCB0b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2UoKTtcbiAgICAgIGNvbnN0IGxhc3RQYWdlID0gdGhpcy5jYWxjdWxhdGVMYXN0UGFnZSh0b3RhbFBhZ2VzKTtcbiAgICAgIHJldHVybiB7IHRvdGFsUGFnZXMsIGxhc3RQYWdlLCBkcm9wZG93bk9wZW46IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVG90YWxQYWdlKHNpemVQZXJQYWdlID0gdGhpcy5wcm9wcy5jdXJyU2l6ZVBlclBhZ2UsIGRhdGFTaXplID0gdGhpcy5wcm9wcy5kYXRhU2l6ZSkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChkYXRhU2l6ZSAvIHNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVMYXN0UGFnZSh0b3RhbFBhZ2VzKSB7XG4gICAgICBjb25zdCB7IHBhZ2VTdGFydEluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHBhZ2VTdGFydEluZGV4ICsgdG90YWxQYWdlcyAtIDE7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUGFnZXMoXG4gICAgICB0b3RhbFBhZ2VzID0gdGhpcy5zdGF0ZS50b3RhbFBhZ2VzLFxuICAgICAgbGFzdFBhZ2UgPSB0aGlzLnN0YXRlLmxhc3RQYWdlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJQYWdlLFxuICAgICAgICBwYWdpbmF0aW9uU2l6ZSxcbiAgICAgICAgcGFnZVN0YXJ0SW5kZXgsXG4gICAgICAgIHdpdGhGaXJzdEFuZExhc3QsXG4gICAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICAgIHByZVBhZ2VUZXh0LFxuICAgICAgICBuZXh0UGFnZVRleHQsXG4gICAgICAgIGxhc3RQYWdlVGV4dCxcbiAgICAgICAgYWx3YXlzU2hvd0FsbEJ0bnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBsZXQgcGFnZXM7XG4gICAgICBsZXQgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XG4gICAgICBpZiAoZW5kUGFnZSA8PSAwKSByZXR1cm4gW107XG5cbiAgICAgIGxldCBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyUGFnZSAtIE1hdGguZmxvb3IocGFnaW5hdGlvblNpemUgLyAyKSwgcGFnZVN0YXJ0SW5kZXgpO1xuICAgICAgZW5kUGFnZSA9IHN0YXJ0UGFnZSArIHBhZ2luYXRpb25TaXplIC0gMTtcblxuICAgICAgaWYgKGVuZFBhZ2UgPiBsYXN0UGFnZSkge1xuICAgICAgICBlbmRQYWdlID0gbGFzdFBhZ2U7XG4gICAgICAgIHN0YXJ0UGFnZSA9IGVuZFBhZ2UgLSBwYWdpbmF0aW9uU2l6ZSArIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFBhZ2UgIT09IHBhZ2VTdGFydEluZGV4ICYmIHRvdGFsUGFnZXMgPiBwYWdpbmF0aW9uU2l6ZSAmJiB3aXRoRmlyc3RBbmRMYXN0KSB7XG4gICAgICAgIHBhZ2VzID0gW2ZpcnN0UGFnZVRleHQsIHByZVBhZ2VUZXh0XTtcbiAgICAgIH0gZWxzZSBpZiAodG90YWxQYWdlcyA+IDEgfHwgYWx3YXlzU2hvd0FsbEJ0bnMpIHtcbiAgICAgICAgcGFnZXMgPSBbcHJlUGFnZVRleHRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZXMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UGFnZTsgaSA8PSBlbmRQYWdlOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPj0gcGFnZVN0YXJ0SW5kZXgpIHBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmRQYWdlIDw9IGxhc3RQYWdlICYmIHBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVRleHQpO1xuICAgICAgfVxuICAgICAgaWYgKGVuZFBhZ2UgIT09IGxhc3RQYWdlICYmIHdpdGhGaXJzdEFuZExhc3QpIHtcbiAgICAgICAgcGFnZXMucHVzaChsYXN0UGFnZVRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhZ2VTdGF0dXMocGFnZXMgPSBbXSwgbGFzdFBhZ2UgPSB0aGlzLnN0YXRlLmxhc3RQYWdlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGN1cnJQYWdlLFxuICAgICAgICBwYWdlU3RhcnRJbmRleCxcbiAgICAgICAgZmlyc3RQYWdlVGV4dCxcbiAgICAgICAgcHJlUGFnZVRleHQsXG4gICAgICAgIG5leHRQYWdlVGV4dCxcbiAgICAgICAgbGFzdFBhZ2VUZXh0LFxuICAgICAgICBhbHdheXNTaG93QWxsQnRuc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBpc1N0YXJ0ID0gcGFnZSA9PlxuICAgICAgICAoY3VyclBhZ2UgPT09IHBhZ2VTdGFydEluZGV4ICYmIChwYWdlID09PSBmaXJzdFBhZ2VUZXh0IHx8IHBhZ2UgPT09IHByZVBhZ2VUZXh0KSk7XG4gICAgICBjb25zdCBpc0VuZCA9IHBhZ2UgPT5cbiAgICAgICAgKGN1cnJQYWdlID09PSBsYXN0UGFnZSAmJiAocGFnZSA9PT0gbmV4dFBhZ2VUZXh0IHx8IHBhZ2UgPT09IGxhc3RQYWdlVGV4dCkpO1xuXG4gICAgICByZXR1cm4gcGFnZXNcbiAgICAgICAgLmZpbHRlcigocGFnZSkgPT4ge1xuICAgICAgICAgIGlmIChhbHdheXNTaG93QWxsQnRucykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAhKGlzU3RhcnQocGFnZSkgfHwgaXNFbmQocGFnZSkpO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChwYWdlKSA9PiB7XG4gICAgICAgICAgbGV0IHRpdGxlO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IHBhZ2UgPT09IGN1cnJQYWdlO1xuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gKGlzU3RhcnQocGFnZSkgfHwgaXNFbmQocGFnZSkpO1xuXG4gICAgICAgICAgaWYgKHBhZ2UgPT09IG5leHRQYWdlVGV4dCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnByb3BzLm5leHRQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSBwcmVQYWdlVGV4dCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnByb3BzLnByZVBhZ2VUaXRsZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IGZpcnN0UGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5maXJzdFBhZ2VUaXRsZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IGxhc3RQYWdlVGV4dCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnByb3BzLmxhc3RQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpdGxlID0gYCR7cGFnZX1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7IHBhZ2UsIGFjdGl2ZSwgZGlzYWJsZWQsIHRpdGxlIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNpemVQZXJQYWdlU3RhdHVzKCkge1xuICAgICAgY29uc3QgeyBzaXplUGVyUGFnZUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gc2l6ZVBlclBhZ2VMaXN0Lm1hcCgoX3NpemVQZXJQYWdlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VUZXh0ID0gX3NpemVQZXJQYWdlLnRleHQgfHwgX3NpemVQZXJQYWdlO1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gX3NpemVQZXJQYWdlLnZhbHVlIHx8IF9zaXplUGVyUGFnZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0ZXh0OiBgJHtwYWdlVGV4dH1gLFxuICAgICAgICAgIHBhZ2U6IHBhZ2VOdW1iZXJcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2UtcmVzb2x2ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTaXplUGVyUGFnZU9wdGlvbiBmcm9tICcuL3NpemUtcGVyLXBhZ2Utb3B0aW9uJztcblxuY29uc3Qgc2l6ZVBlclBhZ2VEZWZhdWx0Q2xhc3MgPSAncmVhY3QtYnMtdGFibGUtc2l6ZVBlclBhZ2UtZHJvcGRvd24nO1xuXG5jb25zdCBTaXplUGVyUGFnZURyb3BEb3duID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvcGVuLFxuICAgIGhpZGRlbixcbiAgICBvbkNsaWNrLFxuICAgIG9uQmx1cixcbiAgICBvcHRpb25zLFxuICAgIGNsYXNzTmFtZSxcbiAgICB2YXJpYXRpb24sXG4gICAgYnRuQ29udGV4dHVhbCxcbiAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgb25TaXplUGVyUGFnZUNoYW5nZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZHJvcERvd25TdHlsZSA9IHsgdmlzaWJpbGl0eTogaGlkZGVuID8gJ2hpZGRlbicgOiAndmlzaWJsZScgfTtcbiAgY29uc3QgZHJvcGRvd25DbGFzc2VzID0gY3MoXG4gICAgb3BlbiA/ICdvcGVuIHNob3cnIDogJycsXG4gICAgc2l6ZVBlclBhZ2VEZWZhdWx0Q2xhc3MsXG4gICAgdmFyaWF0aW9uLFxuICAgIGNsYXNzTmFtZSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBzdHlsZT17IGRyb3BEb3duU3R5bGUgfVxuICAgICAgY2xhc3NOYW1lPXsgZHJvcGRvd25DbGFzc2VzIH1cbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwicGFnZURyb3BEb3duXCJcbiAgICAgICAgY2xhc3NOYW1lPXsgYGJ0biAke2J0bkNvbnRleHR1YWx9IGRyb3Bkb3duLXRvZ2dsZWAgfVxuICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD17IG9wZW4gfVxuICAgICAgICBvbkNsaWNrPXsgb25DbGljayB9XG4gICAgICAgIG9uQmx1cj17IG9uQmx1ciB9XG4gICAgICA+XG4gICAgICAgIHsgY3VyclNpemVQZXJQYWdlIH1cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgeyAnICcgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCIgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwicGFnZURyb3BEb3duXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zLm1hcChvcHRpb24gPT4gKFxuICAgICAgICAgICAgPFNpemVQZXJQYWdlT3B0aW9uXG4gICAgICAgICAgICAgIHsgLi4ub3B0aW9uIH1cbiAgICAgICAgICAgICAga2V5PXsgb3B0aW9uLnRleHQgfVxuICAgICAgICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlPXsgb25TaXplUGVyUGFnZUNoYW5nZSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuU2l6ZVBlclBhZ2VEcm9wRG93bi5wcm9wVHlwZXMgPSB7XG4gIGN1cnJTaXplUGVyUGFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgYnRuQ29udGV4dHVhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFyaWF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydkcm9wZG93bicsICdkcm9wdXAnXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblNpemVQZXJQYWdlRHJvcERvd24uZGVmYXVsdFByb3BzID0ge1xuICBvcGVuOiBmYWxzZSxcbiAgaGlkZGVuOiBmYWxzZSxcbiAgYnRuQ29udGV4dHVhbDogJ2J0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnknLFxuICB2YXJpYXRpb246ICdkcm9wZG93bicsXG4gIGNsYXNzTmFtZTogJydcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2l6ZVBlclBhZ2VEcm9wRG93bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLmpzIiwiLyogZXNsaW50IGpzeC1hMTF5L2hyZWYtbm8taGFzaDogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFNpemVQZXJQYWdlT3B0aW9uID0gKHtcbiAgdGV4dCxcbiAgcGFnZSxcbiAgb25TaXplUGVyUGFnZUNoYW5nZVxufSkgPT4gKFxuICA8bGkga2V5PXsgdGV4dCB9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgPGFcbiAgICAgIGhyZWY9XCIjXCJcbiAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgIGRhdGEtcGFnZT17IHBhZ2UgfVxuICAgICAgb25Nb3VzZURvd249eyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgICB9IH1cbiAgICA+XG4gICAgICB7IHRleHQgfVxuICAgIDwvYT5cbiAgPC9saT5cbik7XG5cblNpemVQZXJQYWdlT3B0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uU2l6ZVBlclBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVQZXJQYWdlT3B0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3NpemUtcGVyLXBhZ2Utb3B0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vcGFnZS1idXR0b24nO1xuXG5jb25zdCBQYWdpbmF0b25MaXN0ID0gcHJvcHMgPT4gKFxuICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiByZWFjdC1ib290c3RyYXAtdGFibGUtcGFnZS1idG5zLXVsXCI+XG4gICAge1xuICAgICAgcHJvcHMucGFnZXMubWFwKHBhZ2VQcm9wcyA9PiAoXG4gICAgICAgIDxQYWdlQnV0dG9uXG4gICAgICAgICAga2V5PXsgcGFnZVByb3BzLnBhZ2UgfVxuICAgICAgICAgIHsgLi4ucGFnZVByb3BzIH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyBwcm9wcy5vblBhZ2VDaGFuZ2UgfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG4gIDwvdWw+XG4pO1xuXG5QYWdpbmF0b25MaXN0LnByb3BUeXBlcyA9IHtcbiAgcGFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9uTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLWxpc3QuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQganN4LWExMXkvaHJlZi1uby1oYXNoOiAwICovXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUGFnZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKHRoaXMucHJvcHMucGFnZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc2VzID0gY3Moe1xuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAncGFnZS1pdGVtJzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0gY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+eyBwYWdlIH08L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuUGFnZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2UtYnV0dG9uLmpzIiwiZXhwb3J0IGNvbnN0IGdldEJ5Q3VyclBhZ2UgPSAoc3RvcmUsIHBhZ2VTdGFydEluZGV4KSA9PiB7XG4gIGNvbnN0IGRhdGFTaXplID0gc3RvcmUuZGF0YS5sZW5ndGg7XG4gIGlmICghZGF0YVNpemUpIHJldHVybiBbXTtcbiAgY29uc3QgZ2V0Tm9ybWFsaXplZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5hYnMoMSAtIHBhZ2VTdGFydEluZGV4KTtcbiAgICByZXR1cm4gc3RvcmUucGFnZSArIG9mZnNldDtcbiAgfTtcbiAgY29uc3QgZW5kID0gKGdldE5vcm1hbGl6ZWRQYWdlKCkgKiBzdG9yZS5zaXplUGVyUGFnZSkgLSAxO1xuICBjb25zdCBzdGFydCA9IGVuZCAtIChzdG9yZS5zaXplUGVyUGFnZSAtIDEpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChzdG9yZS5kYXRhW2ldKTtcbiAgICBpZiAoaSArIDEgPT09IGRhdGFTaXplKSBicmVhaztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table2-paginator.js.map