"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityGovernance = void 0;
var accessReviewSet_1 = require("./accessReviews/accessReviewSet");
var appConsentApprovalRoute_1 = require("./appConsent/appConsentApprovalRoute");
var entitlementManagement_1 = require("./entitlementManagement/entitlementManagement");
var termsOfUseContainer_1 = require("./termsOfUse/termsOfUseContainer");
var IdentityGovernance = /** @class */ (function () {
    /**
     * Instantiates a new IdentityGovernance and sets the default values.
     */
    function IdentityGovernance() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(IdentityGovernance.prototype, "accessReviews", {
        /**
         * Gets the accessReviews property value.
         * @returns a accessReviewSet
         */
        get: function () {
            return this._accessReviews;
        },
        /**
         * Sets the accessReviews property value.
         * @param value Value to set for the accessReviews property.
         */
        set: function (value) {
            this._accessReviews = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityGovernance.prototype, "additionalData", {
        /**
         * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @returns a Map<string, unknown>
         */
        get: function () {
            return this._additionalData;
        },
        /**
         * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
         * @param value Value to set for the AdditionalData property.
         */
        set: function (value) {
            this._additionalData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityGovernance.prototype, "appConsent", {
        /**
         * Gets the appConsent property value.
         * @returns a appConsentApprovalRoute
         */
        get: function () {
            return this._appConsent;
        },
        /**
         * Sets the appConsent property value.
         * @param value Value to set for the appConsent property.
         */
        set: function (value) {
            this._appConsent = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityGovernance.prototype, "entitlementManagement", {
        /**
         * Gets the entitlementManagement property value.
         * @returns a entitlementManagement
         */
        get: function () {
            return this._entitlementManagement;
        },
        /**
         * Sets the entitlementManagement property value.
         * @param value Value to set for the entitlementManagement property.
         */
        set: function (value) {
            this._entitlementManagement = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentityGovernance.prototype, "termsOfUse", {
        /**
         * Gets the termsOfUse property value.
         * @returns a termsOfUseContainer
         */
        get: function () {
            return this._termsOfUse;
        },
        /**
         * Sets the termsOfUse property value.
         * @param value Value to set for the termsOfUse property.
         */
        set: function (value) {
            this._termsOfUse = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentityGovernance.prototype.getFieldDeserializers = function () {
        return new Map([
            ["accessReviews", function (o, n) { o.accessReviews = n.getObjectValue(accessReviewSet_1.AccessReviewSet); }],
            ["appConsent", function (o, n) { o.appConsent = n.getObjectValue(appConsentApprovalRoute_1.AppConsentApprovalRoute); }],
            ["entitlementManagement", function (o, n) { o.entitlementManagement = n.getObjectValue(entitlementManagement_1.EntitlementManagement); }],
            ["termsOfUse", function (o, n) { o.termsOfUse = n.getObjectValue(termsOfUseContainer_1.TermsOfUseContainer); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentityGovernance.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("accessReviews", this.accessReviews);
        writer.writeObjectValue("appConsent", this.appConsent);
        writer.writeObjectValue("entitlementManagement", this.entitlementManagement);
        writer.writeObjectValue("termsOfUse", this.termsOfUse);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return IdentityGovernance;
}());
exports.IdentityGovernance = IdentityGovernance;
