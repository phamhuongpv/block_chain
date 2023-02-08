"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addresses";
exports.ids = ["pages/api/addresses"];
exports.modules = {

/***/ "./pages/api/addresses.js":
/*!********************************!*\
  !*** ./pages/api/addresses.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const network = req.query.network;\n    res.status(200).json({\n        marketplaceAddress: process.env[`MARKETPLACE_CONTRACT_ADDRESS_${network}`],\n        nftAddress: process.env[`NFT_CONTRACT_ADDRESS_${network}`]\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRkcmVzc2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxRQUFRLENBQUNBLE9BQU8sQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxLQUFLLENBQUNDLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELE9BQU87SUFDakNELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDcEJDLGtCQUFrQixFQUFFQyxPQUFPLENBQUNDLEdBQUcsRUFBRSw2QkFBNkIsRUFBRU4sT0FBTztRQUN2RU8sVUFBVSxFQUFFRixPQUFPLENBQUNDLEdBQUcsRUFBRSxxQkFBcUIsRUFBRU4sT0FBTztJQUN6RCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25mdC1tYXJrZXRwbGFjZS8uL3BhZ2VzL2FwaS9hZGRyZXNzZXMuanM/YmUzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IG5ldHdvcmsgPSByZXEucXVlcnkubmV0d29ya1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgIG1hcmtldHBsYWNlQWRkcmVzczogcHJvY2Vzcy5lbnZbYE1BUktFVFBMQUNFX0NPTlRSQUNUX0FERFJFU1NfJHtuZXR3b3JrfWBdLFxyXG4gICAgbmZ0QWRkcmVzczogcHJvY2Vzcy5lbnZbYE5GVF9DT05UUkFDVF9BRERSRVNTXyR7bmV0d29ya31gXVxyXG4gIH0pXHJcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm5ldHdvcmsiLCJxdWVyeSIsInN0YXR1cyIsImpzb24iLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJwcm9jZXNzIiwiZW52IiwibmZ0QWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/addresses.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/addresses.js"));
module.exports = __webpack_exports__;

})();