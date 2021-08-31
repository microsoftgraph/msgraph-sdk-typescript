"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterStatus = void 0;
var PrinterStatus = /** @class */ (function () {
    /**
     * Instantiates a new printerStatus and sets the default values.
     */
    function PrinterStatus() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrinterStatus.prototype, "additionalData", {
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
    Object.defineProperty(PrinterStatus.prototype, "description", {
        /**
         * Gets the description property value. A human-readable description of the printer's current processing state. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A human-readable description of the printer's current processing state. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterStatus.prototype, "details", {
        /**
         * Gets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
         * @returns a printerProcessingStateDetail
         */
        get: function () {
            return this._details;
        },
        /**
         * Sets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
         * @param value Value to set for the details property.
         */
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrinterStatus.prototype, "state", {
        /**
         * Gets the state property value. The current processing state. Valid values are described in the following table. Read-only.
         * @returns a printerProcessingState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The current processing state. Valid values are described in the following table. Read-only.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrinterStatus.prototype.getFieldDeserializers = function () {
        return new Map([
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["details", function (o, n) { o.details = n.getCollectionOfPrimitiveValues(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(PrinterProcessingState); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrinterStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfPrimitiveValues("details", this.details);
        writer.writeObjectValue("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return PrinterStatus;
}());
exports.PrinterStatus = PrinterStatus;
