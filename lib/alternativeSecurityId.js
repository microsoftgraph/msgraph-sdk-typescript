"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativeSecurityId = void 0;
var AlternativeSecurityId = /** @class */ (function () {
    /**
     * Instantiates a new alternativeSecurityId and sets the default values.
     */
    function AlternativeSecurityId() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AlternativeSecurityId.prototype, "additionalData", {
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
    Object.defineProperty(AlternativeSecurityId.prototype, "identityProvider", {
        /**
         * Gets the identityProvider property value. For internal use only
         * @returns a string
         */
        get: function () {
            return this._identityProvider;
        },
        /**
         * Sets the identityProvider property value. For internal use only
         * @param value Value to set for the identityProvider property.
         */
        set: function (value) {
            this._identityProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AlternativeSecurityId.prototype, "key", {
        /**
         * Gets the key property value. For internal use only
         * @returns a binary
         */
        get: function () {
            return this._key;
        },
        /**
         * Sets the key property value. For internal use only
         * @param value Value to set for the key property.
         */
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AlternativeSecurityId.prototype, "type", {
        /**
         * Gets the type property value. For internal use only
         * @returns a integer
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. For internal use only
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    AlternativeSecurityId.prototype.getFieldDeserializers = function () {
        return new Map([
            ["identityProvider", function (o, n) { o.identityProvider = n.getStringValue(); }],
            ["key", function (o, n) { o.key = n.getObjectValue(Binary); }],
            ["type", function (o, n) { o.type = n.getNumberValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AlternativeSecurityId.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("identityProvider", this.identityProvider);
        writer.writeObjectValue("key", this.key);
        writer.writeNumberValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return AlternativeSecurityId;
}());
exports.AlternativeSecurityId = AlternativeSecurityId;
