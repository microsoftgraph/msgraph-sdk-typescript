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
exports.SecureScoreControlProfile = void 0;
var entity_1 = require("../entity");
var SecureScoreControlProfile = /** @class */ (function (_super) {
    __extends(SecureScoreControlProfile, _super);
    /**
     * Instantiates a new secureScoreControlProfile and sets the default values.
     */
    function SecureScoreControlProfile() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "actionType", {
        /**
         * Gets the actionType property value. Control action type (Config, Review, Behavior).
         * @returns a string
         */
        get: function () {
            return this._actionType;
        },
        /**
         * Sets the actionType property value. Control action type (Config, Review, Behavior).
         * @param value Value to set for the actionType property.
         */
        set: function (value) {
            this._actionType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "actionUrl", {
        /**
         * Gets the actionUrl property value. URL to where the control can be actioned.
         * @returns a string
         */
        get: function () {
            return this._actionUrl;
        },
        /**
         * Sets the actionUrl property value. URL to where the control can be actioned.
         * @param value Value to set for the actionUrl property.
         */
        set: function (value) {
            this._actionUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "azureTenantId", {
        /**
         * Gets the azureTenantId property value. GUID string for tenant ID.
         * @returns a string
         */
        get: function () {
            return this._azureTenantId;
        },
        /**
         * Sets the azureTenantId property value. GUID string for tenant ID.
         * @param value Value to set for the azureTenantId property.
         */
        set: function (value) {
            this._azureTenantId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "complianceInformation", {
        /**
         * Gets the complianceInformation property value. The collection of compliance information associated with secure score control
         * @returns a complianceInformation
         */
        get: function () {
            return this._complianceInformation;
        },
        /**
         * Sets the complianceInformation property value. The collection of compliance information associated with secure score control
         * @param value Value to set for the complianceInformation property.
         */
        set: function (value) {
            this._complianceInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "controlCategory", {
        /**
         * Gets the controlCategory property value. Control action category (Account, Data, Device, Apps, Infrastructure).
         * @returns a string
         */
        get: function () {
            return this._controlCategory;
        },
        /**
         * Sets the controlCategory property value. Control action category (Account, Data, Device, Apps, Infrastructure).
         * @param value Value to set for the controlCategory property.
         */
        set: function (value) {
            this._controlCategory = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "controlStateUpdates", {
        /**
         * Gets the controlStateUpdates property value. Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).
         * @returns a secureScoreControlStateUpdate
         */
        get: function () {
            return this._controlStateUpdates;
        },
        /**
         * Sets the controlStateUpdates property value. Flag to indicate where the tenant has marked a control (ignore, thirdParty, reviewed) (supports update).
         * @param value Value to set for the controlStateUpdates property.
         */
        set: function (value) {
            this._controlStateUpdates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "deprecated", {
        /**
         * Gets the deprecated property value. Flag to indicate if a control is depreciated.
         * @returns a boolean
         */
        get: function () {
            return this._deprecated;
        },
        /**
         * Sets the deprecated property value. Flag to indicate if a control is depreciated.
         * @param value Value to set for the deprecated property.
         */
        set: function (value) {
            this._deprecated = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "implementationCost", {
        /**
         * Gets the implementationCost property value. Resource cost of implemmentating control (low, moderate, high).
         * @returns a string
         */
        get: function () {
            return this._implementationCost;
        },
        /**
         * Sets the implementationCost property value. Resource cost of implemmentating control (low, moderate, high).
         * @param value Value to set for the implementationCost property.
         */
        set: function (value) {
            this._implementationCost = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Time at which the control profile entity was last modified. The Timestamp type represents date and time
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Time at which the control profile entity was last modified. The Timestamp type represents date and time
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "maxScore", {
        /**
         * Gets the maxScore property value. Current obtained max score on specified date.
         * @returns a double
         */
        get: function () {
            return this._maxScore;
        },
        /**
         * Sets the maxScore property value. Current obtained max score on specified date.
         * @param value Value to set for the maxScore property.
         */
        set: function (value) {
            this._maxScore = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "rank", {
        /**
         * Gets the rank property value. Microsoft's stack ranking of control.
         * @returns a integer
         */
        get: function () {
            return this._rank;
        },
        /**
         * Sets the rank property value. Microsoft's stack ranking of control.
         * @param value Value to set for the rank property.
         */
        set: function (value) {
            this._rank = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "remediation", {
        /**
         * Gets the remediation property value. Description of what the control will help remediate.
         * @returns a string
         */
        get: function () {
            return this._remediation;
        },
        /**
         * Sets the remediation property value. Description of what the control will help remediate.
         * @param value Value to set for the remediation property.
         */
        set: function (value) {
            this._remediation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "remediationImpact", {
        /**
         * Gets the remediationImpact property value. Description of the impact on users of the remediation.
         * @returns a string
         */
        get: function () {
            return this._remediationImpact;
        },
        /**
         * Sets the remediationImpact property value. Description of the impact on users of the remediation.
         * @param value Value to set for the remediationImpact property.
         */
        set: function (value) {
            this._remediationImpact = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "service", {
        /**
         * Gets the service property value. Service that owns the control (Exchange, Sharepoint, Azure AD).
         * @returns a string
         */
        get: function () {
            return this._service;
        },
        /**
         * Sets the service property value. Service that owns the control (Exchange, Sharepoint, Azure AD).
         * @param value Value to set for the service property.
         */
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "threats", {
        /**
         * Gets the threats property value. List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,elevationOfPrivilege,maliciousInsider,passwordCracking,phishingOrWhaling,spoofing).
         * @returns a string
         */
        get: function () {
            return this._threats;
        },
        /**
         * Sets the threats property value. List of threats the control mitigates (accountBreach,dataDeletion,dataExfiltration,dataSpillage,elevationOfPrivilege,maliciousInsider,passwordCracking,phishingOrWhaling,spoofing).
         * @param value Value to set for the threats property.
         */
        set: function (value) {
            this._threats = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "tier", {
        /**
         * Gets the tier property value. Control tier (Core, Defense in Depth, Advanced.)
         * @returns a string
         */
        get: function () {
            return this._tier;
        },
        /**
         * Sets the tier property value. Control tier (Core, Defense in Depth, Advanced.)
         * @param value Value to set for the tier property.
         */
        set: function (value) {
            this._tier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "title", {
        /**
         * Gets the title property value. Title of the control.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. Title of the control.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "userImpact", {
        /**
         * Gets the userImpact property value. User impact of implementing control (low, moderate, high).
         * @returns a string
         */
        get: function () {
            return this._userImpact;
        },
        /**
         * Sets the userImpact property value. User impact of implementing control (low, moderate, high).
         * @param value Value to set for the userImpact property.
         */
        set: function (value) {
            this._userImpact = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SecureScoreControlProfile.prototype, "vendorInformation", {
        /**
         * Gets the vendorInformation property value.
         * @returns a securityVendorInformation
         */
        get: function () {
            return this._vendorInformation;
        },
        /**
         * Sets the vendorInformation property value.
         * @param value Value to set for the vendorInformation property.
         */
        set: function (value) {
            this._vendorInformation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SecureScoreControlProfile.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["actionType", function (o, n) { o.actionType = n.getStringValue(); }],
            ["actionUrl", function (o, n) { o.actionUrl = n.getStringValue(); }],
            ["azureTenantId", function (o, n) { o.azureTenantId = n.getStringValue(); }],
            ["complianceInformation", function (o, n) { o.complianceInformation = n.getCollectionOfPrimitiveValues(); }],
            ["controlCategory", function (o, n) { o.controlCategory = n.getStringValue(); }],
            ["controlStateUpdates", function (o, n) { o.controlStateUpdates = n.getCollectionOfPrimitiveValues(); }],
            ["deprecated", function (o, n) { o.deprecated = n.getBooleanValue(); }],
            ["implementationCost", function (o, n) { o.implementationCost = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["maxScore", function (o, n) { o.maxScore = n.getNumberValue(); }],
            ["rank", function (o, n) { o.rank = n.getNumberValue(); }],
            ["remediation", function (o, n) { o.remediation = n.getStringValue(); }],
            ["remediationImpact", function (o, n) { o.remediationImpact = n.getStringValue(); }],
            ["service", function (o, n) { o.service = n.getStringValue(); }],
            ["threats", function (o, n) { o.threats = n.getCollectionOfPrimitiveValues(); }],
            ["tier", function (o, n) { o.tier = n.getStringValue(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["userImpact", function (o, n) { o.userImpact = n.getStringValue(); }],
            ["vendorInformation", function (o, n) { o.vendorInformation = n.getObjectValue(SecurityVendorInformation); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SecureScoreControlProfile.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("actionType", this.actionType);
        writer.writeStringValue("actionUrl", this.actionUrl);
        writer.writeStringValue("azureTenantId", this.azureTenantId);
        writer.writeCollectionOfPrimitiveValues("complianceInformation", this.complianceInformation);
        writer.writeStringValue("controlCategory", this.controlCategory);
        writer.writeCollectionOfPrimitiveValues("controlStateUpdates", this.controlStateUpdates);
        writer.writeBooleanValue("deprecated", this.deprecated);
        writer.writeStringValue("implementationCost", this.implementationCost);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("maxScore", this.maxScore);
        writer.writeNumberValue("rank", this.rank);
        writer.writeStringValue("remediation", this.remediation);
        writer.writeStringValue("remediationImpact", this.remediationImpact);
        writer.writeStringValue("service", this.service);
        writer.writeCollectionOfPrimitiveValues("threats", this.threats);
        writer.writeStringValue("tier", this.tier);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("userImpact", this.userImpact);
        writer.writeObjectValue("vendorInformation", this.vendorInformation);
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
    return SecureScoreControlProfile;
}(entity_1.Entity));
exports.SecureScoreControlProfile = SecureScoreControlProfile;
