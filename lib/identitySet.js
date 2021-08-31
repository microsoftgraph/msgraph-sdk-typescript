"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitySet = void 0;
var identity_1 = require("./identity");
var IdentitySet = /** @class */ (function () {
    /**
     * Instantiates a new identitySet and sets the default values.
     */
    function IdentitySet() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(IdentitySet.prototype, "additionalData", {
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
    Object.defineProperty(IdentitySet.prototype, "application", {
        /**
         * Gets the application property value. Optional. The application associated with this action.
         * @returns a identity
         */
        get: function () {
            return this._application;
        },
        /**
         * Sets the application property value. Optional. The application associated with this action.
         * @param value Value to set for the application property.
         */
        set: function (value) {
            this._application = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentitySet.prototype, "device", {
        /**
         * Gets the device property value. Optional. The device associated with this action.
         * @returns a identity
         */
        get: function () {
            return this._device;
        },
        /**
         * Sets the device property value. Optional. The device associated with this action.
         * @param value Value to set for the device property.
         */
        set: function (value) {
            this._device = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(IdentitySet.prototype, "user", {
        /**
         * Gets the user property value. Optional. The user associated with this action.
         * @returns a identity
         */
        get: function () {
            return this._user;
        },
        /**
         * Sets the user property value. Optional. The user associated with this action.
         * @param value Value to set for the user property.
         */
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    IdentitySet.prototype.getFieldDeserializers = function () {
        return new Map([
            ["application", function (o, n) { o.application = n.getObjectValue(identity_1.Identity); }],
            ["device", function (o, n) { o.device = n.getObjectValue(identity_1.Identity); }],
            ["user", function (o, n) { o.user = n.getObjectValue(identity_1.Identity); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    IdentitySet.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("application", this.application);
        writer.writeObjectValue("device", this.device);
        writer.writeObjectValue("user", this.user);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return IdentitySet;
}());
exports.IdentitySet = IdentitySet;
