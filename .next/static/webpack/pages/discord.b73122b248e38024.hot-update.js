"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/discord",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SidebarChannel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarChannel */ \"./components/SidebarChannel.js\");\n/* harmony import */ var Next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Next-auth/react */ \"./node_modules/Next-auth/react/index.js\");\n/* harmony import */ var Next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(Next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const { data: session } = (0,Next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    console.log(session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: session ? User({\n            session,\n            handleSignOut\n        }) : Guest()\n    }, void 0, false, {\n        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Sidebar.js\",\n        lineNumber: 19,\n        columnNumber: 13\n    }, undefined);\n};\n_s(Sidebar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        Next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2QjtBQUMrQjtBQUNkO0FBQzRCO0FBQ1Y7QUFDaEI7QUFDRjtBQUNRO0FBQ0U7QUFDVjtBQUNQO0FBQ0s7QUFFNUMsTUFBTVksVUFBVTs7SUFDWixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHSCwyREFBVUE7SUFDcENJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFFUSw4REFBQ0c7a0JBQ0lILFVBQVVJLEtBQUs7WUFBRUo7WUFBU0s7UUFBYyxLQUFLQzs7Ozs7O0FBRzlEO0dBVE1SOztRQUN3QkQsdURBQVVBOzs7S0FEbENDO0FBV04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzNkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkJztcclxuaW1wb3J0IFNpZ25hbENlbGx1bGFyQWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NpZ25hbENlbGx1bGFyQWx0JztcclxuaW1wb3J0IEluZm9PdXRMaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbmZvT3V0TGluZWQnO1xyXG5pbXBvcnQgQ2FsbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYWxsJztcclxuaW1wb3J0IE1pY0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NaWMnO1xyXG5pbXBvcnQgSGVhZHNldEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9IZWFkc2V0JztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IFNpZGViYXJDaGFubmVsIGZyb20gJy4vU2lkZWJhckNoYW5uZWwnO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJOZXh0LWF1dGgvcmVhY3RcIlxyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXHJcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtzZXNzaW9uID8gVXNlcih7IHNlc3Npb24sIGhhbmRsZVNpZ25PdXQgfSkgOiBHdWVzdCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJFeHBhbmRNb3JlSWNvbiIsIkFkZEljb24iLCJTaWduYWxDZWxsdWxhckFsdEljb24iLCJJbmZvT3V0TGluZWRJY29uIiwiQ2FsbEljb24iLCJNaWNJY29uIiwiSGVhZHNldEljb24iLCJTZXR0aW5nc0ljb24iLCJTaWRlYmFyQ2hhbm5lbCIsIkF2YXRhciIsInVzZVNlc3Npb24iLCJTaWRlYmFyIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiVXNlciIsImhhbmRsZVNpZ25PdXQiLCJHdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n"));

/***/ })

});