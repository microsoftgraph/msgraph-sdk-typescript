"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultManagedAppProtectionsResponse = void 0;
var defaultManagedAppProtection_1 = require("../defaultManagedAppProtection");
var DefaultManagedAppProtectionsResponse = /** @class */ (function () {
    /**
     * Instantiates a new DefaultManagedAppProtectionsResponse and sets the default values.
     */
    function DefaultManagedAppProtectionsResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(DefaultManagedAppProtectionsResponse.prototype, "additionalData", {
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
    Object.defineProperty(DefaultManagedAppProtectionsResponse.prototype, "nextLink", {
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
    Object.defineProperty(DefaultManagedAppProtectionsResponse.prototype, "value", {
        /**
         * Gets the value property value.
         * @returns a defaultManagedAppProtection
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
    DefaultManagedAppProtectionsResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["@odata.nextLink", function (o, n) { o.nextLink = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getCollectionOfObjectValues(defaultManagedAppProtection_1.DefaultManagedAppProtection); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DefaultManagedAppProtectionsResponse.prototype.serialize = function (writer) {
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
    return DefaultManagedAppProtectionsResponse;
}());
exports.DefaultManagedAppProtectionsResponse = DefaultManagedAppProtectionsResponse;
