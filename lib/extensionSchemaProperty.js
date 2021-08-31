"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionSchemaProperty = void 0;
var ExtensionSchemaProperty = /** @class */ (function () {
    /**
     * Instantiates a new extensionSchemaProperty and sets the default values.
     */
    function ExtensionSchemaProperty() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ExtensionSchemaProperty.prototype, "additionalData", {
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
    Object.defineProperty(ExtensionSchemaProperty.prototype, "name", {
        /**
         * Gets the name property value. The name of the strongly typed property defined as part of a schema extension.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The name of the strongly typed property defined as part of a schema extension.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ExtensionSchemaProperty.prototype, "type", {
        /**
         * Gets the type property value. The type of the property that is defined as part of a schema extension.  Allowed values are Binary, Boolean, DateTime, Integer or String.  See the table below for more details.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. The type of the property that is defined as part of a schema extension.  Allowed values are Binary, Boolean, DateTime, Integer or String.  See the table below for more details.
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
    ExtensionSchemaProperty.prototype.getFieldDeserializers = function () {
        return new Map([
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ExtensionSchemaProperty.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return ExtensionSchemaProperty;
}());
exports.ExtensionSchemaProperty = ExtensionSchemaProperty;
