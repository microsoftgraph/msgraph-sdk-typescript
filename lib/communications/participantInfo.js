"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantInfo = void 0;
var identitySet_1 = require("../identitySet");
var ParticipantInfo = /** @class */ (function () {
    /**
     * Instantiates a new participantInfo and sets the default values.
     */
    function ParticipantInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ParticipantInfo.prototype, "additionalData", {
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
    Object.defineProperty(ParticipantInfo.prototype, "countryCode", {
        /**
         * Gets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
         * @returns a string
         */
        get: function () {
            return this._countryCode;
        },
        /**
         * Sets the countryCode property value. The ISO 3166-1 Alpha-2 country code of the participant's best estimated physical location at the start of the call. Read-only.
         * @param value Value to set for the countryCode property.
         */
        set: function (value) {
            this._countryCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParticipantInfo.prototype, "endpointType", {
        /**
         * Gets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
         * @returns a endpointType
         */
        get: function () {
            return this._endpointType;
        },
        /**
         * Sets the endpointType property value. The type of endpoint the participant is using. Possible values are: default, skypeForBusiness, or skypeForBusinessVoipPhone. Read-only.
         * @param value Value to set for the endpointType property.
         */
        set: function (value) {
            this._endpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParticipantInfo.prototype, "identity", {
        /**
         * Gets the identity property value.
         * @returns a identitySet
         */
        get: function () {
            return this._identity;
        },
        /**
         * Sets the identity property value.
         * @param value Value to set for the identity property.
         */
        set: function (value) {
            this._identity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParticipantInfo.prototype, "languageId", {
        /**
         * Gets the languageId property value. The language culture string. Read-only.
         * @returns a string
         */
        get: function () {
            return this._languageId;
        },
        /**
         * Sets the languageId property value. The language culture string. Read-only.
         * @param value Value to set for the languageId property.
         */
        set: function (value) {
            this._languageId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ParticipantInfo.prototype, "region", {
        /**
         * Gets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only.
         * @returns a string
         */
        get: function () {
            return this._region;
        },
        /**
         * Sets the region property value. The home region of the participant. This can be a country, a continent, or a larger geographic region. This does not change based on the participant's current physical location, unlike countryCode. Read-only.
         * @param value Value to set for the region property.
         */
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ParticipantInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["countryCode", function (o, n) { o.countryCode = n.getStringValue(); }],
            ["endpointType", function (o, n) { o.endpointType = n.getObjectValue(EndpointType); }],
            ["identity", function (o, n) { o.identity = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["languageId", function (o, n) { o.languageId = n.getStringValue(); }],
            ["region", function (o, n) { o.region = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ParticipantInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("countryCode", this.countryCode);
        writer.writeObjectValue("endpointType", this.endpointType);
        writer.writeObjectValue("identity", this.identity);
        writer.writeStringValue("languageId", this.languageId);
        writer.writeStringValue("region", this.region);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ParticipantInfo;
}());
exports.ParticipantInfo = ParticipantInfo;
