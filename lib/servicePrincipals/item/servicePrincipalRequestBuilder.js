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
exports.ServicePrincipalRequestBuilder = void 0;
var servicePrincipal_1 = require("../../servicePrincipal");
var appRoleAssignedToRequestBuilder_1 = require("../appRoleAssignedTo/appRoleAssignedToRequestBuilder");
var appRoleAssignmentRequestBuilder_1 = require("../appRoleAssignedTo/item/appRoleAssignmentRequestBuilder");
var appRoleAssignmentsRequestBuilder_1 = require("../appRoleAssignments/appRoleAssignmentsRequestBuilder");
var claimsMappingPoliciesRequestBuilder_1 = require("../claimsMappingPolicies/claimsMappingPoliciesRequestBuilder");
var createdObjectsRequestBuilder_1 = require("../createdObjects/createdObjectsRequestBuilder");
var delegatedPermissionClassificationsRequestBuilder_1 = require("../delegatedPermissionClassifications/delegatedPermissionClassificationsRequestBuilder");
var delegatedPermissionClassificationRequestBuilder_1 = require("../delegatedPermissionClassifications/item/delegatedPermissionClassificationRequestBuilder");
var endpointsRequestBuilder_1 = require("../endpoints/endpointsRequestBuilder");
var endpointRequestBuilder_1 = require("../endpoints/item/endpointRequestBuilder");
var homeRealmDiscoveryPoliciesRequestBuilder_1 = require("../homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder");
var memberOfRequestBuilder_1 = require("../memberOf/memberOfRequestBuilder");
var microsoft_graph_addKeyRequestBuilder_1 = require("../microsoft/graph/addKey/microsoft.graph.addKeyRequestBuilder");
var oauth2PermissionGrantsRequestBuilder_1 = require("../oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder");
var ownedObjectsRequestBuilder_1 = require("../ownedObjects/ownedObjectsRequestBuilder");
var ownersRequestBuilder_1 = require("../owners/ownersRequestBuilder");
var tokenIssuancePoliciesRequestBuilder_1 = require("../tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder");
var tokenLifetimePoliciesRequestBuilder_1 = require("../tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder");
var transitiveMemberOfRequestBuilder_1 = require("../transitiveMemberOf/transitiveMemberOfRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}  */
var ServicePrincipalRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ServicePrincipalRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ServicePrincipalRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "appRoleAssignedTo", {
        get: function () {
            return new appRoleAssignedToRequestBuilder_1.AppRoleAssignedToRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "appRoleAssignments", {
        get: function () {
            return new appRoleAssignmentsRequestBuilder_1.AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "claimsMappingPolicies", {
        get: function () {
            return new claimsMappingPoliciesRequestBuilder_1.ClaimsMappingPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "createdObjects", {
        get: function () {
            return new createdObjectsRequestBuilder_1.CreatedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "delegatedPermissionClassifications", {
        get: function () {
            return new delegatedPermissionClassificationsRequestBuilder_1.DelegatedPermissionClassificationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "endpoints", {
        get: function () {
            return new endpointsRequestBuilder_1.EndpointsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "homeRealmDiscoveryPolicies", {
        get: function () {
            return new homeRealmDiscoveryPoliciesRequestBuilder_1.HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "memberOf", {
        get: function () {
            return new memberOfRequestBuilder_1.MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ServicePrincipalRequestBuilder.prototype.addKey = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.addKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.addPassword = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.addPasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.checkMemberGroups = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.checkMemberObjects = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.getMemberGroups = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.getMemberObjects = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.removeKey = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.removeKeyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.removePassword = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.removePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    ServicePrincipalRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_addKeyRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "oauth2PermissionGrants", {
        get: function () {
            return new oauth2PermissionGrantsRequestBuilder_1.Oauth2PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "ownedObjects", {
        get: function () {
            return new ownedObjectsRequestBuilder_1.OwnedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "owners", {
        get: function () {
            return new ownersRequestBuilder_1.OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "tokenIssuancePolicies", {
        get: function () {
            return new tokenIssuancePoliciesRequestBuilder_1.TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "tokenLifetimePolicies", {
        get: function () {
            return new tokenLifetimePoliciesRequestBuilder_1.TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServicePrincipalRequestBuilder.prototype, "transitiveMemberOf", {
        get: function () {
            return new transitiveMemberOfRequestBuilder_1.TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.appRoleAssignedTo collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    ServicePrincipalRequestBuilder.prototype.appRoleAssignedToById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new appRoleAssignmentRequestBuilder_1.AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignedTo/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    ServicePrincipalRequestBuilder.prototype.appRoleAssignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new appRoleAssignmentRequestBuilder_1.AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ServicePrincipalRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
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
    ServicePrincipalRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
    ServicePrincipalRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Gets an item from the MicrosoftGraph.servicePrincipals.delegatedPermissionClassifications collection
     * @param id Unique identifier of the item
     * @returns a DelegatedPermissionClassificationRequestBuilder
     */
    ServicePrincipalRequestBuilder.prototype.delegatedPermissionClassificationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new delegatedPermissionClassificationRequestBuilder_1.DelegatedPermissionClassificationRequestBuilder(this.currentPath + this.pathSegment + "/delegatedPermissionClassifications/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ServicePrincipalRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.servicePrincipals.endpoints collection
     * @param id Unique identifier of the item
     * @returns a EndpointRequestBuilder
     */
    ServicePrincipalRequestBuilder.prototype.endpointsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new endpointRequestBuilder_1.EndpointRequestBuilder(this.currentPath + this.pathSegment + "/endpoints/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServicePrincipal
     */
    ServicePrincipalRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, servicePrincipal_1.ServicePrincipal, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ServicePrincipalRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return ServicePrincipalRequestBuilder;
}());
exports.ServicePrincipalRequestBuilder = ServicePrincipalRequestBuilder;
