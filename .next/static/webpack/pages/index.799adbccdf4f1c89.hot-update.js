"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FramerMotion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// Dropdown items open animation\nconst variants = {\n    open: {\n        opacity: 1,\n        y: 100\n    },\n    closed: {\n        opacity: 0,\n        y: 50\n    }\n};\nfunction FramerMotion() {\n    _s();\n    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    let animation = \"\";\n    // Dropdown items open animation\n    /*\n   animation = <motion.nav\n      animate={isOpen ? \"open\" : \"closed\"}\n      variants={variants}\n  >\n      <div className='w-52 h-48 rounded-lg p-5 shadow-xl bg-white border'>\n          <li>Home</li>\n          <li>Contact</li>\n      </div>\n  </motion.nav>\n  */ // scale animation\n    animation = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0,\n            scale: 3\n        },\n        animate: {\n            opacity: 1,\n            scale: 1\n        },\n        transition: {\n            duration: 3\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-52 h-48 rounded-full p-5 shadow-xl bg-lime-300 border\"\n        }, void 0, false, {\n            fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 15\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center w-full h-[500px] bg-gray-100 dark:bg-gray-700\",\n        children: animation\n    }, void 0, false, {\n        fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n_s(FramerMotion, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = FramerMotion;\nvar _c;\n$RefreshReg$(_c, \"FramerMotion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYztBQUV4QyxnQ0FBZ0M7QUFDaEMsTUFBTUUsV0FBVztJQUNmQyxNQUFNO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFJO0lBQzNCQyxRQUFRO1FBQUVGLFNBQVM7UUFBR0MsR0FBRztJQUFHO0FBQzlCO0FBRWUsU0FBU0UsZUFBZTs7SUFDckMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULHFEQUFjLENBQUMsS0FBSztJQUNoRCxJQUFJVyxZQUFZO0lBRWhCLGdDQUFnQztJQUNoQzs7Ozs7Ozs7OztFQVVBLEdBR0Esa0JBQWtCO0lBQ2xCQSwwQkFBWSw4REFBQ1YscURBQVU7UUFDckJZLFNBQVM7WUFBRVQsU0FBUztZQUFHVSxPQUFPO1FBQUU7UUFDaENDLFNBQVM7WUFBRVgsU0FBUztZQUFHVSxPQUFPO1FBQUU7UUFDaENFLFlBQVk7WUFBRUMsVUFBVTtRQUFFO2tCQUUxQiw0RUFBQ0w7WUFBSU0sV0FBVTs7Ozs7Ozs7Ozs7SUFNakIscUJBQU8sOERBQUNOO1FBQUlNLFdBQVU7a0JBQ25CUDs7Ozs7O0FBUUwsQ0FBQztHQXZDdUJKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLy8gRHJvcGRvd24gaXRlbXMgb3BlbiBhbmltYXRpb25cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBvcGVuOiB7IG9wYWNpdHk6IDEsIHk6IDEwMCB9LFxuICBjbG9zZWQ6IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJhbWVyTW90aW9uKCkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGxldCBhbmltYXRpb24gPSAnJztcblxuICAvLyBEcm9wZG93biBpdGVtcyBvcGVuIGFuaW1hdGlvblxuICAvKlxuICAgYW5pbWF0aW9uID0gPG1vdGlvbi5uYXZcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctNTIgaC00OCByb3VuZGVkLWxnIHAtNSBzaGFkb3cteGwgYmctd2hpdGUgYm9yZGVyJz5cbiAgICAgICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxuICAgICAgPC9kaXY+XG4gIDwvbW90aW9uLm5hdj5cbiAgKi9cblxuXG4gIC8vIHNjYWxlIGFuaW1hdGlvblxuICBhbmltYXRpb24gPSA8bW90aW9uLmRpdlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDMgfX1cbiAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMyB9fVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9J3ctNTIgaC00OCByb3VuZGVkLWZ1bGwgcC01IHNoYWRvdy14bCBiZy1saW1lLTMwMCBib3JkZXInPlxuXG4gICAgPC9kaXY+XG4gIDwvbW90aW9uLmRpdj5cblxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLVs1MDBweF0gYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTcwMFwiPlxuICAgIHthbmltYXRpb259XG4gICAgey8qIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS01MDAgcC0yIHJvdW5kZWQteGwgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbihpc09wZW4gPT4gIWlzT3Blbil9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtpc09wZW4gPyAnQ29zZScgOiAnT3Blbid9XG4gICAgICAgIDwvYnV0dG9uPiAqL31cbiAgPC9kaXY+O1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInZhcmlhbnRzIiwib3BlbiIsIm9wYWNpdHkiLCJ5IiwiY2xvc2VkIiwiRnJhbWVyTW90aW9uIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJhbmltYXRpb24iLCJkaXYiLCJpbml0aWFsIiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});