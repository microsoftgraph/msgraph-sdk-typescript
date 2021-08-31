"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintJobStatus = void 0;
var PrintJobStatus = /** @class */ (function () {
    /**
     * Instantiates a new printJobStatus and sets the default values.
     */
    function PrintJobStatus() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrintJobStatus.prototype, "additionalData", {
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
    Object.defineProperty(PrintJobStatus.prototype, "description", {
        /**
         * Gets the description property value. A human-readable description of the print job's current processing state. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A human-readable description of the print job's current processing state. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobStatus.prototype, "details", {
        /**
         * Gets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
         * @returns a printJobStateDetail
         */
        get: function () {
            return this._details;
        },
        /**
         * Sets the details property value. Additional details for print job state. Valid values are described in the following table. Read-only.
         * @param value Value to set for the details property.
         */
        set: function (value) {
            this._details = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobStatus.prototype, "isAcquiredByPrinter", {
        /**
         * Gets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
         * @returns a boolean
         */
        get: function () {
            return this._isAcquiredByPrinter;
        },
        /**
         * Sets the isAcquiredByPrinter property value. True if the job was acknowledged by a printer; false otherwise. Read-only.
         * @param value Value to set for the isAcquiredByPrinter property.
         */
        set: function (value) {
            this._isAcquiredByPrinter = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintJobStatus.prototype, "state", {
        /**
         * Gets the state property value. The print job's current processing state. Valid values are described in the following table. Read-only.
         * @returns a printJobProcessingState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The print job's current processing state. Valid values are described in the following table. Read-only.
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
    PrintJobStatus.prototype.getFieldDeserializers = function () {
        return new Map([
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["details", function (o, n) { o.details = n.getCollectionOfPrimitiveValues(); }],
            ["isAcquiredByPrinter", function (o, n) { o.isAcquiredByPrinter = n.getBooleanValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(PrintJobProcessingState); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintJobStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfPrimitiveValues("details", this.details);
        writer.writeBooleanValue("isAcquiredByPrinter", this.isAcquiredByPrinter);
        writer.writeObjectValue("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return PrintJobStatus;
}());
exports.PrintJobStatus = PrintJobStatus;
