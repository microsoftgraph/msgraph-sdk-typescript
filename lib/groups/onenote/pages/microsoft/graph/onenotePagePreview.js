"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnenotePagePreview = void 0;
var OnenotePagePreview = /** @class */ (function () {
    /**
     * Instantiates a new onenotePagePreview and sets the default values.
     */
    function OnenotePagePreview() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(OnenotePagePreview.prototype, "additionalData", {
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
    Object.defineProperty(OnenotePagePreview.prototype, "links", {
        /**
         * Gets the links property value.
         * @returns a onenotePagePreviewLinks
         */
        get: function () {
            return this._links;
        },
        /**
         * Sets the links property value.
         * @param value Value to set for the links property.
         */
        set: function (value) {
            this._links = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OnenotePagePreview.prototype, "previewText", {
        /**
         * Gets the previewText property value.
         * @returns a string
         */
        get: function () {
            return this._previewText;
        },
        /**
         * Sets the previewText property value.
         * @param value Value to set for the previewText property.
         */
        set: function (value) {
            this._previewText = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OnenotePagePreview.prototype.getFieldDeserializers = function () {
        return new Map([
            ["links", function (o, n) { o.links = n.getObjectValue(OnenotePagePreviewLinks); }],
            ["previewText", function (o, n) { o.previewText = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OnenotePagePreview.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("links", this.links);
        writer.writeStringValue("previewText", this.previewText);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return OnenotePagePreview;
}());
exports.OnenotePagePreview = OnenotePagePreview;
