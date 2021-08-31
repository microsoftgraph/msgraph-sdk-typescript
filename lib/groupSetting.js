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
exports.GroupSetting = void 0;
var entity_1 = require("./entity");
var settingValue_1 = require("./settingValue");
var GroupSetting = /** @class */ (function (_super) {
    __extends(GroupSetting, _super);
    /**
     * Instantiates a new groupSetting and sets the default values.
     */
    function GroupSetting() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(GroupSetting.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name of this group of settings, which comes from the associated template.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name of this group of settings, which comes from the associated template.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupSetting.prototype, "templateId", {
        /**
         * Gets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
         * @returns a string
         */
        get: function () {
            return this._templateId;
        },
        /**
         * Sets the templateId property value. Unique identifier for the template used to create this group of settings. Read-only.
         * @param value Value to set for the templateId property.
         */
        set: function (value) {
            this._templateId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(GroupSetting.prototype, "values", {
        /**
         * Gets the values property value. Collection of name value pairs. Must contain and set all the settings defined in the template.
         * @returns a settingValue
         */
        get: function () {
            return this._values;
        },
        /**
         * Sets the values property value. Collection of name value pairs. Must contain and set all the settings defined in the template.
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
    GroupSetting.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["templateId", function (o, n) { o.templateId = n.getStringValue(); }],
            ["values", function (o, n) { o.values = n.getCollectionOfObjectValues(settingValue_1.SettingValue); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    GroupSetting.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("templateId", this.templateId);
        writer.writeCollectionOfObjectValues("values", this.values);
    };
    ;
    ;
    ;
    ;
    return GroupSetting;
}(entity_1.Entity));
exports.GroupSetting = GroupSetting;
