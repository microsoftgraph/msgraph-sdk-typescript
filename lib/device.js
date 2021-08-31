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
exports.Device = void 0;
var alternativeSecurityId_1 = require("./alternativeSecurityId");
var directoryObject_1 = require("./directoryObject");
var extension_1 = require("./extension");
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    /**
     * Instantiates a new device and sets the default values.
     */
    function Device() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Device.prototype, "accountEnabled", {
        /**
         * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._accountEnabled;
        },
        /**
         * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. Default is true. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the accountEnabled property.
         */
        set: function (value) {
            this._accountEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "alternativeSecurityIds", {
        /**
         * Gets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @returns a alternativeSecurityId
         */
        get: function () {
            return this._alternativeSecurityIds;
        },
        /**
         * Sets the alternativeSecurityIds property value. For internal use only. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the alternativeSecurityIds property.
         */
        set: function (value) {
            this._alternativeSecurityIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "approximateLastSignInDateTime", {
        /**
         * Gets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, NOT, ge, le) and $orderBy.
         * @returns a Date
         */
        get: function () {
            return this._approximateLastSignInDateTime;
        },
        /**
         * Sets the approximateLastSignInDateTime property value. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, NOT, ge, le) and $orderBy.
         * @param value Value to set for the approximateLastSignInDateTime property.
         */
        set: function (value) {
            this._approximateLastSignInDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "complianceExpirationDateTime", {
        /**
         * Gets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._complianceExpirationDateTime;
        },
        /**
         * Sets the complianceExpirationDateTime property value. The timestamp when the device is no longer deemed compliant. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @param value Value to set for the complianceExpirationDateTime property.
         */
        set: function (value) {
            this._complianceExpirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "deviceId", {
        /**
         * Gets the deviceId property value. Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, NOT, startsWith).
         * @returns a string
         */
        get: function () {
            return this._deviceId;
        },
        /**
         * Sets the deviceId property value. Identifier set by Azure Device Registration Service at the time of registration. Supports $filter (eq, ne, NOT, startsWith).
         * @param value Value to set for the deviceId property.
         */
        set: function (value) {
            this._deviceId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "deviceMetadata", {
        /**
         * Gets the deviceMetadata property value. For internal use only. Set to null.
         * @returns a string
         */
        get: function () {
            return this._deviceMetadata;
        },
        /**
         * Sets the deviceMetadata property value. For internal use only. Set to null.
         * @param value Value to set for the deviceMetadata property.
         */
        set: function (value) {
            this._deviceMetadata = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "deviceVersion", {
        /**
         * Gets the deviceVersion property value. For internal use only.
         * @returns a integer
         */
        get: function () {
            return this._deviceVersion;
        },
        /**
         * Sets the deviceVersion property value. For internal use only.
         * @param value Value to set for the deviceVersion property.
         */
        set: function (value) {
            this._deviceVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the device. Required. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the device. Read-only. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "isCompliant", {
        /**
         * Gets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, NOT).
         * @returns a boolean
         */
        get: function () {
            return this._isCompliant;
        },
        /**
         * Sets the isCompliant property value. true if the device complies with Mobile Device Management (MDM) policies; otherwise, false. Read-only. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the isCompliant property.
         */
        set: function (value) {
            this._isCompliant = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "isManaged", {
        /**
         * Gets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, NOT).
         * @returns a boolean
         */
        get: function () {
            return this._isManaged;
        },
        /**
         * Sets the isManaged property value. true if the device is managed by a Mobile Device Management (MDM) app; otherwise, false. This can only be updated by Intune for any device OS type or by an approved MDM app for Windows OS devices. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the isManaged property.
         */
        set: function (value) {
            this._isManaged = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "mdmAppId", {
        /**
         * Gets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, NOT, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mdmAppId;
        },
        /**
         * Sets the mdmAppId property value. Application identifier used to register device into MDM. Read-only. Supports $filter (eq, ne, NOT, startsWith).
         * @param value Value to set for the mdmAppId property.
         */
        set: function (value) {
            this._mdmAppId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "memberOf", {
        /**
         * Gets the memberOf property value. Groups that this device is a member of. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._memberOf;
        },
        /**
         * Sets the memberOf property value. Groups that this device is a member of. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the memberOf property.
         */
        set: function (value) {
            this._memberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "onPremisesLastSyncDateTime", {
        /**
         * Gets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @returns a Date
         */
        get: function () {
            return this._onPremisesLastSyncDateTime;
        },
        /**
         * Sets the onPremisesLastSyncDateTime property value. The last time at which the object was synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @param value Value to set for the onPremisesLastSyncDateTime property.
         */
        set: function (value) {
            this._onPremisesLastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "onPremisesSyncEnabled", {
        /**
         * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._onPremisesSyncEnabled;
        },
        /**
         * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the onPremisesSyncEnabled property.
         */
        set: function (value) {
            this._onPremisesSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "operatingSystem", {
        /**
         * Gets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._operatingSystem;
        },
        /**
         * Sets the operatingSystem property value. The type of operating system on the device. Required. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @param value Value to set for the operatingSystem property.
         */
        set: function (value) {
            this._operatingSystem = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "operatingSystemVersion", {
        /**
         * Gets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._operatingSystemVersion;
        },
        /**
         * Sets the operatingSystemVersion property value. Operating system version of the device. Required. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @param value Value to set for the operatingSystemVersion property.
         */
        set: function (value) {
            this._operatingSystemVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "physicalIds", {
        /**
         * Gets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._physicalIds;
        },
        /**
         * Sets the physicalIds property value. For internal use only. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the physicalIds property.
         */
        set: function (value) {
            this._physicalIds = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "profileType", {
        /**
         * Gets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
         * @returns a string
         */
        get: function () {
            return this._profileType;
        },
        /**
         * Sets the profileType property value. The profile type of the device. Possible values: RegisteredDevice (default), SecureVM, Printer, Shared, IoT.
         * @param value Value to set for the profileType property.
         */
        set: function (value) {
            this._profileType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "registeredOwners", {
        /**
         * Gets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._registeredOwners;
        },
        /**
         * Sets the registeredOwners property value. The user that cloud joined the device or registered their personal device. The registered owner is set at the time of registration. Currently, there can be only one owner. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the registeredOwners property.
         */
        set: function (value) {
            this._registeredOwners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "registeredUsers", {
        /**
         * Gets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._registeredUsers;
        },
        /**
         * Sets the registeredUsers property value. Collection of registered users of the device. For cloud joined devices and registered personal devices, registered users are set to the same value as registered owners at the time of registration. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the registeredUsers property.
         */
        set: function (value) {
            this._registeredUsers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "systemLabels", {
        /**
         * Gets the systemLabels property value. List of labels applied to the device by the system.
         * @returns a string
         */
        get: function () {
            return this._systemLabels;
        },
        /**
         * Sets the systemLabels property value. List of labels applied to the device by the system.
         * @param value Value to set for the systemLabels property.
         */
        set: function (value) {
            this._systemLabels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "transitiveMemberOf", {
        /**
         * Gets the transitiveMemberOf property value. Groups that this device is a member of. This operation is transitive. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._transitiveMemberOf;
        },
        /**
         * Sets the transitiveMemberOf property value. Groups that this device is a member of. This operation is transitive. Supports $expand.
         * @param value Value to set for the transitiveMemberOf property.
         */
        set: function (value) {
            this._transitiveMemberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Device.prototype, "trustType", {
        /**
         * Gets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
         * @returns a string
         */
        get: function () {
            return this._trustType;
        },
        /**
         * Sets the trustType property value. Type of trust for the joined device. Read-only. Possible values: Workplace (indicates bring your own personal devices), AzureAd (Cloud only joined devices), ServerAd (on-premises domain joined devices joined to Azure AD). For more details, see Introduction to device management in Azure Active Directory
         * @param value Value to set for the trustType property.
         */
        set: function (value) {
            this._trustType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Device.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["accountEnabled", function (o, n) { o.accountEnabled = n.getBooleanValue(); }],
            ["alternativeSecurityIds", function (o, n) { o.alternativeSecurityIds = n.getCollectionOfObjectValues(alternativeSecurityId_1.AlternativeSecurityId); }],
            ["approximateLastSignInDateTime", function (o, n) { o.approximateLastSignInDateTime = n.getDateValue(); }],
            ["complianceExpirationDateTime", function (o, n) { o.complianceExpirationDateTime = n.getDateValue(); }],
            ["deviceId", function (o, n) { o.deviceId = n.getStringValue(); }],
            ["deviceMetadata", function (o, n) { o.deviceMetadata = n.getStringValue(); }],
            ["deviceVersion", function (o, n) { o.deviceVersion = n.getNumberValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["isCompliant", function (o, n) { o.isCompliant = n.getBooleanValue(); }],
            ["isManaged", function (o, n) { o.isManaged = n.getBooleanValue(); }],
            ["mdmAppId", function (o, n) { o.mdmAppId = n.getStringValue(); }],
            ["memberOf", function (o, n) { o.memberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["onPremisesLastSyncDateTime", function (o, n) { o.onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesSyncEnabled", function (o, n) { o.onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["operatingSystem", function (o, n) { o.operatingSystem = n.getStringValue(); }],
            ["operatingSystemVersion", function (o, n) { o.operatingSystemVersion = n.getStringValue(); }],
            ["physicalIds", function (o, n) { o.physicalIds = n.getCollectionOfPrimitiveValues(); }],
            ["profileType", function (o, n) { o.profileType = n.getStringValue(); }],
            ["registeredOwners", function (o, n) { o.registeredOwners = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["registeredUsers", function (o, n) { o.registeredUsers = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["systemLabels", function (o, n) { o.systemLabels = n.getCollectionOfPrimitiveValues(); }],
            ["transitiveMemberOf", function (o, n) { o.transitiveMemberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["trustType", function (o, n) { o.trustType = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Device.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues("alternativeSecurityIds", this.alternativeSecurityIds);
        writer.writeDateValue("approximateLastSignInDateTime", this.approximateLastSignInDateTime);
        writer.writeDateValue("complianceExpirationDateTime", this.complianceExpirationDateTime);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceMetadata", this.deviceMetadata);
        writer.writeNumberValue("deviceVersion", this.deviceVersion);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeBooleanValue("isCompliant", this.isCompliant);
        writer.writeBooleanValue("isManaged", this.isManaged);
        writer.writeStringValue("mdmAppId", this.mdmAppId);
        writer.writeCollectionOfObjectValues("memberOf", this.memberOf);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("operatingSystem", this.operatingSystem);
        writer.writeStringValue("operatingSystemVersion", this.operatingSystemVersion);
        writer.writeCollectionOfPrimitiveValues("physicalIds", this.physicalIds);
        writer.writeStringValue("profileType", this.profileType);
        writer.writeCollectionOfObjectValues("registeredOwners", this.registeredOwners);
        writer.writeCollectionOfObjectValues("registeredUsers", this.registeredUsers);
        writer.writeCollectionOfPrimitiveValues("systemLabels", this.systemLabels);
        writer.writeCollectionOfObjectValues("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeStringValue("trustType", this.trustType);
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
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    return Device;
}(directoryObject_1.DirectoryObject));
exports.Device = Device;
