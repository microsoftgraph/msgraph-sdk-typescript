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
exports.DeviceComplianceSettingState = void 0;
var entity_1 = require("../entity");
var DeviceComplianceSettingState = /** @class */ (function (_super) {
    __extends(DeviceComplianceSettingState, _super);
    /**
     * Instantiates a new deviceComplianceSettingState and sets the default values.
     */
    function DeviceComplianceSettingState() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "complianceGracePeriodExpirationDateTime", {
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
    Object.defineProperty(DeviceComplianceSettingState.prototype, "deviceId", {
        /**
         * Gets the deviceId property value. The Device Id that is being reported
         * @returns a string
         */
        get: function () {
            return this._deviceId;
        },
        /**
         * Sets the deviceId property value. The Device Id that is being reported
         * @param value Value to set for the deviceId property.
         */
        set: function (value) {
            this._deviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "deviceModel", {
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
    Object.defineProperty(DeviceComplianceSettingState.prototype, "deviceName", {
        /**
         * Gets the deviceName property value. The Device Name that is being reported
         * @returns a string
         */
        get: function () {
            return this._deviceName;
        },
        /**
         * Sets the deviceName property value. The Device Name that is being reported
         * @param value Value to set for the deviceName property.
         */
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "setting", {
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
    Object.defineProperty(DeviceComplianceSettingState.prototype, "settingName", {
        /**
         * Gets the settingName property value. The Setting Name that is being reported
         * @returns a string
         */
        get: function () {
            return this._settingName;
        },
        /**
         * Sets the settingName property value. The Setting Name that is being reported
         * @param value Value to set for the settingName property.
         */
        set: function (value) {
            this._settingName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "state", {
        /**
         * Gets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
         * @returns a complianceStatus
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The compliance state of the setting. Possible values are: unknown, notApplicable, compliant, remediated, nonCompliant, error, conflict, notAssigned.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "userEmail", {
        /**
         * Gets the userEmail property value. The User email address that is being reported
         * @returns a string
         */
        get: function () {
            return this._userEmail;
        },
        /**
         * Sets the userEmail property value. The User email address that is being reported
         * @param value Value to set for the userEmail property.
         */
        set: function (value) {
            this._userEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "userId", {
        /**
         * Gets the userId property value. The user Id that is being reported
         * @returns a string
         */
        get: function () {
            return this._userId;
        },
        /**
         * Sets the userId property value. The user Id that is being reported
         * @param value Value to set for the userId property.
         */
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceComplianceSettingState.prototype, "userName", {
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
    Object.defineProperty(DeviceComplianceSettingState.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The User PrincipalName that is being reported
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The User PrincipalName that is being reported
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
    DeviceComplianceSettingState.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["complianceGracePeriodExpirationDateTime", function (o, n) { o.complianceGracePeriodExpirationDateTime = n.getDateValue(); }],
            ["deviceId", function (o, n) { o.deviceId = n.getStringValue(); }],
            ["deviceModel", function (o, n) { o.deviceModel = n.getStringValue(); }],
            ["deviceName", function (o, n) { o.deviceName = n.getStringValue(); }],
            ["setting", function (o, n) { o.setting = n.getStringValue(); }],
            ["settingName", function (o, n) { o.settingName = n.getStringValue(); }],
            ["state", function (o, n) { o.state = n.getObjectValue(ComplianceStatus); }],
            ["userEmail", function (o, n) { o.userEmail = n.getStringValue(); }],
            ["userId", function (o, n) { o.userId = n.getStringValue(); }],
            ["userName", function (o, n) { o.userName = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceComplianceSettingState.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("complianceGracePeriodExpirationDateTime", this.complianceGracePeriodExpirationDateTime);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceModel", this.deviceModel);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("setting", this.setting);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeObjectValue("state", this.state);
        writer.writeStringValue("userEmail", this.userEmail);
        writer.writeStringValue("userId", this.userId);
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
    ;
    ;
    ;
    ;
    return DeviceComplianceSettingState;
}(entity_1.Entity));
exports.DeviceComplianceSettingState = DeviceComplianceSettingState;
