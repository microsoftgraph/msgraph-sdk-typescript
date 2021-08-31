"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriveRecipient = void 0;
var DriveRecipient = /** @class */ (function () {
    /**
     * Instantiates a new driveRecipient and sets the default values.
     */
    function DriveRecipient() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(DriveRecipient.prototype, "additionalData", {
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
    Object.defineProperty(DriveRecipient.prototype, "alias", {
        /**
         * Gets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
         * @returns a string
         */
        get: function () {
            return this._alias;
        },
        /**
         * Sets the alias property value. The alias of the domain object, for cases where an email address is unavailable (e.g. security groups).
         * @param value Value to set for the alias property.
         */
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DriveRecipient.prototype, "email", {
        /**
         * Gets the email property value. The email address for the recipient, if the recipient has an associated email address.
         * @returns a string
         */
        get: function () {
            return this._email;
        },
        /**
         * Sets the email property value. The email address for the recipient, if the recipient has an associated email address.
         * @param value Value to set for the email property.
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DriveRecipient.prototype, "objectId", {
        /**
         * Gets the objectId property value. The unique identifier for the recipient in the directory.
         * @returns a string
         */
        get: function () {
            return this._objectId;
        },
        /**
         * Sets the objectId property value. The unique identifier for the recipient in the directory.
         * @param value Value to set for the objectId property.
         */
        set: function (value) {
            this._objectId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DriveRecipient.prototype.getFieldDeserializers = function () {
        return new Map([
            ["alias", function (o, n) { o.alias = n.getStringValue(); }],
            ["email", function (o, n) { o.email = n.getStringValue(); }],
            ["objectId", function (o, n) { o.objectId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DriveRecipient.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("alias", this.alias);
        writer.writeStringValue("email", this.email);
        writer.writeStringValue("objectId", this.objectId);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return DriveRecipient;
}());
exports.DriveRecipient = DriveRecipient;
