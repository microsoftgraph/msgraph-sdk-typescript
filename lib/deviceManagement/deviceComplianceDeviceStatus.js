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
exports.DeviceComplianceDeviceStatus = void 0;
var entity_1 = require("../entity");
var DeviceComplianceDeviceStatus = /** @class */ (function (_super) {
    __extends(DeviceComplianceDeviceStatus, _super);
    /**
     * Instantiates a new deviceComplianceDeviceStatus and sets the default values.
     */
    function DeviceComplianceDeviceStatus() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "complianceGracePeriodExpirationDateTime", {
        /**
         * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
         * @returns a Date
         */
        get: function () {
            return this._complianceGracePeriodExpirationDateTime;
        },
        /**
         * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires
         * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
         */
        set: function (value) {
            this._complianceGracePeriodExpirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "deviceDisplayName", {
        /**
         * Gets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
         * @returns a string
         */
        get: function () {
            return this._deviceDisplayName;
        },
        /**
         * Sets the deviceDisplayName property value. Device name of the DevicePolicyStatus.
         * @param value Value to set for the deviceDisplayName property.
         */
        set: function (value) {
            this._deviceDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "deviceModel", {
        /**
         * Gets the deviceModel property value. The device model that is being reported
         * @returns a string
         */
        get: function () {
            return this._deviceModel;
        },
        /**
         * Sets the deviceModel property value. The device model that is being reported
         * @param value Value to set for the deviceModel property.
         */
        set: function (value) {
            this._deviceModel = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "lastReportedDateTime", {
        /**
         * Gets the lastReportedDateTime property value. Last modified date time of the policy report.
         * @returns a Date
         */
        get: function () {
            return this._lastReportedDateTime;
        },
        /**
         * Sets the lastReportedDateTime property value. Last modified date time of the policy report.
         * @param value Value to set for the lastReportedDateTime property.
         */
        set: function (value) {
            this._lastReportedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "status", {
        /**
         * Gets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
         * @returns a complianceStatus
         */
        get: function () {
            return this._status;
        },
        /**
         * Sets the status property value. Compliance status of the policy report. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
         * @param value Value to set for the status property.
         */
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "userName", {
        /**
         * Gets the userName property value. The User Name that is being reported
         * @returns a string
         */
        get: function () {
            return this._userName;
        },
        /**
         * Sets the userName property value. The User Name that is being reported
         * @param value Value to set for the userName property.
         */
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceDeviceStatus.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. UserPrincipalName.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. UserPrincipalName.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceComplianceDeviceStatus.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["complianceGracePeriodExpirationDateTime", function (o, n) { o.complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["deviceDisplayName", function (o, n) { o.deviceDisplayName = n.getStringValue(); }],
            ["deviceModel", function (o, n) { o.deviceModel = n.getStringValue(); }],
            ["lastReportedDateTime", function (o, n) { o.lastReportedDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(ComplianceStatus); }],
            ["userName", function (o, n) { o.userName = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceComplianceDeviceStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceDisplayName", this.deviceDisplayName);
        writer.writeStringValue("deviceModel", this.deviceModel);
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("userName", this.userName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return DeviceComplianceDeviceStatus;
}(entity_1.Entity));
exports.DeviceComplianceDeviceStatus = DeviceComplianceDeviceStatus;
