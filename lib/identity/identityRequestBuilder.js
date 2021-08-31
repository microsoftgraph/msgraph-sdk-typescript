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
exports.IdentityRequestBuilder = void 0;
var apiConnectorsRequestBuilder_1 = require("./apiConnectors/apiConnectorsRequestBuilder");
var identityApiConnectorRequestBuilder_1 = require("./apiConnectors/item/identityApiConnectorRequestBuilder");
var b2xUserFlowsRequestBuilder_1 = require("./b2xUserFlows/b2xUserFlowsRequestBuilder");
var b2xIdentityUserFlowRequestBuilder_1 = require("./b2xUserFlows/item/b2xIdentityUserFlowRequestBuilder");
var conditionalAccessRequestBuilder_1 = require("./conditionalAccess/conditionalAccessRequestBuilder");
var identityContainer_1 = require("./identityContainer");
var identityProvidersRequestBuilder_1 = require("./identityProviders/identityProvidersRequestBuilder");
var identityProviderBaseRequestBuilder_1 = require("./identityProviders/item/identityProviderBaseRequestBuilder");
var identityUserFlowAttributeRequestBuilder_1 = require("./userFlowAttributes/item/identityUserFlowAttributeRequestBuilder");
var userFlowAttributesRequestBuilder_1 = require("./userFlowAttributes/userFlowAttributesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /identity  */
var IdentityRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new IdentityRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function IdentityRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/identity";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(IdentityRequestBuilder.prototype, "apiConnectors", {
        get: function () {
            return new apiConnectorsRequestBuilder_1.ApiConnectorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityRequestBuilder.prototype, "b2xUserFlows", {
        get: function () {
            return new b2xUserFlowsRequestBuilder_1.B2xUserFlowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityRequestBuilder.prototype, "conditionalAccess", {
        get: function () {
            return new conditionalAccessRequestBuilder_1.ConditionalAccessRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityRequestBuilder.prototype, "identityProviders", {
        get: function () {
            return new identityProvidersRequestBuilder_1.IdentityProvidersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IdentityRequestBuilder.prototype, "userFlowAttributes", {
        get: function () {
            return new userFlowAttributesRequestBuilder_1.UserFlowAttributesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.identity.apiConnectors collection
     * @param id Unique identifier of the item
     * @returns a IdentityApiConnectorRequestBuilder
     */
    IdentityRequestBuilder.prototype.apiConnectorsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new identityApiConnectorRequestBuilder_1.IdentityApiConnectorRequestBuilder(this.currentPath + this.pathSegment + "/apiConnectors/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identity.b2xUserFlows collection
     * @param id Unique identifier of the item
     * @returns a B2xIdentityUserFlowRequestBuilder
     */
    IdentityRequestBuilder.prototype.b2xUserFlowsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new b2xIdentityUserFlowRequestBuilder_1.B2xIdentityUserFlowRequestBuilder(this.currentPath + this.pathSegment + "/b2xUserFlows/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    IdentityRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update identity
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    IdentityRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Get identity
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityContainer
     */
    IdentityRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, identityContainer_1.IdentityContainer, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identity.identityProviders collection
     * @param id Unique identifier of the item
     * @returns a IdentityProviderBaseRequestBuilder
     */
    IdentityRequestBuilder.prototype.identityProvidersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new identityProviderBaseRequestBuilder_1.IdentityProviderBaseRequestBuilder(this.currentPath + this.pathSegment + "/identityProviders/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update identity
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    IdentityRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.identity.userFlowAttributes collection
     * @param id Unique identifier of the item
     * @returns a IdentityUserFlowAttributeRequestBuilder
     */
    IdentityRequestBuilder.prototype.userFlowAttributesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new identityUserFlowAttributeRequestBuilder_1.IdentityUserFlowAttributeRequestBuilder(this.currentPath + this.pathSegment + "/userFlowAttributes/" + id, this.httpCore, false);
    };
    ;
    return IdentityRequestBuilder;
}());
exports.IdentityRequestBuilder = IdentityRequestBuilder;
