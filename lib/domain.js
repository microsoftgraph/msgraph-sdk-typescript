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
exports.Domain = void 0;
var directoryObject_1 = require("./directoryObject");
var domainDnsRecord_1 = require("./domainDnsRecord");
var entity_1 = require("./entity");
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    /**
     * Instantiates a new domain and sets the default values.
     */
    function Domain() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Domain.prototype, "authenticationType", {
        /**
         * Gets the authenticationType property value. Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable.
         * @returns a string
         */
        get: function () {
            return this._authenticationType;
        },
        /**
         * Sets the authenticationType property value. Indicates the configured authentication type for the domain. The value is either Managed or Federated. Managed indicates a cloud managed domain where Azure AD performs user authentication. Federated indicates authentication is federated with an identity provider such as the tenant's on-premises Active Directory via Active Directory Federation Services. This property is read-only and is not nullable.
         * @param value Value to set for the authenticationType property.
         */
        set: function (value) {
            this._authenticationType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "availabilityStatus", {
        /**
         * Gets the availabilityStatus property value. This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
         * @returns a string
         */
        get: function () {
            return this._availabilityStatus;
        },
        /**
         * Sets the availabilityStatus property value. This property is always null except when the verify action is used. When the verify action is used, a domain entity is returned in the response. The availabilityStatus property of the domain entity in the response is either AvailableImmediately or EmailVerifiedDomainTakeoverScheduled.
         * @param value Value to set for the availabilityStatus property.
         */
        set: function (value) {
            this._availabilityStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "domainNameReferences", {
        /**
         * Gets the domainNameReferences property value. Read-only, Nullable
         * @returns a directoryObject
         */
        get: function () {
            return this._domainNameReferences;
        },
        /**
         * Sets the domainNameReferences property value. Read-only, Nullable
         * @param value Value to set for the domainNameReferences property.
         */
        set: function (value) {
            this._domainNameReferences = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "isAdminManaged", {
        /**
         * Gets the isAdminManaged property value. The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable
         * @returns a boolean
         */
        get: function () {
            return this._isAdminManaged;
        },
        /**
         * Sets the isAdminManaged property value. The value of the property is false if the DNS record management of the domain has been delegated to Microsoft 365. Otherwise, the value is true. Not nullable
         * @param value Value to set for the isAdminManaged property.
         */
        set: function (value) {
            this._isAdminManaged = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "isDefault", {
        /**
         * Gets the isDefault property value. true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable
         * @returns a boolean
         */
        get: function () {
            return this._isDefault;
        },
        /**
         * Sets the isDefault property value. true if this is the default domain that is used for user creation. There is only one default domain per company. Not nullable
         * @param value Value to set for the isDefault property.
         */
        set: function (value) {
            this._isDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "isInitial", {
        /**
         * Gets the isInitial property value. true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable
         * @returns a boolean
         */
        get: function () {
            return this._isInitial;
        },
        /**
         * Sets the isInitial property value. true if this is the initial domain created by Microsoft Online Services (companyname.onmicrosoft.com). There is only one initial domain per company. Not nullable
         * @param value Value to set for the isInitial property.
         */
        set: function (value) {
            this._isInitial = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "isRoot", {
        /**
         * Gets the isRoot property value. true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
         * @returns a boolean
         */
        get: function () {
            return this._isRoot;
        },
        /**
         * Sets the isRoot property value. true if the domain is a verified root domain. Otherwise, false if the domain is a subdomain or unverified. Not nullable
         * @param value Value to set for the isRoot property.
         */
        set: function (value) {
            this._isRoot = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "isVerified", {
        /**
         * Gets the isVerified property value. true if the domain has completed domain ownership verification. Not nullable
         * @returns a boolean
         */
        get: function () {
            return this._isVerified;
        },
        /**
         * Sets the isVerified property value. true if the domain has completed domain ownership verification. Not nullable
         * @param value Value to set for the isVerified property.
         */
        set: function (value) {
            this._isVerified = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "manufacturer", {
        /**
         * Gets the manufacturer property value.
         * @returns a string
         */
        get: function () {
            return this._manufacturer;
        },
        /**
         * Sets the manufacturer property value.
         * @param value Value to set for the manufacturer property.
         */
        set: function (value) {
            this._manufacturer = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "model", {
        /**
         * Gets the model property value.
         * @returns a string
         */
        get: function () {
            return this._model;
        },
        /**
         * Sets the model property value.
         * @param value Value to set for the model property.
         */
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "passwordNotificationWindowInDays", {
        /**
         * Gets the passwordNotificationWindowInDays property value. Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used.
         * @returns a integer
         */
        get: function () {
            return this._passwordNotificationWindowInDays;
        },
        /**
         * Sets the passwordNotificationWindowInDays property value. Specifies the number of days before a user receives notification that their password will expire. If the property is not set, a default value of 14 days will be used.
         * @param value Value to set for the passwordNotificationWindowInDays property.
         */
        set: function (value) {
            this._passwordNotificationWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "passwordValidityPeriodInDays", {
        /**
         * Gets the passwordValidityPeriodInDays property value. Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used.
         * @returns a integer
         */
        get: function () {
            return this._passwordValidityPeriodInDays;
        },
        /**
         * Sets the passwordValidityPeriodInDays property value. Specifies the length of time that a password is valid before it must be changed. If the property is not set, a default value of 90 days will be used.
         * @param value Value to set for the passwordValidityPeriodInDays property.
         */
        set: function (value) {
            this._passwordValidityPeriodInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "serviceConfigurationRecords", {
        /**
         * Gets the serviceConfigurationRecords property value. DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable
         * @returns a domainDnsRecord
         */
        get: function () {
            return this._serviceConfigurationRecords;
        },
        /**
         * Sets the serviceConfigurationRecords property value. DNS records the customer adds to the DNS zone file of the domain before the domain can be used by Microsoft Online services. Read-only, Nullable
         * @param value Value to set for the serviceConfigurationRecords property.
         */
        set: function (value) {
            this._serviceConfigurationRecords = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "state", {
        /**
         * Gets the state property value. Status of asynchronous operations scheduled for the domain.
         * @returns a domainState
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. Status of asynchronous operations scheduled for the domain.
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "supportedServices", {
        /**
         * Gets the supportedServices property value. The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable
         * @returns a string
         */
        get: function () {
            return this._supportedServices;
        },
        /**
         * Sets the supportedServices property value. The capabilities assigned to the domain. Can include 0, 1 or more of following values: Email, Sharepoint, EmailInternalRelayOnly, OfficeCommunicationsOnline,SharePointDefaultDomain, FullRedelegation, SharePointPublic, OrgIdAuthentication, Yammer, Intune. The values which you can add/remove using Graph API include: Email, OfficeCommunicationsOnline, Yammer. Not nullable
         * @param value Value to set for the supportedServices property.
         */
        set: function (value) {
            this._supportedServices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Domain.prototype, "verificationDnsRecords", {
        /**
         * Gets the verificationDnsRecords property value. DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable
         * @returns a domainDnsRecord
         */
        get: function () {
            return this._verificationDnsRecords;
        },
        /**
         * Sets the verificationDnsRecords property value. DNS records that the customer adds to the DNS zone file of the domain before the customer can complete domain ownership verification with Azure AD. Read-only, Nullable
         * @param value Value to set for the verificationDnsRecords property.
         */
        set: function (value) {
            this._verificationDnsRecords = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Domain.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["authenticationType", function (o, n) { o.authenticationType = n.getStringValue(); }],
            ["availabilityStatus", function (o, n) { o.availabilityStatus = n.getStringValue(); }],
            ["domainNameReferences", function (o, n) { o.domainNameReferences = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["isAdminManaged", function (o, n) { o.isAdminManaged = n.getBooleanValue(); }],
            ["isDefault", function (o, n) { o.isDefault = n.getBooleanValue(); }],
            ["isInitial", function (o, n) { o.isInitial = n.getBooleanValue(); }],
            ["isRoot", function (o, n) { o.isRoot = n.getBooleanValue(); }],
            ["isVerified", function (o, n) { o.isVerified = n.getBooleanValue(); }],
            ["manufacturer", function (o, n) { o.manufacturer = n.getStringValue(); }],
            ["model", function (o, n) { o.model = n.getStringValue(); }],
            ["passwordNotificationWindowInDays", function (o, n) { o.passwordNotificationWindowInDays = n.getNumberValue(); }],
            ["passwordValidityPeriodInDays", function (o, n) { o.passwordValidityPeriodInDays = n.getNumberValue(); }],
            ["serviceConfigurationRecords", function (o, n) { o.serviceConfigurationRecords = n.getCollectionOfObjectValues(domainDnsRecord_1.DomainDnsRecord); }],
            ["state", function (o, n) { o.state = n.getObjectValue(DomainState); }],
            ["supportedServices", function (o, n) { o.supportedServices = n.getCollectionOfPrimitiveValues(); }],
            ["verificationDnsRecords", function (o, n) { o.verificationDnsRecords = n.getCollectionOfObjectValues(domainDnsRecord_1.DomainDnsRecord); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Domain.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("authenticationType", this.authenticationType);
        writer.writeStringValue("availabilityStatus", this.availabilityStatus);
        writer.writeCollectionOfObjectValues("domainNameReferences", this.domainNameReferences);
        writer.writeBooleanValue("isAdminManaged", this.isAdminManaged);
        writer.writeBooleanValue("isDefault", this.isDefault);
        writer.writeBooleanValue("isInitial", this.isInitial);
        writer.writeBooleanValue("isRoot", this.isRoot);
        writer.writeBooleanValue("isVerified", this.isVerified);
        writer.writeStringValue("manufacturer", this.manufacturer);
        writer.writeStringValue("model", this.model);
        writer.writeNumberValue("passwordNotificationWindowInDays", this.passwordNotificationWindowInDays);
        writer.writeNumberValue("passwordValidityPeriodInDays", this.passwordValidityPeriodInDays);
        writer.writeCollectionOfObjectValues("serviceConfigurationRecords", this.serviceConfigurationRecords);
        writer.writeObjectValue("state", this.state);
        writer.writeCollectionOfPrimitiveValues("supportedServices", this.supportedServices);
        writer.writeCollectionOfObjectValues("verificationDnsRecords", this.verificationDnsRecords);
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
    return Domain;
}(entity_1.Entity));
exports.Domain = Domain;
