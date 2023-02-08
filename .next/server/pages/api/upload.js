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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("multiparty");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./pages/api/middleware/middleware.js":
/*!********************************************!*\
  !*** ./pages/api/middleware/middleware.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiparty */ \"multiparty\");\n/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\nconst middleware = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nmiddleware.use((req, res, next)=>{\n    const form = new (multiparty__WEBPACK_IMPORTED_MODULE_1___default().Form)();\n    form.parse(req, function(err, fields, files) {\n        if (err) {\n            console.log(err);\n            next();\n        }\n        req.body = fields;\n        req.files = files;\n        next();\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middleware);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWlkZGxld2FyZS9taWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0M7QUFDSDtBQUVuQyxLQUFLLENBQUNFLFVBQVUsR0FBR0Ysd0RBQVc7QUFFOUJFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7SUFDbEMsS0FBSyxDQUFDQyxJQUFJLEdBQUcsR0FBRyxDQUFDTix3REFBZTtJQUNoQ00sSUFBSSxDQUFDRSxLQUFLLENBQUNMLEdBQUcsRUFBRSxRQUFRLENBQUVNLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxFQUFFLEVBQUVGLEdBQUcsRUFBRSxDQUFDO1lBQ1JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixHQUFHO1lBQ2ZKLElBQUk7UUFDTixDQUFDO1FBQ0RGLEdBQUcsQ0FBQ1csSUFBSSxHQUFHSixNQUFNO1FBQ2pCUCxHQUFHLENBQUNRLEtBQUssR0FBR0EsS0FBSztRQUNqQk4sSUFBSTtJQUNOLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVKLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9wYWdlcy9hcGkvbWlkZGxld2FyZS9taWRkbGV3YXJlLmpzP2JkM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCdcclxuaW1wb3J0IG11bHRpcGFydHkgZnJvbSAnbXVsdGlwYXJ0eSdcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpXHJcblxyXG5taWRkbGV3YXJlLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCBmb3JtID0gbmV3IG11bHRpcGFydHkuRm9ybSgpXHJcbiAgZm9ybS5wYXJzZShyZXEsIGZ1bmN0aW9uIChlcnIsIGZpZWxkcywgZmlsZXMpIHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICBuZXh0KClcclxuICAgIH1cclxuICAgIHJlcS5ib2R5ID0gZmllbGRzXHJcbiAgICByZXEuZmlsZXMgPSBmaWxlc1xyXG4gICAgbmV4dCgpXHJcbiAgfSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmVcclxuIl0sIm5hbWVzIjpbIm5leHRDb25uZWN0IiwibXVsdGlwYXJ0eSIsIm1pZGRsZXdhcmUiLCJ1c2UiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZm9ybSIsIkZvcm0iLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/middleware/middleware.js\n");

/***/ }),

/***/ "./pages/api/upload.js":
/*!*****************************!*\
  !*** ./pages/api/upload.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/middleware */ \"./pages/api/middleware/middleware.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_3__]);\n([_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__, next_connect__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\nconst pinataBaseUrl = 'https://api.pinata.cloud';\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nhandler.use(_middleware_middleware__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nhandler.post(async function handlePost({ body , files  }, response) {\n    try {\n        const fileUrl = await uploadFileToIPFS(files.file[0]);\n        const metadata = {\n            name: body.name[0],\n            description: body.description[0],\n            image: fileUrl\n        };\n        const metadaUrl = await uploadJsonToIPFS(metadata, body.name[0]);\n        return response.status(200).json({\n            url: metadaUrl\n        });\n    } catch (error) {\n        console.log('Error uploading file: ', error);\n    }\n});\nasync function uploadFileToIPFS(data) {\n    const formData = new (form_data__WEBPACK_IMPORTED_MODULE_4___default())();\n    formData.append('file', fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(data.path), data.originalFileName);\n    try {\n        const { data: responseData  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${pinataBaseUrl}/pinning/pinFileToIPFS`, formData, {\n            headers: {\n                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,\n                pinata_api_key: process.env.PINATA_API_KEY,\n                pinata_secret_api_key: process.env.PINATA_SECRET_KEY\n            }\n        });\n        const url = `https://ipfs.io/ipfs/${responseData.IpfsHash}?filename=${data.originalFilename}`;\n        return url;\n    } catch (error) {\n        console.log(error);\n    }\n}\nasync function uploadJsonToIPFS(json, fileName) {\n    try {\n        const { data: responseData  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${pinataBaseUrl}/pinning/pinJSONToIPFS`, json, {\n            headers: {\n                pinata_api_key: process.env.PINATA_API_KEY,\n                pinata_secret_api_key: process.env.PINATA_SECRET_KEY\n            }\n        });\n        const url = `https://ipfs.io/ipfs/${responseData.IpfsHash}?filename=${fileName}`;\n        return url;\n    } catch (error) {\n        console.log(error.response.data);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsQ0FBQyxzQkFBc0IsR0FBR3FCLElBQUksRUFBRSxDQUFDO1lBQy9GWSxPQUFPLEVBQUUsQ0FBQztnQkFDUkUsY0FBYyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztnQkFDMUNDLHFCQUFxQixFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csaUJBQWlCO1lBQ3RELENBQUM7UUFDSCxDQUFDO1FBQ0QsS0FBSyxDQUFDbEIsR0FBRyxJQUFJLHFCQUFxQixFQUFFVSxZQUFZLENBQUNTLFFBQVEsQ0FBQyxVQUFVLEVBQUVFLFFBQVE7UUFDOUUsTUFBTSxDQUFDckIsR0FBRztJQUNaLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNiLFFBQVEsQ0FBQ2dCLElBQUk7SUFDakMsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZXpCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtbWFya2V0cGxhY2UvLi9wYWdlcy9hcGkvdXBsb2FkLmpzPzU1NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBtaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9taWRkbGV3YXJlJ1xyXG5pbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0J1xyXG5pbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJ1xyXG5cclxuY29uc3QgcGluYXRhQmFzZVVybCA9ICdodHRwczovL2FwaS5waW5hdGEuY2xvdWQnXHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG5oYW5kbGVyLnVzZShtaWRkbGV3YXJlKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5oYW5kbGVyLnBvc3QoYXN5bmMgZnVuY3Rpb24gaGFuZGxlUG9zdCAoeyBib2R5LCBmaWxlcyB9LCByZXNwb25zZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmaWxlVXJsID0gYXdhaXQgdXBsb2FkRmlsZVRvSVBGUyhmaWxlcy5maWxlWzBdKVxyXG4gICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGJvZHkubmFtZVswXSxcclxuICAgICAgZGVzY3JpcHRpb246IGJvZHkuZGVzY3JpcHRpb25bMF0sXHJcbiAgICAgIGltYWdlOiBmaWxlVXJsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbWV0YWRhVXJsID0gYXdhaXQgdXBsb2FkSnNvblRvSVBGUyhtZXRhZGF0YSwgYm9keS5uYW1lWzBdKVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICB1cmw6IG1ldGFkYVVybFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ0Vycm9yIHVwbG9hZGluZyBmaWxlOiAnLCBlcnJvcilcclxuICB9XHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRGaWxlVG9JUEZTIChkYXRhKSB7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZzLmNyZWF0ZVJlYWRTdHJlYW0oZGF0YS5wYXRoKSwgZGF0YS5vcmlnaW5hbEZpbGVOYW1lKVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhOiByZXNwb25zZURhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7cGluYXRhQmFzZVVybH0vcGlubmluZy9waW5GaWxlVG9JUEZTYCwgZm9ybURhdGEsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtmb3JtRGF0YS5fYm91bmRhcnl9YCxcclxuICAgICAgICBwaW5hdGFfYXBpX2tleTogcHJvY2Vzcy5lbnYuUElOQVRBX0FQSV9LRVksXHJcbiAgICAgICAgcGluYXRhX3NlY3JldF9hcGlfa2V5OiBwcm9jZXNzLmVudi5QSU5BVEFfU0VDUkVUX0tFWVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXBmcy5pby9pcGZzLyR7cmVzcG9uc2VEYXRhLklwZnNIYXNofT9maWxlbmFtZT0ke2RhdGEub3JpZ2luYWxGaWxlbmFtZX1gXHJcbiAgICByZXR1cm4gdXJsXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiB1cGxvYWRKc29uVG9JUEZTIChqc29uLCBmaWxlTmFtZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IHJlc3BvbnNlRGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChgJHtwaW5hdGFCYXNlVXJsfS9waW5uaW5nL3BpbkpTT05Ub0lQRlNgLCBqc29uLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBwaW5hdGFfYXBpX2tleTogcHJvY2Vzcy5lbnYuUElOQVRBX0FQSV9LRVksXHJcbiAgICAgICAgcGluYXRhX3NlY3JldF9hcGlfa2V5OiBwcm9jZXNzLmVudi5QSU5BVEFfU0VDUkVUX0tFWVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vaXBmcy5pby9pcGZzLyR7cmVzcG9uc2VEYXRhLklwZnNIYXNofT9maWxlbmFtZT0ke2ZpbGVOYW1lfWBcclxuICAgIHJldHVybiB1cmxcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZnMiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJGb3JtRGF0YSIsInBpbmF0YUJhc2VVcmwiLCJoYW5kbGVyIiwidXNlIiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInBvc3QiLCJoYW5kbGVQb3N0IiwiYm9keSIsImZpbGVzIiwicmVzcG9uc2UiLCJmaWxlVXJsIiwidXBsb2FkRmlsZVRvSVBGUyIsImZpbGUiLCJtZXRhZGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWV0YWRhVXJsIiwidXBsb2FkSnNvblRvSVBGUyIsInN0YXR1cyIsImpzb24iLCJ1cmwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJjcmVhdGVSZWFkU3RyZWFtIiwicGF0aCIsIm9yaWdpbmFsRmlsZU5hbWUiLCJyZXNwb25zZURhdGEiLCJoZWFkZXJzIiwiX2JvdW5kYXJ5IiwicGluYXRhX2FwaV9rZXkiLCJwcm9jZXNzIiwiZW52IiwiUElOQVRBX0FQSV9LRVkiLCJwaW5hdGFfc2VjcmV0X2FwaV9rZXkiLCJQSU5BVEFfU0VDUkVUX0tFWSIsIklwZnNIYXNoIiwib3JpZ2luYWxGaWxlbmFtZSIsImZpbGVOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/upload.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/upload.js"));
module.exports = __webpack_exports__;

})();