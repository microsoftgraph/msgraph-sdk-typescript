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
exports.SignIn = void 0;
var entity_1 = require("../entity");
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    /**
     * Instantiates a new signIn and sets the default values.
     */
    function SignIn() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SignIn.prototype, "appDisplayName", {
        /**
         * Gets the appDisplayName property value. The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
         * @returns a string
         */
        get: function () {
            return this._appDisplayName;
        },
        /**
         * Sets the appDisplayName property value. The application name displayed in the Azure Portal. Supports $filter (eq and startsWith operators only).
         * @param value Value to set for the appDisplayName property.
         */
        set: function (value) {
            this._appDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "appId", {
        /**
         * Gets the appId property value. The application identifier in Azure Active Directory. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._appId;
        },
        /**
         * Sets the appId property value. The application identifier in Azure Active Directory. Supports $filter (eq operator only).
         * @param value Value to set for the appId property.
         */
        set: function (value) {
            this._appId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "appliedConditionalAccessPolicies", {
        /**
         * Gets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
         * @returns a appliedConditionalAccessPolicy
         */
        get: function () {
            return this._appliedConditionalAccessPolicies;
        },
        /**
         * Sets the appliedConditionalAccessPolicies property value. A list of conditional access policies that are triggered by the corresponding sign-in activity.
         * @param value Value to set for the appliedConditionalAccessPolicies property.
         */
        set: function (value) {
            this._appliedConditionalAccessPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "clientAppUsed", {
        /**
         * Gets the clientAppUsed property value. The legacy client used for sign-in activity. For example: Browser, Exchange Active Sync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._clientAppUsed;
        },
        /**
         * Sets the clientAppUsed property value. The legacy client used for sign-in activity. For example: Browser, Exchange Active Sync, Modern clients, IMAP, MAPI, SMTP, or POP. Supports $filter (eq operator only).
         * @param value Value to set for the clientAppUsed property.
         */
        set: function (value) {
            this._clientAppUsed = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "conditionalAccessStatus", {
        /**
         * Gets the conditionalAccessStatus property value. The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only).
         * @returns a conditionalAccessStatus
         */
        get: function () {
            return this._conditionalAccessStatus;
        },
        /**
         * Sets the conditionalAccessStatus property value. The status of the conditional access policy triggered. Possible values: success, failure, notApplied, or unknownFutureValue. Supports $filter (eq operator only).
         * @param value Value to set for the conditionalAccessStatus property.
         */
        set: function (value) {
            this._conditionalAccessStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "correlationId", {
        /**
         * Gets the correlationId property value. The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._correlationId;
        },
        /**
         * Sets the correlationId property value. The identifier that's sent from the client when sign-in is initiated. This is used for troubleshooting the corresponding sign-in activity when calling for support. Supports $filter (eq operator only).
         * @param value Value to set for the correlationId property.
         */
        set: function (value) {
            this._correlationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time the sign-in was initiated. The Timestamp type is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $orderby and $filter (eq, le, and ge operators only).
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "deviceDetail", {
        /**
         * Gets the deviceDetail property value. The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
         * @returns a deviceDetail
         */
        get: function () {
            return this._deviceDetail;
        },
        /**
         * Sets the deviceDetail property value. The device information from where the sign-in occurred. Includes information such as deviceId, OS, and browser. Supports $filter (eq and startsWith operators only) on browser and operatingSytem properties.
         * @param value Value to set for the deviceDetail property.
         */
        set: function (value) {
            this._deviceDetail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "ipAddress", {
        /**
         * Gets the ipAddress property value. The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only).
         * @returns a string
         */
        get: function () {
            return this._ipAddress;
        },
        /**
         * Sets the ipAddress property value. The IP address of the client from where the sign-in occurred. Supports $filter (eq and startsWith operators only).
         * @param value Value to set for the ipAddress property.
         */
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "isInteractive", {
        /**
         * Gets the isInteractive property value. Indicates whether a sign-in is interactive or not.
         * @returns a boolean
         */
        get: function () {
            return this._isInteractive;
        },
        /**
         * Sets the isInteractive property value. Indicates whether a sign-in is interactive or not.
         * @param value Value to set for the isInteractive property.
         */
        set: function (value) {
            this._isInteractive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "location", {
        /**
         * Gets the location property value. The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
         * @returns a signInLocation
         */
        get: function () {
            return this._location;
        },
        /**
         * Sets the location property value. The city, state, and 2 letter country code from where the sign-in occurred. Supports $filter (eq and startsWith operators only) on city, state, and countryOrRegion properties.
         * @param value Value to set for the location property.
         */
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "resourceDisplayName", {
        /**
         * Gets the resourceDisplayName property value. The name of the resource that the user signed in to. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._resourceDisplayName;
        },
        /**
         * Sets the resourceDisplayName property value. The name of the resource that the user signed in to. Supports $filter (eq operator only).
         * @param value Value to set for the resourceDisplayName property.
         */
        set: function (value) {
            this._resourceDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "resourceId", {
        /**
         * Gets the resourceId property value. The identifier of the resource that the user signed in to. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._resourceId;
        },
        /**
         * Sets the resourceId property value. The identifier of the resource that the user signed in to. Supports $filter (eq operator only).
         * @param value Value to set for the resourceId property.
         */
        set: function (value) {
            this._resourceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskDetail", {
        /**
         * Gets the riskDetail property value. The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @returns a riskDetail
         */
        get: function () {
            return this._riskDetail;
        },
        /**
         * Sets the riskDetail property value. The reason behind a specific state of a risky user, sign-in, or a risk event. Possible values: none, adminGeneratedTemporaryPassword, userPerformedSecuredPasswordChange, userPerformedSecuredPasswordReset, adminConfirmedSigninSafe, aiConfirmedSigninSafe, userPassedMFADrivenByRiskBasedPolicy, adminDismissedAllRiskForUser, adminConfirmedSigninCompromised, or unknownFutureValue. The value none means that no action has been performed on the user or sign-in so far. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @param value Value to set for the riskDetail property.
         */
        set: function (value) {
            this._riskDetail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskEventTypes", {
        /**
         * Gets the riskEventTypes property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq operator only).
         * @returns a riskEventType
         */
        get: function () {
            return this._riskEventTypes;
        },
        /**
         * Sets the riskEventTypes property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq operator only).
         * @param value Value to set for the riskEventTypes property.
         */
        set: function (value) {
            this._riskEventTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskEventTypes_v2", {
        /**
         * Gets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
         * @returns a string
         */
        get: function () {
            return this._riskEventTypes_v2;
        },
        /**
         * Sets the riskEventTypes_v2 property value. The list of risk event types associated with the sign-in. Possible values: unlikelyTravel, anonymizedIPAddress, maliciousIPAddress, unfamiliarFeatures, malwareInfectedIPAddress, suspiciousIPAddress, leakedCredentials, investigationsThreatIntelligence,  generic, or unknownFutureValue. Supports $filter (eq and startsWith operators only).
         * @param value Value to set for the riskEventTypes_v2 property.
         */
        set: function (value) {
            this._riskEventTypes_v2 = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskLevelAggregated", {
        /**
         * Gets the riskLevelAggregated property value. The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @returns a riskLevel
         */
        get: function () {
            return this._riskLevelAggregated;
        },
        /**
         * Sets the riskLevelAggregated property value. The aggregated risk level. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @param value Value to set for the riskLevelAggregated property.
         */
        set: function (value) {
            this._riskLevelAggregated = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskLevelDuringSignIn", {
        /**
         * Gets the riskLevelDuringSignIn property value. The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @returns a riskLevel
         */
        get: function () {
            return this._riskLevelDuringSignIn;
        },
        /**
         * Sets the riskLevelDuringSignIn property value. The risk level during sign-in. Possible values: none, low, medium, high, hidden, or unknownFutureValue. The value hidden means the user or sign-in was not enabled for Azure AD Identity Protection. Supports $filter (eq operator only). Note: Details for this property are only available for Azure AD Premium P2 customers. All other customers are returned hidden.
         * @param value Value to set for the riskLevelDuringSignIn property.
         */
        set: function (value) {
            this._riskLevelDuringSignIn = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "riskState", {
        /**
         * Gets the riskState property value. The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only).
         * @returns a riskState
         */
        get: function () {
            return this._riskState;
        },
        /**
         * Sets the riskState property value. The risk state of a risky user, sign-in, or a risk event. Possible values: none, confirmedSafe, remediated, dismissed, atRisk, confirmedCompromised, or unknownFutureValue. Supports $filter (eq operator only).
         * @param value Value to set for the riskState property.
         */
        set: function (value) {
            this._riskState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "status", {
        /**
         * Gets the status property value. The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
         * @returns a signInStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. The sign-in status. Includes the error code and description of the error (in case of a sign-in failure). Supports $filter (eq operator only) on errorCode property.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "userDisplayName", {
        /**
         * Gets the userDisplayName property value. The display name of the user. Supports $filter (eq and startsWith operators only).
         * @returns a string
         */
        get: function () {
            return this._userDisplayName;
        },
        /**
         * Sets the userDisplayName property value. The display name of the user. Supports $filter (eq and startsWith operators only).
         * @param value Value to set for the userDisplayName property.
         */
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "userId", {
        /**
         * Gets the userId property value. The identifier of the user. Supports $filter (eq operator only).
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. The identifier of the user. Supports $filter (eq operator only).
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SignIn.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The UPN of the user. Supports $filter (eq and startsWith operators only).
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The UPN of the user. Supports $filter (eq and startsWith operators only).
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SignIn.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["appDisplayName", function (o, n) { o.appDisplayName = n.getStringValue(); }],
            ["appId", function (o, n) { o.appId = n.getStringValue(); }],
            ["appliedConditionalAccessPolicies", function (o, n) { o.appliedConditionalAccessPolicies = n.getCollectionOfPrimitiveValues(); }],
            ["clientAppUsed", function (o, n) { o.clientAppUsed = n.getStringValue(); }],
            ["conditionalAccessStatus", function (o, n) { o.conditionalAccessStatus = n.getObjectValue(ConditionalAccessStatus); }],
            ["correlationId", function (o, n) { o.correlationId = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["deviceDetail", function (o, n) { o.deviceDetail = n.getObjectValue(DeviceDetail); }],
            ["ipAddress", function (o, n) { o.ipAddress = n.getStringValue(); }],
            ["isInteractive", function (o, n) { o.isInteractive = n.getBooleanValue(); }],
            ["location", function (o, n) { o.location = n.getObjectValue(SignInLocation); }],
            ["resourceDisplayName", function (o, n) { o.resourceDisplayName = n.getStringValue(); }],
            ["resourceId", function (o, n) { o.resourceId = n.getStringValue(); }],
            ["riskDetail", function (o, n) { o.riskDetail = n.getObjectValue(RiskDetail); }],
            ["riskEventTypes", function (o, n) { o.riskEventTypes = n.getCollectionOfPrimitiveValues(); }],
            ["riskEventTypes_v2", function (o, n) { o.riskEventTypes_v2 = n.getCollectionOfPrimitiveValues(); }],
            ["riskLevelAggregated", function (o, n) { o.riskLevelAggregated = n.getObjectValue(RiskLevel); }],
            ["riskLevelDuringSignIn", function (o, n) { o.riskLevelDuringSignIn = n.getObjectValue(RiskLevel); }],
            ["riskState", function (o, n) { o.riskState = n.getObjectValue(RiskState); }],
            ["status", function (o, n) { o.status = n.getObjectValue(SignInStatus); }],
            ["userDisplayName", function (o, n) { o.userDisplayName = n.getStringValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SignIn.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeStringValue("appId", this.appId);
        writer.writeCollectionOfPrimitiveValues("appliedConditionalAccessPolicies", this.appliedConditionalAccessPolicies);
        writer.writeStringValue("clientAppUsed", this.clientAppUsed);
        writer.writeObjectValue("conditionalAccessStatus", this.conditionalAccessStatus);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("deviceDetail", this.deviceDetail);
        writer.writeStringValue("ipAddress", this.ipAddress);
        writer.writeBooleanValue("isInteractive", this.isInteractive);
        writer.writeObjectValue("location", this.location);
        writer.writeStringValue("resourceDisplayName", this.resourceDisplayName);
        writer.writeStringValue("resourceId", this.resourceId);
        writer.writeObjectValue("riskDetail", this.riskDetail);
        writer.writeCollectionOfPrimitiveValues("riskEventTypes", this.riskEventTypes);
        writer.writeCollectionOfPrimitiveValues("riskEventTypes_v2", this.riskEventTypes_v2);
        writer.writeObjectValue("riskLevelAggregated", this.riskLevelAggregated);
        writer.writeObjectValue("riskLevelDuringSignIn", this.riskLevelDuringSignIn);
        writer.writeObjectValue("riskState", this.riskState);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
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
    return SignIn;
}(entity_1.Entity));
exports.SignIn = SignIn;
