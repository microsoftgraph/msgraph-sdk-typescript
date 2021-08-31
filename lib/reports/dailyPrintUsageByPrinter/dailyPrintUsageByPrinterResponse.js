"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyPrintUsageByPrinterResponse = void 0;
var printUsageByPrinter_1 = require("../printUsageByPrinter");
var DailyPrintUsageByPrinterResponse = /** @class */ (function () {
    /**
     * Instantiates a new DailyPrintUsageByPrinterResponse and sets the default values.
     */
    function DailyPrintUsageByPrinterResponse() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(DailyPrintUsageByPrinterResponse.prototype, "additionalData", {
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
    Object.defineProperty(DailyPrintUsageByPrinterResponse.prototype, "nextLink", {
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
    Object.defineProperty(DailyPrintUsageByPrinterResponse.prototype, "value", {
        /**
         * Gets the value property value.
         * @returns a printUsageByPrinter
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
    DailyPrintUsageByPrinterResponse.prototype.getFieldDeserializers = function () {
        return new Map([
            ["@odata.nextLink", function (o, n) { o.nextLink = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getCollectionOfObjectValues(printUsageByPrinter_1.PrintUsageByPrinter); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DailyPrintUsageByPrinterResponse.prototype.serialize = function (writer) {
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
    return DailyPrintUsageByPrinterResponse;
}());
exports.DailyPrintUsageByPrinterResponse = DailyPrintUsageByPrinterResponse;
