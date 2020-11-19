(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./models.js":
/*!*******************!*\
  !*** ./models.js ***!
  \*******************/
/*! namespace exports */
/*! export FoodModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export UserModel [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoodModel": () => /* binding */ FoodModel,
/* harmony export */   "UserModel": () => /* binding */ UserModel
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dynamoose */ "dynamoose");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_1__);
;

const FoodSchema = new (dynamoose__WEBPACK_IMPORTED_MODULE_1___default().Schema)({
  email: {
    hashKey: true,
    required: true,
    type: String
  },
  dateEntry: {
    rangeKey: true,
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true
  },
  mealType: {
    type: String,
    required: true
  }
});
const UserSchema = new (dynamoose__WEBPACK_IMPORTED_MODULE_1___default().Schema)({
  email: {
    hashKey: true,
    type: String
  },
  password: String
});
const FoodModel = dynamoose__WEBPACK_IMPORTED_MODULE_1___default().model("foodapp-food", FoodSchema);
const UserModel = dynamoose__WEBPACK_IMPORTED_MODULE_1___default().model("foodapp-users", UserSchema);

/***/ }),

/***/ "./myMainFile.js":
/*!***********************!*\
  !*** ./myMainFile.js ***!
  \***********************/
/*! namespace exports */
/*! export addFood [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export deleteMeals [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export food [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export getMeals [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export signIn [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export signUp [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! export updateMealType [provided] [maybe used in myMainFile (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in myMainFile (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUp": () => /* binding */ signUp,
/* harmony export */   "signIn": () => /* binding */ signIn,
/* harmony export */   "addFood": () => /* binding */ addFood,
/* harmony export */   "getMeals": () => /* binding */ getMeals,
/* harmony export */   "deleteMeals": () => /* binding */ deleteMeals,
/* harmony export */   "updateMealType": () => /* binding */ updateMealType,
/* harmony export */   "food": () => /* binding */ food
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./helpers.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./models.js");
;

const signUp = async ({
  body,
  queryStringParameters
}) => {
  let payload = JSON.parse(body);
  let user = await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.get({
    email: payload.email
  }); // user.email, user.password if it exists

  if (user) {
    //the user already exists do not create a new one
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
      success: false,
      user,
      message: "user already exists"
    });
  } else {
    //the user === null and therefore does not exits so we need to create that user in our tables
    let newUser = new _models__WEBPACK_IMPORTED_MODULE_1__.UserModel({
      email: payload.email,
      password: payload.password
    });
    await newUser.save();
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
      newUser,
      success: true
    });
  }
};
const signIn = async ({
  body,
  queryStringParameters
}) => {
  let payload = JSON.parse(body);
  let user = await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.get({
    email: payload.email
  });

  if (!user) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
      success: false,
      message: "user does not exist"
    });
  } else if (user.password === payload.password) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
      success: true
    });
  } else {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
      success: false,
      messaage: "incorrect password"
    });
  }
};
const addFood = async ({
  body,
  queryStringParameters
}) => {
  // WHEN body first comes in it will be a string  in order to convert that string into an object you haave to do JSON.parse(body)
  let {
    email,
    mealType,
    food
  } = JSON.parse(body);
  let newFood = new _models__WEBPACK_IMPORTED_MODULE_1__.FoodModel({
    email,
    dateEntry: Date.now().toString(),
    mealType,
    food
  });
  await newFood.save();
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true,
    newFood
  });
};
const getMeals = async ({
  body,
  queryStringParameters
}) => {
  const {
    email
  } = queryStringParameters;
  let foods = await _models__WEBPACK_IMPORTED_MODULE_1__.FoodModel.query({
    email
  }).exec();
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true,
    foods
  });
};
const deleteMeals = async ({
  body,
  queryStringParameters
}) => {
  const {
    email,
    dateEntry
  } = queryStringParameters;
  await _models__WEBPACK_IMPORTED_MODULE_1__.FoodModel.delete({
    email,
    dateEntry
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true
  });
};
const updateMealType = async ({
  body,
  queryStringParameters
}) => {
  const {
    dateEntry,
    mealType,
    email
  } = JSON.parse(body);
  await _models__WEBPACK_IMPORTED_MODULE_1__.FoodModel.update({
    email,
    dateEntry
  }, {
    mealType
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true
  });
};
const food = async ({
  body,
  queryStringParameters
}) => {
  const {
    dateEntry,
    food,
    email
  } = JSON.parse(body);
  await _models__WEBPACK_IMPORTED_MODULE_1__.FoodModel.update({
    email,
    dateEntry
  }, {
    food
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true
  });
}; //await FoodModel.update({email, dateEntry},{food})
//await FoodModel.update({email, dateEntry}, {mealType})
//REST - post, functionName = createMovie, path: /createmovie
// serverless offline start --host 127.0.0.1 --http-port 5001

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dynamoose");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("uuid");;

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