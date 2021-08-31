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
exports.ApplicationRequestBuilder = void 0;
var application_1 = require("../../application");
var createdOnBehalfOfRequestBuilder_1 = require("../createdOnBehalfOf/createdOnBehalfOfRequestBuilder");
var extensionPropertiesRequestBuilder_1 = require("../extensionProperties/extensionPropertiesRequestBuilder");
var extensionPropertyRequestBuilder_1 = require("../extensionProperties/item/extensionPropertyRequestBuilder");
var homeRealmDiscoveryPoliciesRequestBuilder_1 = require("../homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder");
var logoRequestBuilder_1 = require("../logo/logoRequestBuilder");
var microsoft_graph_addKeyRequestBuilder_1 = require("../microsoft/graph/addKey/microsoft.graph.addKeyRequestBuilder");
var ownersRequestBuilder_1 = require("../owners/ownersRequestBuilder");
var tokenIssuancePoliciesRequestBuilder_1 = require("../tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder");
var tokenLifetimePoliciesRequestBuilder_1 = require("../tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /applications/{application-id}  */
var ApplicationRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ApplicationRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ApplicationRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ApplicationRequestBuilder.prototype, "createdOnBehalfOf", {
        get: function () {
            return new createdOnBehalfOfRequestBuilder_1.CreatedOnBehalfOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "extensionProperties", {
        get: function () {
            return new extensionPropertiesRequestBuilder_1.ExtensionPropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "homeRealmDiscoveryPolicies", {
        get: function () {
            return new homeRealmDiscoveryPoliciesRequestBuilder_1.HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "logo", {
        get: function () {
            return new logoRequestBuilder_1.LogoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ApplicationRequestBuilder.prototype.addKey = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.addKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.addPassword = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.addPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.checkMemberGroups = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.checkMemberObjects = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.getMemberGroups = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.getMemberObjects = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.removeKey = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.removeKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.removePassword = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.removePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ApplicationRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ApplicationRequestBuilder.prototype, "owners", {
        get: function () {
            return new ownersRequestBuilder_1.OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "tokenIssuancePolicies", {
        get: function () {
            return new tokenIssuancePoliciesRequestBuilder_1.TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApplicationRequestBuilder.prototype, "tokenLifetimePolicies", {
        get: function () {
            return new tokenLifetimePoliciesRequestBuilder_1.TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ApplicationRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ApplicationRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ApplicationRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ApplicationRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.applications.extensionProperties collection
     * @param id Unique identifier of the item
     * @returns a ExtensionPropertyRequestBuilder
     */
    ApplicationRequestBuilder.prototype.extensionPropertiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new extensionPropertyRequestBuilder_1.ExtensionPropertyRequestBuilder(this.currentPath + this.pathSegment + "/extensionProperties/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Application
     */
    ApplicationRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, application_1.Application, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ApplicationRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ApplicationRequestBuilder;
}());
exports.ApplicationRequestBuilder = ApplicationRequestBuilder;
