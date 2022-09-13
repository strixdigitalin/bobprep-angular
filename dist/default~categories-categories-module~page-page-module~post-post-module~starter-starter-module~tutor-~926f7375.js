(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375"],{

/***/ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js ***!
  \*************************************************************************************/
/*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselComponent", function() { return SlickCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickCarouselModule", function() { return SlickCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlickItemDirective", function() { return SlickItemDirective; });
/* harmony import */ var W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





/**
 * @fileoverview added by tsickle
 * Generated from: slick.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Slick component
 */


var _c0 = ["*"];

var SlickCarouselComponent = /*#__PURE__*/function () {
  /**
   * Constructor
   * @param {?} el
   * @param {?} zone
   * @param {?} platformId
   */
  function SlickCarouselComponent(el, zone, platformId) {
    Object(W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickCarouselComponent);

    this.el = el;
    this.zone = zone;
    this.platformId = platformId;
    this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // access from parent component can be a problem with change detection timing. Please use afterChange output

    this.currentIndex = 0;
    this.slides = [];
    this.initialized = false;
    this._removedSlides = [];
    this._addedSlides = [];
  }
  /**
   * On component destroy
   * @return {?}
   */


  Object(W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlickCarouselComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.unslick();
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      this.ngAfterViewChecked();
    }
    /**
     * On component view checked
     * @return {?}
     */

  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      var _this = this;

      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId)) {
        return;
      }

      if (this._addedSlides.length > 0 || this._removedSlides.length > 0) {
        /** @type {?} */
        var nextSlidesLength = this.slides.length - this._removedSlides.length + this._addedSlides.length;

        if (!this.initialized) {
          if (nextSlidesLength > 0) {
            this.initSlick();
          } // if nextSlidesLength is zere, do nothing

        } else if (nextSlidesLength === 0) {
          // unslick case
          this.unslick();
        } else {
          this._addedSlides.forEach(
          /**
          * @param {?} slickItem
          * @return {?}
          */
          function (slickItem) {
            _this.slides.push(slickItem);

            _this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.$instance.slick('slickAdd', slickItem.el.nativeElement);
            });
          });

          this._addedSlides = [];

          this._removedSlides.forEach(
          /**
          * @param {?} slickItem
          * @return {?}
          */
          function (slickItem) {
            /** @type {?} */
            var idx = _this.slides.indexOf(slickItem);

            _this.slides = _this.slides.filter(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s !== slickItem;
            });

            _this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.$instance.slick('slickRemove', idx);
            });
          });

          this._removedSlides = [];
        }
      }
    }
    /**
     * init slick
     * @return {?}
     */

  }, {
    key: "initSlick",
    value: function initSlick() {
      var _this2 = this;

      this.slides = this._addedSlides;
      this._addedSlides = [];
      this._removedSlides = [];
      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this2.$instance = jQuery(_this2.el.nativeElement);

        _this2.$instance.on('init',
        /**
        * @param {?} event
        * @param {?} slick
        * @return {?}
        */
        function (event, slick) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.init.emit({
              event: event,
              slick: slick
            });
          });
        });

        _this2.$instance.slick(_this2.config);

        _this2.zone.run(
        /**
        * @return {?}
        */
        function () {
          var _a;

          _this2.initialized = true;
          _this2.currentIndex = ((_a = _this2.config) === null || _a === void 0 ? void 0 : _a.initialSlide) || 0;
        });

        _this2.$instance.on('afterChange',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} currentSlide
        * @return {?}
        */
        function (event, slick, currentSlide) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.afterChange.emit({
              event: event,
              slick: slick,
              currentSlide: currentSlide,
              first: currentSlide === 0,
              last: slick.$slides.length === currentSlide + slick.options.slidesToScroll
            });

            _this2.currentIndex = currentSlide;
          });
        });

        _this2.$instance.on('beforeChange',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} currentSlide
        * @param {?} nextSlide
        * @return {?}
        */
        function (event, slick, currentSlide, nextSlide) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.beforeChange.emit({
              event: event,
              slick: slick,
              currentSlide: currentSlide,
              nextSlide: nextSlide
            });

            _this2.currentIndex = nextSlide;
          });
        });

        _this2.$instance.on('breakpoint',
        /**
        * @param {?} event
        * @param {?} slick
        * @param {?} breakpoint
        * @return {?}
        */
        function (event, slick, breakpoint) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.breakpoint.emit({
              event: event,
              slick: slick,
              breakpoint: breakpoint
            });
          });
        });

        _this2.$instance.on('destroy',
        /**
        * @param {?} event
        * @param {?} slick
        * @return {?}
        */
        function (event, slick) {
          _this2.zone.run(
          /**
          * @return {?}
          */
          function () {
            _this2.destroy.emit({
              event: event,
              slick: slick
            });

            _this2.initialized = false;
          });
        });
      });
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */

  }, {
    key: "addSlide",
    value: function addSlide(slickItem) {
      this._addedSlides.push(slickItem);
    }
    /**
     * @param {?} slickItem
     * @return {?}
     */

  }, {
    key: "removeSlide",
    value: function removeSlide(slickItem) {
      this._removedSlides.push(slickItem);
    }
    /**
     * Slick Method
     * @param {?} index
     * @return {?}
     */

  }, {
    key: "slickGoTo",
    value: function slickGoTo(index) {
      var _this3 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this3.$instance.slick('slickGoTo', index);
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickNext",
    value: function slickNext() {
      var _this4 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this4.$instance.slick('slickNext');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPrev",
    value: function slickPrev() {
      var _this5 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this5.$instance.slick('slickPrev');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPause",
    value: function slickPause() {
      var _this6 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this6.$instance.slick('slickPause');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "slickPlay",
    value: function slickPlay() {
      var _this7 = this;

      this.zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        _this7.$instance.slick('slickPlay');
      });
    }
    /**
     * @return {?}
     */

  }, {
    key: "unslick",
    value: function unslick() {
      var _this8 = this;

      if (this.$instance) {
        this.zone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _this8.$instance.slick('unslick');
        });
        this.$instance = undefined;
      }

      this.initialized = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */

  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _this9 = this;

      if (this.initialized) {
        /** @type {?} */
        var config = changes['config'];

        if (config.previousValue !== config.currentValue && config.currentValue !== undefined) {
          /** @type {?} */
          var refresh = config.currentValue['refresh'];
          /** @type {?} */

          var newOptions = Object.assign({}, config.currentValue);
          delete newOptions['refresh'];
          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this9.$instance.slick('slickSetOption', newOptions, refresh);
          });
        }
      }
    }
  }]);

  return SlickCarouselComponent;
}();

SlickCarouselComponent.ɵfac = function SlickCarouselComponent_Factory(t) {
  return new (t || SlickCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
};

SlickCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SlickCarouselComponent,
  selectors: [["ngx-slick-carousel"]],
  inputs: {
    config: "config"
  },
  outputs: {
    afterChange: "afterChange",
    beforeChange: "beforeChange",
    breakpoint: "breakpoint",
    destroy: "destroy",
    init: "init"
  },
  exportAs: ["slick-carousel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
    /**
    * @return {?}
    */
    function () {
      return SlickCarouselComponent;
    }),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function SlickCarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
/** @nocollapse */

SlickCarouselComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }];
};

SlickCarouselComponent.propDecorators = {
  config: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
  }],
  afterChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  beforeChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  breakpoint: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  destroy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }],
  init: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickCarouselComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      selector: 'ngx-slick-carousel',
      exportAs: 'slick-carousel',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return SlickCarouselComponent;
        }),
        multi: true
      }],
      template: '<ng-content></ng-content>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }];
  }, {
    afterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    beforeChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    breakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    destroy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    init: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }]
  });
})();

if (false) {}

var SlickItemDirective = /*#__PURE__*/function () {
  /**
   * @param {?} el
   * @param {?} platformId
   * @param {?} carousel
   */
  function SlickItemDirective(el, platformId, carousel) {
    Object(W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickItemDirective);

    this.el = el;
    this.platformId = platformId;
    this.carousel = carousel;
  }
  /**
   * @return {?}
   */


  Object(W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlickItemDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
        this.carousel.addSlide(this);
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
        this.carousel.removeSlide(this);
      }
    }
  }]);

  return SlickItemDirective;
}();

SlickItemDirective.ɵfac = function SlickItemDirective_Factory(t) {
  return new (t || SlickItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](SlickCarouselComponent, 1));
};

SlickItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: SlickItemDirective,
  selectors: [["", "ngxSlickItem", ""]]
});
/** @nocollapse */

SlickItemDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
    }]
  }, {
    type: SlickCarouselComponent,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickItemDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[ngxSlickItem]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
      }]
    }, {
      type: SlickCarouselComponent,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
      }]
    }];
  }, null);
})();

if (false) {}
/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var SlickCarouselModule = function SlickCarouselModule() {
  Object(W_my_projects_MY_TEMPLATES_FREELANCE_projects_Bobprep_front_end_code_frontend_1039_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlickCarouselModule);
};

SlickCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SlickCarouselModule
});
SlickCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function SlickCarouselModule_Factory(t) {
    return new (t || SlickCarouselModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SlickCarouselModule, {
    declarations: function declarations() {
      return [SlickCarouselComponent, SlickItemDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
    },
    exports: function exports() {
      return [SlickCarouselComponent, SlickItemDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SlickCarouselModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [SlickCarouselComponent, SlickItemDirective],
      exports: [SlickCarouselComponent, SlickItemDirective]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: ngx-slick-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ })

}]);
//# sourceMappingURL=default~categories-categories-module~page-page-module~post-post-module~starter-starter-module~tutor-~926f7375.js.map