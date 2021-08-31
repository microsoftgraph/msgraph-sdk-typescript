"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBody = void 0;
var ItemBody = /** @class */ (function () {
    /**
     * Instantiates a new itemBody and sets the default values.
     */
    function ItemBody() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ItemBody.prototype, "additionalData", {
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
    Object.defineProperty(ItemBody.prototype, "content", {
        /**
         * Gets the content property value. The content of the item.
         * @returns a string
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. The content of the item.
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemBody.prototype, "contentType", {
        /**
         * Gets the contentType property value. The type of the content. Possible values are text and html.
         * @returns a bodyType
         */
        get: function () {
            return this._contentType;
        },
        /**
         * Sets the contentType property value. The type of the content. Possible values are text and html.
         * @param value Value to set for the contentType property.
         */
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ItemBody.prototype.getFieldDeserializers = function () {
        return new Map([
            ["content", function (o, n) { o.content = n.getStringValue(); }],
            ["contentType", function (o, n) { o.contentType = n.getObjectValue(BodyType); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ItemBody.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("content", this.content);
        writer.writeObjectValue("contentType", this.contentType);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return ItemBody;
}());
exports.ItemBody = ItemBody;
