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
exports.Organization = void 0;
var assignedPlan_1 = require("./assignedPlan");
var organizationalBranding_1 = require("./branding/organizationalBranding");
var certificateBasedAuthConfiguration_1 = require("./certificateBasedAuthConfiguration");
var directoryObject_1 = require("./directoryObject");
var extension_1 = require("./extension");
var provisionedPlan_1 = require("./provisionedPlan");
var verifiedDomain_1 = require("./verifiedDomain");
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    /**
     * Instantiates a new organization and sets the default values.
     */
    function Organization() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Organization.prototype, "assignedPlans", {
        /**
         * Gets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
         * @returns a assignedPlan
         */
        get: function () {
            return this._assignedPlans;
        },
        /**
         * Sets the assignedPlans property value. The collection of service plans associated with the tenant. Not nullable.
         * @param value Value to set for the assignedPlans property.
         */
        set: function (value) {
            this._assignedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "branding", {
        /**
         * Gets the branding property value.
         * @returns a organizationalBranding
         */
        get: function () {
            return this._branding;
        },
        /**
         * Sets the branding property value.
         * @param value Value to set for the branding property.
         */
        set: function (value) {
            this._branding = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "businessPhones", {
        /**
         * Gets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
         * @returns a string
         */
        get: function () {
            return this._businessPhones;
        },
        /**
         * Sets the businessPhones property value. Telephone number for the organization. Although this is a string collection, only one number can be set for this property.
         * @param value Value to set for the businessPhones property.
         */
        set: function (value) {
            this._businessPhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "certificateBasedAuthConfiguration", {
        /**
         * Gets the certificateBasedAuthConfiguration property value. Navigation property to manage  certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
         * @returns a certificateBasedAuthConfiguration
         */
        get: function () {
            return this._certificateBasedAuthConfiguration;
        },
        /**
         * Sets the certificateBasedAuthConfiguration property value. Navigation property to manage  certificate-based authentication configuration. Only a single instance of certificateBasedAuthConfiguration can be created in the collection.
         * @param value Value to set for the certificateBasedAuthConfiguration property.
         */
        set: function (value) {
            this._certificateBasedAuthConfiguration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "city", {
        /**
         * Gets the city property value. City name of the address for the organization.
         * @returns a string
         */
        get: function () {
            return this._city;
        },
        /**
         * Sets the city property value. City name of the address for the organization.
         * @param value Value to set for the city property.
         */
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "country", {
        /**
         * Gets the country property value. Country/region name of the address for the organization.
         * @returns a string
         */
        get: function () {
            return this._country;
        },
        /**
         * Sets the country property value. Country/region name of the address for the organization.
         * @param value Value to set for the country property.
         */
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "countryLetterCode", {
        /**
         * Gets the countryLetterCode property value. Country/region abbreviation for the organization.
         * @returns a string
         */
        get: function () {
            return this._countryLetterCode;
        },
        /**
         * Sets the countryLetterCode property value. Country/region abbreviation for the organization.
         * @param value Value to set for the countryLetterCode property.
         */
        set: function (value) {
            this._countryLetterCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Timestamp of when the organization was created. The value cannot be modified and is automatically populated when the organization is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the tenant.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the tenant.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the organization resource. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "marketingNotificationEmails", {
        /**
         * Gets the marketingNotificationEmails property value. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._marketingNotificationEmails;
        },
        /**
         * Sets the marketingNotificationEmails property value. Not nullable.
         * @param value Value to set for the marketingNotificationEmails property.
         */
        set: function (value) {
            this._marketingNotificationEmails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "mobileDeviceManagementAuthority", {
        /**
         * Gets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
         * @returns a mdmAuthority
         */
        get: function () {
            return this._mobileDeviceManagementAuthority;
        },
        /**
         * Sets the mobileDeviceManagementAuthority property value. Mobile device management authority. Possible values are: unknown, intune, sccm, office365.
         * @param value Value to set for the mobileDeviceManagementAuthority property.
         */
        set: function (value) {
            this._mobileDeviceManagementAuthority = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "onPremisesLastSyncDateTime", {
        /**
         * Gets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._onPremisesLastSyncDateTime;
        },
        /**
         * Sets the onPremisesLastSyncDateTime property value. The time and date at which the tenant was last synced with the on-premises directory. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the onPremisesLastSyncDateTime property.
         */
        set: function (value) {
            this._onPremisesLastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "onPremisesSyncEnabled", {
        /**
         * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
         * @returns a boolean
         */
        get: function () {
            return this._onPremisesSyncEnabled;
        },
        /**
         * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; Nullable. null if this object has never been synced from an on-premises directory (default).
         * @param value Value to set for the onPremisesSyncEnabled property.
         */
        set: function (value) {
            this._onPremisesSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "postalCode", {
        /**
         * Gets the postalCode property value. Postal code of the address for the organization.
         * @returns a string
         */
        get: function () {
            return this._postalCode;
        },
        /**
         * Sets the postalCode property value. Postal code of the address for the organization.
         * @param value Value to set for the postalCode property.
         */
        set: function (value) {
            this._postalCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "preferredLanguage", {
        /**
         * Gets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
         * @returns a string
         */
        get: function () {
            return this._preferredLanguage;
        },
        /**
         * Sets the preferredLanguage property value. The preferred language for the organization. Should follow ISO 639-1 Code; for example en.
         * @param value Value to set for the preferredLanguage property.
         */
        set: function (value) {
            this._preferredLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "privacyProfile", {
        /**
         * Gets the privacyProfile property value. The privacy profile of an organization.
         * @returns a privacyProfile
         */
        get: function () {
            return this._privacyProfile;
        },
        /**
         * Sets the privacyProfile property value. The privacy profile of an organization.
         * @param value Value to set for the privacyProfile property.
         */
        set: function (value) {
            this._privacyProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "provisionedPlans", {
        /**
         * Gets the provisionedPlans property value. Not nullable.
         * @returns a provisionedPlan
         */
        get: function () {
            return this._provisionedPlans;
        },
        /**
         * Sets the provisionedPlans property value. Not nullable.
         * @param value Value to set for the provisionedPlans property.
         */
        set: function (value) {
            this._provisionedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "securityComplianceNotificationMails", {
        /**
         * Gets the securityComplianceNotificationMails property value.
         * @returns a string
         */
        get: function () {
            return this._securityComplianceNotificationMails;
        },
        /**
         * Sets the securityComplianceNotificationMails property value.
         * @param value Value to set for the securityComplianceNotificationMails property.
         */
        set: function (value) {
            this._securityComplianceNotificationMails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "securityComplianceNotificationPhones", {
        /**
         * Gets the securityComplianceNotificationPhones property value.
         * @returns a string
         */
        get: function () {
            return this._securityComplianceNotificationPhones;
        },
        /**
         * Sets the securityComplianceNotificationPhones property value.
         * @param value Value to set for the securityComplianceNotificationPhones property.
         */
        set: function (value) {
            this._securityComplianceNotificationPhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "state", {
        /**
         * Gets the state property value. State name of the address for the organization.
         * @returns a string
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. State name of the address for the organization.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "street", {
        /**
         * Gets the street property value. Street name of the address for organization.
         * @returns a string
         */
        get: function () {
            return this._street;
        },
        /**
         * Sets the street property value. Street name of the address for organization.
         * @param value Value to set for the street property.
         */
        set: function (value) {
            this._street = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "technicalNotificationMails", {
        /**
         * Gets the technicalNotificationMails property value. Not nullable.
         * @returns a string
         */
        get: function () {
            return this._technicalNotificationMails;
        },
        /**
         * Sets the technicalNotificationMails property value. Not nullable.
         * @param value Value to set for the technicalNotificationMails property.
         */
        set: function (value) {
            this._technicalNotificationMails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "tenantType", {
        /**
         * Gets the tenantType property value.
         * @returns a string
         */
        get: function () {
            return this._tenantType;
        },
        /**
         * Sets the tenantType property value.
         * @param value Value to set for the tenantType property.
         */
        set: function (value) {
            this._tenantType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Organization.prototype, "verifiedDomains", {
        /**
         * Gets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
         * @returns a verifiedDomain
         */
        get: function () {
            return this._verifiedDomains;
        },
        /**
         * Sets the verifiedDomains property value. The collection of domains associated with this tenant. Not nullable.
         * @param value Value to set for the verifiedDomains property.
         */
        set: function (value) {
            this._verifiedDomains = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Organization.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assignedPlans", function (o, n) { o.assignedPlans = n.getCollectionOfObjectValues(assignedPlan_1.AssignedPlan); }],
            ["branding", function (o, n) { o.branding = n.getObjectValue(organizationalBranding_1.OrganizationalBranding); }],
            ["businessPhones", function (o, n) { o.businessPhones = n.getCollectionOfPrimitiveValues(); }],
            ["certificateBasedAuthConfiguration", function (o, n) { o.certificateBasedAuthConfiguration = n.getCollectionOfObjectValues(certificateBasedAuthConfiguration_1.CertificateBasedAuthConfiguration); }],
            ["city", function (o, n) { o.city = n.getStringValue(); }],
            ["country", function (o, n) { o.country = n.getStringValue(); }],
            ["countryLetterCode", function (o, n) { o.countryLetterCode = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["marketingNotificationEmails", function (o, n) { o.marketingNotificationEmails = n.getCollectionOfPrimitiveValues(); }],
            ["mobileDeviceManagementAuthority", function (o, n) { o.mobileDeviceManagementAuthority = n.getObjectValue(MdmAuthority); }],
            ["onPremisesLastSyncDateTime", function (o, n) { o.onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesSyncEnabled", function (o, n) { o.onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["postalCode", function (o, n) { o.postalCode = n.getStringValue(); }],
            ["preferredLanguage", function (o, n) { o.preferredLanguage = n.getStringValue(); }],
            ["privacyProfile", function (o, n) { o.privacyProfile = n.getObjectValue(PrivacyProfile); }],
            ["provisionedPlans", function (o, n) { o.provisionedPlans = n.getCollectionOfObjectValues(provisionedPlan_1.ProvisionedPlan); }],
            ["securityComplianceNotificationMails", function (o, n) { o.securityComplianceNotificationMails = n.getCollectionOfPrimitiveValues(); }],
            ["securityComplianceNotificationPhones", function (o, n) { o.securityComplianceNotificationPhones = n.getCollectionOfPrimitiveValues(); }],
            ["state", function (o, n) { o.state = n.getStringValue(); }],
            ["street", function (o, n) { o.street = n.getStringValue(); }],
            ["technicalNotificationMails", function (o, n) { o.technicalNotificationMails = n.getCollectionOfPrimitiveValues(); }],
            ["tenantType", function (o, n) { o.tenantType = n.getStringValue(); }],
            ["verifiedDomains", function (o, n) { o.verifiedDomains = n.getCollectionOfObjectValues(verifiedDomain_1.VerifiedDomain); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Organization.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("assignedPlans", this.assignedPlans);
        writer.writeObjectValue("branding", this.branding);
        writer.writeCollectionOfPrimitiveValues("businessPhones", this.businessPhones);
        writer.writeCollectionOfObjectValues("certificateBasedAuthConfiguration", this.certificateBasedAuthConfiguration);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("country", this.country);
        writer.writeStringValue("countryLetterCode", this.countryLetterCode);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeCollectionOfPrimitiveValues("marketingNotificationEmails", this.marketingNotificationEmails);
        writer.writeObjectValue("mobileDeviceManagementAuthority", this.mobileDeviceManagementAuthority);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeObjectValue("privacyProfile", this.privacyProfile);
        writer.writeCollectionOfObjectValues("provisionedPlans", this.provisionedPlans);
        writer.writeCollectionOfPrimitiveValues("securityComplianceNotificationMails", this.securityComplianceNotificationMails);
        writer.writeCollectionOfPrimitiveValues("securityComplianceNotificationPhones", this.securityComplianceNotificationPhones);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("street", this.street);
        writer.writeCollectionOfPrimitiveValues("technicalNotificationMails", this.technicalNotificationMails);
        writer.writeStringValue("tenantType", this.tenantType);
        writer.writeCollectionOfObjectValues("verifiedDomains", this.verifiedDomains);
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
    ;
    return Organization;
}(directoryObject_1.DirectoryObject));
exports.Organization = Organization;
