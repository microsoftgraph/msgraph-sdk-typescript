"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ref = void 0;
var $ref = /** @class */ (function () {
    /**
     * Instantiates a new $ref and sets the default values.
     */
    function $ref() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty($ref.prototype, "additionalData", {
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
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    $ref.prototype.getFieldDeserializers = function () {
        return new Map([]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    $ref.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    return $ref;
}());
exports.$ref = $ref;
