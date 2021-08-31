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
exports.MobileThreatDefenseConnector = void 0;
var entity_1 = require("../entity");
var MobileThreatDefenseConnector = /** @class */ (function (_super) {
    __extends(MobileThreatDefenseConnector, _super);
    /**
     * Instantiates a new mobileThreatDefenseConnector and sets the default values.
     */
    function MobileThreatDefenseConnector() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "androidDeviceBlockedOnMissingPartnerData", {
        /**
         * Gets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
         * @returns a boolean
         */
        get: function () {
            return this._androidDeviceBlockedOnMissingPartnerData;
        },
        /**
         * Sets the androidDeviceBlockedOnMissingPartnerData property value. For Android, set whether Intune must receive data from the data sync partner prior to marking a device compliant
         * @param value Value to set for the androidDeviceBlockedOnMissingPartnerData property.
         */
        set: function (value) {
            this._androidDeviceBlockedOnMissingPartnerData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "androidEnabled", {
        /**
         * Gets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
         * @returns a boolean
         */
        get: function () {
            return this._androidEnabled;
        },
        /**
         * Sets the androidEnabled property value. For Android, set whether data from the data sync partner should be used during compliance evaluations
         * @param value Value to set for the androidEnabled property.
         */
        set: function (value) {
            this._androidEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "iosDeviceBlockedOnMissingPartnerData", {
        /**
         * Gets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
         * @returns a boolean
         */
        get: function () {
            return this._iosDeviceBlockedOnMissingPartnerData;
        },
        /**
         * Sets the iosDeviceBlockedOnMissingPartnerData property value. For IOS, set whether Intune must receive data from the data sync partner prior to marking a device compliant
         * @param value Value to set for the iosDeviceBlockedOnMissingPartnerData property.
         */
        set: function (value) {
            this._iosDeviceBlockedOnMissingPartnerData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "iosEnabled", {
        /**
         * Gets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
         * @returns a boolean
         */
        get: function () {
            return this._iosEnabled;
        },
        /**
         * Sets the iosEnabled property value. For IOS, get or set whether data from the data sync partner should be used during compliance evaluations
         * @param value Value to set for the iosEnabled property.
         */
        set: function (value) {
            this._iosEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "lastHeartbeatDateTime", {
        /**
         * Gets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
         * @returns a Date
         */
        get: function () {
            return this._lastHeartbeatDateTime;
        },
        /**
         * Sets the lastHeartbeatDateTime property value. DateTime of last Heartbeat recieved from the Data Sync Partner
         * @param value Value to set for the lastHeartbeatDateTime property.
         */
        set: function (value) {
            this._lastHeartbeatDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "partnerState", {
        /**
         * Gets the partnerState property value. Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
         * @returns a mobileThreatPartnerTenantState
         */
        get: function () {
            return this._partnerState;
        },
        /**
         * Sets the partnerState property value. Data Sync Partner state for this account. Possible values are: unavailable, available, enabled, unresponsive.
         * @param value Value to set for the partnerState property.
         */
        set: function (value) {
            this._partnerState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "partnerUnresponsivenessThresholdInDays", {
        /**
         * Gets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
         * @returns a integer
         */
        get: function () {
            return this._partnerUnresponsivenessThresholdInDays;
        },
        /**
         * Sets the partnerUnresponsivenessThresholdInDays property value. Get or Set days the per tenant tolerance to unresponsiveness for this partner integration
         * @param value Value to set for the partnerUnresponsivenessThresholdInDays property.
         */
        set: function (value) {
            this._partnerUnresponsivenessThresholdInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(MobileThreatDefenseConnector.prototype, "partnerUnsupportedOsVersionBlocked", {
        /**
         * Gets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
         * @returns a boolean
         */
        get: function () {
            return this._partnerUnsupportedOsVersionBlocked;
        },
        /**
         * Sets the partnerUnsupportedOsVersionBlocked property value. Get or set whether to block devices on the enabled platforms that do not meet the minimum version requirements of the Data Sync Partner
         * @param value Value to set for the partnerUnsupportedOsVersionBlocked property.
         */
        set: function (value) {
            this._partnerUnsupportedOsVersionBlocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    MobileThreatDefenseConnector.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["androidDeviceBlockedOnMissingPartnerData", function (o, n) { o.androidDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); }],
            ["androidEnabled", function (o, n) { o.androidEnabled = n.getBooleanValue(); }],
            ["iosDeviceBlockedOnMissingPartnerData", function (o, n) { o.iosDeviceBlockedOnMissingPartnerData = n.getBooleanValue(); }],
            ["iosEnabled", function (o, n) { o.iosEnabled = n.getBooleanValue(); }],
            ["lastHeartbeatDateTime", function (o, n) { o.lastHeartbeatDateTime = n.getDateValue(); }],
            ["partnerState", function (o, n) { o.partnerState = n.getObjectValue(MobileThreatPartnerTenantState); }],
            ["partnerUnresponsivenessThresholdInDays", function (o, n) { o.partnerUnresponsivenessThresholdInDays = n.getNumberValue(); }],
            ["partnerUnsupportedOsVersionBlocked", function (o, n) { o.partnerUnsupportedOsVersionBlocked = n.getBooleanValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    MobileThreatDefenseConnector.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("androidDeviceBlockedOnMissingPartnerData", this.androidDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("androidEnabled", this.androidEnabled);
        writer.writeBooleanValue("iosDeviceBlockedOnMissingPartnerData", this.iosDeviceBlockedOnMissingPartnerData);
        writer.writeBooleanValue("iosEnabled", this.iosEnabled);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeObjectValue("partnerState", this.partnerState);
        writer.writeNumberValue("partnerUnresponsivenessThresholdInDays", this.partnerUnresponsivenessThresholdInDays);
        writer.writeBooleanValue("partnerUnsupportedOsVersionBlocked", this.partnerUnsupportedOsVersionBlocked);
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
    return MobileThreatDefenseConnector;
}(entity_1.Entity));
exports.MobileThreatDefenseConnector = MobileThreatDefenseConnector;
