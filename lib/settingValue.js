"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingValue = void 0;
var SettingValue = /** @class */ (function () {
    /**
     * Instantiates a new settingValue and sets the default values.
     */
    function SettingValue() {
        this._additionalData = new Map();
    }
    ;
    Object.defineProperty(SettingValue.prototype, "additionalData", {
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
    Object.defineProperty(SettingValue.prototype, "name", {
        /**
         * Gets the name property value. Name of the setting (as defined by the directorySettingTemplate).
         * @returns a string
         */
        get: function () {
            return this._name;
        },
        /**
         * Sets the name property value. Name of the setting (as defined by the directorySettingTemplate).
         * @param value Value to set for the name property.
         */
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingValue.prototype, "value", {
        /**
         * Gets the value property value. Value of the setting.
         * @returns a string
         */
        get: function () {
            return this._value;
        },
        /**
         * Sets the value property value. Value of the setting.
         * @param value Value to set for the value property.
         */
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SettingValue.prototype.getFieldDeserializers = function () {
        return new Map([
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["value", function (o, n) { o.value = n.getStringValue(); }],
        ]);
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SettingValue.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    ;
    ;
    ;
    ;
    return SettingValue;
}());
exports.SettingValue = SettingValue;
