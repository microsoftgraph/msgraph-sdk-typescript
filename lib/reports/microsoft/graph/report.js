"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
var Report = /** @class */ (function () {
    /**
     * Instantiates a new report and sets the default values.
     */
    function Report() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(Report.prototype, "additionalData", {
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
    Object.defineProperty(Report.prototype, "content", {
        /**
         * Gets the content property value. Report content; details vary by report type.
         * @returns a binary
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. Report content; details vary by report type.
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Report.prototype.getFieldDeserializers = function () {
        return new Map([
            ["content", function (o, n) { o.content = n.getObjectValue(Binary); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Report.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("content", this.content);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    return Report;
}());
exports.Report = Report;
