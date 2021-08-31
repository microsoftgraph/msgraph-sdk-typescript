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
exports.EducationUser = void 0;
var assignedLicense_1 = require("../assignedLicense");
var assignedPlan_1 = require("../assignedPlan");
var entity_1 = require("../entity");
var identitySet_1 = require("../identitySet");
var provisionedPlan_1 = require("../provisionedPlan");
var user_1 = require("../user");
var educationClass_1 = require("./educationClass");
var educationRubric_1 = require("./educationRubric");
var educationSchool_1 = require("./educationSchool");
var EducationUser = /** @class */ (function (_super) {
    __extends(EducationUser, _super);
    /**
     * Instantiates a new educationUser and sets the default values.
     */
    function EducationUser() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(EducationUser.prototype, "accountEnabled", {
        /**
         * Gets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter.
         * @returns a boolean
         */
        get: function () {
            return this._accountEnabled;
        },
        /**
         * Sets the accountEnabled property value. True if the account is enabled; otherwise, false. This property is required when a user is created. Supports /$filter.
         * @param value Value to set for the accountEnabled property.
         */
        set: function (value) {
            this._accountEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "assignedLicenses", {
        /**
         * Gets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
         * @returns a assignedLicense
         */
        get: function () {
            return this._assignedLicenses;
        },
        /**
         * Sets the assignedLicenses property value. The licenses that are assigned to the user. Not nullable.
         * @param value Value to set for the assignedLicenses property.
         */
        set: function (value) {
            this._assignedLicenses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "assignedPlans", {
        /**
         * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
         * @returns a assignedPlan
         */
        get: function () {
            return this._assignedPlans;
        },
        /**
         * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.
         * @param value Value to set for the assignedPlans property.
         */
        set: function (value) {
            this._assignedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "businessPhones", {
        /**
         * Gets the businessPhones property value. The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property.
         * @returns a string
         */
        get: function () {
            return this._businessPhones;
        },
        /**
         * Sets the businessPhones property value. The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property.
         * @param value Value to set for the businessPhones property.
         */
        set: function (value) {
            this._businessPhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "classes", {
        /**
         * Gets the classes property value. Classes to which the user belongs. Nullable.
         * @returns a educationClass
         */
        get: function () {
            return this._classes;
        },
        /**
         * Sets the classes property value. Classes to which the user belongs. Nullable.
         * @param value Value to set for the classes property.
         */
        set: function (value) {
            this._classes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "createdBy", {
        /**
         * Gets the createdBy property value. Entity who created the user.
         * @returns a identitySet
         */
        get: function () {
            return this._createdBy;
        },
        /**
         * Sets the createdBy property value. Entity who created the user.
         * @param value Value to set for the createdBy property.
         */
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "department", {
        /**
         * Gets the department property value. The name for the department in which the user works. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._department;
        },
        /**
         * Sets the department property value. The name for the department in which the user works. Supports /$filter.
         * @param value Value to set for the department property.
         */
        set: function (value) {
            this._department = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name displayed in the address book for the user. Supports $filter and $orderby.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name displayed in the address book for the user. Supports $filter and $orderby.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "externalSource", {
        /**
         * Gets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
         * @returns a educationExternalSource
         */
        get: function () {
            return this._externalSource;
        },
        /**
         * Sets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
         * @param value Value to set for the externalSource property.
         */
        set: function (value) {
            this._externalSource = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "externalSourceDetail", {
        /**
         * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @returns a string
         */
        get: function () {
            return this._externalSourceDetail;
        },
        /**
         * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
         * @param value Value to set for the externalSourceDetail property.
         */
        set: function (value) {
            this._externalSourceDetail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "givenName", {
        /**
         * Gets the givenName property value. The given name (first name) of the user. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._givenName;
        },
        /**
         * Sets the givenName property value. The given name (first name) of the user. Supports /$filter.
         * @param value Value to set for the givenName property.
         */
        set: function (value) {
            this._givenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "mail", {
        /**
         * Gets the mail property value. The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._mail;
        },
        /**
         * Sets the mail property value. The SMTP address for the user; for example, 'jeff@contoso.onmicrosoft.com'. Read-Only. Supports /$filter.
         * @param value Value to set for the mail property.
         */
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "mailingAddress", {
        /**
         * Gets the mailingAddress property value. Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources.
         * @returns a physicalAddress
         */
        get: function () {
            return this._mailingAddress;
        },
        /**
         * Sets the mailingAddress property value. Mail address of user. Note: type and postOfficeBox are not supported for educationUser resources.
         * @param value Value to set for the mailingAddress property.
         */
        set: function (value) {
            this._mailingAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "mailNickname", {
        /**
         * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._mailNickname;
        },
        /**
         * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Supports /$filter.
         * @param value Value to set for the mailNickname property.
         */
        set: function (value) {
            this._mailNickname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "middleName", {
        /**
         * Gets the middleName property value. The middle name of user.
         * @returns a string
         */
        get: function () {
            return this._middleName;
        },
        /**
         * Sets the middleName property value. The middle name of user.
         * @param value Value to set for the middleName property.
         */
        set: function (value) {
            this._middleName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "mobilePhone", {
        /**
         * Gets the mobilePhone property value. The primary cellular telephone number for the user.
         * @returns a string
         */
        get: function () {
            return this._mobilePhone;
        },
        /**
         * Sets the mobilePhone property value. The primary cellular telephone number for the user.
         * @param value Value to set for the mobilePhone property.
         */
        set: function (value) {
            this._mobilePhone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "officeLocation", {
        /**
         * Gets the officeLocation property value.
         * @returns a string
         */
        get: function () {
            return this._officeLocation;
        },
        /**
         * Sets the officeLocation property value.
         * @param value Value to set for the officeLocation property.
         */
        set: function (value) {
            this._officeLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "onPremisesInfo", {
        /**
         * Gets the onPremisesInfo property value. Additional information used to associate the AAD user with it's Active Directory counterpart.
         * @returns a educationOnPremisesInfo
         */
        get: function () {
            return this._onPremisesInfo;
        },
        /**
         * Sets the onPremisesInfo property value. Additional information used to associate the AAD user with it's Active Directory counterpart.
         * @param value Value to set for the onPremisesInfo property.
         */
        set: function (value) {
            this._onPremisesInfo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "passwordPolicies", {
        /**
         * Gets the passwordPolicies property value. Specifies password policies for the user. See standard [user] resource for additional details.
         * @returns a string
         */
        get: function () {
            return this._passwordPolicies;
        },
        /**
         * Sets the passwordPolicies property value. Specifies password policies for the user. See standard [user] resource for additional details.
         * @param value Value to set for the passwordPolicies property.
         */
        set: function (value) {
            this._passwordPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "passwordProfile", {
        /**
         * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details.
         * @returns a passwordProfile
         */
        get: function () {
            return this._passwordProfile;
        },
        /**
         * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. See standard [user] resource for additional details.
         * @param value Value to set for the passwordProfile property.
         */
        set: function (value) {
            this._passwordProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "preferredLanguage", {
        /**
         * Gets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
         * @returns a string
         */
        get: function () {
            return this._preferredLanguage;
        },
        /**
         * Sets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example, 'en-US'.
         * @param value Value to set for the preferredLanguage property.
         */
        set: function (value) {
            this._preferredLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "primaryRole", {
        /**
         * Gets the primaryRole property value. Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter.
         * @returns a educationUserRole
         */
        get: function () {
            return this._primaryRole;
        },
        /**
         * Sets the primaryRole property value. Default role for a user. The user's role might be different in an individual class. Possible values are: student, teacher, faculty. Supports /$filter.
         * @param value Value to set for the primaryRole property.
         */
        set: function (value) {
            this._primaryRole = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "provisionedPlans", {
        /**
         * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
         * @returns a provisionedPlan
         */
        get: function () {
            return this._provisionedPlans;
        },
        /**
         * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable.
         * @param value Value to set for the provisionedPlans property.
         */
        set: function (value) {
            this._provisionedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "refreshTokensValidFromDateTime", {
        /**
         * Gets the refreshTokensValidFromDateTime property value.
         * @returns a Date
         */
        get: function () {
            return this._refreshTokensValidFromDateTime;
        },
        /**
         * Sets the refreshTokensValidFromDateTime property value.
         * @param value Value to set for the refreshTokensValidFromDateTime property.
         */
        set: function (value) {
            this._refreshTokensValidFromDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "residenceAddress", {
        /**
         * Gets the residenceAddress property value. Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources.
         * @returns a physicalAddress
         */
        get: function () {
            return this._residenceAddress;
        },
        /**
         * Sets the residenceAddress property value. Address where user lives. Note: type and postOfficeBox are not supported for educationUser resources.
         * @param value Value to set for the residenceAddress property.
         */
        set: function (value) {
            this._residenceAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "rubrics", {
        /**
         * Gets the rubrics property value.
         * @returns a educationRubric
         */
        get: function () {
            return this._rubrics;
        },
        /**
         * Sets the rubrics property value.
         * @param value Value to set for the rubrics property.
         */
        set: function (value) {
            this._rubrics = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "schools", {
        /**
         * Gets the schools property value. Schools to which the user belongs. Nullable.
         * @returns a educationSchool
         */
        get: function () {
            return this._schools;
        },
        /**
         * Sets the schools property value. Schools to which the user belongs. Nullable.
         * @param value Value to set for the schools property.
         */
        set: function (value) {
            this._schools = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "showInAddressList", {
        /**
         * Gets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
         * @returns a boolean
         */
        get: function () {
            return this._showInAddressList;
        },
        /**
         * Sets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
         * @param value Value to set for the showInAddressList property.
         */
        set: function (value) {
            this._showInAddressList = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "student", {
        /**
         * Gets the student property value. If the primary role is student, this block will contain student specific data.
         * @returns a educationStudent
         */
        get: function () {
            return this._student;
        },
        /**
         * Sets the student property value. If the primary role is student, this block will contain student specific data.
         * @param value Value to set for the student property.
         */
        set: function (value) {
            this._student = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "surname", {
        /**
         * Gets the surname property value. The user's surname (family name or last name). Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._surname;
        },
        /**
         * Sets the surname property value. The user's surname (family name or last name). Supports /$filter.
         * @param value Value to set for the surname property.
         */
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "taughtClasses", {
        /**
         * Gets the taughtClasses property value. Classes for which the user is a teacher.
         * @returns a educationClass
         */
        get: function () {
            return this._taughtClasses;
        },
        /**
         * Sets the taughtClasses property value. Classes for which the user is a teacher.
         * @param value Value to set for the taughtClasses property.
         */
        set: function (value) {
            this._taughtClasses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "teacher", {
        /**
         * Gets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
         * @returns a educationTeacher
         */
        get: function () {
            return this._teacher;
        },
        /**
         * Sets the teacher property value. If the primary role is teacher, this block will contain teacher specific data.
         * @param value Value to set for the teacher property.
         */
        set: function (value) {
            this._teacher = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "usageLocation", {
        /**
         * Gets the usageLocation property value. A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._usageLocation;
        },
        /**
         * Sets the usageLocation property value. A two-letter country code ([ISO 3166 Alpha-2]). Required for users who will be assigned licenses. Not nullable. Supports /$filter.
         * @param value Value to set for the usageLocation property.
         */
        set: function (value) {
            this._usageLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "user", {
        /**
         * Gets the user property value. The directory user corresponding to this user.
         * @returns a user
         */
        get: function () {
            return this._user;
        },
        /**
         * Sets the user property value. The directory user corresponding to this user.
         * @param value Value to set for the user property.
         */
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The user principal name (UPN) for the user. Supports $filter and $orderby. See standard [user] resource for additional details.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EducationUser.prototype, "userType", {
        /**
         * Gets the userType property value. A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter.
         * @returns a string
         */
        get: function () {
            return this._userType;
        },
        /**
         * Sets the userType property value. A string value that can be used to classify user types in your directory, such as 'Member' and 'Guest'. Supports /$filter.
         * @param value Value to set for the userType property.
         */
        set: function (value) {
            this._userType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    EducationUser.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["accountEnabled", function (o, n) { o.accountEnabled = n.getBooleanValue(); }],
            ["assignedLicenses", function (o, n) { o.assignedLicenses = n.getCollectionOfObjectValues(assignedLicense_1.AssignedLicense); }],
            ["assignedPlans", function (o, n) { o.assignedPlans = n.getCollectionOfObjectValues(assignedPlan_1.AssignedPlan); }],
            ["businessPhones", function (o, n) { o.businessPhones = n.getCollectionOfPrimitiveValues(); }],
            ["classes", function (o, n) { o.classes = n.getCollectionOfObjectValues(educationClass_1.EducationClass); }],
            ["createdBy", function (o, n) { o.createdBy = n.getObjectValue(identitySet_1.IdentitySet); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["externalSource", function (o, n) { o.externalSource = n.getObjectValue(EducationExternalSource); }],
            ["externalSourceDetail", function (o, n) { o.externalSourceDetail = n.getStringValue(); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["mail", function (o, n) { o.mail = n.getStringValue(); }],
            ["mailingAddress", function (o, n) { o.mailingAddress = n.getObjectValue(PhysicalAddress); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["middleName", function (o, n) { o.middleName = n.getStringValue(); }],
            ["mobilePhone", function (o, n) { o.mobilePhone = n.getStringValue(); }],
            ["officeLocation", function (o, n) { o.officeLocation = n.getStringValue(); }],
            ["onPremisesInfo", function (o, n) { o.onPremisesInfo = n.getObjectValue(EducationOnPremisesInfo); }],
            ["passwordPolicies", function (o, n) { o.passwordPolicies = n.getStringValue(); }],
            ["passwordProfile", function (o, n) { o.passwordProfile = n.getObjectValue(PasswordProfile); }],
            ["preferredLanguage", function (o, n) { o.preferredLanguage = n.getStringValue(); }],
            ["primaryRole", function (o, n) { o.primaryRole = n.getObjectValue(EducationUserRole); }],
            ["provisionedPlans", function (o, n) { o.provisionedPlans = n.getCollectionOfObjectValues(provisionedPlan_1.ProvisionedPlan); }],
            ["refreshTokensValidFromDateTime", function (o, n) { o.refreshTokensValidFromDateTime = n.getDateValue(); }],
            ["residenceAddress", function (o, n) { o.residenceAddress = n.getObjectValue(PhysicalAddress); }],
            ["rubrics", function (o, n) { o.rubrics = n.getCollectionOfObjectValues(educationRubric_1.EducationRubric); }],
            ["schools", function (o, n) { o.schools = n.getCollectionOfObjectValues(educationSchool_1.EducationSchool); }],
            ["showInAddressList", function (o, n) { o.showInAddressList = n.getBooleanValue(); }],
            ["student", function (o, n) { o.student = n.getObjectValue(EducationStudent); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["taughtClasses", function (o, n) { o.taughtClasses = n.getCollectionOfObjectValues(educationClass_1.EducationClass); }],
            ["teacher", function (o, n) { o.teacher = n.getObjectValue(EducationTeacher); }],
            ["usageLocation", function (o, n) { o.usageLocation = n.getStringValue(); }],
            ["user", function (o, n) { o.user = n.getObjectValue(user_1.User); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],
            ["userType", function (o, n) { o.userType = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    EducationUser.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues("assignedLicenses", this.assignedLicenses);
        writer.writeCollectionOfObjectValues("assignedPlans", this.assignedPlans);
        writer.writeCollectionOfPrimitiveValues("businessPhones", this.businessPhones);
        writer.writeCollectionOfObjectValues("classes", this.classes);
        writer.writeObjectValue("createdBy", this.createdBy);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeStringValue("mail", this.mail);
        writer.writeObjectValue("mailingAddress", this.mailingAddress);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeStringValue("middleName", this.middleName);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue("onPremisesInfo", this.onPremisesInfo);
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        writer.writeObjectValue("passwordProfile", this.passwordProfile);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeObjectValue("primaryRole", this.primaryRole);
        writer.writeCollectionOfObjectValues("provisionedPlans", this.provisionedPlans);
        writer.writeDateValue("refreshTokensValidFromDateTime", this.refreshTokensValidFromDateTime);
        writer.writeObjectValue("residenceAddress", this.residenceAddress);
        writer.writeCollectionOfObjectValues("rubrics", this.rubrics);
        writer.writeCollectionOfObjectValues("schools", this.schools);
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        writer.writeObjectValue("student", this.student);
        writer.writeStringValue("surname", this.surname);
        writer.writeCollectionOfObjectValues("taughtClasses", this.taughtClasses);
        writer.writeObjectValue("teacher", this.teacher);
        writer.writeStringValue("usageLocation", this.usageLocation);
        writer.writeObjectValue("user", this.user);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        writer.writeStringValue("userType", this.userType);
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
    return EducationUser;
}(entity_1.Entity));
exports.EducationUser = EducationUser;
