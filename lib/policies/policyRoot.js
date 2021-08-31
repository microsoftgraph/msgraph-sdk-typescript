"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.PolicyRoot = void 0;
var authenticationMethodsPolicy_1 = require("../authenticationMethodsPolicy/authenticationMethodsPolicy");
var claimsMappingPolicy_1 = require("../claimsMappingPolicy");
var conditionalAccessPolicy_1 = require("../conditionalAccessPolicy");
var entity_1 = require("../entity");
var homeRealmDiscoveryPolicy_1 = require("../homeRealmDiscoveryPolicy");
var tokenIssuancePolicy_1 = require("../tokenIssuancePolicy");
var tokenLifetimePolicy_1 = require("../tokenLifetimePolicy");
var activityBasedTimeoutPolicy_1 = require("./activityBasedTimeoutPolicy");
var adminConsentRequestPolicy_1 = require("./adminConsentRequestPolicy/adminConsentRequestPolicy");
var authenticationFlowsPolicy_1 = require("./authenticationFlowsPolicy/authenticationFlowsPolicy");
var authorizationPolicy_1 = require("./authorizationPolicy/authorizationPolicy");
var featureRolloutPolicy_1 = require("./featureRolloutPolicy");
var identitySecurityDefaultsEnforcementPolicy_1 = require("./identitySecurityDefaultsEnforcementPolicy/identitySecurityDefaultsEnforcementPolicy");
var permissionGrantPolicy_1 = require("./permissionGrantPolicy");
var PolicyRoot = /** @class */ (function (_super) {
    __extends(PolicyRoot, _super);
    /**
     * Instantiates a new PolicyRoot and sets the default values.
     */
    function PolicyRoot() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(PolicyRoot.prototype, "activityBasedTimeoutPolicies", {
        /**
         * Gets the activityBasedTimeoutPolicies property value.
         * @returns a activityBasedTimeoutPolicy
         */
        get: function () {
            return this._activityBasedTimeoutPolicies;
        },
        /**
         * Sets the activityBasedTimeoutPolicies property value.
         * @param value Value to set for the activityBasedTimeoutPolicies property.
         */
        set: function (value) {
            this._activityBasedTimeoutPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "adminConsentRequestPolicy", {
        /**
         * Gets the adminConsentRequestPolicy property value.
         * @returns a adminConsentRequestPolicy
         */
        get: function () {
            return this._adminConsentRequestPolicy;
        },
        /**
         * Sets the adminConsentRequestPolicy property value.
         * @param value Value to set for the adminConsentRequestPolicy property.
         */
        set: function (value) {
            this._adminConsentRequestPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "authenticationFlowsPolicy", {
        /**
         * Gets the authenticationFlowsPolicy property value.
         * @returns a authenticationFlowsPolicy
         */
        get: function () {
            return this._authenticationFlowsPolicy;
        },
        /**
         * Sets the authenticationFlowsPolicy property value.
         * @param value Value to set for the authenticationFlowsPolicy property.
         */
        set: function (value) {
            this._authenticationFlowsPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "authenticationMethodsPolicy", {
        /**
         * Gets the authenticationMethodsPolicy property value.
         * @returns a authenticationMethodsPolicy
         */
        get: function () {
            return this._authenticationMethodsPolicy;
        },
        /**
         * Sets the authenticationMethodsPolicy property value.
         * @param value Value to set for the authenticationMethodsPolicy property.
         */
        set: function (value) {
            this._authenticationMethodsPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "authorizationPolicy", {
        /**
         * Gets the authorizationPolicy property value.
         * @returns a authorizationPolicy
         */
        get: function () {
            return this._authorizationPolicy;
        },
        /**
         * Sets the authorizationPolicy property value.
         * @param value Value to set for the authorizationPolicy property.
         */
        set: function (value) {
            this._authorizationPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "claimsMappingPolicies", {
        /**
         * Gets the claimsMappingPolicies property value.
         * @returns a claimsMappingPolicy
         */
        get: function () {
            return this._claimsMappingPolicies;
        },
        /**
         * Sets the claimsMappingPolicies property value.
         * @param value Value to set for the claimsMappingPolicies property.
         */
        set: function (value) {
            this._claimsMappingPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "conditionalAccessPolicies", {
        /**
         * Gets the conditionalAccessPolicies property value.
         * @returns a conditionalAccessPolicy
         */
        get: function () {
            return this._conditionalAccessPolicies;
        },
        /**
         * Sets the conditionalAccessPolicies property value.
         * @param value Value to set for the conditionalAccessPolicies property.
         */
        set: function (value) {
            this._conditionalAccessPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "featureRolloutPolicies", {
        /**
         * Gets the featureRolloutPolicies property value.
         * @returns a featureRolloutPolicy
         */
        get: function () {
            return this._featureRolloutPolicies;
        },
        /**
         * Sets the featureRolloutPolicies property value.
         * @param value Value to set for the featureRolloutPolicies property.
         */
        set: function (value) {
            this._featureRolloutPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "homeRealmDiscoveryPolicies", {
        /**
         * Gets the homeRealmDiscoveryPolicies property value.
         * @returns a homeRealmDiscoveryPolicy
         */
        get: function () {
            return this._homeRealmDiscoveryPolicies;
        },
        /**
         * Sets the homeRealmDiscoveryPolicies property value.
         * @param value Value to set for the homeRealmDiscoveryPolicies property.
         */
        set: function (value) {
            this._homeRealmDiscoveryPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "identitySecurityDefaultsEnforcementPolicy", {
        /**
         * Gets the identitySecurityDefaultsEnforcementPolicy property value.
         * @returns a identitySecurityDefaultsEnforcementPolicy
         */
        get: function () {
            return this._identitySecurityDefaultsEnforcementPolicy;
        },
        /**
         * Sets the identitySecurityDefaultsEnforcementPolicy property value.
         * @param value Value to set for the identitySecurityDefaultsEnforcementPolicy property.
         */
        set: function (value) {
            this._identitySecurityDefaultsEnforcementPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "permissionGrantPolicies", {
        /**
         * Gets the permissionGrantPolicies property value.
         * @returns a permissionGrantPolicy
         */
        get: function () {
            return this._permissionGrantPolicies;
        },
        /**
         * Sets the permissionGrantPolicies property value.
         * @param value Value to set for the permissionGrantPolicies property.
         */
        set: function (value) {
            this._permissionGrantPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "tokenIssuancePolicies", {
        /**
         * Gets the tokenIssuancePolicies property value.
         * @returns a tokenIssuancePolicy
         */
        get: function () {
            return this._tokenIssuancePolicies;
        },
        /**
         * Sets the tokenIssuancePolicies property value.
         * @param value Value to set for the tokenIssuancePolicies property.
         */
        set: function (value) {
            this._tokenIssuancePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PolicyRoot.prototype, "tokenLifetimePolicies", {
        /**
         * Gets the tokenLifetimePolicies property value.
         * @returns a tokenLifetimePolicy
         */
        get: function () {
            return this._tokenLifetimePolicies;
        },
        /**
         * Sets the tokenLifetimePolicies property value.
         * @param value Value to set for the tokenLifetimePolicies property.
         */
        set: function (value) {
            this._tokenLifetimePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PolicyRoot.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["activityBasedTimeoutPolicies", function (o, n) { o.activityBasedTimeoutPolicies = n.getCollectionOfObjectValues(activityBasedTimeoutPolicy_1.ActivityBasedTimeoutPolicy); }],
            ["adminConsentRequestPolicy", function (o, n) { o.adminConsentRequestPolicy = n.getObjectValue(adminConsentRequestPolicy_1.AdminConsentRequestPolicy); }],
            ["authenticationFlowsPolicy", function (o, n) { o.authenticationFlowsPolicy = n.getObjectValue(authenticationFlowsPolicy_1.AuthenticationFlowsPolicy); }],
            ["authenticationMethodsPolicy", function (o, n) { o.authenticationMethodsPolicy = n.getObjectValue(authenticationMethodsPolicy_1.AuthenticationMethodsPolicy); }],
            ["authorizationPolicy", function (o, n) { o.authorizationPolicy = n.getObjectValue(authorizationPolicy_1.AuthorizationPolicy); }],
            ["claimsMappingPolicies", function (o, n) { o.claimsMappingPolicies = n.getCollectionOfObjectValues(claimsMappingPolicy_1.ClaimsMappingPolicy); }],
            ["conditionalAccessPolicies", function (o, n) { o.conditionalAccessPolicies = n.getCollectionOfObjectValues(conditionalAccessPolicy_1.ConditionalAccessPolicy); }],
            ["featureRolloutPolicies", function (o, n) { o.featureRolloutPolicies = n.getCollectionOfObjectValues(featureRolloutPolicy_1.FeatureRolloutPolicy); }],
            ["homeRealmDiscoveryPolicies", function (o, n) { o.homeRealmDiscoveryPolicies = n.getCollectionOfObjectValues(homeRealmDiscoveryPolicy_1.HomeRealmDiscoveryPolicy); }],
            ["identitySecurityDefaultsEnforcementPolicy", function (o, n) { o.identitySecurityDefaultsEnforcementPolicy = n.getObjectValue(identitySecurityDefaultsEnforcementPolicy_1.IdentitySecurityDefaultsEnforcementPolicy); }],
            ["permissionGrantPolicies", function (o, n) { o.permissionGrantPolicies = n.getCollectionOfObjectValues(permissionGrantPolicy_1.PermissionGrantPolicy); }],
            ["tokenIssuancePolicies", function (o, n) { o.tokenIssuancePolicies = n.getCollectionOfObjectValues(tokenIssuancePolicy_1.TokenIssuancePolicy); }],
            ["tokenLifetimePolicies", function (o, n) { o.tokenLifetimePolicies = n.getCollectionOfObjectValues(tokenLifetimePolicy_1.TokenLifetimePolicy); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PolicyRoot.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("activityBasedTimeoutPolicies", this.activityBasedTimeoutPolicies);
        writer.writeObjectValue("adminConsentRequestPolicy", this.adminConsentRequestPolicy);
        writer.writeObjectValue("authenticationFlowsPolicy", this.authenticationFlowsPolicy);
        writer.writeObjectValue("authenticationMethodsPolicy", this.authenticationMethodsPolicy);
        writer.writeObjectValue("authorizationPolicy", this.authorizationPolicy);
        writer.writeCollectionOfObjectValues("claimsMappingPolicies", this.claimsMappingPolicies);
        writer.writeCollectionOfObjectValues("conditionalAccessPolicies", this.conditionalAccessPolicies);
        writer.writeCollectionOfObjectValues("featureRolloutPolicies", this.featureRolloutPolicies);
        writer.writeCollectionOfObjectValues("homeRealmDiscoveryPolicies", this.homeRealmDiscoveryPolicies);
        writer.writeObjectValue("identitySecurityDefaultsEnforcementPolicy", this.identitySecurityDefaultsEnforcementPolicy);
        writer.writeCollectionOfObjectValues("permissionGrantPolicies", this.permissionGrantPolicies);
        writer.writeCollectionOfObjectValues("tokenIssuancePolicies", this.tokenIssuancePolicies);
        writer.writeCollectionOfObjectValues("tokenLifetimePolicies", this.tokenLifetimePolicies);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return PolicyRoot;
}(entity_1.Entity));
exports.PolicyRoot = PolicyRoot;
