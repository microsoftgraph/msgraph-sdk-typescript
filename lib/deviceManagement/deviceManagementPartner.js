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
exports.DeviceManagementPartner = void 0;
var entity_1 = require("../entity");
var DeviceManagementPartner = /** @class */ (function (_super) {
    __extends(DeviceManagementPartner, _super);
    /**
     * Instantiates a new deviceManagementPartner and sets the default values.
     */
    function DeviceManagementPartner() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "displayName", {
        /**
         * Gets the displayName property value. Partner display name
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Partner display name
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "isConfigured", {
        /**
         * Gets the isConfigured property value. Whether device management partner is configured or not
         * @returns a boolean
         */
        get: function () {
            return this._isConfigured;
        },
        /**
         * Sets the isConfigured property value. Whether device management partner is configured or not
         * @param value Value to set for the isConfigured property.
         */
        set: function (value) {
            this._isConfigured = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "lastHeartbeatDateTime", {
        /**
         * Gets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
         * @returns a Date
         */
        get: function () {
            return this._lastHeartbeatDateTime;
        },
        /**
         * Sets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin enabled option Connect to Device management Partner
         * @param value Value to set for the lastHeartbeatDateTime property.
         */
        set: function (value) {
            this._lastHeartbeatDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "partnerAppType", {
        /**
         * Gets the partnerAppType property value. Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp.
         * @returns a deviceManagementPartnerAppType
         */
        get: function () {
            return this._partnerAppType;
        },
        /**
         * Sets the partnerAppType property value. Partner App type. Possible values are: unknown, singleTenantApp, multiTenantApp.
         * @param value Value to set for the partnerAppType property.
         */
        set: function (value) {
            this._partnerAppType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "partnerState", {
        /**
         * Gets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
         * @returns a deviceManagementPartnerTenantState
         */
        get: function () {
            return this._partnerState;
        },
        /**
         * Sets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
         * @param value Value to set for the partnerState property.
         */
        set: function (value) {
            this._partnerState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "singleTenantAppId", {
        /**
         * Gets the singleTenantAppId property value. Partner Single tenant App id
         * @returns a string
         */
        get: function () {
            return this._singleTenantAppId;
        },
        /**
         * Sets the singleTenantAppId property value. Partner Single tenant App id
         * @param value Value to set for the singleTenantAppId property.
         */
        set: function (value) {
            this._singleTenantAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", {
        /**
         * Gets the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property value. DateTime in UTC when PartnerDevices will be marked as NonCompliant
         * @returns a Date
         */
        get: function () {
            return this._whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime;
        },
        /**
         * Sets the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property value. DateTime in UTC when PartnerDevices will be marked as NonCompliant
         * @param value Value to set for the whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime property.
         */
        set: function (value) {
            this._whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceManagementPartner.prototype, "whenPartnerDevicesWillBeRemovedDateTime", {
        /**
         * Gets the whenPartnerDevicesWillBeRemovedDateTime property value. DateTime in UTC when PartnerDevices will be removed
         * @returns a Date
         */
        get: function () {
            return this._whenPartnerDevicesWillBeRemovedDateTime;
        },
        /**
         * Sets the whenPartnerDevicesWillBeRemovedDateTime property value. DateTime in UTC when PartnerDevices will be removed
         * @param value Value to set for the whenPartnerDevicesWillBeRemovedDateTime property.
         */
        set: function (value) {
            this._whenPartnerDevicesWillBeRemovedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceManagementPartner.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isConfigured", function (o, n) { o.isConfigured = n.getBooleanValue(); }],
            ["lastHeartbeatDateTime", function (o, n) { o.lastHeartbeatDateTime = n.getDateValue(); }],
            ["partnerAppType", function (o, n) { o.partnerAppType = n.getObjectValue(DeviceManagementPartnerAppType); }],
            ["partnerState", function (o, n) { o.partnerState = n.getObjectValue(DeviceManagementPartnerTenantState); }],
            ["singleTenantAppId", function (o, n) { o.singleTenantAppId = n.getStringValue(); }],
            ["whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", function (o, n) { o.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime = n.getDateValue(); }],
            ["whenPartnerDevicesWillBeRemovedDateTime", function (o, n) { o.whenPartnerDevicesWillBeRemovedDateTime = n.getDateValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceManagementPartner.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isConfigured", this.isConfigured);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeObjectValue("partnerAppType", this.partnerAppType);
        writer.writeObjectValue("partnerState", this.partnerState);
        writer.writeStringValue("singleTenantAppId", this.singleTenantAppId);
        writer.writeDateValue("whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime", this.whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime);
        writer.writeDateValue("whenPartnerDevicesWillBeRemovedDateTime", this.whenPartnerDevicesWillBeRemovedDateTime);
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
    return DeviceManagementPartner;
}(entity_1.Entity));
exports.DeviceManagementPartner = DeviceManagementPartner;
