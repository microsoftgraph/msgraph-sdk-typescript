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
exports.Person = void 0;
var entity_1 = require("./entity");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    /**
     * Instantiates a new person and sets the default values.
     */
    function Person() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Person.prototype, "birthday", {
        /**
         * Gets the birthday property value. The person's birthday.
         * @returns a string
         */
        get: function () {
            return this._birthday;
        },
        /**
         * Sets the birthday property value. The person's birthday.
         * @param value Value to set for the birthday property.
         */
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "companyName", {
        /**
         * Gets the companyName property value. The name of the person's company.
         * @returns a string
         */
        get: function () {
            return this._companyName;
        },
        /**
         * Sets the companyName property value. The name of the person's company.
         * @param value Value to set for the companyName property.
         */
        set: function (value) {
            this._companyName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "department", {
        /**
         * Gets the department property value. The person's department.
         * @returns a string
         */
        get: function () {
            return this._department;
        },
        /**
         * Sets the department property value. The person's department.
         * @param value Value to set for the department property.
         */
        set: function (value) {
            this._department = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "displayName", {
        /**
         * Gets the displayName property value. The person's display name.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The person's display name.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "givenName", {
        /**
         * Gets the givenName property value. The person's given name.
         * @returns a string
         */
        get: function () {
            return this._givenName;
        },
        /**
         * Sets the givenName property value. The person's given name.
         * @param value Value to set for the givenName property.
         */
        set: function (value) {
            this._givenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "imAddress", {
        /**
         * Gets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
         * @returns a string
         */
        get: function () {
            return this._imAddress;
        },
        /**
         * Sets the imAddress property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) address for the user. Read-only.
         * @param value Value to set for the imAddress property.
         */
        set: function (value) {
            this._imAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "isFavorite", {
        /**
         * Gets the isFavorite property value. true if the user has flagged this person as a favorite.
         * @returns a boolean
         */
        get: function () {
            return this._isFavorite;
        },
        /**
         * Sets the isFavorite property value. true if the user has flagged this person as a favorite.
         * @param value Value to set for the isFavorite property.
         */
        set: function (value) {
            this._isFavorite = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "jobTitle", {
        /**
         * Gets the jobTitle property value. The person's job title.
         * @returns a string
         */
        get: function () {
            return this._jobTitle;
        },
        /**
         * Sets the jobTitle property value. The person's job title.
         * @param value Value to set for the jobTitle property.
         */
        set: function (value) {
            this._jobTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "officeLocation", {
        /**
         * Gets the officeLocation property value. The location of the person's office.
         * @returns a string
         */
        get: function () {
            return this._officeLocation;
        },
        /**
         * Sets the officeLocation property value. The location of the person's office.
         * @param value Value to set for the officeLocation property.
         */
        set: function (value) {
            this._officeLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "personNotes", {
        /**
         * Gets the personNotes property value. Free-form notes that the user has taken about this person.
         * @returns a string
         */
        get: function () {
            return this._personNotes;
        },
        /**
         * Sets the personNotes property value. Free-form notes that the user has taken about this person.
         * @param value Value to set for the personNotes property.
         */
        set: function (value) {
            this._personNotes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "personType", {
        /**
         * Gets the personType property value. The type of person, for example distribution list.
         * @returns a personType
         */
        get: function () {
            return this._personType;
        },
        /**
         * Sets the personType property value. The type of person, for example distribution list.
         * @param value Value to set for the personType property.
         */
        set: function (value) {
            this._personType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "phones", {
        /**
         * Gets the phones property value. The person's phone numbers.
         * @returns a phone
         */
        get: function () {
            return this._phones;
        },
        /**
         * Sets the phones property value. The person's phone numbers.
         * @param value Value to set for the phones property.
         */
        set: function (value) {
            this._phones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "postalAddresses", {
        /**
         * Gets the postalAddresses property value. The person's addresses.
         * @returns a location
         */
        get: function () {
            return this._postalAddresses;
        },
        /**
         * Sets the postalAddresses property value. The person's addresses.
         * @param value Value to set for the postalAddresses property.
         */
        set: function (value) {
            this._postalAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "profession", {
        /**
         * Gets the profession property value. The person's profession.
         * @returns a string
         */
        get: function () {
            return this._profession;
        },
        /**
         * Sets the profession property value. The person's profession.
         * @param value Value to set for the profession property.
         */
        set: function (value) {
            this._profession = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "scoredEmailAddresses", {
        /**
         * Gets the scoredEmailAddresses property value. The person's email addresses.
         * @returns a scoredEmailAddress
         */
        get: function () {
            return this._scoredEmailAddresses;
        },
        /**
         * Sets the scoredEmailAddresses property value. The person's email addresses.
         * @param value Value to set for the scoredEmailAddresses property.
         */
        set: function (value) {
            this._scoredEmailAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "surname", {
        /**
         * Gets the surname property value. The person's surname.
         * @returns a string
         */
        get: function () {
            return this._surname;
        },
        /**
         * Sets the surname property value. The person's surname.
         * @param value Value to set for the surname property.
         */
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "websites", {
        /**
         * Gets the websites property value. The person's websites.
         * @returns a website
         */
        get: function () {
            return this._websites;
        },
        /**
         * Sets the websites property value. The person's websites.
         * @param value Value to set for the websites property.
         */
        set: function (value) {
            this._websites = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "yomiCompany", {
        /**
         * Gets the yomiCompany property value. The phonetic Japanese name of the person's company.
         * @returns a string
         */
        get: function () {
            return this._yomiCompany;
        },
        /**
         * Sets the yomiCompany property value. The phonetic Japanese name of the person's company.
         * @param value Value to set for the yomiCompany property.
         */
        set: function (value) {
            this._yomiCompany = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Person.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["birthday", function (o, n) { o.birthday = n.getStringValue(); }],
            ["companyName", function (o, n) { o.companyName = n.getStringValue(); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["imAddress", function (o, n) { o.imAddress = n.getStringValue(); }],
            ["isFavorite", function (o, n) { o.isFavorite = n.getBooleanValue(); }],
            ["jobTitle", function (o, n) { o.jobTitle = n.getStringValue(); }],
            ["officeLocation", function (o, n) { o.officeLocation = n.getStringValue(); }],
            ["personNotes", function (o, n) { o.personNotes = n.getStringValue(); }],
            ["personType", function (o, n) { o.personType = n.getObjectValue(PersonType); }],
            ["phones", function (o, n) { o.phones = n.getCollectionOfPrimitiveValues(); }],
            ["postalAddresses", function (o, n) { o.postalAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["profession", function (o, n) { o.profession = n.getStringValue(); }],
            ["scoredEmailAddresses", function (o, n) { o.scoredEmailAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],
            ["websites", function (o, n) { o.websites = n.getCollectionOfPrimitiveValues(); }],
            ["yomiCompany", function (o, n) { o.yomiCompany = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Person.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("birthday", this.birthday);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("imAddress", this.imAddress);
        writer.writeBooleanValue("isFavorite", this.isFavorite);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeStringValue("personNotes", this.personNotes);
        writer.writeObjectValue("personType", this.personType);
        writer.writeCollectionOfPrimitiveValues("phones", this.phones);
        writer.writeCollectionOfPrimitiveValues("postalAddresses", this.postalAddresses);
        writer.writeStringValue("profession", this.profession);
        writer.writeCollectionOfPrimitiveValues("scoredEmailAddresses", this.scoredEmailAddresses);
        writer.writeStringValue("surname", this.surname);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeCollectionOfPrimitiveValues("websites", this.websites);
        writer.writeStringValue("yomiCompany", this.yomiCompany);
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
    return Person;
}(entity_1.Entity));
exports.Person = Person;
