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
exports.DeviceEnrollmentConfiguration = void 0;
var entity_1 = require("../entity");
var enrollmentConfigurationAssignment_1 = require("./enrollmentConfigurationAssignment");
var DeviceEnrollmentConfiguration = /** @class */ (function (_super) {
    __extends(DeviceEnrollmentConfiguration, _super);
    /**
     * Instantiates a new deviceEnrollmentConfiguration and sets the default values.
     */
    function DeviceEnrollmentConfiguration() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "assignments", {
        /**
         * Gets the assignments property value. The list of group assignments for the device configuration profile
         * @returns a enrollmentConfigurationAssignment
         */
        get: function () {
            return this._assignments;
        },
        /**
         * Sets the assignments property value. The list of group assignments for the device configuration profile
         * @param value Value to set for the assignments property.
         */
        set: function (value) {
            this._assignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Created date time in UTC of the device enrollment configuration
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "description", {
        /**
         * Gets the description property value. The description of the device enrollment configuration
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. The description of the device enrollment configuration
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name of the device enrollment configuration
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name of the device enrollment configuration
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Last modified date time in UTC of the device enrollment configuration
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "priority", {
        /**
         * Gets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
         * @returns a integer
         */
        get: function () {
            return this._priority;
        },
        /**
         * Sets the priority property value. Priority is used when a user exists in multiple groups that are assigned enrollment configuration. Users are subject only to the configuration with the lowest priority value.
         * @param value Value to set for the priority property.
         */
        set: function (value) {
            this._priority = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DeviceEnrollmentConfiguration.prototype, "version", {
        /**
         * Gets the version property value. The version of the device enrollment configuration
         * @returns a integer
         */
        get: function () {
            return this._version;
        },
        /**
         * Sets the version property value. The version of the device enrollment configuration
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
    DeviceEnrollmentConfiguration.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(enrollmentConfigurationAssignment_1.EnrollmentConfigurationAssignment); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["priority", function (o, n) { o.priority = n.getNumberValue(); }],
            ["version", function (o, n) { o.version = n.getNumberValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    DeviceEnrollmentConfiguration.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeNumberValue("priority", this.priority);
        writer.writeNumberValue("version", this.version);
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return DeviceEnrollmentConfiguration;
}(entity_1.Entity));
exports.DeviceEnrollmentConfiguration = DeviceEnrollmentConfiguration;
