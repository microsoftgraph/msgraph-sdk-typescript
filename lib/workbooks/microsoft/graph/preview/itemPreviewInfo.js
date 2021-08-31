"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPreviewInfo = void 0;
var ItemPreviewInfo = /** @class */ (function () {
    /**
     * Instantiates a new itemPreviewInfo and sets the default values.
     */
    function ItemPreviewInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(ItemPreviewInfo.prototype, "additionalData", {
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
    Object.defineProperty(ItemPreviewInfo.prototype, "getUrl", {
        /**
         * Gets the getUrl property value.
         * @returns a string
         */
        get: function () {
            return this._getUrl;
        },
        /**
         * Sets the getUrl property value.
         * @param value Value to set for the getUrl property.
         */
        set: function (value) {
            this._getUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemPreviewInfo.prototype, "postParameters", {
        /**
         * Gets the postParameters property value.
         * @returns a string
         */
        get: function () {
            return this._postParameters;
        },
        /**
         * Sets the postParameters property value.
         * @param value Value to set for the postParameters property.
         */
        set: function (value) {
            this._postParameters = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ItemPreviewInfo.prototype, "postUrl", {
        /**
         * Gets the postUrl property value.
         * @returns a string
         */
        get: function () {
            return this._postUrl;
        },
        /**
         * Sets the postUrl property value.
         * @param value Value to set for the postUrl property.
         */
        set: function (value) {
            this._postUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ItemPreviewInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["getUrl", function (o, n) { o.getUrl = n.getStringValue(); }],
            ["postParameters", function (o, n) { o.postParameters = n.getStringValue(); }],
            ["postUrl", function (o, n) { o.postUrl = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ItemPreviewInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("getUrl", this.getUrl);
        writer.writeStringValue("postParameters", this.postParameters);
        writer.writeStringValue("postUrl", this.postUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    return ItemPreviewInfo;
}());
exports.ItemPreviewInfo = ItemPreviewInfo;
