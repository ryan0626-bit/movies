(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dbMethods.js":
/*!**********************!*\
  !*** ./dbMethods.js ***!
  \**********************/
/*! namespace exports */
/*! export getEmployeeDb [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getEmployeesDb [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEmployeeDb": () => /* binding */ getEmployeeDb,
/* harmony export */   "getEmployeesDb": () => /* binding */ getEmployeesDb
/* harmony export */ });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
;
const getEmployeeDb = id => {
  let employee = {
    id: id,
    firstName: faker__WEBPACK_IMPORTED_MODULE_0___default().name.firstName(),
    lastName: faker__WEBPACK_IMPORTED_MODULE_0___default().name.lastName(),
    jobTitle: faker__WEBPACK_IMPORTED_MODULE_0___default().name.jobTitle(),
    phoneNumber: faker__WEBPACK_IMPORTED_MODULE_0___default().phone.phoneNumber(),
    gender: faker__WEBPACK_IMPORTED_MODULE_0___default().name.gender(),
    company: faker__WEBPACK_IMPORTED_MODULE_0___default().company.companyName(),
    state: faker__WEBPACK_IMPORTED_MODULE_0___default().address.state(),
    city: faker__WEBPACK_IMPORTED_MODULE_0___default().address.city(),
    address: faker__WEBPACK_IMPORTED_MODULE_0___default().address.streetAddress(),
    about: faker__WEBPACK_IMPORTED_MODULE_0___default().lorem.paragraph()
  };
  return employee;
};
const getEmployeesDb = () => {
  let employees = [getEmployee("5")];
  employees.push(getEmployee("4"));
  employees.push(getEmployee("6"));
  employees.push(getEmployee("9"));
  employees.push(getEmployee("1"));
  return employees;
};

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! namespace exports */
/*! export response [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "response": () => /* binding */ response
/* harmony export */ });
const response = data => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

/***/ }),

/***/ "./myMainFile.js":
/*!***********************!*\
  !*** ./myMainFile.js ***!
  \***********************/
/*! namespace exports */
/*! export createMovie [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export getEmployee [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export getMovie [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export hello [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in myMainFile (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hello": () => /* binding */ hello,
/* harmony export */   "getEmployee": () => /* binding */ getEmployee,
/* harmony export */   "createMovie": () => /* binding */ createMovie,
/* harmony export */   "getMovie": () => /* binding */ getMovie
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./helpers.js");
/* harmony import */ var _dbMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dbMethods */ "./dbMethods.js");
;

const hello = async ({
  body,
  queryStringParameters
}) => {
  console.log("you have hit the lambda");
  let data = {
    ryan: "understands code"
  };
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)(data);
};
const getEmployee = async ({
  body,
  queryStringParameters
}) => {
  const id = queryStringParameters.id;
  let employee = (0,_dbMethods__WEBPACK_IMPORTED_MODULE_1__.getEmployeeDb)(id);
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)(employee);
};
const createMovie = async ({
  body,
  queryStringParameters
}) => {
  console.log(body); // WHEN body first comes in it will be a string
  // in order to convert that string into an object
  // you haave to do JSON.parse(body)

  let payload = JSON.parse(body);
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    greatJob: true,
    payload
  });
};
const getMovie = async ({
  body,
  queryStringParameters
}) => {
  console.log(queryStringParameters, body);
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    greatJob: true,
    queryStringParameters,
    body
  });
}; //REST - post, functionName = createMovie, path: /createmovie
// serverless offline start --host 127.0.0.1 --http-port 5001

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("faker");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./myMainFile.js");
/******/ })()

));
//# sourceMappingURL=myMainFile.js.map