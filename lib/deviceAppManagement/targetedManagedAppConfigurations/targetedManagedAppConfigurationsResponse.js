"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetedManagedAppConfigurationsResponse = void 0;
var targetedManagedAppConfiguration_1 = require("../targetedManagedAppConfiguration");
var TargetedManagedAppConfigurationsResponse = /** @class */ (function () {
    /**
     * Instantiates a new TargetedManagedAppConfigurationsResponse and sets the default values.
     */
    function TargetedManagedAppConfigurationsResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(TargetedManagedAppConfigurationsResponse.prototype, "additionalData", {
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
    Object.defineProperty(TargetedManagedAppConfigurationsResponse.prototype, "nextLink", {
        /**
         * Gets the nextLink property value.
         * @returns a string
         */
        get: function () {
            return this._nextLink;
        },
        /**
         * Sets the nextLink property value.
         * @param value Value to set for the nextLink property.
         */
        set: function (value) {
            this._nextLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(TargetedManagedAppConfigurationsResponse.prototype, "value", {
        /**
         * Gets the value property value.
         * @returns a targetedManagedAppConfiguration
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value.
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    TargetedManagedAppConfigurationsResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["@odata.nextLink", function (o, n) { o.nextLink = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getCollectionOfObjectValues(targetedManagedAppConfiguration_1.TargetedManagedAppConfiguration); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    TargetedManagedAppConfigurationsResponse.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        writer.writeCollectionOfObjectValues("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return TargetedManagedAppConfigurationsResponse;
}());
exports.TargetedManagedAppConfigurationsResponse = TargetedManagedAppConfigurationsResponse;
