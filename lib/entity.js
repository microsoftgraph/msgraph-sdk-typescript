"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Entity = /** @class */ (function () {
    /**
     * Instantiates a new entity and sets the default values.
     */
    function Entity() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(Entity.prototype, "additionalData", {
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
    Object.defineProperty(Entity.prototype, "id", {
        /**
         * Gets the id property value. Read-only.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. Read-only.
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
    Entity.prototype.getFieldDeserializers = function () {
        return new Map([
            ["id", function (o, n) { o.id = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Entity.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return Entity;
}());
exports.Entity = Entity;
