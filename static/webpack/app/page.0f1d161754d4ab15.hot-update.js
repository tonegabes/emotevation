/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/data/unmotivationalQuotes.ts":
/*!******************************************!*\
  !*** ./app/data/unmotivationalQuotes.ts ***!
  \******************************************/
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
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: function() { return /* binding */ formatDate; },\n/* harmony export */   generateQuote: function() { return /* binding */ generateQuote; }\n/* harmony export */ });\n/* harmony import */ var _data_quotes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/quotes */ \"(app-pages-browser)/./app/data/quotes.ts\");\n/* harmony import */ var _data_unmotivationalQuotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/unmotivationalQuotes */ \"(app-pages-browser)/./app/data/unmotivationalQuotes.ts\");\n/* harmony import */ var _data_unmotivationalQuotes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_unmotivationalQuotes__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Generates a seeded random number based on a string input\n * @param seed String to use as seed\n * @returns A number between 0 and 1\n */ function seededRandom(seed) {\n    let hash = 0;\n    for(let i = 0; i < seed.length; i++){\n        hash = (hash << 5) - hash + seed.charCodeAt(i);\n        hash = hash & hash; // Convert to 32bit integer\n    }\n    // Create a decimal between 0 and 1\n    const random = Math.abs(Math.sin(hash) * 10000) % 1;\n    return random;\n}\n/**\n * Formats a date into a string (YYYY-MM-DD)\n * @param date Date to format\n * @returns Formatted date string\n */ function formatDate(date) {\n    return date.toISOString().split(\"T\")[0];\n}\n/**\n * Generates a motivational quote based on name and date\n * @param name User's name\n * @param date Current date\n * @returns A motivational quote\n */ function generateQuote(name, date) {\n    // Create a seed from the name and date\n    const seed = \"\".concat(name.toLowerCase(), \"-\").concat(date);\n    // Determine whether to use motivational or unmotivational quotes\n    // Using a separate seed for this decision to ensure it's random but consistent for the same name/date\n    const quoteTypeSeed = \"\".concat(seed, \"-type\");\n    const useUnmotivational = seededRandom(quoteTypeSeed) > 0.7; // 30% chance for unmotivational quotes\n    // Select the appropriate quote collection\n    const quoteCollection = useUnmotivational ? _data_unmotivationalQuotes__WEBPACK_IMPORTED_MODULE_1__.unmotivationalQuotes : _data_quotes__WEBPACK_IMPORTED_MODULE_0__.quotes;\n    // Get a random index based on the seed\n    const randomIndex = Math.floor(seededRandom(seed) * quoteCollection.length);\n    // Return the quote at that index\n    return quoteCollection[randomIndex];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9xdW90ZUdlbmVyYXRvci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUM0QjtBQUVwRTs7OztDQUlDLEdBQ0QsU0FBU0UsYUFBYUMsSUFBWTtJQUNoQyxJQUFJQyxPQUFPO0lBQ1gsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlGLEtBQUtHLE1BQU0sRUFBRUQsSUFBSztRQUNwQ0QsT0FBTyxDQUFFQSxRQUFRLEtBQUtBLE9BQVFELEtBQUtJLFVBQVUsQ0FBQ0Y7UUFDOUNELE9BQU9BLE9BQU9BLE1BQU0sMkJBQTJCO0lBQ2pEO0lBRUEsbUNBQW1DO0lBQ25DLE1BQU1JLFNBQVNDLEtBQUtDLEdBQUcsQ0FBQ0QsS0FBS0UsR0FBRyxDQUFDUCxRQUFRLFNBQVM7SUFDbEQsT0FBT0k7QUFDVDtBQUVBOzs7O0NBSUMsR0FDTSxTQUFTSSxXQUFXQyxJQUFVO0lBQ25DLE9BQU9BLEtBQUtDLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pDO0FBRUE7Ozs7O0NBS0MsR0FDTSxTQUFTQyxjQUFjQyxJQUFZLEVBQUVKLElBQVk7SUFDdEQsdUNBQXVDO0lBQ3ZDLE1BQU1WLE9BQU8sR0FBeUJVLE9BQXRCSSxLQUFLQyxXQUFXLElBQUcsS0FBUSxPQUFMTDtJQUV0QyxpRUFBaUU7SUFDakUsc0dBQXNHO0lBQ3RHLE1BQU1NLGdCQUFnQixHQUFRLE9BQUxoQixNQUFLO0lBQzlCLE1BQU1pQixvQkFBb0JsQixhQUFhaUIsaUJBQWlCLEtBQUssdUNBQXVDO0lBRXBHLDBDQUEwQztJQUMxQyxNQUFNRSxrQkFBa0JELG9CQUFvQm5CLDRFQUFvQkEsR0FBR0QsZ0RBQU1BO0lBRXpFLHVDQUF1QztJQUN2QyxNQUFNc0IsY0FBY2IsS0FBS2MsS0FBSyxDQUFDckIsYUFBYUMsUUFBUWtCLGdCQUFnQmYsTUFBTTtJQUUxRSxpQ0FBaUM7SUFDakMsT0FBT2UsZUFBZSxDQUFDQyxZQUFZO0FBQ3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9xdW90ZUdlbmVyYXRvci50cz8yMzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1b3RlcyB9IGZyb20gJy4uL2RhdGEvcXVvdGVzJztcbmltcG9ydCB7IHVubW90aXZhdGlvbmFsUXVvdGVzIH0gZnJvbSAnLi4vZGF0YS91bm1vdGl2YXRpb25hbFF1b3Rlcyc7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc2VlZGVkIHJhbmRvbSBudW1iZXIgYmFzZWQgb24gYSBzdHJpbmcgaW5wdXRcbiAqIEBwYXJhbSBzZWVkIFN0cmluZyB0byB1c2UgYXMgc2VlZFxuICogQHJldHVybnMgQSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxXG4gKi9cbmZ1bmN0aW9uIHNlZWRlZFJhbmRvbShzZWVkOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgaGFzaCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VlZC5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHNlZWQuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gaGFzaCAmIGhhc2g7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG4gIFxuICAvLyBDcmVhdGUgYSBkZWNpbWFsIGJldHdlZW4gMCBhbmQgMVxuICBjb25zdCByYW5kb20gPSBNYXRoLmFicyhNYXRoLnNpbihoYXNoKSAqIDEwMDAwKSAlIDE7XG4gIHJldHVybiByYW5kb207XG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGRhdGUgaW50byBhIHN0cmluZyAoWVlZWS1NTS1ERClcbiAqIEBwYXJhbSBkYXRlIERhdGUgdG8gZm9ybWF0XG4gKiBAcmV0dXJucyBGb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtb3RpdmF0aW9uYWwgcXVvdGUgYmFzZWQgb24gbmFtZSBhbmQgZGF0ZVxuICogQHBhcmFtIG5hbWUgVXNlcidzIG5hbWVcbiAqIEBwYXJhbSBkYXRlIEN1cnJlbnQgZGF0ZVxuICogQHJldHVybnMgQSBtb3RpdmF0aW9uYWwgcXVvdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUXVvdGUobmFtZTogc3RyaW5nLCBkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBDcmVhdGUgYSBzZWVkIGZyb20gdGhlIG5hbWUgYW5kIGRhdGVcbiAgY29uc3Qgc2VlZCA9IGAke25hbWUudG9Mb3dlckNhc2UoKX0tJHtkYXRlfWA7XG4gIFxuICAvLyBEZXRlcm1pbmUgd2hldGhlciB0byB1c2UgbW90aXZhdGlvbmFsIG9yIHVubW90aXZhdGlvbmFsIHF1b3Rlc1xuICAvLyBVc2luZyBhIHNlcGFyYXRlIHNlZWQgZm9yIHRoaXMgZGVjaXNpb24gdG8gZW5zdXJlIGl0J3MgcmFuZG9tIGJ1dCBjb25zaXN0ZW50IGZvciB0aGUgc2FtZSBuYW1lL2RhdGVcbiAgY29uc3QgcXVvdGVUeXBlU2VlZCA9IGAke3NlZWR9LXR5cGVgO1xuICBjb25zdCB1c2VVbm1vdGl2YXRpb25hbCA9IHNlZWRlZFJhbmRvbShxdW90ZVR5cGVTZWVkKSA+IDAuNzsgLy8gMzAlIGNoYW5jZSBmb3IgdW5tb3RpdmF0aW9uYWwgcXVvdGVzXG4gIFxuICAvLyBTZWxlY3QgdGhlIGFwcHJvcHJpYXRlIHF1b3RlIGNvbGxlY3Rpb25cbiAgY29uc3QgcXVvdGVDb2xsZWN0aW9uID0gdXNlVW5tb3RpdmF0aW9uYWwgPyB1bm1vdGl2YXRpb25hbFF1b3RlcyA6IHF1b3RlcztcbiAgXG4gIC8vIEdldCBhIHJhbmRvbSBpbmRleCBiYXNlZCBvbiB0aGUgc2VlZFxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3Ioc2VlZGVkUmFuZG9tKHNlZWQpICogcXVvdGVDb2xsZWN0aW9uLmxlbmd0aCk7XG4gIFxuICAvLyBSZXR1cm4gdGhlIHF1b3RlIGF0IHRoYXQgaW5kZXhcbiAgcmV0dXJuIHF1b3RlQ29sbGVjdGlvbltyYW5kb21JbmRleF07XG59XG4iXSwibmFtZXMiOlsicXVvdGVzIiwidW5tb3RpdmF0aW9uYWxRdW90ZXMiLCJzZWVkZWRSYW5kb20iLCJzZWVkIiwiaGFzaCIsImkiLCJsZW5ndGgiLCJjaGFyQ29kZUF0IiwicmFuZG9tIiwiTWF0aCIsImFicyIsInNpbiIsImZvcm1hdERhdGUiLCJkYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImdlbmVyYXRlUXVvdGUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJxdW90ZVR5cGVTZWVkIiwidXNlVW5tb3RpdmF0aW9uYWwiLCJxdW90ZUNvbGxlY3Rpb24iLCJyYW5kb21JbmRleCIsImZsb29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/quoteGenerator.ts\n"));

/***/ })

});