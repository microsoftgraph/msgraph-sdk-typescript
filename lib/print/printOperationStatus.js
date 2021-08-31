"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintOperationStatus = void 0;
var PrintOperationStatus = /** @class */ (function () {
    /**
     * Instantiates a new printOperationStatus and sets the default values.
     */
    function PrintOperationStatus() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrintOperationStatus.prototype, "additionalData", {
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
    Object.defineProperty(PrintOperationStatus.prototype, "description", {
        /**
         * Gets the description property value. A human-readable description of the printOperation's current processing state. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A human-readable description of the printOperation's current processing state. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintOperationStatus.prototype, "state", {
        /**
         * Gets the state property value. The printOperation's current processing state. Valid values are described in the following table. Read-only.
         * @returns a printOperationProcessingState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The printOperation's current processing state. Valid values are described in the following table. Read-only.
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
    PrintOperationStatus.prototype.getFieldDeserializers = function () {
        return new Map([
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(PrintOperationProcessingState); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintOperationStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return PrintOperationStatus;
}());
exports.PrintOperationStatus = PrintOperationStatus;
