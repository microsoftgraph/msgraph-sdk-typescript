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
exports.ManagedDeviceOverview = void 0;
var entity_1 = require("../../entity");
var ManagedDeviceOverview = /** @class */ (function (_super) {
    __extends(ManagedDeviceOverview, _super);
    /**
     * Instantiates a new ManagedDeviceOverview and sets the default values.
     */
    function ManagedDeviceOverview() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedDeviceOverview.prototype, "deviceExchangeAccessStateSummary", {
        /**
         * Gets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
         * @returns a deviceExchangeAccessStateSummary
         */
        get: function () {
            return this._deviceExchangeAccessStateSummary;
        },
        /**
         * Sets the deviceExchangeAccessStateSummary property value. Distribution of Exchange Access State in Intune
         * @param value Value to set for the deviceExchangeAccessStateSummary property.
         */
        set: function (value) {
            this._deviceExchangeAccessStateSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceOverview.prototype, "deviceOperatingSystemSummary", {
        /**
         * Gets the deviceOperatingSystemSummary property value. Device operating system summary.
         * @returns a deviceOperatingSystemSummary
         */
        get: function () {
            return this._deviceOperatingSystemSummary;
        },
        /**
         * Sets the deviceOperatingSystemSummary property value. Device operating system summary.
         * @param value Value to set for the deviceOperatingSystemSummary property.
         */
        set: function (value) {
            this._deviceOperatingSystemSummary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceOverview.prototype, "dualEnrolledDeviceCount", {
        /**
         * Gets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
         * @returns a integer
         */
        get: function () {
            return this._dualEnrolledDeviceCount;
        },
        /**
         * Sets the dualEnrolledDeviceCount property value. The number of devices enrolled in both MDM and EAS
         * @param value Value to set for the dualEnrolledDeviceCount property.
         */
        set: function (value) {
            this._dualEnrolledDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceOverview.prototype, "enrolledDeviceCount", {
        /**
         * Gets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
         * @returns a integer
         */
        get: function () {
            return this._enrolledDeviceCount;
        },
        /**
         * Sets the enrolledDeviceCount property value. Total enrolled device count. Does not include PC devices managed via Intune PC Agent
         * @param value Value to set for the enrolledDeviceCount property.
         */
        set: function (value) {
            this._enrolledDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceOverview.prototype, "mdmEnrolledCount", {
        /**
         * Gets the mdmEnrolledCount property value. The number of devices enrolled in MDM
         * @returns a integer
         */
        get: function () {
            return this._mdmEnrolledCount;
        },
        /**
         * Sets the mdmEnrolledCount property value. The number of devices enrolled in MDM
         * @param value Value to set for the mdmEnrolledCount property.
         */
        set: function (value) {
            this._mdmEnrolledCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedDeviceOverview.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["deviceExchangeAccessStateSummary", function (o, n) { o.deviceExchangeAccessStateSummary = n.getObjectValue(DeviceExchangeAccessStateSummary); }],
            ["deviceOperatingSystemSummary", function (o, n) { o.deviceOperatingSystemSummary = n.getObjectValue(DeviceOperatingSystemSummary); }],
            ["dualEnrolledDeviceCount", function (o, n) { o.dualEnrolledDeviceCount = n.getNumberValue(); }],
            ["enrolledDeviceCount", function (o, n) { o.enrolledDeviceCount = n.getNumberValue(); }],
            ["mdmEnrolledCount", function (o, n) { o.mdmEnrolledCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedDeviceOverview.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("deviceExchangeAccessStateSummary", this.deviceExchangeAccessStateSummary);
        writer.writeObjectValue("deviceOperatingSystemSummary", this.deviceOperatingSystemSummary);
        writer.writeNumberValue("dualEnrolledDeviceCount", this.dualEnrolledDeviceCount);
        writer.writeNumberValue("enrolledDeviceCount", this.enrolledDeviceCount);
        writer.writeNumberValue("mdmEnrolledCount", this.mdmEnrolledCount);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    return ManagedDeviceOverview;
}(entity_1.Entity));
exports.ManagedDeviceOverview = ManagedDeviceOverview;
