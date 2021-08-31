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
exports.AuditLogsRequestBuilder = void 0;
var auditLogRoot_1 = require("./auditLogRoot");
var directoryAuditsRequestBuilder_1 = require("./directoryAudits/directoryAuditsRequestBuilder");
var directoryAuditRequestBuilder_1 = require("./directoryAudits/item/directoryAuditRequestBuilder");
var provisioningObjectSummaryRequestBuilder_1 = require("./provisioning/item/provisioningObjectSummaryRequestBuilder");
var provisioningRequestBuilder_1 = require("./provisioning/provisioningRequestBuilder");
var restrictedSignInRequestBuilder_1 = require("./restrictedSignIns/item/restrictedSignInRequestBuilder");
var restrictedSignInsRequestBuilder_1 = require("./restrictedSignIns/restrictedSignInsRequestBuilder");
var signInRequestBuilder_1 = require("./signIns/item/signInRequestBuilder");
var signInsRequestBuilder_1 = require("./signIns/signInsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /auditLogs  */
var AuditLogsRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new AuditLogsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function AuditLogsRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/auditLogs";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(AuditLogsRequestBuilder.prototype, "directoryAudits", {
        get: function () {
            return new directoryAuditsRequestBuilder_1.DirectoryAuditsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditLogsRequestBuilder.prototype, "provisioning", {
        get: function () {
            return new provisioningRequestBuilder_1.ProvisioningRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditLogsRequestBuilder.prototype, "restrictedSignIns", {
        get: function () {
            return new restrictedSignInsRequestBuilder_1.RestrictedSignInsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditLogsRequestBuilder.prototype, "signIns", {
        get: function () {
            return new signInsRequestBuilder_1.SignInsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Get auditLogs
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    AuditLogsRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update auditLogs
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    AuditLogsRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Gets an item from the MicrosoftGraph.auditLogs.directoryAudits collection
     * @param id Unique identifier of the item
     * @returns a DirectoryAuditRequestBuilder
     */
    AuditLogsRequestBuilder.prototype.directoryAuditsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new directoryAuditRequestBuilder_1.DirectoryAuditRequestBuilder(this.currentPath + this.pathSegment + "/directoryAudits/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get auditLogs
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    AuditLogsRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, auditLogRoot_1.AuditLogRoot, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Update auditLogs
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    AuditLogsRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.provisioning collection
     * @param id Unique identifier of the item
     * @returns a ProvisioningObjectSummaryRequestBuilder
     */
    AuditLogsRequestBuilder.prototype.provisioningById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new provisioningObjectSummaryRequestBuilder_1.ProvisioningObjectSummaryRequestBuilder(this.currentPath + this.pathSegment + "/provisioning/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.restrictedSignIns collection
     * @param id Unique identifier of the item
     * @returns a RestrictedSignInRequestBuilder
     */
    AuditLogsRequestBuilder.prototype.restrictedSignInsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new restrictedSignInRequestBuilder_1.RestrictedSignInRequestBuilder(this.currentPath + this.pathSegment + "/restrictedSignIns/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.auditLogs.signIns collection
     * @param id Unique identifier of the item
     * @returns a SignInRequestBuilder
     */
    AuditLogsRequestBuilder.prototype.signInsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new signInRequestBuilder_1.SignInRequestBuilder(this.currentPath + this.pathSegment + "/signIns/" + id, this.httpCore, false);
    };
    ;
    return AuditLogsRequestBuilder;
}());
exports.AuditLogsRequestBuilder = AuditLogsRequestBuilder;
