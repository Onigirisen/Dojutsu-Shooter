/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Cell {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.width = _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize;\n    this.height = _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize;\n  }\n\n  draw() {\n    ctx.strokeStyle = 'black';\n    ctx.strokeRect(this.x, this.y, this.width, this.height);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2VsbC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLE1BQU1DLElBQU4sQ0FBVztFQUNQQyxXQUFXLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFLO0lBQ1osS0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0lBQ0EsS0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0lBQ0EsS0FBS0MsS0FBTCxHQUFhTCw4Q0FBYjtJQUNBLEtBQUtPLE1BQUwsR0FBY1AsOENBQWQ7RUFDSDs7RUFFRFEsSUFBSSxHQUFHO0lBQ0hDLEdBQUcsQ0FBQ0MsV0FBSixHQUFrQixPQUFsQjtJQUNBRCxHQUFHLENBQUNFLFVBQUosQ0FBZSxLQUFLUixDQUFwQixFQUF1QixLQUFLQyxDQUE1QixFQUErQixLQUFLQyxLQUFwQyxFQUEyQyxLQUFLRSxNQUFoRDtFQUNIOztBQVhNOztBQWdCWCwrREFBZU4sSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvanV0c3Utc2hvb3Rlci8uL3NyYy9jZWxsLmpzPzI0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi91dGlsXCJcbmNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKHgseSl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSBVdGlsLmJveENlbGxTaXplXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gVXRpbC5ib3hDZWxsU2l6ZVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDsiXSwibmFtZXMiOlsiVXRpbCIsIkNlbGwiLCJjb25zdHJ1Y3RvciIsIngiLCJ5Iiwid2lkdGgiLCJib3hDZWxsU2l6ZSIsImhlaWdodCIsImRyYXciLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cell.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Game {\n  constructor() {}\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE1BQU1DLElBQU4sQ0FBVztFQUNQQyxXQUFXLEdBQUcsQ0FFYjs7QUFITTs7QUFRWCwrREFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvanV0c3Utc2hvb3Rlci8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL3V0aWwnXG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgXG4gICAgfVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIlV0aWwiLCJHYW1lIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ \"./src/cell.js\");\n\n\n\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx; // this.game = game;\n  }\n\n  setUpControlBar(ctx) {\n    this.ctx.fillStyle = \"blue\";\n    this.ctx.fillRect(0, 0, canvas.width, _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize.height);\n    requestAnimationFrame(this.setUpControlBar.bind(this));\n  }\n\n  createGrid(ctx) {\n    for (let y = _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize; y < this.ctx.height; y += _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize) {\n      for (let x = 0; x < this.ctx.width; x += _util__WEBPACK_IMPORTED_MODULE_0__.boxCellSize) {\n        _util__WEBPACK_IMPORTED_MODULE_0__.gameGrid.push(new _cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y));\n      }\n    }\n  }\n\n  handleGameGrid(ctx) {\n    for (i = 0; i < _util__WEBPACK_IMPORTED_MODULE_0__.gameGrid.length; i++) {\n      _util__WEBPACK_IMPORTED_MODULE_0__.gameGrid[i].draw;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZXZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxRQUFOLENBQWU7RUFDWEMsV0FBVyxDQUFDQyxJQUFELEVBQU1DLEdBQU4sRUFBVTtJQUNqQixLQUFLQSxHQUFMLEdBQVdBLEdBQVgsQ0FEaUIsQ0FFakI7RUFDSDs7RUFFREMsZUFBZSxDQUFDRCxHQUFELEVBQU07SUFDakIsS0FBS0EsR0FBTCxDQUFTRSxTQUFULEdBQXFCLE1BQXJCO0lBQ0EsS0FBS0YsR0FBTCxDQUFTRyxRQUFULENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCQyxNQUFNLENBQUNDLEtBQTdCLEVBQW9DVixxREFBcEM7SUFDQWEscUJBQXFCLENBQUMsS0FBS1AsZUFBTCxDQUFxQlEsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBRCxDQUFyQjtFQUNIOztFQUVEQyxVQUFVLENBQUNWLEdBQUQsRUFBTTtJQUNaLEtBQUssSUFBSVcsQ0FBQyxHQUFHaEIsOENBQWIsRUFBK0JnQixDQUFDLEdBQUcsS0FBS1gsR0FBTCxDQUFTTyxNQUE1QyxFQUFvREksQ0FBQyxJQUFJaEIsOENBQXpELEVBQTBFO01BQ3RFLEtBQUssSUFBSWlCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1osR0FBTCxDQUFTSyxLQUE3QixFQUFvQ08sQ0FBQyxJQUFJakIsOENBQXpDLEVBQTJEO1FBQ3ZEQSxnREFBQSxDQUFtQixJQUFJQyw2Q0FBSixDQUFTZ0IsQ0FBVCxFQUFXRCxDQUFYLENBQW5CO01BQ0g7SUFDSjtFQUNKOztFQUVESSxjQUFjLENBQUNmLEdBQUQsRUFBTTtJQUNoQixLQUFLZ0IsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHckIsa0RBQWhCLEVBQXNDcUIsQ0FBQyxFQUF2QyxFQUE0QztNQUN4Q3JCLDJDQUFBLENBQWNxQixDQUFkLEVBQWlCRSxJQUFqQjtJQUNIO0VBQ0o7O0FBeEJVOztBQTRCZiwrREFBZXJCLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2p1dHN1LXNob290ZXIvLi9zcmMvZ2FtZXZpZXcuanM/Yjc0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWxcIlxuaW1wb3J0IENlbGwgZnJvbSBcIi4vY2VsbFwiXG5cbmNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cbiAgICBcbiAgICBzZXRVcENvbnRyb2xCYXIoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsMCxjYW52YXMud2lkdGgsIFV0aWwuYm94Q2VsbFNpemUuaGVpZ2h0KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2V0VXBDb250cm9sQmFyLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgY3JlYXRlR3JpZChjdHgpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IFV0aWwuYm94Q2VsbFNpemU7IHkgPCB0aGlzLmN0eC5oZWlnaHQ7IHkgKz0gVXRpbC5ib3hDZWxsU2l6ZSl7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY3R4LndpZHRoOyB4ICs9IFV0aWwuYm94Q2VsbFNpemUpIHtcbiAgICAgICAgICAgICAgICBVdGlsLmdhbWVHcmlkLnB1c2gobmV3IENlbGwoeCx5KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVHYW1lR3JpZChjdHgpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFV0aWwuZ2FtZUdyaWQubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBVdGlsLmdhbWVHcmlkW2ldLmRyYXdcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlld1xuIl0sIm5hbWVzIjpbIlV0aWwiLCJDZWxsIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjdHgiLCJzZXRVcENvbnRyb2xCYXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiYm94Q2VsbFNpemUiLCJoZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY3JlYXRlR3JpZCIsInkiLCJ4IiwiZ2FtZUdyaWQiLCJwdXNoIiwiaGFuZGxlR2FtZUdyaWQiLCJpIiwibGVuZ3RoIiwiZHJhdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/gameview.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _gameview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cell */ \"./src/cell.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementsByTagName(\"canvas\")[0];\n  canvas.width = 900;\n  canvas.height = 600;\n  const ctx = canvas.getContext(\"2d\"); // const game = new Game()\n\n  const gameView = new _gameview__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  gameView.createGrid(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFmO0VBQ0FELE1BQU0sQ0FBQ0UsS0FBUCxHQUFlLEdBQWY7RUFDQUYsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLEdBQWhCO0VBQ0EsTUFBTUMsR0FBRyxHQUFHSixNQUFNLENBQUNLLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDQUpnRCxDQUtoRDs7RUFDQSxNQUFNQyxRQUFRLEdBQUcsSUFBSVYsaURBQUosQ0FBYVEsR0FBYixDQUFqQjtFQUNBRSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JILEdBQXBCO0FBQ0gsQ0FSRCIsInNvdXJjZXMiOlsid2VicGFjazovL2RvanV0c3Utc2hvb3Rlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSdcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL2dhbWV2aWV3J1xuaW1wb3J0IENlbGwgZnJvbSAnLi9jZWxsJ1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjYW52YXMud2lkdGggPSA5MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIC8vIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpXG4gICAgY29uc3QgZ2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY3R4KVxuICAgIGdhbWVWaWV3LmNyZWF0ZUdyaWQoY3R4KVxufSlcbiJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJDZWxsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lVmlldyIsImNyZWF0ZUdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boxCellSize\": function() { return /* binding */ boxCellSize; },\n/* harmony export */   \"gameGrid\": function() { return /* binding */ gameGrid; },\n/* harmony export */   \"gapBetween\": function() { return /* binding */ gapBetween; }\n/* harmony export */ });\nconst boxCellSize = 100;\nconst gapBetween = 3;\nconst gameGrid = [];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsRUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2p1dHN1LXNob290ZXIvLi9zcmMvdXRpbC5qcz9lMGViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBib3hDZWxsU2l6ZSA9IDEwMDtcbmV4cG9ydCBjb25zdCBnYXBCZXR3ZWVuID0gMztcbmV4cG9ydCBjb25zdCBnYW1lR3JpZCA9IFtdOyAgICAiXSwibmFtZXMiOlsiYm94Q2VsbFNpemUiLCJnYXBCZXR3ZWVuIiwiZ2FtZUdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2p1dHN1LXNob290ZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;