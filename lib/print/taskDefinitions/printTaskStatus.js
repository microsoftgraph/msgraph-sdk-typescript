"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintTaskStatus = void 0;
var PrintTaskStatus = /** @class */ (function () {
    /**
     * Instantiates a new printTaskStatus and sets the default values.
     */
    function PrintTaskStatus() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrintTaskStatus.prototype, "additionalData", {
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
    Object.defineProperty(PrintTaskStatus.prototype, "description", {
        /**
         * Gets the description property value. A human-readable description of the current processing state of the printTask.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. A human-readable description of the current processing state of the printTask.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintTaskStatus.prototype, "state", {
        /**
         * Gets the state property value. The current processing state of the printTask. Valid values are described in the following table.
         * @returns a printTaskProcessingState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The current processing state of the printTask. Valid values are described in the following table.
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
    PrintTaskStatus.prototype.getFieldDeserializers = function () {
        return new Map([
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(PrintTaskProcessingState); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintTaskStatus.prototype.serialize = function (writer) {
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
    return PrintTaskStatus;
}());
exports.PrintTaskStatus = PrintTaskStatus;
