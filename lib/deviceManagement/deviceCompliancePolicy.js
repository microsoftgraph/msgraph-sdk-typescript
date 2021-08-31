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
exports.DeviceCompliancePolicy = void 0;
var entity_1 = require("../entity");
var deviceComplianceDeviceStatus_1 = require("./deviceComplianceDeviceStatus");
var deviceComplianceDeviceOverview_1 = require("./deviceCompliancePolicies/deviceStatusOverview/deviceComplianceDeviceOverview");
var deviceComplianceUserOverview_1 = require("./deviceCompliancePolicies/userStatusOverview/deviceComplianceUserOverview");
var deviceCompliancePolicyAssignment_1 = require("./deviceCompliancePolicyAssignment");
var deviceComplianceScheduledActionForRule_1 = require("./deviceComplianceScheduledActionForRule");
var deviceComplianceUserStatus_1 = require("./deviceComplianceUserStatus");
var settingStateDeviceSummary_1 = require("./settingStateDeviceSummary");
var DeviceCompliancePolicy = /** @class */ (function (_super) {
    __extends(DeviceCompliancePolicy, _super);
    /**
     * Instantiates a new deviceCompliancePolicy and sets the default values.
     */
    function DeviceCompliancePolicy() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "assignments", {
        /**
         * Gets the assignments property value. The collection of assignments for this compliance policy.
         * @returns a deviceCompliancePolicyAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The collection of assignments for this compliance policy.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. DateTime the object was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. DateTime the object was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "description", {
        /**
         * Gets the description property value. Admin provided description of the Device Configuration.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Admin provided description of the Device Configuration.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "deviceSettingStateSummaries", {
        /**
         * Gets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
         * @returns a settingStateDeviceSummary
         */
        get: function () {
            return this._deviceSettingStateSummaries;
        },
        /**
         * Sets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
         * @param value Value to set for the deviceSettingStateSummaries property.
         */
        set: function (value) {
            this._deviceSettingStateSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "deviceStatuses", {
        /**
         * Gets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
         * @returns a deviceComplianceDeviceStatus
         */
        get: function () {
            return this._deviceStatuses;
        },
        /**
         * Sets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
         * @param value Value to set for the deviceStatuses property.
         */
        set: function (value) {
            this._deviceStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "deviceStatusOverview", {
        /**
         * Gets the deviceStatusOverview property value. Device compliance devices status overview
         * @returns a deviceComplianceDeviceOverview
         */
        get: function () {
            return this._deviceStatusOverview;
        },
        /**
         * Sets the deviceStatusOverview property value. Device compliance devices status overview
         * @param value Value to set for the deviceStatusOverview property.
         */
        set: function (value) {
            this._deviceStatusOverview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "displayName", {
        /**
         * Gets the displayName property value. Admin provided name of the device configuration.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Admin provided name of the device configuration.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "scheduledActionsForRule", {
        /**
         * Gets the scheduledActionsForRule property value. The list of scheduled action for this rule
         * @returns a deviceComplianceScheduledActionForRule
         */
        get: function () {
            return this._scheduledActionsForRule;
        },
        /**
         * Sets the scheduledActionsForRule property value. The list of scheduled action for this rule
         * @param value Value to set for the scheduledActionsForRule property.
         */
        set: function (value) {
            this._scheduledActionsForRule = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "userStatuses", {
        /**
         * Gets the userStatuses property value. List of DeviceComplianceUserStatus.
         * @returns a deviceComplianceUserStatus
         */
        get: function () {
            return this._userStatuses;
        },
        /**
         * Sets the userStatuses property value. List of DeviceComplianceUserStatus.
         * @param value Value to set for the userStatuses property.
         */
        set: function (value) {
            this._userStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "userStatusOverview", {
        /**
         * Gets the userStatusOverview property value. Device compliance users status overview
         * @returns a deviceComplianceUserOverview
         */
        get: function () {
            return this._userStatusOverview;
        },
        /**
         * Sets the userStatusOverview property value. Device compliance users status overview
         * @param value Value to set for the userStatusOverview property.
         */
        set: function (value) {
            this._userStatusOverview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceCompliancePolicy.prototype, "version", {
        /**
         * Gets the version property value. Version of the device configuration.
         * @returns a integer
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Version of the device configuration.
         * @param value Value to set for the version property.
         */
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceCompliancePolicy.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(deviceCompliancePolicyAssignment_1.DeviceCompliancePolicyAssignment); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["deviceSettingStateSummaries", function (o, n) { o.deviceSettingStateSummaries = n.getCollectionOfObjectValues(settingStateDeviceSummary_1.SettingStateDeviceSummary); }],
            ["deviceStatuses", function (o, n) { o.deviceStatuses = n.getCollectionOfObjectValues(deviceComplianceDeviceStatus_1.DeviceComplianceDeviceStatus); }],
            ["deviceStatusOverview", function (o, n) { o.deviceStatusOverview = n.getObjectValue(deviceComplianceDeviceOverview_1.DeviceComplianceDeviceOverview); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["scheduledActionsForRule", function (o, n) { o.scheduledActionsForRule = n.getCollectionOfObjectValues(deviceComplianceScheduledActionForRule_1.DeviceComplianceScheduledActionForRule); }],
            ["userStatuses", function (o, n) { o.userStatuses = n.getCollectionOfObjectValues(deviceComplianceUserStatus_1.DeviceComplianceUserStatus); }],
            ["userStatusOverview", function (o, n) { o.userStatusOverview = n.getObjectValue(deviceComplianceUserOverview_1.DeviceComplianceUserOverview); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceCompliancePolicy.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues("deviceSettingStateSummaries", this.deviceSettingStateSummaries);
        writer.writeCollectionOfObjectValues("deviceStatuses", this.deviceStatuses);
        writer.writeObjectValue("deviceStatusOverview", this.deviceStatusOverview);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues("scheduledActionsForRule", this.scheduledActionsForRule);
        writer.writeCollectionOfObjectValues("userStatuses", this.userStatuses);
        writer.writeObjectValue("userStatusOverview", this.userStatusOverview);
        writer.writeNumberValue("version", this.version);
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
    ;
    return DeviceCompliancePolicy;
}(entity_1.Entity));
exports.DeviceCompliancePolicy = DeviceCompliancePolicy;
