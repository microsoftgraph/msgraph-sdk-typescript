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
exports.UserFlowLanguageConfiguration = void 0;
var entity_1 = require("../entity");
var userFlowLanguagePage_1 = require("./b2xUserFlows/userFlowLanguagePage");
var UserFlowLanguageConfiguration = /** @class */ (function (_super) {
    __extends(UserFlowLanguageConfiguration, _super);
    /**
     * Instantiates a new userFlowLanguageConfiguration and sets the default values.
     */
    function UserFlowLanguageConfiguration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(UserFlowLanguageConfiguration.prototype, "defaultPages", {
        /**
         * Gets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
         * @returns a userFlowLanguagePage
         */
        get: function () {
            return this._defaultPages;
        },
        /**
         * Sets the defaultPages property value. Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
         * @param value Value to set for the defaultPages property.
         */
        set: function (value) {
            this._defaultPages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserFlowLanguageConfiguration.prototype, "displayName", {
        /**
         * Gets the displayName property value. The language name to display. This property is read-only.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The language name to display. This property is read-only.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserFlowLanguageConfiguration.prototype, "isEnabled", {
        /**
         * Gets the isEnabled property value. Indicates whether the language is enabled within the user flow.
         * @returns a boolean
         */
        get: function () {
            return this._isEnabled;
        },
        /**
         * Sets the isEnabled property value. Indicates whether the language is enabled within the user flow.
         * @param value Value to set for the isEnabled property.
         */
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserFlowLanguageConfiguration.prototype, "overridesPages", {
        /**
         * Gets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
         * @returns a userFlowLanguagePage
         */
        get: function () {
            return this._overridesPages;
        },
        /**
         * Sets the overridesPages property value. Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
         * @param value Value to set for the overridesPages property.
         */
        set: function (value) {
            this._overridesPages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    UserFlowLanguageConfiguration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["defaultPages", function (o, n) { o.defaultPages = n.getCollectionOfObjectValues(userFlowLanguagePage_1.UserFlowLanguagePage); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isEnabled", function (o, n) { o.isEnabled = n.getBooleanValue(); }],
            ["overridesPages", function (o, n) { o.overridesPages = n.getCollectionOfObjectValues(userFlowLanguagePage_1.UserFlowLanguagePage); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UserFlowLanguageConfiguration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("defaultPages", this.defaultPages);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeCollectionOfObjectValues("overridesPages", this.overridesPages);
    };
    ;
    ;
    ;
    ;
    ;
    return UserFlowLanguageConfiguration;
}(entity_1.Entity));
exports.UserFlowLanguageConfiguration = UserFlowLanguageConfiguration;
