(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/components/categories/categories.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/components/categories/categories.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"sm-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"category-list\">\r\n          <div id=\"accordion\">\r\n            <div class=\"card border-none\">\r\n              <div class=\"card-header\" id=\"headingOne\">\r\n                <h5 class=\"mb-0\">\r\n                  <button\r\n                    class=\"btn btn-link\"\r\n                    data-toggle=\"collapse\"\r\n                    data-target=\"#collapseOne\"\r\n                    aria-expanded=\"true\"\r\n                    aria-controls=\"collapseOne\"\r\n                  >\r\n                    <span translate>Category</span> <i class=\"fa fa-chevron-down float-right font-sm\"></i>\r\n                  </button>\r\n                </h5>\r\n              </div>\r\n              <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                <div class=\"card-body card-category-list\">\r\n                  <form class=\"mb-3\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"input-group mb-3\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"{{'Search by Category' | translate}}\"\r\n                          aria-label=\"Recipient's username\"\r\n                          aria-describedby=\"basic-addon2\"\r\n                          [(ngModel)]=\"categoryInput\"\r\n                          [ngModelOptions]=\"{standalone: true}\"\r\n                        />\r\n                        <div class=\"input-group-append\">\r\n                          <span class=\"input-group-text\" (click)=\"search($event)\"><i class=\"fa fa-search\"></i></span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                  <div class=\"custom-control custom-checkbox\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"all\"\r\n                      (change)=\"categoryChange('',true)\"\r\n                      [(ngModel)]=\"isAllCheck\"\r\n                      [checked]=\"isAllCheck\"\r\n                      [disabled]=\"!categoryIds.length\"\r\n                    />\r\n                    <label class=\"custom-control-label\" for=\"all\" translate>All</label>\r\n                  </div>\r\n                  <div class=\"custom-control custom-checkbox\" *ngFor=\"let item of categoriesDisplay; let i=index\">\r\n                    <input\r\n                      type=\"checkbox\"\r\n                      class=\"custom-control-input\"\r\n                      id=\"{{item._id}}\"\r\n                      (change)=\"categoryChange(item._id)\"\r\n                      [checked]=\"categoryIds.includes(item._id) && !isAllCheck\"\r\n                    />\r\n                    <label class=\"custom-control-label\" for=\"{{item._id}}\">{{item.name}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"row row-cols-1 row-cols-md-2\">\r\n          <app-card-webinar class=\"col mb-4\" *ngFor=\"let item of webinars\" [webinar]=\"item\"></app-card-webinar>\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-md-12 text-center\">\r\n            <ngb-pagination\r\n              [collectionSize]=\"total\"\r\n              [(page)]=\"page\"\r\n              [pageSize]=\"pageSize\"\r\n              (pageChange)=\"pageChange()\"\r\n              class=\"card-pagination pagination\"\r\n              *ngIf=\"total > pageSize\"\r\n            ></ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"sm-padding bg-color-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n        <h2 class=\"\" translate>See how you can improve your grades</h2>\r\n        <p class=\"content-title mt-3\" translate>Learn difficult concepts in an intuitive and fun digital classroom.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card-icon text-center\">\r\n          <img src=\"assets/images/webinar/best-tutor.svg\" alt=\"\" />\r\n          <h4 translate>The Best Tutors.</h4>\r\n          <div class=\"border-solid\"></div>\r\n          <p class=\"sub-content\" translate>\r\n            We work with many of the bests in their subjects. All our tutors are highly experienced in their fields and\r\n            have proven skills and certifications in online teaching.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card-icon text-center\">\r\n          <img src=\"assets/images/webinar/personalized.svg\" alt=\"\" />\r\n          <h4 translate>Personalized.</h4>\r\n          <div class=\"border-solid\"></div>\r\n          <p class=\"sub-content\" translate>\r\n            A custom learning experience for everyone prepared by skilled tutors strictly according to the assessments,\r\n            strengths, and aptitude of individual learners.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card-icon text-center\">\r\n          <img src=\"assets/images/webinar/variety-of-subject.svg\" alt=\"\" />\r\n          <h4 translate>Variety of Subjects.</h4>\r\n          <div class=\"border-solid\"></div>\r\n          <p class=\"sub-content\" translate>\r\n            Learning for all levels, grades, and subjects with 1000+ skilled tutors for a variety of subjects and\r\n            skills. Every tutor on our platform is well-trained in eLearning skills.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card-icon text-center\">\r\n          <img src=\"assets/images/webinar/live-learn-cloud.svg\" alt=\"\" />\r\n          <h4 translate>bobprep cloud.</h4>\r\n          <div class=\"border-solid\"></div>\r\n          <p class=\"sub-content\" translate>\r\n            All your learning resources, courses, recorded sessions, progress history, etc. is saved safely on our cloud\r\n            to offer you instant access irrespective of the platform or device you use.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"sm-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n        <h2 class=\"\" translate>A personalized solution to match your needs</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"card h-100 box-shadow-xs border-none\">\r\n          <div class=\"d-flex justify-content-center align-items-center pt-3\">\r\n            <div class=\"img-card bg-color-green\">\r\n              <img src=\"assets/images/webinar/categories/parents.svg\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <h3 class=\"card-title\" translate>Parents</h3>\r\n            <p class=\"card-text mb-0\" translate>Choose a safe and secure tutoring option</p>\r\n            <p class=\"card-text\" translate>\r\n              Reduce stress from homework while staying involved in your child's learning\r\n            </p>\r\n            <a class=\"color-light-red\" [routerLink]=\"['/auth/sign-up']\"\r\n              ><span translate>Register Now</span> <i class=\"fa fa-chevron-right font-sm ml-1\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 rmt-4\">\r\n        <div class=\"card h-100 box-shadow-xs border-none\">\r\n          <div class=\"d-flex justify-content-center align-items-center pt-3\">\r\n            <div class=\"img-card bg-color-orange\">\r\n              <img src=\"assets/images/webinar/categories/personalized.svg\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <h3 class=\"card-title\" translate>Personalized</h3>\r\n            <p class=\"card-text mb-0\" translate>Sign up for free Learn with professional tutors</p>\r\n            <p class=\"card-text\" translate>Study at your own pace with advanced digital technology</p>\r\n            <a class=\"color-light-red\" [routerLink]=\"['/auth/sign-up']\" translate\r\n              ><span translate>Register Now</span> <i class=\"fa fa-chevron-right font-sm ml-1\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 rmt-4\">\r\n        <div class=\"card h-100 box-shadow-xs border-none\">\r\n          <div class=\"d-flex justify-content-center align-items-center pt-3\">\r\n            <div class=\"img-card bg-color-dark-green\">\r\n              <img src=\"assets/images/webinar/categories/tutor.svg\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body text-center\">\r\n            <h3 class=\"card-title\" translate>Tutor</h3>\r\n            <p class=\"card-text mb-0\" translate>Customize a tutoring program for your school</p>\r\n            <p class=\"card-text\" translate>Provide academic support beyond the classroom</p>\r\n            <a class=\"color-light-red\" [routerLink]=\"['/auth/sign-up']\"\r\n              ><span translate>Apply to be a bobprep tutor</span> <i class=\"fa fa-chevron-right font-sm ml-1\"></i\r\n            ></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"sm-padding bg-color-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n        <h2 class=\"\" translate>Get started quickly and easily</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-center step-user row-cols-1 row-cols-md-3\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"number-step bg-color-green\">1</div>\r\n        <h4 class=\"mt-2\" translate>Search for subject</h4>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"number-step bg-color-orange\">2</div>\r\n        <h4 class=\"mt-2\" translate>Choose your tutor</h4>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"number-step bg-color-blue\">3</div>\r\n        <h4 class=\"mt-2\" translate>Start or schedule a lesson</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- <section class=\"sm-padding text-center\" id=\"testimonial\">\r\n  <div class=\"row no-margin outer\">\r\n    <div class=\"container\">\r\n      <div class=\"row no-margin\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n          <h2 class=\"color-light-black\" translate>What students say about our tutors</h2>\r\n        </div>\r\n        <ngx-slick-carousel\r\n          [config]=\"slideConfig\"\r\n          class=\"col-md-12 col-sm-12 col-xs-12 mt-5 testimonial-slide\"\r\n          #slickModal=\"slick-carousel\"\r\n        >\r\n          <div ngxSlickItem class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"assets/images/profile/profile-01.png\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <p class=\"font-md\" translate><strong translate>Arlene McCoy</strong>,<span translate>Parent</span></p>\r\n                  <p class=\"card-text\" translate>This is content of McCoy</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div ngxSlickItem class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"assets/images/profile/profile-02.png\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <p class=\"font-md\"><strong translate>Alex San</strong>,<span translate>Ingenieur</span></p>\r\n                  <p class=\"card-text\" translate>This is content of Alex</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div ngxSlickItem class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"assets/images/profile/profile-03.png\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <p class=\"font-md\">\r\n                    <strong><span translate>David</span>,</strong><span translate>Parent</span>\r\n                  </p>\r\n                  <p class=\"card-text\" translate>This is content of David</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div ngxSlickItem class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"assets/images/profile/profile-04.png\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <p class=\"font-md\"><strong translate>Alan</strong>,<span translate>Maman</span></p>\r\n                  <p class=\"card-text\" translate>This is content of Alan</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ngx-slick-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n<section class=\"sm-padding text-center\" id=\"testimonial\">\r\n  <div class=\"row no-margin outer\">\r\n    <div class=\"container\">\r\n      <div class=\"row no-margin\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n          <h2 class=\"color-light-black\" translate>Verified Teachers - Connect Instantly</h2>\r\n          <p class=\"content-title mt-3\" translate>\r\n            Top-notch teachers, limitless learning. Explore any interest over live video chat! Discover fun, social, and\r\n            safe learning experiences led by passionate teachers\r\n          </p>\r\n        </div>\r\n        <ngx-slick-carousel\r\n          class=\"col-md-12 col-sm-12 col-xs-12 mt-5 testimonial-slide\"\r\n          #slickModal=\"slick-carousel\"\r\n          [config]=\"slideConfig\"\r\n        >\r\n          <div ngxSlickItem *ngFor=\"let tutor of tutors\" class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"{{ tutor.avatarUrl }}\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <h5 class=\"card-title\">{{ tutor.name }}</h5>\r\n                  <div class=\"rating-stars text-center\">\r\n                    <ul id=\"stars\">\r\n                      <star-rating [rate]=\"tutor?.ratingAvg\"></star-rating>\r\n                      <span>{{ tutor?.ratingAvg }} ({{ tutor?.totalRating }})</span>\r\n                    </ul>\r\n                  </div>\r\n                  <hr />\r\n                </div>\r\n                <div class=\"tutor-list text-left\">\r\n                  <h6 translate>I Can Tutor:</h6>\r\n                  <p class=\"color-blue text-line-break\">\r\n                    <a\r\n                      [routerLink]=\"['/tutors/subject']\"\r\n                      [queryParams]=\"{ subject: subject.alias }\"\r\n                      *ngFor=\"let subject of tutor.subjects; let i = index\"\r\n                      >{{ subject.name }}<span *ngIf=\"i < tutor.subjects.length - 1\">, </span>\r\n                    </a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <a class=\"btn btn-footer btn-block\" [routerLink]=\"['/appointments', tutor.username]\"\r\n                ><i class=\"far fa-paper-plane color-white mr-2\"></i>\r\n                <span> <span translate>Free Trial</span></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </ngx-slick-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/__ivy_ngcc__/esm2015/ngx-smart-modal.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/app/categories/components/index.ts");
/* harmony import */ var _categories_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories.routing */ "./src/app/categories/categories.routing.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../webinar/webinar.module */ "./src/app/webinar/webinar.module.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/resolver */ "./src/app/shared/resolver/index.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _reviews_review_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reviews/review.module */ "./src/app/reviews/review.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");

















var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _reviews_review_module__WEBPACK_IMPORTED_MODULE_15__["ReviewModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_6__["UtilsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
                ngx_smart_modal__WEBPACK_IMPORTED_MODULE_8__["NgxSmartModalModule"].forChild(),
                ngx_stripe__WEBPACK_IMPORTED_MODULE_14__["NgxStripeModule"].forRoot(),
                _categories_routing__WEBPACK_IMPORTED_MODULE_10__["CategoriesRoutingModule"],
                _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_12__["WebinarModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_16__["SlickCarouselModule"]
            ],
            declarations: [_components__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"]],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_11__["WebinarService"], _shared_services__WEBPACK_IMPORTED_MODULE_11__["CategoryService"], _shared_resolver__WEBPACK_IMPORTED_MODULE_13__["CategoryResolver"], _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_1__["TutorService"]],
            exports: []
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/categories.routing.ts ***!
  \**************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/categories/components/index.ts");




var routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/components/categories/categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/categories/components/categories/categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/seo.service */ "./src/app/shared/services/seo.service.ts");
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webinar/webinar.service */ "./src/app/webinar/webinar.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");







var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(webinarsService, route, router, tutorService, seoService, translate) {
        var _this = this;
        this.webinarsService = webinarsService;
        this.route = route;
        this.router = router;
        this.tutorService = tutorService;
        this.seoService = seoService;
        this.translate = translate;
        this.page = 1;
        this.pageSize = 4;
        this.webinars = [];
        this.total = 0;
        this.sort = '';
        this.sortType = '';
        this.categories = [];
        this.categoriesDisplay = [];
        this.categoryIds = [];
        this.isAllCheck = true;
        this.categoryCheckList = [];
        this.categoryInput = '';
        this.tutors = [];
        this.searchFields = {
            categoryIds: ''
        };
        this.loading = false;
        this.slideConfig = {
            centerMode: false,
            centerPadding: '60px',
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        dots: false,
                        centerPadding: '40px',
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        dots: false,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        vertical: false,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        seoService.update('Categories');
        this.route.queryParams.subscribe(function (params) {
            _this.searchFields = Object.assign(_this.searchFields, params);
            if (params.categoryIds && params.categoryIds.length) {
                _this.categoryIds = [];
                params.categoryIds.split(',').forEach(function (id) {
                    _this.categoryIds.push(id);
                    _this.isAllCheck = false;
                });
            }
            _this.query();
        });
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var cate_data = this.route.snapshot.data['categories'];
        if (cate_data) {
            this.categories = this.categoriesDisplay = cate_data;
        }
        this.queryTutors();
    };
    CategoriesComponent.prototype.query = function () {
        var _this = this;
        var params = Object.assign({
            page: this.page,
            take: this.pageSize,
            sort: this.sort,
            sortType: this.sortType
        }, this.searchFields);
        if (!this.loading) {
            this.loading = true;
            this.webinarsService
                .search(params)
                .then(function (resp) {
                _this.total = resp.data.count;
                _this.webinars = resp.data.items;
                _this.loading = false;
            })
                .catch(function () {
                _this.loading = false;
                alert(_this.translate.instant('Something went wrong, please try again!'));
            });
        }
    };
    CategoriesComponent.prototype.queryTutors = function () {
        var _this = this;
        var params = Object.assign({
            page: 0,
            take: 10,
            sort: 'createdAt',
            sortType: 'asc',
            isHomePage: true
        });
        this.tutorService
            .search(params)
            .then(function (resp) {
            _this.tutors = resp.data.items;
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    CategoriesComponent.prototype.categoryChange = function (id, isAll) {
        if (isAll === void 0) { isAll = false; }
        if (!id) {
            this.isAllCheck = true;
            this.searchFields.categoryIds = '';
            this.categoryIds = [];
        }
        else {
            this.isAllCheck = false;
            var index = this.categoryIds.indexOf(id);
            if (index !== -1) {
                this.categoryIds.splice(index, 1);
            }
            else {
                this.categoryIds.push(id);
            }
            this.searchFields.categoryIds = this.categoryIds.join(',');
        }
        if (!this.categoryIds.length) {
            this.isAllCheck = true;
        }
        this.router.navigate(['/categories'], {
            queryParams: { categoryIds: this.searchFields.categoryIds }
        });
        this.query();
    };
    CategoriesComponent.prototype.search = function (event) {
        var _this = this;
        this.categoriesDisplay = [];
        if (this.categoryInput === '') {
            this.categoriesDisplay = this.categories;
        }
        else {
            this.categories.forEach(function (element) {
                if (element.name.toLocaleLowerCase('en-US').includes(_this.categoryInput.toLocaleLowerCase('en-US')))
                    _this.categoriesDisplay.push(element);
            });
        }
    };
    CategoriesComponent.prototype.pageChange = function () {
        $('html, body').animate({ scrollTop: 0 });
        this.query();
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_5__["WebinarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_2__["TutorService"] },
        { type: _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
    ]; };
    CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/components/categories/categories.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_webinar_webinar_service__WEBPACK_IMPORTED_MODULE_5__["WebinarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_2__["TutorService"],
            _shared_services_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/components/index.ts":
/*!************************************************!*\
  !*** ./src/app/categories/components/index.ts ***!
  \************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/components/categories/categories.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return _categories_categories_component__WEBPACK_IMPORTED_MODULE_0__["CategoriesComponent"]; });




/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map