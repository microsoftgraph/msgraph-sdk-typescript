"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintDocumentUploadProperties = void 0;
var PrintDocumentUploadProperties = /** @class */ (function () {
    /**
     * Instantiates a new printDocumentUploadProperties and sets the default values.
     */
    function PrintDocumentUploadProperties() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(PrintDocumentUploadProperties.prototype, "additionalData", {
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
    Object.defineProperty(PrintDocumentUploadProperties.prototype, "contentType", {
        /**
         * Gets the contentType property value. The document's content (MIME) type.
         * @returns a string
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The document's content (MIME) type.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintDocumentUploadProperties.prototype, "documentName", {
        /**
         * Gets the documentName property value. The document's name.
         * @returns a string
         */
        get: function () {
            return this._documentName;
        },
        /**
         * Sets the documentName property value. The document's name.
         * @param value Value to set for the documentName property.
         */
        set: function (value) {
            this._documentName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(PrintDocumentUploadProperties.prototype, "size", {
        /**
         * Gets the size property value. The document's size in bytes.
         * @returns a int64
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. The document's size in bytes.
         * @param value Value to set for the size property.
         */
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    PrintDocumentUploadProperties.prototype.getFieldDeserializers = function () {
        return new Map([
            ["contentType", function (o, n) { o.contentType = n.getStringValue(); }],
            ["documentName", function (o, n) { o.documentName = n.getStringValue(); }],
            ["size", function (o, n) { o.size = n.getObjectValue(Int64); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    PrintDocumentUploadProperties.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("contentType", this.contentType);
        writer.writeStringValue("documentName", this.documentName);
        writer.writeObjectValue("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return PrintDocumentUploadProperties;
}());
exports.PrintDocumentUploadProperties = PrintDocumentUploadProperties;
