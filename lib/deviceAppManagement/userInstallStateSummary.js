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
exports.UserInstallStateSummary = void 0;
var entity_1 = require("../entity");
var deviceInstallState_1 = require("./deviceInstallState");
var UserInstallStateSummary = /** @class */ (function (_super) {
    __extends(UserInstallStateSummary, _super);
    /**
     * Instantiates a new userInstallStateSummary and sets the default values.
     */
    function UserInstallStateSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(UserInstallStateSummary.prototype, "deviceStates", {
        /**
         * Gets the deviceStates property value. The install state of the eBook.
         * @returns a deviceInstallState
         */
        get: function () {
            return this._deviceStates;
        },
        /**
         * Sets the deviceStates property value. The install state of the eBook.
         * @param value Value to set for the deviceStates property.
         */
        set: function (value) {
            this._deviceStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserInstallStateSummary.prototype, "failedDeviceCount", {
        /**
         * Gets the failedDeviceCount property value. Failed Device Count.
         * @returns a integer
         */
        get: function () {
            return this._failedDeviceCount;
        },
        /**
         * Sets the failedDeviceCount property value. Failed Device Count.
         * @param value Value to set for the failedDeviceCount property.
         */
        set: function (value) {
            this._failedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserInstallStateSummary.prototype, "installedDeviceCount", {
        /**
         * Gets the installedDeviceCount property value. Installed Device Count.
         * @returns a integer
         */
        get: function () {
            return this._installedDeviceCount;
        },
        /**
         * Sets the installedDeviceCount property value. Installed Device Count.
         * @param value Value to set for the installedDeviceCount property.
         */
        set: function (value) {
            this._installedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserInstallStateSummary.prototype, "notInstalledDeviceCount", {
        /**
         * Gets the notInstalledDeviceCount property value. Not installed device count.
         * @returns a integer
         */
        get: function () {
            return this._notInstalledDeviceCount;
        },
        /**
         * Sets the notInstalledDeviceCount property value. Not installed device count.
         * @param value Value to set for the notInstalledDeviceCount property.
         */
        set: function (value) {
            this._notInstalledDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(UserInstallStateSummary.prototype, "userName", {
        /**
         * Gets the userName property value. User name.
         * @returns a string
         */
        get: function () {
            return this._userName;
        },
        /**
         * Sets the userName property value. User name.
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
    UserInstallStateSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["deviceStates", function (o, n) { o.deviceStates = n.getCollectionOfObjectValues(deviceInstallState_1.DeviceInstallState); }],
            ["failedDeviceCount", function (o, n) { o.failedDeviceCount = n.getNumberValue(); }],
            ["installedDeviceCount", function (o, n) { o.installedDeviceCount = n.getNumberValue(); }],
            ["notInstalledDeviceCount", function (o, n) { o.notInstalledDeviceCount = n.getNumberValue(); }],
            ["userName", function (o, n) { o.userName = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    UserInstallStateSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("deviceStates", this.deviceStates);
        writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        writer.writeStringValue("userName", this.userName);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return UserInstallStateSummary;
}(entity_1.Entity));
exports.UserInstallStateSummary = UserInstallStateSummary;
