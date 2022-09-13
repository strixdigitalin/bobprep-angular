(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~appointment-appointment-module~payout-payout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/booking/booking.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/booking/booking.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pt-5 pb-5\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-cols-1 row-cols-md-3\">\r\n      <div class=\"col-md-12 mb-4\">\r\n        <div class=\"card h-100 box-shadow-md border-none position-relative\">\r\n          <!-- <div class=\"video-play\" style=\"background-image: url(../assets/images/tutor/tutor-video-thumbnail.png)\"></div>\r\n          <div class=\"card-play-icon\">\r\n            <button class=\"js-video-button btn-transparent\" data-video-id=\"7TUOI23spt0\">\r\n              <i class=\"fa fa-play\"></i>\r\n            </button>\r\n          </div> -->\r\n          <div class=\"video-play\">\r\n            <iframe\r\n              width=\"100%\"\r\n              height=\"100%\"\r\n              [src]=\"urlYoutube\"\r\n              frameborder=\"0\"\r\n              allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n              allowfullscreen\r\n            ></iframe>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 pr-0\">\r\n                <div class=\"profile-card\">\r\n                  <div class=\"profile mt-n5\">\r\n                    <img src=\"{{tutor.avatarUrl}}\" class=\"float-left profile-lg box-shadow-lg\" alt=\"\" />\r\n                    <div class=\"profile-content-md\">\r\n                      <h5 class=\"pt-lg\">{{tutor.name}}</h5>\r\n                      <div class=\"rating-stars\">\r\n                        <ul id=\"stars\">\r\n                          <star-rating [rate]=\"tutor.ratingAvg\"></star-rating>\r\n                          <span>{{tutor?.ratingAvg}} ({{tutor?.totalRating}})</span>\r\n                        </ul>\r\n                      </div>\r\n                      <div class=\"\">\r\n                        <div class=\"img-flag-tutor\">\r\n                          <img\r\n                            src=\"{{tutor?.country?.flag}}\"\r\n                            alt=\"\"\r\n                            class=\"image-sm\"\r\n                            onerror=\"this.src='/assets/images/no-image.jpg'\"\r\n                          />\r\n                        </div>\r\n                        <span class=\"ml-2 text-secondary\">{{tutor?.country?.name || 'Updating'}}</span>\r\n                        <h5 class=\"mt-3 text-line-break\">{{languageNames.join(', ')}}</h5>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row mt-3\">\r\n                  <div class=\"col-md-12\">\r\n                    <send-message-btn [recipientId]=\"tutor._id\"></send-message-btn>\r\n                    <a class=\"btn btn-white ml-2\" *ngIf=\"!tutor.isFavorite\" (click)=\"favorite()\">\r\n                      <i class=\"far fa-heart color-light-red\"></i>\r\n                    </a>\r\n                    <a class=\"btn btn-white ml-2\" *ngIf=\"tutor.isFavorite\" (click)=\"unFavorite()\">\r\n                      <i class=\"fas fa-heart color-light-red\"></i>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-8 mt-2 rmt-4\">\r\n                <h4 translate>About Me</h4>\r\n                <p class=\"card-text\" [innerHTML]=\"tutor.bio | ellipsis: showChar\" [hidden]=\"!showChar\"></p>\r\n                <p class=\"card-text\" [innerHTML]=\"tutor.bio\" [hidden]=\"showChar\"></p>\r\n                <a href=\"javascript:void(0)\" class=\"morelink\" *ngIf=\"showMore && showChar > 0\" (click)=\"showChar = 0\"\r\n                  ><span translate>Read More</span>...</a\r\n                >\r\n                <a href=\"javascript:void(0)\" class=\"morelink\" *ngIf=\"showMore && !showChar\" (click)=\"showChar = 500\"\r\n                  >...<span translate>Read Less</span></a\r\n                >\r\n                <div class=\"mt-3\">\r\n                  <app-apply-coupon\r\n                    *ngIf=\"coupon && coupon._id && !booking.isFree\"\r\n                    [options]=\"optionsCoupon\"\r\n                    (onApply)=\"applyCoupon($event)\"\r\n                    (isUsed)=\"checkUsedCoupon($event)\"\r\n                  ></app-apply-coupon>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"pb-100\">\r\n  <div class=\"container\">\r\n    <!-- <div class=\"row mb-5\">\r\n          <div class=\"col-md-12 col-lg-12 col-sm-12 text-center\">\r\n              <h2 class=\"color-light-black\">Book an appointment with <br> <span class=\"color-blue\">Jack luvancy</span> today!</h2>\r\n              <p class=\"content-title mt-3\">Amet minim mollit non dese ullamco eullamco est sit aliq <br>Amet minim mollit  st sit aliq Amet minim</p>\r\n          </div>\r\n      </div> -->\r\n    <div class=\"row mb-3\" style=\"justify-content: space-around\">\r\n      <div class=\"col-md-12 d-flex align-items-center justify-content-center classes\">\r\n        <div class=\"d-flex justify-content-end\">\r\n          <label class=\"custom-checkbox mr-4 font-md\" translate\r\n            ><span translate>Paid Class</span>\r\n            <input type=\"radio\" selected name=\"type\" [(ngModel)]=\"booking.isFree\" [value]=\"false\" />\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n          <label class=\"custom-checkbox font-md\"\r\n            ><span translate>Free Class</span>\r\n            <input type=\"radio\" name=\"type\" [(ngModel)]=\"booking.isFree\" [value]=\"true\" [disabled]=\"appliedCoupon\" />\r\n            <span class=\"checkmark\"></span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"col-md-8 rmt-4\">\r\n        <div class=\"d-flex justify-content-start align-items-center rd-block\">\r\n          <label class=\"mb-0 rmb-3 font-weight-bold font-md\" translate>Pick Your Subject</label>\r\n          <div class=\"col-md-6 rp-0\">\r\n            <select class=\"custom-select\" [(ngModel)]=\"booking.targetId\" (change)=\"changeSubject()\">\r\n              <option selected value=\"\" translate>Select Subjects</option>\r\n              <option *ngFor=\"let subject of tutorSubjects\" [value]=\"subject._id\">{{subject.name}}</option>\r\n            </select>\r\n          </div>\r\n          <p class=\"slot-btn mb-0 d-inline-block rmt-2\" *ngIf=\"!appliedCoupon&&!booking.isFree\">\r\n            {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{price}}/<span translate>Slot</span>\r\n          </p>\r\n          <p class=\"slot-btn mb-0 d-inline-block rmt-2\" *ngIf=\"appliedCoupon&&!booking.isFree\">\r\n            <small class=\"text-line-through mr-1\">\r\n              {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{price}}</small\r\n            >\r\n            {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{salePrice ? salePrice : 0}}/<span translate\r\n              >Slot</span\r\n            >\r\n          </p>\r\n        </div>\r\n      </div> -->\r\n\r\n      <p class=\"mt-2\" [hidden]=\"!booking.isFree\" style=\"color: grey\">\r\n        <span translate>The maximum number of free trial classes you can take is</span> {{maxFreeSlotToBook}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row step-to-booking mb-2\">\r\n      <div class=\"col-md-4 d-flex align-items-center justify-content-center flex-direction-column\">\r\n        <h5 translate>Step 1</h5>\r\n        <select class=\"custom-select\" [(ngModel)]=\"selectedCategoryId\" (change)=\"selectMyCategory()\">\r\n          <option selected value=\"\" translate>Select Category</option>\r\n          <option *ngFor=\"let cat of myCategories\" [value]=\"cat._id\">{{cat.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex align-items-center justify-content-center flex-direction-column\">\r\n        <h5 translate>Step 2</h5>\r\n        <select class=\"custom-select\" [(ngModel)]=\"selectedSubjectId\" (change)=\"selectMySubject()\">\r\n          <option selected value=\"\" translate>Select Subject</option>\r\n          <option *ngFor=\"let subject of mySubjects\" [value]=\"subject._id\">{{subject.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex align-items-center justify-content-center flex-direction-column\">\r\n        <h5 translate>Step 3</h5>\r\n        <div class=\"step-3\">\r\n          <select class=\"custom-select mr-1\" [(ngModel)]=\"booking.targetId\" (change)=\"changeTopic()\">\r\n            <option selected value=\"\" translate>Select Topic</option>\r\n            <option *ngFor=\"let topic of myTopics\" [value]=\"topic._id\">{{topic.name}}</option>\r\n          </select>\r\n          <p class=\"slot-btn mb-0 d-inline-block\" *ngIf=\"!appliedCoupon&&!booking.isFree\">\r\n            {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{price}}/<span translate>Slot</span>\r\n          </p>\r\n          <p class=\"slot-btn mb-0 d-inline-block\" *ngIf=\"appliedCoupon&&!booking.isFree\">\r\n            <small class=\"text-line-through mr-1\">\r\n              {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{price}}</small\r\n            >\r\n            {{config?.currencySymbol ? config?.currencySymbol + '' : '$'}}{{salePrice ? salePrice : 0}}/<span translate\r\n              >Slot</span\r\n            >\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"container\">\r\n        <div class=\"card-horizontal\">\r\n          <div class=\"text-center\">\r\n            <h3 class=\"font-weight-bold mb-0\" translate>Schedule</h3>\r\n            <!-- <span (click)=\"bookingPaid()\">Book</span> -->\r\n            <!-- <h5 class=\"mb-0\" translate>June 19, 2020 - June 26, 2020</h5> -->\r\n            <p class=\"font-md mb-0 text-secondary\" translate>All times listed are in your local timezone</p>\r\n          </div>\r\n          <app-tutor-available-time\r\n            [tutorId]=\"tutor._id\"\r\n            [isFree]=\"booking.isFree\"\r\n            (onSelect)=\"chooseSlot($event)\"\r\n          ></app-tutor-available-time>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"pb-100\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 mb-4\">\r\n            <h3 translate>Group Classes</h3>\r\n            <p *ngIf=\"webinarOptions.count==0\" translate>There is no results</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <app-card-webinar\r\n            *ngFor=\"let webinar of webinarOptions.webinars\"\r\n            [webinar]=\"webinar\"\r\n            [hidden]=\"!webinarOptions.webinars.length\"\r\n            class=\"col-md-4 mb-4\"\r\n          ></app-card-webinar>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-12 text-center\" *ngIf=\"webinarOptions.count>1\">\r\n            <ngb-pagination\r\n              [collectionSize]=\"webinarOptions.count\"\r\n              [(page)]=\"webinarOptions.currentPage\"\r\n              [pageSize]=\"webinarOptions.pageSize\"\r\n              (pageChange)=\"queryWebinar()\"\r\n              class=\"card-pagination pagination\"\r\n            >\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 mt-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 mb-4\">\r\n            <h3 translate>Tutor Courses</h3>\r\n            <p *ngIf=\"courseOptions.count==0\" translate>There is no results</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <app-card-course\r\n            *ngFor=\"let course of courseOptions.courses\"\r\n            [course]=\"course\"\r\n            [hidden]=\"!courseOptions.courses.length\"\r\n            class=\"col-md-4 mb-4\"\r\n          ></app-card-course>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-md-12 text-center\" *ngIf=\"courseOptions.count>1\">\r\n            <ngb-pagination\r\n              [collectionSize]=\"courseOptions.count\"\r\n              [(page)]=\"courseOptions.currentPage\"\r\n              [pageSize]=\"courseOptions.pageSize\"\r\n              (pageChange)=\"queryCourse()\"\r\n              class=\"card-pagination pagination\"\r\n            >\r\n            </ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<section class=\"pb-100\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <h2 class=\"color-light-black\" translate>Book Offline Tutoring</h2>\r\n        <p class=\"content-title\" translate>\r\n          <span translate>Search offline tutoring with</span> {{tutor.name}} <span translate>with zip code.</span>\r\n        </p>\r\n        <div class=\"cta-input\">\r\n          <div class=\"input-group mt-4\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"{{'Enter Zip Code' | translate}}\"\r\n              aria-label=\"Recipient's username\"\r\n              aria-describedby=\"basic-addon2\"\r\n              [(ngModel)]=\"zipCode\"\r\n            />\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\" id=\"basic-addon2\" (click)=\"fundTransfer()\" translate>Search</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/cancel/cancel.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/cancel/cancel.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-heading-pro\">\r\n  <div class=\"heading-pro head-custom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 img-tutor\">\r\n          <img [src]=\"tutor?.avatarUrl\" />\r\n        </div>\r\n        <div class=\"col-sm-12 name-tutor\">\r\n          <h3>{{tutor?.name}}</h3>\r\n        </div>\r\n        <!-- <div class=\"col-sm-12 description-tutor\">\r\n          Somethings\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"alert alert-danger\" role=\"alert\" style=\"margin-top: 1%;\">\r\n        <h4 class=\"alert-heading\" translate>Canceled</h4>\r\n        <p><span translate>Canceled booking! redirect in</span> <strong>{{second}}s</strong></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/confirm/confirm.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/confirm/confirm.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h3 *ngIf=\"price!=0\" class=\"modal-title\" id=\"modal-basic-title\" translate>Confirm to redirect to payment page</h3>\r\n  <h3 *ngIf=\"price===0\" class=\"modal-title\" id=\"modal-basic-title\" translate>Booking confirmation</h3>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.close({confirmed: false})\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h5 *ngIf=\"price!=0 || (price === 0 && appliedCoupon)\">\r\n        <span translate>Make your payment for the subject</span> {{subject.name}} with tutor {{tutor?.name}}\r\n      </h5>\r\n      <h5 *ngIf=\"price===0 && !appliedCoupon\">\r\n        <span translate>Confirm to book a free slot with</span> {{subject.name}}\r\n      </h5>\r\n      <p>\r\n        <strong><span translate>Time</span>:</strong> {{slot.startTime |dstFormat | date: 'dd/MM/yyyy HH:mma'}} -\r\n        {{slot.toTime|dstFormat | date:'dd/MM/yyyy HH:mma'}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button class=\"btn btn-success btn-pink\" type=\"button\" (click)=\"confirm()\">\r\n    <div *ngIf=\"price!=0\"><span translate>PAY</span> {{config?.currencySymbol || '$'}}{{price}}</div>\r\n    <span *ngIf=\"price===0\" translate>CONFIRM</span>\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/detail/detail.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/detail/detail.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong translate>Appointment information</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <h4><span translate>Tutor name</span>:&nbsp;{{appointment?.tutor?.name}}</h4>\r\n        <h4 class=\"card-title m-t-10\"><span translate>Subject name</span>:&nbsp; {{appointment?.subject?.name}}</h4>\r\n        <h4 class=\"card-title m-t-10\">\r\n          <span translate>Price</span>:&nbsp; {{appointment?.price | currency : (config?.currencySymbol ?\r\n          config?.currencySymbol + ' ' : '$ '): 'symbol' : '1.0'}}\r\n        </h4>\r\n        <h4 class=\"card-title m-t-10\">\r\n          <span translate>Start time</span>:&nbsp; {{appointment.startTime |dstFormat | date:'short'}}\r\n        </h4>\r\n        <h4 class=\"card-title m-t-10\">\r\n          <span translate>To time</span>:&nbsp; {{appointment.toTime |dstFormat | date:'short'}}\r\n        </h4>\r\n        <h4>\r\n          <span translate>Status</span>: &nbsp;\r\n          <span class=\"badge badge-warning\" *ngIf=\"appointment?.status === 'pending'\" translate>Pending</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"appointment?.status === 'canceled'\" translate>Canceled</span>\r\n          <span class=\"badge badge-primary\" *ngIf=\"appointment?.status === 'progressing'\" translate>In Progress</span>\r\n          <span class=\"badge badge-success\" *ngIf=\"appointment?.status === 'completed'\" translate>Completed</span>&nbsp;\r\n        </h4>\r\n        <h4>\r\n          <span translate>Preview</span>: &nbsp;\r\n          <a [href]=\"appointment?.recordings?.share_url\"></a>\r\n        </h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong translate>Review & rating</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <review-list [options]=\"options\" *ngIf=\"options.appointmentId\"></review-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/success/success.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/success/success.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-heading-pro\">\r\n  <div class=\"heading-pro head-custom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 img-tutor\">\r\n          <img [src]=\"tutor?.avatarUrl\" />\r\n        </div>\r\n        <div class=\"col-sm-12 name-tutor\">\r\n          <h3>{{tutor?.name}}</h3>\r\n        </div>\r\n        <!-- <div class=\"col-sm-12 description-tutor\">\r\n          Somethings\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-12\">\r\n      <div class=\"alert alert-success\" style=\"margin-top: 1%;\" role=\"alert\">\r\n        <h4 class=\"alert-heading\" translate>Success</h4>\r\n        <p><span translate>You have successfully booked, will redirect in</span> <strong>{{second}}s</strong></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/appointment/appointment.module.ts":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.module.ts ***!
  \***************************************************/
/*! exports provided: AppointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentModule", function() { return AppointmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/dts.service */ "./src/app/shared/services/dts.service.ts");
/* harmony import */ var _shared_resolver_config_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/resolver/config.resolver */ "./src/app/shared/resolver/config.resolver.ts");
/* harmony import */ var _shared_services_my_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/services/my-subject.service */ "./src/app/shared/services/my-subject.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../calendar/calendar.module */ "./src/app/calendar/calendar.module.ts");
/* harmony import */ var _reviews_review_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reviews/review.module */ "./src/app/reviews/review.module.ts");
/* harmony import */ var _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/utils.service */ "./src/app/shared/services/utils.service.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components */ "./src/app/appointment/components/index.ts");
/* harmony import */ var _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/booking/booking.component */ "./src/app/appointment/components/booking/booking.component.ts");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/appointment.service */ "./src/app/appointment/services/appointment.service.ts");
/* harmony import */ var _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../tutor/services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");
/* harmony import */ var _calendar_services_calendar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../calendar/services/calendar.service */ "./src/app/calendar/services/calendar.service.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/resolver */ "./src/app/shared/resolver/index.ts");
/* harmony import */ var _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tutor/resolver/detail.resolver */ "./src/app/tutor/resolver/detail.resolver.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../webinar/webinar.module */ "./src/app/webinar/webinar.module.ts");
/* harmony import */ var _message_message_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../message/message.module */ "./src/app/message/message.module.ts");
/* harmony import */ var _course_course_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../course/course.module */ "./src/app/course/course.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




























var routes = [
    {
        path: ':username',
        component: _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_15__["BookingComponent"],
        resolve: {
            tutor: _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["TutorDetailResolver"],
            appConfig: _shared_resolver_config_resolver__WEBPACK_IMPORTED_MODULE_2__["ConfigResolver"]
        },
        data: {
            isFree: false
        }
    },
    {
        path: ':username/success',
        component: _components__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
        resolve: {
            tutor: _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["TutorDetailResolver"]
        }
    },
    {
        path: ':username/cancel',
        component: _components__WEBPACK_IMPORTED_MODULE_14__["CancelComponent"],
        resolve: {
            tutor: _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["TutorDetailResolver"]
        }
    },
    {
        path: ':id/reviews',
        component: _components__WEBPACK_IMPORTED_MODULE_14__["AppointmentDetailComponent"],
        resolve: {
            tutor: _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["TutorDetailResolver"]
        }
    }
];
var AppointmentModule = /** @class */ (function () {
    function AppointmentModule() {
    }
    AppointmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
                _calendar_calendar_module__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"],
                _reviews_review_module__WEBPACK_IMPORTED_MODULE_11__["ReviewModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_13__["NgxStripeModule"].forRoot(),
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_21__["UtilsModule"],
                _webinar_webinar_module__WEBPACK_IMPORTED_MODULE_23__["WebinarModule"],
                _message_message_module__WEBPACK_IMPORTED_MODULE_24__["MessageModule"],
                _course_course_module__WEBPACK_IMPORTED_MODULE_25__["CourseModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__["TranslateModule"].forChild()
            ],
            declarations: [
                _components_booking_booking_component__WEBPACK_IMPORTED_MODULE_15__["BookingComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["CancelComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["AppointmentDetailComponent"],
                _components__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalComponent"]
            ],
            providers: [
                _services_appointment_service__WEBPACK_IMPORTED_MODULE_16__["AppointmentService"],
                _shared_resolver__WEBPACK_IMPORTED_MODULE_19__["SubjectsResolver"],
                _tutor_resolver_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["TutorDetailResolver"],
                _tutor_services_tutor_service__WEBPACK_IMPORTED_MODULE_17__["TutorService"],
                _calendar_services_calendar_service__WEBPACK_IMPORTED_MODULE_18__["CalendarService"],
                _shared_services_utils_service__WEBPACK_IMPORTED_MODULE_12__["UtilService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_22__["WebinarService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_22__["FavoriteService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_22__["CourseService"],
                _shared_services_my_subject_service__WEBPACK_IMPORTED_MODULE_3__["MySubjectService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_22__["MyCategoryService"],
                _shared_services__WEBPACK_IMPORTED_MODULE_22__["MyTopicService"],
                _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"]
            ],
            entryComponents: [_components__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalComponent"]]
        })
    ], AppointmentModule);
    return AppointmentModule;
}());



/***/ }),

/***/ "./src/app/appointment/components/booking/booking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appointment/components/booking/booking.component.ts ***!
  \*********************************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/dts.service */ "./src/app/shared/services/dts.service.ts");
/* harmony import */ var _shared_services_my_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/my-subject.service */ "./src/app/shared/services/my-subject.service.ts");
/* harmony import */ var _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/coupon.service */ "./src/app/shared/services/coupon.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/appointment.service */ "./src/app/appointment/services/appointment.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ "./src/app/appointment/components/index.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














var BookingComponent = /** @class */ (function () {
    function BookingComponent(route, toasty, appointmentService, router, modalService, authService, sanitizer, languageService, webinarService, tutorFavoriteService, couponService, courseService, mySubjectService, myCategoryService, myTopicService, translate, dtsService) {
        this.route = route;
        this.toasty = toasty;
        this.appointmentService = appointmentService;
        this.router = router;
        this.modalService = modalService;
        this.authService = authService;
        this.sanitizer = sanitizer;
        this.languageService = languageService;
        this.webinarService = webinarService;
        this.tutorFavoriteService = tutorFavoriteService;
        this.couponService = couponService;
        this.courseService = courseService;
        this.mySubjectService = mySubjectService;
        this.myCategoryService = myCategoryService;
        this.myTopicService = myTopicService;
        this.translate = translate;
        this.dtsService = dtsService;
        this.tutor = {};
        this.booking = {
            startTime: '',
            toTime: '',
            tutorId: '',
            targetId: '',
            redirectSuccessUrl: '',
            cancelUrl: '',
            isFree: false,
            couponCode: ''
        };
        this.submitted = false;
        this.loading = false;
        this.subject = null;
        this.isLoggedin = false;
        this.showMore = false;
        this.showChar = 500;
        this.languageNames = [];
        this.objectLanguage = {};
        this.salePrice = 0;
        this.usedCoupon = false;
        this.appliedCoupon = false;
        this.couponCode = '';
        this.optionsCoupon = {
            tutorId: '',
            targetType: 'subject',
            couponId: '',
            topicId: ''
        };
        this.webinarOptions = {
            webinars: [],
            currentPage: 1,
            pageSize: 6,
            sortOption: {
                sortBy: 'createdAt',
                sortType: 'asc'
            },
            count: 0
        };
        this.courseOptions = {
            courses: [],
            currentPage: 1,
            pageSize: 6,
            sortOption: {
                sortBy: 'createdAt',
                sortType: 'asc'
            },
            count: 0
        };
        this.myCategories = [];
        this.mySubjects = [];
        this.myTopics = [];
        this.filterMyCategory = {
            currentPage: 1,
            pageSize: 10,
            sortOption: {
                sortBy: 'createdAt',
                sortType: 'desc'
            },
            total: 0,
            loading: false
        };
        this.filterMySubject = {
            currentPage: 1,
            pageSize: 10,
            sortOption: {
                sortBy: 'createdAt',
                sortType: 'desc'
            },
            myCategoryId: '',
            total: 0,
            loading: false
        };
        this.filterMyTopic = {
            currentPage: 1,
            pageSize: 10,
            sortOption: {
                sortBy: 'createdAt',
                sortType: 'desc'
            },
            myCategoryId: '',
            mySubjectId: '',
            total: 0,
            loading: false
        };
        this.selectedCategoryId = '';
        this.selectedSubjectId = '';
        this.topic = null;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params.isFree) {
                if (params.isFree == 'true') {
                    _this.booking.isFree = true;
                }
            }
        });
        this.config = this.route.snapshot.data['appConfig'];
        this.maxFreeSlotToBook = this.config.maxFreeSlotToBook;
        this.tutor = this.route.snapshot.data.tutor;
        this.price = this.tutor.price1On1Class;
        this.booking.tutorId = this.tutor._id;
        this.isLoggedin = this.authService.isLoggedin();
        this.urlYoutube = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.tutor.idYoutube);
        this.languages = this.languageService.getLang();
        this.objectLanguage = this.languageService.languages;
        if (this.tutor.languages) {
            this.mapLanguageName(this.tutor.languages);
        }
        if (this.tutor) {
            this.queryWebinar();
            this.queryCourse();
            this.salePrice = this.tutor.price1On1Class;
            this.queryMyCategories();
        }
        this.optionsCoupon.tutorId = this.tutor._id;
        this.getCurrentCoupon();
        if (this.tutor && this.tutor.bio && this.tutor.bio.length > this.showChar) {
            this.showMore = true;
        }
    };
    BookingComponent.prototype.chooseSlot = function (time) {
        var _this = this;
        if (!this.isLoggedin) {
            return this.toasty.error(this.translate.instant('Please login to booking'));
        }
        this.timeSelected = {
            startTime: time.start,
            toTime: time.end
        };
        if (time.extendedProps.isDST) {
            this.timeSelected.startTime = time.extendedProps.item.startTime;
            this.timeSelected.toTime = time.extendedProps.item.toTime;
        }
        this.appointmentService
            .checkOverlap({ startTime: this.timeSelected.startTime, toTime: this.timeSelected.toTime })
            .then(function (resp) {
            if (!resp.data.checkOverlap) {
                if (window.confirm('This slot is overlap with your booked slot. Still book it?')) {
                    _this.booking.startTime = _this.timeSelected.startTime;
                    _this.booking.toTime = _this.timeSelected.toTime;
                    _this.bookingAppointment();
                }
            }
            else {
                _this.booking.startTime = _this.timeSelected.startTime;
                _this.booking.toTime = _this.timeSelected.toTime;
                _this.bookingAppointment();
            }
        })
            .catch(function (e) {
            _this.toasty.error(_this.translate.instant(e.data.data.message || 'Something went wrong, please try again!'));
        });
    };
    BookingComponent.prototype.bookingAppointment = function () {
        var _this = this;
        if (!this.isLoggedin) {
            return this.toasty.error(this.translate.instant('Please login to booking'));
        }
        this.submitted = true;
        if (this.booking.targetId === '' || this.booking.subjectId === null) {
            this.toasty.error(this.translate.instant('Please choose subject'));
            this.submitted = false;
            this.loading = false;
            return;
        }
        if (this.booking.startTime === '') {
            this.toasty.error(this.translate.instant('Please choose one slot'));
            this.submitted = false;
            this.loading = false;
            return;
        }
        this.booking.redirectSuccessUrl = window.appConfig.url + this.router.url + '/success';
        this.booking.cancelUrl = window.appConfig.url + this.router.url + '/cancel';
        // this.booking.isFree = false;
        if (!this.usedCoupon && this.coupon && this.coupon._id && this.appliedCoupon) {
            this.booking.couponCode = this.coupon.code;
        }
        var modalStripe = this.modalService.open(_components__WEBPACK_IMPORTED_MODULE_10__["ConfirmModalComponent"], {
            size: 'lg'
        });
        modalStripe.componentInstance.subject = this.subject;
        modalStripe.componentInstance.tutor = this.tutor;
        modalStripe.componentInstance.slot = this.timeSelected;
        modalStripe.componentInstance.price = modalStripe.componentInstance.price = this.booking.isFree
            ? 0
            : this.appliedCoupon
                ? this.salePrice
                : this.price;
        modalStripe.componentInstance.config = this.config;
        modalStripe.componentInstance.appliedCoupon = this.appliedCoupon;
        if (!this.usedCoupon && this.coupon && this.coupon._id && this.appliedCoupon) {
            this.booking.couponCode = this.coupon.code;
        }
        modalStripe.result.then(function (result) {
            if (result.confirmed) {
                if (_this.booking.isFree) {
                    _this.appointmentService.checkFree({ tutorId: _this.booking.tutorId }).then(function (resp) {
                        if (resp.data.canBookFree === true && resp.data.canBookFreeWithTutor) {
                            _this.appointmentService
                                .create(_this.booking)
                                .then(function () {
                                _this.toasty.success(_this.translate.instant('Booking successfully!'));
                                _this.submitted = false;
                                return _this.router.navigate(['/users/lessons']);
                            })
                                .catch(function (err) {
                                _this.submitted = false;
                                _this.router.navigate(['/payments/cancel']);
                                _this.toasty.error(_this.translate.instant(err.data.message));
                            });
                        }
                        else {
                            if (resp.data.canBookFree === false) {
                                _this.submitted = false;
                                return _this.toasty.error(_this.translate.instant('You have taken for the maximum number of free trial classes'));
                            }
                            if (resp.data.canBookFreeWithTutor === false) {
                                _this.submitted = false;
                                return _this.toasty.error(_this.translate.instant('You have taken a free trial class of this tutor before'));
                            }
                        }
                    });
                }
                else if (_this.salePrice <= 0 && _this.appliedCoupon) {
                    _this.appointmentService
                        .create(_this.booking)
                        .then(function () {
                        _this.toasty.success(_this.translate.instant('Booking successfully!'));
                        _this.submitted = false;
                        return _this.router.navigate(['/users/lessons']);
                    })
                        .catch(function (err) {
                        _this.submitted = false;
                        _this.router.navigate(['/payments/cancel']);
                        _this.toasty.error(_this.translate.instant(err.data.message));
                    });
                }
                else {
                    localStorage.setItem('paymentParams', JSON.stringify(_this.booking));
                    _this.submitted = false;
                    return _this.router.navigate(['/payments/pay'], {
                        queryParams: {
                            type: 'booking',
                            targetType: 'subject',
                            targetName: _this.subject.name,
                            tutorName: _this.tutor.name
                        },
                        state: _this.booking
                    });
                }
            }
            else {
                _this.submitted = false;
                return;
            }
        }, function () { });
    };
    BookingComponent.prototype.mapLanguageName = function (languageKeys) {
        var _this = this;
        languageKeys.forEach(function (key) {
            _this.languageNames.push(_this.objectLanguage[key]);
        });
    };
    BookingComponent.prototype.changeTopic = function () {
        var _this = this;
        this.topic = this.myTopics.find(function (item) { return item._id === _this.booking.targetId; });
        if (this.topic) {
            this.price = this.topic.price;
            this.optionsCoupon.topicId = this.topic._id;
        }
    };
    BookingComponent.prototype.queryWebinar = function () {
        var _this = this;
        var params = Object.assign({
            page: this.webinarOptions.currentPage,
            take: this.webinarOptions.pageSize,
            sort: "" + this.webinarOptions.sortOption.sortBy,
            sortType: "" + this.webinarOptions.sortOption.sortType,
            isOpen: true,
            tutorId: this.tutor._id || ''
        });
        this.webinarService
            .search(params)
            .then(function (resp) {
            _this.webinarOptions.count = resp.data.count;
            _this.webinarOptions.webinars = resp.data.items;
        })
            .catch(function () { return alert(_this.translate.instant('Something went wrong, please try again!')); });
    };
    BookingComponent.prototype.queryCourse = function () {
        var _this = this;
        var params = Object.assign({
            page: this.courseOptions.currentPage,
            take: this.courseOptions.pageSize,
            sort: "" + this.courseOptions.sortOption.sortBy,
            sortType: "" + this.courseOptions.sortOption.sortType,
            isOpen: true,
            tutorId: this.tutor._id || ''
        });
        this.courseService
            .search(params)
            .then(function (resp) {
            _this.courseOptions.count = resp.data.count;
            _this.courseOptions.courses = resp.data.items;
        })
            .catch(function () { return alert('Something went wrong, please try again!'); });
    };
    BookingComponent.prototype.favorite = function () {
        var _this = this;
        if (!this.isLoggedin)
            this.toasty.error(this.translate.instant('Please login to use this feature!'));
        else {
            var params = Object.assign({
                tutorId: this.tutor._id,
                type: 'tutor'
            }, {});
            this.tutorFavoriteService
                .favorite(params, 'tutor')
                .then(function (res) {
                _this.tutor.isFavorite = true;
                _this.toasty.success(_this.translate.instant('Added to your favorite tutor list successfully!'));
            })
                .catch(function () { return _this.toasty.error(_this.translate.instant('Something went wrong, please try again!')); });
        }
    };
    BookingComponent.prototype.unFavorite = function () {
        var _this = this;
        if (!this.isLoggedin)
            this.toasty.error(this.translate.instant('Please loggin to use this feature!'));
        else {
            this.tutorFavoriteService
                .unFavorite(this.tutor._id, 'tutor')
                .then(function (res) {
                _this.tutor.isFavorite = false;
                _this.toasty.success(_this.translate.instant('Deleted from your favorite tutor list successfully!'));
            })
                .catch(function () { return _this.toasty.error(_this.translate.instant('Something went wrong, please try again!')); });
        }
    };
    BookingComponent.prototype.fundTransfer = function () {
        this.router.navigate(['/tutors/zipCode'], {
            queryParams: { zipCode: this.zipCode }
        });
    };
    BookingComponent.prototype.checkUsedCoupon = function (used) {
        this.usedCoupon = used;
    };
    BookingComponent.prototype.applyCoupon = function (event) {
        this.appliedCoupon = event.appliedCoupon;
        if (this.appliedCoupon && this.coupon && this.authService.isLoggedin()) {
            if (this.coupon.type === 'percent') {
                this.saleValue = this.coupon.value;
                this.salePrice = this.price - this.price * (this.saleValue / 100);
            }
            else if (this.coupon.type === 'money') {
                this.saleValue = this.coupon.value;
                this.salePrice = this.price - this.saleValue;
            }
        }
        else {
            this.salePrice = this.price || 0;
        }
    };
    BookingComponent.prototype.getCurrentCoupon = function () {
        var _this = this;
        this.couponService
            .getCurrentCoupon({
            targetType: this.optionsCoupon.targetType,
            tutorId: this.optionsCoupon.tutorId
        })
            .then(function (resp) {
            if (resp && resp.data) {
                _this.coupon = resp.data;
                if (_this.coupon && _this.authService.isLoggedin()) {
                    _this.optionsCoupon.couponId = _this.coupon._id;
                }
            }
        });
    };
    BookingComponent.prototype.queryMyCategories = function () {
        var _this = this;
        this.filterMyCategory.loading = true;
        var params = Object.assign({
            page: this.filterMyCategory.currentPage,
            take: this.filterMyCategory.pageSize,
            sort: "" + this.filterMyCategory.sortOption.sortBy,
            sortType: "" + this.filterMyCategory.sortOption.sortType,
            tutorId: this.tutor._id
        });
        this.myCategoryService
            .search(params)
            .then(function (resp) {
            if (resp.data && resp.data.items) {
                _this.filterMyCategory.total = resp.data.count;
                _this.myCategories = resp.data.items;
            }
            _this.filterMyCategory.loading = false;
        })
            .catch(function (err) {
            _this.filterMyCategory.loading = false;
            return _this.toasty.error(_this.translate.instant(err.data && err.data.data && err.data.data.message
                ? err.data.data.message
                : 'Something went wrong, please try again!'));
        });
    };
    BookingComponent.prototype.selectMyCategory = function () {
        this.filterMySubject.myCategoryId = this.selectedCategoryId;
        this.mySubjects = [];
        this.myTopics = [];
        this.booking.targetId = '';
        this.selectedSubjectId = '';
        this.booking.targetId = '';
        if (this.selectedCategoryId) {
            this.queryMySubjects();
        }
    };
    BookingComponent.prototype.queryMySubjects = function () {
        var _this = this;
        this.filterMySubject.loading = true;
        var params = Object.assign({
            page: this.filterMySubject.currentPage,
            take: this.filterMySubject.pageSize,
            sort: "" + this.filterMySubject.sortOption.sortBy,
            sortType: "" + this.filterMySubject.sortOption.sortType,
            myCategoryId: this.filterMySubject.myCategoryId,
            tutorId: this.tutor._id
        });
        this.mySubjectService
            .search(params)
            .then(function (resp) {
            if (resp.data && resp.data.items) {
                _this.filterMySubject.total = resp.data.count;
                _this.mySubjects = resp.data.items;
            }
            _this.filterMySubject.loading = false;
        })
            .catch(function (err) {
            _this.filterMySubject.loading = false;
            return _this.toasty.error(_this.translate.instant(err.data && err.data.data && err.data.data.message
                ? err.data.data.message
                : 'Something went wrong, please try again!'));
        });
    };
    BookingComponent.prototype.selectMySubject = function () {
        var _this = this;
        this.filterMyTopic.mySubjectId = this.selectedSubjectId;
        this.filterMyTopic.myCategoryId = this.selectedCategoryId;
        this.myTopics = [];
        this.booking.targetId = '';
        if (this.selectedSubjectId && this.selectedCategoryId) {
            this.queryMyTopics();
            this.subject = this.mySubjects.find(function (item) { return item._id === _this.selectedSubjectId; });
        }
    };
    BookingComponent.prototype.queryMyTopics = function () {
        var _this = this;
        this.filterMyTopic.loading = true;
        var params = Object.assign({
            page: this.filterMyTopic.currentPage,
            take: this.filterMyTopic.pageSize,
            sort: "" + this.filterMyTopic.sortOption.sortBy,
            sortType: "" + this.filterMyTopic.sortOption.sortType,
            mySubjectId: this.filterMyTopic.mySubjectId,
            myCategoryId: this.filterMyTopic.myCategoryId,
            tutorId: this.tutor._id
        });
        this.myTopicService
            .search(params)
            .then(function (resp) {
            if (resp.data && resp.data.items) {
                _this.filterMyTopic.total = resp.data.count;
                _this.myTopics = resp.data.items;
            }
            _this.filterMyTopic.loading = false;
        })
            .catch(function (err) {
            _this.filterMyTopic.loading = false;
            return _this.toasty.error(_this.translate.instant(err.data && err.data.data && err.data.data.message
                ? err.data.data.message
                : 'Something went wrong, please try again!'));
        });
    };
    BookingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["WebinarService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"] },
        { type: _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["CourseService"] },
        { type: _shared_services_my_subject_service__WEBPACK_IMPORTED_MODULE_2__["MySubjectService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["MyCategoryService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["MyTopicService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
        { type: _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"] }
    ]; };
    BookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./booking.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/booking/booking.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _services_appointment_service__WEBPACK_IMPORTED_MODULE_7__["AppointmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["LanguageService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["WebinarService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"],
            _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_3__["CouponService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["CourseService"],
            _shared_services_my_subject_service__WEBPACK_IMPORTED_MODULE_2__["MySubjectService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["MyCategoryService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_8__["MyTopicService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            _shared_services_dts_service__WEBPACK_IMPORTED_MODULE_1__["DTSService"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/appointment/components/cancel/cancel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/appointment/components/cancel/cancel.component.ts ***!
  \*******************************************************************/
/*! exports provided: CancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelComponent", function() { return CancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var CancelComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function CancelComponent(route, router) {
        this.route = route;
        this.router = router;
        this.tutor = {};
    }
    CancelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tutor = this.route.snapshot.data.tutor;
        this.second = 5;
        var i = window.setInterval(function () {
            if (_this.second > 0) {
                _this.second = _this.second - 1;
            }
            else {
                window.clearInterval(i);
                _this.router.navigate(['/']);
            }
        }, 1000);
    };
    CancelComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cancel.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/cancel/cancel.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CancelComponent);
    return CancelComponent;
}());



/***/ }),

/***/ "./src/app/appointment/components/confirm/confirm.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appointment/components/confirm/confirm.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(activeModal, toasty, route) {
        this.activeModal = activeModal;
        this.toasty = toasty;
        this.route = route;
        this.price = 0;
        this.appliedCoupon = false;
    }
    ConfirmModalComponent.prototype.ngOnInit = function () { };
    ConfirmModalComponent.prototype.confirm = function () {
        this.activeModal.close({ confirmed: true });
    };
    ConfirmModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    ConfirmModalComponent.propDecorators = {
        subject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        tutor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        slot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        appliedCoupon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    ConfirmModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/confirm/confirm.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/appointment/components/detail/detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/appointment/components/detail/detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: AppointmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentDetailComponent", function() { return AppointmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../appointment/services/appointment.service */ "./src/app/appointment/services/appointment.service.ts");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








var AppointmentDetailComponent = /** @class */ (function () {
    function AppointmentDetailComponent(route, toasty, appointmentService, authService, translate) {
        this.route = route;
        this.toasty = toasty;
        this.appointmentService = appointmentService;
        this.authService = authService;
        this.translate = translate;
        this.options = {
            appointmentId: '',
            type: 'appointment',
            tutorId: '',
            userId: ''
        };
    }
    AppointmentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.route.snapshot.data['appConfig'];
        this.authService.getCurrentUser().then(function (resp) {
            _this.type = resp.type;
        });
        this.findOne();
    };
    AppointmentDetailComponent.prototype.findOne = function () {
        var _this = this;
        this.aId = this.route.snapshot.paramMap.get('id');
        this.appointmentService.findOne(this.aId).then(function (resp) {
            _this.appointment = lodash__WEBPACK_IMPORTED_MODULE_4__["pick"](resp.data, [
                'status',
                'tutor',
                'user',
                'startTime',
                'toTime',
                'id',
                'subject',
                'price'
            ]);
            _this.options.appointmentId = _this.appointment._id;
            _this.options.tutorId = _this.appointment.tutor._id;
            _this.options.userId = _this.appointment.user._id;
        });
    };
    AppointmentDetailComponent.prototype.cancelEvent = function (info) {
        if (!info && info.status !== 'canceled') {
            return this.toasty.error(this.translate.instant('Something went wrong, please try again.'));
        }
        this.appointment.status = 'canceled';
    };
    AppointmentDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    AppointmentDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'detail-appointment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/detail/detail.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], AppointmentDetailComponent);
    return AppointmentDetailComponent;
}());



/***/ }),

/***/ "./src/app/appointment/components/index.ts":
/*!*************************************************!*\
  !*** ./src/app/appointment/components/index.ts ***!
  \*************************************************/
/*! exports provided: SuccessComponent, CancelComponent, AppointmentDetailComponent, ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success/success.component */ "./src/app/appointment/components/success/success.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return _success_success_component__WEBPACK_IMPORTED_MODULE_0__["SuccessComponent"]; });

/* harmony import */ var _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel/cancel.component */ "./src/app/appointment/components/cancel/cancel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CancelComponent", function() { return _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_1__["CancelComponent"]; });

/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/appointment/components/detail/detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppointmentDetailComponent", function() { return _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__["AppointmentDetailComponent"]; });

/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/appointment/components/confirm/confirm.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]; });

// export * from './booking/booking.component';




// export * from './tutor-card/tutor-card.component';


/***/ }),

/***/ "./src/app/appointment/components/success/success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/appointment/components/success/success.component.ts ***!
  \*********************************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var SuccessComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function SuccessComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tutor = this.route.snapshot.data.tutor;
        this.second = 5;
        var i = window.setInterval(function () {
            if (_this.second > 0) {
                _this.second = _this.second - 1;
            }
            else {
                window.clearInterval(i);
                _this.router.navigate(['/']);
            }
        }, 1000);
    };
    SuccessComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointment/components/success/success.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/tutor/resolver/detail.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/tutor/resolver/detail.resolver.ts ***!
  \***************************************************/
/*! exports provided: TutorDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorDetailResolver", function() { return TutorDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_tutor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tutor.service */ "./src/app/tutor/services/tutor.service.ts");




var TutorDetailResolver = /** @class */ (function () {
    function TutorDetailResolver(service, router) {
        this.service = service;
        this.router = router;
    }
    TutorDetailResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.service
            .findOne(route.params.username)
            .then(function (resp) { return resp.data; })
            .catch(function (err) {
            if (err.data.code == '404')
                _this.router.navigate(['pages/404-not-found']);
            else {
                _this.router.navigate(['pages/error', err.data.code]);
            }
        });
    };
    TutorDetailResolver.ctorParameters = function () { return [
        { type: _services_tutor_service__WEBPACK_IMPORTED_MODULE_3__["TutorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TutorDetailResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_tutor_service__WEBPACK_IMPORTED_MODULE_3__["TutorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TutorDetailResolver);
    return TutorDetailResolver;
}());



/***/ })

}]);
//# sourceMappingURL=default~appointment-appointment-module~payout-payout-module.js.map