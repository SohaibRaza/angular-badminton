(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"userService.loggedIn\">\n      <ion-content>\n        <ion-menu-toggle>\n          <ion-item class=\"top-item\">\n            <i class=\"material-icons dark-icon\">close</i>\n          </ion-item>\n        </ion-menu-toggle>\n        \n        \n          <ion-list-header class=\"bold-green-text\">Themes</ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index;\">\n            <ion-item (click)=\"selectedIndex = i; selectedCatIndex = 1000;selectedSecIndex = 100\" routerDirection=\"root\" \n              [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n             [class.selected]=\"selectedIndex == i\" >\n              \n              <i slot=\"start\" class=\"material-icons\" [ngClass]=\"{'ion-success-color': selectedIndex == i}\">{{p.icon}}</i>\n              <ion-label [color]=\"selectedIndex == i ? 'success' : 'primary'\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n\n\n          <ion-list-header class=\"bold-green-text\">Categories</ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" >\n            <ion-item (click)=\"selectedCatIndex = i; selectedIndex = 1000;selectedSecIndex = 100\" routerDirection=\"root\" [class.selected]=\"selectedCatIndex == i\"\n                      *ngFor=\"let cat of categoryItems; let i = index;\" routerLink=\"/category/{{cat.name}}\" \n                      lines=\"none\" detail=\"false\">              \n              <i slot=\"start\" [ngClass]=\"{'ion-success-color': selectedCatIndex == i}\" class=\"material-icons\">{{cat.icon}}</i>\n              <ion-label [color]=\"selectedCatIndex == i ? 'success' : 'primary'\">{{cat.name}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        \n          <ion-item lines=\"none\" class=\"logo-wrapper\">\n            <img src=\"/assets/logo-main.png\" />\n          </ion-item>\n        \n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\" [ngClass]=\"{'bottom-margin': userService.loggedUser | async }\"></ion-router-outlet>\n\n    <ion-footer *ngIf=\"userService.loggedUser | async\" id=\"bottom-navigation\">\n      <div (click)=\"selectedSecIndex = 1; selectedCatIndex = 1000;selectedIndex = 100\"\n      class=\"section\" routerLink=\"/browse\">\n        <i [ngClass]=\"{'ion-success-color': selectedSecIndex == 1}\" class=\"material-icons\" id=\"hidBrowse\" (click)=\"makeActive()\">view_quilt</i>\n        <p>\n          Browse\n        </p>\n      </div>\n\n      <div (click)=\"selectedSecIndex = 2; selectedCatIndex = 1000;selectedIndex = 100\"\n      class=\"section\" routerLink=\"/plans/favorites\">\n        <i [ngClass]=\"{'ion-success-color': selectedSecIndex == 2}\" class=\"material-icons\">favorite</i>\n        <p>\n          Favorites\n        </p>\n      </div>\n      \n      <div  (click)=\"selectedSecIndex = 3; selectedCatIndex = 1000;selectedIndex = 100\"\n      class=\"section\" routerLink=\"/plans/plans\">\n        <i [ngClass]=\"{'ion-success-color': selectedSecIndex == 3}\" class=\"material-icons\">menu_book</i>\n        <p>\n          Plans\n        </p>\n      </div>\n\n      <div  (click)=\"selectedSecIndex = 4; selectedCatIndex = 1000;selectedIndex = 100\"\n      class=\"section\" routerLink=\"/search\">\n        <i [ngClass]=\"{'ion-success-color': selectedSecIndex == 4}\" class=\"material-icons\">search</i>\n        <p>\n          Search\n        </p>\n      </div>\n      \n    </ion-footer>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-content/article-content.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-content/article-content.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticleContentArticleContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"top-img-wrapper\">\n    <img [src]=\"article ? article.featured_image_src : ''\" />\n  </div>\n  <div class=\"main-wrapper \">\n    <div *ngIf=\"article\" class=\"wp-content-wrapper has-horizontal-padding\" [innerHTML]=\"article.rendered_content\"></div>\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Articles\n\n      <span routerLink=\"/articles\">View all</span>\n    </p>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"articles\">\n      \n\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of articles\" routerLink=\"/articles/{{tp.id}}\" [src]=\"tp ? tp.featured_image_src : ''\" />\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/articles.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/articles.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlesArticlesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">Articles</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <div class=\"main-wrapper\">\n    <div class=\"article-wrapper\" *ngFor=\"let article of filteredArticles\" routerLink=\"/articles/{{article.id}}\">\n      <img [src]=\"article.featured_image_src\" />\n      <div class=\"has-padding\">\n        <p class=\"bold-green-text\">{{article.title.rendered}}</p>\n        <div [innerHtml]=\"article.pure_excerpt\"></div>\n      </div>    \n    </div>\n  \n    <div class=\"has-padding\">\n      <div *ngIf=\"displayCount < articles.length\" class=\"footer-wrapper\">\n        <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n          LOAD MORE\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsBrowseBrowseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">Browse</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>    \n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class=\"slider-wrapper\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" #slides [ngClass]=\"{hidden: !sliderItems}\">\n      <ion-slide *ngFor=\"let item of sliderItems; let ind = index;\">\n        <img  [src]=\"item.featured_image_src\" />\n        <ion-button *ngIf=\"item.excerpt\" class=\"gradient-button\" (click)=\"goToPage(item)\">\n          {{item.excerpt.buttonText}}\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n<div [ngClass]=\"{hidden: isLoading}\" class=\"main-wrapper\">\n  \n\n  <div class=\"has-horizontal-padding\">\n    <p class=\"bold-green-text\">\n      Latest Content\n\n      <span routerLink=\"/whats-new\">View all</span>\n    </p>\n  </div>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"latestContent\">\n      \n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestContent\" \n        (click)=\"goToPageByParent(tp)\"\n          [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n  <div class=\"has-horizontal-padding\">\n    \n    <p class=\"bold-green-text\">\n      Latest Training Programs\n\n      <span routerLink=\"/training-programs\">View all</span>\n    </p>\n\n  </div>\n    <div class=\"scroll-wrapper \" *ngIf=\"latestTrainingPrograms\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestTrainingPrograms\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n  <div class=\"has-horizontal-padding\">\n\n    <p class=\"bold-green-text\">\n      Latest Tactical Lessons\n\n      <span routerLink=\"/tactical-lessons\">View all</span>\n    </p>\n  </div>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"latestTacticalLessons\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestTacticalLessons\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n  <div class=\"has-horizontal-padding\">\n\n    <p class=\"bold-green-text\">\n      Latest Kids Academy\n\n      <span routerLink=\"/kids-academy\">View all</span>\n    </p>\n  </div>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"latestTacticalLessons\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestKidsAcademies\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n  <div class=\"sm-hidden\">\n    <div class=\"has-horizontal-padding\">\n    \n      <p class=\"bold-green-text\">\n        Latest Podcasts\n  \n        <span routerLink=\"/podcasts\">View all</span>\n      </p>\n    </div>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"latestPodcasts\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPodcasts\" routerLink=\"/podacasts/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <!-- <div class=\"has-horizontal-padding\">\n    \n      <p class=\"bold-green-text\">\n        Latest from Kids Academy\n  \n        <span routerLink=\"/kids-academy\">View all</span>\n      </p>\n    </div>\n\n    <div class=\"scroll-wrapper\" *ngIf=\"latestKidsAcademies\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestKidsAcademies\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div> -->\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Physical programs\n  \n        <span routerLink=\"/physical-programs\">View all</span>\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestPodcasts\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPhysicalPrograms\" routerLink=\"/physical-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n  \n  \n\n  <div class=\"podcast-wrapper lg-hidden\">\n    <p class=\"bold-green-text text-center\">\n      Latest Podcast\n    </p>\n\n    <div *ngIf=\"latestPodcast\">\n      <img routerLink=\"/podcasts/{{latestPodcast.id}}\" [src]=\"latestPodcast.featured_image_src\" />\n    </div>\n      \n    <ion-button  (click)=\"goToPage({excerpt: {itemType: 'podcast', itemId: latestPodcast.id}})\">\n      WATCH/LISTEN\n    </ion-button>\n  </div>\n\n  <!-- <div class=\"kids-academy-wrapper lg-hidden\">\n    <p class=\"bold-green-text text-center\">\n      Latest from Kids Academy\n    </p>\n\n    <div *ngIf=\"latestKidsAcademy\">\n      <img routerLink=\"/kids-academy/{{latestKidsAcademy.id}}\" [src]=\"latestKidsAcademy.featured_image_src\" />\n    </div>\n      \n    <ion-button  (click)=\"goToPage({excerpt: {itemType: 'kids-academy', itemId: latestKidsAcademy.id}})\">\n      WATCH\n    </ion-button>\n  </div> -->\n\n  <div class=\"lg-hidden physical-wrapper\">\n    <div class=\"has-horizontal-padding \">\n      <div class=\"\" *ngIf=\"latestPhysicalProgram\">\n        <p class=\"bold-green-text\">\n          Latest Physical program\n\n          <span routerLink=\"/physical-programs\">View all</span>\n        </p>\n      </div>\n    </div>\n    <img routerLink=\"/physical-programs/{{latestPhysicalProgram.id}}\" *ngIf=\"latestPhysicalProgram\"\n        [src]=\"latestPhysicalProgram.featured_image_src\" />\n    <div class=\"has-padding\">\n      <div class=\"excerpt-wrapper\" *ngIf=\"latestPhysicalProgram\">\n        <p class=\"bold-green-text\">{{latestPhysicalProgram.title}}</p>\n        <p >Coach: {{latestPhysicalProgram.excerpt.coach}}</p>\n        <p >Levels: {{latestPhysicalProgram.excerpt.levels}}</p>\n        <p >Duration: {{latestPhysicalProgram.excerpt.duration}}</p>\n\n        <ion-button class=\"gradient-button big-btn\"\n        (click)=\"goToPage({excerpt: {itemType: 'physical-program', itemId: latestPhysicalProgram.id}})\">\n          WATCH PROGRAM\n        </ion-button>\n      </div>\n\n    </div>\n  </div>\n\n\n  <div>\n    <img src=\"/assets/coaches-phone.jpeg\" *ngIf=\"isPhone()\" class=\"welcome-img\" />\n    <img src=\"/assets/coaches-tablet.jpeg\" *ngIf=\"!isPhone()\" class=\"welcome-img\" />\n\n    <div class=\"lg-hidden\">\n      <div class=\"has-horizontal-padding\">\n        <p class=\"bold-green-text\">\n          Latest Mental Course\n          <span routerLink=\"/mental-courses\">View all</span>\n        </p>      \n      </div>\n\n      <img routerLink=\"/mental-courses/{{latestBrowseMentalCourse.id}}\" [src]=\"latestBrowseMentalCourse.featured_image_src\" />\n\n      <div class=\"mental-bottom-wrapper has-padding \" *ngIf=\"latestBrowseMentalCourse.excerpt\">\n        <div class=\"excerpt-wrapper\">\n          <p class=\"bold-green-text\">{{latestBrowseMentalCourse.title}}</p>\n          <p >Coach: {{latestBrowseMentalCourse.excerpt.coach}}</p>\n          <p >Levels: {{latestBrowseMentalCourse.excerpt.levels}}</p>\n          <p >Duration: {{latestBrowseMentalCourse.excerpt.duration}}</p>\n\n          <ion-button class=\"gradient-button big-btn\"\n          (click)=\"goToPage({excerpt: {itemType: 'mental-course', itemId: latestBrowseMentalCourse.id}})\">\n            WATCH COURSE\n          </ion-button>\n        </div>\n        \n      </div>\n    </div>\n    <div class=\" sm-hidden\">\n      <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Mental courses\n  \n        <span routerLink=\"/mental-coures\">View all</span>\n      </p>\n      </div>\n      <div class=\"scroll-wrapper\" *ngIf=\"latestBrowseMentalCourses\">\n        <div class=\"horizontal-scroll\">\n          <img *ngFor=\"let tp of latestBrowseMentalCourses\" routerLink=\"/mental-courses/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n        </div>\n      </div>\n    </div>\n    \n\n  </div>\n\n  <div class=\"has-horizontal-padding\">\n    <p class=\"bold-green-text\">\n      Video Tutorials\n\n      <span routerLink=\"/tutorials\">View all</span>\n    </p>\n  </div>\n    <div class=\"tutorial-wrapper scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestTutorialCategories\" routerLink=\"/tutorials/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  \n  <div class=\"has-horizontal-padding\">\n    <p class=\"bold-green-text\">\n      Latest Articles\n\n      <span routerLink=\"/articles\">View all</span>\n    </p>\n  </div>\n    <div class=\"scroll-wrapper scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestArticles\" routerLink=\"/articles/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  <div class=\"has-horizontal-padding\">\n    <div class=\"bottom-logo-wrapper\">\n      <p class=\"bold-green-text\">\n        Sponsored by\n      </p>\n      <img src=\"/assets/Yonex-logo.png\" />\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCategoryCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">{{currentCat}}</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-wrapper \" [ngClass]=\"{hidden: isLoading}\">\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Training Programs\n    </p>\n    \n    <div class=\"scroll-wrapper \" *ngIf=\"latestTraining\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestTraining\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Tactical Lessons\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestTactical\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestTactical\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    \n    <div class=\"has-padding\">\n    <div class=\"list-of-all\">\n      <p class=\"bold-green-text\" >\n        All {{currentCat}} content\n      </p>\n      <ion-button *ngFor=\"let category of categoryNames\" (click)=\"toggleCategory(category)\"\n          [ngClass]=\"{'gradient-button': planCategories[category], 'inactive-button': !planCategories[category]}\" >\n        {{category}}\n      </ion-button>\n    </div>\n\n    <div class=\"result-wrapper\" *ngIf=\"records\">\n      <div *ngFor=\"let tp of records\" class=\"record-info-wrapper\" routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\">\n        <p class=\"bold-blue-text\" >\n          {{tp.parent.clean_title}} | {{tp.excerpt.category}}\n        </p>\n        <p class=\"bold-green-text\">\n          {{tp.clean_title}}\n\n          <i class=\"material-icons\" routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\" color=\"success\">chevron_right</i>\n        </p>\n        <p *ngIf=\"tp.excerpt\">Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n        <hr>\n      </div>\n\n      <div *ngIf=\"displayCount < allFiltered.length\" class=\"footer-wrapper\">\n        <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n          LOAD MORE\n        </ion-button>\n      </div>\n    </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites-tab/favorites-tab.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites-tab/favorites-tab.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFavoritesTabFavoritesTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\" has-padding\" [ngClass]=\"{hidden: isLoading}\">\n  <div class=\"pages-wrapper\">\n    <p class=\"bold-green-text\">Your favorite content</p>\n    <div *ngFor=\"let fav of favoritePages\" [ngClass]=\"{hidden: !favoritesService.favoritedPages[fav.entity_id]}\">\n        <div *ngIf=\"fav.additionalInfo\" class=\"record-info-wrapper\" routerLink=\"/{{fav.additionalInfo.pageType}}/{{fav.entity_id}}\">\n          <p class=\"bold-blue-text\" >\n            {{this.pageNames[fav.additionalInfo.pageType]}} | {{fav.additionalInfo.category}}\n          </p>\n          <p class=\"bold-green-text\">\n            {{fav.additionalInfo.title}}\n\n            <i class=\"material-icons\" routerLink=\"/{{fav.additionalInfo.pageType}}/{{fav.entity_id}}\" color=\"success\">chevron_right</i>\n          </p>\n          <p>Coach: {{fav.additionalInfo.coach}} | Duration: {{fav.additionalInfo.duration}}</p>\n          <hr>\n        </div>        \n    </div>\n  </div>\n\n  <div class=\"videos-wrapper\">\n    <p class=\"bold-green-text\">Your favorite videos</p>\n    <div *ngFor=\"let fav of favoriteVideos\" [ngClass]=\"{hidden: !favoritesService.favoritedVideos[fav.entity_id]}\">\n      <video-wrapper [videoId]=\"fav.entity_id\"></video-wrapper>\n    </div>\n  </div>\n  \n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy-content/kids-academy-content.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy-content/kids-academy-content.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsKidsAcademyContentKidsAcademyContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\" >\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of sections\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper  has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest from Kids Academy\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestKidsAcademies\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy/kids-academy.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy/kids-academy.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsKidsAcademyKidsAcademyComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">Kids Academy</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper \">\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Level 1 - Themes\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestLevel1\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestLevel1\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Level 2 - Themes\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestLevel2\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestLevel2\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Level 3 - Themes\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestLevel3\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestLevel3\" routerLink=\"/kids-academy/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    <div class=\"has-padding\">\n    \n    <p class=\"bold-green-text no-bottom-space\">\n      All from Kids Academy\n    </p>\n    <div class=\"list-of-all\">\n      <ion-button *ngFor=\"let category of pageCategories\" (click)=\"toggleCategory(category)\"\n          [ngClass]=\"{'gradient-button': planCategories[category], 'inactive-button': !planCategories[category]}\" >\n        {{category}}\n      </ion-button>\n    </div>\n\n    <div *ngFor=\"let tp of filteredKidsAcademy\" class=\"record-info-wrapper\" routerLink=\"/kids-academy/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Kids Academy | {{tp.excerpt.category}}\n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" routerLink=\"/kids-academy/{{tp.id}}\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Videos in theme: {{tp.excerpt.videoAmount}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < allFiltered.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"login-slides\" #slides>\n    <ion-slide *ngFor=\"let img of loginImgs; let ind = index;\">\n      <img  [src]=\"img.source_url\" />\n      <a class=\"full-link\" [href]=\"img.alt_text | safe\" *ngIf=\"img.alt_text\"></a>\n      <div *ngIf=\"ind == 0\">\n\n        <div class=\"logo-wrapper\">\n          <img src=\"/assets/logo-main.png\" />\n        </div>\n\n        <form class=\"form-wrapper\" [formGroup]=\"loginForm\" *ngIf=\"loginForm && loginStep == 1\" (ngSubmit)=\"login()\">\n\n          <ion-button type=\"submit\" class=\"gradient-button big-btn single-button\">\n            LOGIN\n          </ion-button>\n        </form>\n\n        <form class=\"form-wrapper\" [formGroup]=\"loginForm\" *ngIf=\"loginStep == 2\" (ngSubmit)=\"login()\">\n          <ion-input type=\"text\" placeholder=\"Username\" formControlName=\"username\" \n                    (ionFocus)=\"removePlaceholder($event)\" (ionBlur)=\"putPlaceholder($event)\" ></ion-input>\n          <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"\n                    (ionFocus)=\"removePlaceholder($event)\" (ionBlur)=\"putPlaceholder($event)\"></ion-input>    \n      \n          <ion-button type=\"submit\" class=\"gradient-button big-btn\">\n            <span *ngIf=\"!loading\">\n              LOGIN\n            </span>\n            <ion-spinner *ngIf=\"loading\" ></ion-spinner>\n          </ion-button>\n          <div>\n            <p (click)=\"loginStep = 3\">\n              Forgot Password ?\n            </p>\n          </div>    \n        </form>\n\n        <form class=\"form-wrapper\" [formGroup]=\"forgotForm\" *ngIf=\"loginStep == 3\" \n              (ngSubmit)=\"sendResetPassword()\">\n          <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" \n                    (ionFocus)=\"removePlaceholder($event)\" (ionBlur)=\"putPlaceholder($event)\" ></ion-input>    \n      \n          <ion-button type=\"submit\" class=\"gradient-button big-btn\">\n            <span *ngIf=\"!loading\">\n              RESET PASSWORD\n            </span>\n            <ion-spinner *ngIf=\"loading\" ></ion-spinner>\n          </ion-button>   \n        </form>\n\n        <i *ngIf=\"loginStep > 2\" class=\"material-icons\" \n            (click)=\"loginStep = 1\">chevron_left</i>\n      </div>      \n    </ion-slide>\n  </ion-slides>\n\n  \n\n  \n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-content/mental-content.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-content/mental-content.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMentalContentMentalContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\">\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of asyncSections | async\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n    \n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest mental courses\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestMentalCourses\">\n\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestMentalCourses\" routerLink=\"/mental-courses/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    \n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-courses/mental-courses.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-courses/mental-courses.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsMentalCoursesMentalCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">Mental Courses</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"categories-wrapper\" *ngIf=\"pageMeta\">\n    <img [src]=\"pageMeta.featured_image_src\" routerLink=\"/mental-courses/{{pageMeta.excerpt.pageId}}\"/>\n    <div class=\"info-wrapper\">\n      <p class=\"bold-green-text\">Mental Categories</p>\n      <p >Coach: {{pageMeta.excerpt.coach}}</p>\n      <p >Levels: {{pageMeta.excerpt.levels}}</p>\n      <p >Duration: {{pageMeta.excerpt.duration}}</p>\n\n      <ion-button class=\"gradient-button big-btn\" routerLink=\"/mental-courses/{{pageMeta.excerpt.pageId}}\">\n        WATCH\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"main-wrapper \">\n    <p>&nbsp;</p>\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest mental courses\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestMentalCourses\">\n\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestMentalCourses\" routerLink=\"/mental-courses/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    <div class=\"has-padding\">\n\n    <p class=\"bold-green-text no-bottom-space\">\n      All mental courses\n    </p>\n    <div *ngFor=\"let tp of filteredMentalCourses\" class=\"record-info-wrapper\" routerLink=\"/mental-courses/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Mental Course \n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" routerLink=\"/mental-courses/{{tp.id}}\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < mentalCourses.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-content/physical-content.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-content/physical-content.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhysicalContentPhysicalContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\">\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of asyncSections | async\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Physical Programs\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPhysicalPrograms\" routerLink=\"/physical-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-programs/physical-programs.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-programs/physical-programs.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPhysicalProgramsPhysicalProgramsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">Physical Programs</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper \">\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Physical programs\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestPhysical\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPhysical\" routerLink=\"/physical-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n    <p class=\"bold-green-text no-bottom-space\">\n      All Physical Programs\n    </p>\n    <div *ngFor=\"let tp of filteredPhysicalPrograms\" class=\"record-info-wrapper\" routerLink=\"/physical-programs/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Physical program\n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" routerLink=\"/physical-programs/{{tp.id}}\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < physicalPrograms.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans-tab/plans-tab.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans-tab/plans-tab.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlansTabPlansTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"select-wrapper\" [ngClass]=\"{hidden:createMode || editMode || isLoading}\">\n  <ion-button class=\"round-btn\" color=\"primary\" slot=\"end\" (click)=\"setCreateMode(true)\">\n    <i class=\"material-icons\">add</i>\n  </ion-button>\n\n  <ion-select shape=\"round\" [(ngModel)]=\"selectedPlan\" (ionChange)=\"selectPlan()\">\n    <ion-select-option *ngFor=\"let pl of favoriteService.playlists\" [value]=\"pl.id\">\n      {{pl.name}}\n    </ion-select-option>\n  </ion-select>\n\n  <ion-button fill=\"clear\" (click)=\"setEditMode(true)\" *ngIf=\"selectedPlan\">Edit</ion-button>\n  <ion-button fill=\"clear\" (click)=\"removePlan()\" *ngIf=\"selectedPlan\">Delete</ion-button>\n</div>\n\n<div class=\" has-horizontal-padding\" [ngClass]=\"{hidden:isLoading}\">\n  <br>\n\n  <form class=\"form-wrapper\" [formGroup]=\"planForm\" *ngIf=\"createMode\" (ngSubmit)=\"createPlan()\">\n    <ion-input type=\"text\" placeholder=\"Plan name\" formControlName=\"name\"></ion-input> \n    \n    <ion-button type=\"submit\" class=\"gradient-button full-width\">\n      <span *ngIf=\"!isLoading\">\n        Create Plan\n      </span>\n      <ion-spinner *ngIf=\"isLoading\" ></ion-spinner>\n    </ion-button>\n\n    <ion-button class=\"full-width\" color=\"danger\" (click)=\"createMode = false\">\n      <span >\n        Cancel\n      </span>\n    </ion-button>\n  </form>\n\n  <form class=\"form-wrapper\" [formGroup]=\"planForm\" *ngIf=\"editMode\" (ngSubmit)=\"editPlan()\">\n    <ion-input type=\"text\" placeholder=\"Plan name\" formControlName=\"name\"></ion-input> \n    \n    <ion-button type=\"submit\" class=\"gradient-button full-width\">\n      <span *ngIf=\"!isLoading\">\n        Update Plan\n      </span>\n      <ion-spinner *ngIf=\"isLoading\" ></ion-spinner>\n    </ion-button>\n  </form>\n\n  <div *ngFor=\"let video of currentVideos; let ind = index\">\n    <video-wrapper [hideLikes]=\"true\" [videoId]=\"video.video_id\"></video-wrapper>\n    <video-notes [videoData]=\"video\" (planChanged)=\"selectPlan()\" [planData]=\"{planId: selectedPlan}\"\n        (moveUp)=\"moveUp(ind)\" (moveDown)=\"moveDown(ind)\"></video-notes>    \n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans/plans.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans/plans.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPlansPlansComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">{{selectedTab == 'favorites' ? 'Favorites' : 'Training Plans'}}</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content #mainContent>\n  <!-- <div class=\"top-wrapper\">\n    <ion-button fill=\"clear\" (click)=\"openTab('favorites')\" [ngClass]=\"{active: selectedTab == 'favorites'}\">Favorites</ion-button>\n    <ion-button fill=\"clear\" (click)=\"openTab('plans')\" [ngClass]=\"{active: selectedTab != 'favorites'}\">Plans</ion-button>\n  </div> -->\n\n  <div class='main-wrapper'>\n    <div  *ngIf=\"selectedTab == 'favorites'\">\n      <favorites-tab></favorites-tab>\n    </div>\n\n    <div *ngIf=\"selectedTab != 'favorites'\">\n      <plans-tab></plans-tab>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcast-content/podcast-content.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcast-content/podcast-content.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPodcastContentPodcastContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\">\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of asyncSections | async\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n      <div *ngIf=\"section.excerpt && section.excerpt.audioUrl\">\n        <video controls=\"\" name=\"media\" playsinline>\n          <source [src]=\"section.excerpt.audioUrl | safe\" type=\"audio/mpeg\">\n        </video>\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Podcasts\n      </p>\n    </div>\n\n    <div class=\"scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPodcasts\" routerLink=\"/podcasts/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcasts/podcasts.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcasts/podcasts.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPodcastsPodcastsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">Podcasts</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper \" >\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Podcasts\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestPodcasts\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestPodcasts\" routerLink=\"/podcasts/{{tp.id}}\" \n              [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  <div class=\"has-padding\">\n    <p class=\"bold-green-text no-bottom-space\">\n      All Podcasts\n    </p>\n    <div *ngFor=\"let tp of filteredPodcasts\" class=\"record-info-wrapper\" routerLink=\"/podcasts/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Podcast \n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" routerLink=\"/podcasts/{{tp.id}}\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Published: {{tp.excerpt.published}} | Duration: {{tp.excerpt.duration}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < podcasts.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">Search</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main-wrapper has-padding\">\n    <div class=\"toggle-wrapper\" >\n      <ion-toggle slot=\"end\" color=\"success\" [(ngModel)]=\"hidenSearch\"></ion-toggle>\n      <ion-label slot=\"end\" class=\"bold-green-text no-bottom-space\">Hide filters</ion-label>      \n    </div>\n    \n\n    <div [ngClass]=\"{hidden: hidenSearch}\">\n      <div class=\"list-of-all\">\n        <p class=\"bold-green-text no-bottom-space\">Level</p>\n        <ion-button *ngFor=\"let level of levels\" (click)=\"toggleLevel(level)\"\n            [ngClass]=\"{'gradient-button': selectedLevels[level], 'inactive-button': !selectedLevels[level]}\" >\n          {{level}}\n        </ion-button>\n      </div>\n      \n      <div class=\"list-of-all\">\n        <p class=\"bold-green-text no-bottom-space\">Category</p>\n        <ion-button *ngFor=\"let category of categories\" (click)=\"toggleCategory(category.name)\"\n            [ngClass]=\"{'gradient-button': selectedCategories[category.name], 'inactive-button': !selectedCategories[category.name]}\" >\n          {{category.name}}\n        </ion-button>\n      </div>\n  \n      <div class=\"list-of-all tags-wrapper\">\n        <p class=\"bold-green-text no-bottom-space\">Themes & Tags</p>\n        <ion-button *ngFor=\"let tag of tags\" (click)=\"toggleTag(tag.id)\"\n            [ngClass]=\"{'gradient-button': selectedTags[tag.id], 'inactive-button': !selectedTags[tag.id]}\" >\n          {{tag.name}}\n        </ion-button>\n      </div>\n  \n      <div class=\"search-wrapper\">\n        <ion-button class=\"gradient-button big-btn\" (click)=\"search()\">\n          <ion-spinner *ngIf=\"loading\"></ion-spinner>\n          <span *ngIf=\"!loading\">SEARCH</span>\n        </ion-button>\n      </div>\n    </div>    \n\n    <div class=\"result-wrapper\" *ngIf=\"filteredResult\">\n      <p *ngIf=\"filteredResult.length == 0\" class=\"bold-green-text no-bottom-space text-center\">\n        Nothing match your filter settings\n      </p>\n\n      <p *ngIf=\"filteredResult.length != 0\" class=\"bold-green-text no-bottom-space\">\n        Search Results\n      </p>\n\n      <div *ngFor=\"let tp of filteredResult\" class=\"record-info-wrapper\" \n            routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\">\n        <p class=\"bold-blue-text\" >\n          {{tp.parent.clean_title}}  {{tp.excerpt.category ? '| ' + tp.excerpt.category : ''}}\n        </p>\n        <p class=\"bold-green-text no-bottom-space\">\n          {{tp.clean_title}}\n\n          <i class=\"material-icons\" routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\" color=\"success\">chevron_right</i>\n        </p>\n        <p>Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n        <hr>\n      </div>\n\n      <div *ngIf=\"displayCount < allRecords.length\" class=\"open-filters-wrapper\">\n        <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n          LOAD MORE\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n    <span class=\"toolbar-label\">Account</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"has-background\">\n  <div class=\"main-wrapper has-padding\">\n    <div class=\"notification-wrapper\">\n      <ion-toggle [(ngModel)]=\"notificationsEnabled\" (ionChange)=\"updateSettings()\" color=\"success\"></ion-toggle>\n      <p class=\"bold-green-text\">Notifications</p>\n      <p>Get notifications when new content is published</p>\n    </div>\n\n    <div class=\"notification-wrapper\" *ngIf=\"scanAuthAvailable\">\n      <ion-toggle [(ngModel)]=\"scanAuthEnabled\" (ionChange)=\"updateAuthSettings()\" color=\"success\"></ion-toggle>\n      <p class=\"bold-green-text\">Auto login</p>\n      <p>Login with scan authentication option instead of username/password</p>\n    </div>\n\n    <div class=\"user-info-wrapper\">\n      <p class=\"bold-green-text\">Account details</p>\n      <div class=\"left-side\">\n        <p class=\"bold-green-text\">First name:</p>\n        <p class=\"bold-green-text\">Last name:</p>\n        <p class=\"bold-green-text\">Email:</p>\n        <!-- <p class=\"bold-green-text\">Subscription:</p> -->\n      </div>\n\n      <div class=\"right-side\">\n        <p >{{userInfo.first_name}}</p>\n        <p >{{userInfo.last_name}}</p>\n        <p >{{userInfo.email}}</p>\n        <!-- <p *ngIf=\"sub\">\n          {{sub}} subscription\n        </p>-->\n      </div>\n    </div>\n\n    <div class=\"bottom-wrapper\">\n      <p>&nbsp;</p>\n<!-- \n      <a href=\"https://plus.badmintonfamly.com/account/\" \n          class=\"gradient-button\">Go to website</a> -->\n    </div>\n\n    <div class=\"logout-wrapper\">\n      <ion-button color=\"danger\" fill=\"clear\" (click)=\"logout()\">LOG OUT</ion-button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lesson-content/tactical-lesson-content.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lesson-content/tactical-lesson-content.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTacticalLessonContentTacticalLessonContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\" >\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of asyncSections | async\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper  has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Tactical Lessons\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of asynLatestTacticalLessons | async\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lessons/tactical-lessons.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lessons/tactical-lessons.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTacticalLessonsTacticalLessonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">Tactical Lessons</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper \">\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Beginner lessons\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestBeginner\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestBeginner\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Intermediate lessons\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestIntermediate\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestIntermediate\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Advanced lessons\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestAdvanced\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestAdvanced\" routerLink=\"/tactical-lessons/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    <div class=\"has-padding\">\n    \n    <p class=\"bold-green-text no-bottom-space\">\n      All Tactical lessons\n    </p>\n    <div class=\"list-of-all\">\n      <ion-button *ngFor=\"let category of categoryNames\" (click)=\"toggleCategory(category)\"\n          [ngClass]=\"{'gradient-button': planCategories[category], 'inactive-button': !planCategories[category]}\" >\n        {{category}}\n      </ion-button>\n    </div>\n\n    <div class=\"list-of-all\">\n      <ion-button *ngFor=\"let category of pageCategories; \" (click)=\"togglePageCategory(category.name)\"\n          [ngClass]=\"{'gradient-button': isCatSelected(category.name), 'inactive-button': !isCatSelected(category.name)}\" >\n        {{category.name}}\n      </ion-button>\n    </div>\n\n    <div *ngFor=\"let tp of filteredTacticalLessons\" class=\"record-info-wrapper\" routerLink=\"/tactical-lessons/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Tactical Lesson | {{tp.excerpt.category}}\n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" routerLink=\"/tactical-lessons/{{tp.id}}\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < allFiltered.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-plans-popover/training-plans-popover.component.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-plans-popover/training-plans-popover.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTrainingPlansPopoverTrainingPlansPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item *ngFor=\"let pl of favoriteService.playlists\" (click)=\"selectPlan(pl.id)\">\n  <i  class=\"material-icons\" color=\"success\" *ngIf=\"favoriteService.playlistsById[pl.id] && favoriteService.playlistsById[pl.id].videoIds.includes(videoId)\">check</i>\n  {{pl.name}}\n</ion-item>\n\n<ion-item>\n  <form class=\"form-wrapper\" [formGroup]=\"planForm\" (ngSubmit)=\"createPlan()\">    \n    <ion-button type=\"submit\" class=\"gradient-button full-width\">\n      <span *ngIf=\"!loading\">\n        Create Plan\n      </span>\n      <ion-spinner *ngIf=\"loading\" ></ion-spinner>\n    </ion-button>\n  </form>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-program-content/training-program-content.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-program-content/training-program-content.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTrainingProgramContentTrainingProgramContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n \n<ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button >\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-background\" >\n  <div class=\"main-wrapper\" [ngClass]=\"{hidden: isLoading}\">\n    <div class=\"favorite-wrapper has-padding\" *ngIf=\"pageInfo\">\n      <p class=\"bold-green-text\">{{pageInfo.clean_title}}\n        <i *ngIf=\"!favoritesService.favoritedPages[pageId]\" (click)=\"addFavoritePage()\" class=\"material-icons\">favorite_border</i>\n        <i *ngIf=\"favoritesService.favoritedPages[pageId]\" (click)=\"removeFavoritePage()\" class=\"material-icons\">favorite</i>\n      </p>\n      <p *ngIf=\"pageInfo.excerpt\">\n        {{pageInfo.excerpt.category}}\n      </p>\n      \n      <div class=\"border-bottom\"></div>\n    </div>\n\n    <div *ngFor=\"let section of asyncSections | async\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n\n    <div class=\"has-horizontal-padding\">\n      <p class=\"bold-green-text\">\n        Latest Training Programs\n      </p>\n    </div>\n    <div class=\"scroll-wrapper\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of asyncLatestTrainingPrograms | async\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-programs/training-programs.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-programs/training-programs.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTrainingProgramsTrainingProgramsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n     \n    <span class=\"toolbar-label\">Training Programs</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{hidden: isLoading}\" >\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper \">\n    \n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Beginner programs\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestBeginner\">\n\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestBeginner\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n    \n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Intermediate programs\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestIntermediate\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestIntermediate\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n\n    <p class=\"bold-green-text has-horizontal-padding\">\n      Latest Advanced programs\n    </p>\n    <div class=\"scroll-wrapper\" *ngIf=\"latestAdvanced\">\n      <div class=\"horizontal-scroll\">\n        <img *ngFor=\"let tp of latestAdvanced\" routerLink=\"/training-programs/{{tp.id}}\" [src]=\"tp.featured_image_src\" />\n      </div>\n    </div>\n  <div class=\"has-padding\">\n\n    <br>\n    <p class=\"bold-green-text no-bottom-space\">\n      All Training Programs\n    </p>\n    <div class=\"list-of-all\">\n      <ion-button *ngFor=\"let category of categoryNames\" (click)=\"toggleCategory(category)\"\n          [ngClass]=\"{'gradient-button': planCategories[category], 'inactive-button': !planCategories[category]}\" >\n        {{category}}\n      </ion-button>\n    </div>\n    \n    <div class=\"list-of-all\">\n      <ion-button *ngFor=\"let category of pageCategories; \" (click)=\"togglePageCategory(category.name)\"\n          [ngClass]=\"{'gradient-button': isCatSelected(category.name), 'inactive-button': !isCatSelected(category.name)}\" >\n        {{category.name}}\n      </ion-button>\n    </div>\n\n    <div *ngFor=\"let tp of filteredTrainingPrograms\" class=\"record-info-wrapper\" routerLink=\"/training-programs/{{tp.id}}\">\n      <p class=\"bold-blue-text\" >\n        Training Program | {{tp.excerpt.category}}\n      </p>\n      <p class=\"bold-green-text\">\n        {{tp.title}}\n\n        <i class=\"material-icons\" color=\"success\">chevron_right</i>\n      </p>\n      <p>Coach: {{tp.excerpt.coach}} | Duration: {{tp.excerpt.duration}}</p>\n      <hr>\n    </div>\n\n    <div *ngIf=\"displayCount < allFiltered.length\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n        LOAD MORE\n      </ion-button>\n    </div>\n  </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials/tutorials.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials/tutorials.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTutorialsTutorialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n    <span class=\"toolbar-label\">Tutorials</span> \n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<div class=\"select-wrapper\" *ngIf=\"!isLoading\">\n  <ion-select shape=\"round\" [(ngModel)]=\"selectedCategory\" (ionChange)=\"changeCategory()\">\n    <ion-select-option *ngFor=\"let cat of mainCategories\" [value]=\"cat.id\">\n      {{cat.clean_title}}\n    </ion-select-option>\n  </ion-select>\n</div>\n\n\n<ion-content [ngClass]=\"{hidden: isLoading}\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class=\" has-padding\">\n    <div *ngFor=\"let section of sections\" class=\"{{section.excerpt.cssClass}}\">\n      <div class=\"wp-content-wrapper has-padding  \" [innerHTML]=\"section.content\"></div>\n      <div class=\"embed-wrapper has-padding\" *ngIf=\"section.excerpt && section.excerpt.videoId\">\n        <video-wrapper [videoId]=\"section.excerpt.videoId\"></video-wrapper>\n      </div>\n    </div>\n    <div *ngIf=\"showLoadMore\" class=\"footer-wrapper\">\n      <ion-button class=\"gradient-button big-btn mt-2\" (click)=\"loadMore()\">\n        <span *ngIf=\"!moreLoading\">\n          LOAD MORE\n        </span>\n        <ion-spinner *ngIf=\"moreLoading\" ></ion-spinner>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-notes/video-notes.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-notes/video-notes.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsVideoNotesVideoNotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"control-buttons\">\n  <ion-button class=\"inactive-button\" (click)=\"emitMoveUp()\">\n    <i  class=\"material-icons\">expand_less</i>\n  </ion-button>\n\n  <ion-button class=\"inactive-button\" (click)=\"emitMoveDown()\">\n    <i  class=\"material-icons\">expand_more</i>\n  </ion-button>\n\n  <ion-button class=\"inactive-button\" (click)=\"deleteVideoFromPlan()\" >\n    <i  class=\"material-icons\" color=\"danger\">close</i>\n  </ion-button>\n</div>\n\n<form [formGroup]=\"planForm\" (ngSubmit)=\"saveNote()\">\n  <p class=\"bold-green-text\">Notes to this video</p>\n  <textarea #text [(ngModel)]=\"videoData.note\" formControlName=\"videoNote\" placeholder=\"Enter note here\" (keyup)=\"textChanged($event)\" ></textarea>\n  <ion-button type=\"submit\" class=\"gradient-button\">\n    Save\n  </ion-button>\n\n  <hr>\n  <br>\n</form>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-wrapper/video-wrapper.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-wrapper/video-wrapper.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsVideoWrapperVideoWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<iframe [src]=\"'https://player.vimeo.com/video/' + videoId | safe\" \n  frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen height=\"{{getCorrecWidth()}}\" \n  ></iframe>\n<div class=\"buttom-section\" *ngIf=\"!hideLikes\">\n  <div class=\"section\" >\n    <i *ngIf=\"!favoritesService.favoritedVideos[videoId]\" (click)=\"addFavoriteVideo(videoId)\" class=\"material-icons\">favorite_border</i>\n    <i *ngIf=\"favoritesService.favoritedVideos[videoId]\" (click)=\"removeFavoriteVideo(videoId)\" class=\"material-icons\">favorite</i>\n    <i (click)=\"openPopover($event)\" class=\"material-icons\">playlist_add</i>\n    <i (click)=\"download('https://player.vimeo.com/video/' + videoId, videoId)\" class=\"material-icons\">download</i>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/whats-new/whats-new.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/whats-new/whats-new.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsWhatsNewWhatsNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  >\n  <ion-toolbar>\n\n    <span class=\"toolbar-label\">What's new</span>\n    <ion-buttons slot=\"end\">\n      <i class=\"material-icons\" routerLink=\"/whats-new\">schedule</i>\n\n      <i class=\"material-icons\" routerLink=\"/settings\">person</i>      \n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n        <i class=\"material-icons\" >menu</i>\n      </ion-menu-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"main-wrapper has-padding\" [ngClass]=\"{hidden: isLoading}\">\n    <!-- <div class=\"list-of-all\">\n      <app-filters [filters]=\"categoryNames\" [selectAll]=\"true\" (fn)=\"toggleCategory($event)\"></app-filters>\n    </div>\n    <div class=\"list-of-all\">\n      <app-filters [filters]=\"pageCategories\" [selectAll]=\"true\" (fn)=\"togglePageCategory($event)\"></app-filters>\n    </div> -->\n    <div class=\"result-wrapper\" *ngIf=\"records\">\n      <div *ngFor=\"let tp of records\" class=\"record-info-wrapper\" \n            routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\">\n        <p class=\"bold-blue-text\" >\n          {{tp.parent.clean_title}} <span *ngIf=\"tp.excerpt.category\">\n            | {{tp.excerpt.category}}\n          </span>\n        </p>\n        <p class=\"bold-green-text\">\n          {{tp.clean_title}}\n\n          <i class=\"material-icons\" routerLink=\"/{{pageService.pageUrlsBySlugs[tp.parent.slug]}}/{{tp.id}}\" color=\"success\">chevron_right</i>\n        </p>\n        <p *ngIf=\"tp.excerpt\">\n          <span *ngIf=\"tp.excerpt.coach\">\n            Coach: {{tp.excerpt.coach}}\n          </span>\n          <span *ngIf=\"tp.excerpt.published\">\n            Published: {{tp.excerpt.published}}\n          </span>\n          {{ tp.excerpt.duration? '| Duration' : 'Video in theme'}}: {{tp.excerpt.duration || tp.excerpt.videoAmount}}\n        </p>\n        <hr>\n      </div>\n\n      <div *ngIf=\"showLoadMore\" class=\"footer-wrapper\">\n        <ion-button class=\"gradient-button big-btn\" (click)=\"loadMore()\">\n          LOAD MORE\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedFiltersFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button *ngFor=\"let filter of filters\" (click)=\"toggle(filter)\"\n    [ngClass]=\"{'gradient-button': filter.selected, 'inactive-button': !filter.selected}\" >\n  {{filter.name}}\n</ion-button>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/article-content/article-content.component */
      "./src/app/components/article-content/article-content.component.ts");
      /* harmony import */


      var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/articles/articles.component */
      "./src/app/components/articles/articles.component.ts");
      /* harmony import */


      var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/browse/browse.component */
      "./src/app/components/browse/browse.component.ts");
      /* harmony import */


      var _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/category/category.component */
      "./src/app/components/category/category.component.ts");
      /* harmony import */


      var _components_kids_academy_content_kids_academy_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/kids-academy-content/kids-academy-content.component */
      "./src/app/components/kids-academy-content/kids-academy-content.component.ts");
      /* harmony import */


      var _components_kids_academy_kids_academy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/kids-academy/kids-academy.component */
      "./src/app/components/kids-academy/kids-academy.component.ts");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/login/login.component */
      "./src/app/components/login/login.component.ts");
      /* harmony import */


      var _components_mental_content_mental_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/mental-content/mental-content.component */
      "./src/app/components/mental-content/mental-content.component.ts");
      /* harmony import */


      var _components_mental_courses_mental_courses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/mental-courses/mental-courses.component */
      "./src/app/components/mental-courses/mental-courses.component.ts");
      /* harmony import */


      var _components_physical_content_physical_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/physical-content/physical-content.component */
      "./src/app/components/physical-content/physical-content.component.ts");
      /* harmony import */


      var _components_physical_programs_physical_programs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/physical-programs/physical-programs.component */
      "./src/app/components/physical-programs/physical-programs.component.ts");
      /* harmony import */


      var _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/plans/plans.component */
      "./src/app/components/plans/plans.component.ts");
      /* harmony import */


      var _components_podcast_content_podcast_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/podcast-content/podcast-content.component */
      "./src/app/components/podcast-content/podcast-content.component.ts");
      /* harmony import */


      var _components_podcasts_podcasts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/podcasts/podcasts.component */
      "./src/app/components/podcasts/podcasts.component.ts");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/search/search.component */
      "./src/app/components/search/search.component.ts");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/settings/settings.component */
      "./src/app/components/settings/settings.component.ts");
      /* harmony import */


      var _components_tactical_lesson_content_tactical_lesson_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/tactical-lesson-content/tactical-lesson-content.component */
      "./src/app/components/tactical-lesson-content/tactical-lesson-content.component.ts");
      /* harmony import */


      var _components_tactical_lessons_tactical_lessons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/tactical-lessons/tactical-lessons.component */
      "./src/app/components/tactical-lessons/tactical-lessons.component.ts");
      /* harmony import */


      var _components_training_program_content_training_program_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/training-program-content/training-program-content.component */
      "./src/app/components/training-program-content/training-program-content.component.ts");
      /* harmony import */


      var _components_training_programs_training_programs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/training-programs/training-programs.component */
      "./src/app/components/training-programs/training-programs.component.ts");
      /* harmony import */


      var _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/tutorials/tutorials.component */
      "./src/app/components/tutorials/tutorials.component.ts");
      /* harmony import */


      var _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/whats-new/whats-new.component */
      "./src/app/components/whats-new/whats-new.component.ts");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
      }, {
        path: 'training-programs',
        component: _components_training_programs_training_programs_component__WEBPACK_IMPORTED_MODULE_22__["TrainingProgramsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'training-programs/:id',
        component: _components_training_program_content_training_program_content_component__WEBPACK_IMPORTED_MODULE_21__["TrainingProgramContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'tactical-lessons',
        component: _components_tactical_lessons_tactical_lessons_component__WEBPACK_IMPORTED_MODULE_20__["TacticalLessonsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'tactical-lessons/:id',
        component: _components_tactical_lesson_content_tactical_lesson_content_component__WEBPACK_IMPORTED_MODULE_19__["TacticalLessonContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'kids-academy',
        component: _components_kids_academy_kids_academy_component__WEBPACK_IMPORTED_MODULE_8__["KidsAcademyComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'kids-academy/:id',
        component: _components_kids_academy_content_kids_academy_content_component__WEBPACK_IMPORTED_MODULE_7__["KidsAcademyContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'physical-programs',
        component: _components_physical_programs_physical_programs_component__WEBPACK_IMPORTED_MODULE_13__["PhysicalProgramsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'physical-programs/:id',
        component: _components_physical_content_physical_content_component__WEBPACK_IMPORTED_MODULE_12__["PhysicalContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'mental-courses',
        component: _components_mental_courses_mental_courses_component__WEBPACK_IMPORTED_MODULE_11__["MentalCoursesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'mental-courses/:id',
        component: _components_mental_content_mental_content_component__WEBPACK_IMPORTED_MODULE_10__["MentalContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'podcasts',
        component: _components_podcasts_podcasts_component__WEBPACK_IMPORTED_MODULE_16__["PodcastsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'podcasts/:id',
        component: _components_podcast_content_podcast_content_component__WEBPACK_IMPORTED_MODULE_15__["PodcastContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'tutorials',
        component: _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_23__["TutorialsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'tutorials/:id',
        component: _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_23__["TutorialsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'articles',
        component: _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'articles/:id',
        component: _components_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_3__["ArticleContentComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'search',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'plans/:tab',
        component: _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_14__["PlansComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'browse',
        component: _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_5__["BrowseComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'category/:name',
        component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'settings',
        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: 'whats-new',
        component: _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_24__["WhatsNewComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]]
      }, {
        path: '**',
        redirectTo: 'browse'
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu ion-item i {\n  color: var(--ion-color-primary);\n  margin-right: 10px;\n}\n\nion-menu ion-item.selected {\n  color: var(--ion-color-success);\n}\n\nion-menu ion-item.selected i {\n  color: var(--ion-color-success) !important;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-success-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected i {\n  color: var(--ion-color-success);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu ion-item ion-label {\n  font-weight: bold;\n  font-size: 14px;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-menu ion-content {\n  --background: linear-gradient(0deg,#9AC5D0 0%,#ffffff 35%);\n}\n\nion-menu ion-content ion-item {\n  --background: transparent;\n}\n\nion-menu .material-icons {\n  font-size: 20px;\n}\n\n#bottom-navigation {\n  height: 70px;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  box-shadow: 5px 30px 35px 10px grey;\n  background: white;\n}\n\n#bottom-navigation .section {\n  width: 25%;\n  text-align: center;\n  color: var(--ion-color-primary);\n  display: inline-grid;\n}\n\n#bottom-navigation .section:nth-of-type(1) i {\n  font-size: 28px;\n  position: relative;\n  top: 4px;\n}\n\n#bottom-navigation .section p {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n#bottom-navigation .section i {\n  margin-top: 5px;\n}\n\n#main-content.bottom-margin {\n  margin-bottom: 70px;\n}\n\n.logout-button {\n  margin-top: 50px;\n  margin-bottom: 100px;\n}\n\nion-footer div:focus {\n  outline: none !important;\n}\n\nion-list-header.bold-green-text {\n  font-size: 20px;\n}\n\nion-menu .dark-icon {\n  color: var(--ion-color-dark) !important;\n}\n\nion-menu ion-item ion-button {\n  position: relative;\n  left: -10px;\n}\n\nion-menu ion-item p {\n  padding-left: 15px;\n}\n\nion-menu .logo-wrapper img {\n  width: 25%;\n}\n\nion-menu .top-item {\n  margin-top: 15px;\n}\n\n@media (min-width: 992px) {\n  #bottom-navigation {\n    position: absolute;\n    top: calc(100vh - 70px);\n    background-color: #fff !important;\n  }\n\n  ion-menu ion-content {\n    --background: linear-gradient(0deg,#9AC5D0 0%,#ffffff 35%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0U7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSwrQkFBQTtBQUpKOztBQU1JO0VBQ0UsMENBQUE7QUFKTjs7QUFTQTtFQUNFLHNEQUFBO0FBTkY7O0FBU0E7RUFDRSwrQkFBQTtBQU5GOztBQVNBO0VBQ0UsY0FBQTtBQU5GOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVNBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQVBGOztBQVdFO0VBQ0UsMERBQUE7QUFSSjs7QUFVSTtFQUNFLHlCQUFBO0FBUk47O0FBWUU7RUFDRSxlQUFBO0FBVko7O0FBZUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtBQVpGOztBQWNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtBQVpKOztBQWVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWJSOztBQWlCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQWZOOztBQWtCSTtFQUNFLGVBQUE7QUFoQk47O0FBcUJBO0VBQ0UsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQWxCRjs7QUFzQkU7RUFDRSx3QkFBQTtBQW5CSjs7QUF1QkE7RUFDRSxlQUFBO0FBcEJGOztBQXdCRTtFQUNFLHVDQUFBO0FBckJKOztBQXlCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXZCTjs7QUEwQkk7RUFDRSxrQkFBQTtBQXhCTjs7QUE4Qkk7RUFDRSxVQUFBO0FBNUJOOztBQWdDRTtFQUNFLGdCQUFBO0FBOUJKOztBQWtDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSx1QkFBQTtJQUNBLGlDQUFBO0VBL0JGOztFQW1DRTtJQUNFLDBEQUFBO0VBaENKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGkge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgJi5zZWxlY3RlZCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICBcbiAgICBpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudSBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1tZW51IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIzlBQzVEMCAwJSwjZmZmZmZmIDM1JSk7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cblxuI2JvdHRvbS1uYXZpZ2F0aW9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBib3gtc2hhZG93OiA1cHggMzBweCAzNXB4IDEwcHggZ3JleTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgLnNlY3Rpb24ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG5cbiAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbiNtYWluLWNvbnRlbnQuYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICBkaXY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIuYm9sZC1ncmVlbi10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tbWVudSB7XG4gIC5kYXJrLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IC0xMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5sb2dvLXdyYXBwZXIge1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgfVxuICB9XG5cbiAgLnRvcC1pdGVtIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAjYm90dG9tLW5hdmlnYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICBpb24tbWVudSB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywjOUFDNUQwIDAlLCNmZmZmZmYgMzUlKTtcbiAgICB9XG4gIH1cbiAgXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/FCM.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/storage.service */
      "./src/app/services/storage.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, userService, pageService, favoritesService, router, loadingCtrl, storageService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.userService = userService;
          this.pageService = pageService;
          this.favoritesService = favoritesService;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.storageService = storageService; // Nothing is selected at start

          this.selectedIndex = 1000;
          this.selectedCatIndex = 1000;
          this.selectedSecIndex = 1;
          this.appPages = [{
            title: 'Training Programs',
            url: '/training-programs',
            icon: 'star'
          }, {
            title: 'Tactical Lessons',
            url: '/tactical-lessons',
            icon: 'content_paste'
          }, {
            title: 'Kids Academy',
            url: '/kids-academy',
            icon: 'school'
          }, {
            title: 'Physical Programs',
            url: '/physical-programs',
            icon: 'fitness_center'
          }, {
            title: 'Mental Courses',
            url: '/mental-courses',
            icon: 'psychology'
          }, {
            title: 'Podcasts',
            url: '/podcasts',
            icon: 'headset'
          }, {
            title: 'Tutorials',
            url: '/tutorials',
            icon: 'ondemand_video'
          }, {
            title: 'Articles',
            url: '/articles',
            icon: 'local_library'
          }];
          this.categoryItems = [{
            name: 'Singles',
            icon: 'person'
          }, {
            name: 'Doubles',
            icon: 'people'
          }, {
            name: 'Mixed doubles',
            icon: 'people_alt'
          }];
          this.fcm = cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_8__["FCM"];
          this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "bodyClicked",
          value: function bodyClicked(ev) {
            if (ev.target.tagName == 'A') {
              ev.stopPropagation();
              ev.preventDefault();
              var url = ev.target.attributes.href.nodeValue;
              cordova.exec(function () {
                console.log('broser is opened');
              }, function (err) {
                console.error(err);
              }, 'OpenInBrowser', 'openUrl', [url]);
            }
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this2 = this;

                var temp;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.statusBar.styleDefault();
                        this.splashScreen.hide();
                        this.fcm.requestPushPermission().then(function (res) {
                          console.log('has permission 2', res);
                        });
                        this.fcm.hasPermission().then(function (res) {
                          console.log('has permission', res);

                          _this2.fcm.getToken().then(function (token) {
                            console.log('token ==>', token);
                          })["catch"](function (err) {
                            return console.log('error', JSON.stringify(err));
                          });

                          _this2.fcm.onTokenRefresh().subscribe(function (token) {
                            console.log('tokenRefresh ==>', token);
                          }, function (err) {
                            return console.log('errorRefres', err.message);
                          });
                        })["catch"](function (err) {
                          console.log(err);
                        });
                        _context.t0 = window.localStorage.getItem('notificationsEnabled');

                        if (_context.t0) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 8;
                        return this.storageService.get('notificationsEnabled');

                      case 8:
                        _context.t0 = _context.sent;

                      case 9:
                        temp = _context.t0;

                        if (temp) {
                          this.fcm.subscribeToTopic('all-active');
                        } else {
                          if (!window.localStorage.getItem('hadEnabledNotificatoins')) {
                            window.localStorage.setItem('hadEnabledNotificatoins', 'true');
                            this.storageService.set('notificationsEnabled', true);
                            window.localStorage.setItem('notificationsEnabled', 'true');
                            this.fcm.subscribeToTopic('all-active');
                          }
                        }

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.startLoading();
            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }

            this.userService.currentUser().then(function (user) {
              if (user) _this3.initLoggedEssentials();
            }, function (error) {
              _this3.stopLoading();

              _this3.router.navigate(['']);
            });
          }
        }, {
          key: "initLoggedEssentials",
          value: function initLoggedEssentials() {
            this.pageService.initMainPages();
            this.stopLoading(); // Making sure that user gets latest favorites and playlists

            this.favoritesService.getFavorites().subscribe(function (res) {});
            this.favoritesService.getPlaylists().subscribe(function (res) {});
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context2.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context2.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.loading) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.userService.logout(true);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"]
        }, {
          type: _services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]
        }];
      };

      AppComponent.propDecorators = {
        bodyClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['body: click', ['$event']]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/login/login.component */
      "./src/app/components/login/login.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_training_programs_training_programs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/training-programs/training-programs.component */
      "./src/app/components/training-programs/training-programs.component.ts");
      /* harmony import */


      var _components_training_program_content_training_program_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/training-program-content/training-program-content.component */
      "./src/app/components/training-program-content/training-program-content.component.ts");
      /* harmony import */


      var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pipes/safe.pipe */
      "./src/app/pipes/safe.pipe.ts");
      /* harmony import */


      var _components_tactical_lessons_tactical_lessons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/tactical-lessons/tactical-lessons.component */
      "./src/app/components/tactical-lessons/tactical-lessons.component.ts");
      /* harmony import */


      var _components_physical_programs_physical_programs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/physical-programs/physical-programs.component */
      "./src/app/components/physical-programs/physical-programs.component.ts");
      /* harmony import */


      var _components_mental_courses_mental_courses_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/mental-courses/mental-courses.component */
      "./src/app/components/mental-courses/mental-courses.component.ts");
      /* harmony import */


      var _components_podcasts_podcasts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/podcasts/podcasts.component */
      "./src/app/components/podcasts/podcasts.component.ts");
      /* harmony import */


      var _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/articles/articles.component */
      "./src/app/components/articles/articles.component.ts");
      /* harmony import */


      var _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/plans/plans.component */
      "./src/app/components/plans/plans.component.ts");
      /* harmony import */


      var _components_plans_tab_plans_tab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/plans-tab/plans-tab.component */
      "./src/app/components/plans-tab/plans-tab.component.ts");
      /* harmony import */


      var _components_favorites_tab_favorites_tab_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/favorites-tab/favorites-tab.component */
      "./src/app/components/favorites-tab/favorites-tab.component.ts");
      /* harmony import */


      var _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/video-wrapper/video-wrapper.component */
      "./src/app/components/video-wrapper/video-wrapper.component.ts");
      /* harmony import */


      var _components_training_plans_popover_training_plans_popover_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/training-plans-popover/training-plans-popover.component */
      "./src/app/components/training-plans-popover/training-plans-popover.component.ts");
      /* harmony import */


      var _components_tactical_lesson_content_tactical_lesson_content_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/tactical-lesson-content/tactical-lesson-content.component */
      "./src/app/components/tactical-lesson-content/tactical-lesson-content.component.ts");
      /* harmony import */


      var _components_physical_content_physical_content_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/physical-content/physical-content.component */
      "./src/app/components/physical-content/physical-content.component.ts");
      /* harmony import */


      var _components_mental_content_mental_content_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/mental-content/mental-content.component */
      "./src/app/components/mental-content/mental-content.component.ts");
      /* harmony import */


      var _components_video_notes_video_notes_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/video-notes/video-notes.component */
      "./src/app/components/video-notes/video-notes.component.ts");
      /* harmony import */


      var _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/tutorials/tutorials.component */
      "./src/app/components/tutorials/tutorials.component.ts");
      /* harmony import */


      var _components_search_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/search/search.component */
      "./src/app/components/search/search.component.ts");
      /* harmony import */


      var _components_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/article-content/article-content.component */
      "./src/app/components/article-content/article-content.component.ts");
      /* harmony import */


      var _components_podcast_content_podcast_content_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/podcast-content/podcast-content.component */
      "./src/app/components/podcast-content/podcast-content.component.ts");
      /* harmony import */


      var _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/browse/browse.component */
      "./src/app/components/browse/browse.component.ts");
      /* harmony import */


      var _components_category_category_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/category/category.component */
      "./src/app/components/category/category.component.ts");
      /* harmony import */


      var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/settings/settings.component */
      "./src/app/components/settings/settings.component.ts");
      /* harmony import */


      var _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/whats-new/whats-new.component */
      "./src/app/components/whats-new/whats-new.component.ts");
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      "./node_modules/@ionic-native/touch-id/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @ionic-native/android-fingerprint-auth/ngx */
      "./node_modules/@ionic-native/android-fingerprint-auth/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _components_kids_academy_kids_academy_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/kids-academy/kids-academy.component */
      "./src/app/components/kids-academy/kids-academy.component.ts");
      /* harmony import */


      var _components_kids_academy_content_kids_academy_content_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/kids-academy-content/kids-academy-content.component */
      "./src/app/components/kids-academy-content/kids-academy-content.component.ts");
      /* harmony import */


      var _shared_filters_filters_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./shared/filters/filters.component */
      "./src/app/shared/filters/filters.component.ts"); // import { File } from '@ionic-native/file';


      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_training_programs_training_programs_component__WEBPACK_IMPORTED_MODULE_14__["TrainingProgramsComponent"], _components_training_program_content_training_program_content_component__WEBPACK_IMPORTED_MODULE_15__["TrainingProgramContentComponent"], _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_16__["SafePipe"], _components_tactical_lessons_tactical_lessons_component__WEBPACK_IMPORTED_MODULE_17__["TacticalLessonsComponent"], _components_physical_programs_physical_programs_component__WEBPACK_IMPORTED_MODULE_18__["PhysicalProgramsComponent"], _components_mental_courses_mental_courses_component__WEBPACK_IMPORTED_MODULE_19__["MentalCoursesComponent"], _components_podcasts_podcasts_component__WEBPACK_IMPORTED_MODULE_20__["PodcastsComponent"], _components_articles_articles_component__WEBPACK_IMPORTED_MODULE_21__["ArticlesComponent"], _components_plans_plans_component__WEBPACK_IMPORTED_MODULE_22__["PlansComponent"], _components_plans_tab_plans_tab_component__WEBPACK_IMPORTED_MODULE_23__["PlansTabComponent"], _components_favorites_tab_favorites_tab_component__WEBPACK_IMPORTED_MODULE_24__["FavoritesTabComponent"], _components_video_wrapper_video_wrapper_component__WEBPACK_IMPORTED_MODULE_25__["VideoWrapperComponent"], _components_training_plans_popover_training_plans_popover_component__WEBPACK_IMPORTED_MODULE_26__["TrainingPlansPopoverComponent"], _components_tactical_lesson_content_tactical_lesson_content_component__WEBPACK_IMPORTED_MODULE_27__["TacticalLessonContentComponent"], _components_physical_content_physical_content_component__WEBPACK_IMPORTED_MODULE_28__["PhysicalContentComponent"], _components_mental_content_mental_content_component__WEBPACK_IMPORTED_MODULE_29__["MentalContentComponent"], _components_video_notes_video_notes_component__WEBPACK_IMPORTED_MODULE_30__["VideoNotesComponent"], _components_tutorials_tutorials_component__WEBPACK_IMPORTED_MODULE_31__["TutorialsComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_32__["SearchComponent"], _components_article_content_article_content_component__WEBPACK_IMPORTED_MODULE_33__["ArticleContentComponent"], _components_podcast_content_podcast_content_component__WEBPACK_IMPORTED_MODULE_34__["PodcastContentComponent"], _components_browse_browse_component__WEBPACK_IMPORTED_MODULE_35__["BrowseComponent"], _components_category_category_component__WEBPACK_IMPORTED_MODULE_36__["CategoryComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_37__["SettingsComponent"], _components_whats_new_whats_new_component__WEBPACK_IMPORTED_MODULE_38__["WhatsNewComponent"], _components_kids_academy_kids_academy_component__WEBPACK_IMPORTED_MODULE_41__["KidsAcademyComponent"], _components_kids_academy_content_kids_academy_content_component__WEBPACK_IMPORTED_MODULE_42__["KidsAcademyContentComponent"], _shared_filters_filters_component__WEBPACK_IMPORTED_MODULE_43__["FiltersComponent"]],
        entryComponents: [],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["IonicStorageModule"].forRoot()],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_39__["TouchID"], _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_40__["AndroidFingerprintAuth"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/components/article-content/article-content.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/article-content/article-content.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsArticleContentArticleContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-img-wrapper {\n  width: 100%;\n}\n.top-img-wrapper img {\n  width: 100%;\n}\np.bold-green-text span {\n  color: var(--ion-color-success);\n  float: right;\n}\n.wp-content-wrapper {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWNvbnRlbnQvYXJ0aWNsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0FBQ1I7QUFJSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQURSO0FBS0E7RUFDSSxvQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlLWNvbnRlbnQvYXJ0aWNsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1pbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbnAuYm9sZC1ncmVlbi10ZXh0IHtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLndwLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/article-content/article-content.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/article-content/article-content.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ArticleContentComponent */

    /***/
    function srcAppComponentsArticleContentArticleContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleContentComponent", function () {
        return ArticleContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/articles.service */
      "./src/app/services/articles.service.ts");

      var ArticleContentComponent = /*#__PURE__*/function () {
        function ArticleContentComponent(activeRoute, articleService) {
          _classCallCheck(this, ArticleContentComponent);

          this.activeRoute = activeRoute;
          this.articleService = articleService;
          this.articles = [];
        }

        _createClass(ArticleContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.activeRoute.params.subscribe(function (params) {
              _this4.articleService.getArticles(1, 6).subscribe(function (res) {
                _this4.articles = [];

                var _iterator = _createForOfIteratorHelper(res),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var art = _step.value;

                    if (art.id == parseInt(params.id)) {
                      continue;
                    }

                    _this4.articles.push(art);

                    if (_this4.articles.length == 5) {
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });

              var tempArticle = window.localStorage.getItem('article' + params.id);

              if (tempArticle) {
                _this4.article = JSON.parse(tempArticle);
              }

              _this4.articleService.getSingleArticle(params.id).subscribe(function (res) {
                var tempRes = '';
                var isOpen = false;

                for (var i = 0; i < res.rendered_content.length; i++) {
                  if (res.rendered_content[i] == '[') {
                    isOpen = true;
                    continue;
                  }

                  if (res.rendered_content[i] == ']') {
                    isOpen = false;
                    continue;
                  }

                  if (isOpen) {
                    continue;
                  }

                  tempRes += res.rendered_content[i];
                }

                res.rendered_content = tempRes;
                res.rendered_content = res.rendered_content.replace('Other articles', '');
                _this4.article = res;
                console.log(_this4.article);
                window.localStorage.setItem('article' + _this4.article.id, JSON.stringify(_this4.article));
              });
            });
          }
        }]);

        return ArticleContentComponent;
      }();

      ArticleContentComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]
        }];
      };

      ArticleContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./article-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-content/article-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./article-content.component.scss */
        "./src/app/components/article-content/article-content.component.scss"))["default"]]
      })], ArticleContentComponent);
      /***/
    },

    /***/
    "./src/app/components/articles/articles.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/articles/articles.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsArticlesArticlesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".article-wrapper {\n  background-color: #f4f4f4;\n  margin-bottom: 30px;\n}\n.article-wrapper img {\n  width: 100%;\n  height: auto;\n}\n.article-wrapper .has-padding {\n  padding-top: 0px;\n}\n.article-wrapper .has-padding ::ng-deep p {\n  margin: 5px 0;\n}\n.article-wrapper .has-padding .bold-green-text {\n  margin-top: 15px;\n}\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBR1E7RUFDSSxnQkFBQTtBQURaO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwyNDQsMjQ0KTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuaGFzLXBhZGRpbmcge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuXG4gICAgICAgIDo6bmctZGVlcCBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5ib2xkLWdyZWVuLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/articles/articles.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/articles/articles.component.ts ***!
      \***********************************************************/

    /*! exports provided: ArticlesComponent */

    /***/
    function srcAppComponentsArticlesArticlesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () {
        return ArticlesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/articles.service */
      "./src/app/services/articles.service.ts");

      var ArticlesComponent = /*#__PURE__*/function () {
        function ArticlesComponent(articleService, loadingCtrl) {
          _classCallCheck(this, ArticlesComponent);

          this.articleService = articleService;
          this.loadingCtrl = loadingCtrl;
          this.displayCount = 5;
          this.articles = [];
          this.filteredArticles = [];
          this.currentPage = 1;
        }

        _createClass(ArticlesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.loadFromCache();

            if (this.articleService.articleCategory) {
              this.initArticles();
              return;
            }

            this.articleService.getMainCategory().subscribe(function (article) {
              _this5.initArticles();
            });
          }
        }, {
          key: "initArticles",
          value: function initArticles() {
            var _this6 = this;

            this.articleService.getArticles(this.currentPage, 50).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var newData;
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        newData = JSON.stringify(res);
                        this.articles = res;
                        this.applyFilters();
                        window.localStorage.setItem('articles', newData);

                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.startLoading();

                    case 2:
                      try {
                        this.articles = window.localStorage.getItem('articles');
                        this.articles = this.articles ? JSON.parse(this.articles) : [];
                        this.filteredArticles = this.articles.slice(0, this.displayCount);
                      } catch (e) {// nothing here, since it must not be the case
                      }

                      this.stopLoading();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            this.filteredArticles = this.articles.slice(0, this.displayCount);
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.loadingCtrl.create();

                    case 2:
                      this.loading = _context6.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return ArticlesComponent;
      }();

      ArticlesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      ArticlesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-articles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./articles.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/articles/articles.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./articles.component.scss */
        "./src/app/components/articles/articles.component.scss"))["default"]]
      })], ArticlesComponent);
      /***/
    },

    /***/
    "./src/app/components/browse/browse.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/browse/browse.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsBrowseBrowseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slide {\n  position: relative;\n}\nion-slide img {\n  width: 100vw;\n  max-width: 100vw;\n  max-height: 100vh;\n  border: none !important;\n}\nion-slide .material-icons {\n  position: absolute;\n  bottom: 5vh;\n  left: 5vw;\n  color: var(--ion-color-primary);\n  font-size: 40px;\n}\nion-slide ion-button {\n  position: absolute;\n  bottom: 30px;\n}\n.slider-wrapper ion-spinner {\n  width: 100%;\n}\n.slider-wrapper ion-button {\n  width: 50vw;\n}\np.bold-green-text {\n  margin-top: 30px;\n}\np.bold-green-text span {\n  color: var(--ion-color-success);\n  float: right;\n}\n.podcast-wrapper {\n  background-image: url(\"/assets/podcast-background.jpeg\");\n  background-size: cover;\n  width: 100vw;\n  height: calc(100vw * 1.15);\n}\n.podcast-wrapper img {\n  max-height: 50vw;\n  margin: 0 auto;\n  display: block;\n  margin-top: 25vw;\n  width: calc(100vw - 40px);\n}\n.podcast-wrapper p.bold-green-text {\n  position: relative;\n  top: calc(25vw - 5px);\n  margin: 0px;\n}\n.podcast-wrapper ion-button {\n  display: block;\n  margin: 0 auto;\n  --background: var(--ion-color-light-tint);\n  --color: #054759;\n  width: 35vw;\n  margin-top: 10px;\n}\n.kids-academy-wrapper {\n  background-size: cover;\n  width: 100vw;\n}\n.kids-academy-wrapper img {\n  max-height: 50vw;\n  margin: 0 auto;\n  display: block;\n  width: calc(100vw - 40px);\n}\n.kids-academy-wrapper p.bold-white-text {\n  position: relative;\n  margin: 0px;\n}\n.kids-academy-wrapper ion-button {\n  display: block;\n  margin: 0 auto;\n  --background: var(--ion-color-light-tint);\n  --color: #054759;\n  width: 35vw;\n  margin-top: 10px;\n}\n.tutorial-wrapper img {\n  border: none !important;\n}\n.mental-bottom-wrapper, .physical-wrapper {\n  box-shadow: 5px 22px 15px -25px grey;\n  position: relative;\n  z-index: 2;\n}\n.physical-wrapper {\n  margin: 50px 0px;\n}\n.mental-bottom-wrapper {\n  margin-bottom: 35px;\n}\n.welcome-img {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 35px;\n}\n.excerpt-wrapper {\n  position: relative;\n}\n.excerpt-wrapper p {\n  margin: 2px 0;\n}\n.excerpt-wrapper ion-button {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  width: 40vw;\n  margin-right: 0px;\n}\n.bottom-logo-wrapper {\n  padding: 40px 0;\n}\n.bottom-logo-wrapper p {\n  text-align: center;\n  font-size: 12px;\n}\n.bottom-logo-wrapper img {\n  display: block;\n  width: 38vw;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9icm93c2UvYnJvd3NlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQURSO0FBTUk7RUFDSSxXQUFBO0FBSFI7QUFNSTtFQUNJLFdBQUE7QUFKUjtBQVFBO0VBQ0ksZ0JBQUE7QUFMSjtBQU9JO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0FBTFI7QUFTQTtFQUNJLHdEQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFOSjtBQVFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFOUjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFQUjtBQVVJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBUlI7QUFZQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBYUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7QUFaUjtBQWVJO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0FBZFI7QUFpQkk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFmUjtBQW9CSTtFQUNJLHVCQUFBO0FBakJSO0FBcUJBO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFsQko7QUFxQkE7RUFDSSxnQkFBQTtBQWxCSjtBQXFCQTtFQUNJLG1CQUFBO0FBbEJKO0FBcUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFsQko7QUFxQkE7RUFDSSxrQkFBQTtBQWxCSjtBQW1CSTtFQUNJLGFBQUE7QUFqQlI7QUFvQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBbEJSO0FBc0JBO0VBQ0ksZUFBQTtBQW5CSjtBQXFCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQW5CUjtBQXNCSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFwQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jyb3dzZS9icm93c2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1dmg7XG4gICAgICAgIGxlZnQ6IDV2dztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICB9XG59XG5cbi5zbGlkZXItd3JhcHBlciB7XG4gICAgaW9uLXNwaW5uZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgfVxufVxuXG5wLmJvbGQtZ3JlZW4tdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG4ucG9kY2FzdC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcG9kY2FzdC1iYWNrZ3JvdW5kLmpwZWcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdncgKiAxLjE1KTtcblxuICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMjV2dztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgICB9XG5cbiAgICBwLmJvbGQtZ3JlZW4tdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiBjYWxjKDI1dncgLSA1cHgpO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgLS1jb2xvcjogIzA1NDc1OTtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4ua2lkcy1hY2FkZW15LXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC8vIGhlaWdodDogY2FsYygxMDB2dyAqIDEuMTUpO1xuICAgIC8vIG1hcmdpbi10b3A6IC04LjV2aDtcblxuICAgIGltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwdnc7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMjV2dztcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgICB9XG5cbiAgICBwLmJvbGQtd2hpdGUtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gdG9wOiBjYWxjKDI1dncgLSA1cHgpO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgICAgICAgLS1jb2xvcjogIzA1NDc1OTtcbiAgICAgICAgd2lkdGg6IDM1dnc7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxufVxuXG4udHV0b3JpYWwtd3JhcHBlciB7XG4gICAgaW1nIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ubWVudGFsLWJvdHRvbS13cmFwcGVyLCAucGh5c2ljYWwtd3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDIycHggMTVweCAtMjVweCBncmV5O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucGh5c2ljYWwtd3JhcHBlciB7XG4gICAgbWFyZ2luOiA1MHB4IDBweDtcbn1cblxuLm1lbnRhbC1ib3R0b20td3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLndlbGNvbWUtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uZXhjZXJwdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICB9XG59XG5cbi5ib3R0b20tbG9nby13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzOHZ3O1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/browse/browse.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/browse/browse.component.ts ***!
      \*******************************************************/

    /*! exports provided: BrowseComponent */

    /***/
    function srcAppComponentsBrowseBrowseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowseComponent", function () {
        return BrowseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/articles.service */
      "./src/app/services/articles.service.ts");
      /* harmony import */


      var src_app_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/media.service */
      "./src/app/services/media.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/shared.service */
      "./src/app/services/shared.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var BrowseComponent = /*#__PURE__*/function () {
        function BrowseComponent(pageService, tagsService, articleService, mediaService, router, loadingCtrl, sharedService, storageService) {
          _classCallCheck(this, BrowseComponent);

          this.pageService = pageService;
          this.tagsService = tagsService;
          this.articleService = articleService;
          this.mediaService = mediaService;
          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.sharedService = sharedService;
          this.storageService = storageService;
          this.categories = ['Singles', 'Doubles', 'Mixed doubles'];
          this.latestContent = [];
          this.latestTrainingPrograms = [];
          this.latestTacticalLessons = [];
          this.categoriesByName = {};
          this.latestBrowseMentalCourse = [];
          this.latestBrowseMentalCourses = [];
          this.latestArticles = [];
          this.latestTutorialCategories = [];
          this.slideOpts = {};
        }

        _createClass(BrowseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this7 = this;

              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.startLoading();

                    case 2:
                      if (this.pageService.mainPages['tactical-lessons']) {
                        _context9.next = 6;
                        break;
                      }

                      Promise.all(this.pageService.initMainPages()).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.next = 2;
                                  return this.initPages();

                                case 2:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      });
                      _context9.next = 8;
                      break;

                    case 6:
                      _context9.next = 8;
                      return this.initPages();

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this8 = this;

            setTimeout(function () {
              _this8.initMainContent();

              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "initPages",
          value: function initPages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var promiseList, res;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.startLoading();

                    case 2:
                      promiseList = [// this.loadFromCache(),
                      this.initTacticalLessons(), this.initMentalCourse(), this.initTrainingPrograms(), this.initPodcast(), this.initPhysical(), this.initKidsAcademies(), this.initMainContent(), this.initArticles(), this.initTutorials(), this.initSliderContent()];
                      _context10.prev = 3;
                      _context10.next = 6;
                      return Promise.allSettled(promiseList);

                    case 6:
                      res = _context10.sent;
                      console.log('Async operation has ended', res);
                      this.stopLoading();
                      _context10.next = 14;
                      break;

                    case 11:
                      _context10.prev = 11;
                      _context10.t0 = _context10["catch"](3);
                      console.log(_context10.t0.message);

                    case 14:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[3, 11]]);
            }));
          }
        }, {
          key: "initMainContent",
          value: function initMainContent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var _this9 = this;

              var catIds;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.initCategories();

                    case 2:
                      catIds = [this.categoriesByName['Newest'].id];
                      return _context11.abrupt("return", new Promise(function (resolve, reject) {
                        _this9.pageService.getPagesByQuery({
                          categories: catIds.join(',')
                        }, 1, 5).subscribe(function (res) {
                          _this9.latestContent = [];

                          var _iterator2 = _createForOfIteratorHelper(res),
                              _step2;

                          try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                              var temp = _step2.value;
                              var tempRec = {
                                featured_image_src: temp.featured_image_src,
                                id: temp.id
                              };

                              if (temp.parent) {
                                tempRec.parent = {
                                  slug: _this9.pageService.mainPagesById[temp.parent].slug
                                };
                              }

                              _this9.latestContent.push(tempRec);
                            }
                          } catch (err) {
                            _iterator2.e(err);
                          } finally {
                            _iterator2.f();
                          }

                          window.localStorage.setItem('latestContent', JSON.stringify(_this9.latestContent));
                          resolve(true);
                        }, function (error) {
                          return reject();
                        });
                      }));

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "initCategories",
          value: function initCategories() {
            var _this10 = this;

            return new Promise(function (resolve, rejectt) {
              var temp = window.localStorage.getItem('categoiresByName');

              if (temp) {
                _this10.categoriesByName = JSON.parse(temp);
                resolve(true);
              } else {
                _this10.tagsService.getCategories().subscribe(function (res) {
                  var _iterator3 = _createForOfIteratorHelper(res),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var cat = _step3.value;
                      _this10.categoriesByName[cat.name] = cat;
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }

                  window.localStorage.setItem('categoiresByName', JSON.stringify(_this10.categoriesByName));
                  resolve(true);
                });
              }
            });
          }
        }, {
          key: "initTacticalLessons",
          value: function initTacticalLessons() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var res;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['tactical-lessons'].id, 1, 5);

                    case 3:
                      res = _context12.sent;
                      this.latestTacticalLessons = res;
                      window.localStorage.setItem('latestTacticalLessons', JSON.stringify(this.latestTacticalLessons));
                      this.storageService.set('latestTacticalLessons', JSON.stringify(this.latestTacticalLessons));
                      return _context12.abrupt("return", true);

                    case 10:
                      _context12.prev = 10;
                      _context12.t0 = _context12["catch"](0);
                      throw new Error(_context12.t0.message);

                    case 13:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 10]]);
            }));
          }
        }, {
          key: "initKidsAcademies",
          value: function initKidsAcademies() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var res;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['kids-academy'].id, 1, 5);

                    case 3:
                      res = _context13.sent;
                      this.latestKidsAcademy = res[0];
                      this.latestKidsAcademies = res;
                      window.localStorage.setItem('latestKidsAcademies', JSON.stringify(res));
                      this.storageService.set('latestKidsAcademies', JSON.stringify(res));
                      return _context13.abrupt("return", true);

                    case 11:
                      _context13.prev = 11;
                      _context13.t0 = _context13["catch"](0);
                      throw new Error(_context13.t0.message);

                    case 14:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 11]]);
            }));
          }
        }, {
          key: "initTrainingPrograms",
          value: function initTrainingPrograms() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var res;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['training-programs'].id, 1, 5);

                    case 3:
                      res = _context14.sent;
                      this.latestTrainingPrograms = res;
                      window.localStorage.setItem('latestTrainingPrograms', JSON.stringify(this.latestTrainingPrograms));
                      this.storageService.set('latestTrainingPrograms', JSON.stringify(this.latestTrainingPrograms));
                      return _context14.abrupt("return", true);

                    case 10:
                      _context14.prev = 10;
                      _context14.t0 = _context14["catch"](0);
                      throw new Error(_context14.t0.message);

                    case 13:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[0, 10]]);
            }));
          }
        }, {
          key: "initPodcast",
          value: function initPodcast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var _yield$this$sharedSer, res;

              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;
                      _context15.next = 3;
                      return this.sharedService.getPodcasts(this.pageService, 5, 1);

                    case 3:
                      _yield$this$sharedSer = _context15.sent;
                      res = _yield$this$sharedSer[2];
                      this.latestPodcast = res[0];
                      this.latestPodcasts = res;
                      window.localStorage.setItem('latestPodcast', JSON.stringify(this.latestPodcast));
                      return _context15.abrupt("return", true);

                    case 11:
                      _context15.prev = 11;
                      _context15.t0 = _context15["catch"](0);
                      throw new Error(_context15.t0.message);

                    case 14:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[0, 11]]);
            }));
          }
        }, {
          key: "initPhysical",
          value: function initPhysical() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var res, record;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.prev = 0;
                      _context16.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['physical'].id, 1, 5);

                    case 3:
                      res = _context16.sent;
                      record = res[0];

                      try {
                        record.excerpt = this.pageService.parsePureExcerpt(record.pure_excerpt);
                      } catch (e) {
                        record.excerpt = {};
                      }

                      this.latestPhysicalProgram = {
                        id: record.id,
                        featured_image_src: record.featured_image_src,
                        excerpt: record.excerpt,
                        title: record.clean_title
                      };
                      this.latestPhysicalPrograms = res;
                      window.localStorage.setItem('latestPhysicalProgram', JSON.stringify(this.latestPhysicalProgram));
                      window.localStorage.setItem('latestPhysical', JSON.stringify(this.latestPhysicalPrograms.slice(0, 5)));
                      this.storageService.set('latestPhysical', JSON.stringify(this.latestPhysicalPrograms.slice(0, 5)));
                      return _context16.abrupt("return", true);

                    case 14:
                      _context16.prev = 14;
                      _context16.t0 = _context16["catch"](0);
                      throw new Error(_context16.t0.message);

                    case 17:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[0, 14]]);
            }));
          }
        }, {
          key: "initMentalCourse",
          value: function initMentalCourse() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var res, tempRecords, _iterator4, _step4, record;

              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.prev = 0;
                      _context17.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['mental-courses'].id, 1, 5);

                    case 3:
                      res = _context17.sent;
                      tempRecords = [];
                      _iterator4 = _createForOfIteratorHelper(res);

                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          record = _step4.value;
                          tempRecords.push({
                            id: record.id,
                            featured_image_src: record.featured_image_src,
                            pure_excerpt: record.pure_excerpt,
                            title: record.clean_title
                          });
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }

                      ;

                      try {
                        tempRecords[0].excerpt = this.pageService.parsePureExcerpt(tempRecords[0].pure_excerpt);
                      } catch (e) {
                        tempRecords[0].excerpt = {};
                      }

                      this.latestBrowseMentalCourse = tempRecords[0];
                      this.latestBrowseMentalCourses = tempRecords;
                      window.localStorage.setItem('latestBrowseMentalCourse', JSON.stringify(this.latestBrowseMentalCourse));
                      window.localStorage.setItem('latestMentalCourses', JSON.stringify(this.latestBrowseMentalCourses.slice(0, 5)));
                      this.storageService.set('latestMentalCourses', JSON.stringify(this.latestBrowseMentalCourses.slice(0, 5)));
                      return _context17.abrupt("return", true);

                    case 17:
                      _context17.prev = 17;
                      _context17.t0 = _context17["catch"](0);
                      throw new Error(_context17.t0.message);

                    case 20:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[0, 17]]);
            }));
          }
        }, {
          key: "initTutorials",
          value: function initTutorials() {
            var _this11 = this;

            this.pageService.getPageByParent(this.pageService.mainPages['video-tutorials'].id, 1, 5, {
              order: 'asc',
              orderby: 'menu_order'
            }).subscribe(function (res) {
              var tempRecords = [];

              var _iterator5 = _createForOfIteratorHelper(res),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var record = _step5.value;
                  tempRecords.push({
                    id: record.id,
                    featured_image_src: record.featured_image_src
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              _this11.latestTutorialCategories = tempRecords;
              window.localStorage.setItem('latestTutorialCategories', JSON.stringify(_this11.latestTutorialCategories));

              _this11.storageService.set('latestTutorialCategories', JSON.stringify(_this11.latestTutorialCategories));
            });
          }
        }, {
          key: "initArticleRecords",
          value: function initArticleRecords() {
            var _this12 = this;

            this.articleService.getArticles(1, 5).subscribe(function (res) {
              _this12.latestArticles = res;
              window.localStorage.setItem('latestArticles', JSON.stringify(_this12.latestArticles));
            });
          }
        }, {
          key: "initArticles",
          value: function initArticles() {
            var _this13 = this;

            if (this.articleService.articleCategory) {
              this.initArticleRecords();
              return;
            }

            this.articleService.getMainCategory().subscribe(function (article) {
              _this13.initArticles();
            });
          }
        }, {
          key: "initSliderContent",
          value: function initSliderContent() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var res, tempItems, _iterator6, _step6, item, tempItem;

              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.prev = 0;
                      _context18.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['browse-main-slider'].id, 1, 5, {
                        order: 'asc',
                        orderby: 'menu_order'
                      });

                    case 3:
                      res = _context18.sent;
                      tempItems = []; // await this.startLoading();

                      _iterator6 = _createForOfIteratorHelper(res);

                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          item = _step6.value;
                          tempItem = {
                            featured_image_src: item.featured_image_src
                          };

                          try {
                            tempItem.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                          } catch (e) {}

                          tempItems.push(tempItem);
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }

                      if (!this.isSameData(tempItems, this.sliderItems)) {
                        this.sliderItems = null;
                        console.log('not the same'); // TODO: filter by screen size

                        this.sliderItems = tempItems;
                        window.localStorage.setItem('sliderItems', JSON.stringify(this.sliderItems));
                      }

                      return _context18.abrupt("return", true);

                    case 11:
                      _context18.prev = 11;
                      _context18.t0 = _context18["catch"](0);
                      throw new Error(_context18.t0.message);

                    case 14:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this, [[0, 11]]);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context19.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context19.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      if (this.loading) {
                        _context20.next = 2;
                        break;
                      }

                      return _context20.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "goToPageByParent",
          value: function goToPageByParent(item) {
            if (!item.parent) {
              return;
            }

            var excerpt = {
              itemId: item.id
            };
            console.log(item.parent.slug);

            switch (item.parent.slug) {
              case 'training-programs':
                excerpt.itemType = 'training-program';
                break;

              case 'tactical-lessons':
                excerpt.itemType = 'tactical-lesson';
                break;

              case 'physical':
                excerpt.itemType = 'physical-program';
                break;

              case 'mental-courses':
                excerpt.itemType = 'mental-course';
                break;

              case 'tv-podcasts':
                excerpt.itemType = 'podcast';
                break;

              case 'video-tutorials':
                excerpt.itemType = 'tutorial';
                break;

              case 'kids-academy':
                excerpt.itemType = 'kids-academy';
                break;
            }

            this.goToPage({
              excerpt: excerpt
            });
          }
        }, {
          key: "goToPage",
          value: function goToPage(item) {
            var url = '/';

            switch (item.excerpt.itemType) {
              case 'training-program':
                url += 'training-programs/';
                break;

              case 'tactical-lesson':
                url += 'tactical-lessons/';
                break;

              case 'podcast':
                url += 'podcasts/';
                break;

              case 'physical-program':
                url += 'physical-programs/';
                break;

              case 'mental-course':
                url += 'mental-courses/';
                break;

              case 'tutorial':
                url += 'tutorials/';
                break;

              case 'article':
                url += 'articles/';
                break;

              case 'kids-academy':
                url += 'kids-academy/';
                break;
            }

            url += item.excerpt.itemId;
            this.router.navigateByUrl(url);
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      temp = window.localStorage.getItem('latestTacticalLessons');

                      if (temp) {
                        this.latestTacticalLessons = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestTrainingPrograms');

                      if (temp) {
                        this.latestTrainingPrograms = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestContent');

                      if (temp) {
                        this.latestContent = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestPodcast');

                      if (temp) {
                        this.latestPodcast = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestKidsAcademies');

                      if (temp) {
                        this.latestKidsAcademies = JSON.parse(temp);
                        this.latestKidsAcademy = this.latestKidsAcademies[0];
                      }

                      temp = window.localStorage.getItem('latestPhysicalProgram');

                      if (temp) {
                        this.latestPhysicalProgram = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestBrowseMentalCourse');

                      if (temp) {
                        this.latestBrowseMentalCourse = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestArticles');

                      if (temp) {
                        this.latestArticles = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('latestTutorialCategories');

                      if (temp) {
                        this.latestTutorialCategories = JSON.parse(temp);
                      }

                      temp = window.localStorage.getItem('sliderItems');

                      if (temp) {
                        this.sliderItems = JSON.parse(temp);
                      }

                      if (this.sliderItems) {
                        this.stopLoading();
                      }

                    case 21:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "isSameData",
          value: function isSameData(a, b) {
            return JSON.stringify(a) == JSON.stringify(b);
          }
        }, {
          key: "isPhone",
          value: function isPhone() {
            return window.innerWidth < 700;
          }
        }]);

        return BrowseComponent;
      }();

      BrowseComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_7__["TagsService"]
        }, {
          type: src_app_services_articles_service__WEBPACK_IMPORTED_MODULE_4__["ArticlesService"]
        }, {
          type: src_app_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
        }];
      };

      BrowseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-browse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./browse.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/browse/browse.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./browse.component.scss */
        "./src/app/components/browse/browse.component.scss"))["default"]]
      })], BrowseComponent);
      /***/
    },

    /***/
    "./src/app/components/category/category.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/category/category.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCategoryCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXdyYXBwZXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGxlZnQ6IDI1JTtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/category/category.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/category/category.component.ts ***!
      \***********************************************************/

    /*! exports provided: CategoryComponent */

    /***/
    function srcAppComponentsCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
        return CategoryComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");

      var CategoryComponent = /*#__PURE__*/function () {
        function CategoryComponent(activatedRoute, tagsService, pageService, loadingCtrl) {
          _classCallCheck(this, CategoryComponent);

          this.activatedRoute = activatedRoute;
          this.tagsService = tagsService;
          this.pageService = pageService;
          this.loadingCtrl = loadingCtrl;
          this.categoriesByName = {};
          this.records = [];
          this.allRecords = [];
          this.allFiltered = [];
          this.displayCount = 5;
          this.currentPage = 1;
          this.latestTactical = [];
          this.latestTraining = [];
          this.categoryNames = ['Beginner', 'Intermediate', 'Advanced'];
          this.planCategories = [];
        }

        _createClass(CategoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.startLoading();
            this.activatedRoute.params.subscribe(function (res) {
              _this14.currentCat = res.name;
            });
            this.tagsService.getCategories().subscribe(function (res) {
              var _iterator7 = _createForOfIteratorHelper(res),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var cat = _step7.value;
                  _this14.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              _this14.loadFromCache();

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this14.categoriesByName));
            });
          }
        }, {
          key: "initCategory",
          value: function initCategory() {
            var _this15 = this;

            this.startLoading();

            if (!this.categoriesByName[this.currentCat]) {
              return;
            }

            var temp = window.localStorage.getItem('latestTacticalByCat' + this.categoriesByName[this.currentCat].id);

            if (temp) {
              this.latestTactical = JSON.parse(temp);
            }

            temp = window.localStorage.getItem('latestTrainingByCat' + this.categoriesByName[this.currentCat].id);

            if (temp) {
              this.latestTraining = JSON.parse(temp);
            }

            temp = window.localStorage.getItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id);

            if (temp) {
              this.allRecords = JSON.parse(temp);
              this.applyFilters();
            }

            this.pageService.getPagesByQuery({
              categories: this.categoriesByName[this.currentCat].id
            }, this.currentPage, 100).subscribe(function (res) {
              var tempRecords = [];
              _this15.allRecords = [];
              _this15.latestTactical = [];
              _this15.latestTraining = [];

              var _iterator8 = _createForOfIteratorHelper(res),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var record = _step8.value;
                  record.parent = {
                    id: _this15.pageService.mainPagesById[record.parent].id,
                    slug: _this15.pageService.mainPagesById[record.parent].slug,
                    clean_title: _this15.pageService.mainPagesById[record.parent].clean_title
                  };
                  var tempExcerpt = {};

                  try {
                    tempExcerpt = _this15.pageService.parsePureExcerpt(record.pure_excerpt);
                  } catch (e) {
                    console.log('Error with excerpt', record.id);
                  }

                  var _temp = {
                    parent: record.parent,
                    clean_title: record.clean_title,
                    id: record.id,
                    excerpt: tempExcerpt,
                    featured_image_src: record.featured_image_src
                  };

                  if (_temp.parent.slug == 'tactical-lessons') {
                    if (_this15.latestTactical.length < 5) {
                      _this15.latestTactical.push(_temp);
                    }
                  }

                  if (_temp.parent.slug == 'training-programs') {
                    if (_this15.latestTraining.length < 5) {
                      _this15.latestTraining.push(_temp);
                    }
                  }

                  tempRecords.push(_temp);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              _this15.allRecords = tempRecords;

              _this15.applyFilters();

              _this15.stopLoading();

              window.localStorage.setItem('latestTrainingByCat' + _this15.categoriesByName[_this15.currentCat].id, JSON.stringify(_this15.latestTraining));
              window.localStorage.setItem('latestTacticalByCat' + _this15.categoriesByName[_this15.currentCat].id, JSON.stringify(_this15.latestTactical));
              window.localStorage.setItem('latestRecordsByCat' + _this15.categoriesByName[_this15.currentCat].id, JSON.stringify(_this15.allRecords));
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            var temp = window.localStorage.getItem('categoriesByName');

            if (temp) {
              this.categoriesByName = JSON.parse(temp);
            }

            this.initCategory();
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.allRecords) {
              this.currentPage++;
              this.initCategory();
            }
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var _this16 = this;

            if (this.categoryNames.length == 0) {
              this.allFiltered = this.allRecords;
              this.records = this.allFiltered.slice(0, this.displayCount);
              return;
            }

            var allDeselected = true;

            for (var i in this.planCategories) {
              if (this.planCategories[i]) {
                allDeselected = false;
              }
            }

            if (allDeselected) {
              this.allFiltered = this.allRecords;
              this.records = this.allFiltered.slice(0, this.displayCount);
              return;
            }

            this.allFiltered = this.allRecords.filter(function (tp) {
              if (tp.excerpt.category) {
                return _this16.planCategories[tp.excerpt.category];
              }
            });
            this.records = this.allFiltered.slice(0, this.displayCount);
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
              return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context22.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context22.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
              return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      if (this.loading) {
                        _context23.next = 2;
                        break;
                      }

                      return _context23.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }]);

        return CategoryComponent;
      }();

      CategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/category/category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./category.component.scss */
        "./src/app/components/category/category.component.scss"))["default"]]
      })], CategoryComponent);
      /***/
    },

    /***/
    "./src/app/components/favorites-tab/favorites-tab.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/favorites-tab/favorites-tab.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFavoritesTabFavoritesTabComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".videos-wrapper {\n  margin-top: 35px;\n}\n.videos-wrapper p.bold-green-text {\n  margin-bottom: 25px;\n}\np.bold-green-text {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMtdGFiL2Zhdm9yaXRlcy10YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBR0E7RUFDSSxrQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMtdGFiL2Zhdm9yaXRlcy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW9zLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG5cbiAgICBwLmJvbGQtZ3JlZW4tdGV4dCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxufVxuXG5wLmJvbGQtZ3JlZW4tdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/favorites-tab/favorites-tab.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/favorites-tab/favorites-tab.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FavoritesTabComponent */

    /***/
    function srcAppComponentsFavoritesTabFavoritesTabComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesTabComponent", function () {
        return FavoritesTabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");

      var FavoritesTabComponent = /*#__PURE__*/function () {
        function FavoritesTabComponent(favoritesService, loadingCtrl) {
          _classCallCheck(this, FavoritesTabComponent);

          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.favoriteVideos = [];
          this.favoritePages = [];
          this.pageNames = {
            'training-programs': 'Training Program',
            'tactical-lessons': 'Tactical Lesson',
            'physical-programs': 'Phiscal Program',
            'mental-courses': 'Mental Courses',
            'podcasts': 'Podcast',
            'kids-academy': 'Kids Academy'
          };
        }

        _createClass(FavoritesTabComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            // this.loadFromCache();
            this.startLoading();
            this.favoritesService.getFavorites().subscribe(function (res) {
              _this17.favoriteVideos = [];
              _this17.favoritePages = [];

              var _iterator9 = _createForOfIteratorHelper(res),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var item = _step9.value;

                  if (item.additional_info) {
                    item.additionalInfo = JSON.parse(item.additional_info);
                  }

                  if (item.entity_type == 'video') {
                    _this17.favoriteVideos.push(item);
                  } else {
                    _this17.favoritePages.push(item);
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }

              setTimeout(function () {
                return _this17.stopLoading();
              }, 500);
            });
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
              return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context24.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context24.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      if (this.loading) {
                        _context25.next = 2;
                        break;
                      }

                      return _context25.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            var tempVideos = window.localStorage.getItem('favoriteVideos');

            if (tempVideos) {
              this.favoriteVideos = JSON.parse(tempVideos);
            }

            var tempPages = window.localStorage.getItem('favoritePages');

            if (tempVideos) {
              this.favoritePages = JSON.parse(tempPages);
            }
          }
        }]);

        return FavoritesTabComponent;
      }();

      FavoritesTabComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      FavoritesTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'favorites-tab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorites-tab.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites-tab/favorites-tab.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorites-tab.component.scss */
        "./src/app/components/favorites-tab/favorites-tab.component.scss"))["default"]]
      })], FavoritesTabComponent);
      /***/
    },

    /***/
    "./src/app/components/kids-academy-content/kids-academy-content.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/kids-academy-content/kids-academy-content.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsKidsAcademyContentKidsAcademyContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva2lkcy1hY2FkZW15LWNvbnRlbnQva2lkcy1hY2FkZW15LWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/kids-academy-content/kids-academy-content.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/kids-academy-content/kids-academy-content.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: KidsAcademyContentComponent */

    /***/
    function srcAppComponentsKidsAcademyContentKidsAcademyContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KidsAcademyContentComponent", function () {
        return KidsAcademyContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var KidsAcademyContentComponent = /*#__PURE__*/function () {
        function KidsAcademyContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, KidsAcademyContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.latestKidsAcademies = [];
        }

        _createClass(KidsAcademyContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.activeRouter.params.subscribe(function (res) {
              _this18.pageId = res.id;
              var kidsAcademyId = 'kidsAcademySections' + _this18.pageId;

              _this18.loadFromCache();

              _this18.pageService.getSinglePage(res.id).subscribe(function (res) {
                try {
                  _this18.pageExcerpt = _this18.pageService.parsePureExcerpt(res.pure_excerpt);
                } catch (e) {
                  _this18.pageExcerpt = {};
                }

                _this18.pageInfo = {
                  clean_title: res.clean_title,
                  pure_excerpt: res.pure_excerpt,
                  id: res.id
                };

                try {
                  _this18.pageInfo.excerpt = _this18.pageService.parsePureExcerpt(_this18.pageInfo.pure_excerpt);
                } catch (e) {}

                window.localStorage.setItem('page' + _this18.pageId, JSON.stringify(_this18.pageInfo));
              });

              _this18.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
                  var _this19 = this;

                  var _iterator10, _step10, item, temp, cacheLatest;

                  return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                    while (1) {
                      switch (_context27.prev = _context27.next) {
                        case 0:
                          if (!res[0]) {
                            _context27.next = 4;
                            break;
                          }

                          if (!this.cachingService.notChangedSince(res, kidsAcademyId + 'date')) {
                            _context27.next = 4;
                            break;
                          }

                          this.stopLoading();
                          return _context27.abrupt("return");

                        case 4:
                          res = res.sort(function (a, b) {
                            return a.title.rendered > b.title.rendered ? 1 : -1;
                          });
                          this.sections = [];
                          _iterator10 = _createForOfIteratorHelper(res);

                          try {
                            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                              item = _step10.value;
                              temp = {};

                              try {
                                temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                              } catch (e) {
                                // Must not be the case at all
                                temp.excerpt = {};
                              }

                              temp.content = item.content.rendered;
                              this.sections.push(temp);
                            } // setTimeout(() => {
                            //   const cacheLatest = window.localStorage.getItem('latestKidsAcademies');
                            //   this.latestKidsAcademies = cacheLatest ? JSON.parse(cacheLatest) : [];
                            //   console.log(this.latestKidsAcademies);
                            // }, 1000);

                          } catch (err) {
                            _iterator10.e(err);
                          } finally {
                            _iterator10.f();
                          }

                          _context27.next = 10;
                          return this.storageService.get('latestKidsAcademies');

                        case 10:
                          cacheLatest = _context27.sent;
                          this.latestKidsAcademies = cacheLatest ? JSON.parse(cacheLatest) : [];
                          setTimeout(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
                              return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                                while (1) {
                                  switch (_context26.prev = _context26.next) {
                                    case 0:
                                      _context26.next = 2;
                                      return this.stopLoading();

                                    case 2:
                                      return _context26.abrupt("return", _context26.sent);

                                    case 3:
                                    case "end":
                                      return _context26.stop();
                                  }
                                }
                              }, _callee26, this);
                            }));
                          }, 800);
                          window.localStorage.setItem(kidsAcademyId, JSON.stringify(this.sections));

                        case 14:
                        case "end":
                          return _context27.stop();
                      }
                    }
                  }, _callee27, this);
                }));
              });
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'kids-academy',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
              var _this20 = this;

              var kidsAcademyId, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.startLoading();

                    case 2:
                      kidsAcademyId = 'kidsAcademySections' + this.pageId;

                      if (window.localStorage.getItem(kidsAcademyId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(kidsAcademyId));
                      }

                      if (window.localStorage.getItem('page' + this.pageId)) {
                        this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
                      }

                      this.latestKidsAcademies = window.localStorage.getItem('latestKidsAcademies');
                      this.latestKidsAcademies = this.latestKidsAcademies ? JSON.parse(this.latestKidsAcademies) : [];

                      if (!(!this.latestKidsAcademies || !this.latestKidsAcademies.length)) {
                        _context29.next = 12;
                        break;
                      }

                      _context29.next = 10;
                      return this.storageService.get('latestKidsAcademies');

                    case 10:
                      cacheLatest = _context29.sent;
                      this.latestKidsAcademies = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 12:
                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                              while (1) {
                                switch (_context28.prev = _context28.next) {
                                  case 0:
                                    _context28.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context28.abrupt("return", _context28.sent);

                                  case 3:
                                  case "end":
                                    return _context28.stop();
                                }
                              }
                            }, _callee28, this);
                          }));
                        }, 800);
                      }

                    case 13:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context30.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context30.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
              return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      if (this.loading) {
                        _context31.next = 2;
                        break;
                      }

                      return _context31.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }]);

        return KidsAcademyContentComponent;
      }();

      KidsAcademyContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_4__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]
        }];
      };

      KidsAcademyContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kids-academy-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./kids-academy-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy-content/kids-academy-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./kids-academy-content.component.scss */
        "./src/app/components/kids-academy-content/kids-academy-content.component.scss"))["default"]]
      })], KidsAcademyContentComponent);
      /***/
    },

    /***/
    "./src/app/components/kids-academy/kids-academy.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/kids-academy/kids-academy.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsKidsAcademyKidsAcademyComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9raWRzLWFjYWRlbXkva2lkcy1hY2FkZW15LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2tpZHMtYWNhZGVteS9raWRzLWFjYWRlbXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZm9vdGVyLXdyYXBwZXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGxlZnQ6IDI1JTtcbiAgICB9XG59XG5cbi5lbWJlZC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgaWZyYW1lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuICBcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/kids-academy/kids-academy.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/kids-academy/kids-academy.component.ts ***!
      \*******************************************************************/

    /*! exports provided: KidsAcademyComponent */

    /***/
    function srcAppComponentsKidsAcademyKidsAcademyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KidsAcademyComponent", function () {
        return KidsAcademyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var KidsAcademyComponent = /*#__PURE__*/function () {
        function KidsAcademyComponent(userService, pageService, tagsService, loadingCtrl) {
          _classCallCheck(this, KidsAcademyComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.tagsService = tagsService;
          this.loadingCtrl = loadingCtrl;
          this.kidsAcademyItems = [];
          this.planCategories = [];
          this.displayCount = 5;
          this.currentPage = 1;
          this.pageCategories = ['Level 1', 'Level 2', 'Level 3'];
          this.selectedPageCategories = {};
          this.categoriesByName = {};
          this.filteredKidsAcademy = [];
          this.allFiltered = [];
        }

        _createClass(KidsAcademyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.loadFromCache();
            this.userService.getMe().subscribe(function (res) {
              if (!_this21.pageService.mainPages['kids-academy']) {
                _this21.pageService.getPageBySlug('kids-academy').subscribe(function (res) {
                  _this21.pageService.mainPages['kids-academy'] = res[0];

                  _this21.initPages();
                });
              } else {
                _this21.initPages();
              }
            });
            this.tagsService.getCategories().subscribe(function (res) {
              var _iterator11 = _createForOfIteratorHelper(res),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var cat = _step11.value;
                  _this21.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this21.categoriesByName));
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var _this22 = this;

            this.pageService.getPageByParent(this.pageService.mainPages['kids-academy'].id, this.currentPage, 50).subscribe(function (res) {
              _this22.kidsAcademyItems = [];
              var latestDate = window.localStorage.getItem('latestCreatedKidsAcademy');

              if (latestDate != res[0].date) {
                window.localStorage.setItem('latestCreatedKidsAcademy', res[0].date);

                _this22.startLoading();
              }

              _this22.kidsAcademyItems = [];
              _this22.latestLevel3 = [];
              _this22.latestLevel1 = [];
              _this22.latestLevel2 = [];

              var _iterator12 = _createForOfIteratorHelper(res),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var tp = _step12.value;

                  _this22.kidsAcademyItems.push(_this22.parseItem(tp));
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }

              _this22.applyFilters();

              setTimeout(function () {
                return _this22.stopLoading();
              }, 500);
              window.localStorage.setItem('latestLevel3Academy', JSON.stringify(_this22.latestLevel3 ? _this22.latestLevel3 : []));
              window.localStorage.setItem('latestLevel1Academy', JSON.stringify(_this22.latestLevel1 ? _this22.latestLevel1 : []));
              window.localStorage.setItem('latestLevel2Academy', JSON.stringify(_this22.latestLevel2 ? _this22.latestLevel2 : []));
              window.localStorage.setItem('kidsAcademyItems', JSON.stringify(_this22.kidsAcademyItems ? _this22.kidsAcademyItems : []));
            });
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "togglePageCategory",
          value: function togglePageCategory(cat) {
            var temp = this.categoriesByName[cat];
            this.selectedPageCategories[temp.id] = !this.selectedPageCategories[temp.id];
            this.applyFilters();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var _this23 = this;

            var allPlanDeselected = true;
            var allPageDeselected = true;

            for (var i in this.planCategories) {
              if (this.planCategories[i]) {
                allPlanDeselected = false;
                break;
              }
            }

            for (var _i in this.selectedPageCategories) {
              if (this.selectedPageCategories[_i]) {
                allPageDeselected = false;
                break;
              }
            }

            this.allFiltered = this.kidsAcademyItems.filter(function (tp) {
              var tempRes = true;

              if (tp.excerpt.category) {
                tempRes = allPlanDeselected || _this23.planCategories[tp.excerpt.category];
              }

              tempRes = tempRes && (allPageDeselected || _this23.selectedPageCategories[tp.categories[0]]);
              return tempRes;
            });
            this.filteredKidsAcademy = this.allFiltered.slice(0, this.displayCount);
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context32.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context32.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
              return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      if (this.loading) {
                        _context33.next = 2;
                        break;
                      }

                      return _context33.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;
            temp.categories = item.categories;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (temp.excerpt.category) {
              // Adding first 5 by any category
              switch (temp.excerpt.category) {
                case 'Level 1':
                  if (!this.latestLevel1) {
                    this.latestLevel1 = [temp];
                  } else {
                    if (this.latestLevel1.length < 5) {
                      this.latestLevel1.push(temp);
                    }
                  }

                  break;

                case 'Level 2':
                  if (!this.latestLevel2) {
                    this.latestLevel2 = [temp];
                  } else {
                    if (this.latestLevel2.length < 5) {
                      this.latestLevel2.push(temp);
                    }
                  }

                  break;

                case 'Level 3':
                  if (!this.latestLevel3) {
                    this.latestLevel3 = [temp];
                  } else {
                    if (this.latestLevel3.length < 5) {
                      this.latestLevel3.push(temp);
                    }
                  }

                  break;
              }
            }

            return temp;
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.kidsAcademyItems.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "isCatSelected",
          value: function isCatSelected(cat) {
            if (!this.categoriesByName[cat]) {
              return;
            }

            return this.selectedPageCategories[this.categoriesByName[cat].id];
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.next = 2;
                      return this.startLoading();

                    case 2:
                      temp = window.localStorage.getItem('categoriesByName');

                      if (temp) {
                        this.categoriesByName = JSON.parse(temp);
                      }

                      _context34.prev = 4;
                      this.kidsAcademyItems = window.localStorage.getItem('kidsAcademyItems');
                      this.kidsAcademyItems = this.kidsAcademyItems ? JSON.parse(this.kidsAcademyItems) : [];
                      this.applyFilters();
                      this.latestLevel3 = window.localStorage.getItem('latestLevel3Academy');
                      this.latestLevel3 = this.latestLevel3 ? JSON.parse(this.latestLevel3) : [];
                      this.latestLevel2 = window.localStorage.getItem('latestLevel2Academy');
                      this.latestLevel2 = this.latestLevel2 ? JSON.parse(this.latestLevel2) : [];
                      this.latestLevel1 = window.localStorage.getItem('latestLevel1Academy');
                      this.latestLevel1 = this.latestLevel1 ? JSON.parse(this.latestLevel1) : [];

                      if (!(this.kidsAcademyItems && this.kidsAcademyItems.length)) {
                        _context34.next = 17;
                        break;
                      }

                      _context34.next = 17;
                      return this.stopLoading();

                    case 17:
                      _context34.next = 23;
                      break;

                    case 19:
                      _context34.prev = 19;
                      _context34.t0 = _context34["catch"](4);
                      _context34.next = 23;
                      return this.stopLoading();

                    case 23:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this, [[4, 19]]);
            }));
          }
        }]);

        return KidsAcademyComponent;
      }();

      KidsAcademyComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      KidsAcademyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kids-academy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./kids-academy.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/kids-academy/kids-academy.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./kids-academy.component.scss */
        "./src/app/components/kids-academy/kids-academy.component.scss"))["default"]]
      })], KidsAcademyComponent);
      /***/
    },

    /***/
    "./src/app/components/login/login.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/login/login.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@font-face {\n  font-family: Roboto;\n  src: url(\"/assets/fonts/Roboto-Regular.ttf\");\n}\n/** Ionic CSS Variables **/\n:root {\n  /** primary **/\n  --ion-color-primary: #1bb3eb;\n  --ion-color-primary-rgb: 27,179,235;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 0,0,0;\n  --ion-color-primary-shade: #189ecf;\n  --ion-color-primary-tint: #32bbed;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #25efcb;\n  --ion-color-success-rgb: 37,239,203;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #21d2b3;\n  --ion-color-success-tint: #3bf1d0;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #d15151;\n  --ion-color-danger-rgb: 209,81,81;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #b84747;\n  --ion-color-danger-tint: #d66262;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: rgba(0,0,0,0.02);\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  --ion-color-dark-blue: #054759;\n  --ion-color-inactive: #DCDCDC;\n  --ion-font-family: \"Roboto\";\n}\nion-slide img {\n  height: 100vh;\n  width: 100vw;\n  max-width: 100vw;\n  max-height: 100vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-slide .material-icons {\n  position: absolute;\n  bottom: 5vh;\n  left: 5vw;\n  color: var(--ion-color-success);\n  font-size: 40px;\n  z-index: 255;\n}\nion-slide a.full-link {\n  position: absolute;\n  opacity: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n.logo-wrapper {\n  width: 100%;\n  position: absolute;\n  left: 0px;\n  top: 30vh;\n}\n.logo-wrapper img {\n  width: 45vw;\n  height: 45vw;\n  max-width: 30vh;\n  max-height: 30vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.logo-wrapper img.small {\n  width: 40vw;\n  height: 40vw;\n}\n.form-wrapper {\n  position: absolute;\n  top: 60vh;\n  width: 100%;\n  z-index: 55;\n  left: 0px;\n  height: 40vh;\n}\n.form-wrapper ion-button, .form-wrapper ion-input {\n  position: relative;\n  width: 60vw;\n}\n.form-wrapper ion-input {\n  left: 20vw;\n}\n.form-wrapper ion-input {\n  --background: white;\n  margin-bottom: 10px;\n  border-radius: 10px;\n}\n.form-wrapper ion-input ::ng-deep input {\n  padding-left: 10px !important;\n}\n.form-wrapper a, .form-wrapper p {\n  text-decoration: none;\n  color: white;\n  text-align: center;\n  width: 100%;\n  margin-top: 25px;\n  display: block;\n  font-size: 14px;\n}\n.form-wrapper .single-button {\n  position: relative;\n  top: 104px;\n}\n::ng-deep .login-slides .swiper-pagination {\n  top: calc(70vh + 160px) !important;\n  height: 15px;\n}\n::ng-deep .login-slides .swiper-pagination .swiper-pagination-bullet {\n  opacity: 0.8;\n}\n::ng-deep .login-slides .swiper-pagination .swiper-pagination-bullet-active {\n  background: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUNGRjtBREtBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBR0EsOEJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0FDZEY7QUFyRUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBd0VSO0FBckVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUF1RVI7QUFwRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBc0VSO0FBbEVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFxRUo7QUFuRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUFvRVI7QUFsRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQW9FWjtBQS9EQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFrRUo7QUFoRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFrRVI7QUEvREk7RUFDSSxVQUFBO0FBaUVSO0FBOURJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZ0VSO0FBOURRO0VBQ0ksNkJBQUE7QUFnRVo7QUE1REk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBOERSO0FBM0RJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBNkRSO0FBekRBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0FBNERKO0FBMURJO0VBQ0ksWUFBQTtBQTREUjtBQXpESTtFQUNJLG9DQUFBO0FBMkRSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7IC8vY2hhbmdlIHVybCBhY2NvcmRpbmdseVxufVxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbjpyb290IHtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMxYmIzZWI7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiAyNywxNzksMjM1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMxODllY2Y7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzMyYmJlZDtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMjVlZmNiO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogMzcsMjM5LDIwMztcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjFkMmIzO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICMzYmYxZDA7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNkMTUxNTE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIwOSw4MSw4MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjYjg0NzQ3O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2Q2NjI2MjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogcmdiYSgwLDAsMCwwLjAyKTtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuXG4gIC0taW9uLWNvbG9yLWRhcmstYmx1ZTogIzA1NDc1OTtcbiAgLS1pb24tY29sb3ItaW5hY3RpdmU6ICNEQ0RDREM7XG5cbiAgLS1pb24tZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnO1xuXG5pb24tc2xpZGUge1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cblxuICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1dmg7XG4gICAgICAgIGxlZnQ6IDV2dztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICB6LWluZGV4OiAyNTU7XG4gICAgfVxuXG4gICAgYS5mdWxsLWxpbmsge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5sb2dvLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAzMHZoO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDQ1dnc7XG4gICAgICAgIGhlaWdodDogNDV2dztcblxuICAgICAgICBtYXgtd2lkdGg6IDMwdmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbiAgICAgICAgJi5zbWFsbCB7XG4gICAgICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgICAgIGhlaWdodDogNDB2dztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0td3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA1NTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiA0MHZoO1xuXG4gICAgaW9uLWJ1dHRvbiwgaW9uLWlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgICAgICBcbiAgICAgICAgd2lkdGg6IDYwdnc7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgbGVmdDogMjB2dztcbiAgICB9XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgIDo6bmctZGVlcCBpbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGEsIHAge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuc2luZ2xlLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAxMDRweDtcbiAgICB9XG59XG5cbjo6bmctZGVlcCAubG9naW4tc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgdG9wOiBjYWxjKDcwdmggKyAxNjBweCkgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE1cHg7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/login/login.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/media.service */
      "./src/app/services/media.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      "./node_modules/@ionic-native/touch-id/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/android-fingerprint-auth/ngx */
      "./node_modules/@ionic-native/android-fingerprint-auth/__ivy_ngcc__/ngx/index.js");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(userService, router, pageService, mediaService, formBuilder, toast, touchId, androidFingerprintAuth, platform) {
          _classCallCheck(this, LoginComponent);

          this.userService = userService;
          this.router = router;
          this.pageService = pageService;
          this.mediaService = mediaService;
          this.formBuilder = formBuilder;
          this.toast = toast;
          this.touchId = touchId;
          this.androidFingerprintAuth = androidFingerprintAuth;
          this.platform = platform;
          this.loginImgs = [];
          this.loginStep = 1;
          this.loginForm = {};
          this.forgotForm = {};
          this.slideOpts = {};
          this.loading = false;
          this.androidAvailable = false;
          this.iosAvailable = false;

          if (this.mediaService.loginImages) {
            this.loginImgs = this.mediaService.loginImages;
          }

          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.forgotForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.mediaService.getLoginImages().subscribe(function (res) {
              _this24.loginImgs = res;
              console.log(_this24.loginImgs);
            });
            this.userService.currentUser().then(function (res) {
              _this24.router.navigateByUrl('/media', {
                replaceUrl: true
              });

              return;
            }, function (err) {
              _this24.userService.logout(false);
            });
            this.platform.ready().then(function (res) {
              _this24.iosTouchInit();

              _this24.androidTouchInit();
            });
          }
        }, {
          key: "iosTouchInit",
          value: function iosTouchInit() {
            var _this25 = this;

            console.log('was called touch init');
            this.touchId.isAvailable().then(function (res) {
              console.log('TouchID is available!', res);
              _this25.iosAvailable = !!window.localStorage.getItem('scanAuthEnabled');
            }, function (err) {
              return console.error('TouchID is not available', err);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "androidTouchInit",
          value: function androidTouchInit() {
            var _this26 = this;

            this.androidFingerprintAuth.isAvailable().then(function (result) {
              _this26.androidAvailable = result.isAvailable && !!window.localStorage.getItem('scanAuthEnabled');
            })["catch"](function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "login",
          value: function login() {
            if (this.loginStep == 1) {
              this.loginStep = 2;

              if (this.androidAvailable) {
                this.showAndroidScanId();
              }

              if (this.iosAvailable) {
                this.showIosScanID();
              }

              return;
            }

            var temp = this.loginForm.value;
            this.loading = true;
            this.loginWithUser(temp);
          }
        }, {
          key: "slideBack",
          value: function slideBack() {
            this.slides.slideTo(0);
          }
        }, {
          key: "showAndroidScanId",
          value: function showAndroidScanId() {
            var _this27 = this;

            this.androidFingerprintAuth.encrypt({
              clientId: 'myAppName',
              username: 'myUsername',
              password: 'myPassword'
            }).then(function (result) {
              if (result.withFingerprint) {
                console.log('Successfully encrypted credentials.');
                console.log('Encrypted credentials: ' + result.token);
                var creds = window.localStorage.getItem('userFinger');

                if (creds) {
                  creds = creds.split(':');

                  _this27.loginWithUser({
                    username: creds[0],
                    password: creds[1]
                  });
                }
              } else if (result.withBackup) {
                console.log('Successfully authenticated with backup password!', result);
              } else console.log('Didn\'t authenticate!');
            })["catch"](function (error) {
              if (error === _this27.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                console.log('Fingerprint authentication cancelled');
              } else console.error(error);
            });
          }
        }, {
          key: "showIosScanID",
          value: function showIosScanID() {
            var _this28 = this;

            this.touchId.verifyFingerprintWithCustomPasswordFallback('Please scan your id').then(function (res) {
              console.log('Ok', res);
              var creds = window.localStorage.getItem('userFinger');

              if (creds) {
                creds = creds.split(':');

                _this28.loginWithUser({
                  username: creds[0],
                  password: creds[1]
                });
              }
            }, function (err) {
              return console.error('Error', err);
            });
          }
        }, {
          key: "loginWithUser",
          value: function loginWithUser(temp) {
            var _this29 = this;

            this.userService.login(temp.username, temp.password).subscribe(function (user) {
              if (user.access_token) {
                _this29.userService.getSubscriptions().subscribe(function (res) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
                    var toast;
                    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                      while (1) {
                        switch (_context35.prev = _context35.next) {
                          case 0:
                            if (!(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].env == 'dev')) {
                              _context35.next = 4;
                              break;
                            }

                            this.userService.loggedIn = true;
                            _context35.next = 11;
                            break;

                          case 4:
                            if (res.is_active) {
                              _context35.next = 11;
                              break;
                            }

                            this.userService.logout(false);
                            _context35.next = 8;
                            return this.toast.create({
                              message: 'Your subscribtion status is not active.',
                              color: 'danger',
                              position: 'bottom',
                              duration: 2500
                            });

                          case 8:
                            toast = _context35.sent;
                            toast.present();
                            return _context35.abrupt("return");

                          case 11:
                            this.userService.loggedIn = true;
                            this.userService.loggedUser.next(user);
                            window.localStorage.setItem('userFinger', temp.username + ':' + temp.password);
                            this.pageService.initMainPages();
                            this.router.navigateByUrl('/browse', {
                              replaceUrl: true
                            });

                          case 16:
                          case "end":
                            return _context35.stop();
                        }
                      }
                    }, _callee35, this);
                  }));
                });
              }

              _this29.loading = false;
            }, function (err) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                var msg, toast;
                return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        msg = 'Something went wrong, please try again later.';

                        if (err.error && err.error.message) {
                          msg = err.error.message.replace('Lost your password?', '');
                        }

                        _context36.next = 4;
                        return this.toast.create({
                          message: msg,
                          color: 'danger',
                          position: 'bottom',
                          duration: 2500
                        });

                      case 4:
                        toast = _context36.sent;
                        toast.present();
                        this.loading = false;

                      case 7:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee36, this);
              }));
            });
          }
        }, {
          key: "removePlaceholder",
          value: function removePlaceholder(ev) {
            this.tempPlaceholder = ev.target.placeholder;
            ev.target.placeholder = '';
          }
        }, {
          key: "putPlaceholder",
          value: function putPlaceholder(ev) {
            ev.target.placeholder = this.tempPlaceholder;
          }
        }, {
          key: "getHref",
          value: function getHref(img) {
            return img.alt_text.split(':')[1];
          }
        }, {
          key: "sendResetPassword",
          value: function sendResetPassword() {
            var _this30 = this;

            if (this.loading) {
              return;
            }

            this.loading = true;
            var data = this.forgotForm.value;
            this.userService.sendResetPassword(data).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
                var msg, toast;
                return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        console.log(res);
                        msg = 'Success! Please check your email';

                        if (res.error) {
                          msg = res.error;
                        }

                        _context37.next = 5;
                        return this.toast.create({
                          message: msg,
                          color: res.error ? 'danger' : 'success',
                          position: 'bottom',
                          duration: 2500
                        });

                      case 5:
                        toast = _context37.sent;
                        toast.present();
                        this.loading = false;

                      case 8:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37, this);
              }));
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"]
        }, {
          type: src_app_services_media_service__WEBPACK_IMPORTED_MODULE_5__["MediaService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_9__["TouchID"]
        }, {
          type: _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidFingerprintAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      LoginComponent.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slides', {
            "static": true
          }]
        }]
      };
      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.component.scss */
        "./src/app/components/login/login.component.scss"))["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "./src/app/components/mental-content/mental-content.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/mental-content/mental-content.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMentalContentMentalContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudGFsLWNvbnRlbnQvbWVudGFsLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/mental-content/mental-content.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/mental-content/mental-content.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MentalContentComponent */

    /***/
    function srcAppComponentsMentalContentMentalContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentalContentComponent", function () {
        return MentalContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var MentalContentComponent = /*#__PURE__*/function () {
        function MentalContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, MentalContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.asyncSections = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          this.latestMentalCourses = [];
        }

        _createClass(MentalContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.activeRouter.params.subscribe(function (res) {
              _this31.startLoading();

              _this31.mentalId = 'mentalSections' + res.id;
              _this31.pageId = res.id;

              _this31.pageService.getSinglePage(res.id).subscribe(function (res) {
                try {
                  _this31.pageExcerpt = _this31.pageService.parsePureExcerpt(res.pure_excerpt);
                } catch (e) {
                  _this31.pageExcerpt = {};
                }

                _this31.pageInfo = {
                  clean_title: res.clean_title,
                  pure_excerpt: res.pure_excerpt,
                  id: res.id
                };

                try {
                  _this31.pageInfo.excerpt = _this31.pageService.parsePureExcerpt(_this31.pageInfo.pure_excerpt);
                } catch (e) {}

                window.localStorage.setItem('page' + _this31.pageId, JSON.stringify(_this31.pageInfo));
              });

              _this31.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
                  var _this32 = this;

                  var _iterator13, _step13, item, temp, cacheLatest;

                  return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                    while (1) {
                      switch (_context38.prev = _context38.next) {
                        case 0:
                          if (!this.cachingService.notChangedSince(res, this.mentalId + 'date')) {
                            _context38.next = 4;
                            break;
                          }

                          this.loadFromCache();
                          this.stopLoading();
                          return _context38.abrupt("return");

                        case 4:
                          this.startLoading();
                          res = res.sort(function (a, b) {
                            return a.title.rendered > b.title.rendered ? 1 : -1;
                          });
                          this.sections = [];
                          _iterator13 = _createForOfIteratorHelper(res);

                          try {
                            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                              item = _step13.value;
                              temp = {};

                              try {
                                temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                              } catch (e) {
                                // Must not be the case at all
                                temp.excerpt = {};
                              }

                              temp.content = item.content.rendered;
                              this.sections.push(temp);
                            }
                          } catch (err) {
                            _iterator13.e(err);
                          } finally {
                            _iterator13.f();
                          }

                          this.asyncSections.next(this.sections); // setTimeout(() => {
                          //   const cacheLatest = window.localStorage.getItem('latestMentalCourses');
                          //   this.latestMentalCourses = cacheLatest ? JSON.parse(cacheLatest) : []
                          //   console.log(this.latestMentalCourses);
                          // }, 1000);

                          _context38.next = 12;
                          return this.storageService.get('latestMentalCourses');

                        case 12:
                          cacheLatest = _context38.sent;
                          this.latestMentalCourses = cacheLatest ? JSON.parse(cacheLatest) : [];
                          setTimeout(function () {
                            return _this32.stopLoading();
                          }, 800);
                          window.localStorage.setItem(this.mentalId, JSON.stringify(this.sections));

                        case 16:
                        case "end":
                          return _context38.stop();
                      }
                    }
                  }, _callee38, this);
                }));
              }, function (err) {
                _this31.loadFromCache();
              });
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'mental-courses',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
              var _this33 = this;

              var info, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return this.startLoading();

                    case 2:
                      info = window.localStorage.getItem('page' + this.pageId);

                      if (info) {
                        this.pageInfo = JSON.parse(info);
                      }

                      if (window.localStorage.getItem(this.mentalId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(this.mentalId));
                      }

                      if (window.localStorage.getItem('page' + this.pageId)) {
                        this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
                      }

                      this.latestMentalCourses = window.localStorage.getItem('latestMentalCourses');
                      this.latestMentalCourses = this.latestMentalCourses ? JSON.parse(this.latestMentalCourses) : [];

                      if (!(!this.latestMentalCourses || !this.latestMentalCourses.length)) {
                        _context40.next = 13;
                        break;
                      }

                      _context40.next = 11;
                      return this.storageService.get('latestMentalCourses');

                    case 11:
                      cacheLatest = _context40.sent;
                      this.latestMentalCourses = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 13:
                      if (this.sections.length) this.asyncSections.next(this.sections);

                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                            return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                              while (1) {
                                switch (_context39.prev = _context39.next) {
                                  case 0:
                                    _context39.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context39.abrupt("return", _context39.sent);

                                  case 3:
                                  case "end":
                                    return _context39.stop();
                                }
                              }
                            }, _callee39, this);
                          }));
                        }, 800);
                      }

                    case 15:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context41.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context41.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
              return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      if (this.loading) {
                        _context42.next = 2;
                        break;
                      }

                      return _context42.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          }
        }]);

        return MentalContentComponent;
      }();

      MentalContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      MentalContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mental-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mental-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-content/mental-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mental-content.component.scss */
        "./src/app/components/mental-content/mental-content.component.scss"))["default"]]
      })], MentalContentComponent);
      /***/
    },

    /***/
    "./src/app/components/mental-courses/mental-courses.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/mental-courses/mental-courses.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsMentalCoursesMentalCoursesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.categories-wrapper {\n  box-shadow: 5px 5px 20px -15px grey;\n  position: relative;\n}\n\n.categories-wrapper div {\n  padding: 15px;\n}\n\n.main-wrapper {\n  position: relative;\n  padding-top: 0px;\n}\n\n.info-wrapper p {\n  color: var(--ion-color-dark-blue);\n  margin: 3px 0;\n}\n\n.info-wrapper ion-button {\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n  width: 40vw;\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW50YWwtY291cnNlcy9tZW50YWwtY291cnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtBO0VBQ0ksbUNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0ksYUFBQTtBQUZSOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU9JO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0FBSlI7O0FBT0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnRhbC1jb3Vyc2VzL21lbnRhbC1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgfVxufVxuXG4uZW1iZWQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cblxuLmNhdGVnb3JpZXMtd3JhcHBlciB7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAyMHB4IC0xNXB4IGdyZXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTVweFxuICAgIH1cbn1cblxuLm1haW4td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5pbmZvLXdyYXBwZXIge1xuICAgIHAge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstYmx1ZSk7XG4gICAgICAgIG1hcmdpbjogM3B4IDA7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/mental-courses/mental-courses.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/mental-courses/mental-courses.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MentalCoursesComponent */

    /***/
    function srcAppComponentsMentalCoursesMentalCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentalCoursesComponent", function () {
        return MentalCoursesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var MentalCoursesComponent = /*#__PURE__*/function () {
        function MentalCoursesComponent(userService, pageService, loadingCtrl) {
          _classCallCheck(this, MentalCoursesComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.loadingCtrl = loadingCtrl;
          this.mentalCourses = [];
          this.planCategories = [];
          this.displayCount = 5;
          this.currentPage = 1;
          this.isInLatest = {};
          this.filteredMentalCourses = [];
        }

        _createClass(MentalCoursesComponent, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this34 = this;

            // this.loadFromCache();
            this.startLoading();
            this.userService.getMe().subscribe(function (res) {
              if (!_this34.pageService.mainPages['mental-courses']) {
                _this34.pageService.getPageBySlug('mental-courses').subscribe(function (res) {
                  _this34.pageService.mainPages['mental-courses'] = res[0];

                  _this34.initPages();
                });
              } else {
                _this34.initPages();
              }
            });
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context43.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context43.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
              return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      if (this.loading) {
                        _context44.next = 2;
                        break;
                      }

                      return _context44.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, this);
            }));
          }
        }, {
          key: "initPages",
          value: function initPages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
              var _this35 = this;

              var res, temp, latestDate, _iterator14, _step14, tp;

              return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.prev = 0;
                      _context45.next = 3;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['mental-courses'].id, this.currentPage, 50);

                    case 3:
                      res = _context45.sent;
                      this.mentalCourses = [];
                      this.latestMentalCourses = [];
                      temp = {};
                      temp.excerpt = this.pageService.parsePureExcerpt(this.pageService.mainPages['mental-courses'].pure_excerpt);
                      temp.featured_image_src = this.pageService.mainPages['mental-courses'].featured_image_src;
                      this.pageMeta = temp;
                      latestDate = window.localStorage.getItem('latestCreatedMentalCourse');

                      if (latestDate != res[0].date) {
                        window.localStorage.setItem('latestCreatedMentalCourse', res[0].date);
                        this.startLoading();
                      }

                      window.localStorage.setItem('mentalCategoriesMeta', JSON.stringify(temp));
                      _iterator14 = _createForOfIteratorHelper(res);

                      try {
                        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                          tp = _step14.value;
                          this.mentalCourses.push(this.parseItem(tp));
                        }
                      } catch (err) {
                        _iterator14.e(err);
                      } finally {
                        _iterator14.f();
                      }

                      this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);
                      setTimeout(function () {
                        return _this35.stopLoading();
                      }, 500);
                      window.localStorage.setItem('latestMentalCourses', JSON.stringify(this.latestMentalCourses ? this.latestMentalCourses : []));
                      window.localStorage.setItem('mentalCourses', JSON.stringify(this.mentalCourses ? this.mentalCourses : []));
                      _context45.next = 24;
                      break;

                    case 21:
                      _context45.prev = 21;
                      _context45.t0 = _context45["catch"](0);
                      console.log(_context45.t0.message);

                    case 24:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45, this, [[0, 21]]);
            }));
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (temp.excerpt.category) {
              this.planCategories[temp.excerpt.category] = true;
            }

            if (!this.latestMentalCourses) {
              this.latestMentalCourses = [temp];
            } else {
              if (this.latestMentalCourses.length < 5) {
                this.latestMentalCourses.push(temp);
              }
            }

            return temp;
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.mentalCourses.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
              var _iterator15, _step15, temp;

              return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      _context46.prev = 0;
                      _context46.next = 3;
                      return this.startLoading();

                    case 3:
                      this.mentalCourses = window.localStorage.getItem('mentalCourses');
                      this.mentalCourses = this.mentalCourses ? JSON.parse(this.mentalCourses) : [];
                      this.filteredMentalCourses = this.mentalCourses.slice(0, this.displayCount);
                      this.latestMentalCourses = window.localStorage.getItem('latestMentalCourses');
                      this.latestMentalCourses = this.latestMentalCourses ? JSON.parse(this.latestMentalCourses) : [];
                      this.pageMeta = window.localStorage.getItem('mentalCategoriesMeta');
                      this.pageMeta = this.pageMeta ? JSON.parse(this.pageMeta) : null;
                      window.localStorage.removeItem('latestMentalCourses');
                      _iterator15 = _createForOfIteratorHelper(this.latestMentalCourses);

                      try {
                        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                          temp = _step15.value;
                          this.isInLatest[temp.id] = true;
                        }
                      } catch (err) {
                        _iterator15.e(err);
                      } finally {
                        _iterator15.f();
                      }

                      if (!(this.mentalCourses && this.mentalCourses.length)) {
                        _context46.next = 16;
                        break;
                      }

                      _context46.next = 16;
                      return this.stopLoading();

                    case 16:
                      _context46.next = 22;
                      break;

                    case 18:
                      _context46.prev = 18;
                      _context46.t0 = _context46["catch"](0);
                      _context46.next = 22;
                      return this.stopLoading();

                    case 22:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46, this, [[0, 18]]);
            }));
          }
        }]);

        return MentalCoursesComponent;
      }();

      MentalCoursesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      MentalCoursesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mental-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mental-courses.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mental-courses/mental-courses.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mental-courses.component.scss */
        "./src/app/components/mental-courses/mental-courses.component.scss"))["default"]]
      })], MentalCoursesComponent);
      /***/
    },

    /***/
    "./src/app/components/physical-content/physical-content.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/physical-content/physical-content.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPhysicalContentPhysicalContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGh5c2ljYWwtY29udGVudC9waHlzaWNhbC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/physical-content/physical-content.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/physical-content/physical-content.component.ts ***!
      \***************************************************************************/

    /*! exports provided: PhysicalContentComponent */

    /***/
    function srcAppComponentsPhysicalContentPhysicalContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicalContentComponent", function () {
        return PhysicalContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var PhysicalContentComponent = /*#__PURE__*/function () {
        function PhysicalContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, PhysicalContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.asyncSections = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          this.latestPhysicalPrograms = [];
        }

        _createClass(PhysicalContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this36 = this;

            this.activeRouter.params.subscribe(function (res) {
              _this36.startLoading();

              _this36.physicalId = 'physicalSections' + res.id;
              _this36.pageId = res.id;

              _this36.pageService.getSinglePage(res.id).subscribe(function (res) {
                try {
                  _this36.pageExcerpt = _this36.pageService.parsePureExcerpt(res.pure_excerpt);
                } catch (e) {
                  _this36.pageExcerpt = {};
                }

                _this36.pageInfo = {
                  clean_title: res.clean_title,
                  pure_excerpt: res.pure_excerpt,
                  id: res.id
                };

                try {
                  _this36.pageInfo.excerpt = _this36.pageService.parsePureExcerpt(_this36.pageInfo.pure_excerpt);
                } catch (e) {}

                window.localStorage.setItem('page' + _this36.pageId, JSON.stringify(_this36.pageInfo));
              }, function (err) {
                _this36.loadFromCache();

                _this36.stopLoading();
              });

              _this36.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this36, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                  var _this37 = this;

                  var _iterator16, _step16, item, temp, cacheLatest;

                  return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                    while (1) {
                      switch (_context47.prev = _context47.next) {
                        case 0:
                          if (!this.cachingService.notChangedSince(res, this.physicalId + 'date')) {
                            _context47.next = 4;
                            break;
                          }

                          this.loadFromCache();
                          this.stopLoading();
                          return _context47.abrupt("return");

                        case 4:
                          _context47.next = 6;
                          return this.startLoading();

                        case 6:
                          res = res.sort(function (a, b) {
                            return a.title.rendered > b.title.rendered ? 1 : -1;
                          });
                          this.sections = [];
                          _iterator16 = _createForOfIteratorHelper(res);

                          try {
                            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                              item = _step16.value;
                              temp = {};

                              try {
                                temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                              } catch (e) {
                                // Must not be the case at all
                                temp.excerpt = {};
                              }

                              temp.content = item.content.rendered;
                              this.sections.push(temp);
                            }
                          } catch (err) {
                            _iterator16.e(err);
                          } finally {
                            _iterator16.f();
                          }

                          this.asyncSections.next(this.sections); // setTimeout(() => {
                          //   const cacheLatest = window.localStorage.getItem('latestPhysical');
                          //   this.latestPhysicalPrograms = cacheLatest ? JSON.parse(cacheLatest) : [];
                          // }, 1000);

                          _context47.next = 13;
                          return this.storageService.get('latestPhysical');

                        case 13:
                          cacheLatest = _context47.sent;
                          this.latestPhysicalPrograms = cacheLatest ? JSON.parse(cacheLatest) : [];
                          setTimeout(function () {
                            return _this37.stopLoading();
                          }, 800);
                          window.localStorage.setItem(this.physicalId, JSON.stringify(this.sections));

                        case 17:
                        case "end":
                          return _context47.stop();
                      }
                    }
                  }, _callee47, this);
                }));
              });
            }, function (err) {
              _this36.loadFromCache();
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'physical-programs',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
              var _this38 = this;

              var info, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.next = 2;
                      return this.startLoading();

                    case 2:
                      info = window.localStorage.getItem('page' + this.pageId);

                      if (info) {
                        this.pageInfo = JSON.parse(info);
                      }

                      if (window.localStorage.getItem('page' + this.pageId)) {
                        this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
                      }

                      if (window.localStorage.getItem(this.physicalId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(this.physicalId));
                      }

                      this.latestPhysicalPrograms = window.localStorage.getItem('latestPhysical');
                      this.latestPhysicalPrograms = this.latestPhysicalPrograms ? JSON.parse(this.latestPhysicalPrograms) : [];

                      if (!(!this.latestPhysicalPrograms || !this.latestPhysicalPrograms.length)) {
                        _context49.next = 13;
                        break;
                      }

                      _context49.next = 11;
                      return this.storageService.get('latestPhysical');

                    case 11:
                      cacheLatest = _context49.sent;
                      this.latestPhysicalPrograms = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 13:
                      if (this.sections.length) this.asyncSections.next(this.sections);

                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this38, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
                            return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                              while (1) {
                                switch (_context48.prev = _context48.next) {
                                  case 0:
                                    _context48.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context48.abrupt("return", _context48.sent);

                                  case 3:
                                  case "end":
                                    return _context48.stop();
                                }
                              }
                            }, _callee48, this);
                          }));
                        }, 800);
                      }

                    case 15:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
              return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context50.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context50.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
              return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      if (this.loading) {
                        _context51.next = 2;
                        break;
                      }

                      return _context51.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          }
        }]);

        return PhysicalContentComponent;
      }();

      PhysicalContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      PhysicalContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-physical-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./physical-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-content/physical-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./physical-content.component.scss */
        "./src/app/components/physical-content/physical-content.component.scss"))["default"]]
      })], PhysicalContentComponent);
      /***/
    },

    /***/
    "./src/app/components/physical-programs/physical-programs.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/physical-programs/physical-programs.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPhysicalProgramsPhysicalProgramsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waHlzaWNhbC1wcm9ncmFtcy9waHlzaWNhbC1wcm9ncmFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waHlzaWNhbC1wcm9ncmFtcy9waHlzaWNhbC1wcm9ncmFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5mb290ZXItd3JhcHBlciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbGVmdDogMjUlO1xuICAgIH1cbn1cblxuLmVtYmVkLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/physical-programs/physical-programs.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/physical-programs/physical-programs.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PhysicalProgramsComponent */

    /***/
    function srcAppComponentsPhysicalProgramsPhysicalProgramsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhysicalProgramsComponent", function () {
        return PhysicalProgramsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var PhysicalProgramsComponent = /*#__PURE__*/function () {
        function PhysicalProgramsComponent(userService, pageService, loadingCtrl) {
          _classCallCheck(this, PhysicalProgramsComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.loadingCtrl = loadingCtrl;
          this.physicalPrograms = [];
          this.planCategories = [];
          this.displayCount = 5;
          this.currentPage = 1;
          this.filteredPhysicalPrograms = [];
        }

        _createClass(PhysicalProgramsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this39 = this;

            this.startLoading();
            this.userService.getMe().subscribe(function (res) {
              if (!_this39.pageService.mainPages['physical']) {
                _this39.pageService.getPageBySlug('physical').subscribe(function (res) {
                  _this39.pageService.mainPages['physical'] = res[0];

                  _this39.initPages();
                });
              } else {
                _this39.initPages();
              }
            }, function (err) {
              _this39.loadFromCache();
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
              return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context52.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context52.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
              return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      if (this.loading) {
                        _context53.next = 2;
                        break;
                      }

                      return _context53.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var _this40 = this;

            this.pageService.getPageByParent(this.pageService.mainPages['physical'].id, this.currentPage, 50).subscribe(function (res) {
              _this40.physicalPrograms = [];
              _this40.latestPhysical = [];
              var latestDate = window.localStorage.getItem('latestCreatedPhysicalProgram');

              if (latestDate != res[0].date) {
                window.localStorage.setItem('latestCreatedPhysicalProgram', res[0].date);

                _this40.startLoading();
              }

              var _iterator17 = _createForOfIteratorHelper(res),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var tp = _step17.value;

                  _this40.physicalPrograms.push(_this40.parseItem(tp));
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }

              _this40.filteredPhysicalPrograms = _this40.physicalPrograms.slice(0, _this40.displayCount);
              setTimeout(function () {
                return _this40.stopLoading();
              }, 500);
              window.localStorage.setItem('latestPhysical', JSON.stringify(_this40.latestPhysical ? _this40.latestPhysical : []));
              window.localStorage.setItem('physicalPrograms', JSON.stringify(_this40.physicalPrograms ? _this40.physicalPrograms : []));
            }, function (err) {
              _this40.loadFromCache();
            });
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            this.filteredPhysicalPrograms = this.physicalPrograms.slice(0, this.displayCount);
            return;
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (temp.excerpt.category) {
              this.planCategories[temp.excerpt.category] = true;
            }

            if (!this.latestPhysical) {
              this.latestPhysical = [temp];
            } else {
              if (this.latestPhysical.length < 5) {
                this.latestPhysical.push(temp);
              }
            }

            return temp;
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.physicalPrograms.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
              return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      _context54.prev = 0;
                      _context54.next = 3;
                      return this.startLoading();

                    case 3:
                      this.physicalPrograms = window.localStorage.getItem('physicalPrograms');
                      this.physicalPrograms = this.physicalPrograms ? JSON.parse(this.physicalPrograms) : [];
                      this.filteredPhysicalPrograms = this.physicalPrograms.slice(0, this.displayCount);
                      this.latestPhysical = window.localStorage.getItem('latestPhysical');
                      this.latestPhysical = this.latestPhysical ? JSON.parse(this.latestPhysical) : [];

                      if (!(this.physicalPrograms && this.physicalPrograms.length)) {
                        _context54.next = 11;
                        break;
                      }

                      _context54.next = 11;
                      return this.stopLoading();

                    case 11:
                      _context54.next = 17;
                      break;

                    case 13:
                      _context54.prev = 13;
                      _context54.t0 = _context54["catch"](0);
                      _context54.next = 17;
                      return this.stopLoading();

                    case 17:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this, [[0, 13]]);
            }));
          }
        }]);

        return PhysicalProgramsComponent;
      }();

      PhysicalProgramsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      PhysicalProgramsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-physical-programs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./physical-programs.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/physical-programs/physical-programs.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./physical-programs.component.scss */
        "./src/app/components/physical-programs/physical-programs.component.scss"))["default"]]
      })], PhysicalProgramsComponent);
      /***/
    },

    /***/
    "./src/app/components/plans-tab/plans-tab.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/plans-tab/plans-tab.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPlansTabPlansTabComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".select-wrapper {\n  padding: 15px;\n  padding-bottom: 0px;\n  min-height: 70px;\n  background: linear-gradient(111deg, #1bb3eb 0%, #25efcb 100%) !important;\n}\n.select-wrapper ion-select {\n  background: white;\n  width: calc(100% - 50px);\n}\n.select-wrapper .round-btn {\n  width: 40px;\n  height: 40px;\n  float: right;\n  margin-top: 0px;\n  --border-radius: 45px;\n}\n.select-wrapper ion-button {\n  color: white;\n  margin-bottom: 0;\n}\nion-input {\n  background: white;\n  border-radius: 10px;\n  padding: 5px !important;\n  border: 1px solid black;\n}\nion-select {\n  border-radius: 10px;\n  color: var(--ion-color-dark-blue);\n  letter-spacing: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGFucy10YWIvcGxhbnMtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUFSO0FBR0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFGSjtBQUtBO0VBQ0ksbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYW5zLXRhYi9wbGFucy10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTFkZWcsIzFiYjNlYiAwJSwjMjVlZmNiIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICB9XG5cbiAgICAucm91bmQtYnRuIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNDVweDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbn1cblxuaW9uLWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1ibHVlKTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/plans-tab/plans-tab.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/plans-tab/plans-tab.component.ts ***!
      \*************************************************************/

    /*! exports provided: PlansTabComponent */

    /***/
    function srcAppComponentsPlansTabPlansTabComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansTabComponent", function () {
        return PlansTabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");

      var PlansTabComponent = /*#__PURE__*/function () {
        function PlansTabComponent(favoriteService, formBuilder, alertCtrl, loadingCtrl) {
          _classCallCheck(this, PlansTabComponent);

          this.favoriteService = favoriteService;
          this.formBuilder = formBuilder;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.planForm = {};
          this.selectedPlan = '';
          this.editMode = false;
          this.createMode = false;
          this.currentVideos = [];
          this.videoComments = {};
        }

        _createClass(PlansTabComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
              var _this41 = this;

              return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.next = 2;
                      return this.startLoading();

                    case 2:
                      this.planForm = this.formBuilder.group({
                        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                      });
                      this.favoriteService.getPlaylists().subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this41, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
                          return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                            while (1) {
                              switch (_context55.prev = _context55.next) {
                                case 0:
                                  // just in case if this function wasn't already been called by main component
                                  if (this.favoriteService.playlists.length) {
                                    this.selectedPlan = this.favoriteService.playlists[0].id;
                                  }

                                  this.stopLoading();

                                case 2:
                                case "end":
                                  return _context55.stop();
                              }
                            }
                          }, _callee55, this);
                        }));
                      }, function (error) {
                        _this41.stopLoading();
                      });

                    case 4:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
              return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      if (!this.loading) {
                        _context57.next = 2;
                        break;
                      }

                      return _context57.abrupt("return");

                    case 2:
                      _context57.next = 4;
                      return this.loadingCtrl.create();

                    case 4:
                      this.loading = _context57.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 7:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
              return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      if (this.loading) {
                        _context58.next = 2;
                        break;
                      }

                      return _context58.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;
                      this.loading = null;

                    case 5:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this);
            }));
          }
        }, {
          key: "createPlan",
          value: function createPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
              var _this42 = this;

              return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                while (1) {
                  switch (_context61.prev = _context61.next) {
                    case 0:
                      if (!(!this.planForm.value.name || this.isLoading)) {
                        _context61.next = 2;
                        break;
                      }

                      return _context61.abrupt("return");

                    case 2:
                      _context61.next = 4;
                      return this.startLoading();

                    case 4:
                      this.favoriteService.addPlaylist(this.planForm.value.name).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this42, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
                          return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                            while (1) {
                              switch (_context59.prev = _context59.next) {
                                case 0:
                                  _context59.next = 2;
                                  return this.stopLoading();

                                case 2:
                                  this.favoriteService.playlists.push(res);
                                  this.planForm.controls.name.setValue('');
                                  this.createMode = false;
                                  this.selectedPlan = res.id;
                                  this.currentVideos = [];
                                  this.favoriteService.getPlaylists().subscribe(function (res) {});

                                case 8:
                                case "end":
                                  return _context59.stop();
                              }
                            }
                          }, _callee59, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this42, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                          return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                            while (1) {
                              switch (_context60.prev = _context60.next) {
                                case 0:
                                  _context60.next = 2;
                                  return this.stopLoading();

                                case 2:
                                  this.isLoading = false;

                                case 3:
                                case "end":
                                  return _context60.stop();
                              }
                            }
                          }, _callee60, this);
                        }));
                      });

                    case 5:
                    case "end":
                      return _context61.stop();
                  }
                }
              }, _callee61, this);
            }));
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            var tempPlaylists = window.localStorage.getItem('playlists');

            if (tempPlaylists) {
              this.favoriteService.playlists = JSON.parse(tempPlaylists);

              if (this.favoriteService.playlists.length) {
                this.selectedPlan = this.favoriteService.playlists[0].id;
              }
            }
          }
        }, {
          key: "removePlan",
          value: function removePlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
              var _this43 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                while (1) {
                  switch (_context63.prev = _context63.next) {
                    case 0:
                      _context63.next = 2;
                      return this.alertCtrl.create({
                        message: 'Do you want to remove this plan?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this43.favoriteService.removePlaylist(_this43.selectedPlan).subscribe(function (res) {
                              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
                                var _this44 = this;

                                return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                                  while (1) {
                                    switch (_context62.prev = _context62.next) {
                                      case 0:
                                        this.favoriteService.playlists = this.favoriteService.playlists.filter(function (plan) {
                                          return plan.id != _this44.selectedPlan;
                                        });
                                        window.localStorage.setItem('playlists', JSON.stringify(this.favoriteService.playlists));

                                        if (this.favoriteService.playlists.length) {
                                          this.selectedPlan = this.favoriteService.playlists[0].id;
                                        } else {
                                          this.selectedPlan = '';
                                        }

                                        this.currentVideos = [];

                                      case 4:
                                      case "end":
                                        return _context62.stop();
                                    }
                                  }
                                }, _callee62, this);
                              }));
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context63.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context63.stop();
                  }
                }
              }, _callee63, this);
            }));
          }
        }, {
          key: "setEditMode",
          value: function setEditMode(mode) {
            var _this45 = this;

            this.editMode = mode;
            var tempPLan = this.favoriteService.playlists.find(function (a) {
              return a.id == _this45.selectedPlan;
            });
            this.planForm.patchValue({
              name: tempPLan.name
            });
            this.createMode = false;
          }
        }, {
          key: "setCreateMode",
          value: function setCreateMode(mode) {
            this.createMode = mode;
            this.editMode = false;
          }
        }, {
          key: "editPlan",
          value: function editPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
              var _this46 = this;

              var name;
              return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                while (1) {
                  switch (_context64.prev = _context64.next) {
                    case 0:
                      if (!(!this.planForm.value.name || this.isLoading)) {
                        _context64.next = 2;
                        break;
                      }

                      return _context64.abrupt("return");

                    case 2:
                      name = this.planForm.value.name;
                      _context64.next = 5;
                      return this.startLoading();

                    case 5:
                      this.favoriteService.editPlaylist(this.selectedPlan, name).subscribe(function (res) {
                        var temp = _this46.selectedPlan;
                        _this46.selectedPlan = '';

                        _this46.stopLoading();

                        for (var i in _this46.favoriteService.playlists) {
                          if (_this46.favoriteService.playlists[i].id == temp) {
                            _this46.favoriteService.playlists[i].name = name;
                            _this46.selectedPlan = temp;
                          }
                        }

                        ;

                        _this46.setEditMode(false);
                      }, function (err) {
                        _this46.isLoading = false;
                      });

                    case 6:
                    case "end":
                      return _context64.stop();
                  }
                }
              }, _callee64, this);
            }));
          }
        }, {
          key: "selectPlan",
          value: function selectPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
              var _this47 = this;

              return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      _context66.next = 2;
                      return this.startLoading();

                    case 2:
                      this.favoriteService.getVideosOfPlaylist(this.selectedPlan).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this47, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                          var _this48 = this;

                          return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                            while (1) {
                              switch (_context65.prev = _context65.next) {
                                case 0:
                                  this.currentVideos = res.sort(function (a, b) {
                                    return parseInt(a.order_number) > parseInt(b.order_number) ? 1 : -1;
                                  });
                                  setTimeout(function () {
                                    return _this48.stopLoading();
                                  }, 1000);
                                  window.localStorage.setItem('plan' + this.selectedPlan, JSON.stringify(this.currentVideos));

                                case 3:
                                case "end":
                                  return _context65.stop();
                              }
                            }
                          }, _callee65, this);
                        }));
                      }, function (error) {
                        _this47.stopLoading();
                      });

                    case 3:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, this);
            }));
          }
        }, {
          key: "moveUp",
          value: function moveUp(num) {
            if (num == 0) {
              return;
            }

            var temp = this.currentVideos[num];
            this.currentVideos[num] = this.currentVideos[num - 1];
            this.currentVideos[num - 1] = temp;
            this.updateOrder();
          }
        }, {
          key: "moveDown",
          value: function moveDown(num) {
            if (num == this.currentVideos.length - 1) {
              return;
            }

            var temp = this.currentVideos[num];
            this.currentVideos[num] = this.currentVideos[num + 1];
            this.currentVideos[num + 1] = temp;
            this.updateOrder();
          }
        }, {
          key: "updateOrder",
          value: function updateOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
              var promises, i;
              return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                while (1) {
                  switch (_context67.prev = _context67.next) {
                    case 0:
                      promises = [];

                      for (i = 0; i < this.currentVideos.length; i++) {
                        promises.push(this.favoriteService.editVideoOrder(this.currentVideos[i].id, i).toPromise());
                      }

                      _context67.next = 4;
                      return Promise.all(promises);

                    case 4:
                      window.localStorage.setItem('plan' + this.selectedPlan, JSON.stringify(this.currentVideos));
                      console.log('order is updated');

                    case 6:
                    case "end":
                      return _context67.stop();
                  }
                }
              }, _callee67, this);
            }));
          }
        }]);

        return PlansTabComponent;
      }();

      PlansTabComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      PlansTabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'plans-tab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./plans-tab.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans-tab/plans-tab.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./plans-tab.component.scss */
        "./src/app/components/plans-tab/plans-tab.component.scss"))["default"]]
      })], PlansTabComponent);
      /***/
    },

    /***/
    "./src/app/components/plans/plans.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/plans/plans.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPlansPlansComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".top-wrapper {\n  height: 60px;\n}\n.top-wrapper ion-button {\n  width: 50%;\n  height: 100%;\n  margin: 0px !important;\n  color: black;\n}\n.top-wrapper ion-button.active {\n  border-bottom: 4px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGFucy9wbGFucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUNRO0VBQ0ksaURBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbnMvcGxhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXdyYXBwZXIge1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/plans/plans.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/plans/plans.component.ts ***!
      \*****************************************************/

    /*! exports provided: PlansComponent */

    /***/
    function srcAppComponentsPlansPlansComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlansComponent", function () {
        return PlansComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");

      var PlansComponent = /*#__PURE__*/function () {
        function PlansComponent(favoritesService, activeRoute) {
          _classCallCheck(this, PlansComponent);

          this.favoritesService = favoritesService;
          this.activeRoute = activeRoute;
        }

        _createClass(PlansComponent, [{
          key: "bodyClicked",
          value: function bodyClicked(ev) {
            var _this49 = this;

            if (ev.target.tagName == 'TEXTAREA') {
              var rect = ev.target; // scroling to the element

              setTimeout(function () {
                _this49.mainContent.scrollToPoint(0, rect.offsetTop - 70);
              }, 1000);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this50 = this;

            this.activeRoute.params.subscribe(function (res) {
              _this50.openTab(res.tab);
            });
            this.favoritesService.getFavorites().subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "openTab",
          value: function openTab(tab) {
            this.selectedTab = tab;
          }
        }]);

        return PlansComponent;
      }();

      PlansComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      PlansComponent.propDecorators = {
        bodyClicked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['body: click', ['$event']]
        }],
        mainContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mainContent']
        }]
      };
      PlansComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-plans',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./plans.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/plans/plans.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./plans.component.scss */
        "./src/app/components/plans/plans.component.scss"))["default"]]
      })], PlansComponent);
      /***/
    },

    /***/
    "./src/app/components/podcast-content/podcast-content.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/podcast-content/podcast-content.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPodcastContentPodcastContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "video {\n  vertical-align: baseline;\n  width: 100%;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2RjYXN0LWNvbnRlbnQvcG9kY2FzdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2RjYXN0LWNvbnRlbnQvcG9kY2FzdC1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/podcast-content/podcast-content.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/podcast-content/podcast-content.component.ts ***!
      \*************************************************************************/

    /*! exports provided: PodcastContentComponent */

    /***/
    function srcAppComponentsPodcastContentPodcastContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PodcastContentComponent", function () {
        return PodcastContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var PodcastContentComponent = /*#__PURE__*/function () {
        function PodcastContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, PodcastContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.asyncSections = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          this.latestPodcasts = [];
        }

        _createClass(PodcastContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this51 = this;

            this.activeRouter.params.subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this51, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
                var _this52 = this;

                var cacheLatest;
                return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                  while (1) {
                    switch (_context69.prev = _context69.next) {
                      case 0:
                        _context69.next = 2;
                        return this.startLoading();

                      case 2:
                        this.podcastId = 'podcastSections' + res.id;
                        this.pageId = res.id; // this.latestPodcasts = window.localStorage.getItem('latestPodcasts');
                        // this.latestPodcasts = this.latestPodcasts ? JSON.parse(this.latestPodcasts) : [];

                        _context69.next = 6;
                        return this.storageService.get('latestPodcasts');

                      case 6:
                        cacheLatest = _context69.sent;
                        this.latestPodcasts = cacheLatest ? JSON.parse(cacheLatest) : [];
                        this.pageService.getSinglePage(res.id).subscribe(function (res) {
                          try {
                            _this52.pageExcerpt = _this52.pageService.parsePureExcerpt(res.pure_excerpt);
                          } catch (e) {
                            _this52.pageExcerpt = {};
                          }

                          _this52.pageInfo = {
                            clean_title: res.clean_title,
                            pure_excerpt: res.pure_excerpt,
                            id: res.id
                          };

                          try {
                            _this52.pageInfo.excerpt = _this52.pageService.parsePureExcerpt(_this52.pageInfo.pure_excerpt);
                          } catch (e) {}

                          window.localStorage.setItem('page' + _this52.pageId, JSON.stringify(_this52.pageInfo));
                        }, function (err) {
                          _this52.loadFromCache();

                          if (window.localStorage.getItem('page' + _this52.pageId)) {
                            _this52.pageInfo = JSON.parse(window.localStorage.getItem('page' + _this52.pageId));
                          }
                        });
                        this.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this52, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                            var _this53 = this;

                            var _iterator18, _step18, item, temp;

                            return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                              while (1) {
                                switch (_context68.prev = _context68.next) {
                                  case 0:
                                    if (!this.cachingService.notChangedSince(res, this.podcastId + 'date')) {
                                      _context68.next = 4;
                                      break;
                                    }

                                    this.loadFromCache();
                                    this.stopLoading();
                                    return _context68.abrupt("return");

                                  case 4:
                                    _context68.next = 6;
                                    return this.startLoading();

                                  case 6:
                                    res = res.sort(function (a, b) {
                                      return a.title.rendered > b.title.rendered ? 1 : -1;
                                    });
                                    this.sections = [];
                                    _iterator18 = _createForOfIteratorHelper(res);

                                    try {
                                      for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                                        item = _step18.value;
                                        temp = {};

                                        try {
                                          temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                                        } catch (e) {
                                          // Must not be the case at all
                                          temp.excerpt = {};
                                        }

                                        temp.content = item.content.rendered;
                                        this.sections.push(temp);
                                      }
                                    } catch (err) {
                                      _iterator18.e(err);
                                    } finally {
                                      _iterator18.f();
                                    }

                                    this.asyncSections.next(this.sections);
                                    setTimeout(function () {
                                      return _this53.stopLoading();
                                    }, 800);
                                    window.localStorage.setItem(this.podcastId, JSON.stringify(this.sections));

                                  case 13:
                                  case "end":
                                    return _context68.stop();
                                }
                              }
                            }, _callee68, this);
                          }));
                        }, function (err) {
                          _this52.stopLoading();

                          _this52.loadFromCache();
                        });

                      case 10:
                      case "end":
                        return _context69.stop();
                    }
                  }
                }, _callee69, this);
              }));
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'podcasts',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
              var _this54 = this;

              var info, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                while (1) {
                  switch (_context71.prev = _context71.next) {
                    case 0:
                      _context71.next = 2;
                      return this.startLoading();

                    case 2:
                      info = window.localStorage.getItem('page' + this.pageId);

                      if (info) {
                        this.pageInfo = JSON.parse(info);
                      }

                      if (window.localStorage.getItem(this.podcastId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(this.podcastId));
                      }

                      this.latestPodcasts = window.localStorage.getItem('latestPodcasts');
                      this.latestPodcasts = this.latestPodcasts ? JSON.parse(this.latestPodcasts) : [];

                      if (!(!this.latestPodcasts || !this.latestPodcasts.length)) {
                        _context71.next = 12;
                        break;
                      }

                      _context71.next = 10;
                      return this.storageService.get('latestPodcasts');

                    case 10:
                      cacheLatest = _context71.sent;
                      this.latestPodcasts = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 12:
                      if (this.sections.length) this.asyncSections.next(this.sections);

                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this54, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
                            return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                              while (1) {
                                switch (_context70.prev = _context70.next) {
                                  case 0:
                                    _context70.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context70.abrupt("return", _context70.sent);

                                  case 3:
                                  case "end":
                                    return _context70.stop();
                                }
                              }
                            }, _callee70, this);
                          }));
                        }, 800);
                      }

                    case 14:
                    case "end":
                      return _context71.stop();
                  }
                }
              }, _callee71, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
              return _regeneratorRuntime().wrap(function _callee72$(_context72) {
                while (1) {
                  switch (_context72.prev = _context72.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context72.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context72.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context72.stop();
                  }
                }
              }, _callee72, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
              return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                while (1) {
                  switch (_context73.prev = _context73.next) {
                    case 0:
                      if (this.loading) {
                        _context73.next = 2;
                        break;
                      }

                      return _context73.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context73.stop();
                  }
                }
              }, _callee73, this);
            }));
          }
        }]);

        return PodcastContentComponent;
      }();

      PodcastContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      PodcastContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-podcast-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./podcast-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcast-content/podcast-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./podcast-content.component.scss */
        "./src/app/components/podcast-content/podcast-content.component.scss"))["default"]]
      })], PodcastContentComponent);
      /***/
    },

    /***/
    "./src/app/components/podcasts/podcasts.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/podcasts/podcasts.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPodcastsPodcastsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2RjYXN0cy9wb2RjYXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2RjYXN0cy9wb2RjYXN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5mb290ZXItd3JhcHBlciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbGVmdDogMjUlO1xuICAgIH1cbn1cblxuLmVtYmVkLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/podcasts/podcasts.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/podcasts/podcasts.component.ts ***!
      \***********************************************************/

    /*! exports provided: PodcastsComponent */

    /***/
    function srcAppComponentsPodcastsPodcastsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PodcastsComponent", function () {
        return PodcastsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared.service */
      "./src/app/services/shared.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var PodcastsComponent = /*#__PURE__*/function () {
        function PodcastsComponent(userService, pageService, loadingCtrl, sharedService) {
          _classCallCheck(this, PodcastsComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.loadingCtrl = loadingCtrl;
          this.sharedService = sharedService;
          this.podcasts = [];
          this.planCategories = [];
          this.displayCount = 5;
          this.currentPage = 1;
          this.isInLatest = {};
          this.filteredPodcasts = [];
        }

        _createClass(PodcastsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initInternalCalls();
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "initInternalCalls",
          value: function initInternalCalls() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
              var _this55 = this;

              var res;
              return _regeneratorRuntime().wrap(function _callee75$(_context75) {
                while (1) {
                  switch (_context75.prev = _context75.next) {
                    case 0:
                      _context75.prev = 0;
                      this.startLoading();
                      _context75.next = 4;
                      return this.userService.currentUser();

                    case 4:
                      res = _context75.sent;

                      if (this.pageService.mainPages['tv-podcasts']) {
                        _context75.next = 9;
                        break;
                      }

                      this.pageService.getPageBySlug('tv-podcasts').subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this55, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
                          return _regeneratorRuntime().wrap(function _callee74$(_context74) {
                            while (1) {
                              switch (_context74.prev = _context74.next) {
                                case 0:
                                  this.pageService.mainPages['tv-podcasts'] = res[0];
                                  _context74.next = 3;
                                  return this.initPages();

                                case 3:
                                case "end":
                                  return _context74.stop();
                              }
                            }
                          }, _callee74, this);
                        }));
                      });
                      _context75.next = 11;
                      break;

                    case 9:
                      _context75.next = 11;
                      return this.initPages();

                    case 11:
                      _context75.next = 18;
                      break;

                    case 13:
                      _context75.prev = 13;
                      _context75.t0 = _context75["catch"](0);
                      _context75.next = 17;
                      return this.loadFromCache();

                    case 17:
                      console.log(_context75.t0.message);

                    case 18:
                    case "end":
                      return _context75.stop();
                  }
                }
              }, _callee75, this, [[0, 13]]);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
              return _regeneratorRuntime().wrap(function _callee76$(_context76) {
                while (1) {
                  switch (_context76.prev = _context76.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context76.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context76.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context76.stop();
                  }
                }
              }, _callee76, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
              return _regeneratorRuntime().wrap(function _callee77$(_context77) {
                while (1) {
                  switch (_context77.prev = _context77.next) {
                    case 0:
                      if (this.loading) {
                        _context77.next = 2;
                        break;
                      }

                      return _context77.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context77.stop();
                  }
                }
              }, _callee77, this);
            }));
          }
        }, {
          key: "initPages",
          value: function initPages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
              var _this56 = this;

              var _yield$this$sharedSer2, _yield$this$sharedSer3;

              return _regeneratorRuntime().wrap(function _callee78$(_context78) {
                while (1) {
                  switch (_context78.prev = _context78.next) {
                    case 0:
                      _context78.next = 2;
                      return this.startLoading();

                    case 2:
                      _context78.prev = 2;
                      _context78.next = 5;
                      return this.sharedService.getPodcasts(this.pageService, this.displayCount, this.currentPage);

                    case 5:
                      _yield$this$sharedSer2 = _context78.sent;
                      _yield$this$sharedSer3 = _slicedToArray(_yield$this$sharedSer2, 2);
                      this.filteredPodcasts = _yield$this$sharedSer3[0];
                      this.latestPodcasts = _yield$this$sharedSer3[1];
                      setTimeout(function () {
                        return _this56.stopLoading();
                      }, 500);
                      _context78.next = 16;
                      break;

                    case 12:
                      _context78.prev = 12;
                      _context78.t0 = _context78["catch"](2);
                      this.loadFromCache();
                      setTimeout(function () {
                        return _this56.stopLoading();
                      }, 500);

                    case 16:
                    case "end":
                      return _context78.stop();
                  }
                }
              }, _callee78, this, [[2, 12]]);
            }));
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            this.filteredPodcasts = this.podcasts.slice(0, this.displayCount);
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.podcasts.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
              var _iterator19, _step19, temp;

              return _regeneratorRuntime().wrap(function _callee79$(_context79) {
                while (1) {
                  switch (_context79.prev = _context79.next) {
                    case 0:
                      _context79.prev = 0;
                      _context79.next = 3;
                      return this.startLoading();

                    case 3:
                      this.podcasts = window.localStorage.getItem('podcasts');
                      this.podcasts = this.podcasts ? JSON.parse(this.podcasts) : [];
                      this.filteredPodcasts = this.podcasts.slice(0, this.displayCount);
                      this.latestPodcasts = window.localStorage.getItem('latestPodcasts');
                      this.latestPodcasts = this.latestPodcasts ? JSON.parse(this.latestPodcasts) : [];
                      window.localStorage.removeItem('latestPodcasts');
                      _iterator19 = _createForOfIteratorHelper(this.latestPodcasts);

                      try {
                        for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                          temp = _step19.value;
                          this.isInLatest[temp.id] = true;
                        }
                      } catch (err) {
                        _iterator19.e(err);
                      } finally {
                        _iterator19.f();
                      }

                      if (!(this.podcasts && this.podcasts.length)) {
                        _context79.next = 14;
                        break;
                      }

                      _context79.next = 14;
                      return this.stopLoading();

                    case 14:
                      _context79.next = 20;
                      break;

                    case 16:
                      _context79.prev = 16;
                      _context79.t0 = _context79["catch"](0);
                      _context79.next = 20;
                      return this.stopLoading();

                    case 20:
                    case "end":
                      return _context79.stop();
                  }
                }
              }, _callee79, this, [[0, 16]]);
            }));
          }
        }]);

        return PodcastsComponent;
      }();

      PodcastsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      };

      PodcastsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-podcasts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./podcasts.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/podcasts/podcasts.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./podcasts.component.scss */
        "./src/app/components/podcasts/podcasts.component.scss"))["default"]]
      })], PodcastsComponent);
      /***/
    },

    /***/
    "./src/app/components/search/search.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/search/search.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-wrapper {\n  margin-top: 15px;\n  width: 60%;\n  margin-left: 20%;\n}\n.search-wrapper ion-button {\n  width: 100%;\n}\n.open-filters-wrapper {\n  width: 60%;\n  margin-left: 20%;\n}\n.open-filters-wrapper ion-button {\n  width: 100%;\n}\n.toggle-wrapper {\n  position: relative;\n  height: 25px;\n}\n.toggle-wrapper ion-label {\n  float: right;\n  margin-top: 6px;\n  padding-right: 10px;\n}\n.toggle-wrapper ion-toggle {\n  float: right;\n}\n.result-wrapper > p {\n  width: 100%;\n  margin-top: 45px;\n}\n.list-of-all:nth-of-type(3) ion-button {\n  margin: 5px;\n  width: auto;\n  float: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtBQUNSO0FBR0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFNQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUhKO0FBT0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ub3Blbi1maWx0ZXJzLXdyYXBwZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b2dnbGUtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICBpb24tdG9nZ2xlIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLnJlc3VsdC13cmFwcGVyID4gcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNDVweDtcbn1cblxuLmxpc3Qtb2YtYWxsOm50aC1vZi10eXBlKDMpIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/search/search.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/search/search.component.ts ***!
      \*******************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(tagsService, pageService, toast) {
          _classCallCheck(this, SearchComponent);

          this.tagsService = tagsService;
          this.pageService = pageService;
          this.toast = toast;
          this.tags = [];
          this.levels = ['Beginner', 'Intermediate', 'Advanced'];
          this.categories = [{
            name: 'Singles'
          }, {
            name: 'Doubles'
          }, {
            name: 'Mixed doubles'
          }];
          this.selectedCategories = {};
          this.selectedLevels = {};
          this.selectedTags = {};
          this.loading = false;
          this.categoriesByName = {};
          this.displayCount = 5;
          this.currentPage = 1;
          this.allRecords = [];
          this.pagesRoutesById = [];
          this.selectedTagLength = 0;
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this57 = this;

            var temp = window.localStorage.getItem('tags');

            if (temp) {
              this.tags = JSON.parse(temp);
            }

            temp = window.localStorage.getItem('categoriesByName');
            ;

            if (temp) {
              this.categoriesByName = JSON.parse(temp);
            }

            this.tagsService.getTags(1, 100).subscribe(function (res) {
              var tempRecords = [];

              var _iterator20 = _createForOfIteratorHelper(res),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var record = _step20.value;
                  tempRecords.push({
                    name: record.name,
                    id: record.id
                  });
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }

              _this57.tags = tempRecords;
              window.localStorage.setItem('tags', JSON.stringify(_this57.tags));
            });
            this.tagsService.getCategories().subscribe(function (res) {
              var _iterator21 = _createForOfIteratorHelper(res),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var cat = _step21.value;
                  _this57.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this57.categoriesByName));
            });
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            var res = !this.selectedCategories[cat];

            for (var i in this.selectedCategories) {
              this.selectedCategories[i] = false;
            }

            this.selectedCategories[cat] = res;
          }
        }, {
          key: "toggleLevel",
          value: function toggleLevel(level) {
            var res = !this.selectedLevels[level];

            for (var i in this.selectedLevels) {
              this.selectedLevels[i] = false;
            }

            this.selectedLevels[level] = res;
          }
        }, {
          key: "toggleTag",
          value: function toggleTag(tagId) {
            this.selectedTags[tagId] = !this.selectedTags[tagId];
          }
        }, {
          key: "search",
          value: function search() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
              var valid, tempTags, i, tempCats, _i2, levelsNotSelected, _i3, query;

              return _regeneratorRuntime().wrap(function _callee80$(_context80) {
                while (1) {
                  switch (_context80.prev = _context80.next) {
                    case 0:
                      if (!this.loading) {
                        _context80.next = 2;
                        break;
                      }

                      return _context80.abrupt("return");

                    case 2:
                      _context80.next = 4;
                      return this.isValid();

                    case 4:
                      valid = _context80.sent;

                      if (valid) {
                        _context80.next = 7;
                        break;
                      }

                      return _context80.abrupt("return");

                    case 7:
                      this.loading = true;
                      tempTags = [];

                      for (i in this.selectedTags) {
                        if (this.selectedTags[i]) {
                          tempTags.push(i);
                        }
                      }

                      this.selectedTagLength = tempTags.length;
                      tempCats = [];

                      for (_i2 in this.selectedCategories) {
                        if (this.selectedCategories[_i2] && this.categoriesByName[_i2]) {
                          tempCats.push(this.categoriesByName[_i2].id);
                        }
                      }

                      levelsNotSelected = true;

                      for (_i3 in this.selectedLevels) {
                        if (this.selectedLevels[_i3]) {
                          levelsNotSelected = false;
                        }
                      } // If nothing is selected then everything must be included
                      // if(tempCats.length == 0) {
                      //   console.log(Object.keys(this.categoriesByName));
                      //   // for(let i of this.categoriesByName) {
                      //   //   if(levelsNotSelected && this.categoriesByName[i]) {
                      //   //     tempCats.push(this.categoriesByName[i].id);
                      //   //   }
                      //   // }
                      //   // if(levelsNotSelected && this.categoriesByName['Other content']) {
                      //   //   tempCats.push(this.categoriesByName['Other content'].id);
                      //   // }
                      // }


                      console.log(this.categoriesByName['Other content'], tempCats, levelsNotSelected, this.categories);
                      query = {
                        categories: tempCats.join(','),
                        tags: tempTags.join(',')
                      };

                      if (!query.tags) {
                        delete query.tags;
                      }

                      if (!query.categories) {
                        delete query.categories;
                      }

                      console.log(query);
                      this.handleQuery(query, levelsNotSelected);

                    case 21:
                    case "end":
                      return _context80.stop();
                  }
                }
              }, _callee80, this);
            }));
          }
        }, {
          key: "handleQuery",
          value: function handleQuery(query, levelsNotSelected) {
            var _this58 = this;

            var previousPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var previousRes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            this.pageService.getPagesByQuery(query, previousPage, 100).subscribe(function (queryRes) {
              var res = [].concat(_toConsumableArray(previousRes), _toConsumableArray(queryRes));
              var tempRes = [];

              var _iterator22 = _createForOfIteratorHelper(res),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var page = _step22.value;
                  var temp = page;

                  try {
                    temp.excerpt = _this58.pageService.parsePureExcerpt(page.pure_excerpt);
                  } catch (e) {
                    // Must not be the case at all
                    temp.excerpt = {};
                  }

                  if (temp.parent) {
                    temp.parent = _this58.pageService.mainPagesById[temp.parent];
                  }

                  if (!levelsNotSelected) {
                    if (temp.excerpt.category && _this58.selectedLevels[temp.excerpt.category]) {
                      if (_this58.compareTags(temp.tags)) {
                        tempRes.push(temp);
                      }
                    }
                  } else {
                    if (_this58.compareTags(temp.tags)) {
                      tempRes.push(temp);
                    }
                  }
                } // Putting limit to 4 so we don't load more than 300 records from db

              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              if (queryRes.length === 100 && previousPage < 4) {
                return _this58.handleQuery(query, levelsNotSelected, previousPage + 1, tempRes);
              }

              _this58.loading = false;
              _this58.allRecords = tempRes;
              _this58.filteredResult = _this58.allRecords.slice(0, _this58.displayCount);
              _this58.hidenSearch = true;
            });
          }
        }, {
          key: "isValid",
          value: function isValid() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
              var isValid, i, toastOps, _i4, _i5, toast;

              return _regeneratorRuntime().wrap(function _callee81$(_context81) {
                while (1) {
                  switch (_context81.prev = _context81.next) {
                    case 0:
                      isValid = false;
                      _context81.t0 = _regeneratorRuntime().keys(this.selectedCategories);

                    case 2:
                      if ((_context81.t1 = _context81.t0()).done) {
                        _context81.next = 9;
                        break;
                      }

                      i = _context81.t1.value;

                      if (!this.selectedCategories[i]) {
                        _context81.next = 7;
                        break;
                      }

                      isValid = true;
                      return _context81.abrupt("break", 9);

                    case 7:
                      _context81.next = 2;
                      break;

                    case 9:
                      toastOps = {
                        color: 'danger',
                        position: 'bottom',
                        duration: 2500,
                        message: 'No item is selected'
                      };
                      _context81.t2 = _regeneratorRuntime().keys(this.selectedLevels);

                    case 11:
                      if ((_context81.t3 = _context81.t2()).done) {
                        _context81.next = 18;
                        break;
                      }

                      _i4 = _context81.t3.value;

                      if (!this.selectedLevels[_i4]) {
                        _context81.next = 16;
                        break;
                      }

                      isValid = true;
                      return _context81.abrupt("break", 18);

                    case 16:
                      _context81.next = 11;
                      break;

                    case 18:
                      _context81.t4 = _regeneratorRuntime().keys(this.selectedTags);

                    case 19:
                      if ((_context81.t5 = _context81.t4()).done) {
                        _context81.next = 26;
                        break;
                      }

                      _i5 = _context81.t5.value;

                      if (!this.selectedTags[_i5]) {
                        _context81.next = 24;
                        break;
                      }

                      isValid = true;
                      return _context81.abrupt("break", 26);

                    case 24:
                      _context81.next = 19;
                      break;

                    case 26:
                      if (isValid) {
                        _context81.next = 33;
                        break;
                      }

                      _context81.next = 29;
                      return this.toast.create(toastOps);

                    case 29:
                      toast = _context81.sent;
                      toast.present();
                      this.loading = false;
                      return _context81.abrupt("return", false);

                    case 33:
                      return _context81.abrupt("return", true);

                    case 34:
                    case "end":
                      return _context81.stop();
                  }
                }
              }, _callee81, this);
            }));
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;

            if (this.displayCount == this.allRecords.length) {
              this.currentPage++;
            }

            this.filteredResult = this.allRecords.slice(0, this.displayCount);
          }
          /**
           * Comparing given tags to selected ones to make sure all selected tags are present
           * @param tags arrray of tags
           */

        }, {
          key: "compareTags",
          value: function compareTags(tags) {
            if (!this.selectedTagLength) {
              return true;
            }

            var totalTagCount = 0;

            var _iterator23 = _createForOfIteratorHelper(tags),
                _step23;

            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var tagId = _step23.value;

                if (this.selectedTags[tagId]) {
                  totalTagCount++;
                }
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }

            if (this.selectedTagLength == totalTagCount) {
              return true;
            }

            return false;
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.component.scss */
        "./src/app/components/search/search.component.scss"))["default"]]
      })], SearchComponent);
      /***/
    },

    /***/
    "./src/app/components/settings/settings.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/settings/settings.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toggle {\n  float: right;\n}\n\n.left-side {\n  display: table-cell;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.left-side p {\n  font-size: 14px !important;\n}\n\n.right-side {\n  display: table-cell;\n  width: -moz-max-content;\n  width: max-content;\n  padding-left: 10px;\n}\n\n.right-side p {\n  font-size: 14px !important;\n}\n\n.bottom-wrapper {\n  margin-top: 15px;\n}\n\n.bottom-wrapper a {\n  width: 100%;\n  padding: 15px;\n  text-transform: uppercase;\n  background: linear-gradient(111deg, #09bbec 0%, #3becc0 100%) !important;\n  display: block;\n  text-align: center;\n  color: white;\n  border-radius: 10px;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.logout-wrapper {\n  margin-top: 40px;\n}\n\n.logout-wrapper ion-button {\n  width: 40%;\n  font-weight: bold;\n  margin: 0 auto;\n  display: block;\n  font-size: 16px;\n}\n\n.notification-wrapper p {\n  max-width: 60%;\n  margin: 3px 0;\n}\n\n.notification-wrapper p:nth-of-type(1) {\n  margin-top: 10px;\n}\n\n.user-info-wrapper {\n  margin-top: 60px;\n}\n\n.user-info-wrapper > p {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0ksMEJBQUE7QUFDUjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUk7RUFDSSwwQkFBQTtBQUFSOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3RUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBSUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGUjs7QUFPSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBSlI7O0FBTVE7RUFDSSxnQkFBQTtBQUpaOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFRSTtFQUNJLGtCQUFBO0FBTlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcblxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5yaWdodC1zaWRlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYm90dG9tLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICBhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTFkZWcsIzA5YmJlYyAwJSwjM2JlY2MwIDEwMCUpICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi5sb2dvdXQtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG4ubm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICAgIHAge1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luOiAzcHggMDtcblxuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi51c2VyLWluZm8td3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcblxuICAgICY+cCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/settings/settings.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/settings/settings.component.ts ***!
      \***********************************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function srcAppComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! cordova-plugin-fcm-with-dependecy-updated/ionic */
      "./node_modules/cordova-plugin-fcm-with-dependecy-updated/ionic/FCM.js");
      /* harmony import */


      var _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/android-fingerprint-auth/ngx */
      "./node_modules/@ionic-native/android-fingerprint-auth/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/touch-id/ngx */
      "./node_modules/@ionic-native/touch-id/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(userService, android, touchId, storageService) {
          _classCallCheck(this, SettingsComponent);

          this.userService = userService;
          this.android = android;
          this.touchId = touchId;
          this.storageService = storageService;
          this.userInfo = {};
          this.sub = {};
        }

        _createClass(SettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this59 = this;

            this.loadFromCache();
            this.userService.getMe().subscribe(function (res) {
              _this59.userInfo = res;
              window.localStorage.setItem('userInfo', JSON.stringify(_this59.userInfo));
            });
            this.userService.getSubscriptions().subscribe(function (res) {
              _this59.sub = res['subscriptions'];
              window.localStorage.setItem('sub', _this59.sub);
            });
            this.android.isAvailable().then(function (res) {
              _this59.scanAuthAvailable = res.isAvailable;
            });
            this.touchId.isAvailable().then(function (res) {
              console.log('TouchID is available!', res);
              _this59.scanAuthAvailable = true;
            }, function (err) {
              return console.error('TouchID is not available', err);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee82$(_context82) {
                while (1) {
                  switch (_context82.prev = _context82.next) {
                    case 0:
                      _context82.next = 2;
                      return this.storageService.get('notificationsEnabled');

                    case 2:
                      this.notificationsEnabled = !!_context82.sent;
                      _context82.next = 5;
                      return this.storageService.get('scanAuthEnabled');

                    case 5:
                      this.scanAuthEnabled = !!_context82.sent;
                      console.log('settings', this.notificationsEnabled, this.scanAuthEnabled);
                      temp = window.localStorage.getItem('userInfo');

                      if (temp) {
                        this.userInfo = JSON.parse(temp);
                      }

                      try {
                        temp = window.localStorage.getItem('sub');

                        if (temp) {
                          this.sub = temp;
                        }
                      } catch (e) {
                        console.log('error occured parsing sub');
                      }

                    case 10:
                    case "end":
                      return _context82.stop();
                  }
                }
              }, _callee82, this);
            }));
          }
        }, {
          key: "updateSettings",
          value: function updateSettings() {
            if (!this.notificationsEnabled) {
              window.localStorage.removeItem('notificationsEnabled');
              this.storageService.set('notificationsEnabled', false);
              cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_3__["FCM"].unsubscribeFromTopic('all-active');
            } else {
              window.localStorage.setItem('notificationsEnabled', 'ture');
              this.storageService.set('notificationsEnabled', true);
              cordova_plugin_fcm_with_dependecy_updated_ionic__WEBPACK_IMPORTED_MODULE_3__["FCM"].subscribeToTopic('all-active');
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.userService.logout(true);
          }
        }, {
          key: "updateAuthSettings",
          value: function updateAuthSettings() {
            if (!this.scanAuthEnabled) {
              window.localStorage.removeItem('scanAuthEnabled');
              this.storageService.set('scanAuthEnabled', false);
            } else {
              window.localStorage.setItem('scanAuthEnabled', 'ture');
              this.storageService.set('scanAuthEnabled', true);
            }
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_native_android_fingerprint_auth_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidFingerprintAuth"]
        }, {
          type: _ionic_native_touch_id_ngx__WEBPACK_IMPORTED_MODULE_5__["TouchID"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      };

      SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./settings.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./settings.component.scss */
        "./src/app/components/settings/settings.component.scss"))["default"]]
      })], SettingsComponent);
      /***/
    },

    /***/
    "./src/app/components/tactical-lesson-content/tactical-lesson-content.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/tactical-lesson-content/tactical-lesson-content.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTacticalLessonContentTacticalLessonContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFjdGljYWwtbGVzc29uLWNvbnRlbnQvdGFjdGljYWwtbGVzc29uLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/tactical-lesson-content/tactical-lesson-content.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/tactical-lesson-content/tactical-lesson-content.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TacticalLessonContentComponent */

    /***/
    function srcAppComponentsTacticalLessonContentTacticalLessonContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TacticalLessonContentComponent", function () {
        return TacticalLessonContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var TacticalLessonContentComponent = /*#__PURE__*/function () {
        function TacticalLessonContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, TacticalLessonContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.asyncSections = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          this.latestTacticalLessons = [];
          this.asynLatestTacticalLessons = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }

        _createClass(TacticalLessonContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this60 = this;

            this.activeRouter.params.subscribe(function (res) {
              _this60.startLoading();

              _this60.pageId = res.id;
              var tacticalId = 'tacticalSections' + _this60.pageId;

              _this60.pageService.getSinglePage(res.id).subscribe(function (res) {
                try {
                  _this60.pageExcerpt = _this60.pageService.parsePureExcerpt(res.pure_excerpt);
                } catch (e) {
                  _this60.pageExcerpt = {};
                }

                _this60.pageInfo = {
                  clean_title: res.clean_title,
                  pure_excerpt: res.pure_excerpt,
                  id: res.id
                };

                try {
                  _this60.pageInfo.excerpt = _this60.pageService.parsePureExcerpt(_this60.pageInfo.pure_excerpt);
                } catch (e) {}

                window.localStorage.setItem('page' + _this60.pageId, JSON.stringify(_this60.pageInfo));
              });

              _this60.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this60, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
                  var _this61 = this;

                  var _iterator24, _step24, item, temp, cacheLatest;

                  return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                    while (1) {
                      switch (_context84.prev = _context84.next) {
                        case 0:
                          // if(res[0]) {
                          //   if (this.cachingService.notChangedSince(res, tacticalId + 'date')) {
                          //     this.loadFromCache();
                          //     this.stopLoading();
                          //     return ;
                          //   }
                          // }
                          res = res.sort(function (a, b) {
                            return a.title.rendered > b.title.rendered ? 1 : -1;
                          });
                          this.sections = [];
                          _iterator24 = _createForOfIteratorHelper(res);

                          try {
                            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                              item = _step24.value;
                              temp = {};

                              try {
                                temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                              } catch (e) {
                                // Must not be the case at all
                                temp.excerpt = {};
                              }

                              temp.content = item.content.rendered;
                              this.sections.push(temp);
                            }
                          } catch (err) {
                            _iterator24.e(err);
                          } finally {
                            _iterator24.f();
                          }

                          this.asyncSections.next(this.sections); // setTimeout(async () => {
                          // const cacheLatest = window.localStorage.getItem('latestTacticalLessons');
                          // this.latestTacticalLessons = cacheLatest ? JSON.parse(cacheLatest) : []; 

                          _context84.next = 7;
                          return this.storageService.get('latestTacticalLessons');

                        case 7:
                          cacheLatest = _context84.sent;
                          this.latestTacticalLessons = cacheLatest ? JSON.parse(cacheLatest) : [];
                          this.asynLatestTacticalLessons.next(this.latestTacticalLessons); // }, 1000);

                          setTimeout(function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this61, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
                              return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                                while (1) {
                                  switch (_context83.prev = _context83.next) {
                                    case 0:
                                      _context83.next = 2;
                                      return this.stopLoading();

                                    case 2:
                                      return _context83.abrupt("return", _context83.sent);

                                    case 3:
                                    case "end":
                                      return _context83.stop();
                                  }
                                }
                              }, _callee83, this);
                            }));
                          }, 800);
                          window.localStorage.setItem(tacticalId, JSON.stringify(this.sections));

                        case 12:
                        case "end":
                          return _context84.stop();
                      }
                    }
                  }, _callee84, this);
                }));
              }, function (err) {
                _this60.stopLoading();

                _this60.loadFromCache();
              });
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'tactical-lessons',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
              var _this62 = this;

              var tacticalId, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee86$(_context86) {
                while (1) {
                  switch (_context86.prev = _context86.next) {
                    case 0:
                      _context86.next = 2;
                      return this.startLoading();

                    case 2:
                      tacticalId = 'tacticalSections' + this.pageId;

                      if (window.localStorage.getItem(tacticalId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(tacticalId));
                      }

                      if ((_a = this.sections) === null || _a === void 0 ? void 0 : _a.length) this.asyncSections.next(this.sections);

                      if (window.localStorage.getItem('page' + this.pageId)) {
                        this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
                      }

                      this.latestTacticalLessons = window.localStorage.getItem('latestTacticalLessons');
                      this.latestTacticalLessons = this.latestTacticalLessons ? JSON.parse(this.latestTacticalLessons) : [];

                      if (!(!this.latestTacticalLessons || !this.latestTacticalLessons.length)) {
                        _context86.next = 13;
                        break;
                      }

                      _context86.next = 11;
                      return this.storageService.get('latestTacticalLessons');

                    case 11:
                      cacheLatest = _context86.sent;
                      this.latestTacticalLessons = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 13:
                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this62, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
                            return _regeneratorRuntime().wrap(function _callee85$(_context85) {
                              while (1) {
                                switch (_context85.prev = _context85.next) {
                                  case 0:
                                    _context85.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context85.abrupt("return", _context85.sent);

                                  case 3:
                                  case "end":
                                    return _context85.stop();
                                }
                              }
                            }, _callee85, this);
                          }));
                        }, 800);
                      }

                    case 14:
                    case "end":
                      return _context86.stop();
                  }
                }
              }, _callee86, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee87() {
              return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                while (1) {
                  switch (_context87.prev = _context87.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context87.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context87.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context87.stop();
                  }
                }
              }, _callee87, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee88() {
              return _regeneratorRuntime().wrap(function _callee88$(_context88) {
                while (1) {
                  switch (_context88.prev = _context88.next) {
                    case 0:
                      if (this.loading) {
                        _context88.next = 2;
                        break;
                      }

                      return _context88.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context88.stop();
                  }
                }
              }, _callee88, this);
            }));
          }
        }]);

        return TacticalLessonContentComponent;
      }();

      TacticalLessonContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      TacticalLessonContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tactical-lesson-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tactical-lesson-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lesson-content/tactical-lesson-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tactical-lesson-content.component.scss */
        "./src/app/components/tactical-lesson-content/tactical-lesson-content.component.scss"))["default"]]
      })], TacticalLessonContentComponent);
      /***/
    },

    /***/
    "./src/app/components/tactical-lessons/tactical-lessons.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/tactical-lessons/tactical-lessons.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTacticalLessonsTacticalLessonsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWN0aWNhbC1sZXNzb25zL3RhY3RpY2FsLWxlc3NvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFSOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFjdGljYWwtbGVzc29ucy90YWN0aWNhbC1sZXNzb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgfVxufVxuXG4uZW1iZWQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbiAgXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/tactical-lessons/tactical-lessons.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/tactical-lessons/tactical-lessons.component.ts ***!
      \***************************************************************************/

    /*! exports provided: TacticalLessonsComponent */

    /***/
    function srcAppComponentsTacticalLessonsTacticalLessonsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TacticalLessonsComponent", function () {
        return TacticalLessonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var TacticalLessonsComponent = /*#__PURE__*/function () {
        function TacticalLessonsComponent(userService, pageService, tagsService, loadingCtrl) {
          _classCallCheck(this, TacticalLessonsComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.tagsService = tagsService;
          this.loadingCtrl = loadingCtrl;
          this.tacticalLessons = [];
          this.planCategories = [];
          this.categoryNames = ['Beginner', 'Intermediate', 'Advanced'];
          this.displayCount = 5;
          this.currentPage = 1;
          this.pageCategories = [{
            name: 'Singles'
          }, {
            name: 'Doubles'
          }, {
            name: 'Mixed doubles'
          }];
          this.selectedPageCategories = {};
          this.categoriesByName = {};
          this.filteredTacticalLessons = [];
          this.allFiltered = [];
        }

        _createClass(TacticalLessonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this63 = this;

            this.loadFromCache();
            this.userService.getMe().subscribe(function (res) {
              if (!_this63.pageService.mainPages['tactical-lessons']) {
                _this63.pageService.getPageBySlug('tactical-lessons').subscribe(function (res) {
                  _this63.pageService.mainPages['tactical-lessons'] = res[0];

                  _this63.initPages();
                });
              } else {
                _this63.initPages();
              }
            });
            this.tagsService.getCategories().subscribe(function (res) {
              // this.pageCategories = res;
              var _iterator25 = _createForOfIteratorHelper(res),
                  _step25;

              try {
                for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                  var cat = _step25.value;
                  _this63.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator25.e(err);
              } finally {
                _iterator25.f();
              }

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this63.categoriesByName));
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var _this64 = this;

            this.pageService.getPageByParent(this.pageService.mainPages['tactical-lessons'].id, this.currentPage, 50).subscribe(function (res) {
              _this64.tacticalLessons = [];
              var latestDate = window.localStorage.getItem('latestCreatedTactialLesson');

              if (latestDate != res[0].date) {
                window.localStorage.setItem('latestCreatedTactialLesson', res[0].date);

                _this64.startLoading();
              }

              _this64.tacticalLessons = [];
              _this64.latestAdvanced = [];
              _this64.latestBeginner = [];
              _this64.latestIntermediate = [];

              var _iterator26 = _createForOfIteratorHelper(res),
                  _step26;

              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var tp = _step26.value;

                  _this64.tacticalLessons.push(_this64.parseItem(tp));
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }

              _this64.applyFilters();

              setTimeout(function () {
                return _this64.stopLoading();
              }, 500);
              window.localStorage.setItem('latestAdvancedTactical', JSON.stringify(_this64.latestAdvanced ? _this64.latestAdvanced : []));
              window.localStorage.setItem('latestBeginnerTactical', JSON.stringify(_this64.latestBeginner ? _this64.latestBeginner : []));
              window.localStorage.setItem('latestIntermediateTactical', JSON.stringify(_this64.latestIntermediate ? _this64.latestIntermediate : []));
              window.localStorage.setItem('tacticalLessons', JSON.stringify(_this64.tacticalLessons ? _this64.tacticalLessons : []));
            });
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "togglePageCategory",
          value: function togglePageCategory(cat) {
            var temp = this.categoriesByName[cat];
            this.selectedPageCategories[temp.id] = !this.selectedPageCategories[temp.id];
            this.applyFilters();
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var _this65 = this;

            var allPlanDeselected = true;
            var allPageDeselected = true;

            for (var i in this.planCategories) {
              if (this.planCategories[i]) {
                allPlanDeselected = false;
                break;
              }
            }

            for (var _i6 in this.selectedPageCategories) {
              if (this.selectedPageCategories[_i6]) {
                allPageDeselected = false;
                break;
              }
            }

            if (this.categoryNames.length == 0 || allPageDeselected && allPlanDeselected) {
              this.allFiltered = this.tacticalLessons;
              this.filteredTacticalLessons = this.allFiltered.slice(0, this.displayCount);
              return;
            }

            this.allFiltered = this.tacticalLessons.filter(function (tp) {
              var tempRes = true;

              if (tp.excerpt.category) {
                tempRes = allPlanDeselected || _this65.planCategories[tp.excerpt.category];
              }

              var isExist = _this65.findIfExists(_this65.selectedPageCategories, tp.categories);

              tempRes = tempRes && (allPageDeselected || isExist);
              return tempRes;
            });
            this.filteredTacticalLessons = this.allFiltered.slice(0, this.displayCount);
          }
        }, {
          key: "findIfExists",
          value: function findIfExists(obj, arr) {
            var keys = Object.keys(obj);
            var res = keys.filter(function (key) {
              var index = arr.findIndex(function (x) {
                return x == key && obj[key];
              });

              if (index !== -1) {
                return true;
              } else {
                return false;
              }
            });
            if (res.length) return true;
            return false;
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
              return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                while (1) {
                  switch (_context89.prev = _context89.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context89.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context89.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context89.stop();
                  }
                }
              }, _callee89, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
              return _regeneratorRuntime().wrap(function _callee90$(_context90) {
                while (1) {
                  switch (_context90.prev = _context90.next) {
                    case 0:
                      if (this.loading) {
                        _context90.next = 2;
                        break;
                      }

                      return _context90.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context90.stop();
                  }
                }
              }, _callee90, this);
            }));
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;
            temp.categories = item.categories;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (temp.excerpt.category) {
              // Adding first 5 by any category
              switch (temp.excerpt.category) {
                case 'Beginner':
                  if (!this.latestBeginner) {
                    this.latestBeginner = [temp];
                  } else {
                    if (this.latestBeginner.length < 5) {
                      this.latestBeginner.push(temp);
                    }
                  }

                  break;

                case 'Intermediate':
                  if (!this.latestIntermediate) {
                    this.latestIntermediate = [temp];
                  } else {
                    if (this.latestIntermediate.length < 5) {
                      this.latestIntermediate.push(temp);
                    }
                  }

                  break;

                case 'Advanced':
                  if (!this.latestAdvanced) {
                    this.latestAdvanced = [temp];
                  } else {
                    if (this.latestAdvanced.length < 5) {
                      this.latestAdvanced.push(temp);
                    }
                  }

                  break;
              }
            }

            return temp;
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.tacticalLessons.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "isCatSelected",
          value: function isCatSelected(cat) {
            if (!this.categoriesByName[cat]) {
              return;
            }

            return this.selectedPageCategories[this.categoriesByName[cat].id];
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee91() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee91$(_context91) {
                while (1) {
                  switch (_context91.prev = _context91.next) {
                    case 0:
                      _context91.next = 2;
                      return this.startLoading();

                    case 2:
                      temp = window.localStorage.getItem('categoriesByName');

                      if (temp) {
                        this.categoriesByName = JSON.parse(temp);
                      }

                      _context91.prev = 4;
                      this.tacticalLessons = window.localStorage.getItem('tacticalLessons');
                      this.tacticalLessons = this.tacticalLessons ? JSON.parse(this.tacticalLessons) : [];
                      this.applyFilters();
                      this.latestAdvanced = window.localStorage.getItem('latestAdvancedTactical');
                      this.latestAdvanced = this.latestAdvanced ? JSON.parse(this.latestAdvanced) : [];
                      this.latestIntermediate = window.localStorage.getItem('latestIntermediateTactical');
                      this.latestIntermediate = this.latestIntermediate ? JSON.parse(this.latestIntermediate) : [];
                      this.latestBeginner = window.localStorage.getItem('latestBeginnerTactical');
                      this.latestBeginner = this.latestBeginner ? JSON.parse(this.latestBeginner) : [];

                      if (!(this.tacticalLessons && this.tacticalLessons.length)) {
                        _context91.next = 17;
                        break;
                      }

                      _context91.next = 17;
                      return this.stopLoading();

                    case 17:
                      _context91.next = 23;
                      break;

                    case 19:
                      _context91.prev = 19;
                      _context91.t0 = _context91["catch"](4);
                      _context91.next = 23;
                      return this.stopLoading();

                    case 23:
                    case "end":
                      return _context91.stop();
                  }
                }
              }, _callee91, this, [[4, 19]]);
            }));
          }
        }]);

        return TacticalLessonsComponent;
      }();

      TacticalLessonsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      TacticalLessonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tactical-lessons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tactical-lessons.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tactical-lessons/tactical-lessons.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tactical-lessons.component.scss */
        "./src/app/components/tactical-lessons/tactical-lessons.component.scss"))["default"]]
      })], TacticalLessonsComponent);
      /***/
    },

    /***/
    "./src/app/components/training-plans-popover/training-plans-popover.component.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/training-plans-popover/training-plans-popover.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTrainingPlansPopoverTrainingPlansPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form {\n  width: 100%;\n}\n\ni {\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wbGFucy1wb3BvdmVyL3RyYWluaW5nLXBsYW5zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wbGFucy1wb3BvdmVyL3RyYWluaW5nLXBsYW5zLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/training-plans-popover/training-plans-popover.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/training-plans-popover/training-plans-popover.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: TrainingPlansPopoverComponent */

    /***/
    function srcAppComponentsTrainingPlansPopoverTrainingPlansPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrainingPlansPopoverComponent", function () {
        return TrainingPlansPopoverComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");

      var TrainingPlansPopoverComponent = /*#__PURE__*/function () {
        function TrainingPlansPopoverComponent(favoriteService, toast, formBuilder, popoover, alertController) {
          _classCallCheck(this, TrainingPlansPopoverComponent);

          this.favoriteService = favoriteService;
          this.toast = toast;
          this.formBuilder = formBuilder;
          this.popoover = popoover;
          this.alertController = alertController;
          this.planForm = {};
          this.loading = false;
        }

        _createClass(TrainingPlansPopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.planForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
          }
        }, {
          key: "createPlan",
          value: function createPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
              var _this66 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee92$(_context92) {
                while (1) {
                  switch (_context92.prev = _context92.next) {
                    case 0:
                      _context92.next = 2;
                      return this.alertController.create({
                        header: 'Enter plan name',
                        inputs: [{
                          name: 'name',
                          type: 'text',
                          placeholder: 'Plan name'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary'
                        }, {
                          text: 'Ok',
                          handler: function handler(res) {
                            if (!res.name) {
                              return;
                            }

                            console.log(res);
                            _this66.loading = true;

                            _this66.favoriteService.addPlaylist(res.name).subscribe(function (res) {
                              _this66.planForm.controls.name.setValue('');

                              _this66.favoriteService.getPlaylists().subscribe(function (res) {
                                _this66.loading = false;
                              });
                            }, function (err) {
                              _this66.loading = false;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context92.sent;
                      _context92.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context92.stop();
                  }
                }
              }, _callee92, this);
            }));
          }
        }, {
          key: "selectPlan",
          value: function selectPlan(id) {
            var _this67 = this;

            if (this.favoriteService.playlistsById[id].videoIds.includes(this.videoId)) {
              this.popoover.dismiss();
              console.log(this.favoriteService.playlistsById[id]);
              return;
            }

            this.favoriteService.addVideoToPlaylist(this.videoId, id).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this67, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
                var toastOps, toast;
                return _regeneratorRuntime().wrap(function _callee93$(_context93) {
                  while (1) {
                    switch (_context93.prev = _context93.next) {
                      case 0:
                        toastOps = {
                          color: 'success',
                          position: 'bottom',
                          duration: 2500,
                          message: 'Video is added to the playlist'
                        };
                        _context93.next = 3;
                        return this.toast.create(toastOps);

                      case 3:
                        toast = _context93.sent;
                        toast.present();
                        this.loading = false;

                      case 6:
                      case "end":
                        return _context93.stop();
                    }
                  }
                }, _callee93, this);
              }));
            });
            this.popoover.dismiss();
          }
        }]);

        return TrainingPlansPopoverComponent;
      }();

      TrainingPlansPopoverComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      TrainingPlansPopoverComponent.propDecorators = {
        videoId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      TrainingPlansPopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-plans-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./training-plans-popover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-plans-popover/training-plans-popover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./training-plans-popover.component.scss */
        "./src/app/components/training-plans-popover/training-plans-popover.component.scss"))["default"]]
      })], TrainingPlansPopoverComponent);
      /***/
    },

    /***/
    "./src/app/components/training-program-content/training-program-content.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/training-program-content/training-program-content.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTrainingProgramContentTrainingProgramContentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhaW5pbmctcHJvZ3JhbS1jb250ZW50L3RyYWluaW5nLXByb2dyYW0tY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/training-program-content/training-program-content.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/training-program-content/training-program-content.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: TrainingProgramContentComponent */

    /***/
    function srcAppComponentsTrainingProgramContentTrainingProgramContentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrainingProgramContentComponent", function () {
        return TrainingProgramContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/storage.service */
      "./src/app/services/storage.service.ts");

      var TrainingProgramContentComponent = /*#__PURE__*/function () {
        function TrainingProgramContentComponent(pageService, activeRouter, favoritesService, loadingCtrl, cachingService, storageService) {
          _classCallCheck(this, TrainingProgramContentComponent);

          this.pageService = pageService;
          this.activeRouter = activeRouter;
          this.favoritesService = favoritesService;
          this.loadingCtrl = loadingCtrl;
          this.cachingService = cachingService;
          this.storageService = storageService;
          this.asyncSections = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
          this.latestTrainingPrograms = [];
          this.asyncLatestTrainingPrograms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        }

        _createClass(TrainingProgramContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this68 = this;

            this.activeRouter.params.subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this68, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee96() {
                var _this69 = this;

                var trainingId, cacheLatest;
                return _regeneratorRuntime().wrap(function _callee96$(_context96) {
                  while (1) {
                    switch (_context96.prev = _context96.next) {
                      case 0:
                        this.startLoading();
                        trainingId = 'trainingSections' + res.id;
                        this.pageId = res.id;
                        this.pageService.getSinglePage(res.id).subscribe(function (res) {
                          try {
                            _this69.pageExcerpt = _this69.pageService.parsePureExcerpt(res.pure_excerpt);
                          } catch (e) {
                            _this69.pageExcerpt = {};
                          }

                          _this69.pageInfo = {
                            clean_title: res.clean_title,
                            pure_excerpt: res.pure_excerpt,
                            id: res.id
                          };

                          try {
                            _this69.pageInfo.excerpt = _this69.pageService.parsePureExcerpt(_this69.pageInfo.pure_excerpt);
                          } catch (e) {}

                          window.localStorage.setItem('page' + _this69.pageId, JSON.stringify(_this69.pageInfo));
                        });
                        this.pageService.getPageByParent(res.id, 1, 50).subscribe(function (res) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this69, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
                            var _this70 = this;

                            var _iterator27, _step27, item, temp;

                            return _regeneratorRuntime().wrap(function _callee95$(_context95) {
                              while (1) {
                                switch (_context95.prev = _context95.next) {
                                  case 0:
                                    if (!res[0]) {
                                      _context95.next = 5;
                                      break;
                                    }

                                    if (!this.cachingService.notChangedSince(res, trainingId + 'date')) {
                                      _context95.next = 5;
                                      break;
                                    }

                                    this.loadFromCache();
                                    this.stopLoading();
                                    return _context95.abrupt("return");

                                  case 5:
                                    res = res.sort(function (a, b) {
                                      return a.title.rendered > b.title.rendered ? 1 : -1;
                                    });
                                    this.sections = [];
                                    _iterator27 = _createForOfIteratorHelper(res);

                                    try {
                                      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                                        item = _step27.value;
                                        temp = {};

                                        try {
                                          temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                                        } catch (e) {
                                          // Must not be the case at all
                                          temp.excerpt = {};
                                        }

                                        temp.content = item.content.rendered;
                                        this.sections.push(temp);
                                      }
                                    } catch (err) {
                                      _iterator27.e(err);
                                    } finally {
                                      _iterator27.f();
                                    }

                                    this.asyncSections.next(this.sections);
                                    this.stopLoading();
                                    setTimeout(function () {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this70, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
                                        return _regeneratorRuntime().wrap(function _callee94$(_context94) {
                                          while (1) {
                                            switch (_context94.prev = _context94.next) {
                                              case 0:
                                                _context94.next = 2;
                                                return this.stopLoading();

                                              case 2:
                                                return _context94.abrupt("return", _context94.sent);

                                              case 3:
                                              case "end":
                                                return _context94.stop();
                                            }
                                          }
                                        }, _callee94, this);
                                      }));
                                    }, 800);
                                    window.localStorage.setItem(trainingId, JSON.stringify(this.sections));

                                  case 13:
                                  case "end":
                                    return _context95.stop();
                                }
                              }
                            }, _callee95, this);
                          }));
                        }, function (err) {
                          _this69.stopLoading();

                          _this69.loadFromCache();
                        }); // setTimeout(async () => {

                        _context96.next = 7;
                        return this.storageService.get('latestTrainingPrograms');

                      case 7:
                        cacheLatest = _context96.sent;
                        this.latestTrainingPrograms = cacheLatest ? JSON.parse(cacheLatest) : [];
                        console.log(this.latestTrainingPrograms, "<=====");
                        this.asyncLatestTrainingPrograms.next(this.latestTrainingPrograms); // }, 1000);

                      case 11:
                      case "end":
                        return _context96.stop();
                    }
                  }
                }, _callee96, this);
              }));
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage() {
            this.favoritesService.addFavoritePage(this.pageId, Object.assign({
              pageType: 'training-programs',
              title: this.pageInfo.clean_title
            }, this.pageExcerpt)).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage() {
            this.favoritesService.removeFavoritePage(this.pageId).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee98() {
              var _this71 = this;

              var trainingId, cacheLatest;
              return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                while (1) {
                  switch (_context98.prev = _context98.next) {
                    case 0:
                      this.startLoading();
                      trainingId = 'trainingSections' + this.pageId;

                      if (window.localStorage.getItem(trainingId)) {
                        this.sections = JSON.parse(window.localStorage.getItem(trainingId));
                      }

                      if (this.sections.length) {
                        this.asyncSections.next(this.sections);
                      }

                      if (window.localStorage.getItem('page' + this.pageId)) {
                        this.pageInfo = JSON.parse(window.localStorage.getItem('page' + this.pageId));
                      }

                      this.latestTrainingPrograms = window.localStorage.getItem('latestTrainingPrograms');
                      this.latestTrainingPrograms = this.latestTrainingPrograms ? JSON.parse(this.latestTrainingPrograms) : [];

                      if (!(!this.latestTrainingPrograms || !this.latestTrainingPrograms.length)) {
                        _context98.next = 12;
                        break;
                      }

                      _context98.next = 10;
                      return this.storageService.get('latestTrainingPrograms');

                    case 10:
                      cacheLatest = _context98.sent;
                      this.latestTrainingPrograms = cacheLatest ? JSON.parse(cacheLatest) : [];

                    case 12:
                      if (this.sections) {
                        setTimeout(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this71, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
                            return _regeneratorRuntime().wrap(function _callee97$(_context97) {
                              while (1) {
                                switch (_context97.prev = _context97.next) {
                                  case 0:
                                    _context97.next = 2;
                                    return this.stopLoading();

                                  case 2:
                                    return _context97.abrupt("return", _context97.sent);

                                  case 3:
                                  case "end":
                                    return _context97.stop();
                                }
                              }
                            }, _callee97, this);
                          }));
                        }, 800);
                      }

                    case 13:
                    case "end":
                      return _context98.stop();
                  }
                }
              }, _callee98, this);
            }));
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
              return _regeneratorRuntime().wrap(function _callee99$(_context99) {
                while (1) {
                  switch (_context99.prev = _context99.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context99.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context99.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context99.stop();
                  }
                }
              }, _callee99, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee100() {
              return _regeneratorRuntime().wrap(function _callee100$(_context100) {
                while (1) {
                  switch (_context100.prev = _context100.next) {
                    case 0:
                      if (this.loading) {
                        _context100.next = 2;
                        break;
                      }

                      return _context100.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context100.stop();
                  }
                }
              }, _callee100, this);
            }));
          }
        }]);

        return TrainingProgramContentComponent;
      }();

      TrainingProgramContentComponent.ctorParameters = function () {
        return [{
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_7__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"]
        }, {
          type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
        }];
      };

      TrainingProgramContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-program-content',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./training-program-content.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-program-content/training-program-content.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./training-program-content.component.scss */
        "./src/app/components/training-program-content/training-program-content.component.scss"))["default"]]
      })], TrainingProgramContentComponent);
      /***/
    },

    /***/
    "./src/app/components/training-programs/training-programs.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/training-programs/training-programs.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTrainingProgramsTrainingProgramsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wcm9ncmFtcy90cmFpbmluZy1wcm9ncmFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRFI7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFpbmluZy1wcm9ncmFtcy90cmFpbmluZy1wcm9ncmFtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgfVxufVxuXG4uZW1iZWQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMTAwJTtcblxuICAgIGlmcmFtZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbiAgXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/training-programs/training-programs.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/training-programs/training-programs.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TrainingProgramsComponent */

    /***/
    function srcAppComponentsTrainingProgramsTrainingProgramsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrainingProgramsComponent", function () {
        return TrainingProgramsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var TrainingProgramsComponent = /*#__PURE__*/function () {
        function TrainingProgramsComponent(userService, pageService, tagsService, loadingCtrl) {
          _classCallCheck(this, TrainingProgramsComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.tagsService = tagsService;
          this.loadingCtrl = loadingCtrl;
          this.trainingPrograms = [];
          this.planCategories = [];
          this.categoryNames = ['Beginner', 'Intermediate', 'Advanced'];
          this.displayCount = 5;
          this.currentPage = 1;
          this.pageCategories = [{
            name: 'Singles'
          }, {
            name: 'Doubles'
          }, {
            name: 'Mixed doubles'
          }];
          this.selectedPageCategories = {};
          this.categoriesByName = {};
          this.isInLatest = {};
          this.filteredTrainingPrograms = [];
          this.allFiltered = [];
        }

        _createClass(TrainingProgramsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this72 = this;

            this.loadFromCache();
            this.userService.getMe().subscribe(function (res) {
              if (!_this72.pageService.mainPages['training-programs']) {
                _this72.pageService.getPageBySlug('training-programs').subscribe(function (res) {
                  _this72.pageService.mainPages['training-programs'] = res[0];

                  _this72.initPages();
                });
              } else {
                _this72.initPages();
              }
            });
            this.tagsService.getCategories().subscribe(function (res) {
              var _iterator28 = _createForOfIteratorHelper(res),
                  _step28;

              try {
                for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                  var cat = _step28.value;
                  _this72.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator28.e(err);
              } finally {
                _iterator28.f();
              }

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this72.categoriesByName));
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.initPages();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "initPages",
          value: function initPages() {
            var _this73 = this;

            this.pageService.getPageByParent(this.pageService.mainPages['training-programs'].id, this.currentPage, 50).subscribe(function (res) {
              window.localStorage.removeItem('latestBeginnerTraining');
              window.localStorage.removeItem('latestIntermediateTraining');
              window.localStorage.removeItem('latestAdvancedTraining');
              var latestDate = window.localStorage.getItem('latestCreatedTrainingProgram');

              if (latestDate != res[0].date) {
                window.localStorage.setItem('latestCreatedTrainingProgram', res[0].date);

                _this73.startLoading();
              }

              _this73.trainingPrograms = [];
              _this73.latestAdvanced = [];
              _this73.latestBeginner = [];
              _this73.latestIntermediate = [];

              var _iterator29 = _createForOfIteratorHelper(res),
                  _step29;

              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var tp = _step29.value;

                  _this73.trainingPrograms.push(_this73.parseItem(tp));
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }

              _this73.applyFilters();

              setTimeout(function () {
                return _this73.stopLoading();
              }, 500);
              window.localStorage.setItem('latestAdvancedTraining', JSON.stringify(_this73.latestAdvanced));
              window.localStorage.setItem('latestBeginnerTraining', JSON.stringify(_this73.latestBeginner));
              window.localStorage.setItem('latestIntermediateTraining', JSON.stringify(_this73.latestIntermediate));
              window.localStorage.setItem('trainingPrograms', JSON.stringify(_this73.trainingPrograms));
            });
          }
        }, {
          key: "toggleCategory",
          value: function toggleCategory(cat) {
            this.planCategories[cat] = !this.planCategories[cat];
            this.applyFilters();
          }
        }, {
          key: "togglePageCategory",
          value: function togglePageCategory(cat) {
            var temp = this.categoriesByName[cat];
            this.selectedPageCategories[temp.id] = !this.selectedPageCategories[temp.id];
            console.log(temp, cat, this.selectedPageCategories);
            this.applyFilters();
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee101() {
              return _regeneratorRuntime().wrap(function _callee101$(_context101) {
                while (1) {
                  switch (_context101.prev = _context101.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context101.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context101.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context101.stop();
                  }
                }
              }, _callee101, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee102() {
              return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                while (1) {
                  switch (_context102.prev = _context102.next) {
                    case 0:
                      if (this.loading) {
                        _context102.next = 2;
                        break;
                      }

                      return _context102.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context102.stop();
                  }
                }
              }, _callee102, this);
            }));
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            var _this74 = this;

            var allPlanDeselected = true;
            var allPageDeselected = true;

            for (var i in this.planCategories) {
              if (this.planCategories[i]) {
                allPlanDeselected = false;
                break;
              }
            }

            for (var _i7 in this.selectedPageCategories) {
              if (this.selectedPageCategories[_i7]) {
                allPageDeselected = false;
                break;
              }
            }

            if (this.categoryNames.length == 0 || allPageDeselected && allPlanDeselected) {
              this.allFiltered = this.trainingPrograms;
              this.filteredTrainingPrograms = this.allFiltered.slice(0, this.displayCount);
              return;
            }

            this.allFiltered = this.trainingPrograms.filter(function (tp) {
              var tempRes = true;

              if (tp.excerpt.category) {
                tempRes = allPlanDeselected || _this74.planCategories[tp.excerpt.category];
              }

              var isExist = _this74.findIfExists(_this74.selectedPageCategories, tp.categories);

              console.log(tempRes, tp.title, tp.categories, _this74.selectedPageCategories);
              tempRes = tempRes && (allPageDeselected || isExist);
              return tempRes;
            });
            this.filteredTrainingPrograms = this.allFiltered.slice(0, this.displayCount);
          }
        }, {
          key: "findIfExists",
          value: function findIfExists(obj, arr) {
            var keys = Object.keys(obj);
            var res = keys.filter(function (key) {
              var index = arr.findIndex(function (x) {
                return x == key && obj[key];
              });

              if (index !== -1) {
                return true;
              } else {
                return false;
              }
            });
            if (res.length) return true;
            return false;
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;
            temp.categories = item.categories;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (temp.excerpt.category) {
              // Adding first 3 by any category
              switch (temp.excerpt.category) {
                case 'Beginner':
                  if (!this.latestBeginner) {
                    this.latestBeginner = [temp];
                  } else {
                    if (this.latestBeginner.length < 5) {
                      this.latestBeginner.push(temp);
                    }
                  }

                  break;

                case 'Intermediate':
                  if (!this.latestIntermediate) {
                    this.latestIntermediate = [temp];
                  } else {
                    if (this.latestIntermediate.length < 5) {
                      this.latestIntermediate.push(temp);
                    }
                  }

                  break;

                case 'Advanced':
                  if (!this.latestAdvanced) {
                    this.latestAdvanced = [temp];
                  } else {
                    if (this.latestAdvanced.length < 5) {
                      this.latestAdvanced.push(temp);
                    }
                  }

                  break;
              }
            }

            return temp;
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.allFiltered.length) {
              this.currentPage++;
              this.initPages();
            }
          }
        }, {
          key: "isCatSelected",
          value: function isCatSelected(cat) {
            if (!this.categoriesByName[cat]) {
              return;
            }

            return this.selectedPageCategories[this.categoriesByName[cat].id];
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee103() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee103$(_context103) {
                while (1) {
                  switch (_context103.prev = _context103.next) {
                    case 0:
                      _context103.next = 2;
                      return this.startLoading();

                    case 2:
                      temp = window.localStorage.getItem('categoriesByName');

                      if (temp) {
                        this.categoriesByName = JSON.parse(temp);
                      }

                      this.trainingPrograms = window.localStorage.getItem('trainingPrograms');
                      this.trainingPrograms = this.trainingPrograms ? JSON.parse(this.trainingPrograms) : [];
                      this.applyFilters();
                      this.latestAdvanced = window.localStorage.getItem('latestAdvancedTraining');
                      this.latestAdvanced = this.latestAdvanced ? JSON.parse(this.latestAdvanced) : [];
                      this.latestIntermediate = window.localStorage.getItem('latestIntermediateTraining');
                      this.latestIntermediate = this.latestIntermediate ? JSON.parse(this.latestIntermediate) : [];
                      this.latestBeginner = window.localStorage.getItem('latestBeginnerTraining');
                      this.latestBeginner = this.latestBeginner ? JSON.parse(this.latestBeginner) : [];

                      if (!(this.trainingPrograms && this.trainingPrograms.length)) {
                        _context103.next = 16;
                        break;
                      }

                      _context103.next = 16;
                      return this.stopLoading();

                    case 16:
                    case "end":
                      return _context103.stop();
                  }
                }
              }, _callee103, this);
            }));
          }
        }]);

        return TrainingProgramsComponent;
      }();

      TrainingProgramsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_3__["PageService"]
        }, {
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      TrainingProgramsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-programs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./training-programs.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/training-programs/training-programs.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./training-programs.component.scss */
        "./src/app/components/training-programs/training-programs.component.scss"))["default"]]
      })], TrainingProgramsComponent);
      /***/
    },

    /***/
    "./src/app/components/tutorials/tutorials.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/tutorials/tutorials.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTutorialsTutorialsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".select-wrapper {\n  padding: 30px 20px;\n  background: linear-gradient(111deg, #1bb3eb 0%, #25efcb 100%) !important;\n}\n.select-wrapper ion-select {\n  background: white;\n}\n.select-wrapper ion-select {\n  border-radius: 10px;\n  color: var(--ion-color-dark-blue);\n  letter-spacing: 3px;\n}\n.select-wrapper .round-btn {\n  width: 40px;\n  height: 40px;\n  float: right;\n  margin-top: 0px;\n  --border-radius: 45px;\n}\n.select-wrapper ion-button {\n  color: white;\n}\n.footer-wrapper {\n  padding-bottom: 20px;\n}\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n.mt-2 {\n  margin-top: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90dXRvcmlhbHMvdHV0b3JpYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx3RUFBQTtBQUNKO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFJSTtFQUNJLFlBQUE7QUFGUjtBQU1BO0VBT0ksb0JBQUE7QUFUSjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQURSO0FBT0E7RUFDSSxlQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3R1dG9yaWFscy90dXRvcmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTExZGVnLCMxYmIzZWIgMCUsIzI1ZWZjYiAxMDAlKSAhaW1wb3J0YW50O1xuXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstYmx1ZSk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxuXG4gICAgLnJvdW5kLWJ0biB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbi5mb290ZXItd3JhcHBlciB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICBcbiAgICB9XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5tdC0yIHtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/tutorials/tutorials.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/tutorials/tutorials.component.ts ***!
      \*************************************************************/

    /*! exports provided: TutorialsComponent */

    /***/
    function srcAppComponentsTutorialsTutorialsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialsComponent", function () {
        return TutorialsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");

      var TutorialsComponent = /*#__PURE__*/function () {
        function TutorialsComponent(userService, pageService, activatedRoute, loadingCtrl, ngZone, toast) {
          _classCallCheck(this, TutorialsComponent);

          this.userService = userService;
          this.pageService = pageService;
          this.activatedRoute = activatedRoute;
          this.loadingCtrl = loadingCtrl;
          this.ngZone = ngZone;
          this.toast = toast;
          this.sections = [];
          this.mainCategories = [];
          this.currentPage = 1;
          this.showLoadMore = false;
          this.currentSectionsPage = 1;
          this.moreLoading = false;
        }

        _createClass(TutorialsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this75 = this;

            this.activatedRoute.params.subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this75, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
                var _this76 = this;

                return _regeneratorRuntime().wrap(function _callee104$(_context104) {
                  while (1) {
                    switch (_context104.prev = _context104.next) {
                      case 0:
                        _context104.next = 2;
                        return this.startLoading();

                      case 2:
                        this.selectedCategory = parseInt(res.id, 10); // this.loadFromCache();

                        this.userService.getLoggedUser().subscribe(function (res) {
                          if (!res) {
                            return;
                          }

                          if (!_this76.pageService.mainPages['video-tutorials']) {
                            _this76.pageService.getPageBySlug('video-tutorials').subscribe(function (res) {
                              _this76.pageService.mainPages['video-tutorials'] = res[0]; // this.stopLoading()

                              _this76.initPages();
                            });
                          } else {
                            // this.stopLoading()
                            _this76.initPages();
                          }
                        }, function (err) {
                          return _this76.stopLoading();
                        });

                      case 4:
                      case "end":
                        return _context104.stop();
                    }
                  }
                }, _callee104, this);
              }));
            }, function (err) {
              return _this75.stopLoading();
            });
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee105() {
              return _regeneratorRuntime().wrap(function _callee105$(_context105) {
                while (1) {
                  switch (_context105.prev = _context105.next) {
                    case 0:
                      this.isLoading = true;

                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context105.next = 4;
                      return this.loadingCtrl.create();

                    case 4:
                      this.loading = _context105.sent;
                      this.loading.present();

                    case 6:
                    case "end":
                      return _context105.stop();
                  }
                }
              }, _callee105, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee106() {
              return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                while (1) {
                  switch (_context106.prev = _context106.next) {
                    case 0:
                      if (this.loading) {
                        _context106.next = 2;
                        break;
                      }

                      return _context106.abrupt("return");

                    case 2:
                      if (this.pageLoader) {
                        this.pageLoader.target.complete();
                        this.pageLoader = null;
                      }

                      this.loading.dismiss();
                      this.isLoading = false;

                    case 5:
                    case "end":
                      return _context106.stop();
                  }
                }
              }, _callee106, this);
            }));
          }
        }, {
          key: "initPages",
          value: function initPages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee107() {
              var res, temp, _iterator30, _step30, cat;

              return _regeneratorRuntime().wrap(function _callee107$(_context107) {
                while (1) {
                  switch (_context107.prev = _context107.next) {
                    case 0:
                      if (!this.pageLoader) {
                        _context107.next = 3;
                        break;
                      }

                      this.selectCategory(true, false, true);
                      return _context107.abrupt("return");

                    case 3:
                      _context107.prev = 3;
                      _context107.next = 6;
                      return this.pageService.getPromiseParentPages(this.pageService.mainPages['video-tutorials'].id, this.currentPage, 50, {
                        order: 'asc',
                        orderby: 'menu_order'
                      });

                    case 6:
                      res = _context107.sent;
                      temp = [];
                      _iterator30 = _createForOfIteratorHelper(res);

                      try {
                        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                          cat = _step30.value;
                          temp.push({
                            clean_title: cat.clean_title,
                            id: cat.id,
                            featured_image: cat.featured_image
                          });
                        }
                      } catch (err) {
                        _iterator30.e(err);
                      } finally {
                        _iterator30.f();
                      }

                      this.mainCategories = temp;
                      window.localStorage.setItem('mainVideoCategories', JSON.stringify(this.mainCategories));
                      if (!this.selectedCategory) this.selectedCategory = this.mainCategories[0].id || null;

                      if (!this.selectedCategory) {
                        _context107.next = 16;
                        break;
                      }

                      // this.stopLoading();
                      this.selectCategory(true, false, true);
                      return _context107.abrupt("return");

                    case 16:
                      this.stopLoading();
                      _context107.next = 24;
                      break;

                    case 19:
                      _context107.prev = 19;
                      _context107.t0 = _context107["catch"](3);
                      _context107.next = 23;
                      return this.stopLoading();

                    case 23:
                      this.throwExError();

                    case 24:
                    case "end":
                      return _context107.stop();
                  }
                }
              }, _callee107, this, [[3, 19]]);
            }));
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee108() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee108$(_context108) {
                while (1) {
                  switch (_context108.prev = _context108.next) {
                    case 0:
                      temp = window.localStorage.getItem('mainVideoCategories');

                      if (!temp) {
                        _context108.next = 7;
                        break;
                      }

                      this.mainCategories = JSON.parse(temp); // if(this.mainCategories) {
                      //   await this.stopLoading();
                      // }

                      if (!this.selectedCategory) {
                        _context108.next = 6;
                        break;
                      }

                      this.selectCategory(true, true);
                      return _context108.abrupt("return");

                    case 6:
                      this.selectedCategory = this.mainCategories[0].id;

                    case 7:
                      this.stopLoading();

                    case 8:
                    case "end":
                      return _context108.stop();
                  }
                }
              }, _callee108, this);
            }));
          }
        }, {
          key: "selectCategory",
          value: function selectCategory() {
            var isReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var loadFromCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var showLoadMore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee109() {
              var _this77 = this;

              var temp, res, latestDate, _iterator31, _step31, item, _temp2;

              return _regeneratorRuntime().wrap(function _callee109$(_context109) {
                while (1) {
                  switch (_context109.prev = _context109.next) {
                    case 0:
                      if (isReset) this.currentSectionsPage = 1;

                      if (!loadFromCache) {
                        _context109.next = 8;
                        break;
                      }

                      temp = window.localStorage.getItem('videoSections' + this.selectedCategory);

                      if (!temp) {
                        _context109.next = 8;
                        break;
                      }

                      this.sections = JSON.parse(temp);
                      this.sections.splice(5, this.sections.length);
                      this.stopLoading();
                      return _context109.abrupt("return");

                    case 8:
                      _context109.prev = 8;
                      _context109.next = 11;
                      return this.pageService.getPromiseParentPages(this.selectedCategory, this.currentSectionsPage, 5)["catch"](function (err) {
                        _this77.stopLoading();

                        _this77.throwExError();
                      });

                    case 11:
                      res = _context109.sent;
                      latestDate = window.localStorage.getItem('latestCreatedTutorials' + this.selectedCategory);
                      if (res.length >= 5) this.showLoadMore = true;

                      if (res.length) {
                        _context109.next = 19;
                        break;
                      }

                      this.sections = [[]].concat(_toConsumableArray(this.sections));
                      this.showLoadMore = false;
                      this.stopLoading();
                      return _context109.abrupt("return");

                    case 19:
                      if (res.length < 5) this.showLoadMore = false;
                      this.moreLoading = false; // if(latestDate != res[0].date) {
                      //   window.localStorage.setItem('latestCreatedTutorials' + this.selectedCategory, res[0].date);
                      // } else {
                      //   this.loadFromCache();
                      //   this.stopLoading();
                      //   return ;
                      // }

                      if (isReset) this.sections = [];
                      _iterator31 = _createForOfIteratorHelper(res);

                      try {
                        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                          item = _step31.value;
                          _temp2 = {};

                          try {
                            _temp2.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
                          } catch (e) {
                            // Must not be the case at all
                            _temp2.excerpt = {};
                          }

                          _temp2.content = item.content.rendered;
                          this.sections.push(_temp2);
                        }
                      } catch (err) {
                        _iterator31.e(err);
                      } finally {
                        _iterator31.f();
                      }

                      setTimeout(function () {
                        _this77.stopLoading();

                        if (isReset) _this77.content.scrollToTop(400);
                      }, 500);
                      window.localStorage.setItem('videoSections' + this.selectedCategory, JSON.stringify(this.sections));
                      _context109.next = 33;
                      break;

                    case 28:
                      _context109.prev = 28;
                      _context109.t0 = _context109["catch"](8);
                      _context109.next = 32;
                      return this.stopLoading();

                    case 32:
                      this.throwExError(); // this.loadFromCache();
                      // this.stopLoading()

                    case 33:
                    case "end":
                      return _context109.stop();
                  }
                }
              }, _callee109, this, [[8, 28]]);
            }));
          }
        }, {
          key: "throwExError",
          value: function throwExError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee110() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee110$(_context110) {
                while (1) {
                  switch (_context110.prev = _context110.next) {
                    case 0:
                      _context110.next = 2;
                      return this.toast.create({
                        color: 'danger',
                        position: 'bottom',
                        duration: 2500,
                        message: 'Something bad happened. Please try again later / Restart the app.'
                      });

                    case 2:
                      toast = _context110.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context110.stop();
                  }
                }
              }, _callee110, this);
            }));
          }
        }, {
          key: "changeCategory",
          value: function changeCategory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee111() {
              return _regeneratorRuntime().wrap(function _callee111$(_context111) {
                while (1) {
                  switch (_context111.prev = _context111.next) {
                    case 0:
                      _context111.next = 2;
                      return this.startLoading();

                    case 2:
                      this.selectCategory();

                    case 3:
                    case "end":
                      return _context111.stop();
                  }
                }
              }, _callee111, this);
            }));
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
              return _regeneratorRuntime().wrap(function _callee112$(_context112) {
                while (1) {
                  switch (_context112.prev = _context112.next) {
                    case 0:
                      if (!this.moreLoading) {
                        _context112.next = 2;
                        break;
                      }

                      return _context112.abrupt("return");

                    case 2:
                      _context112.next = 4;
                      return this.startLoading();

                    case 4:
                      this.currentSectionsPage++;
                      this.moreLoading = true;
                      this.selectCategory(false);

                    case 7:
                    case "end":
                      return _context112.stop();
                  }
                }
              }, _callee112, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this78 = this;

            console.log('Begin async operation');
            setTimeout(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this78, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee113() {
                return _regeneratorRuntime().wrap(function _callee113$(_context113) {
                  while (1) {
                    switch (_context113.prev = _context113.next) {
                      case 0:
                        console.log('Async operation has ended');
                        window.localStorage.removeItem('videoSections');
                        _context113.next = 4;
                        return this.startLoading();

                      case 4:
                        this.pageLoader = event;
                        this.currentSectionsPage = 1;
                        this.initPages();

                      case 7:
                      case "end":
                        return _context113.stop();
                    }
                  }
                }, _callee113, this);
              }));
            }, 1000);
          }
        }]);

        return TutorialsComponent;
      }();

      TutorialsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      TutorialsComponent.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"]]
        }]
      };
      TutorialsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tutorials',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tutorials.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tutorials/tutorials.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tutorials.component.scss */
        "./src/app/components/tutorials/tutorials.component.scss"))["default"]]
      })], TutorialsComponent);
      /***/
    },

    /***/
    "./src/app/components/video-notes/video-notes.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/video-notes/video-notes.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsVideoNotesVideoNotesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".control-buttons ion-button {\n  width: calc(33% - 3px);\n  margin: 0px;\n}\n.control-buttons ion-button:nth-of-type(2) {\n  margin: 0 5px;\n}\n.control-buttons ion-button:nth-of-type(3) {\n  float: right;\n}\ntextarea {\n  border: 1px solid black;\n  width: 100%;\n  border-radius: 5px;\n  resize: vertical;\n  min-height: 50px;\n}\nform ion-button {\n  width: 30%;\n  margin-left: 70%;\n}\nform p {\n  margin: 3px 0px;\n}\n.inactive-button:last-of-type {\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1ub3Rlcy92aWRlby1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRVE7RUFDSSxhQUFBO0FBQVo7QUFHUTtFQUNJLFlBQUE7QUFEWjtBQU1BO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFPSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0FBTFI7QUFTQTtFQUNJLDhCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLW5vdGVzL3ZpZGVvLW5vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2wtYnV0dG9ucyB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDMzJSAtIDNweCk7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgbWluLWhlaWdodDogNTBweDtcbn1cblxuZm9ybSB7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogM3B4IDBweDtcbiAgICB9XG59XG5cbi5pbmFjdGl2ZS1idXR0b246bGFzdC1vZi10eXBlIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/video-notes/video-notes.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/video-notes/video-notes.component.ts ***!
      \*****************************************************************/

    /*! exports provided: VideoNotesComponent */

    /***/
    function srcAppComponentsVideoNotesVideoNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoNotesComponent", function () {
        return VideoNotesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");

      var VideoNotesComponent = /*#__PURE__*/function () {
        function VideoNotesComponent(favoriteService, formBuilder, alertCtrl, loading, toast) {
          _classCallCheck(this, VideoNotesComponent);

          this.favoriteService = favoriteService;
          this.formBuilder = formBuilder;
          this.alertCtrl = alertCtrl;
          this.loading = loading;
          this.toast = toast;
          this.planChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.moveUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.moveDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.planForm = this.formBuilder.group({
            videoNote: ['']
          });
        }

        _createClass(VideoNotesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee114() {
              return _regeneratorRuntime().wrap(function _callee114$(_context114) {
                while (1) {
                  switch (_context114.prev = _context114.next) {
                    case 0:
                      _context114.next = 2;
                      return this.loading.create();

                    case 2:
                      this.loadingObj = _context114.sent;

                    case 3:
                    case "end":
                      return _context114.stop();
                  }
                }
              }, _callee114, this);
            }));
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this79 = this;

            setTimeout(function () {
              _this79.textChanged({
                target: _this79.textarea.nativeElement
              });
            }, 500);
          }
        }, {
          key: "deleteVideoFromPlan",
          value: function deleteVideoFromPlan() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee115() {
              var _this80 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee115$(_context115) {
                while (1) {
                  switch (_context115.prev = _context115.next) {
                    case 0:
                      _context115.next = 2;
                      return this.alertCtrl.create({
                        message: 'Do you want to remove this video from plan?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this80.loadingOn();

                            _this80.favoriteService.removeVideoFromPlaylist(_this80.videoData.id).subscribe(function (res) {
                              _this80.planChanged.emit();

                              setTimeout(function () {
                                return _this80.loadingOff();
                              }, 1500);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context115.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context115.stop();
                  }
                }
              }, _callee115, this);
            }));
          }
        }, {
          key: "emitMoveUp",
          value: function emitMoveUp() {
            this.moveUp.emit();
          }
        }, {
          key: "emitMoveDown",
          value: function emitMoveDown() {
            this.moveDown.emit();
          }
        }, {
          key: "loadingOn",
          value: function loadingOn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee116() {
              return _regeneratorRuntime().wrap(function _callee116$(_context116) {
                while (1) {
                  switch (_context116.prev = _context116.next) {
                    case 0:
                      this.loadingObj.present();

                    case 1:
                    case "end":
                      return _context116.stop();
                  }
                }
              }, _callee116, this);
            }));
          }
        }, {
          key: "loadingOff",
          value: function loadingOff() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee117() {
              return _regeneratorRuntime().wrap(function _callee117$(_context117) {
                while (1) {
                  switch (_context117.prev = _context117.next) {
                    case 0:
                      this.loadingObj.dismiss();

                    case 1:
                    case "end":
                      return _context117.stop();
                  }
                }
              }, _callee117, this);
            }));
          }
        }, {
          key: "saveNote",
          value: function saveNote() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee119() {
              var _this81 = this;

              return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                while (1) {
                  switch (_context119.prev = _context119.next) {
                    case 0:
                      this.loadingObj.present();
                      this.favoriteService.editVideoNote(this.videoData.id, this.planForm.value.videoNote).subscribe(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this81, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee118() {
                          var toastOps, toast;
                          return _regeneratorRuntime().wrap(function _callee118$(_context118) {
                            while (1) {
                              switch (_context118.prev = _context118.next) {
                                case 0:
                                  this.loadingObj.dismiss();
                                  toastOps = {
                                    color: 'success',
                                    position: 'bottom',
                                    duration: 2500,
                                    message: 'Saved!'
                                  };
                                  _context118.next = 4;
                                  return this.toast.create(toastOps);

                                case 4:
                                  toast = _context118.sent;
                                  toast.present();

                                case 6:
                                case "end":
                                  return _context118.stop();
                              }
                            }
                          }, _callee118, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context119.stop();
                  }
                }
              }, _callee119, this);
            }));
          }
        }, {
          key: "textChanged",
          value: function textChanged(ev) {
            ev.target.style.height = ev.target.scrollHeight + 'px';
          }
        }]);

        return VideoNotesComponent;
      }();

      VideoNotesComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_4__["FavoritesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      VideoNotesComponent.propDecorators = {
        videoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        planData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        planChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        textarea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['text', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }]
      };
      VideoNotesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'video-notes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./video-notes.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-notes/video-notes.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./video-notes.component.scss */
        "./src/app/components/video-notes/video-notes.component.scss"))["default"]]
      })], VideoNotesComponent);
      /***/
    },

    /***/
    "./src/app/components/video-wrapper/video-wrapper.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/video-wrapper/video-wrapper.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsVideoWrapperVideoWrapperComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".section {\n  color: var(--ion-color-success);\n  padding-bottom: 15px;\n}\n.section i {\n  margin-left: 10px;\n  float: right;\n}\niframe {\n  width: 100%;\n}\n.buttom-section {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby13cmFwcGVyL3ZpZGVvLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0E7RUFDSSxXQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZGVvLXdyYXBwZXIvdmlkZW8td3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIFxuICAgIGkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/video-wrapper/video-wrapper.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/video-wrapper/video-wrapper.component.ts ***!
      \*********************************************************************/

    /*! exports provided: VideoWrapperComponent */

    /***/
    function srcAppComponentsVideoWrapperVideoWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoWrapperComponent", function () {
        return VideoWrapperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/favorites.service */
      "./src/app/services/favorites.service.ts");
      /* harmony import */


      var src_app_services_vimeo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/vimeo.service */
      "./src/app/services/vimeo.service.ts");
      /* harmony import */


      var _training_plans_popover_training_plans_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../training-plans-popover/training-plans-popover.component */
      "./src/app/components/training-plans-popover/training-plans-popover.component.ts");

      var VideoWrapperComponent = /*#__PURE__*/function () {
        function VideoWrapperComponent(favoritesService, popoverController, vimeoService) {
          _classCallCheck(this, VideoWrapperComponent);

          this.favoritesService = favoritesService;
          this.popoverController = popoverController;
          this.vimeoService = vimeoService;
        }

        _createClass(VideoWrapperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getCorrecWidth",
          value: function getCorrecWidth() {
            return (window.innerWidth - 40) / 1.777;
          }
        }, {
          key: "addFavoriteVideo",
          value: function addFavoriteVideo(videoId) {
            this.favoritesService.addFavoriteVideo(videoId).subscribe(function (res) {
              console.log('added video', res);
            });
          }
        }, {
          key: "removeFavoriteVideo",
          value: function removeFavoriteVideo(videoId) {
            this.favoritesService.removeFavoritedVideo(videoId).subscribe(function (res) {
              console.log('removed video video', res);
            });
          }
        }, {
          key: "openPopover",
          value: function openPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee120() {
              var popover;
              return _regeneratorRuntime().wrap(function _callee120$(_context120) {
                while (1) {
                  switch (_context120.prev = _context120.next) {
                    case 0:
                      _context120.next = 2;
                      return this.popoverController.create({
                        component: _training_plans_popover_training_plans_popover_component__WEBPACK_IMPORTED_MODULE_5__["TrainingPlansPopoverComponent"],
                        cssClass: 'my-custom-class',
                        event: ev,
                        translucent: true,
                        componentProps: {
                          videoId: this.videoId
                        }
                      });

                    case 2:
                      popover = _context120.sent;
                      _context120.next = 5;
                      return popover.present();

                    case 5:
                      return _context120.abrupt("return", _context120.sent);

                    case 6:
                    case "end":
                      return _context120.stop();
                  }
                }
              }, _callee120, this);
            }));
          }
        }, {
          key: "download",
          value: function download(fileUrl, fileName) {
            this.vimeoService.getAndDownload(fileName);
          }
        }]);

        return VideoWrapperComponent;
      }();

      VideoWrapperComponent.ctorParameters = function () {
        return [{
          type: src_app_services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: src_app_services_vimeo_service__WEBPACK_IMPORTED_MODULE_4__["VimeoService"]
        }];
      };

      VideoWrapperComponent.propDecorators = {
        videoId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hideLikes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      VideoWrapperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'video-wrapper',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./video-wrapper.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/video-wrapper/video-wrapper.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./video-wrapper.component.scss */
        "./src/app/components/video-wrapper/video-wrapper.component.scss"))["default"]]
      })], VideoWrapperComponent);
      /***/
    },

    /***/
    "./src/app/components/whats-new/whats-new.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/whats-new/whats-new.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsWhatsNewWhatsNewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  overflow-y: scroll;\n}\n\n.footer-wrapper {\n  padding-bottom: 20px;\n}\n\n.footer-wrapper ion-button {\n  position: relative;\n  width: 50%;\n  left: 25%;\n}\n\n.embed-wrapper {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.embed-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aGF0cy1uZXcvd2hhdHMtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQU9JLG9CQUFBO0FBTEo7O0FBREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBR1I7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93aGF0cy1uZXcvd2hhdHMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIFxuICAgIH1cbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmVtYmVkLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBpZnJhbWUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG4gIFxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/whats-new/whats-new.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/whats-new/whats-new.component.ts ***!
      \*************************************************************/

    /*! exports provided: WhatsNewComponent */

    /***/
    function srcAppComponentsWhatsNewWhatsNewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatsNewComponent", function () {
        return WhatsNewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/caching.service */
      "./src/app/services/caching.service.ts");
      /* harmony import */


      var src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/page.service */
      "./src/app/services/page.service.ts");
      /* harmony import */


      var src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tags.service */
      "./src/app/services/tags.service.ts");

      var WhatsNewComponent = /*#__PURE__*/function () {
        // categoryNames: any = [{ name: 'Beginner' }, { name: 'Intermediate' }, { name: 'Advanced' }];
        // pageCategories = [{ name: 'Singles' }, { name: 'Doubles' }, { name: 'Mixed doubles' } ];
        // selectedPageCategories: any = {};
        // selectedLevels: string[] = [];
        // selectedCategory: string[] = [];
        // showLoadMore: boolean = false;
        function WhatsNewComponent(tagsService, pageService, loadingCtrl, cacheService) {
          _classCallCheck(this, WhatsNewComponent);

          this.tagsService = tagsService;
          this.pageService = pageService;
          this.loadingCtrl = loadingCtrl;
          this.cacheService = cacheService;
          this.categoriesByName = {};
          this.currentCat = 'Newest';
          this.allRecords = [];
          this.currentPage = 1;
          this.records = [];
          this.displayCount = 20;
        }

        _createClass(WhatsNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this82 = this;

            // this.loadFromCache();
            this.startLoading();
            this.tagsService.getCategories().subscribe(function (res) {
              var _iterator32 = _createForOfIteratorHelper(res),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var cat = _step32.value;
                  _this82.categoriesByName[cat.name] = cat;
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }

              window.localStorage.setItem('categoriesByName', JSON.stringify(_this82.categoriesByName));

              _this82.initCategory();
            }, function (err) {
              return _this82.loadFromCache();
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.refreshEvent = event;
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
            this.initCategory();
          }
        }, {
          key: "startLoading",
          value: function startLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee121() {
              return _regeneratorRuntime().wrap(function _callee121$(_context121) {
                while (1) {
                  switch (_context121.prev = _context121.next) {
                    case 0:
                      if (this.loading) {
                        // Just in case loading is still opened
                        this.loading.dismiss();
                      }

                      _context121.next = 3;
                      return this.loadingCtrl.create();

                    case 3:
                      this.loading = _context121.sent;
                      this.loading.present();
                      this.isLoading = true;

                    case 6:
                    case "end":
                      return _context121.stop();
                  }
                }
              }, _callee121, this);
            }));
          }
        }, {
          key: "stopLoading",
          value: function stopLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee122() {
              return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                while (1) {
                  switch (_context122.prev = _context122.next) {
                    case 0:
                      if (this.loading) {
                        _context122.next = 2;
                        break;
                      }

                      return _context122.abrupt("return");

                    case 2:
                      this.loading.dismiss();
                      this.isLoading = false;

                    case 4:
                    case "end":
                      return _context122.stop();
                  }
                }
              }, _callee122, this);
            }));
          }
        }, {
          key: "loadFromCache",
          value: function loadFromCache() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee123() {
              var temp;
              return _regeneratorRuntime().wrap(function _callee123$(_context123) {
                while (1) {
                  switch (_context123.prev = _context123.next) {
                    case 0:
                      temp = window.localStorage.getItem('categoriesByName');

                      if (temp) {
                        this.categoriesByName = JSON.parse(temp);
                      }

                      this.initCategory();

                    case 3:
                    case "end":
                      return _context123.stop();
                  }
                }
              }, _callee123, this);
            }));
          }
        }, {
          key: "initCategory",
          value: function initCategory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee124() {
              var _this83 = this;

              var temp;
              return _regeneratorRuntime().wrap(function _callee124$(_context124) {
                while (1) {
                  switch (_context124.prev = _context124.next) {
                    case 0:
                      if (this.categoriesByName[this.currentCat]) {
                        _context124.next = 2;
                        break;
                      }

                      return _context124.abrupt("return");

                    case 2:
                      if (this.refreshEvent && this.refreshEvent.target) {
                        this.refreshEvent.target.complete();
                      } // await this.startLoading();


                      temp = window.localStorage.getItem('latestRecordsByCat' + this.categoriesByName[this.currentCat].id);

                      if (temp) {
                        this.allRecords = JSON.parse(temp);
                        this.applyFilters();
                      }

                      this.pageService.getPagesByQuery({
                        categories: this.categoriesByName[this.currentCat].id
                      }, this.currentPage, 100).subscribe(function (res) {
                        var _a, _b, _c;

                        if (_this83.cacheService.notChangedSince(res, 'whatsNewLatest')) {
                          _this83.stopLoading();

                          return;
                        }

                        var tempRecords = [];
                        _this83.allRecords = [];

                        var _iterator33 = _createForOfIteratorHelper(res),
                            _step33;

                        try {
                          for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                            var record = _step33.value;
                            record.parent = {
                              id: (_a = _this83.pageService.mainPagesById[record.parent]) === null || _a === void 0 ? void 0 : _a.id,
                              slug: (_b = _this83.pageService.mainPagesById[record.parent]) === null || _b === void 0 ? void 0 : _b.slug,
                              clean_title: (_c = _this83.pageService.mainPagesById[record.parent]) === null || _c === void 0 ? void 0 : _c.clean_title
                            };
                            var tempExcerpt = {};

                            try {
                              tempExcerpt = _this83.pageService.parsePureExcerpt(record.pure_excerpt);
                            } catch (e) {
                              console.log('Error with excerpt', record.id);
                            }

                            var _temp3 = {
                              parent: record.parent,
                              clean_title: record.clean_title,
                              id: record.id,
                              excerpt: tempExcerpt,
                              featured_image_src: record.featured_image_src
                            };
                            tempRecords.push(_temp3);
                          }
                        } catch (err) {
                          _iterator33.e(err);
                        } finally {
                          _iterator33.f();
                        }

                        _this83.allRecords = tempRecords;

                        _this83.applyFilters();

                        setTimeout(function () {
                          return _this83.stopLoading();
                        }, 500);
                        window.localStorage.setItem('latestRecordsByCat' + _this83.categoriesByName[_this83.currentCat].id, JSON.stringify(_this83.allRecords));
                      }, function (err) {
                        return _this83.stopLoading();
                      });

                    case 6:
                    case "end":
                      return _context124.stop();
                  }
                }
              }, _callee124, this);
            }));
          } // toggleCategory(event: string[]) {
          //   this.selectedLevels = event;    
          //   this.applyFilters();
          // }
          // togglePageCategory(event: string[]) {
          //   const ids = event.map(x => {
          //     if (x === this.categoriesByName[x].name)
          //       return this.categoriesByName[x].id;
          //   })
          //   this.selectedCategory = ids;
          //   this.applyFilters();
          // }

        }, {
          key: "applyFilters",
          value: function applyFilters() {
            // let cacheRec = [ ...this.allRecords ];
            // cacheRec = cacheRec.filter(rec => {
            //   if (this.selectedLevels.length || this.selectedCategory.length) {
            //     const isInLevels = this.selectedLevels.includes(rec.excerpt.category);
            //     const isInCategory = rec.categories.filter(x => this.selectedCategory.indexOf(x) !== -1)
            //     if (isInLevels || isInCategory.length) return true;
            //     return false;
            //   } else {
            //     return true;
            //   }
            // });
            // console.log(cacheRec)
            // if (cacheRec.length >= this.displayCount) {
            //   this.showLoadMore = true;
            // } else {
            //   this.showLoadMore = false;
            // }
            // this.records = cacheRec.slice(0, this.displayCount);
            this.records = this.allRecords.slice(0, this.displayCount);
          }
        }, {
          key: "loadMore",
          value: function loadMore() {
            this.displayCount += 5;
            this.applyFilters();

            if (this.displayCount == this.allRecords) {
              this.currentPage++;
              this.initCategory();
            }
          }
        }]);

        return WhatsNewComponent;
      }();

      WhatsNewComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tags_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"]
        }, {
          type: src_app_services_page_service__WEBPACK_IMPORTED_MODULE_4__["PageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: src_app_services_caching_service__WEBPACK_IMPORTED_MODULE_3__["CachingService"]
        }];
      };

      WhatsNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whats-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./whats-new.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/whats-new/whats-new.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./whats-new.component.scss */
        "./src/app/components/whats-new/whats-new.component.scss"))["default"]]
      })], WhatsNewComponent);
      /***/
    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user.service */
      "./src/app/services/user.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, userService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var _this84 = this;

            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this84, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee125() {
                var _this85 = this;

                return _regeneratorRuntime().wrap(function _callee125$(_context125) {
                  while (1) {
                    switch (_context125.prev = _context125.next) {
                      case 0:
                        try {
                          this.userService.getLoggedUser().subscribe(function (res) {
                            if (res) {
                              resolve(true);
                            } else {
                              _this85.router.navigate(['']);
                            }
                          });
                        } catch (error) {
                          this.router.navigate(['']);
                          reject(false);
                        }

                      case 1:
                      case "end":
                        return _context125.stop();
                    }
                  }
                }, _callee125, this);
              }));
            });
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "./src/app/pipes/safe.pipe.ts":
    /*!************************************!*\
      !*** ./src/app/pipes/safe.pipe.ts ***!
      \************************************/

    /*! exports provided: SafePipe */

    /***/
    function srcAppPipesSafePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safe'
      })], SafePipe);
      /***/
    },

    /***/
    "./src/app/services/articles.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/articles.service.ts ***!
      \**********************************************/

    /*! exports provided: ArticlesService */

    /***/
    function srcAppServicesArticlesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlesService", function () {
        return ArticlesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./posts.service */
      "./src/app/services/posts.service.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var ArticlesService = /*#__PURE__*/function () {
        function ArticlesService(wpService, postsServices) {
          _classCallCheck(this, ArticlesService);

          this.wpService = wpService;
          this.postsServices = postsServices;
          this.articleCategory = window.localStorage.getItem('articleCategory');
          this.articleCategory = this.articleCategory ? JSON.parse(this.articleCategory) : null;
        }
        /**
         * Getting the `Articles` category object to filter posts within that category
         */


        _createClass(ArticlesService, [{
          key: "getMainCategory",
          value: function getMainCategory() {
            var _this86 = this;

            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'categories', {
              slug: 'articles'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (res) {
              _this86.articleCategory = res[0];
              window.localStorage.setItem('articleCategory', JSON.stringify(res[0]));
              return res;
            }));
          }
          /**
           * Getting list of articles from back end
           * @param page
           * @param per_page
           */

        }, {
          key: "getArticles",
          value: function getArticles(page, per_page) {
            if (!this.articleCategory) {
              console.error('Category object is not present');
              return null;
            }

            return this.postsServices.getPostsByCategory(this.articleCategory.id, page, per_page);
          }
          /**
           * Get single article record from backend
           * @param id
           */

        }, {
          key: "getSingleArticle",
          value: function getSingleArticle(id) {
            return this.postsServices.getSinglePost(id);
          }
        }]);

        return ArticlesService;
      }();

      ArticlesService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_5__["WPService"]
        }, {
          type: _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
        }];
      };

      ArticlesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ArticlesService);
      /***/
    },

    /***/
    "./src/app/services/caching.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/caching.service.ts ***!
      \*********************************************/

    /*! exports provided: CachingService */

    /***/
    function srcAppServicesCachingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CachingService", function () {
        return CachingService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CachingService = /*#__PURE__*/function () {
        function CachingService() {
          _classCallCheck(this, CachingService);
        }

        _createClass(CachingService, [{
          key: "notChangedSince",
          value: function notChangedSince(res, dateName) {
            var existingDate = window.localStorage.getItem(dateName);

            if (!existingDate) {
              if (res.length) {
                window.localStorage.setItem(dateName, res[0].modified);
              } else {
                // No content to load, no need to keep loading
                return true;
              }

              return false;
            }

            var existing = Date.parse(existingDate);

            var _iterator34 = _createForOfIteratorHelper(res),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var record = _step34.value;

                if (Date.parse(record.modified) > existing) {
                  window.localStorage.setItem(dateName, record.modified);
                  return false;
                }
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            return true;
          }
        }]);

        return CachingService;
      }();

      CachingService.ctorParameters = function () {
        return [];
      };

      CachingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CachingService);
      /***/
    },

    /***/
    "./src/app/services/favorites.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/favorites.service.ts ***!
      \***********************************************/

    /*! exports provided: FavoritesService */

    /***/
    function srcAppServicesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
        return FavoritesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var FavoritesService = /*#__PURE__*/function () {
        function FavoritesService(wpService) {
          _classCallCheck(this, FavoritesService);

          this.wpService = wpService;
          this.favoritedVideos = {};
          this.favoritedPages = {};
          this.playlists = [];
          this.favorites = [];
          this.playlistsById = {};
          var videos = window.localStorage.getItem('favoritedVideos');

          if (videos) {
            this.favoritedVideos = JSON.parse(videos);
          }

          var pages = window.localStorage.getItem('favoritedPages');

          if (pages) {
            this.favoritedPages = JSON.parse(pages);
          }

          var playlistsById = window.localStorage.getItem('playlistsById');

          if (pages) {
            this.playlistsById = JSON.parse(playlistsById);
          } else {
            this.playlistsById = {};
          }

          var playlists = window.localStorage.getItem('playlists');

          if (pages) {
            this.playlists = JSON.parse(playlists);
          }
        }

        _createClass(FavoritesService, [{
          key: "getFavorites",
          value: function getFavorites() {
            var _this87 = this;

            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'favorites', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              _this87.favorites = res;
              _this87.favoritedPages = {};
              _this87.favoritedVideos = {};

              var _iterator35 = _createForOfIteratorHelper(_this87.favorites),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var fav = _step35.value;

                  if (fav.entity_type == 'video') {
                    _this87.favoritedVideos[fav.entity_id] = true;
                  } else {
                    _this87.favoritedPages[fav.entity_id] = true;
                  }
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }

              window.localStorage.setItem('favoritedVideos', JSON.stringify(_this87.favoritedVideos));
              window.localStorage.setItem('favoritedPages', JSON.stringify(_this87.favoritedPages));
              return res;
            }));
          }
        }, {
          key: "getPlaylists",
          value: function getPlaylists() {
            var _this88 = this;

            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'get_mobile_playlists', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              _this88.playlists = res;

              var _iterator36 = _createForOfIteratorHelper(_this88.playlists),
                  _step36;

              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                  var pl = _step36.value;
                  _this88.playlistsById[pl.id] = pl;
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
              }

              window.localStorage.setItem('playlists', JSON.stringify(res));
              window.localStorage.setItem('playlistsById', JSON.stringify(_this88.playlistsById));
              return res;
            }));
          }
        }, {
          key: "addFavoriteVideo",
          value: function addFavoriteVideo(videoId) {
            this.favoritedVideos[videoId] = true;
            window.localStorage.setItem('favoritedVideos', JSON.stringify(this.favoritedVideos));
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'add_favorite', {
              entityId: videoId,
              entityType: 'video'
            });
          }
        }, {
          key: "addFavoritePage",
          value: function addFavoritePage(pageId, additionalInfo) {
            this.favoritedPages[pageId] = true;
            console.log(additionalInfo);
            window.localStorage.setItem('favoritedPages', JSON.stringify(this.favoritedPages));
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'add_favorite', {
              entityId: pageId,
              entityType: 'page',
              additionalInfo: JSON.stringify(additionalInfo)
            });
          }
        }, {
          key: "removeFavoritedVideo",
          value: function removeFavoritedVideo(videoId) {
            this.favoritedVideos[videoId] = false;
            window.localStorage.setItem('favoritedVideos', JSON.stringify(this.favoritedVideos));
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'remove_favorite', {
              entityId: videoId,
              entityType: 'video'
            });
          }
        }, {
          key: "removeFavoritePage",
          value: function removeFavoritePage(pageId) {
            this.favoritedPages[pageId] = false;
            window.localStorage.setItem('favoritedPages', JSON.stringify(this.favoritedPages));
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'remove_favorite', {
              entityId: pageId,
              entityType: 'page'
            });
          }
        }, {
          key: "addPlaylist",
          value: function addPlaylist(name) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'add_playlist', {
              name: name
            });
          }
        }, {
          key: "removePlaylist",
          value: function removePlaylist(id) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'remove_playlist', {
              id: id
            });
          }
        }, {
          key: "editPlaylist",
          value: function editPlaylist(id, name) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'edit_playlist_name', {
              id: id,
              name: name
            });
          }
        }, {
          key: "getVideosOfPlaylist",
          value: function getVideosOfPlaylist(id) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'get_videos_from_playlist', {
              id: id
            });
          }
        }, {
          key: "addVideoToPlaylist",
          value: function addVideoToPlaylist(videoId, playlistId) {
            var _this89 = this;

            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'add_video_to_playlist', {
              videoId: videoId,
              playlistId: playlistId
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              _this89.playlistsById[playlistId].videoIds.push(videoId);

              window.localStorage.setItem('playlistsById', JSON.stringify(_this89.playlistsById));
              return res;
            }));
          }
        }, {
          key: "removeVideoFromPlaylist",
          value: function removeVideoFromPlaylist(id) {
            var _this90 = this;

            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'remove_video_from_playlist', {
              id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              _this90.getPlaylists().subscribe();

              return res;
            }));
          }
        }, {
          key: "editVideoNote",
          value: function editVideoNote(id, note) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'edit_playlist_video_note', {
              id: id,
              note: note
            });
          }
        }, {
          key: "editVideoOrder",
          value: function editVideoOrder(id, orderNumber) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'edit_playlist_video_order', {
              id: id,
              orderNumber: orderNumber
            });
          }
        }]);

        return FavoritesService;
      }();

      FavoritesService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_4__["WPService"]
        }];
      };

      FavoritesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FavoritesService);
      /***/
    },

    /***/
    "./src/app/services/media.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/media.service.ts ***!
      \*******************************************/

    /*! exports provided: MediaService */

    /***/
    function srcAppServicesMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaService", function () {
        return MediaService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var MediaService = /*#__PURE__*/function () {
        function MediaService(wpService) {
          _classCallCheck(this, MediaService);

          this.wpService = wpService; // Initializing login images from cache

          var temp = window.localStorage.getItem('loginImages');

          if (temp) {
            this.loginImages = JSON.parse(temp);
          }
        }
        /**
         * Getting media list, pagination must be added
         */


        _createClass(MediaService, [{
          key: "getMedia",
          value: function getMedia() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'media', {});
          }
        }, {
          key: "getMediaItem",
          value: function getMediaItem(mediaId) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'media/' + mediaId, {});
          }
        }, {
          key: "getMediaByPost",
          value: function getMediaByPost(postId) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'media', {
              parent: postId
            });
          }
          /**
           * Getting media list for login slider
           */

        }, {
          key: "getLoginImages",
          value: function getLoginImages() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'media', {
              search: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginImagesName
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
              var images = [];

              var _iterator37 = _createForOfIteratorHelper(res),
                  _step37;

              try {
                for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                  var img = _step37.value;

                  if (window.innerWidth < 760) {
                    if (img.title.rendered == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginImagesName) {
                      images.push({
                        source_url: img.source_url,
                        alt_text: img.alt_text
                      });
                    }
                  } else {
                    if (img.title.rendered == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginImagesLargeName) {
                      images.push({
                        source_url: img.source_url,
                        alt_text: img.alt_text
                      });
                    }
                  }
                }
              } catch (err) {
                _iterator37.e(err);
              } finally {
                _iterator37.f();
              }

              localStorage.setItem('loginImages', JSON.stringify(images));
              return images;
            }));
          }
          /**
           * Getting media list for browse slider
           */

        }, {
          key: "getBrowseImages",
          value: function getBrowseImages() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'media', {
              search: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].browseImagesName
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
              var images = [];
              console.log(res);

              var _iterator38 = _createForOfIteratorHelper(res),
                  _step38;

              try {
                for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                  var img = _step38.value;

                  if (img.title.rendered == src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].browseImagesName) {
                    images.push(img.source_url);
                  }
                }
              } catch (err) {
                _iterator38.e(err);
              } finally {
                _iterator38.f();
              }

              localStorage.setItem('loginImages', JSON.stringify(images));
            }));
          }
          /**
           * Getting posts
           */

        }, {
          key: "getPosts",
          value: function getPosts() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'posts', {});
          }
          /**
           * Getting categories
           */

        }, {
          key: "getCategories",
          value: function getCategories() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'categories', {});
          }
          /**
           * Getting categories
           */

        }, {
          key: "getFavorites",
          value: function getFavorites() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'favorites', {});
          }
          /**
           * Getting categories
           */

        }, {
          key: "getPages",
          value: function getPages() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wpUrl + 'pages', {
              slug: 'training-programs'
            });
          }
        }]);

        return MediaService;
      }();

      MediaService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_4__["WPService"]
        }];
      };

      MediaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MediaService);
      /***/
    },

    /***/
    "./src/app/services/page.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/page.service.ts ***!
      \******************************************/

    /*! exports provided: PageService */

    /***/
    function srcAppServicesPageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageService", function () {
        return PageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var PageService = /*#__PURE__*/function () {
        function PageService(wpService) {
          _classCallCheck(this, PageService);

          this.wpService = wpService;
          this.pageSlugs = ['training-programs', 'tactical-lessons', 'physical', 'mental-courses', 'tv-podcasts', 'video-tutorials', 'browse-main-slider', 'kids-academy'];
          this.pageUrlsBySlugs = {
            'training-programs': 'training-programs',
            'tactical-lessons': 'tactical-lessons',
            'physical': 'physical-programs',
            'mental-courses': 'mental-courses',
            'tv-podcasts': 'podcasts',
            'video-tutorials': 'tutorials',
            'kids-academy': 'kids-academy'
          };
          this.mainPages = {};
          this.mainPagesById = {};
        }
        /**
         * Initing all pages by main slugs
         */


        _createClass(PageService, [{
          key: "initMainPages",
          value: function initMainPages() {
            var _this91 = this;

            var mainPagesData = window.localStorage.getItem('mainPages');
            this.mainPages = mainPagesData ? JSON.parse(mainPagesData) : {};
            var promises = [];

            var _iterator39 = _createForOfIteratorHelper(this.pageSlugs),
                _step39;

            try {
              var _loop = function _loop() {
                var slug = _step39.value;

                var prm = _this91.getPageBySlug(slug).toPromise().then(function (res) {
                  _this91.mainPages[slug] = res[0];
                  _this91.mainPagesById[res[0].id] = res[0];
                  window.localStorage.setItem('mainPages', JSON.stringify(_this91.mainPages));
                });

                promises.push(prm);
              };

              for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator39.e(err);
            } finally {
              _iterator39.f();
            }

            return promises;
          }
          /**
           * Getting pages by unique slug
           * @param slug
           */

        }, {
          key: "getPageBySlug",
          value: function getPageBySlug(slug) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'pages', {
              slug: slug
            });
          }
          /**
           * Getting pages by parent
           * @param parent parent id
           * @param page current page of result
           * @param per_page results per page
           */

        }, {
          key: "getPageByParent",
          value: function getPageByParent(parent) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var per_page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
            var ops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'pages', Object.assign(Object.assign({
              parent: parent,
              per_page: per_page,
              page: page
            }, ops), {
              timestamp: Date.now()
            }));
          }
          /**
           * Getting pages by parent and it will return promise results
           * @param parent parent id
           * @param page current page of result
           * @param per_page results per page
           */

        }, {
          key: "getPromiseParentPages",
          value: function getPromiseParentPages(parent) {
            var _this92 = this;

            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var per_page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
            var ops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return new Promise(function (resolve, reject) {
              _this92.getPageByParent(parent, page, per_page, ops).subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
          /**
           * Getting single page by its id
           * @param id id of the page
           */

        }, {
          key: "getSinglePage",
          value: function getSinglePage(id) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'pages/' + id, {});
          }
          /**
           * Parsing pure_excerpt custom field and returning the object
           * @param excerpt
           */

        }, {
          key: "parsePureExcerpt",
          value: function parsePureExcerpt(excerpt) {
            return JSON.parse(excerpt.replace(/(\r\n|\n|\r)/gm, ""));
          }
          /**
           * Get pages filtered by tags
           * @param tags Array of tag ids that must be present in the search
           * @param page current page of result
           * @param per_page results per page
           */

        }, {
          key: "getPagesByQuery",
          value: function getPagesByQuery(query, page, per_page) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'pages', Object.assign(Object.assign({}, query), {
              per_page: per_page,
              page: page,
              timestamp: Date.now()
            }));
          }
        }]);

        return PageService;
      }();

      PageService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_3__["WPService"]
        }];
      };

      PageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PageService);
      /***/
    },

    /***/
    "./src/app/services/posts.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/posts.service.ts ***!
      \*******************************************/

    /*! exports provided: PostsService */

    /***/
    function srcAppServicesPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsService", function () {
        return PostsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var PostsService = /*#__PURE__*/function () {
        function PostsService(wpService) {
          _classCallCheck(this, PostsService);

          this.wpService = wpService;
        }
        /**
         * Get posts filtered by category id
         * @param categoryId category id for filter
         * @param page page of pagination
         * @param per_page items per page
         */


        _createClass(PostsService, [{
          key: "getPostsByCategory",
          value: function getPostsByCategory(categoryId) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var per_page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'posts', {
              categories: [categoryId],
              per_page: per_page,
              page: page,
              timestamp: Date.now()
            });
          }
          /**
           * Getting single post
           * @param id id of the post
           */

        }, {
          key: "getSinglePost",
          value: function getSinglePost(id) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + "posts/".concat(id), {});
          }
        }]);

        return PostsService;
      }();

      PostsService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_3__["WPService"]
        }];
      };

      PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostsService);
      /***/
    },

    /***/
    "./src/app/services/shared.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/shared.service.ts ***!
      \********************************************/

    /*! exports provided: SharedService */

    /***/
    function srcAppServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./storage.service */
      "./src/app/services/storage.service.ts");

      var SharedService = /*#__PURE__*/function () {
        function SharedService(storageService) {
          _classCallCheck(this, SharedService);

          this.storageService = storageService;
        }

        _createClass(SharedService, [{
          key: "getPodcasts",
          value: function getPodcasts(pageService) {
            var _this93 = this;

            var displayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            var currentPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return new Promise(function (resolve, reject) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this93, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee126() {
                var res, podcasts, latestDate, _iterator40, _step40, tp;

                return _regeneratorRuntime().wrap(function _callee126$(_context126) {
                  while (1) {
                    switch (_context126.prev = _context126.next) {
                      case 0:
                        this.pageService = pageService;
                        _context126.prev = 1;
                        _context126.next = 4;
                        return pageService.getPromiseParentPages(pageService.mainPages['tv-podcasts'].id, currentPage, displayCount);

                      case 4:
                        res = _context126.sent;
                        podcasts = [];
                        latestDate = window.localStorage.getItem('latestCreatedPodcasts');

                        if (latestDate != res[0].date) {
                          window.localStorage.setItem('latestCreatedPodcasts', res[0].date);
                        }

                        console.log(res);
                        _iterator40 = _createForOfIteratorHelper(res);

                        try {
                          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
                            tp = _step40.value;
                            podcasts.push(this.parseItem(tp));
                          }
                        } catch (err) {
                          _iterator40.e(err);
                        } finally {
                          _iterator40.f();
                        }

                        window.localStorage.setItem('latestPodcasts', JSON.stringify(this.latestPodcasts ? this.latestPodcasts : []));
                        this.storageService.set('latestPodcasts', JSON.stringify(this.latestPodcasts ? this.latestPodcasts : []));
                        window.localStorage.setItem('podcasts', JSON.stringify(podcasts ? podcasts : []));
                        resolve([podcasts.slice(0, displayCount), this.latestPodcasts, res]);
                        _context126.next = 20;
                        break;

                      case 17:
                        _context126.prev = 17;
                        _context126.t0 = _context126["catch"](1);
                        reject(_context126.t0);

                      case 20:
                      case "end":
                        return _context126.stop();
                    }
                  }
                }, _callee126, this, [[1, 17]]);
              }));
            });
          }
          /**
           * Parsing item so it is more readable and usable
           * @param item Item from back end
           */

        }, {
          key: "parseItem",
          value: function parseItem(item) {
            var temp = {};
            temp.id = item.id;
            temp.title = item.clean_title;
            temp.featured_image_src = item.featured_image_src;

            try {
              temp.excerpt = this.pageService.parsePureExcerpt(item.pure_excerpt);
            } catch (e) {
              // Must not be the case at all
              temp.excerpt = {};
            }

            if (!this.latestPodcasts) {
              this.latestPodcasts = [temp];
            } else {
              if (this.latestPodcasts.length < 5) {
                this.latestPodcasts.push(temp);
              }
            }

            return temp;
          }
        }]);

        return SharedService;
      }();

      SharedService.ctorParameters = function () {
        return [{
          type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    },

    /***/
    "./src/app/services/storage.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm2015/ionic-storage-angular.js");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this._storage = null;
          this.init();
        }

        _createClass(StorageService, [{
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee127() {
              var storage;
              return _regeneratorRuntime().wrap(function _callee127$(_context127) {
                while (1) {
                  switch (_context127.prev = _context127.next) {
                    case 0:
                      _context127.next = 2;
                      return this.storage.create();

                    case 2:
                      storage = _context127.sent;
                      this._storage = storage;

                    case 4:
                    case "end":
                      return _context127.stop();
                  }
                }
              }, _callee127, this);
            }));
          }
        }, {
          key: "set",
          value: function set(key, value) {
            var _a;

            (_a = this._storage) === null || _a === void 0 ? void 0 : _a.set(key, value);
          }
        }, {
          key: "get",
          value: function get(key) {
            var _a;

            return (_a = this._storage) === null || _a === void 0 ? void 0 : _a.get(key);
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], StorageService);
      /***/
    },

    /***/
    "./src/app/services/tags.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/tags.service.ts ***!
      \******************************************/

    /*! exports provided: TagsService */

    /***/
    function srcAppServicesTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsService", function () {
        return TagsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");

      var TagsService = /*#__PURE__*/function () {
        function TagsService(wpService) {
          _classCallCheck(this, TagsService);

          this.wpService = wpService;
        }
        /**
         * Get list of tags
         * @param page page of the result by pagination
         * @param per_page results per page
         */


        _createClass(TagsService, [{
          key: "getTags",
          value: function getTags() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var per_page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'tags', {
              page: page,
              per_page: per_page
            });
          }
          /**
           * Getting all categories
           */

        }, {
          key: "getCategories",
          value: function getCategories() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'categories', {
              page: 1,
              per_page: 50,
              timestamp: Date.now()
            });
          }
        }]);

        return TagsService;
      }();

      TagsService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_3__["WPService"]
        }];
      };

      TagsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TagsService);
      /***/
    },

    /***/
    "./src/app/services/user.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wp.service */
      "./src/app/services/wp.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(wpService) {
          _classCallCheck(this, UserService);

          this.wpService = wpService;
          this.loggedUser = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](null);

          if (this.wpService.token) {
            this.loggedIn = true;
          }
        }
        /**
         * Logging user with api
         * @param userName name of the user
         * @param password password
         */


        _createClass(UserService, [{
          key: "login",
          value: function login(userName, password) {
            var _this94 = this;

            return this.wpService.sendGuestPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].jwtUrl + 'login', {
              username: userName,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
              console.log('wp token is set', res);

              if (res.access_token) {
                _this94.wpService.token = res.access_token;
                window.localStorage.setItem('userToken', res.access_token);
                window.localStorage.setItem('refreshToken', res.refresh_token);
              }
            }));
          }
        }, {
          key: "logout",
          value: function logout(reload) {
            this.loggedIn = false;
            this.loggedUser.next(null);
            this.wpService.token = null;
            window.localStorage.removeItem('userToken');
            window.localStorage.removeItem('refreshToken');
            window.localStorage.removeItem('userInfo'); // if(reload) {
            //   // Making sure that app is reloaded when user logs out
            //   window.location.hash = '/';
            //   window.location.reload();
            // }    
          }
          /**
           * Getting current user info from backend
           */

        }, {
          key: "getMe",
          value: function getMe() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'users/me', {
              context: 'edit'
            });
          }
        }, {
          key: "currentUser",
          value: function currentUser() {
            var _this95 = this;

            return new Promise(function (resolve, reject) {
              _this95.getMe().subscribe(function (res) {
                _this95.loggedUser.next(res);

                resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "getLoggedUser",
          value: function getLoggedUser() {
            return this.loggedUser;
          }
        }, {
          key: "getSubscriptions",
          value: function getSubscriptions() {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'get-subscriptions', {});
          }
          /**
           * Sending request to reset password by email
           * @param data that contains an email field
           */

        }, {
          key: "sendResetPassword",
          value: function sendResetPassword(data) {
            return this.wpService.sendPost(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'forgot-password', data);
          }
          /**
           * Getting specific user
           * @param userId string id of the user
           */

        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.wpService.sendGet(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wpUrl + 'users', {
              search: userId
            });
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _wp_service__WEBPACK_IMPORTED_MODULE_3__["WPService"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "./src/app/services/vimeo.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/vimeo.service.ts ***!
      \*******************************************/

    /*! exports provided: VimeoService */

    /***/
    function srcAppServicesVimeoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VimeoService", function () {
        return VimeoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var VimeoService = /*#__PURE__*/function () {
        function VimeoService(http) {
          _classCallCheck(this, VimeoService);

          this.http = http;
          this.url = 'https://api.vimeo.com/videos';
          var headers = {
            Authorization: "bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vimeo.token)
          };
        }

        _createClass(VimeoService, [{
          key: "getWithHeaders",
          value: function getWithHeaders(url) {
            var headers = {
              Authorization: "bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].vimeo.token)
            };
            return this.http.get(url, {
              headers: headers
            });
          }
        }, {
          key: "download",
          value: function download(id) {
            var _this96 = this;

            return new Promise(function (resolve, reject) {
              _this96.getWithHeaders("".concat(id)).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].DownloadProgress) {
                  var progress = Math.round(100 * event.loaded / event.total);
                  console.log("Downloading ".concat(progress, " ..."));
                } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                  var blob = new Blob([event.body]);
                  console.log("Downloaded ".concat(blob, " ..."));
                  alert('donloaded');
                  resolve(blob);
                }
              }, function (err) {
                console.log(err);
                reject(err);
              });
            });
          }
        }, {
          key: "getAndDownload",
          value: function getAndDownload(id) {
            var _this97 = this;

            return new Promise(function (resolve, reject) {
              _this97.getWithHeaders("".concat(_this97.url, "/").concat(id)).subscribe(function (event) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this97, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee128() {
                  var files, blob;
                  return _regeneratorRuntime().wrap(function _callee128$(_context128) {
                    while (1) {
                      switch (_context128.prev = _context128.next) {
                        case 0:
                          files = event.download.sort(function (a, b) {
                            return a.size - b.size;
                          });
                          console.log(files);
                          _context128.next = 4;
                          return this.download(files[files.length - 1].link);

                        case 4:
                          blob = _context128.sent;

                        case 5:
                        case "end":
                          return _context128.stop();
                      }
                    }
                  }, _callee128, this);
                }));
              }, function (err) {
                console.log(err);
                reject(err);
              });
            });
          }
        }]);

        return VimeoService;
      }();

      VimeoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      VimeoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], VimeoService);
      /***/
    },

    /***/
    "./src/app/services/wp.service.ts":
    /*!****************************************!*\
      !*** ./src/app/services/wp.service.ts ***!
      \****************************************/

    /*! exports provided: WPService */

    /***/
    function srcAppServicesWpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WPService", function () {
        return WPService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var WPService = /*#__PURE__*/function () {
        function WPService(http) {
          _classCallCheck(this, WPService);

          this.http = http;
          var tempToken = window.localStorage.getItem('userToken');
          var tempRefresh = window.localStorage.getItem('refreshToken');
          this.token = tempToken;
          this.refreshToken = tempRefresh;
        }
        /**
         * Sending request by attaching authorization header to it
         * @param url url to send to
         * @param method method of the http request
         */


        _createClass(WPService, [{
          key: "sendRequest",
          value: function sendRequest(url, method, body) {
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            if (this.token) {
              headers.Authorization = headers.Authorization ? headers.Authorization : 'Bearer ' + this.token;
            }

            switch (method) {
              case 'get':
                return this.http.get(url, {
                  headers: headers,
                  params: body
                });

              case 'post':
                return this.http.post(url, body, {
                  headers: headers
                });

              case 'put':
                return this.http.put(url, body, {
                  headers: headers
                });

              case 'delete':
                return this.http["delete"](url, {
                  headers: headers
                });
            }
          }
        }, {
          key: "genericObservable",
          value: function genericObservable(url, method, params) {
            var _this98 = this;

            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              _this98.sendRequest(url, method, params, headers).subscribe(function (res) {
                observer.next(res);
                observer.complete();
              }, function (err) {
                if (err.status == 401) {
                  return _this98.sendRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jwtUrl + 'tokens/refresh', 'post', {
                    token: _this98.refreshToken
                  }).subscribe(function (res) {
                    if (res.access_token) {
                      _this98.setToken(res.access_token);

                      observer.next(_this98.sendPost(url, params));
                      observer.complete();
                    }
                  }, function (err) {
                    observer.error(err);
                    observer.complete();
                  });
                }
              });
            });
          }
          /**
           * Sending post request to a given url, including handling of refresh token
           * @param url url
           * @param body body of the post
           */

        }, {
          key: "sendPost",
          value: function sendPost(url, body) {
            return this.genericObservable(url, 'post', body);
          }
          /**
           * Sending get request to given url, including handling of refresh token
           * @param url url string
           * @param params query params for get request
           */

        }, {
          key: "sendGet",
          value: function sendGet(url, params, headers) {
            return this.genericObservable(url, 'get', params, headers);
          }
          /**
           * Setting current active token
           * @param token string representation of the token
           */

        }, {
          key: "setToken",
          value: function setToken(token) {
            this.token = token;
            window.localStorage.setItem('userToken', token);
          }
          /**
           * Sending guest request. Is used for login so error message can be handled without trying to refresh the token
           * @param url url of request
           * @param body body object of the request
           */

        }, {
          key: "sendGuestPost",
          value: function sendGuestPost(url, body) {
            return this.sendRequest(url, 'post', body);
          }
        }]);

        return WPService;
      }();

      WPService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      WPService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WPService);
      /***/
    },

    /***/
    "./src/app/shared/filters/filters.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/shared/filters/filters.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedFiltersFiltersComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/shared/filters/filters.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/shared/filters/filters.component.ts ***!
      \*****************************************************/

    /*! exports provided: FiltersComponent */

    /***/
    function srcAppSharedFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
        return FiltersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FiltersComponent = /*#__PURE__*/function () {
        function FiltersComponent() {
          _classCallCheck(this, FiltersComponent);

          this.filters = [];
          this.selectAll = false;
          this.fn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(FiltersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle(filter) {
            var index = this.filters.findIndex(function (ele) {
              return ele.name === filter.name;
            });
            if (index === -1) return;

            if (this.filters[index].selected) {
              this.filters[index].selected = false;
              if (!this.selectAll) return this.fn.emit(null);

              var _names = this.filters.filter(function (x) {
                return x.selected === true;
              }).map(function (x) {
                return x.name;
              });

              return this.fn.emit(_names);
            }

            if (!this.selectAll) {
              this.filters.forEach(function (ele) {
                return ele.selected = false;
              });
            }

            this.filters[index].selected = true;
            var names = this.filters.filter(function (x) {
              return x.selected === true;
            }).map(function (x) {
              return x.name;
            });
            this.fn.emit(names);
          }
        }]);

        return FiltersComponent;
      }();

      FiltersComponent.ctorParameters = function () {
        return [];
      };

      FiltersComponent.propDecorators = {
        filters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        selectAll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      FiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filters.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/filters/filters.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filters.component.scss */
        "./src/app/shared/filters/filters.component.scss"))["default"]]
      })], FiltersComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts`with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var mainUrl = 'https://plus.badmintonfamly.com/wp-json';
      var environment = {
        production: false,
        apiUrl: mainUrl + '/rest/',
        jwtUrl: mainUrl + '/api-bearer-auth/v1/',
        wpUrl: mainUrl + '/wp/v2/',
        loginImagesName: 'login-img',
        loginImagesLargeName: 'login-img-large',
        browseImagesName: 'browse-img',
        env: 'dev',
        mainUrl: mainUrl,
        vimeo: {
          clientId: '6ac44f58feb359d3ccf451a9a38156033d17017e',
          secret: '+UsHtYj/o0iVfHpdbBRhmMnUyfYhMMcrSPgyY4uC7wOF4njoh2uhLfHDDVu7BURkHoG8C056lLXoYttg2tAPY0ump4OAKlnLYfAsaePt+FrV/acg9K1pIksCBHKqFS7Z',
          token: 'acc79ad11cdb768748ce19f931ed1e91'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/saadqureshi/devcrew/badminton/v2/Mobile-app/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map