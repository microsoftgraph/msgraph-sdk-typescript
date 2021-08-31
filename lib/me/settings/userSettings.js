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
exports.UserSettings = void 0;
var entity_1 = require("../../entity");
var shiftPreferences_1 = require("./shiftPreferences/shiftPreferences");
var UserSettings = /** @class */ (function (_super) {
    __extends(UserSettings, _super);
    /**
     * Instantiates a new UserSettings and sets the default values.
     */
    function UserSettings() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(UserSettings.prototype, "contributionToContentDiscoveryAsOrganizationDisabled", {
        /**
         * Gets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
         * @returns a boolean
         */
        get: function () {
            return this._contributionToContentDiscoveryAsOrganizationDisabled;
        },
        /**
         * Sets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
         * @param value Value to set for the contributionToContentDiscoveryAsOrganizationDisabled property.
         */
        set: function (value) {
            this._contributionToContentDiscoveryAsOrganizationDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserSettings.prototype, "contributionToContentDiscoveryDisabled", {
        /**
         * Gets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
         * @returns a boolean
         */
        get: function () {
            return this._contributionToContentDiscoveryDisabled;
        },
        /**
         * Sets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
         * @param value Value to set for the contributionToContentDiscoveryDisabled property.
         */
        set: function (value) {
            this._contributionToContentDiscoveryDisabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserSettings.prototype, "shiftPreferences", {
        /**
         * Gets the shiftPreferences property value. The shift preferences for the user.
         * @returns a shiftPreferences
         */
        get: function () {
            return this._shiftPreferences;
        },
        /**
         * Sets the shiftPreferences property value. The shift preferences for the user.
         * @param value Value to set for the shiftPreferences property.
         */
        set: function (value) {
            this._shiftPreferences = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    UserSettings.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["contributionToContentDiscoveryAsOrganizationDisabled", function (o, n) { o.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); }],
            ["contributionToContentDiscoveryDisabled", function (o, n) { o.contributionToContentDiscoveryDisabled = n.getBooleanValue(); }],
            ["shiftPreferences", function (o, n) { o.shiftPreferences = n.getObjectValue(shiftPreferences_1.ShiftPreferences); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UserSettings.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", this.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", this.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue("shiftPreferences", this.shiftPreferences);
    };
    ;
    ;
    ;
    ;
    return UserSettings;
}(entity_1.Entity));
exports.UserSettings = UserSettings;
