"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisualInfo = void 0;
var VisualInfo = /** @class */ (function () {
    /**
     * Instantiates a new visualInfo and sets the default values.
     */
    function VisualInfo() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(VisualInfo.prototype, "additionalData", {
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
    Object.defineProperty(VisualInfo.prototype, "attribution", {
        /**
         * Gets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
         * @returns a imageInfo
         */
        get: function () {
            return this._attribution;
        },
        /**
         * Sets the attribution property value. Optional. JSON object used to represent an icon which represents the application used to generate the activity
         * @param value Value to set for the attribution property.
         */
        set: function (value) {
            this._attribution = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VisualInfo.prototype, "backgroundColor", {
        /**
         * Gets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
         * @returns a string
         */
        get: function () {
            return this._backgroundColor;
        },
        /**
         * Sets the backgroundColor property value. Optional. Background color used to render the activity in the UI - brand color for the application source of the activity. Must be a valid hex color
         * @param value Value to set for the backgroundColor property.
         */
        set: function (value) {
            this._backgroundColor = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VisualInfo.prototype, "content", {
        /**
         * Gets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
         * @returns a Json
         */
        get: function () {
            return this._content;
        },
        /**
         * Sets the content property value. Optional. Custom piece of data - JSON object used to provide custom content to render the activity in the Windows Shell UI
         * @param value Value to set for the content property.
         */
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VisualInfo.prototype, "description", {
        /**
         * Gets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Optional. Longer text description of the user's unique activity (example: document name, first sentence, and/or metadata)
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(VisualInfo.prototype, "displayText", {
        /**
         * Gets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
         * @returns a string
         */
        get: function () {
            return this._displayText;
        },
        /**
         * Sets the displayText property value. Required. Short text description of the user's unique activity (for example, document name in cases where an activity refers to document creation)
         * @param value Value to set for the displayText property.
         */
        set: function (value) {
            this._displayText = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    VisualInfo.prototype.getFieldDeserializers = function () {
        return new Map([
            ["attribution", function (o, n) { o.attribution = n.getObjectValue(ImageInfo); }],
            ["backgroundColor", function (o, n) { o.backgroundColor = n.getStringValue(); }],
            ["content", function (o, n) { o.content = n.getObjectValue(Json); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayText", function (o, n) { o.displayText = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    VisualInfo.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("attribution", this.attribution);
        writer.writeStringValue("backgroundColor", this.backgroundColor);
        writer.writeObjectValue("content", this.content);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayText", this.displayText);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return VisualInfo;
}());
exports.VisualInfo = VisualInfo;
