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
exports.SettingStateDeviceSummary = void 0;
var entity_1 = require("../entity");
var SettingStateDeviceSummary = /** @class */ (function (_super) {
    __extends(SettingStateDeviceSummary, _super);
    /**
     * Instantiates a new settingStateDeviceSummary and sets the default values.
     */
    function SettingStateDeviceSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "compliantDeviceCount", {
        /**
         * Gets the compliantDeviceCount property value. Device Compliant count for the setting
         * @returns a integer
         */
        get: function () {
            return this._compliantDeviceCount;
        },
        /**
         * Sets the compliantDeviceCount property value. Device Compliant count for the setting
         * @param value Value to set for the compliantDeviceCount property.
         */
        set: function (value) {
            this._compliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "conflictDeviceCount", {
        /**
         * Gets the conflictDeviceCount property value. Device conflict error count for the setting
         * @returns a integer
         */
        get: function () {
            return this._conflictDeviceCount;
        },
        /**
         * Sets the conflictDeviceCount property value. Device conflict error count for the setting
         * @param value Value to set for the conflictDeviceCount property.
         */
        set: function (value) {
            this._conflictDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "errorDeviceCount", {
        /**
         * Gets the errorDeviceCount property value. Device error count for the setting
         * @returns a integer
         */
        get: function () {
            return this._errorDeviceCount;
        },
        /**
         * Sets the errorDeviceCount property value. Device error count for the setting
         * @param value Value to set for the errorDeviceCount property.
         */
        set: function (value) {
            this._errorDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "instancePath", {
        /**
         * Gets the instancePath property value. Name of the InstancePath for the setting
         * @returns a string
         */
        get: function () {
            return this._instancePath;
        },
        /**
         * Sets the instancePath property value. Name of the InstancePath for the setting
         * @param value Value to set for the instancePath property.
         */
        set: function (value) {
            this._instancePath = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "nonCompliantDeviceCount", {
        /**
         * Gets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
         * @returns a integer
         */
        get: function () {
            return this._nonCompliantDeviceCount;
        },
        /**
         * Sets the nonCompliantDeviceCount property value. Device NonCompliant count for the setting
         * @param value Value to set for the nonCompliantDeviceCount property.
         */
        set: function (value) {
            this._nonCompliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "notApplicableDeviceCount", {
        /**
         * Gets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
         * @returns a integer
         */
        get: function () {
            return this._notApplicableDeviceCount;
        },
        /**
         * Sets the notApplicableDeviceCount property value. Device Not Applicable count for the setting
         * @param value Value to set for the notApplicableDeviceCount property.
         */
        set: function (value) {
            this._notApplicableDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "remediatedDeviceCount", {
        /**
         * Gets the remediatedDeviceCount property value. Device Compliant count for the setting
         * @returns a integer
         */
        get: function () {
            return this._remediatedDeviceCount;
        },
        /**
         * Sets the remediatedDeviceCount property value. Device Compliant count for the setting
         * @param value Value to set for the remediatedDeviceCount property.
         */
        set: function (value) {
            this._remediatedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "settingName", {
        /**
         * Gets the settingName property value. Name of the setting
         * @returns a string
         */
        get: function () {
            return this._settingName;
        },
        /**
         * Sets the settingName property value. Name of the setting
         * @param value Value to set for the settingName property.
         */
        set: function (value) {
            this._settingName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SettingStateDeviceSummary.prototype, "unknownDeviceCount", {
        /**
         * Gets the unknownDeviceCount property value. Device Unkown count for the setting
         * @returns a integer
         */
        get: function () {
            return this._unknownDeviceCount;
        },
        /**
         * Sets the unknownDeviceCount property value. Device Unkown count for the setting
         * @param value Value to set for the unknownDeviceCount property.
         */
        set: function (value) {
            this._unknownDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SettingStateDeviceSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["compliantDeviceCount", function (o, n) { o.compliantDeviceCount = n.getNumberValue(); }],
            ["conflictDeviceCount", function (o, n) { o.conflictDeviceCount = n.getNumberValue(); }],
            ["errorDeviceCount", function (o, n) { o.errorDeviceCount = n.getNumberValue(); }],
            ["instancePath", function (o, n) { o.instancePath = n.getStringValue(); }],
            ["nonCompliantDeviceCount", function (o, n) { o.nonCompliantDeviceCount = n.getNumberValue(); }],
            ["notApplicableDeviceCount", function (o, n) { o.notApplicableDeviceCount = n.getNumberValue(); }],
            ["remediatedDeviceCount", function (o, n) { o.remediatedDeviceCount = n.getNumberValue(); }],
            ["settingName", function (o, n) { o.settingName = n.getStringValue(); }],
            ["unknownDeviceCount", function (o, n) { o.unknownDeviceCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SettingStateDeviceSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeStringValue("instancePath", this.instancePath);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return SettingStateDeviceSummary;
}(entity_1.Entity));
exports.SettingStateDeviceSummary = SettingStateDeviceSummary;
