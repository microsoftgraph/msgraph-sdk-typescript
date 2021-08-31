"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsInformationProtectionAppLearningSummariesResponse = void 0;
var windowsInformationProtectionAppLearningSummary_1 = require("../windowsInformationProtectionAppLearningSummary");
var WindowsInformationProtectionAppLearningSummariesResponse = /** @class */ (function () {
    /**
     * Instantiates a new WindowsInformationProtectionAppLearningSummariesResponse and sets the default values.
     */
    function WindowsInformationProtectionAppLearningSummariesResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(WindowsInformationProtectionAppLearningSummariesResponse.prototype, "additionalData", {
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
    Object.defineProperty(WindowsInformationProtectionAppLearningSummariesResponse.prototype, "nextLink", {
        /**
         * Gets the nextLink property value.
         * @returns a string
         */
        get: function () {
            return this._nextLink;
        },
        /**
         * Sets the nextLink property value.
         * @param value Value to set for the nextLink property.
         */
        set: function (value) {
            this._nextLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionAppLearningSummariesResponse.prototype, "value", {
        /**
         * Gets the value property value.
         * @returns a windowsInformationProtectionAppLearningSummary
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value.
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsInformationProtectionAppLearningSummariesResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["@odata.nextLink", function (o, n) { o.nextLink = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getCollectionOfObjectValues(windowsInformationProtectionAppLearningSummary_1.WindowsInformationProtectionAppLearningSummary); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsInformationProtectionAppLearningSummariesResponse.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        writer.writeCollectionOfObjectValues("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return WindowsInformationProtectionAppLearningSummariesResponse;
}());
exports.WindowsInformationProtectionAppLearningSummariesResponse = WindowsInformationProtectionAppLearningSummariesResponse;
