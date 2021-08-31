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
exports.CommunicationsRequestBuilder = void 0;
var callRecordsRequestBuilder_1 = require("./callRecords/callRecordsRequestBuilder");
var callRecordRequestBuilder_1 = require("./callRecords/item/callRecordRequestBuilder");
var callsRequestBuilder_1 = require("./calls/callsRequestBuilder");
var callRequestBuilder_1 = require("./calls/item/callRequestBuilder");
var cloudCommunications_1 = require("./cloudCommunications");
var microsoft_graph_getPresencesByUserIdRequestBuilder_1 = require("./microsoft/graph/getPresencesByUserId/microsoft.graph.getPresencesByUserIdRequestBuilder");
var onlineMeetingRequestBuilder_1 = require("./onlineMeetings/item/onlineMeetingRequestBuilder");
var onlineMeetingsRequestBuilder_1 = require("./onlineMeetings/onlineMeetingsRequestBuilder");
var presenceRequestBuilder_1 = require("./presences/item/presenceRequestBuilder");
var presencesRequestBuilder_1 = require("./presences/presencesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /communications  */
var CommunicationsRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new CommunicationsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function CommunicationsRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/communications";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(CommunicationsRequestBuilder.prototype, "callRecords", {
        get: function () {
            return new callRecordsRequestBuilder_1.CallRecordsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommunicationsRequestBuilder.prototype, "calls", {
        get: function () {
            return new callsRequestBuilder_1.CallsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommunicationsRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    CommunicationsRequestBuilder.prototype.getPresencesByUserId = function () {
        return new microsoft_graph_getPresencesByUserIdRequestBuilder_1.Microsoft.graph.getPresencesByUserIdRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(CommunicationsRequestBuilder.prototype, "onlineMeetings", {
        get: function () {
            return new onlineMeetingsRequestBuilder_1.OnlineMeetingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommunicationsRequestBuilder.prototype, "presences", {
        get: function () {
            return new presencesRequestBuilder_1.PresencesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.communications.callRecords collection
     * @param id Unique identifier of the item
     * @returns a CallRecordRequestBuilder
     */
    CommunicationsRequestBuilder.prototype.callRecordsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new callRecordRequestBuilder_1.CallRecordRequestBuilder(this.currentPath + this.pathSegment + "/callRecords/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.communications.calls collection
     * @param id Unique identifier of the item
     * @returns a CallRequestBuilder
     */
    CommunicationsRequestBuilder.prototype.callsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new callRequestBuilder_1.CallRequestBuilder(this.currentPath + this.pathSegment + "/calls/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    CommunicationsRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update communications
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    CommunicationsRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Get communications
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CloudCommunications
     */
    CommunicationsRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, cloudCommunications_1.CloudCommunications, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.communications.onlineMeetings collection
     * @param id Unique identifier of the item
     * @returns a OnlineMeetingRequestBuilder
     */
    CommunicationsRequestBuilder.prototype.onlineMeetingsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onlineMeetingRequestBuilder_1.OnlineMeetingRequestBuilder(this.currentPath + this.pathSegment + "/onlineMeetings/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update communications
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    CommunicationsRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.communications.presences collection
     * @param id Unique identifier of the item
     * @returns a PresenceRequestBuilder
     */
    CommunicationsRequestBuilder.prototype.presencesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new presenceRequestBuilder_1.PresenceRequestBuilder(this.currentPath + this.pathSegment + "/presences/" + id, this.httpCore, false);
    };
    ;
    return CommunicationsRequestBuilder;
}());
exports.CommunicationsRequestBuilder = CommunicationsRequestBuilder;
