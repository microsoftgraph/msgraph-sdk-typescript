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
exports.SoftwareUpdateStatusSummary = void 0;
var entity_1 = require("../../entity");
var SoftwareUpdateStatusSummary = /** @class */ (function (_super) {
    __extends(SoftwareUpdateStatusSummary, _super);
    /**
     * Instantiates a new SoftwareUpdateStatusSummary and sets the default values.
     */
    function SoftwareUpdateStatusSummary() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "compliantDeviceCount", {
        /**
         * Gets the compliantDeviceCount property value. Number of compliant devices.
         * @returns a integer
         */
        get: function () {
            return this._compliantDeviceCount;
        },
        /**
         * Sets the compliantDeviceCount property value. Number of compliant devices.
         * @param value Value to set for the compliantDeviceCount property.
         */
        set: function (value) {
            this._compliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "compliantUserCount", {
        /**
         * Gets the compliantUserCount property value. Number of compliant users.
         * @returns a integer
         */
        get: function () {
            return this._compliantUserCount;
        },
        /**
         * Sets the compliantUserCount property value. Number of compliant users.
         * @param value Value to set for the compliantUserCount property.
         */
        set: function (value) {
            this._compliantUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "conflictDeviceCount", {
        /**
         * Gets the conflictDeviceCount property value. Number of conflict devices.
         * @returns a integer
         */
        get: function () {
            return this._conflictDeviceCount;
        },
        /**
         * Sets the conflictDeviceCount property value. Number of conflict devices.
         * @param value Value to set for the conflictDeviceCount property.
         */
        set: function (value) {
            this._conflictDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "conflictUserCount", {
        /**
         * Gets the conflictUserCount property value. Number of conflict users.
         * @returns a integer
         */
        get: function () {
            return this._conflictUserCount;
        },
        /**
         * Sets the conflictUserCount property value. Number of conflict users.
         * @param value Value to set for the conflictUserCount property.
         */
        set: function (value) {
            this._conflictUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name of the policy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name of the policy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "errorDeviceCount", {
        /**
         * Gets the errorDeviceCount property value. Number of devices had error.
         * @returns a integer
         */
        get: function () {
            return this._errorDeviceCount;
        },
        /**
         * Sets the errorDeviceCount property value. Number of devices had error.
         * @param value Value to set for the errorDeviceCount property.
         */
        set: function (value) {
            this._errorDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "errorUserCount", {
        /**
         * Gets the errorUserCount property value. Number of users had error.
         * @returns a integer
         */
        get: function () {
            return this._errorUserCount;
        },
        /**
         * Sets the errorUserCount property value. Number of users had error.
         * @param value Value to set for the errorUserCount property.
         */
        set: function (value) {
            this._errorUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "nonCompliantDeviceCount", {
        /**
         * Gets the nonCompliantDeviceCount property value. Number of non compliant devices.
         * @returns a integer
         */
        get: function () {
            return this._nonCompliantDeviceCount;
        },
        /**
         * Sets the nonCompliantDeviceCount property value. Number of non compliant devices.
         * @param value Value to set for the nonCompliantDeviceCount property.
         */
        set: function (value) {
            this._nonCompliantDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "nonCompliantUserCount", {
        /**
         * Gets the nonCompliantUserCount property value. Number of non compliant users.
         * @returns a integer
         */
        get: function () {
            return this._nonCompliantUserCount;
        },
        /**
         * Sets the nonCompliantUserCount property value. Number of non compliant users.
         * @param value Value to set for the nonCompliantUserCount property.
         */
        set: function (value) {
            this._nonCompliantUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "notApplicableDeviceCount", {
        /**
         * Gets the notApplicableDeviceCount property value. Number of not applicable devices.
         * @returns a integer
         */
        get: function () {
            return this._notApplicableDeviceCount;
        },
        /**
         * Sets the notApplicableDeviceCount property value. Number of not applicable devices.
         * @param value Value to set for the notApplicableDeviceCount property.
         */
        set: function (value) {
            this._notApplicableDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "notApplicableUserCount", {
        /**
         * Gets the notApplicableUserCount property value. Number of not applicable users.
         * @returns a integer
         */
        get: function () {
            return this._notApplicableUserCount;
        },
        /**
         * Sets the notApplicableUserCount property value. Number of not applicable users.
         * @param value Value to set for the notApplicableUserCount property.
         */
        set: function (value) {
            this._notApplicableUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "remediatedDeviceCount", {
        /**
         * Gets the remediatedDeviceCount property value. Number of remediated devices.
         * @returns a integer
         */
        get: function () {
            return this._remediatedDeviceCount;
        },
        /**
         * Sets the remediatedDeviceCount property value. Number of remediated devices.
         * @param value Value to set for the remediatedDeviceCount property.
         */
        set: function (value) {
            this._remediatedDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "remediatedUserCount", {
        /**
         * Gets the remediatedUserCount property value. Number of remediated users.
         * @returns a integer
         */
        get: function () {
            return this._remediatedUserCount;
        },
        /**
         * Sets the remediatedUserCount property value. Number of remediated users.
         * @param value Value to set for the remediatedUserCount property.
         */
        set: function (value) {
            this._remediatedUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "unknownDeviceCount", {
        /**
         * Gets the unknownDeviceCount property value. Number of unknown devices.
         * @returns a integer
         */
        get: function () {
            return this._unknownDeviceCount;
        },
        /**
         * Sets the unknownDeviceCount property value. Number of unknown devices.
         * @param value Value to set for the unknownDeviceCount property.
         */
        set: function (value) {
            this._unknownDeviceCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(SoftwareUpdateStatusSummary.prototype, "unknownUserCount", {
        /**
         * Gets the unknownUserCount property value. Number of unknown users.
         * @returns a integer
         */
        get: function () {
            return this._unknownUserCount;
        },
        /**
         * Sets the unknownUserCount property value. Number of unknown users.
         * @param value Value to set for the unknownUserCount property.
         */
        set: function (value) {
            this._unknownUserCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    SoftwareUpdateStatusSummary.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["compliantDeviceCount", function (o, n) { o.compliantDeviceCount = n.getNumberValue(); }],
            ["compliantUserCount", function (o, n) { o.compliantUserCount = n.getNumberValue(); }],
            ["conflictDeviceCount", function (o, n) { o.conflictDeviceCount = n.getNumberValue(); }],
            ["conflictUserCount", function (o, n) { o.conflictUserCount = n.getNumberValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["errorDeviceCount", function (o, n) { o.errorDeviceCount = n.getNumberValue(); }],
            ["errorUserCount", function (o, n) { o.errorUserCount = n.getNumberValue(); }],
            ["nonCompliantDeviceCount", function (o, n) { o.nonCompliantDeviceCount = n.getNumberValue(); }],
            ["nonCompliantUserCount", function (o, n) { o.nonCompliantUserCount = n.getNumberValue(); }],
            ["notApplicableDeviceCount", function (o, n) { o.notApplicableDeviceCount = n.getNumberValue(); }],
            ["notApplicableUserCount", function (o, n) { o.notApplicableUserCount = n.getNumberValue(); }],
            ["remediatedDeviceCount", function (o, n) { o.remediatedDeviceCount = n.getNumberValue(); }],
            ["remediatedUserCount", function (o, n) { o.remediatedUserCount = n.getNumberValue(); }],
            ["unknownDeviceCount", function (o, n) { o.unknownDeviceCount = n.getNumberValue(); }],
            ["unknownUserCount", function (o, n) { o.unknownUserCount = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    SoftwareUpdateStatusSummary.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeNumberValue("compliantDeviceCount", this.compliantDeviceCount);
        writer.writeNumberValue("compliantUserCount", this.compliantUserCount);
        writer.writeNumberValue("conflictDeviceCount", this.conflictDeviceCount);
        writer.writeNumberValue("conflictUserCount", this.conflictUserCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeNumberValue("errorDeviceCount", this.errorDeviceCount);
        writer.writeNumberValue("errorUserCount", this.errorUserCount);
        writer.writeNumberValue("nonCompliantDeviceCount", this.nonCompliantDeviceCount);
        writer.writeNumberValue("nonCompliantUserCount", this.nonCompliantUserCount);
        writer.writeNumberValue("notApplicableDeviceCount", this.notApplicableDeviceCount);
        writer.writeNumberValue("notApplicableUserCount", this.notApplicableUserCount);
        writer.writeNumberValue("remediatedDeviceCount", this.remediatedDeviceCount);
        writer.writeNumberValue("remediatedUserCount", this.remediatedUserCount);
        writer.writeNumberValue("unknownDeviceCount", this.unknownDeviceCount);
        writer.writeNumberValue("unknownUserCount", this.unknownUserCount);
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
    ;
    ;
    ;
    ;
    return SoftwareUpdateStatusSummary;
}(entity_1.Entity));
exports.SoftwareUpdateStatusSummary = SoftwareUpdateStatusSummary;
