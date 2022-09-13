(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/cancel/cancel.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/cancel/cancel.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-danger\" role=\"alert\">\r\n  <span translate>Payment cancel! will redirect in</span> <strong>{{second}}s</strong>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/pay/pay.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/pay/pay.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"sm-padding\">\r\n  <div class=\"container\">\r\n    <div class=\"card-horizontal max-width-900 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <h3 translate>Make your Payment for the {{targetType}} {{targetName}}, with Tutor {{tutorName}}</h3>\r\n        </div>\r\n      </div>\r\n      <form class=\"form-stripe\" (ngSubmit)=\"buy()\" [formGroup]=\"stripeTest\">\r\n        <div class=\"row input-border mt-4\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"name\"\r\n                placeholder=\"{{'Enter name' | translate}}\"\r\n                name=\"cardHolderName\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.name.errors && (stripeTest.controls.name.dirty || stripeTest.controls.name.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.name.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Name is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"address_line1\"\r\n                placeholder=\"{{'Enter address' | translate}}\"\r\n                name=\"line1\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.address_line1.errors && (stripeTest.controls.address_line1.dirty || stripeTest.controls.address_line1.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.address_line1.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Address is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"address_city\"\r\n                placeholder=\"{{'Enter city' | translate}}\"\r\n                name=\"city\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.address_city.errors && (stripeTest.controls.address_city.dirty || stripeTest.controls.address_city.touched || submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.address_city.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  City is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"address_state\"\r\n                placeholder=\"{{'Enter state' | translate}}\"\r\n                name=\"state\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.address_state.errors && (stripeTest.controls.address_state.dirty || stripeTest.controls.address_state.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.address_state.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  State is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group hide-clear-all\">\r\n              <!-- <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"address_country\"\r\n                placeholder=\"{{'Enter country' | translate}}\"\r\n                name=\"country\"\r\n              /> -->\r\n              <ng-select\r\n                [items]=\"countries\"\r\n                appendTo=\"body\"\r\n                name=\"country\"\r\n                bindLabel=\"name\"\r\n                bindValue=\"code\"\r\n                [multiple]=\"false\"\r\n                [closeOnSelect]=\"true\"\r\n                formControlName=\"address_country\"\r\n                placeholder=\"{{'Enter country' | translate}}\"\r\n              >\r\n              </ng-select>\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.address_country.errors && (stripeTest.controls.address_country.dirty || stripeTest.controls.address_country.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.address_country.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Country is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                formControlName=\"address_zip\"\r\n                placeholder=\"{{'Enter zip code' | translate}}\"\r\n                name=\"zip-code\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.address_zip.errors && (stripeTest.controls.address_zip.dirty || stripeTest.controls.address_zip.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.address_zip.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Zip code is required\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-md-12\" *ngIf=\"type === 'gift'\">\r\n            <div class=\"form-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"{{'Recipient\\'s email id' | translate}}\"\r\n                name=\"email\"\r\n                formControlName=\"emailRecipient\"\r\n              />\r\n              <div\r\n                class=\"gift-courseErrors\"\r\n                *ngIf=\"stripeTest.controls.emailRecipient.errors && (stripeTest.controls.emailRecipient.dirty || stripeTest.controls.emailRecipient.touched|| submitted)\"\r\n              >\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.emailRecipient.errors.required\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Email is required\r\n                </p>\r\n                <p\r\n                  [hidden]=\"!stripeTest.controls.emailRecipient.errors.email\"\r\n                  class=\"error\"\r\n                  style=\"margin-bottom: 0\"\r\n                  translate\r\n                >\r\n                  Email is invalid format\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <ngx-stripe-card\r\n              class=\"form-control form-group\"\r\n              [options]=\"cardOptions\"\r\n              [elementsOptions]=\"elementsOptions\"\r\n            ></ngx-stripe-card>\r\n          </div>\r\n          <!-- <div class=\"col-md-12\">\r\n            <div class=\"row mb-3 mt-3 row-cols-1 row-cols-lg-2\">\r\n              <div class=\"col-8\">\r\n                <img src=\"assets/images/dummy-card2.png\" alt=\"\" class=\"float-left image-md mr-2\" />\r\n                <h5 class=\"font-md\">1234 1234 1234 1234</h5>\r\n              </div>\r\n              <div class=\"col-4 text-right\">\r\n                <span class=\"font-weight-bold mr-3 font-md\">12/23</span>\r\n                <span class=\"font-weight-bold font-md\">455</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-3 mt-3 row-cols-1 row-cols-lg-2\">\r\n              <div class=\"col-8\">\r\n                <img src=\"assets/images/dummy-card3.png\" alt=\"\" class=\"float-left image-md mr-2\" />\r\n                <h5 class=\"font-md\">1234 1234 1234 1234</h5>\r\n              </div>\r\n              <div class=\"col-4 text-right\">\r\n                <span class=\"font-weight-bold mr-3 font-md\">12/23</span>\r\n                <span class=\"font-weight-bold font-md\">455</span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <button\r\n                class=\"btn btn-green mr-2 btn-pay-now\"\r\n                [disabled]=\"loading || (type === 'gift' && stripeTest.get('emailRecipient').value === (currentUser && currentUser.email))\"\r\n              >\r\n                <span translate>Pay Now</span>\r\n                <div *ngIf=\"loading\" class=\"spinner-border text-primary\" role=\"status\">\r\n                  <span class=\"sr-only\" translate><span translate>Loading</span>...</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <!-- <button class=\"btn btn-green mr-2 btn-pay-now\" type=\"button\" (click)=\"confirm()\" [disabled]=\"loading\">\r\n              <span translate>Confirm</span>\r\n              <div *ngIf=\"loading\" class=\"spinner-border text-primary\" role=\"status\">\r\n                <span class=\"sr-only\" translate><span translate>Loading</span>...</span>\r\n              </div>\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/success/success.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/success/success.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sm-padding data-table\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <img src=\"assets/images/payment-sucess.svg\" alt=\"payment success\" class=\"payment-img\" />\r\n        <h6 class=\"color-green mt-3\" translate><span translate>Payment success! Will redirect in</span> {{second}}s</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/appointment/services/appointment.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/appointment/services/appointment.service.ts ***!
  \*************************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var AppointmentService = /** @class */ (function () {
    function AppointmentService(restangular) {
        this.restangular = restangular;
    }
    AppointmentService.prototype.create = function (credentials) {
        return this.restangular.all('appointments/book').post(credentials).toPromise();
    };
    AppointmentService.prototype.search = function (params) {
        return this.restangular.one('appointments').get(params).toPromise();
    };
    AppointmentService.prototype.cancel = function (id, data) {
        return this.restangular.one('appointments', id).one('cancel').customPOST(data).toPromise();
    };
    AppointmentService.prototype.checkFree = function (tutorId) {
        return this.restangular.one('appointments/check').one('free').customPOST(tutorId).toPromise();
    };
    AppointmentService.prototype.findOne = function (id) {
        return this.restangular.one('appointments', id).get().toPromise();
    };
    AppointmentService.prototype.appointmentTutor = function (tutorId, params) {
        return this.restangular.one('appointments/tutors', tutorId).get(params).toPromise();
    };
    AppointmentService.prototype.checkOverlap = function (data) {
        return this.restangular.one('appointments/check').one('overlap').customPOST(data).toPromise();
    };
    AppointmentService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], AppointmentService);
    return AppointmentService;
}());



/***/ }),

/***/ "./src/app/payment/components/cancel/cancel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/payment/components/cancel/cancel.component.ts ***!
  \***************************************************************/
/*! exports provided: PaymentCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentCancelComponent", function() { return PaymentCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var PaymentCancelComponent = /** @class */ (function () {
    function PaymentCancelComponent(router) {
        this.router = router;
        this.second = 0;
    }
    PaymentCancelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.second = 5;
        this.interval = window.setInterval(function () {
            if (_this.second > 0) {
                _this.second = _this.second - 1;
            }
            else {
                window.clearInterval(_this.interval);
                _this.router.navigate(['/users/transaction/list']);
            }
        }, 1000);
    };
    PaymentCancelComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.interval);
    };
    PaymentCancelComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PaymentCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-cancel',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cancel.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/cancel/cancel.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentCancelComponent);
    return PaymentCancelComponent;
}());



/***/ }),

/***/ "./src/app/payment/components/pay/pay.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment/components/pay/pay.component.ts ***!
  \*********************************************************/
/*! exports provided: PayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../appointment/services/appointment.service */ "./src/app/appointment/services/appointment.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../payment.service */ "./src/app/payment/payment.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











var PayComponent = /** @class */ (function () {
    function PayComponent(router, stripeService, fb, auth, toasty, route, appointmentService, paymentService, countryService, translate) {
        var _this = this;
        this.router = router;
        this.stripeService = stripeService;
        this.fb = fb;
        this.auth = auth;
        this.toasty = toasty;
        this.route = route;
        this.appointmentService = appointmentService;
        this.paymentService = paymentService;
        this.countryService = countryService;
        this.translate = translate;
        this.cardHolderName = '';
        this.cardOptions = {
            hidePostalCode: true,
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    fontWeight: 300,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: 'rgba(0, 157, 151, 0.75)'
                    }
                }
            }
        };
        // optional parameters
        this.elementsOptions = {
            locale: 'en'
        };
        this.stripeToken = null;
        this.loading = false;
        this.submitted = false;
        if (this.auth.isLoggedin()) {
            this.auth.getCurrentUser().then(function (resp) { return (_this.currentUser = resp); });
        }
        this.type = this.route.snapshot.queryParams.type;
        this.targetType = this.route.snapshot.queryParams.targetType;
        this.targetName = this.route.snapshot.queryParams.targetName;
        this.tutorName = this.route.snapshot.queryParams.tutorName;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (e) {
            var navigation = _this.router.getCurrentNavigation();
            if (navigation && navigation.extras && navigation.extras.state) {
                _this.paymentParams = navigation.extras.state;
            }
        });
    }
    PayComponent.prototype.ngOnInit = function () {
        if (!this.paymentParams) {
            var params = localStorage.getItem('paymentParams');
            if (params) {
                this.paymentParams = JSON.parse(params);
            }
            else {
                this.router.navigate(['/home']);
            }
        }
        this.countries = this.countryService.getCountry();
        this.stripeService.setKey(window.appConfig.stripeKey);
        this.stripeTest = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            emailRecipient: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            address_line1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            address_city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            address_state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            address_country: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            //address_zip: ['']
        });
    };
    PayComponent.prototype.buy = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.stripeTest);
        if (this.stripeTest.invalid) {
            return this.toasty.error(this.translate.instant('Please complete the required fields'));
        }
        this.loading = true;
        var name = this.stripeTest.get('name').value;
        var emailRecipient = this.stripeTest.get('emailRecipient').value;
        if (this.type === 'gift' && !emailRecipient) {
            this.loading = false;
            return this.toasty.error(this.translate.instant('Please enter email of recipient'));
        }
        if (!name) {
            this.loading = false;
            return this.toasty.error(this.translate.instant('Please enter your name'));
        }
        if (!this.paymentParams) {
            return this.toasty.error(this.translate.instant('Can not found payment info, please try again!'));
        }
        if (this.targetType === 'webinar' || this.targetType === 'course') {
            this.paymentParams.emailRecipient = emailRecipient || '';
            this.paymentService
                .enroll(this.paymentParams)
                .then(function (resp) {
                _this.submitted = false;
                _this.paymentIntent = resp.data;
                if (_this.paymentIntent.paymentMode === 'test')
                    return _this.router.navigate(['/payments/success']);
                _this.confirmPayment();
            })
                .catch(function (err) {
                _this.loading = false;
                _this.submitted = false;
                _this.toasty.error(_this.translate.instant((err.data && err.data.data && err.data.data.message) ||
                    err.data.message ||
                    'Something went wrong, please try again!'));
                _this.router.navigate(['/payments/cancel']);
            });
        }
        else {
            this.appointmentService
                .create(this.paymentParams)
                .then(function (resp) {
                _this.submitted = false;
                _this.paymentIntent = resp.data;
                if (_this.paymentIntent.paymentMode === 'test')
                    return _this.router.navigate(['/payments/success']);
                _this.confirmPayment();
            })
                .catch(function (err) {
                _this.loading = false;
                _this.submitted = false;
                localStorage.removeItem('title');
                localStorage.removeItem('paymentParams');
                _this.toasty.error(_this.translate.instant((err.data && err.data.data && err.data.data.message) ||
                    err.data.message ||
                    'Something went wrong, please try again!'));
                _this.router.navigate(['/payments/cancel']);
            });
        }
    };
    PayComponent.prototype.confirmPayment = function () {
        var _this = this;
        var name = this.stripeTest.get('name').value;
        var address_line1 = this.stripeTest.get('address_line1').value;
        var address_city = this.stripeTest.get('address_city').value;
        var address_state = this.stripeTest.get('address_state').value;
        var address_country = this.stripeTest.get('address_country').value;
        //const address_zip = this.stripeTest.get('address_zip').value;
        this.stripeService
            .confirmCardPayment(this.paymentIntent.stripeClientSecret, {
            payment_method: {
                card: this.card.element,
                billing_details: {
                    name: name
                }
            },
            shipping: {
                name: name,
                address: {
                    line1: address_line1,
                    city: address_city,
                    country: address_country,
                    //postal_code: address_zip,
                    state: address_state
                }
            }
        })
            .subscribe(function (result) {
            _this.loading = false;
            localStorage.removeItem('title');
            localStorage.removeItem('paymentParams');
            if (result && result.paymentIntent && result.paymentIntent.status === 'succeeded') {
                return _this.router.navigate(['/payments/success']);
            }
            else if (result && result.error) {
                _this.toasty.error(_this.translate.instant(result.error.message));
                return _this.router.navigate(['/payments/cancel']);
            }
        });
    };
    PayComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"] },
        { type: _payment_service__WEBPACK_IMPORTED_MODULE_9__["PaymentService"] },
        { type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
    ]; };
    PayComponent.propDecorators = {
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeCardComponent"],] }]
    };
    PayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/pay/pay.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_8__["AppointmentService"],
            _payment_service__WEBPACK_IMPORTED_MODULE_9__["PaymentService"],
            _shared_services__WEBPACK_IMPORTED_MODULE_6__["CountryService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
    ], PayComponent);
    return PayComponent;
}());



/***/ }),

/***/ "./src/app/payment/components/success/success.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/payment/components/success/success.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessComponent", function() { return PaymentSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var PaymentSuccessComponent = /** @class */ (function () {
    function PaymentSuccessComponent(router) {
        this.router = router;
        this.second = 0;
    }
    PaymentSuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.second = 5;
        this.interval = window.setInterval(function () {
            if (_this.second > 0) {
                _this.second = _this.second - 1;
            }
            else {
                window.clearInterval(_this.interval);
                _this.router.navigate(['/users/transaction/list']);
            }
        }, 1000);
    };
    PaymentSuccessComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.interval);
    };
    PaymentSuccessComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PaymentSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-success',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/components/success/success.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentSuccessComponent);
    return PaymentSuccessComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/course.service */ "./src/app/shared/services/course.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _media_media_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/media.module */ "./src/app/media/media.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _payment_payment_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../payment/payment.routing */ "./src/app/payment/payment.routing.ts");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/payment/components/success/success.component.ts");
/* harmony import */ var _components_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cancel/cancel.component */ "./src/app/payment/components/cancel/cancel.component.ts");
/* harmony import */ var _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pay/pay.component */ "./src/app/payment/components/pay/pay.component.ts");
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils.module */ "./src/app/utils/utils.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../webinar/webinar.service */ "./src/app/webinar/webinar.service.ts");
/* harmony import */ var _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../appointment/services/appointment.service */ "./src/app/appointment/services/appointment.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment.service */ "./src/app/payment/payment.service.ts");



















var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _payment_payment_routing__WEBPACK_IMPORTED_MODULE_8__["PaymentRoutingModule"],
                _media_media_module__WEBPACK_IMPORTED_MODULE_6__["MediaModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _utils_utils_module__WEBPACK_IMPORTED_MODULE_12__["UtilsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild(),
                ngx_stripe__WEBPACK_IMPORTED_MODULE_14__["NgxStripeModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_components_success_success_component__WEBPACK_IMPORTED_MODULE_9__["PaymentSuccessComponent"], _components_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_10__["PaymentCancelComponent"], _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_11__["PayComponent"]],
            providers: [_shared_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _webinar_webinar_service__WEBPACK_IMPORTED_MODULE_16__["WebinarService"], _appointment_services_appointment_service__WEBPACK_IMPORTED_MODULE_17__["AppointmentService"], _shared_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _payment_service__WEBPACK_IMPORTED_MODULE_18__["PaymentService"]],
            exports: [],
            entryComponents: []
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.routing.ts":
/*!********************************************!*\
  !*** ./src/app/payment/payment.routing.ts ***!
  \********************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/payment/components/success/success.component.ts");
/* harmony import */ var _components_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cancel/cancel.component */ "./src/app/payment/components/cancel/cancel.component.ts");
/* harmony import */ var _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pay/pay.component */ "./src/app/payment/components/pay/pay.component.ts");
/* harmony import */ var _shared_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/resolver */ "./src/app/shared/resolver/index.ts");







var routes = [
    {
        path: 'success',
        component: _components_success_success_component__WEBPACK_IMPORTED_MODULE_3__["PaymentSuccessComponent"]
    },
    {
        path: 'cancel',
        component: _components_cancel_cancel_component__WEBPACK_IMPORTED_MODULE_4__["PaymentCancelComponent"]
    },
    {
        path: 'pay',
        component: _components_pay_pay_component__WEBPACK_IMPORTED_MODULE_5__["PayComponent"],
        resolve: {
            appConfig: _shared_resolver__WEBPACK_IMPORTED_MODULE_6__["ConfigResolver"]
        }
    }
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaymentRoutingModule);
    return PaymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.service.ts":
/*!********************************************!*\
  !*** ./src/app/payment/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var PaymentService = /** @class */ (function () {
    function PaymentService(restangular) {
        this.restangular = restangular;
    }
    PaymentService.prototype.enroll = function (params) {
        return this.restangular.all('enroll').post(params).toPromise();
    };
    PaymentService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    PaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/webinar/webinar.service.ts":
/*!********************************************!*\
  !*** ./src/app/webinar/webinar.service.ts ***!
  \********************************************/
/*! exports provided: WebinarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebinarService", function() { return WebinarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var WebinarService = /** @class */ (function () {
    function WebinarService(restangular) {
        this.restangular = restangular;
    }
    WebinarService.prototype.create = function (params) {
        return this.restangular.all('webinars').post(params).toPromise();
    };
    WebinarService.prototype.search = function (params) {
        return this.restangular.one('webinars').get(params).toPromise();
    };
    WebinarService.prototype.findOne = function (id) {
        return this.restangular.one('webinars', id).get().toPromise();
    };
    WebinarService.prototype.update = function (id, data) {
        return this.restangular.one('webinars', id).customPUT(data).toPromise();
    };
    WebinarService.prototype.delete = function (id) {
        return this.restangular.one('webinars', id).customDELETE().toPromise();
    };
    WebinarService.prototype.enroll = function (params) {
        return this.restangular.all('enroll').post(params).toPromise();
    };
    WebinarService.prototype.gift = function (params) {
        return this.restangular.all('gift').post(params).toPromise();
    };
    WebinarService.prototype.checkUsedCoupon = function (id) {
        return this.restangular.one('coupons/check-used-coupon', id).get().toPromise();
    };
    WebinarService.prototype.applyCoupon = function (params) {
        return this.restangular.one('coupon/apply-coupon').get(params).toPromise();
    };
    WebinarService.prototype.checkBooked = function (webinarId, targetType) {
        return this.restangular.one("enroll/" + webinarId + "/" + targetType + "/booked").post().toPromise();
    };
    WebinarService.prototype.getEnrolledList = function (id) {
        return this.restangular.one("webinars/" + id + "/enrolled").get().toPromise();
    };
    WebinarService.prototype.checkOverlapWebinar = function (data) {
        return this.restangular.one('webinars/check').one('overlap').customPOST(data).toPromise();
    };
    WebinarService.prototype.getLatest = function (id) {
        return this.restangular.one("webinars/" + id + "/latest").get().toPromise();
    };
    WebinarService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    WebinarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], WebinarService);
    return WebinarService;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map