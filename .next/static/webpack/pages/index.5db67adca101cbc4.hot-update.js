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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FramerMotion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// Dropdown items open animation\nconst variants = {\n    open: {\n        opacity: 1,\n        y: 100\n    },\n    closed: {\n        opacity: 0,\n        y: 50\n    }\n};\nfunction FramerMotion() {\n    _s();\n    const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    let animation = \"\";\n    // Dropdown items open animation\n    /*\n   animation = <motion.nav\n      animate={isOpen ? \"open\" : \"closed\"}\n      variants={variants}\n  >\n      <div className='w-52 h-48 rounded-lg p-5 shadow-xl bg-white border'>\n          <li>Home</li>\n          <li>Contact</li>\n      </div>\n  </motion.nav>\n  */ // scale animation\n    animation = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0,\n            scale: 3\n        },\n        animate: {\n            opacity: 1,\n            scale: 1\n        },\n        transition: {\n            duration: 3\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-52 h-48 rounded-full p-5 shadow-xl bg-lime-300 border\",\n            children: \"k\"\n        }, void 0, false, {\n            fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 15\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center w-full h-[500px] bg-gray-100 dark:bg-gray-700\",\n        children: animation\n    }, void 0, false, {\n        fileName: \"/home/mijanur/Desktop/PRACTICE/framer-motion-practice/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n_s(FramerMotion, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = FramerMotion;\nvar _c;\n$RefreshReg$(_c, \"FramerMotion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYztBQUV4QyxnQ0FBZ0M7QUFDaEMsTUFBTUUsV0FBVztJQUNmQyxNQUFNO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFJO0lBQzNCQyxRQUFRO1FBQUVGLFNBQVM7UUFBR0MsR0FBRztJQUFHO0FBQzlCO0FBRWUsU0FBU0UsZUFBZTs7SUFDckMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULHFEQUFjLENBQUMsS0FBSztJQUNoRCxJQUFJVyxZQUFZO0lBRWhCLGdDQUFnQztJQUNoQzs7Ozs7Ozs7OztFQVVBLEdBR0Esa0JBQWtCO0lBQ2xCQSwwQkFBWSw4REFBQ1YscURBQVU7UUFDckJZLFNBQVM7WUFBRVQsU0FBUztZQUFHVSxPQUFPO1FBQUU7UUFDaENDLFNBQVM7WUFBRVgsU0FBUztZQUFHVSxPQUFPO1FBQUU7UUFDaENFLFlBQVk7WUFBRUMsVUFBVTtRQUFFO2tCQUUxQiw0RUFBQ0w7WUFBSU0sV0FBVTtzQkFBMEQ7Ozs7Ozs7Ozs7O0lBTTNFLHFCQUFPLDhEQUFDTjtRQUFJTSxXQUFVO2tCQUNuQlA7Ozs7OztBQVFMLENBQUM7R0F2Q3VCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8vIERyb3Bkb3duIGl0ZW1zIG9wZW4gYW5pbWF0aW9uXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgb3BlbjogeyBvcGFjaXR5OiAxLCB5OiAxMDAgfSxcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyYW1lck1vdGlvbigpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBsZXQgYW5pbWF0aW9uID0gJyc7XG5cbiAgLy8gRHJvcGRvd24gaXRlbXMgb3BlbiBhbmltYXRpb25cbiAgLypcbiAgIGFuaW1hdGlvbiA9IDxtb3Rpb24ubmF2XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTUyIGgtNDggcm91bmRlZC1sZyBwLTUgc2hhZG93LXhsIGJnLXdoaXRlIGJvcmRlcic+XG4gICAgICAgICAgPGxpPkhvbWU8L2xpPlxuICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgIDwvZGl2PlxuICA8L21vdGlvbi5uYXY+XG4gICovXG5cblxuICAvLyBzY2FsZSBhbmltYXRpb25cbiAgYW5pbWF0aW9uID0gPG1vdGlvbi5kaXZcbiAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAzIH19XG4gICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDMgfX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LTUyIGgtNDggcm91bmRlZC1mdWxsIHAtNSBzaGFkb3cteGwgYmctbGltZS0zMDAgYm9yZGVyJz5cbmtcbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24uZGl2PlxuXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtWzUwMHB4XSBiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktNzAwXCI+XG4gICAge2FuaW1hdGlvbn1cbiAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBwLTIgcm91bmRlZC14bCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGlzT3BlbiA9PiAhaXNPcGVuKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2lzT3BlbiA/ICdDb3NlJyA6ICdPcGVuJ31cbiAgICAgICAgPC9idXR0b24+ICovfVxuICA8L2Rpdj47XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsInkiLCJjbG9zZWQiLCJGcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsImFuaW1hdGlvbiIsImRpdiIsImluaXRpYWwiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});