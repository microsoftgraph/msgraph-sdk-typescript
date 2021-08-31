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
exports.CategoryAxisRequestBuilder = void 0;
var workbookChartAxis_1 = require("../../../../names/worksheet/charts/axes/categoryAxis/workbookChartAxis");
var formatRequestBuilder_1 = require("./format/formatRequestBuilder");
var majorGridlinesRequestBuilder_1 = require("./majorGridlines/majorGridlinesRequestBuilder");
var minorGridlinesRequestBuilder_1 = require("./minorGridlines/minorGridlinesRequestBuilder");
var titleRequestBuilder_1 = require("./title/titleRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/worksheets/{workbookWorksheet-id}/charts/{workbookChart-id}/axes/categoryAxis  */
var CategoryAxisRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new CategoryAxisRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function CategoryAxisRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/categoryAxis";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(CategoryAxisRequestBuilder.prototype, "format", {
        get: function () {
            return new formatRequestBuilder_1.FormatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryAxisRequestBuilder.prototype, "majorGridlines", {
        get: function () {
            return new majorGridlinesRequestBuilder_1.MajorGridlinesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryAxisRequestBuilder.prototype, "minorGridlines", {
        get: function () {
            return new minorGridlinesRequestBuilder_1.MinorGridlinesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CategoryAxisRequestBuilder.prototype, "title", {
        get: function () {
            return new titleRequestBuilder_1.TitleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Represents the category axis in a chart. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CategoryAxisRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents the category axis in a chart. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    CategoryAxisRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Represents the category axis in a chart. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CategoryAxisRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Represents the category axis in a chart. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CategoryAxisRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents the category axis in a chart. Read-only.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookChartAxis
     */
    CategoryAxisRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, workbookChartAxis_1.WorkbookChartAxis, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents the category axis in a chart. Read-only.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CategoryAxisRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return CategoryAxisRequestBuilder;
}());
exports.CategoryAxisRequestBuilder = CategoryAxisRequestBuilder;
