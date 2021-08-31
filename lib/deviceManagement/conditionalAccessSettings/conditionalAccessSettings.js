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
exports.ConditionalAccessSettings = void 0;
var entity_1 = require("../../entity");
var ConditionalAccessSettings = /** @class */ (function (_super) {
    __extends(ConditionalAccessSettings, _super);
    /**
     * Instantiates a new ConditionalAccessSettings and sets the default values.
     */
    function ConditionalAccessSettings() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ConditionalAccessSettings.prototype, "enabled", {
        /**
         * Gets the enabled property value. Indicates if on premises conditional access is enabled for this organization
         * @returns a boolean
         */
        get: function () {
            return this._enabled;
        },
        /**
         * Sets the enabled property value. Indicates if on premises conditional access is enabled for this organization
         * @param value Value to set for the enabled property.
         */
        set: function (value) {
            this._enabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessSettings.prototype, "excludedGroups", {
        /**
         * Gets the excludedGroups property value. User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy.
         * @returns a string
         */
        get: function () {
            return this._excludedGroups;
        },
        /**
         * Sets the excludedGroups property value. User groups that will be exempt by on premises conditional access. All users in these groups will be exempt from the conditional access policy.
         * @param value Value to set for the excludedGroups property.
         */
        set: function (value) {
            this._excludedGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessSettings.prototype, "includedGroups", {
        /**
         * Gets the includedGroups property value. User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access.
         * @returns a string
         */
        get: function () {
            return this._includedGroups;
        },
        /**
         * Sets the includedGroups property value. User groups that will be targeted by on premises conditional access. All users in these groups will be required to have mobile device managed and compliant for mail access.
         * @param value Value to set for the includedGroups property.
         */
        set: function (value) {
            this._includedGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConditionalAccessSettings.prototype, "overrideDefaultRule", {
        /**
         * Gets the overrideDefaultRule property value. Override the default access rule when allowing a device to ensure access is granted.
         * @returns a boolean
         */
        get: function () {
            return this._overrideDefaultRule;
        },
        /**
         * Sets the overrideDefaultRule property value. Override the default access rule when allowing a device to ensure access is granted.
         * @param value Value to set for the overrideDefaultRule property.
         */
        set: function (value) {
            this._overrideDefaultRule = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ConditionalAccessSettings.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["enabled", function (o, n) { o.enabled = n.getBooleanValue(); }],
            ["excludedGroups", function (o, n) { o.excludedGroups = n.getCollectionOfPrimitiveValues(); }],
            ["includedGroups", function (o, n) { o.includedGroups = n.getCollectionOfPrimitiveValues(); }],
            ["overrideDefaultRule", function (o, n) { o.overrideDefaultRule = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConditionalAccessSettings.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeCollectionOfPrimitiveValues("excludedGroups", this.excludedGroups);
        writer.writeCollectionOfPrimitiveValues("includedGroups", this.includedGroups);
        writer.writeBooleanValue("overrideDefaultRule", this.overrideDefaultRule);
    };
    ;
    ;
    ;
    ;
    ;
    return ConditionalAccessSettings;
}(entity_1.Entity));
exports.ConditionalAccessSettings = ConditionalAccessSettings;
