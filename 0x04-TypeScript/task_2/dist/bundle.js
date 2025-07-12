/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! exports provided: isDirector, executeWork, teachClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirector", function() { return isDirector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeWork", function() { return executeWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teachClass", function() { return teachClass; });
// Implement classes for Director and Teacher
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = "Working from home";
        this.getCoffeeBreak = "Getting a coffee break";
        this.workDirectorTasks = "Getting to director tasks";
    }
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = "Cannot work from home";
        this.getCoffeeBreak = "Cannot have a break";
        this.workTeacherTasks = "Getting to work";
    }
    return Teacher;
}());
// Create a function to determine the type of employee based on salary
// If salary is a number, return Director if salary >= 500, else return Teacher
var createEmployee = function (salary) {
    if (typeof salary === "number") {
        return salary < 500 ? new Teacher() : new Director();
    }
    else if (typeof salary === "string") {
        var numericSalary = parseFloat(salary.replace(/[^0-9.-]+/g, ""));
        return numericSalary < 500 ? new Teacher() : new Director();
    }
    else {
        throw new Error("Invalid salary type");
    }
};
// Type predicate to check if the employee is a Director
var isDirector = function (employee) {
    return employee.workDirectorTasks !== undefined;
};
// Excecute work based on employee type
var executeWork = function (employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks;
    }
    else {
        return employee.workTeacherTasks;
    }
};
// Function to teach a class based on the subject
var teachClass = function (todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
    else {
        throw new Error("Invalid subject");
    }
};
// Example usage
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQTZDO0FBQzdDO0lBQUE7UUFDRSxpQkFBWSxHQUFXLG1CQUFtQixDQUFDO1FBQzNDLG1CQUFjLEdBQVcsd0JBQXdCLENBQUM7UUFDbEQsc0JBQWlCLEdBQVcsMkJBQTJCLENBQUM7SUFDMUQsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBQTtRQUNFLGlCQUFZLEdBQVcsdUJBQXVCLENBQUM7UUFDL0MsbUJBQWMsR0FBVyxxQkFBcUIsQ0FBQztRQUMvQyxxQkFBZ0IsR0FBVyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBQUQsY0FBQztBQUFELENBQUM7QUFFRCxzRUFBc0U7QUFDdEUsK0VBQStFO0FBQy9FLElBQU0sY0FBYyxHQUFHLFVBQUMsTUFBdUI7SUFDN0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQ3REO1NBQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDckMsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQzdEO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDLENBQUM7QUFFRix3REFBd0Q7QUFDakQsSUFBTSxVQUFVLEdBQUcsVUFDeEIsUUFBNEI7SUFFNUIsT0FBUSxRQUFxQixDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUFFRix1Q0FBdUM7QUFDaEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxRQUE0QjtJQUN0RCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztLQUNuQztTQUFNO1FBQ0wsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7S0FDbEM7QUFDSCxDQUFDLENBQUM7QUFLRixpREFBaUQ7QUFDMUMsSUFBTSxVQUFVLEdBQUcsVUFBQyxVQUFvQjtJQUM3QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTyxlQUFlLENBQUM7S0FDeEI7U0FBTSxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDbkMsT0FBTyxrQkFBa0IsQ0FBQztLQUMzQjtTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsZ0JBQWdCO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBRWhELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0I7QUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtBQUU1RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9tYWluLnRzXCIpO1xuIiwiLy8gQ3JlYXRlIGludGVyZmFjZXMgZm9yIGRpcmVjdG9yIGFuZCB0ZWFjaGVyXHJcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWs6IHN0cmluZztcclxuICB3b3JrRGlyZWN0b3JUYXNrczogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWs6IHN0cmluZztcclxuICB3b3JrVGVhY2hlclRhc2tzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEltcGxlbWVudCBjbGFzc2VzIGZvciBEaXJlY3RvciBhbmQgVGVhY2hlclxyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWU6IHN0cmluZyA9IFwiV29ya2luZyBmcm9tIGhvbWVcIjtcclxuICBnZXRDb2ZmZWVCcmVhazogc3RyaW5nID0gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XHJcbiAgd29ya0RpcmVjdG9yVGFza3M6IHN0cmluZyA9IFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xyXG59XHJcblxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lOiBzdHJpbmcgPSBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiO1xyXG4gIGdldENvZmZlZUJyZWFrOiBzdHJpbmcgPSBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcclxuICB3b3JrVGVhY2hlclRhc2tzOiBzdHJpbmcgPSBcIkdldHRpbmcgdG8gd29ya1wiO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgZW1wbG95ZWUgYmFzZWQgb24gc2FsYXJ5XHJcbi8vIElmIHNhbGFyeSBpcyBhIG51bWJlciwgcmV0dXJuIERpcmVjdG9yIGlmIHNhbGFyeSA+PSA1MDAsIGVsc2UgcmV0dXJuIFRlYWNoZXJcclxuY29uc3QgY3JlYXRlRW1wbG95ZWUgPSAoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIgPT4ge1xyXG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gc2FsYXJ5IDwgNTAwID8gbmV3IFRlYWNoZXIoKSA6IG5ldyBEaXJlY3RvcigpO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc3QgbnVtZXJpY1NhbGFyeSA9IHBhcnNlRmxvYXQoc2FsYXJ5LnJlcGxhY2UoL1teMC05Li1dKy9nLCBcIlwiKSk7XHJcbiAgICByZXR1cm4gbnVtZXJpY1NhbGFyeSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzYWxhcnkgdHlwZVwiKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBUeXBlIHByZWRpY2F0ZSB0byBjaGVjayBpZiB0aGUgZW1wbG95ZWUgaXMgYSBEaXJlY3RvclxyXG5leHBvcnQgY29uc3QgaXNEaXJlY3RvciA9IChcclxuICBlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyXHJcbik6IGVtcGxveWVlIGlzIERpcmVjdG9yID0+IHtcclxuICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuLy8gRXhjZWN1dGUgd29yayBiYXNlZCBvbiBlbXBsb3llZSB0eXBlXHJcbmV4cG9ydCBjb25zdCBleGVjdXRlV29yayA9IChlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nID0+IHtcclxuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3M7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gU3RyaW5nIGxpdGVyYWwgdHlwZSBmb3Igc3ViamVjdHNcclxudHlwZSBTdWJqZWN0cyA9IFwiTWF0aFwiIHwgXCJIaXN0b3J5XCI7XHJcblxyXG4vLyBGdW5jdGlvbiB0byB0ZWFjaCBhIGNsYXNzIGJhc2VkIG9uIHRoZSBzdWJqZWN0XHJcbmV4cG9ydCBjb25zdCB0ZWFjaENsYXNzID0gKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nID0+IHtcclxuICBpZiAodG9kYXlDbGFzcyA9PT0gXCJNYXRoXCIpIHtcclxuICAgIHJldHVybiBcIlRlYWNoaW5nIE1hdGhcIjtcclxuICB9IGVsc2UgaWYgKHRvZGF5Q2xhc3MgPT09IFwiSGlzdG9yeVwiKSB7XHJcbiAgICByZXR1cm4gXCJUZWFjaGluZyBIaXN0b3J5XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3ViamVjdFwiKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAvLyBUZWFjaGVyXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgLy8gRGlyZWN0b3JcclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoXCIkNTAwXCIpKTsgLy8gRGlyZWN0b3JcclxuXHJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpKTsgLy8gR2V0dGluZyB0byB3b3JrXHJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7IC8vIEdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcclxuXHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoXCJNYXRoXCIpKTsgLy8gVGVhY2hpbmcgTWF0aFxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiSGlzdG9yeVwiKSk7IC8vIFRlYWNoaW5nIEhpc3RvcnlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==