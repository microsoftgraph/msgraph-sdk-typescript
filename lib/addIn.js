"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIn = void 0;
var keyValue_1 = require("./keyValue");
var AddIn = /** @class */ (function () {
    /**
     * Instantiates a new addIn and sets the default values.
     */
    function AddIn() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AddIn.prototype, "additionalData", {
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
    Object.defineProperty(AddIn.prototype, "id", {
        /**
         * Gets the id property value.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AddIn.prototype, "properties", {
        /**
         * Gets the properties property value.
         * @returns a keyValue
         */
        get: function () {
            return this._properties;
        },
        /**
         * Sets the properties property value.
         * @param value Value to set for the properties property.
         */
        set: function (value) {
            this._properties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AddIn.prototype, "type", {
        /**
         * Gets the type property value.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value.
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
    AddIn.prototype.getFieldDeserializers = function () {
        return new Map([
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["properties", function (o, n) { o.properties = n.getCollectionOfObjectValues(keyValue_1.KeyValue); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AddIn.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfObjectValues("properties", this.properties);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return AddIn;
}());
exports.AddIn = AddIn;
