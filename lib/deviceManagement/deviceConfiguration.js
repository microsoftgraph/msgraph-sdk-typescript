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
exports.DeviceConfiguration = void 0;
var entity_1 = require("../entity");
var deviceConfigurationAssignment_1 = require("./deviceConfigurationAssignment");
var deviceConfigurationDeviceStatus_1 = require("./deviceConfigurationDeviceStatus");
var deviceConfigurationDeviceOverview_1 = require("./deviceConfigurations/deviceStatusOverview/deviceConfigurationDeviceOverview");
var deviceConfigurationUserOverview_1 = require("./deviceConfigurations/userStatusOverview/deviceConfigurationUserOverview");
var deviceConfigurationUserStatus_1 = require("./deviceConfigurationUserStatus");
var settingStateDeviceSummary_1 = require("./settingStateDeviceSummary");
var DeviceConfiguration = /** @class */ (function (_super) {
    __extends(DeviceConfiguration, _super);
    /**
     * Instantiates a new deviceConfiguration and sets the default values.
     */
    function DeviceConfiguration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of assignments for the device configuration profile.
         * @returns a deviceConfigurationAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of assignments for the device configuration profile.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "createdDateTime", {
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
    Object.defineProperty(DeviceConfiguration.prototype, "description", {
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
    Object.defineProperty(DeviceConfiguration.prototype, "deviceSettingStateSummaries", {
        /**
         * Gets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
         * @returns a settingStateDeviceSummary
         */
        get: function () {
            return this._deviceSettingStateSummaries;
        },
        /**
         * Sets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
         * @param value Value to set for the deviceSettingStateSummaries property.
         */
        set: function (value) {
            this._deviceSettingStateSummaries = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "deviceStatuses", {
        /**
         * Gets the deviceStatuses property value. Device configuration installation status by device.
         * @returns a deviceConfigurationDeviceStatus
         */
        get: function () {
            return this._deviceStatuses;
        },
        /**
         * Sets the deviceStatuses property value. Device configuration installation status by device.
         * @param value Value to set for the deviceStatuses property.
         */
        set: function (value) {
            this._deviceStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "deviceStatusOverview", {
        /**
         * Gets the deviceStatusOverview property value. Device Configuration devices status overview
         * @returns a deviceConfigurationDeviceOverview
         */
        get: function () {
            return this._deviceStatusOverview;
        },
        /**
         * Sets the deviceStatusOverview property value. Device Configuration devices status overview
         * @param value Value to set for the deviceStatusOverview property.
         */
        set: function (value) {
            this._deviceStatusOverview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "displayName", {
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
    Object.defineProperty(DeviceConfiguration.prototype, "lastModifiedDateTime", {
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
    Object.defineProperty(DeviceConfiguration.prototype, "userStatuses", {
        /**
         * Gets the userStatuses property value. Device configuration installation status by user.
         * @returns a deviceConfigurationUserStatus
         */
        get: function () {
            return this._userStatuses;
        },
        /**
         * Sets the userStatuses property value. Device configuration installation status by user.
         * @param value Value to set for the userStatuses property.
         */
        set: function (value) {
            this._userStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "userStatusOverview", {
        /**
         * Gets the userStatusOverview property value. Device Configuration users status overview
         * @returns a deviceConfigurationUserOverview
         */
        get: function () {
            return this._userStatusOverview;
        },
        /**
         * Sets the userStatusOverview property value. Device Configuration users status overview
         * @param value Value to set for the userStatusOverview property.
         */
        set: function (value) {
            this._userStatusOverview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceConfiguration.prototype, "version", {
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
    DeviceConfiguration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(deviceConfigurationAssignment_1.DeviceConfigurationAssignment); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["deviceSettingStateSummaries", function (o, n) { o.deviceSettingStateSummaries = n.getCollectionOfObjectValues(settingStateDeviceSummary_1.SettingStateDeviceSummary); }],
            ["deviceStatuses", function (o, n) { o.deviceStatuses = n.getCollectionOfObjectValues(deviceConfigurationDeviceStatus_1.DeviceConfigurationDeviceStatus); }],
            ["deviceStatusOverview", function (o, n) { o.deviceStatusOverview = n.getObjectValue(deviceConfigurationDeviceOverview_1.DeviceConfigurationDeviceOverview); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["userStatuses", function (o, n) { o.userStatuses = n.getCollectionOfObjectValues(deviceConfigurationUserStatus_1.DeviceConfigurationUserStatus); }],
            ["userStatusOverview", function (o, n) { o.userStatusOverview = n.getObjectValue(deviceConfigurationUserOverview_1.DeviceConfigurationUserOverview); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceConfiguration.prototype.serialize = function (writer) {
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
    return DeviceConfiguration;
}(entity_1.Entity));
exports.DeviceConfiguration = DeviceConfiguration;
