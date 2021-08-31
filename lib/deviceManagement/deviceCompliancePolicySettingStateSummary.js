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
exports.DeviceCompliancePolicySettingStateSummary = void 0;
var entity_1 = require("../entity");
var deviceComplianceSettingState_1 = require("./deviceComplianceSettingState");
var DeviceCompliancePolicySettingStateSummary = /** @class */ (function (_super) {
    __extends(DeviceCompliancePolicySettingStateSummary, _super);
    /**
     * Instantiates a new deviceCompliancePolicySettingStateSummary and sets the default values.
     */
    function DeviceCompliancePolicySettingStateSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "compliantDeviceCount", {
        /**
         * Gets the compliantDeviceCount property value. Number of compliant devices
         * @returns a integer
         */
        get: function () {
            return this._compliantDeviceCount;
        },
        /**
         * Sets the compliantDeviceCount property value. Number of compliant devices
         * @param value Value to set for the compliantDeviceCount property.
         */
        set: function (value) {
            this._compliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "conflictDeviceCount", {
        /**
         * Gets the conflictDeviceCount property value. Number of conflict devices
         * @returns a integer
         */
        get: function () {
            return this._conflictDeviceCount;
        },
        /**
         * Sets the conflictDeviceCount property value. Number of conflict devices
         * @param value Value to set for the conflictDeviceCount property.
         */
        set: function (value) {
            this._conflictDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "deviceComplianceSettingStates", {
        /**
         * Gets the deviceComplianceSettingStates property value. Not yet documented
         * @returns a deviceComplianceSettingState
         */
        get: function () {
            return this._deviceComplianceSettingStates;
        },
        /**
         * Sets the deviceComplianceSettingStates property value. Not yet documented
         * @param value Value to set for the deviceComplianceSettingStates property.
         */
        set: function (value) {
            this._deviceComplianceSettingStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "errorDeviceCount", {
        /**
         * Gets the errorDeviceCount property value. Number of error devices
         * @returns a integer
         */
        get: function () {
            return this._errorDeviceCount;
        },
        /**
         * Sets the errorDeviceCount property value. Number of error devices
         * @param value Value to set for the errorDeviceCount property.
         */
        set: function (value) {
            this._errorDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "nonCompliantDeviceCount", {
        /**
         * Gets the nonCompliantDeviceCount property value. Number of NonCompliant devices
         * @returns a integer
         */
        get: function () {
            return this._nonCompliantDeviceCount;
        },
        /**
         * Sets the nonCompliantDeviceCount property value. Number of NonCompliant devices
         * @param value Value to set for the nonCompliantDeviceCount property.
         */
        set: function (value) {
            this._nonCompliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "notApplicableDeviceCount", {
        /**
         * Gets the notApplicableDeviceCount property value. Number of not applicable devices
         * @returns a integer
         */
        get: function () {
            return this._notApplicableDeviceCount;
        },
        /**
         * Sets the notApplicableDeviceCount property value. Number of not applicable devices
         * @param value Value to set for the notApplicableDeviceCount property.
         */
        set: function (value) {
            this._notApplicableDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "platformType", {
        /**
         * Gets the platformType property value. Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all.
         * @returns a policyPlatformType
         */
        get: function () {
            return this._platformType;
        },
        /**
         * Sets the platformType property value. Setting platform. Possible values are: android, androidForWork, iOS, macOS, windowsPhone81, windows81AndLater, windows10AndLater, androidWorkProfile, windows10XProfile, androidAOSP, all.
         * @param value Value to set for the platformType property.
         */
        set: function (value) {
            this._platformType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "remediatedDeviceCount", {
        /**
         * Gets the remediatedDeviceCount property value. Number of remediated devices
         * @returns a integer
         */
        get: function () {
            return this._remediatedDeviceCount;
        },
        /**
         * Sets the remediatedDeviceCount property value. Number of remediated devices
         * @param value Value to set for the remediatedDeviceCount property.
         */
        set: function (value) {
            this._remediatedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "setting", {
        /**
         * Gets the setting property value. The setting class name and property name.
         * @returns a string
         */
        get: function () {
            return this._setting;
        },
        /**
         * Sets the setting property value. The setting class name and property name.
         * @param value Value to set for the setting property.
         */
        set: function (value) {
            this._setting = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "settingName", {
        /**
         * Gets the settingName property value. Name of the setting.
         * @returns a string
         */
        get: function () {
            return this._settingName;
        },
        /**
         * Sets the settingName property value. Name of the setting.
         * @param value Value to set for the settingName property.
         */
        set: function (value) {
            this._settingName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicySettingStateSummary.prototype, "unknownDeviceCount", {
        /**
         * Gets the unknownDeviceCount property value. Number of unknown devices
         * @returns a integer
         */
        get: function () {
            return this._unknownDeviceCount;
        },
        /**
         * Sets the unknownDeviceCount property value. Number of unknown devices
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
    DeviceCompliancePolicySettingStateSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["compliantDeviceCount", function (o, n) { o.compliantDeviceCount = n.getNumberValue(); }],
            ["conflictDeviceCount", function (o, n) { o.conflictDeviceCount = n.getNumberValue(); }],
            ["deviceComplianceSettingStates", function (o, n) { o.deviceComplianceSettingStates = n.getCollectionOfObjectValues(deviceComplianceSettingState_1.DeviceComplianceSettingState); }],
            ["errorDeviceCount", function (o, n) { o.errorDeviceCount = n.getNumberValue(); }],
            ["nonCompliantDeviceCount", function (o, n) { o.nonCompliantDeviceCount = n.getNumberValue(); }],
            ["notApplicableDeviceCount", function (o, n) { o.notApplicableDeviceCount = n.getNumberValue(); }],
            ["platformType", function (o, n) { o.platformType = n.getObjectValue(PolicyPlatformType); }],
            ["remediatedDeviceCount", function (o, n) { o.remediatedDeviceCount = n.getNumberValue(); }],
            ["setting", function (o, n) { o.setting = n.getStringValue(); }],
            ["settingName", function (o, n) { o.settingName = n.getStringValue(); }],
            ["unknownDeviceCount", function (o, n) { o.unknownDeviceCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceCompliancePolicySettingStateSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeCollectionOfObjectValues("deviceComplianceSettingStates", this.deviceComplianceSettingStates);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeObjectValue("platformType", this.platformType);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeStringValue("setting", this.setting);
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
    ;
    ;
    return DeviceCompliancePolicySettingStateSummary;
}(entity_1.Entity));
exports.DeviceCompliancePolicySettingStateSummary = DeviceCompliancePolicySettingStateSummary;
