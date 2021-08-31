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
exports.DeviceInstallState = void 0;
var entity_1 = require("../entity");
var DeviceInstallState = /** @class */ (function (_super) {
    __extends(DeviceInstallState, _super);
    /**
     * Instantiates a new deviceInstallState and sets the default values.
     */
    function DeviceInstallState() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceInstallState.prototype, "deviceId", {
        /**
         * Gets the deviceId property value. Device Id.
         * @returns a string
         */
        get: function () {
            return this._deviceId;
        },
        /**
         * Sets the deviceId property value. Device Id.
         * @param value Value to set for the deviceId property.
         */
        set: function (value) {
            this._deviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "deviceName", {
        /**
         * Gets the deviceName property value. Device name.
         * @returns a string
         */
        get: function () {
            return this._deviceName;
        },
        /**
         * Sets the deviceName property value. Device name.
         * @param value Value to set for the deviceName property.
         */
        set: function (value) {
            this._deviceName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "errorCode", {
        /**
         * Gets the errorCode property value. The error code for install failures.
         * @returns a string
         */
        get: function () {
            return this._errorCode;
        },
        /**
         * Sets the errorCode property value. The error code for install failures.
         * @param value Value to set for the errorCode property.
         */
        set: function (value) {
            this._errorCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "installState", {
        /**
         * Gets the installState property value. The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown.
         * @returns a installState
         */
        get: function () {
            return this._installState;
        },
        /**
         * Sets the installState property value. The install state of the eBook. Possible values are: notApplicable, installed, failed, notInstalled, uninstallFailed, unknown.
         * @param value Value to set for the installState property.
         */
        set: function (value) {
            this._installState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "lastSyncDateTime", {
        /**
         * Gets the lastSyncDateTime property value. Last sync date and time.
         * @returns a Date
         */
        get: function () {
            return this._lastSyncDateTime;
        },
        /**
         * Sets the lastSyncDateTime property value. Last sync date and time.
         * @param value Value to set for the lastSyncDateTime property.
         */
        set: function (value) {
            this._lastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "osDescription", {
        /**
         * Gets the osDescription property value. OS Description.
         * @returns a string
         */
        get: function () {
            return this._osDescription;
        },
        /**
         * Sets the osDescription property value. OS Description.
         * @param value Value to set for the osDescription property.
         */
        set: function (value) {
            this._osDescription = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "osVersion", {
        /**
         * Gets the osVersion property value. OS Version.
         * @returns a string
         */
        get: function () {
            return this._osVersion;
        },
        /**
         * Sets the osVersion property value. OS Version.
         * @param value Value to set for the osVersion property.
         */
        set: function (value) {
            this._osVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceInstallState.prototype, "userName", {
        /**
         * Gets the userName property value. Device User Name.
         * @returns a string
         */
        get: function () {
            return this._userName;
        },
        /**
         * Sets the userName property value. Device User Name.
         * @param value Value to set for the userName property.
         */
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    DeviceInstallState.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["deviceId", function (o, n) { o.deviceId = n.getStringValue(); }],
            ["deviceName", function (o, n) { o.deviceName = n.getStringValue(); }],
            ["errorCode", function (o, n) { o.errorCode = n.getStringValue(); }],
            ["installState", function (o, n) { o.installState = n.getObjectValue(InstallState); }],
            ["lastSyncDateTime", function (o, n) { o.lastSyncDateTime = n.getDateValue(); }],
            ["osDescription", function (o, n) { o.osDescription = n.getStringValue(); }],
            ["osVersion", function (o, n) { o.osVersion = n.getStringValue(); }],
            ["userName", function (o, n) { o.userName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceInstallState.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeObjectValue("installState", this.installState);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("osDescription", this.osDescription);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeStringValue("userName", this.userName);
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
    return DeviceInstallState;
}(entity_1.Entity));
exports.DeviceInstallState = DeviceInstallState;
