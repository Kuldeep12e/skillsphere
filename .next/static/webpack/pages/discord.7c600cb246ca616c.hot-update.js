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

/***/ "__barrel_optimize__?names=AiOutlineDelete!=!./node_modules/react-icons/ai/index.esm.js":
/*!**********************************************************************************************!*\
  !*** __barrel_optimize__?names=AiOutlineDelete!=!./node_modules/react-icons/ai/index.esm.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_ai_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/ai/index.esm.js */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_ai_index_esm_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_ai_index_esm_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "__barrel_optimize__?names=HiEllipsisVertical!=!./node_modules/react-icons/hi2/index.esm.js":
/*!**************************************************************************************************!*\
  !*** __barrel_optimize__?names=HiEllipsisVertical!=!./node_modules/react-icons/hi2/index.esm.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_hi2_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/hi2/index.esm.js */ "./node_modules/react-icons/hi2/index.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_hi2_index_esm_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return D_Code_Next_Js_Skillsphere_Skillsphere_Code_node_modules_react_icons_hi2_index_esm_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Avatar_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar!=!@mui/material */ \"__barrel_optimize__?names=Avatar!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/hooks */ \"./lib/hooks.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_HiEllipsisVertical_react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HiEllipsisVertical!=!react-icons/hi2 */ \"__barrel_optimize__?names=HiEllipsisVertical!=!./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineDelete_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineDelete!=!react-icons/ai */ \"__barrel_optimize__?names=AiOutlineDelete!=!./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id, user, textmessages, timestamp, input } = param;\n    _s();\n    const [showContextMenu, setShowContextMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const selectChannelId = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.app.channelId);\n    const searchInput = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(selectInput);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (e)=>{\n            if (!e.target.closest(\".message\")) {\n                setShowContextMenu(false);\n            }\n        };\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    const handleRightClick = (e)=>{\n        e.preventDefault();\n        setShowContextMenu(!showContextMenu);\n    };\n    const handleDeleteClick = async ()=>{\n        setShowContextMenu(false);\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(db, \"channels\", selectChannelId, \"messages\", id));\n    };\n    const handleCopy = async ()=>{\n        try {\n            await navigator.clipboard.writeText(textmessages.toString());\n            console.log(\"Text copied successfully!\");\n        } catch (error) {\n            console.error(\"Failed to copy text:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"message max-w-xl group relative bg-gray-700 mb-2 ml-1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_mui_material__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                src: user.photo\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"message__info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xs\",\n                        children: [\n                            user.displayName,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"message__timestamp\",\n                                children: new Date(timestamp === null || timestamp === void 0 ? void 0 : timestamp.toDate()).toUTCString()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                                lineNumber: 51,\n                                columnNumber: 51\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    textmessages.filter((item)=>{\n                        return !searchInput || searchInput.toLowerCase() === \"\" ? item : typeof item === \"string\" && item.toLowerCase().includes(searchInput);\n                    }).map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item\n                        }, index, false, {\n                            fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleRightClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiEllipsisVertical_react_icons_hi2__WEBPACK_IMPORTED_MODULE_5__.HiEllipsisVertical, {\n                    size: 20,\n                    className: \"text-white cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                    lineNumber: 58,\n                    columnNumber: 39\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            showContextMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute z-10 w-max flex flex-col   px-2 py-3 gap-3 text-sm text-white bg-gray-800 rounded-lg shadow-xl\",\n                style: {\n                    top: \"5%\",\n                    left: \"100%\",\n                    transform: \"translateX(-50%)\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1 justify-center items-center hover:rounded-md px-1 py-2 hover:bg-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineDelete_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineDelete, {\n                                size: 22\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDeleteClick,\n                                className: \"w-full text-start  \",\n                                children: \"Delete Message\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: handleCopy,\n                        className: \"flex gap-1 justify-center items-center hover:bg-gray-700 hover:rounded-md px-1 py-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(VscCopy, {\n                                size: 22\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"w-full text-start\",\n                                children: \"Copy\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\components\\\\Message.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"Hukm0M6eGGpBObo6zo3cIjqrfeQ=\", false, function() {\n    return [\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Message;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNBO1FBQ2xCQSxzREFBY0E7OztLQUg5Qks7QUFzRU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlLmpzPzQ4OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvbGliL2hvb2tzXCI7XHJcbmltcG9ydCB7IGRvYywgZGVsZXRlRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBIaUVsbGlwc2lzVmVydGljYWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGkyXCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZURlbGV0ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICh7IGlkLCB1c2VyLCB0ZXh0bWVzc2FnZXMsIHRpbWVzdGFtcCxpbnB1dH0pID0+IHtcclxuICBjb25zdCBbc2hvd0NvbnRleHRNZW51LCBzZXRTaG93Q29udGV4dE1lbnVdID0gdXNlU3RhdGUoZmFsc2UpOyAgXHJcbiAgY29uc3Qgc2VsZWN0Q2hhbm5lbElkID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuYXBwLmNoYW5uZWxJZCk7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RJbnB1dCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlKSA9PiB7XHJcbiAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLm1lc3NhZ2UnKSkge1xyXG4gICAgICAgIHNldFNob3dDb250ZXh0TWVudShmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJpZ2h0Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2hvd0NvbnRleHRNZW51KCFzaG93Q29udGV4dE1lbnUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFNob3dDb250ZXh0TWVudShmYWxzZSk7XHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLCAnY2hhbm5lbHMnLCBzZWxlY3RDaGFubmVsSWQsICdtZXNzYWdlcycsIGlkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29weSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHRtZXNzYWdlcy50b1N0cmluZygpKTtcclxuICAgICAgY29uc29sZS5sb2coXCJUZXh0IGNvcGllZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjb3B5IHRleHQ6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlIG1heC13LXhsIGdyb3VwIHJlbGF0aXZlIGJnLWdyYXktNzAwIG1iLTIgbWwtMSByb3VuZGVkLW1kXCIgPlxyXG5cclxuICAgICAgPEF2YXRhciBzcmM9e3VzZXIucGhvdG99IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZV9faW5mb1wiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e3VzZXIuZGlzcGxheU5hbWV9PHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZV9fdGltZXN0YW1wXCI+e25ldyBEYXRlKHRpbWVzdGFtcD8udG9EYXRlKCkpLnRvVVRDU3RyaW5nKCl9PC9zcGFuPjwvaDQ+XHJcbiAgICAgICAge3RleHRtZXNzYWdlcy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAhc2VhcmNoSW5wdXQgfHwgc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKSA9PT0gJycgPyBpdGVtIDogKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQpKTtcclxuICAgICAgICB9KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cCBrZXk9e2luZGV4fT57aXRlbX08L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZVJpZ2h0Q2xpY2t9PjxIaUVsbGlwc2lzVmVydGljYWwgc2l6ZT17MjB9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiAvPjwvZGl2PlxyXG4gICAgICB7c2hvd0NvbnRleHRNZW51ID8gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgdy1tYXggZmxleCBmbGV4LWNvbCAgIHB4LTIgcHktMyBnYXAtMyB0ZXh0LXNtIHRleHQtd2hpdGUgYmctZ3JheS04MDAgcm91bmRlZC1sZyBzaGFkb3cteGxcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiAnNSUnLCBsZWZ0OiAnMTAwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBob3Zlcjpyb3VuZGVkLW1kIHB4LTEgcHktMiBob3ZlcjpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICA8QWlPdXRsaW5lRGVsZXRlIHNpemU9ezIyfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zdGFydCAgXCI+RGVsZXRlIE1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ29weX0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JheS03MDAgaG92ZXI6cm91bmRlZC1tZCBweC0xIHB5LTJcIj5cclxuICAgICAgICAgICAgPFZzY0NvcHkgc2l6ZT17MjJ9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc3RhcnRcIj5Db3B5PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IFwiXCJ9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlXHJcbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUFwcFNlbGVjdG9yIiwiZG9jIiwiZGVsZXRlRG9jIiwiSGlFbGxpcHNpc1ZlcnRpY2FsIiwiQWlPdXRsaW5lRGVsZXRlIiwiTWVzc2FnZSIsImlkIiwidXNlciIsInRleHRtZXNzYWdlcyIsInRpbWVzdGFtcCIsImlucHV0Iiwic2hvd0NvbnRleHRNZW51Iiwic2V0U2hvd0NvbnRleHRNZW51Iiwic2VsZWN0Q2hhbm5lbElkIiwic3RhdGUiLCJhcHAiLCJjaGFubmVsSWQiLCJzZWFyY2hJbnB1dCIsInNlbGVjdElucHV0IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVJpZ2h0Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZURlbGV0ZUNsaWNrIiwiZGIiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJwaG90byIsImg0IiwiZGlzcGxheU5hbWUiLCJzcGFuIiwiRGF0ZSIsInRvRGF0ZSIsInRvVVRDU3RyaW5nIiwiZmlsdGVyIiwiaXRlbSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJpbmRleCIsInAiLCJvbkNsaWNrIiwic2l6ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJ1dHRvbiIsIlZzY0NvcHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Message.js\n"));

/***/ }),

/***/ "./node_modules/react-icons/ai/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/ai/index.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


/***/ }),

/***/ "./node_modules/react-icons/hi2/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/hi2/index.esm.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


/***/ })

});