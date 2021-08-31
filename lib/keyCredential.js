"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyCredential = void 0;
var KeyCredential = /** @class */ (function () {
    /**
     * Instantiates a new keyCredential and sets the default values.
     */
    function KeyCredential() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(KeyCredential.prototype, "additionalData", {
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
    Object.defineProperty(KeyCredential.prototype, "customKeyIdentifier", {
        /**
         * Gets the customKeyIdentifier property value. Custom key identifier
         * @returns a binary
         */
        get: function () {
            return this._customKeyIdentifier;
        },
        /**
         * Sets the customKeyIdentifier property value. Custom key identifier
         * @param value Value to set for the customKeyIdentifier property.
         */
        set: function (value) {
            this._customKeyIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "displayName", {
        /**
         * Gets the displayName property value. Friendly name for the key. Optional.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Friendly name for the key. Optional.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "endDateTime", {
        /**
         * Gets the endDateTime property value. The date and time at which the credential expires.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._endDateTime;
        },
        /**
         * Sets the endDateTime property value. The date and time at which the credential expires.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the endDateTime property.
         */
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "key", {
        /**
         * Gets the key property value. Value for the key credential. Should be a base 64 encoded value.
         * @returns a binary
         */
        get: function () {
            return this._key;
        },
        /**
         * Sets the key property value. Value for the key credential. Should be a base 64 encoded value.
         * @param value Value to set for the key property.
         */
        set: function (value) {
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "keyId", {
        /**
         * Gets the keyId property value. The unique identifier (GUID) for the key.
         * @returns a string
         */
        get: function () {
            return this._keyId;
        },
        /**
         * Sets the keyId property value. The unique identifier (GUID) for the key.
         * @param value Value to set for the keyId property.
         */
        set: function (value) {
            this._keyId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "startDateTime", {
        /**
         * Gets the startDateTime property value. The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._startDateTime;
        },
        /**
         * Sets the startDateTime property value. The date and time at which the credential becomes valid.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the startDateTime property.
         */
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "type", {
        /**
         * Gets the type property value. The type of key credential; for example, 'Symmetric'.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. The type of key credential; for example, 'Symmetric'.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredential.prototype, "usage", {
        /**
         * Gets the usage property value. A string that describes the purpose for which the key can be used; for example, 'Verify'.
         * @returns a string
         */
        get: function () {
            return this._usage;
        },
        /**
         * Sets the usage property value. A string that describes the purpose for which the key can be used; for example, 'Verify'.
         * @param value Value to set for the usage property.
         */
        set: function (value) {
            this._usage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    KeyCredential.prototype.getFieldDeserializers = function () {
        return new Map([
            ["customKeyIdentifier", function (o, n) { o.customKeyIdentifier = n.getObjectValue(Binary); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["key", function (o, n) { o.key = n.getObjectValue(Binary); }],
            ["keyId", function (o, n) { o.keyId = n.getStringValue(); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
            ["usage", function (o, n) { o.usage = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    KeyCredential.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("customKeyIdentifier", this.customKeyIdentifier);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeObjectValue("key", this.key);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("usage", this.usage);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return KeyCredential;
}());
exports.KeyCredential = KeyCredential;
