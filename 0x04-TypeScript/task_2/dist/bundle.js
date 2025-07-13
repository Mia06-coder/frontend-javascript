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
/*! exports provided: Director, Teacher, createEmployee, isDirector, executeWork, teachClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Director", function() { return Director; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirector", function() { return isDirector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeWork", function() { return executeWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teachClass", function() { return teachClass; });
// Implement classes for Director and Teacher
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Create a function to determine the type of employee based on salary
// If salary is a number, return Director if salary >= 500, else return Teacher
function createEmployee(salary) {
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
}
// Type predicate to check if the employee is a Director
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
// Excecute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Function to teach a class based on the subject
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQTZDO0FBQ3RDLElBQU0sUUFBUTtJQUFHO0lBVXhCLENBQUM7SUFUQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUNELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLElBQUM7QUFFSyxJQUFNLE9BQU87SUFBRztJQVV2QixDQUFDO0lBVEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxJQUFDO0FBRUYsc0VBQXNFO0FBQ3RFLCtFQUErRTtBQUN4RSxTQUFTLGNBQWMsQ0FDNUIsTUFBdUI7SUFFdkIsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDOUIsT0FBTyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQ3REO1NBQU0sSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDckMsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0tBQzdEO1NBQU07UUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDeEM7QUFDSCxDQUFDO0FBRUQsd0RBQXdEO0FBQ2pELFNBQVMsVUFBVSxDQUN4QixRQUE4QztJQUU5QyxPQUFRLFFBQThCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQ3pFLENBQUM7QUFFRCx1Q0FBdUM7QUFDaEMsU0FBUyxXQUFXLENBQ3pCLFFBQThDO0lBRTlDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDckM7U0FBTTtRQUNMLE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDcEM7QUFDSCxDQUFDO0FBS0QsaURBQWlEO0FBQzFDLFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQzdDLElBQUksVUFBVSxLQUFLLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUNELE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQztBQUVELGdCQUFnQjtBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO0FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7QUFFNUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtBQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8vIENyZWF0ZSBpbnRlcmZhY2VzIGZvciBkaXJlY3RvciBhbmQgdGVhY2hlclxyXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBJbXBsZW1lbnQgY2xhc3NlcyBmb3IgRGlyZWN0b3IgYW5kIFRlYWNoZXJcclxuZXhwb3J0IGNvbnN0IERpcmVjdG9yID0gY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xyXG4gIH1cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xyXG4gIH1cclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUZWFjaGVyID0gY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XHJcbiAgfVxyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XHJcbiAgfVxyXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBlbXBsb3llZSBiYXNlZCBvbiBzYWxhcnlcclxuLy8gSWYgc2FsYXJ5IGlzIGEgbnVtYmVyLCByZXR1cm4gRGlyZWN0b3IgaWYgc2FsYXJ5ID49IDUwMCwgZWxzZSByZXR1cm4gVGVhY2hlclxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoXHJcbiAgc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmdcclxuKTogRGlyZWN0b3JJbnRlcmZhY2UgfCBUZWFjaGVySW50ZXJmYWNlIHtcclxuICBpZiAodHlwZW9mIHNhbGFyeSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgcmV0dXJuIHNhbGFyeSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKTtcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBzYWxhcnkgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnN0IG51bWVyaWNTYWxhcnkgPSBwYXJzZUZsb2F0KHNhbGFyeS5yZXBsYWNlKC9bXjAtOS4tXSsvZywgXCJcIikpO1xyXG4gICAgcmV0dXJuIG51bWVyaWNTYWxhcnkgPCA1MDAgPyBuZXcgVGVhY2hlcigpIDogbmV3IERpcmVjdG9yKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2FsYXJ5IHR5cGVcIik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBUeXBlIHByZWRpY2F0ZSB0byBjaGVjayBpZiB0aGUgZW1wbG95ZWUgaXMgYSBEaXJlY3RvclxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaXJlY3RvcihcclxuICBlbXBsb3llZTogRGlyZWN0b3JJbnRlcmZhY2UgfCBUZWFjaGVySW50ZXJmYWNlXHJcbik6IGVtcGxveWVlIGlzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9ySW50ZXJmYWNlKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vLyBFeGNlY3V0ZSB3b3JrIGJhc2VkIG9uIGVtcGxveWVlIHR5cGVcclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVXb3JrKFxyXG4gIGVtcGxveWVlOiBEaXJlY3RvckludGVyZmFjZSB8IFRlYWNoZXJJbnRlcmZhY2VcclxuKTogc3RyaW5nIHtcclxuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3RyaW5nIGxpdGVyYWwgdHlwZSBmb3Igc3ViamVjdHNcclxuZXhwb3J0IHR5cGUgU3ViamVjdHMgPSBcIk1hdGhcIiB8IFwiSGlzdG9yeVwiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gdGVhY2ggYSBjbGFzcyBiYXNlZCBvbiB0aGUgc3ViamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cyk6IHN0cmluZyB7XHJcbiAgaWYgKHRvZGF5Q2xhc3MgPT09IFwiTWF0aFwiKSB7XHJcbiAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XHJcbiAgfVxyXG4gIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcclxufVxyXG5cclxuLy8gRXhhbXBsZSB1c2FnZVxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgLy8gVGVhY2hlclxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7IC8vIERpcmVjdG9yXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKFwiJDUwMFwiKSk7IC8vIERpcmVjdG9yXHJcblxyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7IC8vIEdldHRpbmcgdG8gd29ya1xyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpOyAvLyBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXHJcblxyXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiTWF0aFwiKSk7IC8vIFRlYWNoaW5nIE1hdGhcclxuY29uc29sZS5sb2codGVhY2hDbGFzcyhcIkhpc3RvcnlcIikpOyAvLyBUZWFjaGluZyBIaXN0b3J5XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=