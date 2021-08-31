"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleManagement = void 0;
var RoleManagement = /** @class */ (function () {
    /**
     * Instantiates a new RoleManagement and sets the default values.
     */
    function RoleManagement() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(RoleManagement.prototype, "additionalData", {
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
    RoleManagement.prototype.getFieldDeserializers = function () {
        return new Map([]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    RoleManagement.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    return RoleManagement;
}());
exports.RoleManagement = RoleManagement;
