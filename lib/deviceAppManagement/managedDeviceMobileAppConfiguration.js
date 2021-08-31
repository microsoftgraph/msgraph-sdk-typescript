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
exports.ManagedDeviceMobileAppConfiguration = void 0;
var entity_1 = require("../entity");
var managedDeviceMobileAppConfigurationAssignment_1 = require("./managedDeviceMobileAppConfigurationAssignment");
var managedDeviceMobileAppConfigurationDeviceStatus_1 = require("./managedDeviceMobileAppConfigurationDeviceStatus");
var managedDeviceMobileAppConfigurationUserStatus_1 = require("./managedDeviceMobileAppConfigurationUserStatus");
var managedDeviceMobileAppConfigurationDeviceSummary_1 = require("./mobileAppConfigurations/deviceStatusSummary/managedDeviceMobileAppConfigurationDeviceSummary");
var managedDeviceMobileAppConfigurationUserSummary_1 = require("./mobileAppConfigurations/userStatusSummary/managedDeviceMobileAppConfigurationUserSummary");
var ManagedDeviceMobileAppConfiguration = /** @class */ (function (_super) {
    __extends(ManagedDeviceMobileAppConfiguration, _super);
    /**
     * Instantiates a new managedDeviceMobileAppConfiguration and sets the default values.
     */
    function ManagedDeviceMobileAppConfiguration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of group assignemenets for app configration.
         * @returns a managedDeviceMobileAppConfigurationAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of group assignemenets for app configration.
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "createdDateTime", {
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
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "description", {
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
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "deviceStatuses", {
        /**
         * Gets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
         * @returns a managedDeviceMobileAppConfigurationDeviceStatus
         */
        get: function () {
            return this._deviceStatuses;
        },
        /**
         * Sets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
         * @param value Value to set for the deviceStatuses property.
         */
        set: function (value) {
            this._deviceStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "deviceStatusSummary", {
        /**
         * Gets the deviceStatusSummary property value. App configuration device status summary.
         * @returns a managedDeviceMobileAppConfigurationDeviceSummary
         */
        get: function () {
            return this._deviceStatusSummary;
        },
        /**
         * Sets the deviceStatusSummary property value. App configuration device status summary.
         * @param value Value to set for the deviceStatusSummary property.
         */
        set: function (value) {
            this._deviceStatusSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "displayName", {
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
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "lastModifiedDateTime", {
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
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "targetedMobileApps", {
        /**
         * Gets the targetedMobileApps property value. the associated app.
         * @returns a string
         */
        get: function () {
            return this._targetedMobileApps;
        },
        /**
         * Sets the targetedMobileApps property value. the associated app.
         * @param value Value to set for the targetedMobileApps property.
         */
        set: function (value) {
            this._targetedMobileApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "userStatuses", {
        /**
         * Gets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
         * @returns a managedDeviceMobileAppConfigurationUserStatus
         */
        get: function () {
            return this._userStatuses;
        },
        /**
         * Sets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
         * @param value Value to set for the userStatuses property.
         */
        set: function (value) {
            this._userStatuses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "userStatusSummary", {
        /**
         * Gets the userStatusSummary property value. App configuration user status summary.
         * @returns a managedDeviceMobileAppConfigurationUserSummary
         */
        get: function () {
            return this._userStatusSummary;
        },
        /**
         * Sets the userStatusSummary property value. App configuration user status summary.
         * @param value Value to set for the userStatusSummary property.
         */
        set: function (value) {
            this._userStatusSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfiguration.prototype, "version", {
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
    ManagedDeviceMobileAppConfiguration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(managedDeviceMobileAppConfigurationAssignment_1.ManagedDeviceMobileAppConfigurationAssignment); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["deviceStatuses", function (o, n) { o.deviceStatuses = n.getCollectionOfObjectValues(managedDeviceMobileAppConfigurationDeviceStatus_1.ManagedDeviceMobileAppConfigurationDeviceStatus); }],
            ["deviceStatusSummary", function (o, n) { o.deviceStatusSummary = n.getObjectValue(managedDeviceMobileAppConfigurationDeviceSummary_1.ManagedDeviceMobileAppConfigurationDeviceSummary); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["targetedMobileApps", function (o, n) { o.targetedMobileApps = n.getCollectionOfPrimitiveValues(); }],
            ["userStatuses", function (o, n) { o.userStatuses = n.getCollectionOfObjectValues(managedDeviceMobileAppConfigurationUserStatus_1.ManagedDeviceMobileAppConfigurationUserStatus); }],
            ["userStatusSummary", function (o, n) { o.userStatusSummary = n.getObjectValue(managedDeviceMobileAppConfigurationUserSummary_1.ManagedDeviceMobileAppConfigurationUserSummary); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedDeviceMobileAppConfiguration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues("deviceStatuses", this.deviceStatuses);
        writer.writeObjectValue("deviceStatusSummary", this.deviceStatusSummary);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfPrimitiveValues("targetedMobileApps", this.targetedMobileApps);
        writer.writeCollectionOfObjectValues("userStatuses", this.userStatuses);
        writer.writeObjectValue("userStatusSummary", this.userStatusSummary);
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
    return ManagedDeviceMobileAppConfiguration;
}(entity_1.Entity));
exports.ManagedDeviceMobileAppConfiguration = ManagedDeviceMobileAppConfiguration;
