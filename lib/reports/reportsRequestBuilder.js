"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsRequestBuilder = void 0;
var dailyPrintUsageByPrinterRequestBuilder_1 = require("./dailyPrintUsageByPrinter/dailyPrintUsageByPrinterRequestBuilder");
var printUsageByPrinterRequestBuilder_1 = require("./dailyPrintUsageByPrinter/item/printUsageByPrinterRequestBuilder");
var dailyPrintUsageByUserRequestBuilder_1 = require("./dailyPrintUsageByUser/dailyPrintUsageByUserRequestBuilder");
var printUsageByUserRequestBuilder_1 = require("./dailyPrintUsageByUser/item/printUsageByUserRequestBuilder");
var monthlyPrintUsageByPrinterRequestBuilder_1 = require("./monthlyPrintUsageByPrinter/monthlyPrintUsageByPrinterRequestBuilder");
var monthlyPrintUsageByUserRequestBuilder_1 = require("./monthlyPrintUsageByUser/monthlyPrintUsageByUserRequestBuilder");
var reportRoot_1 = require("./reportRoot");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /reports  */
var ReportsRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ReportsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ReportsRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/reports";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(ReportsRequestBuilder.prototype, "dailyPrintUsageByPrinter", {
        get: function () {
            return new dailyPrintUsageByPrinterRequestBuilder_1.DailyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReportsRequestBuilder.prototype, "dailyPrintUsageByUser", {
        get: function () {
            return new dailyPrintUsageByUserRequestBuilder_1.DailyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReportsRequestBuilder.prototype, "monthlyPrintUsageByPrinter", {
        get: function () {
            return new monthlyPrintUsageByPrinterRequestBuilder_1.MonthlyPrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReportsRequestBuilder.prototype, "monthlyPrintUsageByUser", {
        get: function () {
            return new monthlyPrintUsageByUserRequestBuilder_1.MonthlyPrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ReportsRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Update reports
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ReportsRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.reports.dailyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterRequestBuilder
     */
    ReportsRequestBuilder.prototype.dailyPrintUsageByPrinterById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printUsageByPrinterRequestBuilder_1.PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.reports.dailyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserRequestBuilder
     */
    ReportsRequestBuilder.prototype.dailyPrintUsageByUserById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printUsageByUserRequestBuilder_1.PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/dailyPrintUsageByUser/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get reports
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReportRoot
     */
    ReportsRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, reportRoot_1.ReportRoot, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.reports.monthlyPrintUsageByPrinter collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByPrinterRequestBuilder
     */
    ReportsRequestBuilder.prototype.monthlyPrintUsageByPrinterById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printUsageByPrinterRequestBuilder_1.PrintUsageByPrinterRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByPrinter/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.reports.monthlyPrintUsageByUser collection
     * @param id Unique identifier of the item
     * @returns a PrintUsageByUserRequestBuilder
     */
    ReportsRequestBuilder.prototype.monthlyPrintUsageByUserById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new printUsageByUserRequestBuilder_1.PrintUsageByUserRequestBuilder(this.currentPath + this.pathSegment + "/monthlyPrintUsageByUser/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update reports
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ReportsRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ReportsRequestBuilder;
}());
exports.ReportsRequestBuilder = ReportsRequestBuilder;
