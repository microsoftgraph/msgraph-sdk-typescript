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
exports.InstallSummary = void 0;
var entity_1 = require("../../../entity");
var InstallSummary = /** @class */ (function (_super) {
    __extends(InstallSummary, _super);
    /**
     * Instantiates a new InstallSummary and sets the default values.
     */
    function InstallSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(InstallSummary.prototype, "failedDeviceCount", {
        /**
         * Gets the failedDeviceCount property value. Number of Devices that have failed to install this book.
         * @returns a integer
         */
        get: function () {
            return this._failedDeviceCount;
        },
        /**
         * Sets the failedDeviceCount property value. Number of Devices that have failed to install this book.
         * @param value Value to set for the failedDeviceCount property.
         */
        set: function (value) {
            this._failedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InstallSummary.prototype, "failedUserCount", {
        /**
         * Gets the failedUserCount property value. Number of Users that have 1 or more device that failed to install this book.
         * @returns a integer
         */
        get: function () {
            return this._failedUserCount;
        },
        /**
         * Sets the failedUserCount property value. Number of Users that have 1 or more device that failed to install this book.
         * @param value Value to set for the failedUserCount property.
         */
        set: function (value) {
            this._failedUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InstallSummary.prototype, "installedDeviceCount", {
        /**
         * Gets the installedDeviceCount property value. Number of Devices that have successfully installed this book.
         * @returns a integer
         */
        get: function () {
            return this._installedDeviceCount;
        },
        /**
         * Sets the installedDeviceCount property value. Number of Devices that have successfully installed this book.
         * @param value Value to set for the installedDeviceCount property.
         */
        set: function (value) {
            this._installedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InstallSummary.prototype, "installedUserCount", {
        /**
         * Gets the installedUserCount property value. Number of Users whose devices have all succeeded to install this book.
         * @returns a integer
         */
        get: function () {
            return this._installedUserCount;
        },
        /**
         * Sets the installedUserCount property value. Number of Users whose devices have all succeeded to install this book.
         * @param value Value to set for the installedUserCount property.
         */
        set: function (value) {
            this._installedUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InstallSummary.prototype, "notInstalledDeviceCount", {
        /**
         * Gets the notInstalledDeviceCount property value. Number of Devices that does not have this book installed.
         * @returns a integer
         */
        get: function () {
            return this._notInstalledDeviceCount;
        },
        /**
         * Sets the notInstalledDeviceCount property value. Number of Devices that does not have this book installed.
         * @param value Value to set for the notInstalledDeviceCount property.
         */
        set: function (value) {
            this._notInstalledDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(InstallSummary.prototype, "notInstalledUserCount", {
        /**
         * Gets the notInstalledUserCount property value. Number of Users that did not install this book.
         * @returns a integer
         */
        get: function () {
            return this._notInstalledUserCount;
        },
        /**
         * Sets the notInstalledUserCount property value. Number of Users that did not install this book.
         * @param value Value to set for the notInstalledUserCount property.
         */
        set: function (value) {
            this._notInstalledUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    InstallSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["failedDeviceCount", function (o, n) { o.failedDeviceCount = n.getNumberValue(); }],
            ["failedUserCount", function (o, n) { o.failedUserCount = n.getNumberValue(); }],
            ["installedDeviceCount", function (o, n) { o.installedDeviceCount = n.getNumberValue(); }],
            ["installedUserCount", function (o, n) { o.installedUserCount = n.getNumberValue(); }],
            ["notInstalledDeviceCount", function (o, n) { o.notInstalledDeviceCount = n.getNumberValue(); }],
            ["notInstalledUserCount", function (o, n) { o.notInstalledUserCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    InstallSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        writer.writeNumberValue("failedUserCount", this.failedUserCount);
        writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        writer.writeNumberValue("installedUserCount", this.installedUserCount);
        writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        writer.writeNumberValue("notInstalledUserCount", this.notInstalledUserCount);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return InstallSummary;
}(entity_1.Entity));
exports.InstallSummary = InstallSummary;
