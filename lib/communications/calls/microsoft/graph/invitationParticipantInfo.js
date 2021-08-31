"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationParticipantInfo = void 0;
var identitySet_1 = require("../../../../identitySet");
var InvitationParticipantInfo = /** @class */ (function () {
    /**
     * Instantiates a new invitationParticipantInfo and sets the default values.
     */
    function InvitationParticipantInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(InvitationParticipantInfo.prototype, "additionalData", {
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
    Object.defineProperty(InvitationParticipantInfo.prototype, "identity", {
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
    Object.defineProperty(InvitationParticipantInfo.prototype, "replacesCallId", {
        /**
         * Gets the replacesCallId property value. Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is added.
         * @returns a string
         */
        get: function () {
            return this._replacesCallId;
        },
        /**
         * Sets the replacesCallId property value. Optional. The call which the target idenity is currently a part of. This call will be dropped once the participant is added.
         * @param value Value to set for the replacesCallId property.
         */
        set: function (value) {
            this._replacesCallId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    InvitationParticipantInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["identity", function (o, n) { o.identity = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["replacesCallId", function (o, n) { o.replacesCallId = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    InvitationParticipantInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("identity", this.identity);
        writer.writeStringValue("replacesCallId", this.replacesCallId);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return InvitationParticipantInfo;
}());
exports.InvitationParticipantInfo = InvitationParticipantInfo;
