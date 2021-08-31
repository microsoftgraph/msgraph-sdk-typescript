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
exports.ComplianceManagementPartner = void 0;
var entity_1 = require("../entity");
var ComplianceManagementPartner = /** @class */ (function (_super) {
    __extends(ComplianceManagementPartner, _super);
    /**
     * Instantiates a new complianceManagementPartner and sets the default values.
     */
    function ComplianceManagementPartner() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "androidEnrollmentAssignments", {
        /**
         * Gets the androidEnrollmentAssignments property value. User groups which enroll Android devices through partner.
         * @returns a complianceManagementPartnerAssignment
         */
        get: function () {
            return this._androidEnrollmentAssignments;
        },
        /**
         * Sets the androidEnrollmentAssignments property value. User groups which enroll Android devices through partner.
         * @param value Value to set for the androidEnrollmentAssignments property.
         */
        set: function (value) {
            this._androidEnrollmentAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "androidOnboarded", {
        /**
         * Gets the androidOnboarded property value. Partner onboarded for Android devices.
         * @returns a boolean
         */
        get: function () {
            return this._androidOnboarded;
        },
        /**
         * Sets the androidOnboarded property value. Partner onboarded for Android devices.
         * @param value Value to set for the androidOnboarded property.
         */
        set: function (value) {
            this._androidOnboarded = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "displayName", {
        /**
         * Gets the displayName property value. Partner display name
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Partner display name
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "iosEnrollmentAssignments", {
        /**
         * Gets the iosEnrollmentAssignments property value. User groups which enroll ios devices through partner.
         * @returns a complianceManagementPartnerAssignment
         */
        get: function () {
            return this._iosEnrollmentAssignments;
        },
        /**
         * Sets the iosEnrollmentAssignments property value. User groups which enroll ios devices through partner.
         * @param value Value to set for the iosEnrollmentAssignments property.
         */
        set: function (value) {
            this._iosEnrollmentAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "iosOnboarded", {
        /**
         * Gets the iosOnboarded property value. Partner onboarded for ios devices.
         * @returns a boolean
         */
        get: function () {
            return this._iosOnboarded;
        },
        /**
         * Sets the iosOnboarded property value. Partner onboarded for ios devices.
         * @param value Value to set for the iosOnboarded property.
         */
        set: function (value) {
            this._iosOnboarded = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "lastHeartbeatDateTime", {
        /**
         * Gets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin onboarded to the compliance management partner
         * @returns a Date
         */
        get: function () {
            return this._lastHeartbeatDateTime;
        },
        /**
         * Sets the lastHeartbeatDateTime property value. Timestamp of last heartbeat after admin onboarded to the compliance management partner
         * @param value Value to set for the lastHeartbeatDateTime property.
         */
        set: function (value) {
            this._lastHeartbeatDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "macOsEnrollmentAssignments", {
        /**
         * Gets the macOsEnrollmentAssignments property value. User groups which enroll Mac devices through partner.
         * @returns a complianceManagementPartnerAssignment
         */
        get: function () {
            return this._macOsEnrollmentAssignments;
        },
        /**
         * Sets the macOsEnrollmentAssignments property value. User groups which enroll Mac devices through partner.
         * @param value Value to set for the macOsEnrollmentAssignments property.
         */
        set: function (value) {
            this._macOsEnrollmentAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "macOsOnboarded", {
        /**
         * Gets the macOsOnboarded property value. Partner onboarded for Mac devices.
         * @returns a boolean
         */
        get: function () {
            return this._macOsOnboarded;
        },
        /**
         * Sets the macOsOnboarded property value. Partner onboarded for Mac devices.
         * @param value Value to set for the macOsOnboarded property.
         */
        set: function (value) {
            this._macOsOnboarded = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ComplianceManagementPartner.prototype, "partnerState", {
        /**
         * Gets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
         * @returns a deviceManagementPartnerTenantState
         */
        get: function () {
            return this._partnerState;
        },
        /**
         * Sets the partnerState property value. Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.
         * @param value Value to set for the partnerState property.
         */
        set: function (value) {
            this._partnerState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ComplianceManagementPartner.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["androidEnrollmentAssignments", function (o, n) { o.androidEnrollmentAssignments = n.getCollectionOfPrimitiveValues(); }],
            ["androidOnboarded", function (o, n) { o.androidOnboarded = n.getBooleanValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["iosEnrollmentAssignments", function (o, n) { o.iosEnrollmentAssignments = n.getCollectionOfPrimitiveValues(); }],
            ["iosOnboarded", function (o, n) { o.iosOnboarded = n.getBooleanValue(); }],
            ["lastHeartbeatDateTime", function (o, n) { o.lastHeartbeatDateTime = n.getDateValue(); }],
            ["macOsEnrollmentAssignments", function (o, n) { o.macOsEnrollmentAssignments = n.getCollectionOfPrimitiveValues(); }],
            ["macOsOnboarded", function (o, n) { o.macOsOnboarded = n.getBooleanValue(); }],
            ["partnerState", function (o, n) { o.partnerState = n.getObjectValue(DeviceManagementPartnerTenantState); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ComplianceManagementPartner.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("androidEnrollmentAssignments", this.androidEnrollmentAssignments);
        writer.writeBooleanValue("androidOnboarded", this.androidOnboarded);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues("iosEnrollmentAssignments", this.iosEnrollmentAssignments);
        writer.writeBooleanValue("iosOnboarded", this.iosOnboarded);
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        writer.writeCollectionOfPrimitiveValues("macOsEnrollmentAssignments", this.macOsEnrollmentAssignments);
        writer.writeBooleanValue("macOsOnboarded", this.macOsOnboarded);
        writer.writeObjectValue("partnerState", this.partnerState);
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
    return ComplianceManagementPartner;
}(entity_1.Entity));
exports.ComplianceManagementPartner = ComplianceManagementPartner;
