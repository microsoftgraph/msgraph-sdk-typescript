"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceAccess = void 0;
var ResourceAccess = /** @class */ (function () {
    /**
     * Instantiates a new resourceAccess and sets the default values.
     */
    function ResourceAccess() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ResourceAccess.prototype, "additionalData", {
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
    Object.defineProperty(ResourceAccess.prototype, "id", {
        /**
         * Gets the id property value. The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. The unique identifier for one of the oauth2PermissionScopes or appRole instances that the resource application exposes.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ResourceAccess.prototype, "type", {
        /**
         * Gets the type property value. Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or Role.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. Specifies whether the id property references an oauth2PermissionScopes or an appRole. Possible values are Scope or Role.
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
    ResourceAccess.prototype.getFieldDeserializers = function () {
        return new Map([
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ResourceAccess.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return ResourceAccess;
}());
exports.ResourceAccess = ResourceAccess;
