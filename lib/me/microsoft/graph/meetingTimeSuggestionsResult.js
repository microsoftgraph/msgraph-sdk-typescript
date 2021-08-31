"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingTimeSuggestionsResult = void 0;
var MeetingTimeSuggestionsResult = /** @class */ (function () {
    /**
     * Instantiates a new meetingTimeSuggestionsResult and sets the default values.
     */
    function MeetingTimeSuggestionsResult() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(MeetingTimeSuggestionsResult.prototype, "additionalData", {
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
    Object.defineProperty(MeetingTimeSuggestionsResult.prototype, "emptySuggestionsReason", {
        /**
         * Gets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
         * @returns a string
         */
        get: function () {
            return this._emptySuggestionsReason;
        },
        /**
         * Sets the emptySuggestionsReason property value. A reason for not returning any meeting suggestions. Possible values are: attendeesUnavailable, attendeesUnavailableOrUnknown, locationsUnavailable, organizerUnavailable, or unknown. This property is an empty string if the meetingTimeSuggestions property does include any meeting suggestions.
         * @param value Value to set for the emptySuggestionsReason property.
         */
        set: function (value) {
            this._emptySuggestionsReason = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MeetingTimeSuggestionsResult.prototype, "meetingTimeSuggestions", {
        /**
         * Gets the meetingTimeSuggestions property value. An array of meeting suggestions.
         * @returns a meetingTimeSuggestion
         */
        get: function () {
            return this._meetingTimeSuggestions;
        },
        /**
         * Sets the meetingTimeSuggestions property value. An array of meeting suggestions.
         * @param value Value to set for the meetingTimeSuggestions property.
         */
        set: function (value) {
            this._meetingTimeSuggestions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MeetingTimeSuggestionsResult.prototype.getFieldDeserializers = function () {
        return new Map([
            ["emptySuggestionsReason", function (o, n) { o.emptySuggestionsReason = n.getStringValue(); }],
            ["meetingTimeSuggestions", function (o, n) { o.meetingTimeSuggestions = n.getCollectionOfPrimitiveValues(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MeetingTimeSuggestionsResult.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("emptySuggestionsReason", this.emptySuggestionsReason);
        writer.writeCollectionOfPrimitiveValues("meetingTimeSuggestions", this.meetingTimeSuggestions);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return MeetingTimeSuggestionsResult;
}());
exports.MeetingTimeSuggestionsResult = MeetingTimeSuggestionsResult;
