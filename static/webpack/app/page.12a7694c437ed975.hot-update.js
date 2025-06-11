/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/data/quotes.ts":
/*!****************************!*\
  !*** ./app/data/quotes.ts ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/utils/quoteGenerator.ts":
/*!*************************************!*\
  !*** ./app/utils/quoteGenerator.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: function() { return /* binding */ formatDate; },\n/* harmony export */   generateQuote: function() { return /* binding */ generateQuote; }\n/* harmony export */ });\n/* harmony import */ var _data_quotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/quotes */ \"(app-pages-browser)/./app/data/quotes.ts\");\n/* harmony import */ var _data_quotes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_quotes__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Generates a seeded random number based on a string input\n * @param seed String to use as seed\n * @returns A number between 0 and 1\n */ function seededRandom(seed) {\n    let hash = 0;\n    for(let i = 0; i < seed.length; i++){\n        hash = (hash << 5) - hash + seed.charCodeAt(i);\n        hash = hash & hash; // Convert to 32bit integer\n    }\n    // Create a decimal between 0 and 1\n    const random = Math.abs(Math.sin(hash) * 10000) % 1;\n    return random;\n}\n/**\n * Formats a date into a string (YYYY-MM-DD)\n * @param date Date to format\n * @returns Formatted date string\n */ function formatDate(date) {\n    return date.toISOString().split(\"T\")[0];\n}\n/**\n * Generates a motivational quote based on name and date\n * @param name User's name\n * @param date Current date\n * @returns A motivational quote\n */ function generateQuote(name, date) {\n    // Create a seed from the name and date\n    const seed = \"\".concat(name.toLowerCase(), \"-\").concat(date);\n    // Get a random index based on the seed\n    const randomIndex = Math.floor(seededRandom(seed) * _data_quotes__WEBPACK_IMPORTED_MODULE_0__.quotes.length);\n    // Return the quote at that index\n    return _data_quotes__WEBPACK_IMPORTED_MODULE_0__.quotes[randomIndex];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9xdW90ZUdlbmVyYXRvci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDOzs7O0NBSUMsR0FDRCxTQUFTQyxhQUFhQyxJQUFZO0lBQ2hDLElBQUlDLE9BQU87SUFDWCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsS0FBS0csTUFBTSxFQUFFRCxJQUFLO1FBQ3BDRCxPQUFPLENBQUVBLFFBQVEsS0FBS0EsT0FBUUQsS0FBS0ksVUFBVSxDQUFDRjtRQUM5Q0QsT0FBT0EsT0FBT0EsTUFBTSwyQkFBMkI7SUFDakQ7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTUksU0FBU0MsS0FBS0MsR0FBRyxDQUFDRCxLQUFLRSxHQUFHLENBQUNQLFFBQVEsU0FBUztJQUNsRCxPQUFPSTtBQUNUO0FBRUE7Ozs7Q0FJQyxHQUNNLFNBQVNJLFdBQVdDLElBQVU7SUFDbkMsT0FBT0EsS0FBS0MsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekM7QUFFQTs7Ozs7Q0FLQyxHQUNNLFNBQVNDLGNBQWNDLElBQVksRUFBRUosSUFBWTtJQUN0RCx1Q0FBdUM7SUFDdkMsTUFBTVYsT0FBTyxHQUF5QlUsT0FBdEJJLEtBQUtDLFdBQVcsSUFBRyxLQUFRLE9BQUxMO0lBRXRDLHVDQUF1QztJQUN2QyxNQUFNTSxjQUFjVixLQUFLVyxLQUFLLENBQUNsQixhQUFhQyxRQUFRRixnREFBTUEsQ0FBQ0ssTUFBTTtJQUVqRSxpQ0FBaUM7SUFDakMsT0FBT0wsZ0RBQU0sQ0FBQ2tCLFlBQVk7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3F1b3RlR2VuZXJhdG9yLnRzPzIzOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVvdGVzIH0gZnJvbSAnLi4vZGF0YS9xdW90ZXMnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHNlZWRlZCByYW5kb20gbnVtYmVyIGJhc2VkIG9uIGEgc3RyaW5nIGlucHV0XG4gKiBAcGFyYW0gc2VlZCBTdHJpbmcgdG8gdXNlIGFzIHNlZWRcbiAqIEByZXR1cm5zIEEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxuICovXG5mdW5jdGlvbiBzZWVkZWRSYW5kb20oc2VlZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgbGV0IGhhc2ggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZWQubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzZWVkLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCA9IGhhc2ggJiBoYXNoOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuICBcbiAgLy8gQ3JlYXRlIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5hYnMoTWF0aC5zaW4oaGFzaCkgKiAxMDAwMCkgJSAxO1xuICByZXR1cm4gcmFuZG9tO1xufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBkYXRlIGludG8gYSBzdHJpbmcgKFlZWVktTU0tREQpXG4gKiBAcGFyYW0gZGF0ZSBEYXRlIHRvIGZvcm1hdFxuICogQHJldHVybnMgRm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbW90aXZhdGlvbmFsIHF1b3RlIGJhc2VkIG9uIG5hbWUgYW5kIGRhdGVcbiAqIEBwYXJhbSBuYW1lIFVzZXIncyBuYW1lXG4gKiBAcGFyYW0gZGF0ZSBDdXJyZW50IGRhdGVcbiAqIEByZXR1cm5zIEEgbW90aXZhdGlvbmFsIHF1b3RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVF1b3RlKG5hbWU6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gQ3JlYXRlIGEgc2VlZCBmcm9tIHRoZSBuYW1lIGFuZCBkYXRlXG4gIGNvbnN0IHNlZWQgPSBgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LSR7ZGF0ZX1gO1xuICBcbiAgLy8gR2V0IGEgcmFuZG9tIGluZGV4IGJhc2VkIG9uIHRoZSBzZWVkXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihzZWVkZWRSYW5kb20oc2VlZCkgKiBxdW90ZXMubGVuZ3RoKTtcbiAgXG4gIC8vIFJldHVybiB0aGUgcXVvdGUgYXQgdGhhdCBpbmRleFxuICByZXR1cm4gcXVvdGVzW3JhbmRvbUluZGV4XTtcbn1cbiJdLCJuYW1lcyI6WyJxdW90ZXMiLCJzZWVkZWRSYW5kb20iLCJzZWVkIiwiaGFzaCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwicmFuZG9tIiwiTWF0aCIsImFicyIsInNpbiIsImZvcm1hdERhdGUiLCJkYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImdlbmVyYXRlUXVvdGUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJyYW5kb21JbmRleCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/quoteGenerator.ts\n"));

/***/ })

});