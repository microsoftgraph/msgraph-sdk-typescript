"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalAccessConditionSet = void 0;
var conditionalAccessUsers_1 = require("./conditionalAccessUsers");
var ConditionalAccessConditionSet = /** @class */ (function () {
    /**
     * Instantiates a new conditionalAccessConditionSet and sets the default values.
     */
    function ConditionalAccessConditionSet() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "additionalData", {
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
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "applications", {
        /**
         * Gets the applications property value. Applications and user actions included in and excluded from the policy. Required.
         * @returns a conditionalAccessApplications
         */
        get: function () {
            return this._applications;
        },
        /**
         * Sets the applications property value. Applications and user actions included in and excluded from the policy. Required.
         * @param value Value to set for the applications property.
         */
        set: function (value) {
            this._applications = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "clientAppTypes", {
        /**
         * Gets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
         * @returns a conditionalAccessClientApp
         */
        get: function () {
            return this._clientAppTypes;
        },
        /**
         * Sets the clientAppTypes property value. Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required.
         * @param value Value to set for the clientAppTypes property.
         */
        set: function (value) {
            this._clientAppTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "locations", {
        /**
         * Gets the locations property value. Locations included in and excluded from the policy.
         * @returns a conditionalAccessLocations
         */
        get: function () {
            return this._locations;
        },
        /**
         * Sets the locations property value. Locations included in and excluded from the policy.
         * @param value Value to set for the locations property.
         */
        set: function (value) {
            this._locations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "platforms", {
        /**
         * Gets the platforms property value. Platforms included in and excluded from the policy.
         * @returns a conditionalAccessPlatforms
         */
        get: function () {
            return this._platforms;
        },
        /**
         * Sets the platforms property value. Platforms included in and excluded from the policy.
         * @param value Value to set for the platforms property.
         */
        set: function (value) {
            this._platforms = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "signInRiskLevels", {
        /**
         * Gets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
         * @returns a riskLevel
         */
        get: function () {
            return this._signInRiskLevels;
        },
        /**
         * Sets the signInRiskLevels property value. Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
         * @param value Value to set for the signInRiskLevels property.
         */
        set: function (value) {
            this._signInRiskLevels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "userRiskLevels", {
        /**
         * Gets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
         * @returns a riskLevel
         */
        get: function () {
            return this._userRiskLevels;
        },
        /**
         * Sets the userRiskLevels property value. User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required.
         * @param value Value to set for the userRiskLevels property.
         */
        set: function (value) {
            this._userRiskLevels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessConditionSet.prototype, "users", {
        /**
         * Gets the users property value.
         * @returns a conditionalAccessUsers
         */
        get: function () {
            return this._users;
        },
        /**
         * Sets the users property value.
         * @param value Value to set for the users property.
         */
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ConditionalAccessConditionSet.prototype.getFieldDeserializers = function () {
        return new Map([
            ["applications", function (o, n) { o.applications = n.getObjectValue(ConditionalAccessApplications); }],
            ["clientAppTypes", function (o, n) { o.clientAppTypes = n.getCollectionOfPrimitiveValues(); }],
            ["locations", function (o, n) { o.locations = n.getObjectValue(ConditionalAccessLocations); }],
            ["platforms", function (o, n) { o.platforms = n.getObjectValue(ConditionalAccessPlatforms); }],
            ["signInRiskLevels", function (o, n) { o.signInRiskLevels = n.getCollectionOfPrimitiveValues(); }],
            ["userRiskLevels", function (o, n) { o.userRiskLevels = n.getCollectionOfPrimitiveValues(); }],
            ["users", function (o, n) { o.users = n.getObjectValue(conditionalAccessUsers_1.ConditionalAccessUsers); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConditionalAccessConditionSet.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("applications", this.applications);
        writer.writeCollectionOfPrimitiveValues("clientAppTypes", this.clientAppTypes);
        writer.writeObjectValue("locations", this.locations);
        writer.writeObjectValue("platforms", this.platforms);
        writer.writeCollectionOfPrimitiveValues("signInRiskLevels", this.signInRiskLevels);
        writer.writeCollectionOfPrimitiveValues("userRiskLevels", this.userRiskLevels);
        writer.writeObjectValue("users", this.users);
        writer.writeAdditionalData(this.additionalData);
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
    return ConditionalAccessConditionSet;
}());
exports.ConditionalAccessConditionSet = ConditionalAccessConditionSet;
