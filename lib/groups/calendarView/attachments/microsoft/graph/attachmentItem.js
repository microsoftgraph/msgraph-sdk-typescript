"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentItem = void 0;
var AttachmentItem = /** @class */ (function () {
    /**
     * Instantiates a new attachmentItem and sets the default values.
     */
    function AttachmentItem() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(AttachmentItem.prototype, "additionalData", {
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
    Object.defineProperty(AttachmentItem.prototype, "attachmentType", {
        /**
         * Gets the attachmentType property value. The type of attachment. Possible values are: file, item, reference. Required.
         * @returns a attachmentType
         */
        get: function () {
            return this._attachmentType;
        },
        /**
         * Sets the attachmentType property value. The type of attachment. Possible values are: file, item, reference. Required.
         * @param value Value to set for the attachmentType property.
         */
        set: function (value) {
            this._attachmentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AttachmentItem.prototype, "contentType", {
        /**
         * Gets the contentType property value. The nature of the data in the attachment. Optional.
         * @returns a string
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The nature of the data in the attachment. Optional.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AttachmentItem.prototype, "isInline", {
        /**
         * Gets the isInline property value. true if the attachment is an inline attachment; otherwise, false. Optional.
         * @returns a boolean
         */
        get: function () {
            return this._isInline;
        },
        /**
         * Sets the isInline property value. true if the attachment is an inline attachment; otherwise, false. Optional.
         * @param value Value to set for the isInline property.
         */
        set: function (value) {
            this._isInline = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AttachmentItem.prototype, "name", {
        /**
         * Gets the name property value. The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. The display name of the attachment. This can be a descriptive string and does not have to be the actual file name. Required.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(AttachmentItem.prototype, "size", {
        /**
         * Gets the size property value. The length of the attachment in bytes. Required.
         * @returns a int64
         */
        get: function () {
            return this._size;
        },
        /**
         * Sets the size property value. The length of the attachment in bytes. Required.
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
    AttachmentItem.prototype.getFieldDeserializers = function () {
        return new Map([
            ["attachmentType", function (o, n) { o.attachmentType = n.getObjectValue(AttachmentType); }],
            ["contentType", function (o, n) { o.contentType = n.getStringValue(); }],
            ["isInline", function (o, n) { o.isInline = n.getBooleanValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["size", function (o, n) { o.size = n.getObjectValue(Int64); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    AttachmentItem.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("attachmentType", this.attachmentType);
        writer.writeStringValue("contentType", this.contentType);
        writer.writeBooleanValue("isInline", this.isInline);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue("size", this.size);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return AttachmentItem;
}());
exports.AttachmentItem = AttachmentItem;
