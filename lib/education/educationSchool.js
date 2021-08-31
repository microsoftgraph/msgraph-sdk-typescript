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
exports.EducationSchool = void 0;
var administrativeUnit_1 = require("../directory/administrativeUnit");
var identitySet_1 = require("../identitySet");
var educationClass_1 = require("./educationClass");
var educationOrganization_1 = require("./educationOrganization");
var educationUser_1 = require("./educationUser");
var EducationSchool = /** @class */ (function (_super) {
    __extends(EducationSchool, _super);
    /**
     * Instantiates a new educationSchool and sets the default values.
     */
    function EducationSchool() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationSchool.prototype, "address", {
        /**
         * Gets the address property value. Address of the school.
         * @returns a physicalAddress
         */
        get: function () {
            return this._address;
        },
        /**
         * Sets the address property value. Address of the school.
         * @param value Value to set for the address property.
         */
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "administrativeUnit", {
        /**
         * Gets the administrativeUnit property value. The underlying administrativeUnit for this school.
         * @returns a administrativeUnit
         */
        get: function () {
            return this._administrativeUnit;
        },
        /**
         * Sets the administrativeUnit property value. The underlying administrativeUnit for this school.
         * @param value Value to set for the administrativeUnit property.
         */
        set: function (value) {
            this._administrativeUnit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "classes", {
        /**
         * Gets the classes property value. Classes taught at the school. Nullable.
         * @returns a educationClass
         */
        get: function () {
            return this._classes;
        },
        /**
         * Sets the classes property value. Classes taught at the school. Nullable.
         * @param value Value to set for the classes property.
         */
        set: function (value) {
            this._classes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Entity who created the school.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Entity who created the school.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "externalId", {
        /**
         * Gets the externalId property value. ID of school in syncing system.
         * @returns a string
         */
        get: function () {
            return this._externalId;
        },
        /**
         * Sets the externalId property value. ID of school in syncing system.
         * @param value Value to set for the externalId property.
         */
        set: function (value) {
            this._externalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "externalPrincipalId", {
        /**
         * Gets the externalPrincipalId property value. ID of principal in syncing system.
         * @returns a string
         */
        get: function () {
            return this._externalPrincipalId;
        },
        /**
         * Sets the externalPrincipalId property value. ID of principal in syncing system.
         * @param value Value to set for the externalPrincipalId property.
         */
        set: function (value) {
            this._externalPrincipalId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "fax", {
        /**
         * Gets the fax property value.
         * @returns a string
         */
        get: function () {
            return this._fax;
        },
        /**
         * Sets the fax property value.
         * @param value Value to set for the fax property.
         */
        set: function (value) {
            this._fax = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "highestGrade", {
        /**
         * Gets the highestGrade property value. Highest grade taught.
         * @returns a string
         */
        get: function () {
            return this._highestGrade;
        },
        /**
         * Sets the highestGrade property value. Highest grade taught.
         * @param value Value to set for the highestGrade property.
         */
        set: function (value) {
            this._highestGrade = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "lowestGrade", {
        /**
         * Gets the lowestGrade property value. Lowest grade taught.
         * @returns a string
         */
        get: function () {
            return this._lowestGrade;
        },
        /**
         * Sets the lowestGrade property value. Lowest grade taught.
         * @param value Value to set for the lowestGrade property.
         */
        set: function (value) {
            this._lowestGrade = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "phone", {
        /**
         * Gets the phone property value. Phone number of school.
         * @returns a string
         */
        get: function () {
            return this._phone;
        },
        /**
         * Sets the phone property value. Phone number of school.
         * @param value Value to set for the phone property.
         */
        set: function (value) {
            this._phone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "principalEmail", {
        /**
         * Gets the principalEmail property value. Email address of the principal.
         * @returns a string
         */
        get: function () {
            return this._principalEmail;
        },
        /**
         * Sets the principalEmail property value. Email address of the principal.
         * @param value Value to set for the principalEmail property.
         */
        set: function (value) {
            this._principalEmail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "principalName", {
        /**
         * Gets the principalName property value. Name of the principal.
         * @returns a string
         */
        get: function () {
            return this._principalName;
        },
        /**
         * Sets the principalName property value. Name of the principal.
         * @param value Value to set for the principalName property.
         */
        set: function (value) {
            this._principalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "schoolNumber", {
        /**
         * Gets the schoolNumber property value. School Number.
         * @returns a string
         */
        get: function () {
            return this._schoolNumber;
        },
        /**
         * Sets the schoolNumber property value. School Number.
         * @param value Value to set for the schoolNumber property.
         */
        set: function (value) {
            this._schoolNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationSchool.prototype, "users", {
        /**
         * Gets the users property value. Users in the school. Nullable.
         * @returns a educationUser
         */
        get: function () {
            return this._users;
        },
        /**
         * Sets the users property value. Users in the school. Nullable.
         * @param value Value to set for the users property.
         */
        set: function (value) {
            this._users = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationSchool.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["address", function (o, n) { o.address = n.getObjectValue(PhysicalAddress); }],
            ["administrativeUnit", function (o, n) { o.administrativeUnit = n.getObjectValue(administrativeUnit_1.AdministrativeUnit); }],
            ["classes", function (o, n) { o.classes = n.getCollectionOfObjectValues(educationClass_1.EducationClass); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],
            ["externalPrincipalId", function (o, n) { o.externalPrincipalId = n.getStringValue(); }],
            ["fax", function (o, n) { o.fax = n.getStringValue(); }],
            ["highestGrade", function (o, n) { o.highestGrade = n.getStringValue(); }],
            ["lowestGrade", function (o, n) { o.lowestGrade = n.getStringValue(); }],
            ["phone", function (o, n) { o.phone = n.getStringValue(); }],
            ["principalEmail", function (o, n) { o.principalEmail = n.getStringValue(); }],
            ["principalName", function (o, n) { o.principalName = n.getStringValue(); }],
            ["schoolNumber", function (o, n) { o.schoolNumber = n.getStringValue(); }],
            ["users", function (o, n) { o.users = n.getCollectionOfObjectValues(educationUser_1.EducationUser); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationSchool.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("address", this.address);
        writer.writeObjectValue("administrativeUnit", this.administrativeUnit);
        writer.writeCollectionOfObjectValues("classes", this.classes);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("externalPrincipalId", this.externalPrincipalId);
        writer.writeStringValue("fax", this.fax);
        writer.writeStringValue("highestGrade", this.highestGrade);
        writer.writeStringValue("lowestGrade", this.lowestGrade);
        writer.writeStringValue("phone", this.phone);
        writer.writeStringValue("principalEmail", this.principalEmail);
        writer.writeStringValue("principalName", this.principalName);
        writer.writeStringValue("schoolNumber", this.schoolNumber);
        writer.writeCollectionOfObjectValues("users", this.users);
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
    return EducationSchool;
}(educationOrganization_1.EducationOrganization));
exports.EducationSchool = EducationSchool;
