"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipient = void 0;
var Recipient = /** @class */ (function () {
    /**
     * Instantiates a new recipient and sets the default values.
     */
    function Recipient() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(Recipient.prototype, "additionalData", {
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
    Object.defineProperty(Recipient.prototype, "emailAddress", {
        /**
         * Gets the emailAddress property value. The recipient's email address.
         * @returns a emailAddress
         */
        get: function () {
            return this._emailAddress;
        },
        /**
         * Sets the emailAddress property value. The recipient's email address.
         * @param value Value to set for the emailAddress property.
         */
        set: function (value) {
            this._emailAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Recipient.prototype.getFieldDeserializers = function () {
        return new Map([
            ["emailAddress", function (o, n) { o.emailAddress = n.getObjectValue(EmailAddress); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Recipient.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("emailAddress", this.emailAddress);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return Recipient;
}());
exports.Recipient = Recipient;
