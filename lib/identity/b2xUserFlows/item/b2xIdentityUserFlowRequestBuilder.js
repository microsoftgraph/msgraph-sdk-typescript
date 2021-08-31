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
exports.B2xIdentityUserFlowRequestBuilder = void 0;
var b2xIdentityUserFlow_1 = require("../../b2xIdentityUserFlow");
var identityProvidersRequestBuilder_1 = require("../identityProviders/identityProvidersRequestBuilder");
var userFlowLanguageConfigurationRequestBuilder_1 = require("../languages/item/userFlowLanguageConfigurationRequestBuilder");
var languagesRequestBuilder_1 = require("../languages/languagesRequestBuilder");
var identityUserFlowAttributeAssignmentRequestBuilder_1 = require("../userAttributeAssignments/item/identityUserFlowAttributeAssignmentRequestBuilder");
var userAttributeAssignmentsRequestBuilder_1 = require("../userAttributeAssignments/userAttributeAssignmentsRequestBuilder");
var userFlowIdentityProvidersRequestBuilder_1 = require("../userFlowIdentityProviders/userFlowIdentityProvidersRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /identity/b2xUserFlows/{b2xIdentityUserFlow-id}  */
var B2xIdentityUserFlowRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new B2xIdentityUserFlowRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function B2xIdentityUserFlowRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(B2xIdentityUserFlowRequestBuilder.prototype, "identityProviders", {
        get: function () {
            return new identityProvidersRequestBuilder_1.IdentityProvidersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B2xIdentityUserFlowRequestBuilder.prototype, "languages", {
        get: function () {
            return new languagesRequestBuilder_1.LanguagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B2xIdentityUserFlowRequestBuilder.prototype, "userAttributeAssignments", {
        get: function () {
            return new userAttributeAssignmentsRequestBuilder_1.UserAttributeAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(B2xIdentityUserFlowRequestBuilder.prototype, "userFlowIdentityProviders", {
        get: function () {
            return new userFlowIdentityProvidersRequestBuilder_1.UserFlowIdentityProvidersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Delete navigation property b2xUserFlows for identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    B2xIdentityUserFlowRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get b2xUserFlows from identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    B2xIdentityUserFlowRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update the navigation property b2xUserFlows in identity
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    B2xIdentityUserFlowRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete navigation property b2xUserFlows for identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    B2xIdentityUserFlowRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get b2xUserFlows from identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of B2xIdentityUserFlow
     */
    B2xIdentityUserFlowRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, b2xIdentityUserFlow_1.B2xIdentityUserFlow, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identity.b2xUserFlows.languages collection
     * @param id Unique identifier of the item
     * @returns a UserFlowLanguageConfigurationRequestBuilder
     */
    B2xIdentityUserFlowRequestBuilder.prototype.languagesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new userFlowLanguageConfigurationRequestBuilder_1.UserFlowLanguageConfigurationRequestBuilder(this.currentPath + this.pathSegment + "/languages/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update the navigation property b2xUserFlows in identity
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    B2xIdentityUserFlowRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identity.b2xUserFlows.userAttributeAssignments collection
     * @param id Unique identifier of the item
     * @returns a IdentityUserFlowAttributeAssignmentRequestBuilder
     */
    B2xIdentityUserFlowRequestBuilder.prototype.userAttributeAssignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new identityUserFlowAttributeAssignmentRequestBuilder_1.IdentityUserFlowAttributeAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/userAttributeAssignments/" + id, this.httpCore, false);
    };
    ;
    return B2xIdentityUserFlowRequestBuilder;
}());
exports.B2xIdentityUserFlowRequestBuilder = B2xIdentityUserFlowRequestBuilder;
