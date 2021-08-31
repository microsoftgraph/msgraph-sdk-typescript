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
exports.ManagedAppRegistrationRequestBuilder = void 0;
var managedAppRegistration_1 = require("../../../managedAppRegistration");
var appliedPoliciesRequestBuilder_1 = require("../appliedPolicies/appliedPoliciesRequestBuilder");
var managedAppPolicyRequestBuilder_1 = require("../appliedPolicies/item/managedAppPolicyRequestBuilder");
var intendedPoliciesRequestBuilder_1 = require("../intendedPolicies/intendedPoliciesRequestBuilder");
var managedAppOperationRequestBuilder_1 = require("../operations/item/managedAppOperationRequestBuilder");
var operationsRequestBuilder_1 = require("../operations/operationsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /deviceAppManagement/managedAppRegistrations/{managedAppRegistration-id}  */
var ManagedAppRegistrationRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ManagedAppRegistrationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ManagedAppRegistrationRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(ManagedAppRegistrationRequestBuilder.prototype, "appliedPolicies", {
        get: function () {
            return new appliedPoliciesRequestBuilder_1.AppliedPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedAppRegistrationRequestBuilder.prototype, "intendedPolicies", {
        get: function () {
            return new intendedPoliciesRequestBuilder_1.IntendedPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedAppRegistrationRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.appliedPolicies collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyRequestBuilder
     */
    ManagedAppRegistrationRequestBuilder.prototype.appliedPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppPolicyRequestBuilder_1.ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/appliedPolicies/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedAppRegistrationRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ManagedAppRegistrationRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * The managed app registrations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ManagedAppRegistrationRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedAppRegistrationRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * The managed app registrations.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ManagedAppRegistration
     */
    ManagedAppRegistrationRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, managedAppRegistration_1.ManagedAppRegistration, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.intendedPolicies collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppPolicyRequestBuilder
     */
    ManagedAppRegistrationRequestBuilder.prototype.intendedPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppPolicyRequestBuilder_1.ManagedAppPolicyRequestBuilder(this.currentPath + this.pathSegment + "/intendedPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.deviceAppManagement.managedAppRegistrations.operations collection
     * @param id Unique identifier of the item
     * @returns a ManagedAppOperationRequestBuilder
     */
    ManagedAppRegistrationRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedAppOperationRequestBuilder_1.ManagedAppOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * The managed app registrations.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ManagedAppRegistrationRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ManagedAppRegistrationRequestBuilder;
}());
exports.ManagedAppRegistrationRequestBuilder = ManagedAppRegistrationRequestBuilder;
