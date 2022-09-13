(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\r\n\r\n<search-bar [config]=\"config\"></search-bar>\r\n<!-- main content sections starts -->\r\n\r\n<section class=\"sm-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n        <h2 class=\"color-light-black\" translate>Choose your favorite category</h2>\r\n        <p class=\"content-title mt-3\" translate>Learn difficult concepts in an intuitive and fun digital classroom.</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-3\" *ngFor=\"let catChunk of listCategories\">\r\n      <div class=\"col-md-4\" *ngFor=\"let item of catChunk\">\r\n        <div class=\"language-card\">\r\n          <a [routerLink]=\"['/tutors/subject']\" [queryParams]=\"{ category: item.alias }\">\r\n            <img\r\n              src=\"{{ item.image && item.image.thumbUrl }}\"\r\n              onerror=\"this.src='/assets/images/no-image.jpg'\"\r\n              class=\"position-relative lang-image\"\r\n              style=\"object-fit: cover\"\r\n            />\r\n            <div class=\"language-content\">\r\n              <p class=\"language m-0 font-md font-weight-bold\">{{ item.name }}</p>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <a [routerLink]=\"['/tutors/subject']\" class=\"btn btn-default border-radius-md\" translate>View All</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"bg-color-light sm-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <h5 class=\"color-light-red\" translate>COURSES CATEGORIES</h5>\r\n        <h2 class=\"color-light-black\" translate>Browse Trending Categories</h2>\r\n      </div>\r\n      <div class=\"col-md-4 text-right rtxt-left\">\r\n        <a [routerLink]=\"['/categories']\" class=\"btn btn-default\"\r\n          ><i class=\"fas fa-eye mr-2 font-sm\"></i>\r\n          <span translate>View All</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt-5 mb-3\">\r\n      <div class=\"col-md-12\">\r\n        <h3 translate>Group Classes</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-cols-1 row-cols-md-3\">\r\n      <app-card-webinar\r\n        class=\"col mb-4\"\r\n        *ngFor=\"let webinar of webinars\"\r\n        [webinar]=\"webinar\"\r\n        [hidden]=\"!webinars.length\"\r\n      ></app-card-webinar>\r\n    </div>\r\n    <div class=\"row mt-5 mb-3\">\r\n      <div class=\"col-md-12\">\r\n        <h3 translate>Course</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"row row-cols-1 row-cols-md-3\">\r\n      <app-card-course\r\n        class=\"col mb-4\"\r\n        *ngFor=\"let c of courses\"\r\n        [course]=\"c\"\r\n        [hidden]=\"!courses.length\"\r\n      ></app-card-course>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"sm-padding text-center\" id=\"testimonial\">\r\n  <div class=\"row no-margin outer\">\r\n    <div class=\"container\">\r\n      <div class=\"row no-margin\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n          <h2 class=\"color-light-black\" translate>Verified Teachers - Connect Instantly</h2>\r\n          <p class=\"content-title mt-3\" translate>\r\n            Top-notch teachers, limitless learning. Explore any interest over live video chat! Discover fun, social, and\r\n            safe learning experiences led by passionate teachers\r\n          </p>\r\n        </div>\r\n        <ngx-slick-carousel\r\n          class=\"col-md-12 col-sm-12 col-xs-12 mt-5 testimonial-slide\"\r\n          #slickModal=\"slick-carousel\"\r\n          [config]=\"slideConfig\"\r\n        >\r\n          <div ngxSlickItem *ngFor=\"let tutor of tutors\" class=\"testimonial-list position-relative\">\r\n            <div class=\"teachers-img\">\r\n              <img src=\"{{ tutor.avatarUrl }}\" />\r\n            </div>\r\n            <div class=\"outer\">\r\n              <div class=\"inner\">\r\n                <div class=\"content text-center\">\r\n                  <h5 class=\"card-title\">{{ tutor.name }}</h5>\r\n                  <div class=\"rating-stars text-center\">\r\n                    <ul id=\"stars\">\r\n                      <star-rating [rate]=\"tutor?.ratingAvg\"></star-rating>\r\n                      <span>{{ tutor?.ratingAvg }} ({{ tutor?.totalRating }})</span>\r\n                    </ul>\r\n                  </div>\r\n                  <hr />\r\n                </div>\r\n                <div class=\"tutor-list text-left\">\r\n                  <h6 translate>I Can Tutor:</h6>\r\n                  <p class=\"color-blue text-line-break\">\r\n                    <a\r\n                      [routerLink]=\"['/tutors/subject']\"\r\n                      [queryParams]=\"{ subject: subject.alias }\"\r\n                      *ngFor=\"let subject of tutor.subjects; let i = index\"\r\n                      >{{ subject.name }}<span *ngIf=\"i < tutor.subjects.length - 1\">, </span>\r\n                    </a>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <a class=\"btn btn-footer btn-block\" [routerLink]=\"['/appointments', tutor.username]\"\r\n                ><i class=\"far fa-paper-plane color-white mr-2\"></i>\r\n                <span> <span translate>Free Trial</span></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </ngx-slick-carousel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"sm-padding bg-color-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-md-12\">\r\n        <h2 class=\"color-light-black\" translate>What students say about our tutors</h2>\r\n      </div>\r\n    </div>\r\n    <div id=\"testimonial-slider\" class=\"flex-slider row no-margin\">\r\n      <ul class=\"slides\">\r\n        <li *ngFor=\"let t of testimonials\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"profile\">\r\n                <img [src]=\"t?.image?.thumbUrl\" class=\"float-left cate-profile box-shadow-lg\" alt=\"\" />\r\n                <div class=\"pl-md\">\r\n                  <h4 class=\"font-weight-bold\">{{ t.name }}</h4>\r\n                  <p\r\n                    class=\"font-md mt-n3 color-light-red font-weight-bold\"\r\n                    style=\"text-transform: capitalize\"\r\n                    translate\r\n                  >\r\n                    {{ t.type }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"mt-5\">\r\n                <img src=\"assets/images/testimonil-qoute.png\" alt=\"\" />\r\n                <p class=\"sub-content mt-3 font-weight-bold\">\r\n                  {{ t.description }}\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"embed-responsive embed-responsive-16by9 video-frame\">\r\n                <iframe class=\"embed-responsive-item\" [src]=\"t.urlYoutube\" allowfullscreen></iframe>\r\n                <iframe\r\n                  width=\"100%\"\r\n                  height=\"100%\"\r\n                  [src]=\"t.urlYoutube\"\r\n                  frameborder=\"0\"\r\n                  allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\r\n                  allowfullscreen\r\n                ></iframe>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 rmt-4\">\r\n        <p class=\"font-sm color-light-red font-weight-bold mb-n3\" translate>More Videos</p>\r\n        <hr />\r\n        <div id=\"testimonial-slider-nav\" class=\"flexslider\">\r\n          <ul class=\"list-unstyled testimonial-slider-nav slides\">\r\n            <li class=\"thumbnail\" *ngFor=\"let t of testimonials\">\r\n              <img [src]=\"t?.image?.thumbUrl\" alt=\"\" />\r\n              <div class=\"mt-2\">\r\n                <h6 class=\"mb-0\">{{ t.name }}</h6>\r\n                <p class=\"card-text mb-0 mt-n1\" style=\"text-transform: capitalize\" translate>{{ t.type }}</p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"\">\r\n  <div class=\"row m-0\">\r\n    <div\r\n      class=\"col-md-6 padding-all-sm d-flex justify-content-center align-items-center\"\r\n      style=\"background-image: url(assets/images/bg-red-pattern.png)\"\r\n    >\r\n      <div class=\"\">\r\n        <h2 class=\"color-white\" translate>How Pinlearn works</h2>\r\n        <p class=\"sub-text max-width-500 font-weight-bold color-white\" translate>\r\n          Learn online with the world's best tutors\r\n        </p>\r\n        <a class=\"btn btn-white mt-2\" [routerLink]=\"'/pages/how-does-it-work'\" translate>Know More</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 p-0\">\r\n      <img src=\"assets/images/tutors01.jpg\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-md-6 p-0\">\r\n      <img src=\"assets/images/tutors02.png\" alt=\"\" />\r\n    </div>\r\n    <div class=\"col-md-6 padding-all-sm d-flex justify-content-center align-items-center bg-vector\">\r\n      <div class=\"\">\r\n        <h2 class=\"\" translate>Tutor with Pinlearn</h2>\r\n        <p class=\"sub-text max-width-500 font-weight-bold\" translate>\r\n          Earn money sharing your expert knowledge with students\r\n        </p>\r\n        <a class=\"btn btn-default mt-2\" [routerLink]=\"'/pages/teach-with-us'\" translate>Become a tutor</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/starter/starter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webinar/webinar.service */ "./src/app/webinar/webinar.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











var StarterComponent = /** @class */ (function () {
    function StarterComponent(authService, route, seoService, categoryService, toasty, webinarService, tutorService, testimonialService, sanitizer, courseService, translate) {
        this.authService = authService;
        this.route = route;
        this.seoService = seoService;
        this.categoryService = categoryService;
        this.toasty = toasty;
        this.webinarService = webinarService;
        this.tutorService = tutorService;
        this.testimonialService = testimonialService;
        this.sanitizer = sanitizer;
        this.courseService = courseService;
        this.translate = translate;
        this.count = 0;
        this.webinars = [];
        this.currentPage = 1;
        this.pageSize = 3;
        this.searchFields = {};
        this.sortOption = {
            sortBy: 'createdAt',
            sortType: 'desc'
        };
        this.slides = [
            { img: 'assets/images/profile/profile-01.png' },
            { img: 'assets/images/profile/profile-02.png' },
            { img: 'assets/images/profile/profile-03.png' },
            { img: 'assets/images/profile/profile-04.png' }
        ];
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
        this.testimonials = [];
        this.courses = [];
        var _categories = this.route.snapshot.data['categories'];
        var rowCategories = _categories.slice(0, 12);
        this.listCategories = lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](rowCategories, 3);
        this.queryTestimonial();
    }
    StarterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.queryParams = this.route.snapshot.queryParams;
        this.config = this.route.snapshot.data.appConfig;
        if (this.config) {
            this.seoService.update(this.config.siteName, this.config.homeSEO);
        }
        if (this.authService.isLoggedin()) {
            this.authService.getCurrentUser().then(function (resp) { return (_this.currentUser = resp); });
        }
        this.queryWebinars();
        this.queryTutors();
        this.queryCourse();
    };
    StarterComponent.prototype.queryWebinars = function () {
        var _this = this;
        var params = Object.assign({
            page: this.currentPage,
            take: this.pageSize,
            sort: "" + this.sortOption.sortBy,
            sortType: "" + this.sortOption.sortType,
            isOpen: true,
            tutorId: this.queryParams.tutorId || '',
            isAvailable: true,
            disabled: false
        }, this.searchFields);
        this.webinarService
            .search(params)
            .then(function (resp) {
            _this.webinars = resp.data.items;
            if (_this.authService.isLoggedin())
                _this.webinars.map(function (item) {
                    _this.webinarService.checkBooked(item._id, 'webinar').then(function (resp) {
                        item.booked = resp.data.booked;
                    });
                });
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    StarterComponent.prototype.queryCourse = function () {
        var _this = this;
        var params = Object.assign({
            page: this.currentPage,
            take: this.pageSize,
            sort: "" + this.sortOption.sortBy,
            sortType: "" + this.sortOption.sortType,
            approved: true,
            disabled: false
        }, this.searchFields);
        this.courseService
            .search(params)
            .then(function (resp) {
            _this.courses = resp.data.items;
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    StarterComponent.prototype.queryTutors = function () {
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
            _this.count = resp.data.count;
            _this.tutors = resp.data.items;
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    StarterComponent.prototype.queryTestimonial = function () {
        var _this = this;
        this.testimonialService
            .search({ take: 50 })
            .then(function (resp) {
            var data = resp.data.items;
            if (data.length) {
                _this.testimonials = data.map(function (item) { return Object.assign(item, { urlYoutube: _this.setUrl(item.idYoutube) }); });
                (function ($) {
                    $(document).ready(function () {
                        $('#testimonial-slider-nav').flexslider({
                            animation: 'slide',
                            controlNav: false,
                            animationLoop: true,
                            slideshow: true,
                            itemWidth: 210,
                            itemMargin: 5,
                            asNavFor: '#testimonial-slider'
                        });
                        $('#testimonial-slider').flexslider({
                            animation: 'fade',
                            minItems: 1,
                            slideshow: true,
                            slideshowSpeed: 3000,
                            animationSpeed: 600,
                            useCSS: false,
                            controlNav: false,
                            sync: '#testimonial-slider-nav'
                        });
                    });
                })(jQuery);
            }
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    StarterComponent.prototype.selectCategory = function (category) {
        if (category && this.searchFields.categoryIds !== category._id) {
            this.searchFields.categoryIds = category._id || '';
            this.queryWebinars();
        }
        else if (!category && this.searchFields.categoryIds !== '') {
            this.searchFields.categoryIds = '';
            this.queryWebinars();
        }
        this.categoryName = category.name || '';
    };
    StarterComponent.prototype.setUrl = function (idYoutube) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + idYoutube);
    };
    StarterComponent.prototype.ngAfterViewInit = function () { };
    StarterComponent.ctorParameters = function () { return [
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["SeoService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_8__["WebinarService"] },
        { type: _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_6__["TutorService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["TestimonialService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
    ]; };
    StarterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./starter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["SeoService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_8__["WebinarService"],
            _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_6__["TutorService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["TestimonialService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _shared_services__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "./src/app/starter/starter.module.ts":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter.component */ "./src/app/starter/starter.component.ts");
/* harmony import */ var _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webinar/webinar.module */ "./src/app/webinar/webinar.module.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _reviews_review_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reviews/review.module */ "./src/app/reviews/review.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _course_course_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../course/course.module */ "./src/app/course/course.module.ts");















var routes = [
    {
        path: '',
        data: {
            title: 'Started',
            urls: [{ title: 'Started', url: '/starter' }, { title: 'Started' }]
        },
        component: _starter_component__WEBPACK_IMPORTED_MODULE_6__["StarterComponent"],
        pathMatch: 'full'
    },
    {
        path: 'home',
        data: {
            title: 'Started',
            urls: [{ title: 'Started', url: '/starter' }, { title: 'Started' }]
        },
        component: _starter_component__WEBPACK_IMPORTED_MODULE_6__["StarterComponent"],
        pathMatch: 'full'
    }
];
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_5__["UtilsModule"],
                _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_7__["WebinarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _reviews_review_module__WEBPACK_IMPORTED_MODULE_11__["ReviewModule"],
                _course_course_module__WEBPACK_IMPORTED_MODULE_14__["CourseModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild()
                // TutorModule
            ],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_6__["StarterComponent"]],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_9__["CategoryService"], _shared_services__WEBPACK_IMPORTED_MODULE_9__["WebinarService"], _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_13__["TutorService"], _shared_services__WEBPACK_IMPORTED_MODULE_9__["TestimonialService"], _shared_services__WEBPACK_IMPORTED_MODULE_9__["CourseService"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map