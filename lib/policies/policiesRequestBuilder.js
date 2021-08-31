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
exports.PoliciesRequestBuilder = void 0;
var activityBasedTimeoutPoliciesRequestBuilder_1 = require("./activityBasedTimeoutPolicies/activityBasedTimeoutPoliciesRequestBuilder");
var activityBasedTimeoutPolicyRequestBuilder_1 = require("./activityBasedTimeoutPolicies/item/activityBasedTimeoutPolicyRequestBuilder");
var adminConsentRequestPolicyRequestBuilder_1 = require("./adminConsentRequestPolicy/adminConsentRequestPolicyRequestBuilder");
var authenticationFlowsPolicyRequestBuilder_1 = require("./authenticationFlowsPolicy/authenticationFlowsPolicyRequestBuilder");
var authenticationMethodsPolicyRequestBuilder_1 = require("./authenticationMethodsPolicy/authenticationMethodsPolicyRequestBuilder");
var authorizationPolicyRequestBuilder_1 = require("./authorizationPolicy/authorizationPolicyRequestBuilder");
var claimsMappingPoliciesRequestBuilder_1 = require("./claimsMappingPolicies/claimsMappingPoliciesRequestBuilder");
var claimsMappingPolicyRequestBuilder_1 = require("./claimsMappingPolicies/item/claimsMappingPolicyRequestBuilder");
var conditionalAccessPoliciesRequestBuilder_1 = require("./conditionalAccessPolicies/conditionalAccessPoliciesRequestBuilder");
var conditionalAccessPolicyRequestBuilder_1 = require("./conditionalAccessPolicies/item/conditionalAccessPolicyRequestBuilder");
var featureRolloutPoliciesRequestBuilder_1 = require("./featureRolloutPolicies/featureRolloutPoliciesRequestBuilder");
var featureRolloutPolicyRequestBuilder_1 = require("./featureRolloutPolicies/item/featureRolloutPolicyRequestBuilder");
var homeRealmDiscoveryPoliciesRequestBuilder_1 = require("./homeRealmDiscoveryPolicies/homeRealmDiscoveryPoliciesRequestBuilder");
var homeRealmDiscoveryPolicyRequestBuilder_1 = require("./homeRealmDiscoveryPolicies/item/homeRealmDiscoveryPolicyRequestBuilder");
var identitySecurityDefaultsEnforcementPolicyRequestBuilder_1 = require("./identitySecurityDefaultsEnforcementPolicy/identitySecurityDefaultsEnforcementPolicyRequestBuilder");
var permissionGrantPolicyRequestBuilder_1 = require("./permissionGrantPolicies/item/permissionGrantPolicyRequestBuilder");
var permissionGrantPoliciesRequestBuilder_1 = require("./permissionGrantPolicies/permissionGrantPoliciesRequestBuilder");
var policyRoot_1 = require("./policyRoot");
var tokenIssuancePolicyRequestBuilder_1 = require("./tokenIssuancePolicies/item/tokenIssuancePolicyRequestBuilder");
var tokenIssuancePoliciesRequestBuilder_1 = require("./tokenIssuancePolicies/tokenIssuancePoliciesRequestBuilder");
var tokenLifetimePolicyRequestBuilder_1 = require("./tokenLifetimePolicies/item/tokenLifetimePolicyRequestBuilder");
var tokenLifetimePoliciesRequestBuilder_1 = require("./tokenLifetimePolicies/tokenLifetimePoliciesRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /policies  */
var PoliciesRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new PoliciesRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function PoliciesRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/policies";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(PoliciesRequestBuilder.prototype, "activityBasedTimeoutPolicies", {
        get: function () {
            return new activityBasedTimeoutPoliciesRequestBuilder_1.ActivityBasedTimeoutPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "adminConsentRequestPolicy", {
        get: function () {
            return new adminConsentRequestPolicyRequestBuilder_1.AdminConsentRequestPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "authenticationFlowsPolicy", {
        get: function () {
            return new authenticationFlowsPolicyRequestBuilder_1.AuthenticationFlowsPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "authenticationMethodsPolicy", {
        get: function () {
            return new authenticationMethodsPolicyRequestBuilder_1.AuthenticationMethodsPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "authorizationPolicy", {
        get: function () {
            return new authorizationPolicyRequestBuilder_1.AuthorizationPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "claimsMappingPolicies", {
        get: function () {
            return new claimsMappingPoliciesRequestBuilder_1.ClaimsMappingPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "conditionalAccessPolicies", {
        get: function () {
            return new conditionalAccessPoliciesRequestBuilder_1.ConditionalAccessPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "featureRolloutPolicies", {
        get: function () {
            return new featureRolloutPoliciesRequestBuilder_1.FeatureRolloutPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "homeRealmDiscoveryPolicies", {
        get: function () {
            return new homeRealmDiscoveryPoliciesRequestBuilder_1.HomeRealmDiscoveryPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "identitySecurityDefaultsEnforcementPolicy", {
        get: function () {
            return new identitySecurityDefaultsEnforcementPolicyRequestBuilder_1.IdentitySecurityDefaultsEnforcementPolicyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "permissionGrantPolicies", {
        get: function () {
            return new permissionGrantPoliciesRequestBuilder_1.PermissionGrantPoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "tokenIssuancePolicies", {
        get: function () {
            return new tokenIssuancePoliciesRequestBuilder_1.TokenIssuancePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PoliciesRequestBuilder.prototype, "tokenLifetimePolicies", {
        get: function () {
            return new tokenLifetimePoliciesRequestBuilder_1.TokenLifetimePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.policies.activityBasedTimeoutPolicies collection
     * @param id Unique identifier of the item
     * @returns a ActivityBasedTimeoutPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.activityBasedTimeoutPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new activityBasedTimeoutPolicyRequestBuilder_1.ActivityBasedTimeoutPolicyRequestBuilder(this.currentPath + this.pathSegment + "/activityBasedTimeoutPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.claimsMappingPolicies collection
     * @param id Unique identifier of the item
     * @returns a ClaimsMappingPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.claimsMappingPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new claimsMappingPolicyRequestBuilder_1.ClaimsMappingPolicyRequestBuilder(this.currentPath + this.pathSegment + "/claimsMappingPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.conditionalAccessPolicies collection
     * @param id Unique identifier of the item
     * @returns a ConditionalAccessPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.conditionalAccessPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new conditionalAccessPolicyRequestBuilder_1.ConditionalAccessPolicyRequestBuilder(this.currentPath + this.pathSegment + "/conditionalAccessPolicies/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Get policies
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    PoliciesRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update policies
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    PoliciesRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Gets an item from the MicrosoftGraph.policies.featureRolloutPolicies collection
     * @param id Unique identifier of the item
     * @returns a FeatureRolloutPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.featureRolloutPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new featureRolloutPolicyRequestBuilder_1.FeatureRolloutPolicyRequestBuilder(this.currentPath + this.pathSegment + "/featureRolloutPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get policies
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PolicyRoot
     */
    PoliciesRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, policyRoot_1.PolicyRoot, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.homeRealmDiscoveryPolicies collection
     * @param id Unique identifier of the item
     * @returns a HomeRealmDiscoveryPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.homeRealmDiscoveryPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new homeRealmDiscoveryPolicyRequestBuilder_1.HomeRealmDiscoveryPolicyRequestBuilder(this.currentPath + this.pathSegment + "/homeRealmDiscoveryPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update policies
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    PoliciesRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.permissionGrantPolicies collection
     * @param id Unique identifier of the item
     * @returns a PermissionGrantPolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.permissionGrantPoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new permissionGrantPolicyRequestBuilder_1.PermissionGrantPolicyRequestBuilder(this.currentPath + this.pathSegment + "/permissionGrantPolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenIssuancePolicies collection
     * @param id Unique identifier of the item
     * @returns a TokenIssuancePolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.tokenIssuancePoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new tokenIssuancePolicyRequestBuilder_1.TokenIssuancePolicyRequestBuilder(this.currentPath + this.pathSegment + "/tokenIssuancePolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.policies.tokenLifetimePolicies collection
     * @param id Unique identifier of the item
     * @returns a TokenLifetimePolicyRequestBuilder
     */
    PoliciesRequestBuilder.prototype.tokenLifetimePoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new tokenLifetimePolicyRequestBuilder_1.TokenLifetimePolicyRequestBuilder(this.currentPath + this.pathSegment + "/tokenLifetimePolicies/" + id, this.httpCore, false);
    };
    ;
    return PoliciesRequestBuilder;
}());
exports.PoliciesRequestBuilder = PoliciesRequestBuilder;
