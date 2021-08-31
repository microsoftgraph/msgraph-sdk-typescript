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
exports.DetectedApp = void 0;
var entity_1 = require("../entity");
var managedDevice_1 = require("../managedDevice");
var DetectedApp = /** @class */ (function (_super) {
    __extends(DetectedApp, _super);
    /**
     * Instantiates a new detectedApp and sets the default values.
     */
    function DetectedApp() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DetectedApp.prototype, "deviceCount", {
        /**
         * Gets the deviceCount property value. The number of devices that have installed this application
         * @returns a integer
         */
        get: function () {
            return this._deviceCount;
        },
        /**
         * Sets the deviceCount property value. The number of devices that have installed this application
         * @param value Value to set for the deviceCount property.
         */
        set: function (value) {
            this._deviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetectedApp.prototype, "displayName", {
        /**
         * Gets the displayName property value. Name of the discovered application. Read-only
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Name of the discovered application. Read-only
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetectedApp.prototype, "managedDevices", {
        /**
         * Gets the managedDevices property value. The devices that have the discovered application installed
         * @returns a managedDevice
         */
        get: function () {
            return this._managedDevices;
        },
        /**
         * Sets the managedDevices property value. The devices that have the discovered application installed
         * @param value Value to set for the managedDevices property.
         */
        set: function (value) {
            this._managedDevices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetectedApp.prototype, "sizeInByte", {
        /**
         * Gets the sizeInByte property value. Discovered application size in bytes. Read-only
         * @returns a int64
         */
        get: function () {
            return this._sizeInByte;
        },
        /**
         * Sets the sizeInByte property value. Discovered application size in bytes. Read-only
         * @param value Value to set for the sizeInByte property.
         */
        set: function (value) {
            this._sizeInByte = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DetectedApp.prototype, "version", {
        /**
         * Gets the version property value. Version of the discovered application. Read-only
         * @returns a string
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. Version of the discovered application. Read-only
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
    DetectedApp.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["deviceCount", function (o, n) { o.deviceCount = n.getNumberValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["managedDevices", function (o, n) { o.managedDevices = n.getCollectionOfObjectValues(managedDevice_1.ManagedDevice); }],
            ["sizeInByte", function (o, n) { o.sizeInByte = n.getObjectValue(Int64); }],
            ["version", function (o, n) { o.version = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DetectedApp.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("deviceCount", this.deviceCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("managedDevices", this.managedDevices);
        writer.writeObjectValue("sizeInByte", this.sizeInByte);
        writer.writeStringValue("version", this.version);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return DetectedApp;
}(entity_1.Entity));
exports.DetectedApp = DetectedApp;
