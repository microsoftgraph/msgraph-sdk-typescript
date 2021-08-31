"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
var Identity = /** @class */ (function () {
    /**
     * Instantiates a new identity and sets the default values.
     */
    function Identity() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(Identity.prototype, "additionalData", {
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
    Object.defineProperty(Identity.prototype, "displayName", {
        /**
         * Gets the displayName property value. The identity's display name. Note that this may not always be available or up to date. For example, if a user changes their display name, the API may show the new value in a future response, but the items associated with the user won't show up as having changed when using delta.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The identity's display name. Note that this may not always be available or up to date. For example, if a user changes their display name, the API may show the new value in a future response, but the items associated with the user won't show up as having changed when using delta.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Identity.prototype, "id", {
        /**
         * Gets the id property value. Unique identifier for the identity.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. Unique identifier for the identity.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Identity.prototype.getFieldDeserializers = function () {
        return new Map([
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["id", function (o, n) { o.id = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Identity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return Identity;
}());
exports.Identity = Identity;
