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
exports.DeviceComplianceUserStatus = void 0;
var entity_1 = require("../entity");
var DeviceComplianceUserStatus = /** @class */ (function (_super) {
    __extends(DeviceComplianceUserStatus, _super);
    /**
     * Instantiates a new deviceComplianceUserStatus and sets the default values.
     */
    function DeviceComplianceUserStatus() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceComplianceUserStatus.prototype, "devicesCount", {
        /**
         * Gets the devicesCount property value. Devices count for that user.
         * @returns a integer
         */
        get: function () {
            return this._devicesCount;
        },
        /**
         * Sets the devicesCount property value. Devices count for that user.
         * @param value Value to set for the devicesCount property.
         */
        set: function (value) {
            this._devicesCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceUserStatus.prototype, "lastReportedDateTime", {
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
    Object.defineProperty(DeviceComplianceUserStatus.prototype, "status", {
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
    Object.defineProperty(DeviceComplianceUserStatus.prototype, "userDisplayName", {
        /**
         * Gets the userDisplayName property value. User name of the DevicePolicyStatus.
         * @returns a string
         */
        get: function () {
            return this._userDisplayName;
        },
        /**
         * Sets the userDisplayName property value. User name of the DevicePolicyStatus.
         * @param value Value to set for the userDisplayName property.
         */
        set: function (value) {
            this._userDisplayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceUserStatus.prototype, "userPrincipalName", {
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
    DeviceComplianceUserStatus.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["devicesCount", function (o, n) { o.devicesCount = n.getNumberValue(); }],
            ["lastReportedDateTime", function (o, n) { o.lastReportedDateTime = n.getDateValue(); }],
            ["status", function (o, n) { o.status = n.getObjectValue(ComplianceStatus); }],
            ["userDisplayName", function (o, n) { o.userDisplayName = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceComplianceUserStatus.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("devicesCount", this.devicesCount);
        writer.writeDateValue("lastReportedDateTime", this.lastReportedDateTime);
        writer.writeObjectValue("status", this.status);
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return DeviceComplianceUserStatus;
}(entity_1.Entity));
exports.DeviceComplianceUserStatus = DeviceComplianceUserStatus;
