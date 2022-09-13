(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/components/detail/detail.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/components/detail/detail.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <h1>{{post?.title}}</h1>\r\n    </div>\r\n    <div class=\"col col-md-12\">\r\n      <!-- <p [innerHTML]=\"post?.content\"></p> -->\r\n      <div class=\"ql-container ql-core\" style=\"border-width: 0\">\r\n        <div class=\"ql-editor\" [innerHTML]=\"post?.content\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/post/components/detail/detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/post/components/detail/detail.component.ts ***!
  \************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/seo.service */ "./src/app/shared/services/seo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");






var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(router, route, postService, seoSerivice) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.postService = postService;
        this.seoSerivice = seoSerivice;
        this.post = {};
        this.submitted = false;
        this.route.params.subscribe(function (params) {
            _this.alias = params.alias;
            _this.postService.findOne(_this.alias).then(function (resp) {
                _this.post = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](resp.data, ['title', 'alias', 'content', 'type']);
                _this.seoSerivice.update(_this.post.title);
            });
        });
    }
    PostDetailComponent.prototype.ngOnInit = function () { };
    PostDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
        { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] }
    ]; };
    PostDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'detail-post',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/components/detail/detail.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "./src/app/post/post.module.ts":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _post_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.routing */ "./src/app/post/post.routing.ts");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/media.module */ "./src/app/media/media.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/post/components/detail/detail.component.ts");
/* harmony import */ var _shared_services_posts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/posts.service */ "./src/app/shared/services/posts.service.ts");
/* harmony import */ var _utils_components_modal_signup_modal_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/components/modal-signup/modal-signup.component */ "./src/app/utils/components/modal-signup/modal-signup.component.ts");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/__ivy_ngcc__/esm2015/ngx-smart-modal.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");















var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _post_routing__WEBPACK_IMPORTED_MODULE_5__["PostRoutingModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_6__["MediaModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_8__["UtilsModule"],
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_12__["NgxSmartModalModule"].forChild(),
                ngx_quill__WEBPACK_IMPORTED_MODULE_13__["QuillModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forChild()
            ],
            declarations: [_components_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["PostDetailComponent"]],
            providers: [_shared_services_posts_service__WEBPACK_IMPORTED_MODULE_10__["PostService"]],
            exports: [],
            entryComponents: [_utils_components_modal_signup_modal_signup_component__WEBPACK_IMPORTED_MODULE_11__["ModalSignupComponent"]]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "./src/app/post/post.routing.ts":
/*!**************************************!*\
  !*** ./src/app/post/post.routing.ts ***!
  \**************************************/
/*! exports provided: PostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoutingModule", function() { return PostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detail/detail.component */ "./src/app/post/components/detail/detail.component.ts");




var routes = [
    {
        path: 'detail/:alias',
        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailComponent"]
    }
];
var PostRoutingModule = /** @class */ (function () {
    function PostRoutingModule() {
    }
    PostRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PostRoutingModule);
    return PostRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=post-post-module.js.map