"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignedLicense = void 0;
var AssignedLicense = /** @class */ (function () {
    /**
     * Instantiates a new assignedLicense and sets the default values.
     */
    function AssignedLicense() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AssignedLicense.prototype, "additionalData", {
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
    Object.defineProperty(AssignedLicense.prototype, "disabledPlans", {
        /**
         * Gets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
         * @returns a string
         */
        get: function () {
            return this._disabledPlans;
        },
        /**
         * Sets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
         * @param value Value to set for the disabledPlans property.
         */
        set: function (value) {
            this._disabledPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AssignedLicense.prototype, "skuId", {
        /**
         * Gets the skuId property value. The unique identifier for the SKU.
         * @returns a string
         */
        get: function () {
            return this._skuId;
        },
        /**
         * Sets the skuId property value. The unique identifier for the SKU.
         * @param value Value to set for the skuId property.
         */
        set: function (value) {
            this._skuId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AssignedLicense.prototype.getFieldDeserializers = function () {
        return new Map([
            ["disabledPlans", function (o, n) { o.disabledPlans = n.getCollectionOfPrimitiveValues(); }],
            ["skuId", function (o, n) { o.skuId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AssignedLicense.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("disabledPlans", this.disabledPlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return AssignedLicense;
}());
exports.AssignedLicense = AssignedLicense;
