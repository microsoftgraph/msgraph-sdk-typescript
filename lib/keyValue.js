"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValue = void 0;
var KeyValue = /** @class */ (function () {
    /**
     * Instantiates a new keyValue and sets the default values.
     */
    function KeyValue() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(KeyValue.prototype, "additionalData", {
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
    Object.defineProperty(KeyValue.prototype, "key", {
        /**
         * Gets the key property value. Key.
         * @returns a string
         */
        get: function () {
            return this._key;
        },
        /**
         * Sets the key property value. Key.
         * @param value Value to set for the key property.
         */
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyValue.prototype, "value", {
        /**
         * Gets the value property value. Value.
         * @returns a string
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Value.
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
    KeyValue.prototype.getFieldDeserializers = function () {
        return new Map([
            ["key", function (o, n) { o.key = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    KeyValue.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return KeyValue;
}());
exports.KeyValue = KeyValue;
