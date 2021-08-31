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
exports.LastSharedMethodRequestBuilder = void 0;
var _refRequestBuilder_1 = require("./$ref/$refRequestBuilder");
var entity_1 = require("./entity");
var microsoft_graph_calendarSharingMessageRequestBuilder_1 = require("./microsoft/graph/calendarSharingMessage/microsoft.graph.calendarSharingMessageRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod  */
var LastSharedMethodRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new LastSharedMethodRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function LastSharedMethodRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/lastSharedMethod";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(LastSharedMethodRequestBuilder.prototype, "$ref", {
        get: function () {
            return new _refRequestBuilder_1.$refRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LastSharedMethodRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    LastSharedMethodRequestBuilder.prototype.calendarSharingMessage = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.calendarSharingMessageRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.managedAppProtection = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.managedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.mobileAppContentFile = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.mobileAppContentFileRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.printDocument = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.printDocumentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.printJob = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.printJobRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.scheduleChangeRequest = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.scheduleChangeRequestRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.targetedManagedAppProtection = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.targetedManagedAppProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.windowsInformationProtection = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.windowsInformationProtectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.workbookRange = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.workbookRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.workbookRangeFill = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.workbookRangeFillRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.workbookRangeFormat = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.workbookRangeFormatRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.workbookRangeSort = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.workbookRangeSortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    LastSharedMethodRequestBuilder.prototype.workbookRangeView = function () {
        return new microsoft_graph_calendarSharingMessageRequestBuilder_1.Microsoft.graph.workbookRangeViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ;
    /**
     * Get lastSharedMethod from users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    LastSharedMethodRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Get lastSharedMethod from users
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Entity
     */
    LastSharedMethodRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, entity_1.Entity, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return LastSharedMethodRequestBuilder;
}());
exports.LastSharedMethodRequestBuilder = LastSharedMethodRequestBuilder;
