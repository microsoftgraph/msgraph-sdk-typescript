"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkbookSessionInfo = void 0;
var WorkbookSessionInfo = /** @class */ (function () {
    /**
     * Instantiates a new workbookSessionInfo and sets the default values.
     */
    function WorkbookSessionInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(WorkbookSessionInfo.prototype, "additionalData", {
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
    Object.defineProperty(WorkbookSessionInfo.prototype, "id", {
        /**
         * Gets the id property value. Id of the workbook session.
         * @returns a string
         */
        get: function () {
            return this._id;
        },
        /**
         * Sets the id property value. Id of the workbook session.
         * @param value Value to set for the id property.
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WorkbookSessionInfo.prototype, "persistChanges", {
        /**
         * Gets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
         * @returns a boolean
         */
        get: function () {
            return this._persistChanges;
        },
        /**
         * Sets the persistChanges property value. true for persistent session. false for non-persistent session (view mode)
         * @param value Value to set for the persistChanges property.
         */
        set: function (value) {
            this._persistChanges = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WorkbookSessionInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["id", function (o, n) { o.id = n.getStringValue(); }],
            ["persistChanges", function (o, n) { o.persistChanges = n.getBooleanValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WorkbookSessionInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("persistChanges", this.persistChanges);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return WorkbookSessionInfo;
}());
exports.WorkbookSessionInfo = WorkbookSessionInfo;
