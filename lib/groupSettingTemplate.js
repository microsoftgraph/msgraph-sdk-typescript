"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSettingTemplate = void 0;
var directoryObject_1 = require("./directoryObject");
var settingTemplateValue_1 = require("./settingTemplateValue");
var GroupSettingTemplate = /** @class */ (function (_super) {
    __extends(GroupSettingTemplate, _super);
    /**
     * Instantiates a new groupSettingTemplate and sets the default values.
     */
    function GroupSettingTemplate() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(GroupSettingTemplate.prototype, "description", {
        /**
         * Gets the description property value. Description of the template.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Description of the template.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupSettingTemplate.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name of the template.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name of the template.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupSettingTemplate.prototype, "values", {
        /**
         * Gets the values property value. Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.
         * @returns a settingTemplateValue
         */
        get: function () {
            return this._values;
        },
        /**
         * Sets the values property value. Collection of settingTemplateValues that list the set of available settings, defaults and types that make up this template.
         * @param value Value to set for the values property.
         */
        set: function (value) {
            this._values = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    GroupSettingTemplate.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["values", function (o, n) { o.values = n.getCollectionOfObjectValues(settingTemplateValue_1.SettingTemplateValue); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    GroupSettingTemplate.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("values", this.values);
    };
    ;
    ;
    ;
    ;
    return GroupSettingTemplate;
}(directoryObject_1.DirectoryObject));
exports.GroupSettingTemplate = GroupSettingTemplate;
