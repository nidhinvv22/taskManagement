function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
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
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet>";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-task/create-task.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-task/create-task.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateTaskCreateTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h2> {{ isEditMode ? \"Edit Task \" : \"Create Task\" }}</h2>\n<div class=\"container\">\n  <form [formGroup]=\"taskForm\" (ngSubmit)=\"createTask()\">\n    <div class=\"form-group\">\n      <label for=\"Title\">Title</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"Enter Title of the Task\"\n        formControlName=\"title\"\n        [class.is-invalid]=\"isValid('title')\"\n      />\n      <span class=\"error\" *ngIf=\"isValid('title')\">Title is Required</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Description</label>\n      <input\n        type=\"textarea\"\n        class=\"form-control\"\n        placeholder=\"Enter Description\"\n        formControlName=\"description\"\n        [class.is-invalid]=\"isValid('description')\"\n      />\n      <span class=\"error\" *ngIf=\"isValid('description')\"\n        >Description is Required</span\n      >\n    </div>\n    <div>\n      <label class=\"form-check-label\" for=\"dueDate\">Due Date:</label>\n      <input\n        type=\"date\"\n        class=\"form-control\"\n        formControlName=\"dueDate\"\n        [class.is-invalid]=\"isValid('dueDate')\"\n      />\n      <div *ngIf=\"isValid('dueDate')\" class=\"error\">\n        <span *ngIf=\"taskForm.get('dueDate').errors?.required\"\n          >Due Date is Required</span\n        >\n        <span *ngIf=\"taskForm.get('dueDate').errors?.lessThanToday\"\n          >Due Date cannot be Less Than Today</span\n        >\n      </div>\n    </div>\n    <button type=\"submit\" class=\"isEditMode ? btn btn-primary : btn btn-warning\" [disabled]=\"taskForm.invalid\">\n      {{ isEditMode ? \"Update \" : \"Save\" }}\n    </button>\n  </form>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-details/task-details.component.html": (
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-details/task-details.component.html ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTaskDetailsTaskDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"task-details\">\n      <h2>Task Details</h2>\n      <div class=\"detail-item\">\n        <label>Title:</label>\n        <p>{{ task.title }}</p>\n      </div>\n      <div class=\"detail-item\">\n        <label>Description:</label>\n        <p>{{ task.description }}</p>\n      </div>\n      <div class=\"detail-item\">\n        <label>Due Date:</label>\n        <p>{{ task.dueDate | date }}</p>\n      </div>\n      <div class=\"detail-item\">\n        <label>Status:</label>\n        <p>{{ task.isComplete ? 'Complete' : 'Incomplete' }}</p>\n      </div>\n      <button routerLink=''>\n        Back to List Page\n    </button>\n    </div>\n\n  </div>\n  ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-list/task-list.component.html": (
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-list/task-list.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTaskListTaskListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n\n<button class=\"btn btn-info\" routerLink=\"/create\">Create New Task</button>\n<ng-container *ngIf=\"taskList.length > 0; else noTasks\">\n  <table class=\"table\">\n    <thead class=\"table-dark\">\n      <tr>\n        <th colspan=\"4\" style=\"align-items: center\">Task List</th>\n      </tr>\n      <tr>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Due Date</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let task of taskList; index as i\">\n        <th scope=\"row\">{{ task.title }}</th>\n        <td>{{ task.dueDate }}</td>\n        <td>\n          <div class=\"icon-container\">\n            <img\n              [src]=\"\n                task.isComplete\n                  ? '../../../assets/images/checkbox-checked.svg'\n                  : '../../../assets/images/checkbox-unchecked.svg'\n              \"\n              alt=\"checkbox\"\n              (click)=\"updateState(i)\"\n              [title]=\"task.isComplete ? 'Mark as Incomplete' : 'Mark as Complete'\"\n            />\n            <img\n              src=\"../../../assets/images/info.svg\"\n              alt=\"View Details\"\n              [routerLink]=\"['/details', i]\"\n              title=\"View Details\"\n            />\n            <img\n              src=\"../../../assets/images/edit.svg\"\n              alt=\"Edit Task\"\n              [routerLink]=\"['/edit', i]\"\n              title=\"Edit Task\"\n            />\n            <img\n              src=\"../../../assets/images/trash.svg\"\n              alt=\"Delete Task\"\n              (click)=\"deleteTask(i)\"\n              title=\"Delete Task\"\n            />\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-container>\n<ng-template #noTasks>\n  <div class=\"no-tasks-message\">\n    You don't have any tasks created. Please click on the above button to add a\n    task.\n  </div>\n</ng-template>\n<div class=\"container\">\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/create-task/create-task.component */"./src/app/components/create-task/create-task.component.ts");
    /* harmony import */
    var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/task-list/task-list.component */"./src/app/components/task-list/task-list.component.ts");
    /* harmony import */
    var _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/task-details/task-details.component */"./src/app/components/task-details/task-details.component.ts");
    var routes = [{
      path: "",
      component: _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"]
    }, {
      path: "create",
      component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"]
    }, {
      path: "edit/:id",
      component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponent"]
    }, {
      path: "details/:id",
      component: _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_5__["TaskDetailsComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.scss": (
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'taskManagementApp';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/task-list/task-list.component */"./src/app/components/task-list/task-list.component.ts");
    /* harmony import */
    var _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/task-details/task-details.component */"./src/app/components/task-details/task-details.component.ts");
    /* harmony import */
    var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/create-task/create-task.component */"./src/app/components/create-task/create-task.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"], _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_7__["TaskDetailsComponent"], _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/create-task/create-task.component.scss": (
  /*!*******************************************************************!*\
    !*** ./src/app/components/create-task/create-task.component.scss ***!
    \*******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsCreateTaskCreateTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "body {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f0f0f0;\n  /* Set a background color for better visibility */\n}\n\n.container {\n  border: 2px solid #3498db;\n  /* Blue border color */\n  padding: 20px;\n  /* Adjust padding as needed */\n  width: 80%;\n  /* Responsive width */\n  max-width: 400px;\n  /* Maximum width */\n  background-color: #fff;\n  /* Container background color */\n}\n\n/* Add your existing styles for form elements, errors, etc. */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltbHRsNTM5L3Rhc2tNYW5hZ2VtZW50QXBwL3NyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUEyQixpREFBQTtBQ0UvQjs7QURDRTtFQUNFLHlCQUFBO0VBQTJCLHNCQUFBO0VBQzNCLGFBQUE7RUFBZSw2QkFBQTtFQUNmLFVBQUE7RUFBWSxxQkFBQTtFQUNaLGdCQUFBO0VBQWtCLGtCQUFBO0VBQ2xCLHNCQUFBO0VBQXdCLCtCQUFBO0FDTzVCOztBREpFLDZEQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBTZXQgYSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQ5OGRiOyAvKiBCbHVlIGJvcmRlciBjb2xvciAqL1xuICAgIHBhZGRpbmc6IDIwcHg7IC8qIEFkanVzdCBwYWRkaW5nIGFzIG5lZWRlZCAqL1xuICAgIHdpZHRoOiA4MCU7IC8qIFJlc3BvbnNpdmUgd2lkdGggKi9cbiAgICBtYXgtd2lkdGg6IDQwMHB4OyAvKiBNYXhpbXVtIHdpZHRoICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogQ29udGFpbmVyIGJhY2tncm91bmQgY29sb3IgKi9cbiAgfVxuICBcbiAgLyogQWRkIHlvdXIgZXhpc3Rpbmcgc3R5bGVzIGZvciBmb3JtIGVsZW1lbnRzLCBlcnJvcnMsIGV0Yy4gKi9cbiAgIiwiYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIC8qIFNldCBhIGJhY2tncm91bmQgY29sb3IgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICAvKiBCbHVlIGJvcmRlciBjb2xvciAqL1xuICBwYWRkaW5nOiAyMHB4O1xuICAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cbiAgd2lkdGg6IDgwJTtcbiAgLyogUmVzcG9uc2l2ZSB3aWR0aCAqL1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICAvKiBNYXhpbXVtIHdpZHRoICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8qIENvbnRhaW5lciBiYWNrZ3JvdW5kIGNvbG9yICovXG59XG5cbi8qIEFkZCB5b3VyIGV4aXN0aW5nIHN0eWxlcyBmb3IgZm9ybSBlbGVtZW50cywgZXJyb3JzLCBldGMuICovIl19 */";

    /***/
  }),
  /***/"./src/app/components/create-task/create-task.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/components/create-task/create-task.component.ts ***!
    \*****************************************************************/
  /*! exports provided: CreateTaskComponent */
  /***/
  function srcAppComponentsCreateTaskCreateTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CreateTaskComponent", function () {
      return CreateTaskComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/manage-tasks.service */"./src/app/services/manage-tasks.service.ts");
    /* harmony import */
    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/snack-bar */"./node_modules/@angular/material/esm2015/snack-bar.js");
    var CreateTaskComponent = /*#__PURE__*/function () {
      function CreateTaskComponent(fb, tasksService, route, snackBar) {
        _classCallCheck(this, CreateTaskComponent);
        this.fb = fb;
        this.tasksService = tasksService;
        this.route = route;
        this.snackBar = snackBar;
        this.taskForm = this.fb.group({
          title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          dueDate: ["", this.validateDate],
          isComplete: false
        });
        this.isEditMode = false;
        this.noDetailsFound = false;
      }
      _createClass(CreateTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isEditMode = this.route.snapshot.url.some(function (segment) {
            return segment.path === 'edit';
          });
          if (this.isEditMode) {
            var id = this.route.snapshot.paramMap.get('id');
            this.taskForm.patchValue(this.tasksService.getTaskDataById(id));
          }
        }
      }, {
        key: "createTask",
        value: function createTask() {
          this.tasksService.createTask(this.taskForm.value);
          this.snackBar.open('Task Created Successfully', 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      }, {
        key: "isValid",
        value: function isValid(formControl) {
          return this.taskForm.get(formControl) && this.taskForm.get(formControl).invalid && (this.taskForm.get(formControl).dirty || this.taskForm.get(formControl).touched);
        }
      }, {
        key: "validateDate",
        value: function validateDate(control) {
          if (!control.value) {
            // setting required validator to true if date is not selected
            return {
              required: true
            };
          }
          var today = new Date();
          today.setHours(0, 0, 0, 0);
          var selectedDate = new Date(control.value);
          if (selectedDate < today) {
            return {
              lessThanToday: true
            };
          }
          return null;
        }
      }]);
      return CreateTaskComponent;
    }();
    CreateTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_4__["ManageTasksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };
    CreateTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-create-task",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./create-task.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-task/create-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./create-task.component.scss */"./src/app/components/create-task/create-task.component.scss"))["default"]]
    })], CreateTaskComponent);

    /***/
  }),
  /***/"./src/app/components/task-details/task-details.component.scss": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/task-details/task-details.component.scss ***!
    \*********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsTaskDetailsTaskDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.container .task-details {\n  width: 80%;\n  max-width: 600px;\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n}\n.container .task-details h2 {\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n}\n.container .task-details .detail-item {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 15px;\n}\n.container .task-details .detail-item label {\n  font-weight: bold;\n  margin-right: 10px;\n}\n.container .task-details .detail-item p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltbHRsNTM5L3Rhc2tNYW5hZ2VtZW50QXBwL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWRldGFpbHMvdGFzay1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rhc2stZGV0YWlscy90YXNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FERU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQVY7QURHUTtFQUNFLFNBQUE7QUNEViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay1kZXRhaWxzL3Rhc2stZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICBcbiAgICAudGFzay1kZXRhaWxzIHtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIFxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuZGV0YWlsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIFxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gIFxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnRhaW5lciAudGFzay1kZXRhaWxzIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNvbnRhaW5lciAudGFzay1kZXRhaWxzIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFpbmVyIC50YXNrLWRldGFpbHMgLmRldGFpbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmNvbnRhaW5lciAudGFzay1kZXRhaWxzIC5kZXRhaWwtaXRlbSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC50YXNrLWRldGFpbHMgLmRldGFpbC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG59Il19 */";

    /***/
  }),
  /***/"./src/app/components/task-details/task-details.component.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/components/task-details/task-details.component.ts ***!
    \*******************************************************************/
  /*! exports provided: TaskDetailsComponent */
  /***/
  function srcAppComponentsTaskDetailsTaskDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function () {
      return TaskDetailsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/services/manage-tasks.service */"./src/app/services/manage-tasks.service.ts");
    var TaskDetailsComponent = /*#__PURE__*/function () {
      function TaskDetailsComponent(route, tasksService) {
        _classCallCheck(this, TaskDetailsComponent);
        this.route = route;
        this.tasksService = tasksService;
      }
      _createClass(TaskDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var taskId = this.route.snapshot.paramMap.get('id');
          this.task = this.tasksService.getTaskDataById(taskId);
        }
      }]);
      return TaskDetailsComponent;
    }();
    TaskDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_3__["ManageTasksService"]
      }];
    };
    TaskDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./task-details.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-details/task-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./task-details.component.scss */"./src/app/components/task-details/task-details.component.scss"))["default"]]
    })], TaskDetailsComponent);

    /***/
  }),
  /***/"./src/app/components/task-list/task-list.component.scss": (
  /*!***************************************************************!*\
    !*** ./src/app/components/task-list/task-list.component.scss ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsTaskListTaskListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n}\n.container button {\n  margin: 10px 10px;\n}\n.container .no-tasks-message {\n  border: 2px solid #3498db;\n  padding: 15px;\n  text-align: center;\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n}\n.container .icon-container {\n  display: flex;\n  align-items: center;\n}\n.container .icon-container img {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ltbHRsNTM5L3Rhc2tNYW5hZ2VtZW50QXBwL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtBQ0NOO0FERUk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBTjtBREdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDRFI7QURHSTtFQUNJLG9CQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIFxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICB9XG4gIFxuICAgIC5uby10YXNrcy1tZXNzYWdlIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7IFxuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiA4MCU7IFxuICAgICAgbWF4LXdpZHRoOiA0MDBweDsgXG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gIFxuICAgIC5pY29uLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmljb24tY29udGFpbmVyIGltZ3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgfVxuICB9IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvbnRhaW5lciBidXR0b24ge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cbi5jb250YWluZXIgLm5vLXRhc2tzLW1lc3NhZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbnRhaW5lciAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaWNvbi1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59Il19 */";

    /***/
  }),
  /***/"./src/app/components/task-list/task-list.component.ts": (
  /*!*************************************************************!*\
    !*** ./src/app/components/task-list/task-list.component.ts ***!
    \*************************************************************/
  /*! exports provided: TaskListComponent */
  /***/
  function srcAppComponentsTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
      return TaskListComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/services/manage-tasks.service */"./src/app/services/manage-tasks.service.ts");
    var TaskListComponent = /*#__PURE__*/function () {
      function TaskListComponent(tasksService) {
        _classCallCheck(this, TaskListComponent);
        this.tasksService = tasksService;
        this.taskList = [];
      }
      _createClass(TaskListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.taskList = this.tasksService.getTask();
        }
      }, {
        key: "updateState",
        value: function updateState(index) {
          console.log("Index", index);
          this.taskList[index].isComplete = !this.taskList[index].isComplete;
          this.tasksService.updateTask(this.taskList);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(index) {
          var isConfirmed = window.confirm("Are you sure you want to delete this task?");
          if (isConfirmed) {
            this.tasksService.deleteTask(index);
            this.taskList = this.tasksService.getTask();
          }
        }
      }]);
      return TaskListComponent;
    }();
    TaskListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_manage_tasks_service__WEBPACK_IMPORTED_MODULE_2__["ManageTasksService"]
      }];
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-task-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./task-list.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-list/task-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./task-list.component.scss */"./src/app/components/task-list/task-list.component.scss"))["default"]]
    })], TaskListComponent);

    /***/
  }),
  /***/"./src/app/services/manage-tasks.service.ts": (
  /*!**************************************************!*\
    !*** ./src/app/services/manage-tasks.service.ts ***!
    \**************************************************/
  /*! exports provided: ManageTasksService */
  /***/
  function srcAppServicesManageTasksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ManageTasksService", function () {
      return ManageTasksService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ManageTasksService = /*#__PURE__*/function () {
      function ManageTasksService() {
        _classCallCheck(this, ManageTasksService);
      }
      _createClass(ManageTasksService, [{
        key: "getTask",
        value: function getTask() {
          var storedTasks = JSON.parse(localStorage.getItem("TodoItems"));
          return storedTasks ? storedTasks : [];
        }
      }, {
        key: "createTask",
        value: function createTask(taskData) {
          var storedTasks = this.getTask();
          localStorage.setItem("TodoItems", JSON.stringify([].concat(_toConsumableArray(storedTasks), [taskData])));
        }
      }, {
        key: "updateTask",
        value: function updateTask(updatedTaskList) {
          localStorage.setItem("TodoItems", JSON.stringify(updatedTaskList));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(id) {
          var storedTasks = this.getTask();
          //deleting the item from the store
          storedTasks.splice(id, 1);
          localStorage.setItem('TodoItems', JSON.stringify(storedTasks));
        }
      }, {
        key: "getTaskDataById",
        value: function getTaskDataById(index) {
          var storedTasks = this.getTask();
          return storedTasks[index];
        }
      }]);
      return ManageTasksService;
    }();
    ManageTasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ManageTasksService);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
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
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
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
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /home/imltl539/taskManagementApp/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map