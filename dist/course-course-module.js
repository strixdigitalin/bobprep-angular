(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-course-module"],{

/***/ "./src/app/tutor/services/grade.service.ts":
/*!*************************************************!*\
  !*** ./src/app/tutor/services/grade.service.ts ***!
  \*************************************************/
/*! exports provided: GradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeService", function() { return GradeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_restangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-restangular */ "./node_modules/ngx-restangular/__ivy_ngcc__/fesm2015/ngx-restangular.js");



var GradeService = /** @class */ (function () {
    function GradeService(restangular) {
        this.restangular = restangular;
    }
    GradeService.prototype.create = function (credentials) {
        return this.restangular.all('grades').post(credentials).toPromise();
    };
    GradeService.prototype.search = function (params) {
        return this.restangular.one('grades').get(params).toPromise();
    };
    GradeService.prototype.findOne = function (id) {
        return this.restangular.one('grades', id).get().toPromise();
    };
    GradeService.prototype.update = function (id, data) {
        return this.restangular.one('grades', id).customPUT(data).toPromise();
    };
    GradeService.prototype.delete = function (id) {
        return this.restangular.one('grades', id).customDELETE().toPromise();
    };
    GradeService.ctorParameters = function () { return [
        { type: ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"] }
    ]; };
    GradeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_restangular__WEBPACK_IMPORTED_MODULE_2__["Restangular"]])
    ], GradeService);
    return GradeService;
}());



/***/ })

}]);
//# sourceMappingURL=course-course-module.js.map