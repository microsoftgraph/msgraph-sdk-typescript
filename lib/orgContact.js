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
exports.OrgContact = void 0;
var directoryObject_1 = require("./directoryObject");
var OrgContact = /** @class */ (function (_super) {
    __extends(OrgContact, _super);
    /**
     * Instantiates a new orgContact and sets the default values.
     */
    function OrgContact() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(OrgContact.prototype, "addresses", {
        /**
         * Gets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
         * @returns a physicalOfficeAddress
         */
        get: function () {
            return this._addresses;
        },
        /**
         * Sets the addresses property value. Postal addresses for this organizational contact. For now a contact can only have one physical address.
         * @param value Value to set for the addresses property.
         */
        set: function (value) {
            this._addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "companyName", {
        /**
         * Gets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._companyName;
        },
        /**
         * Sets the companyName property value. Name of the company that this organizational contact belong to. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the companyName property.
         */
        set: function (value) {
            this._companyName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "department", {
        /**
         * Gets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._department;
        },
        /**
         * Sets the department property value. The name for the department in which the contact works. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the department property.
         */
        set: function (value) {
            this._department = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "directReports", {
        /**
         * Gets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._directReports;
        },
        /**
         * Sets the directReports property value. The contact's direct reports. (The users and contacts that have their manager property set to this contact.) Read-only. Nullable. Supports $expand.
         * @param value Value to set for the directReports property.
         */
        set: function (value) {
            this._directReports = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "displayName", {
        /**
         * Gets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Display name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "givenName", {
        /**
         * Gets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._givenName;
        },
        /**
         * Sets the givenName property value. First name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the givenName property.
         */
        set: function (value) {
            this._givenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "jobTitle", {
        /**
         * Gets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._jobTitle;
        },
        /**
         * Sets the jobTitle property value. Job title for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the jobTitle property.
         */
        set: function (value) {
            this._jobTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "mail", {
        /**
         * Gets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mail;
        },
        /**
         * Sets the mail property value. The SMTP address for the contact, for example, 'jeff@contoso.onmicrosoft.com'. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mail property.
         */
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "mailNickname", {
        /**
         * Gets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mailNickname;
        },
        /**
         * Sets the mailNickname property value. Email alias (portion of email address pre-pending the @ symbol) for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mailNickname property.
         */
        set: function (value) {
            this._mailNickname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "manager", {
        /**
         * Gets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._manager;
        },
        /**
         * Sets the manager property value. The user or contact that is this contact's manager. Read-only. Supports $expand.
         * @param value Value to set for the manager property.
         */
        set: function (value) {
            this._manager = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "memberOf", {
        /**
         * Gets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._memberOf;
        },
        /**
         * Sets the memberOf property value. Groups that this contact is a member of. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the memberOf property.
         */
        set: function (value) {
            this._memberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "onPremisesLastSyncDateTime", {
        /**
         * Gets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, NOT, ge, le, in).
         * @returns a Date
         */
        get: function () {
            return this._onPremisesLastSyncDateTime;
        },
        /**
         * Sets the onPremisesLastSyncDateTime property value. Date and time when this organizational contact was last synchronized from on-premises AD. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Supports $filter (eq, ne, NOT, ge, le, in).
         * @param value Value to set for the onPremisesLastSyncDateTime property.
         */
        set: function (value) {
            this._onPremisesLastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "onPremisesProvisioningErrors", {
        /**
         * Gets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, NOT).
         * @returns a onPremisesProvisioningError
         */
        get: function () {
            return this._onPremisesProvisioningErrors;
        },
        /**
         * Sets the onPremisesProvisioningErrors property value. List of any synchronization provisioning errors for this organizational contact. Supports $filter (eq, NOT).
         * @param value Value to set for the onPremisesProvisioningErrors property.
         */
        set: function (value) {
            this._onPremisesProvisioningErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "onPremisesSyncEnabled", {
        /**
         * Gets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).
         * @returns a boolean
         */
        get: function () {
            return this._onPremisesSyncEnabled;
        },
        /**
         * Sets the onPremisesSyncEnabled property value. true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced and now mastered in Exchange; null if this object has never been synced from an on-premises directory (default).
         * @param value Value to set for the onPremisesSyncEnabled property.
         */
        set: function (value) {
            this._onPremisesSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "phones", {
        /**
         * Gets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, NOT, in).
         * @returns a phone
         */
        get: function () {
            return this._phones;
        },
        /**
         * Sets the phones property value. List of phones for this organizational contact. Phone types can be mobile, business, and businessFax. Only one of each type can ever be present in the collection. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the phones property.
         */
        set: function (value) {
            this._phones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "proxyAddresses", {
        /**
         * Gets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._proxyAddresses;
        },
        /**
         * Sets the proxyAddresses property value. For example: 'SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com'. The any operator is required for filter expressions on multi-valued properties. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the proxyAddresses property.
         */
        set: function (value) {
            this._proxyAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "surname", {
        /**
         * Gets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith)
         * @returns a string
         */
        get: function () {
            return this._surname;
        },
        /**
         * Sets the surname property value. Last name for this organizational contact. Supports $filter (eq, ne, NOT, ge, le, in, startsWith)
         * @param value Value to set for the surname property.
         */
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(OrgContact.prototype, "transitiveMemberOf", {
        /**
         * Gets the transitiveMemberOf property value.
         * @returns a directoryObject
         */
        get: function () {
            return this._transitiveMemberOf;
        },
        /**
         * Sets the transitiveMemberOf property value.
         * @param value Value to set for the transitiveMemberOf property.
         */
        set: function (value) {
            this._transitiveMemberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    OrgContact.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["addresses", function (o, n) { o.addresses = n.getCollectionOfPrimitiveValues(); }],
            ["companyName", function (o, n) { o.companyName = n.getStringValue(); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["directReports", function (o, n) { o.directReports = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["jobTitle", function (o, n) { o.jobTitle = n.getStringValue(); }],
            ["mail", function (o, n) { o.mail = n.getStringValue(); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["manager", function (o, n) { o.manager = n.getObjectValue(directoryObject_1.DirectoryObject); }],
            ["memberOf", function (o, n) { o.memberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["onPremisesLastSyncDateTime", function (o, n) { o.onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesProvisioningErrors", function (o, n) { o.onPremisesProvisioningErrors = n.getCollectionOfPrimitiveValues(); }],
            ["onPremisesSyncEnabled", function (o, n) { o.onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["phones", function (o, n) { o.phones = n.getCollectionOfPrimitiveValues(); }],
            ["proxyAddresses", function (o, n) { o.proxyAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["transitiveMemberOf", function (o, n) { o.transitiveMemberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    OrgContact.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("addresses", this.addresses);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeCollectionOfObjectValues("directReports", this.directReports);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("mail", this.mail);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeObjectValue("manager", this.manager);
        writer.writeCollectionOfObjectValues("memberOf", this.memberOf);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeCollectionOfPrimitiveValues("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeCollectionOfPrimitiveValues("phones", this.phones);
        writer.writeCollectionOfPrimitiveValues("proxyAddresses", this.proxyAddresses);
        writer.writeStringValue("surname", this.surname);
        writer.writeCollectionOfObjectValues("transitiveMemberOf", this.transitiveMemberOf);
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
    return OrgContact;
}(directoryObject_1.DirectoryObject));
exports.OrgContact = OrgContact;
