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
exports.Contact = void 0;
var extension_1 = require("./extension");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var outlookItem_1 = require("./outlookItem");
var profilePhoto_1 = require("./profilePhoto");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    /**
     * Instantiates a new contact and sets the default values.
     */
    function Contact() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Contact.prototype, "assistantName", {
        /**
         * Gets the assistantName property value. The name of the contact's assistant.
         * @returns a string
         */
        get: function () {
            return this._assistantName;
        },
        /**
         * Sets the assistantName property value. The name of the contact's assistant.
         * @param value Value to set for the assistantName property.
         */
        set: function (value) {
            this._assistantName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "birthday", {
        /**
         * Gets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._birthday;
        },
        /**
         * Sets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the birthday property.
         */
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "businessAddress", {
        /**
         * Gets the businessAddress property value. The contact's business address.
         * @returns a physicalAddress
         */
        get: function () {
            return this._businessAddress;
        },
        /**
         * Sets the businessAddress property value. The contact's business address.
         * @param value Value to set for the businessAddress property.
         */
        set: function (value) {
            this._businessAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "businessHomePage", {
        /**
         * Gets the businessHomePage property value. The business home page of the contact.
         * @returns a string
         */
        get: function () {
            return this._businessHomePage;
        },
        /**
         * Sets the businessHomePage property value. The business home page of the contact.
         * @param value Value to set for the businessHomePage property.
         */
        set: function (value) {
            this._businessHomePage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "businessPhones", {
        /**
         * Gets the businessPhones property value. The contact's business phone numbers.
         * @returns a string
         */
        get: function () {
            return this._businessPhones;
        },
        /**
         * Sets the businessPhones property value. The contact's business phone numbers.
         * @param value Value to set for the businessPhones property.
         */
        set: function (value) {
            this._businessPhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "children", {
        /**
         * Gets the children property value. The names of the contact's children.
         * @returns a string
         */
        get: function () {
            return this._children;
        },
        /**
         * Sets the children property value. The names of the contact's children.
         * @param value Value to set for the children property.
         */
        set: function (value) {
            this._children = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "companyName", {
        /**
         * Gets the companyName property value. The name of the contact's company.
         * @returns a string
         */
        get: function () {
            return this._companyName;
        },
        /**
         * Sets the companyName property value. The name of the contact's company.
         * @param value Value to set for the companyName property.
         */
        set: function (value) {
            this._companyName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "department", {
        /**
         * Gets the department property value. The contact's department.
         * @returns a string
         */
        get: function () {
            return this._department;
        },
        /**
         * Sets the department property value. The contact's department.
         * @param value Value to set for the department property.
         */
        set: function (value) {
            this._department = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "displayName", {
        /**
         * Gets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "emailAddresses", {
        /**
         * Gets the emailAddresses property value. The contact's email addresses.
         * @returns a emailAddress
         */
        get: function () {
            return this._emailAddresses;
        },
        /**
         * Sets the emailAddresses property value. The contact's email addresses.
         * @param value Value to set for the emailAddresses property.
         */
        set: function (value) {
            this._emailAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the contact. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the contact. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "fileAs", {
        /**
         * Gets the fileAs property value. The name the contact is filed under.
         * @returns a string
         */
        get: function () {
            return this._fileAs;
        },
        /**
         * Sets the fileAs property value. The name the contact is filed under.
         * @param value Value to set for the fileAs property.
         */
        set: function (value) {
            this._fileAs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "generation", {
        /**
         * Gets the generation property value. The contact's generation.
         * @returns a string
         */
        get: function () {
            return this._generation;
        },
        /**
         * Sets the generation property value. The contact's generation.
         * @param value Value to set for the generation property.
         */
        set: function (value) {
            this._generation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "givenName", {
        /**
         * Gets the givenName property value. The contact's given name.
         * @returns a string
         */
        get: function () {
            return this._givenName;
        },
        /**
         * Sets the givenName property value. The contact's given name.
         * @param value Value to set for the givenName property.
         */
        set: function (value) {
            this._givenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "homeAddress", {
        /**
         * Gets the homeAddress property value. The contact's home address.
         * @returns a physicalAddress
         */
        get: function () {
            return this._homeAddress;
        },
        /**
         * Sets the homeAddress property value. The contact's home address.
         * @param value Value to set for the homeAddress property.
         */
        set: function (value) {
            this._homeAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "homePhones", {
        /**
         * Gets the homePhones property value. The contact's home phone numbers.
         * @returns a string
         */
        get: function () {
            return this._homePhones;
        },
        /**
         * Sets the homePhones property value. The contact's home phone numbers.
         * @param value Value to set for the homePhones property.
         */
        set: function (value) {
            this._homePhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "imAddresses", {
        /**
         * Gets the imAddresses property value. The contact's instant messaging (IM) addresses.
         * @returns a string
         */
        get: function () {
            return this._imAddresses;
        },
        /**
         * Sets the imAddresses property value. The contact's instant messaging (IM) addresses.
         * @param value Value to set for the imAddresses property.
         */
        set: function (value) {
            this._imAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "initials", {
        /**
         * Gets the initials property value. The contact's initials.
         * @returns a string
         */
        get: function () {
            return this._initials;
        },
        /**
         * Sets the initials property value. The contact's initials.
         * @param value Value to set for the initials property.
         */
        set: function (value) {
            this._initials = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "jobTitle", {
        /**
         * Gets the jobTitle property value. The contact’s job title.
         * @returns a string
         */
        get: function () {
            return this._jobTitle;
        },
        /**
         * Sets the jobTitle property value. The contact’s job title.
         * @param value Value to set for the jobTitle property.
         */
        set: function (value) {
            this._jobTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "manager", {
        /**
         * Gets the manager property value. The name of the contact's manager.
         * @returns a string
         */
        get: function () {
            return this._manager;
        },
        /**
         * Sets the manager property value. The name of the contact's manager.
         * @param value Value to set for the manager property.
         */
        set: function (value) {
            this._manager = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "middleName", {
        /**
         * Gets the middleName property value. The contact's middle name.
         * @returns a string
         */
        get: function () {
            return this._middleName;
        },
        /**
         * Sets the middleName property value. The contact's middle name.
         * @param value Value to set for the middleName property.
         */
        set: function (value) {
            this._middleName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "mobilePhone", {
        /**
         * Gets the mobilePhone property value. The contact's mobile phone number.
         * @returns a string
         */
        get: function () {
            return this._mobilePhone;
        },
        /**
         * Sets the mobilePhone property value. The contact's mobile phone number.
         * @param value Value to set for the mobilePhone property.
         */
        set: function (value) {
            this._mobilePhone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "nickName", {
        /**
         * Gets the nickName property value. The contact's nickname.
         * @returns a string
         */
        get: function () {
            return this._nickName;
        },
        /**
         * Sets the nickName property value. The contact's nickname.
         * @param value Value to set for the nickName property.
         */
        set: function (value) {
            this._nickName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "officeLocation", {
        /**
         * Gets the officeLocation property value. The location of the contact's office.
         * @returns a string
         */
        get: function () {
            return this._officeLocation;
        },
        /**
         * Sets the officeLocation property value. The location of the contact's office.
         * @param value Value to set for the officeLocation property.
         */
        set: function (value) {
            this._officeLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "otherAddress", {
        /**
         * Gets the otherAddress property value. Other addresses for the contact.
         * @returns a physicalAddress
         */
        get: function () {
            return this._otherAddress;
        },
        /**
         * Sets the otherAddress property value. Other addresses for the contact.
         * @param value Value to set for the otherAddress property.
         */
        set: function (value) {
            this._otherAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "parentFolderId", {
        /**
         * Gets the parentFolderId property value. The ID of the contact's parent folder.
         * @returns a string
         */
        get: function () {
            return this._parentFolderId;
        },
        /**
         * Sets the parentFolderId property value. The ID of the contact's parent folder.
         * @param value Value to set for the parentFolderId property.
         */
        set: function (value) {
            this._parentFolderId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "personalNotes", {
        /**
         * Gets the personalNotes property value. The user's notes about the contact.
         * @returns a string
         */
        get: function () {
            return this._personalNotes;
        },
        /**
         * Sets the personalNotes property value. The user's notes about the contact.
         * @param value Value to set for the personalNotes property.
         */
        set: function (value) {
            this._personalNotes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "photo", {
        /**
         * Gets the photo property value. Optional contact picture. You can get or set a photo for a contact.
         * @returns a profilePhoto
         */
        get: function () {
            return this._photo;
        },
        /**
         * Sets the photo property value. Optional contact picture. You can get or set a photo for a contact.
         * @param value Value to set for the photo property.
         */
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "profession", {
        /**
         * Gets the profession property value. The contact's profession.
         * @returns a string
         */
        get: function () {
            return this._profession;
        },
        /**
         * Sets the profession property value. The contact's profession.
         * @param value Value to set for the profession property.
         */
        set: function (value) {
            this._profession = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "spouseName", {
        /**
         * Gets the spouseName property value. The name of the contact's spouse/partner.
         * @returns a string
         */
        get: function () {
            return this._spouseName;
        },
        /**
         * Sets the spouseName property value. The name of the contact's spouse/partner.
         * @param value Value to set for the spouseName property.
         */
        set: function (value) {
            this._spouseName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "surname", {
        /**
         * Gets the surname property value. The contact's surname.
         * @returns a string
         */
        get: function () {
            return this._surname;
        },
        /**
         * Sets the surname property value. The contact's surname.
         * @param value Value to set for the surname property.
         */
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "title", {
        /**
         * Gets the title property value. The contact's title.
         * @returns a string
         */
        get: function () {
            return this._title;
        },
        /**
         * Sets the title property value. The contact's title.
         * @param value Value to set for the title property.
         */
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "yomiCompanyName", {
        /**
         * Gets the yomiCompanyName property value. The phonetic Japanese company name of the contact.
         * @returns a string
         */
        get: function () {
            return this._yomiCompanyName;
        },
        /**
         * Sets the yomiCompanyName property value. The phonetic Japanese company name of the contact.
         * @param value Value to set for the yomiCompanyName property.
         */
        set: function (value) {
            this._yomiCompanyName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "yomiGivenName", {
        /**
         * Gets the yomiGivenName property value. The phonetic Japanese given name (first name) of the contact.
         * @returns a string
         */
        get: function () {
            return this._yomiGivenName;
        },
        /**
         * Sets the yomiGivenName property value. The phonetic Japanese given name (first name) of the contact.
         * @param value Value to set for the yomiGivenName property.
         */
        set: function (value) {
            this._yomiGivenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "yomiSurname", {
        /**
         * Gets the yomiSurname property value. The phonetic Japanese surname (last name)  of the contact.
         * @returns a string
         */
        get: function () {
            return this._yomiSurname;
        },
        /**
         * Sets the yomiSurname property value. The phonetic Japanese surname (last name)  of the contact.
         * @param value Value to set for the yomiSurname property.
         */
        set: function (value) {
            this._yomiSurname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Contact.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["assistantName", function (o, n) { o.assistantName = n.getStringValue(); }],
            ["birthday", function (o, n) { o.birthday = n.getDateValue(); }],
            ["businessAddress", function (o, n) { o.businessAddress = n.getObjectValue(PhysicalAddress); }],
            ["businessHomePage", function (o, n) { o.businessHomePage = n.getStringValue(); }],
            ["businessPhones", function (o, n) { o.businessPhones = n.getCollectionOfPrimitiveValues(); }],
            ["children", function (o, n) { o.children = n.getCollectionOfPrimitiveValues(); }],
            ["companyName", function (o, n) { o.companyName = n.getStringValue(); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["emailAddresses", function (o, n) { o.emailAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["fileAs", function (o, n) { o.fileAs = n.getStringValue(); }],
            ["generation", function (o, n) { o.generation = n.getStringValue(); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["homeAddress", function (o, n) { o.homeAddress = n.getObjectValue(PhysicalAddress); }],
            ["homePhones", function (o, n) { o.homePhones = n.getCollectionOfPrimitiveValues(); }],
            ["imAddresses", function (o, n) { o.imAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["initials", function (o, n) { o.initials = n.getStringValue(); }],
            ["jobTitle", function (o, n) { o.jobTitle = n.getStringValue(); }],
            ["manager", function (o, n) { o.manager = n.getStringValue(); }],
            ["middleName", function (o, n) { o.middleName = n.getStringValue(); }],
            ["mobilePhone", function (o, n) { o.mobilePhone = n.getStringValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["nickName", function (o, n) { o.nickName = n.getStringValue(); }],
            ["officeLocation", function (o, n) { o.officeLocation = n.getStringValue(); }],
            ["otherAddress", function (o, n) { o.otherAddress = n.getObjectValue(PhysicalAddress); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["personalNotes", function (o, n) { o.personalNotes = n.getStringValue(); }],
            ["photo", function (o, n) { o.photo = n.getObjectValue(profilePhoto_1.ProfilePhoto); }],
            ["profession", function (o, n) { o.profession = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["spouseName", function (o, n) { o.spouseName = n.getStringValue(); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["yomiCompanyName", function (o, n) { o.yomiCompanyName = n.getStringValue(); }],
            ["yomiGivenName", function (o, n) { o.yomiGivenName = n.getStringValue(); }],
            ["yomiSurname", function (o, n) { o.yomiSurname = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Contact.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("assistantName", this.assistantName);
        writer.writeDateValue("birthday", this.birthday);
        writer.writeObjectValue("businessAddress", this.businessAddress);
        writer.writeStringValue("businessHomePage", this.businessHomePage);
        writer.writeCollectionOfPrimitiveValues("businessPhones", this.businessPhones);
        writer.writeCollectionOfPrimitiveValues("children", this.children);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfPrimitiveValues("emailAddresses", this.emailAddresses);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeStringValue("fileAs", this.fileAs);
        writer.writeStringValue("generation", this.generation);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeObjectValue("homeAddress", this.homeAddress);
        writer.writeCollectionOfPrimitiveValues("homePhones", this.homePhones);
        writer.writeCollectionOfPrimitiveValues("imAddresses", this.imAddresses);
        writer.writeStringValue("initials", this.initials);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("manager", this.manager);
        writer.writeStringValue("middleName", this.middleName);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("nickName", this.nickName);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue("otherAddress", this.otherAddress);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeStringValue("personalNotes", this.personalNotes);
        writer.writeObjectValue("photo", this.photo);
        writer.writeStringValue("profession", this.profession);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("spouseName", this.spouseName);
        writer.writeStringValue("surname", this.surname);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("yomiCompanyName", this.yomiCompanyName);
        writer.writeStringValue("yomiGivenName", this.yomiGivenName);
        writer.writeStringValue("yomiSurname", this.yomiSurname);
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
    return Contact;
}(outlookItem_1.OutlookItem));
exports.Contact = Contact;
