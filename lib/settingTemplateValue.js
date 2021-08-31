"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingTemplateValue = void 0;
var SettingTemplateValue = /** @class */ (function () {
    /**
     * Instantiates a new settingTemplateValue and sets the default values.
     */
    function SettingTemplateValue() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(SettingTemplateValue.prototype, "additionalData", {
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
    Object.defineProperty(SettingTemplateValue.prototype, "defaultValue", {
        /**
         * Gets the defaultValue property value. Default value for the setting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._defaultValue;
        },
        /**
         * Sets the defaultValue property value. Default value for the setting. Read-only.
         * @param value Value to set for the defaultValue property.
         */
        set: function (value) {
            this._defaultValue = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingTemplateValue.prototype, "description", {
        /**
         * Gets the description property value. Description of the setting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the setting. Read-only.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingTemplateValue.prototype, "name", {
        /**
         * Gets the name property value. Name of the setting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Name of the setting. Read-only.
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingTemplateValue.prototype, "type", {
        /**
         * Gets the type property value. Type of the setting. Read-only.
         * @returns a string
         */
        get: function () {
            return this._type;
        },
        /**
         * Sets the type property value. Type of the setting. Read-only.
         * @param value Value to set for the type property.
         */
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SettingTemplateValue.prototype.getFieldDeserializers = function () {
        return new Map([
            ["defaultValue", function (o, n) { o.defaultValue = n.getStringValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SettingTemplateValue.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("defaultValue", this.defaultValue);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return SettingTemplateValue;
}());
exports.SettingTemplateValue = SettingTemplateValue;
