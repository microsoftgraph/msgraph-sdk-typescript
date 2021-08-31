"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordCredentialResponse = void 0;
var passwordCredential_1 = require("../../../../passwordCredential");
var PasswordCredentialResponse = /** @class */ (function () {
    /**
     * Instantiates a new PasswordCredentialResponse and sets the default values.
     */
    function PasswordCredentialResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PasswordCredentialResponse.prototype, "additionalData", {
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
    Object.defineProperty(PasswordCredentialResponse.prototype, "passwordCredential", {
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
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PasswordCredentialResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["passwordCredential", function (o, n) { o.passwordCredential = n.getObjectValue(passwordCredential_1.PasswordCredential); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PasswordCredentialResponse.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("passwordCredential", this.passwordCredential);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return PasswordCredentialResponse;
}());
exports.PasswordCredentialResponse = PasswordCredentialResponse;
