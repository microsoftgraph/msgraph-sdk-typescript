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
exports.WindowsInformationProtectionAppLearningSummary = void 0;
var entity_1 = require("../entity");
var WindowsInformationProtectionAppLearningSummary = /** @class */ (function (_super) {
    __extends(WindowsInformationProtectionAppLearningSummary, _super);
    /**
     * Instantiates a new windowsInformationProtectionAppLearningSummary and sets the default values.
     */
    function WindowsInformationProtectionAppLearningSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(WindowsInformationProtectionAppLearningSummary.prototype, "applicationName", {
        /**
         * Gets the applicationName property value. Application Name
         * @returns a string
         */
        get: function () {
            return this._applicationName;
        },
        /**
         * Sets the applicationName property value. Application Name
         * @param value Value to set for the applicationName property.
         */
        set: function (value) {
            this._applicationName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionAppLearningSummary.prototype, "applicationType", {
        /**
         * Gets the applicationType property value. Application Type. Possible values are: universal, desktop.
         * @returns a applicationType
         */
        get: function () {
            return this._applicationType;
        },
        /**
         * Sets the applicationType property value. Application Type. Possible values are: universal, desktop.
         * @param value Value to set for the applicationType property.
         */
        set: function (value) {
            this._applicationType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(WindowsInformationProtectionAppLearningSummary.prototype, "deviceCount", {
        /**
         * Gets the deviceCount property value. Device Count
         * @returns a integer
         */
        get: function () {
            return this._deviceCount;
        },
        /**
         * Sets the deviceCount property value. Device Count
         * @param value Value to set for the deviceCount property.
         */
        set: function (value) {
            this._deviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    WindowsInformationProtectionAppLearningSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["applicationName", function (o, n) { o.applicationName = n.getStringValue(); }],
            ["applicationType", function (o, n) { o.applicationType = n.getObjectValue(ApplicationType); }],
            ["deviceCount", function (o, n) { o.deviceCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    WindowsInformationProtectionAppLearningSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("applicationName", this.applicationName);
        writer.writeObjectValue("applicationType", this.applicationType);
        writer.writeNumberValue("deviceCount", this.deviceCount);
    };
    ;
    ;
    ;
    ;
    return WindowsInformationProtectionAppLearningSummary;
}(entity_1.Entity));
exports.WindowsInformationProtectionAppLearningSummary = WindowsInformationProtectionAppLearningSummary;
