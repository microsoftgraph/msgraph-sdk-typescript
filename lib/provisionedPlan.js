"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionedPlan = void 0;
var ProvisionedPlan = /** @class */ (function () {
    /**
     * Instantiates a new provisionedPlan and sets the default values.
     */
    function ProvisionedPlan() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ProvisionedPlan.prototype, "additionalData", {
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
    Object.defineProperty(ProvisionedPlan.prototype, "capabilityStatus", {
        /**
         * Gets the capabilityStatus property value. For example, 'Enabled'.
         * @returns a string
         */
        get: function () {
            return this._capabilityStatus;
        },
        /**
         * Sets the capabilityStatus property value. For example, 'Enabled'.
         * @param value Value to set for the capabilityStatus property.
         */
        set: function (value) {
            this._capabilityStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisionedPlan.prototype, "provisioningStatus", {
        /**
         * Gets the provisioningStatus property value. For example, 'Success'.
         * @returns a string
         */
        get: function () {
            return this._provisioningStatus;
        },
        /**
         * Sets the provisioningStatus property value. For example, 'Success'.
         * @param value Value to set for the provisioningStatus property.
         */
        set: function (value) {
            this._provisioningStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ProvisionedPlan.prototype, "service", {
        /**
         * Gets the service property value. The name of the service; for example, 'AccessControlS2S'
         * @returns a string
         */
        get: function () {
            return this._service;
        },
        /**
         * Sets the service property value. The name of the service; for example, 'AccessControlS2S'
         * @param value Value to set for the service property.
         */
        set: function (value) {
            this._service = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ProvisionedPlan.prototype.getFieldDeserializers = function () {
        return new Map([
            ["capabilityStatus", function (o, n) { o.capabilityStatus = n.getStringValue(); }],
            ["provisioningStatus", function (o, n) { o.provisioningStatus = n.getStringValue(); }],
            ["service", function (o, n) { o.service = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ProvisionedPlan.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        writer.writeStringValue("service", this.service);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return ProvisionedPlan;
}());
exports.ProvisionedPlan = ProvisionedPlan;
