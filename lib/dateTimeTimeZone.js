"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeTimeZone = void 0;
var DateTimeTimeZone = /** @class */ (function () {
    /**
     * Instantiates a new dateTimeTimeZone and sets the default values.
     */
    function DateTimeTimeZone() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(DateTimeTimeZone.prototype, "additionalData", {
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
    Object.defineProperty(DateTimeTimeZone.prototype, "dateTime", {
        /**
         * Gets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}). For example, '2019-04-16T09:00:00'.
         * @returns a string
         */
        get: function () {
            return this._dateTime;
        },
        /**
         * Sets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}). For example, '2019-04-16T09:00:00'.
         * @param value Value to set for the dateTime property.
         */
        set: function (value) {
            this._dateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DateTimeTimeZone.prototype, "timeZone", {
        /**
         * Gets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for possible values.
         * @returns a string
         */
        get: function () {
            return this._timeZone;
        },
        /**
         * Sets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for possible values.
         * @param value Value to set for the timeZone property.
         */
        set: function (value) {
            this._timeZone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DateTimeTimeZone.prototype.getFieldDeserializers = function () {
        return new Map([
            ["dateTime", function (o, n) { o.dateTime = n.getStringValue(); }],
            ["timeZone", function (o, n) { o.timeZone = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DateTimeTimeZone.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("dateTime", this.dateTime);
        writer.writeStringValue("timeZone", this.timeZone);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return DateTimeTimeZone;
}());
exports.DateTimeTimeZone = DateTimeTimeZone;
