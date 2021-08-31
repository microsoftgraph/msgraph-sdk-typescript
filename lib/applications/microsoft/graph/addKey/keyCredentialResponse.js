"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyCredentialResponse = void 0;
var keyCredential_1 = require("../../../../keyCredential");
var passwordCredential_1 = require("../../../../passwordCredential");
var KeyCredentialResponse = /** @class */ (function () {
    /**
     * Instantiates a new KeyCredentialResponse and sets the default values.
     */
    function KeyCredentialResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(KeyCredentialResponse.prototype, "additionalData", {
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
    Object.defineProperty(KeyCredentialResponse.prototype, "keyCredential", {
        /**
         * Gets the keyCredential property value.
         * @returns a keyCredential
         */
        get: function () {
            return this._keyCredential;
        },
        /**
         * Sets the keyCredential property value.
         * @param value Value to set for the keyCredential property.
         */
        set: function (value) {
            this._keyCredential = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredentialResponse.prototype, "passwordCredential", {
        /**
         * Gets the passwordCredential property value.
         * @returns a passwordCredential
         */
        get: function () {
            return this._passwordCredential;
        },
        /**
         * Sets the passwordCredential property value.
         * @param value Value to set for the passwordCredential property.
         */
        set: function (value) {
            this._passwordCredential = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(KeyCredentialResponse.prototype, "proof", {
        /**
         * Gets the proof property value.
         * @returns a string
         */
        get: function () {
            return this._proof;
        },
        /**
         * Sets the proof property value.
         * @param value Value to set for the proof property.
         */
        set: function (value) {
            this._proof = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    KeyCredentialResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["keyCredential", function (o, n) { o.keyCredential = n.getObjectValue(keyCredential_1.KeyCredential); }],
            ["passwordCredential", function (o, n) { o.passwordCredential = n.getObjectValue(passwordCredential_1.PasswordCredential); }],
            ["proof", function (o, n) { o.proof = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    KeyCredentialResponse.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("keyCredential", this.keyCredential);
        writer.writeObjectValue("passwordCredential", this.passwordCredential);
        writer.writeStringValue("proof", this.proof);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return KeyCredentialResponse;
}());
exports.KeyCredentialResponse = KeyCredentialResponse;
