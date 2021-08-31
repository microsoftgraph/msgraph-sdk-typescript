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
exports.SecurityRequestBuilder = void 0;
var alertsRequestBuilder_1 = require("./alerts/alertsRequestBuilder");
var alertRequestBuilder_1 = require("./alerts/item/alertRequestBuilder");
var secureScoreControlProfileRequestBuilder_1 = require("./secureScoreControlProfiles/item/secureScoreControlProfileRequestBuilder");
var secureScoreControlProfilesRequestBuilder_1 = require("./secureScoreControlProfiles/secureScoreControlProfilesRequestBuilder");
var secureScoreRequestBuilder_1 = require("./secureScores/item/secureScoreRequestBuilder");
var secureScoresRequestBuilder_1 = require("./secureScores/secureScoresRequestBuilder");
var security_1 = require("./security");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /security  */
var SecurityRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function SecurityRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/security";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(SecurityRequestBuilder.prototype, "alerts", {
        get: function () {
            return new alertsRequestBuilder_1.AlertsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityRequestBuilder.prototype, "secureScoreControlProfiles", {
        get: function () {
            return new secureScoreControlProfilesRequestBuilder_1.SecureScoreControlProfilesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecurityRequestBuilder.prototype, "secureScores", {
        get: function () {
            return new secureScoresRequestBuilder_1.SecureScoresRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.security.alerts collection
     * @param id Unique identifier of the item
     * @returns a AlertRequestBuilder
     */
    SecurityRequestBuilder.prototype.alertsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new alertRequestBuilder_1.AlertRequestBuilder(this.currentPath + this.pathSegment + "/alerts/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get security
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    SecurityRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update security
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    SecurityRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Get security
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Security
     */
    SecurityRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, security_1.Security, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update security
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    SecurityRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.security.secureScoreControlProfiles collection
     * @param id Unique identifier of the item
     * @returns a SecureScoreControlProfileRequestBuilder
     */
    SecurityRequestBuilder.prototype.secureScoreControlProfilesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new secureScoreControlProfileRequestBuilder_1.SecureScoreControlProfileRequestBuilder(this.currentPath + this.pathSegment + "/secureScoreControlProfiles/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.security.secureScores collection
     * @param id Unique identifier of the item
     * @returns a SecureScoreRequestBuilder
     */
    SecurityRequestBuilder.prototype.secureScoresById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new secureScoreRequestBuilder_1.SecureScoreRequestBuilder(this.currentPath + this.pathSegment + "/secureScores/" + id, this.httpCore, false);
    };
    ;
    return SecurityRequestBuilder;
}());
exports.SecurityRequestBuilder = SecurityRequestBuilder;
