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
exports.ManagedDeviceMobileAppConfigurationDeviceSummary = void 0;
var entity_1 = require("../../../entity");
var ManagedDeviceMobileAppConfigurationDeviceSummary = /** @class */ (function (_super) {
    __extends(ManagedDeviceMobileAppConfigurationDeviceSummary, _super);
    /**
     * Instantiates a new ManagedDeviceMobileAppConfigurationDeviceSummary and sets the default values.
     */
    function ManagedDeviceMobileAppConfigurationDeviceSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "configurationVersion", {
        /**
         * Gets the configurationVersion property value. Version of the policy for that overview
         * @returns a integer
         */
        get: function () {
            return this._configurationVersion;
        },
        /**
         * Sets the configurationVersion property value. Version of the policy for that overview
         * @param value Value to set for the configurationVersion property.
         */
        set: function (value) {
            this._configurationVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "errorCount", {
        /**
         * Gets the errorCount property value. Number of error devices
         * @returns a integer
         */
        get: function () {
            return this._errorCount;
        },
        /**
         * Sets the errorCount property value. Number of error devices
         * @param value Value to set for the errorCount property.
         */
        set: function (value) {
            this._errorCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "failedCount", {
        /**
         * Gets the failedCount property value. Number of failed devices
         * @returns a integer
         */
        get: function () {
            return this._failedCount;
        },
        /**
         * Sets the failedCount property value. Number of failed devices
         * @param value Value to set for the failedCount property.
         */
        set: function (value) {
            this._failedCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "lastUpdateDateTime", {
        /**
         * Gets the lastUpdateDateTime property value. Last update time
         * @returns a Date
         */
        get: function () {
            return this._lastUpdateDateTime;
        },
        /**
         * Sets the lastUpdateDateTime property value. Last update time
         * @param value Value to set for the lastUpdateDateTime property.
         */
        set: function (value) {
            this._lastUpdateDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "notApplicableCount", {
        /**
         * Gets the notApplicableCount property value. Number of not applicable devices
         * @returns a integer
         */
        get: function () {
            return this._notApplicableCount;
        },
        /**
         * Sets the notApplicableCount property value. Number of not applicable devices
         * @param value Value to set for the notApplicableCount property.
         */
        set: function (value) {
            this._notApplicableCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "pendingCount", {
        /**
         * Gets the pendingCount property value. Number of pending devices
         * @returns a integer
         */
        get: function () {
            return this._pendingCount;
        },
        /**
         * Sets the pendingCount property value. Number of pending devices
         * @param value Value to set for the pendingCount property.
         */
        set: function (value) {
            this._pendingCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ManagedDeviceMobileAppConfigurationDeviceSummary.prototype, "successCount", {
        /**
         * Gets the successCount property value. Number of succeeded devices
         * @returns a integer
         */
        get: function () {
            return this._successCount;
        },
        /**
         * Sets the successCount property value. Number of succeeded devices
         * @param value Value to set for the successCount property.
         */
        set: function (value) {
            this._successCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ManagedDeviceMobileAppConfigurationDeviceSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["configurationVersion", function (o, n) { o.configurationVersion = n.getNumberValue(); }],
            ["errorCount", function (o, n) { o.errorCount = n.getNumberValue(); }],
            ["failedCount", function (o, n) { o.failedCount = n.getNumberValue(); }],
            ["lastUpdateDateTime", function (o, n) { o.lastUpdateDateTime = n.getDateValue(); }],
            ["notApplicableCount", function (o, n) { o.notApplicableCount = n.getNumberValue(); }],
            ["pendingCount", function (o, n) { o.pendingCount = n.getNumberValue(); }],
            ["successCount", function (o, n) { o.successCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ManagedDeviceMobileAppConfigurationDeviceSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("configurationVersion", this.configurationVersion);
        writer.writeNumberValue("errorCount", this.errorCount);
        writer.writeNumberValue("failedCount", this.failedCount);
        writer.writeDateValue("lastUpdateDateTime", this.lastUpdateDateTime);
        writer.writeNumberValue("notApplicableCount", this.notApplicableCount);
        writer.writeNumberValue("pendingCount", this.pendingCount);
        writer.writeNumberValue("successCount", this.successCount);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return ManagedDeviceMobileAppConfigurationDeviceSummary;
}(entity_1.Entity));
exports.ManagedDeviceMobileAppConfigurationDeviceSummary = ManagedDeviceMobileAppConfigurationDeviceSummary;
