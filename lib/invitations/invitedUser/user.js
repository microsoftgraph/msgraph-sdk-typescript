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
exports.User = void 0;
var agreementAcceptance_1 = require("../../agreementAcceptance");
var appRoleAssignment_1 = require("../../appRoleAssignment");
var assignedLicense_1 = require("../../assignedLicense");
var assignedPlan_1 = require("../../assignedPlan");
var calendar_1 = require("../../calendar");
var calendarGroup_1 = require("../../calendarGroup");
var chat_1 = require("../../chat");
var contact_1 = require("../../contact");
var contactFolder_1 = require("../../contactFolder");
var deviceManagementTroubleshootingEvent_1 = require("../../deviceManagementTroubleshootingEvent");
var directoryObject_1 = require("../../directoryObject");
var drive_1 = require("../../drive/drive");
var event_1 = require("../../event");
var extension_1 = require("../../extension");
var onenote_1 = require("../../groups/onenote/onenote");
var licenseDetails_1 = require("../../licenseDetails");
var mailFolder_1 = require("../../mailFolder");
var managedAppRegistration_1 = require("../../managedAppRegistration");
var managedDevice_1 = require("../../managedDevice");
var authentication_1 = require("../../me/authentication/authentication");
var inferenceClassification_1 = require("../../me/inferenceClassification/inferenceClassification");
var officeGraphInsights_1 = require("../../me/insights/officeGraphInsights");
var outlookUser_1 = require("../../me/outlook/outlookUser");
var plannerUser_1 = require("../../me/planner/plannerUser");
var userSettings_1 = require("../../me/settings/userSettings");
var userTeamwork_1 = require("../../me/teamwork/userTeamwork");
var todo_1 = require("../../me/todo/todo");
var message_1 = require("../../message");
var oAuth2PermissionGrant_1 = require("../../oAuth2PermissionGrant");
var onlineMeeting_1 = require("../../onlineMeeting");
var person_1 = require("../../person");
var presence_1 = require("../../presence");
var profilePhoto_1 = require("../../profilePhoto");
var provisionedPlan_1 = require("../../provisionedPlan");
var scopedRoleMembership_1 = require("../../scopedRoleMembership");
var site_1 = require("../../site");
var team_1 = require("../../team");
var userActivity_1 = require("../../userActivity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    /**
     * Instantiates a new User and sets the default values.
     */
    function User() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(User.prototype, "aboutMe", {
        /**
         * Gets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._aboutMe;
        },
        /**
         * Sets the aboutMe property value. A freeform text entry field for the user to describe themselves. Returned only on $select.
         * @param value Value to set for the aboutMe property.
         */
        set: function (value) {
            this._aboutMe = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "accountEnabled", {
        /**
         * Gets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, NOT, and in).
         * @returns a boolean
         */
        get: function () {
            return this._accountEnabled;
        },
        /**
         * Sets the accountEnabled property value. true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter (eq, ne, NOT, and in).
         * @param value Value to set for the accountEnabled property.
         */
        set: function (value) {
            this._accountEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "activities", {
        /**
         * Gets the activities property value. The user's activities across devices. Read-only. Nullable.
         * @returns a userActivity
         */
        get: function () {
            return this._activities;
        },
        /**
         * Sets the activities property value. The user's activities across devices. Read-only. Nullable.
         * @param value Value to set for the activities property.
         */
        set: function (value) {
            this._activities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "ageGroup", {
        /**
         * Gets the ageGroup property value. Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, NOT, and in).
         * @returns a string
         */
        get: function () {
            return this._ageGroup;
        },
        /**
         * Sets the ageGroup property value. Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, NOT, and in).
         * @param value Value to set for the ageGroup property.
         */
        set: function (value) {
            this._ageGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "agreementAcceptances", {
        /**
         * Gets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
         * @returns a agreementAcceptance
         */
        get: function () {
            return this._agreementAcceptances;
        },
        /**
         * Sets the agreementAcceptances property value. The user's terms of use acceptance statuses. Read-only. Nullable.
         * @param value Value to set for the agreementAcceptances property.
         */
        set: function (value) {
            this._agreementAcceptances = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "appRoleAssignments", {
        /**
         * Gets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
         * @returns a appRoleAssignment
         */
        get: function () {
            return this._appRoleAssignments;
        },
        /**
         * Sets the appRoleAssignments property value. Represents the app roles a user has been granted for an application. Supports $expand.
         * @param value Value to set for the appRoleAssignments property.
         */
        set: function (value) {
            this._appRoleAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "assignedLicenses", {
        /**
         * Gets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq and NOT).
         * @returns a assignedLicense
         */
        get: function () {
            return this._assignedLicenses;
        },
        /**
         * Sets the assignedLicenses property value. The licenses that are assigned to the user, including inherited (group-based) licenses. Not nullable. Supports $filter (eq and NOT).
         * @param value Value to set for the assignedLicenses property.
         */
        set: function (value) {
            this._assignedLicenses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "assignedPlans", {
        /**
         * Gets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and NOT).
         * @returns a assignedPlan
         */
        get: function () {
            return this._assignedPlans;
        },
        /**
         * Sets the assignedPlans property value. The plans that are assigned to the user. Read-only. Not nullable.Supports $filter (eq and NOT).
         * @param value Value to set for the assignedPlans property.
         */
        set: function (value) {
            this._assignedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "authentication", {
        /**
         * Gets the authentication property value.
         * @returns a authentication
         */
        get: function () {
            return this._authentication;
        },
        /**
         * Sets the authentication property value.
         * @param value Value to set for the authentication property.
         */
        set: function (value) {
            this._authentication = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "birthday", {
        /**
         * Gets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select.
         * @returns a Date
         */
        get: function () {
            return this._birthday;
        },
        /**
         * Sets the birthday property value. The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z Returned only on $select.
         * @param value Value to set for the birthday property.
         */
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "businessPhones", {
        /**
         * Gets the businessPhones property value. The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq and NOT).
         * @returns a string
         */
        get: function () {
            return this._businessPhones;
        },
        /**
         * Sets the businessPhones property value. The telephone numbers for the user. Only one number can be set for this property. Read-only for users synced from on-premises directory. Supports $filter (eq and NOT).
         * @param value Value to set for the businessPhones property.
         */
        set: function (value) {
            this._businessPhones = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "calendar", {
        /**
         * Gets the calendar property value. The user's primary calendar. Read-only.
         * @returns a calendar
         */
        get: function () {
            return this._calendar;
        },
        /**
         * Sets the calendar property value. The user's primary calendar. Read-only.
         * @param value Value to set for the calendar property.
         */
        set: function (value) {
            this._calendar = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "calendarGroups", {
        /**
         * Gets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
         * @returns a calendarGroup
         */
        get: function () {
            return this._calendarGroups;
        },
        /**
         * Sets the calendarGroups property value. The user's calendar groups. Read-only. Nullable.
         * @param value Value to set for the calendarGroups property.
         */
        set: function (value) {
            this._calendarGroups = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "calendars", {
        /**
         * Gets the calendars property value. The user's calendars. Read-only. Nullable.
         * @returns a calendar
         */
        get: function () {
            return this._calendars;
        },
        /**
         * Sets the calendars property value. The user's calendars. Read-only. Nullable.
         * @param value Value to set for the calendars property.
         */
        set: function (value) {
            this._calendars = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "calendarView", {
        /**
         * Gets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
         * @returns a event
         */
        get: function () {
            return this._calendarView;
        },
        /**
         * Sets the calendarView property value. The calendar view for the calendar. Read-only. Nullable.
         * @param value Value to set for the calendarView property.
         */
        set: function (value) {
            this._calendarView = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "chats", {
        /**
         * Gets the chats property value.
         * @returns a chat
         */
        get: function () {
            return this._chats;
        },
        /**
         * Sets the chats property value.
         * @param value Value to set for the chats property.
         */
        set: function (value) {
            this._chats = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "city", {
        /**
         * Gets the city property value. The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._city;
        },
        /**
         * Sets the city property value. The city in which the user is located. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the city property.
         */
        set: function (value) {
            this._city = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "companyName", {
        /**
         * Gets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length of the company name is 64 characters.Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._companyName;
        },
        /**
         * Sets the companyName property value. The company name which the user is associated. This property can be useful for describing the company that an external user comes from. The maximum length of the company name is 64 characters.Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the companyName property.
         */
        set: function (value) {
            this._companyName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "consentProvidedForMinor", {
        /**
         * Gets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, granted, denied and notRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, NOT, and in).
         * @returns a string
         */
        get: function () {
            return this._consentProvidedForMinor;
        },
        /**
         * Sets the consentProvidedForMinor property value. Sets whether consent has been obtained for minors. Allowed values: null, granted, denied and notRequired. Refer to the legal age group property definitions for further information. Supports $filter (eq, ne, NOT, and in).
         * @param value Value to set for the consentProvidedForMinor property.
         */
        set: function (value) {
            this._consentProvidedForMinor = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "contactFolders", {
        /**
         * Gets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
         * @returns a contactFolder
         */
        get: function () {
            return this._contactFolders;
        },
        /**
         * Sets the contactFolders property value. The user's contacts folders. Read-only. Nullable.
         * @param value Value to set for the contactFolders property.
         */
        set: function (value) {
            this._contactFolders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "contacts", {
        /**
         * Gets the contacts property value. The user's contacts. Read-only. Nullable.
         * @returns a contact
         */
        get: function () {
            return this._contacts;
        },
        /**
         * Sets the contacts property value. The user's contacts. Read-only. Nullable.
         * @param value Value to set for the contacts property.
         */
        set: function (value) {
            this._contacts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "country", {
        /**
         * Gets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._country;
        },
        /**
         * Sets the country property value. The country/region in which the user is located; for example, US or UK. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the country property.
         */
        set: function (value) {
            this._country = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, NOT , ge, le, and in operators).
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. The date and time the user was created. The value cannot be modified and is automatically populated when the entity is created. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. Property is nullable. A null value indicates that an accurate creation time couldn't be determined for the user. Read-only. Supports $filter (eq, ne, NOT , ge, le, and in operators).
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "createdObjects", {
        /**
         * Gets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
         * @returns a directoryObject
         */
        get: function () {
            return this._createdObjects;
        },
        /**
         * Sets the createdObjects property value. Directory objects that were created by the user. Read-only. Nullable.
         * @param value Value to set for the createdObjects property.
         */
        set: function (value) {
            this._createdObjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "creationType", {
        /**
         * Gets the creationType property value. Indicates whether the user account was created as a regular school or work account (null), an external account (Invitation), a local account for an Azure Active Directory B2C tenant (LocalAccount) or self-service sign-up using email verification (EmailVerified). Read-only. Supports $filter (eq, ne, NOT, and in).
         * @returns a string
         */
        get: function () {
            return this._creationType;
        },
        /**
         * Sets the creationType property value. Indicates whether the user account was created as a regular school or work account (null), an external account (Invitation), a local account for an Azure Active Directory B2C tenant (LocalAccount) or self-service sign-up using email verification (EmailVerified). Read-only. Supports $filter (eq, ne, NOT, and in).
         * @param value Value to set for the creationType property.
         */
        set: function (value) {
            this._creationType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "department", {
        /**
         * Gets the department property value. The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, NOT , ge, le, and in operators).
         * @returns a string
         */
        get: function () {
            return this._department;
        },
        /**
         * Sets the department property value. The name for the department in which the user works. Maximum length is 64 characters.Supports $filter (eq, ne, NOT , ge, le, and in operators).
         * @param value Value to set for the department property.
         */
        set: function (value) {
            this._department = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "deviceEnrollmentLimit", {
        /**
         * Gets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
         * @returns a integer
         */
        get: function () {
            return this._deviceEnrollmentLimit;
        },
        /**
         * Sets the deviceEnrollmentLimit property value. The limit on the maximum number of devices that the user is permitted to enroll. Allowed values are 5 or 1000.
         * @param value Value to set for the deviceEnrollmentLimit property.
         */
        set: function (value) {
            this._deviceEnrollmentLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "deviceManagementTroubleshootingEvents", {
        /**
         * Gets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
         * @returns a deviceManagementTroubleshootingEvent
         */
        get: function () {
            return this._deviceManagementTroubleshootingEvents;
        },
        /**
         * Sets the deviceManagementTroubleshootingEvents property value. The list of troubleshooting events for this user.
         * @param value Value to set for the deviceManagementTroubleshootingEvents property.
         */
        set: function (value) {
            this._deviceManagementTroubleshootingEvents = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "directReports", {
        /**
         * Gets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._directReports;
        },
        /**
         * Sets the directReports property value. The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
         * @param value Value to set for the directReports property.
         */
        set: function (value) {
            this._directReports = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "displayName", {
        /**
         * Gets the displayName property value. The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith), $orderBy, and $search.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The name displayed in the address book for the user. This value is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Maximum length is 256 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith), $orderBy, and $search.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "drive", {
        /**
         * Gets the drive property value. The user's OneDrive. Read-only.
         * @returns a drive
         */
        get: function () {
            return this._drive;
        },
        /**
         * Sets the drive property value. The user's OneDrive. Read-only.
         * @param value Value to set for the drive property.
         */
        set: function (value) {
            this._drive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "drives", {
        /**
         * Gets the drives property value. A collection of drives available for this user. Read-only.
         * @returns a drive
         */
        get: function () {
            return this._drives;
        },
        /**
         * Sets the drives property value. A collection of drives available for this user. Read-only.
         * @param value Value to set for the drives property.
         */
        set: function (value) {
            this._drives = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "employeeHireDate", {
        /**
         * Gets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, NOT , ge, le, in).
         * @returns a Date
         */
        get: function () {
            return this._employeeHireDate;
        },
        /**
         * Sets the employeeHireDate property value. The date and time when the user was hired or will start work in case of a future hire. Supports $filter (eq, ne, NOT , ge, le, in).
         * @param value Value to set for the employeeHireDate property.
         */
        set: function (value) {
            this._employeeHireDate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "employeeId", {
        /**
         * Gets the employeeId property value. The employee identifier assigned to the user by the organization. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._employeeId;
        },
        /**
         * Sets the employeeId property value. The employee identifier assigned to the user by the organization. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @param value Value to set for the employeeId property.
         */
        set: function (value) {
            this._employeeId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "employeeOrgData", {
        /**
         * Gets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, NOT , ge, le, in).
         * @returns a employeeOrgData
         */
        get: function () {
            return this._employeeOrgData;
        },
        /**
         * Sets the employeeOrgData property value. Represents organization data (e.g. division and costCenter) associated with a user. Supports $filter (eq, ne, NOT , ge, le, in).
         * @param value Value to set for the employeeOrgData property.
         */
        set: function (value) {
            this._employeeOrgData = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "employeeType", {
        /**
         * Gets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._employeeType;
        },
        /**
         * Sets the employeeType property value. Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @param value Value to set for the employeeType property.
         */
        set: function (value) {
            this._employeeType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "events", {
        /**
         * Gets the events property value. The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.
         * @returns a event
         */
        get: function () {
            return this._events;
        },
        /**
         * Sets the events property value. The user's events. Default is to show events under the Default Calendar. Read-only. Nullable.
         * @param value Value to set for the events property.
         */
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the user. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the user. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "externalUserState", {
        /**
         * Gets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, NOT , in).
         * @returns a string
         */
        get: function () {
            return this._externalUserState;
        },
        /**
         * Sets the externalUserState property value. For an external user invited to the tenant using the invitation API, this property represents the invited user's invitation status. For invited users, the state can be PendingAcceptance or Accepted, or null for all other users. Supports $filter (eq, ne, NOT , in).
         * @param value Value to set for the externalUserState property.
         */
        set: function (value) {
            this._externalUserState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "externalUserStateChangeDateTime", {
        /**
         * Gets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, NOT , in).
         * @returns a Date
         */
        get: function () {
            return this._externalUserStateChangeDateTime;
        },
        /**
         * Sets the externalUserStateChangeDateTime property value. Shows the timestamp for the latest change to the externalUserState property. Supports $filter (eq, ne, NOT , in).
         * @param value Value to set for the externalUserStateChangeDateTime property.
         */
        set: function (value) {
            this._externalUserStateChangeDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "faxNumber", {
        /**
         * Gets the faxNumber property value. The fax number of the user. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._faxNumber;
        },
        /**
         * Sets the faxNumber property value. The fax number of the user. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @param value Value to set for the faxNumber property.
         */
        set: function (value) {
            this._faxNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "followedSites", {
        /**
         * Gets the followedSites property value.
         * @returns a site
         */
        get: function () {
            return this._followedSites;
        },
        /**
         * Sets the followedSites property value.
         * @param value Value to set for the followedSites property.
         */
        set: function (value) {
            this._followedSites = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "givenName", {
        /**
         * Gets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._givenName;
        },
        /**
         * Sets the givenName property value. The given name (first name) of the user. Maximum length is 64 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @param value Value to set for the givenName property.
         */
        set: function (value) {
            this._givenName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "hireDate", {
        /**
         * Gets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
         * @returns a Date
         */
        get: function () {
            return this._hireDate;
        },
        /**
         * Sets the hireDate property value. The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.  Returned only on $select.  Note: This property is specific to SharePoint Online. We recommend using the native employeeHireDate property to set and update hire date values using Microsoft Graph APIs.
         * @param value Value to set for the hireDate property.
         */
        set: function (value) {
            this._hireDate = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "identities", {
        /**
         * Gets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) only where the signInType is not userPrincipalName.
         * @returns a objectIdentity
         */
        get: function () {
            return this._identities;
        },
        /**
         * Sets the identities property value. Represents the identities that can be used to sign in to this user account. An identity can be provided by Microsoft (also known as a local account), by organizations, or by social identity providers such as Facebook, Google, and Microsoft, and tied to a user account. May contain multiple items with the same signInType value. Supports $filter (eq) only where the signInType is not userPrincipalName.
         * @param value Value to set for the identities property.
         */
        set: function (value) {
            this._identities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "imAddresses", {
        /**
         * Gets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._imAddresses;
        },
        /**
         * Sets the imAddresses property value. The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the imAddresses property.
         */
        set: function (value) {
            this._imAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "inferenceClassification", {
        /**
         * Gets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
         * @returns a inferenceClassification
         */
        get: function () {
            return this._inferenceClassification;
        },
        /**
         * Sets the inferenceClassification property value. Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
         * @param value Value to set for the inferenceClassification property.
         */
        set: function (value) {
            this._inferenceClassification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "insights", {
        /**
         * Gets the insights property value. Read-only. Nullable.
         * @returns a officeGraphInsights
         */
        get: function () {
            return this._insights;
        },
        /**
         * Sets the insights property value. Read-only. Nullable.
         * @param value Value to set for the insights property.
         */
        set: function (value) {
            this._insights = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "interests", {
        /**
         * Gets the interests property value. A list for the user to describe their interests. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._interests;
        },
        /**
         * Sets the interests property value. A list for the user to describe their interests. Returned only on $select.
         * @param value Value to set for the interests property.
         */
        set: function (value) {
            this._interests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "isResourceAccount", {
        /**
         * Gets the isResourceAccount property value. Do not use – reserved for future use.
         * @returns a boolean
         */
        get: function () {
            return this._isResourceAccount;
        },
        /**
         * Sets the isResourceAccount property value. Do not use – reserved for future use.
         * @param value Value to set for the isResourceAccount property.
         */
        set: function (value) {
            this._isResourceAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "jobTitle", {
        /**
         * Gets the jobTitle property value. The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._jobTitle;
        },
        /**
         * Sets the jobTitle property value. The user's job title. Maximum length is 128 characters. Supports $filter (eq, ne, NOT , ge, le, in, startsWith).
         * @param value Value to set for the jobTitle property.
         */
        set: function (value) {
            this._jobTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "joinedTeams", {
        /**
         * Gets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
         * @returns a team
         */
        get: function () {
            return this._joinedTeams;
        },
        /**
         * Sets the joinedTeams property value. The Microsoft Teams teams that the user is a member of. Read-only. Nullable.
         * @param value Value to set for the joinedTeams property.
         */
        set: function (value) {
            this._joinedTeams = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "lastPasswordChangeDateTime", {
        /**
         * Gets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select.
         * @returns a Date
         */
        get: function () {
            return this._lastPasswordChangeDateTime;
        },
        /**
         * Sets the lastPasswordChangeDateTime property value. The time when this Azure AD user last changed their password. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Returned only on $select.
         * @param value Value to set for the lastPasswordChangeDateTime property.
         */
        set: function (value) {
            this._lastPasswordChangeDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "legalAgeGroupClassification", {
        /**
         * Gets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent, minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property definitions for further information. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._legalAgeGroupClassification;
        },
        /**
         * Sets the legalAgeGroupClassification property value. Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent, minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property definitions for further information. Returned only on $select.
         * @param value Value to set for the legalAgeGroupClassification property.
         */
        set: function (value) {
            this._legalAgeGroupClassification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "licenseAssignmentStates", {
        /**
         * Gets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
         * @returns a licenseAssignmentState
         */
        get: function () {
            return this._licenseAssignmentStates;
        },
        /**
         * Sets the licenseAssignmentStates property value. State of license assignments for this user. Read-only. Returned only on $select.
         * @param value Value to set for the licenseAssignmentStates property.
         */
        set: function (value) {
            this._licenseAssignmentStates = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "licenseDetails", {
        /**
         * Gets the licenseDetails property value. A collection of this user's license details. Read-only.
         * @returns a licenseDetails
         */
        get: function () {
            return this._licenseDetails;
        },
        /**
         * Sets the licenseDetails property value. A collection of this user's license details. Read-only.
         * @param value Value to set for the licenseDetails property.
         */
        set: function (value) {
            this._licenseDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mail", {
        /**
         * Gets the mail property value. The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. While this property can contain accent characters, using them can cause access issues with other Microsoft applications for the user. Supports $filter (eq, ne, NOT, ge, le, in, startsWith, endsWith).
         * @returns a string
         */
        get: function () {
            return this._mail;
        },
        /**
         * Sets the mail property value. The SMTP address for the user, for example, admin@contoso.com. Changes to this property will also update the user's proxyAddresses collection to include the value as an SMTP address. While this property can contain accent characters, using them can cause access issues with other Microsoft applications for the user. Supports $filter (eq, ne, NOT, ge, le, in, startsWith, endsWith).
         * @param value Value to set for the mail property.
         */
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mailboxSettings", {
        /**
         * Gets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
         * @returns a mailboxSettings
         */
        get: function () {
            return this._mailboxSettings;
        },
        /**
         * Sets the mailboxSettings property value. Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
         * @param value Value to set for the mailboxSettings property.
         */
        set: function (value) {
            this._mailboxSettings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mailFolders", {
        /**
         * Gets the mailFolders property value. The user's mail folders. Read-only. Nullable.
         * @returns a mailFolder
         */
        get: function () {
            return this._mailFolders;
        },
        /**
         * Sets the mailFolders property value. The user's mail folders. Read-only. Nullable.
         * @param value Value to set for the mailFolders property.
         */
        set: function (value) {
            this._mailFolders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mailNickname", {
        /**
         * Gets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mailNickname;
        },
        /**
         * Sets the mailNickname property value. The mail alias for the user. This property must be specified when a user is created. Maximum length is 64 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mailNickname property.
         */
        set: function (value) {
            this._mailNickname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "managedAppRegistrations", {
        /**
         * Gets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
         * @returns a managedAppRegistration
         */
        get: function () {
            return this._managedAppRegistrations;
        },
        /**
         * Sets the managedAppRegistrations property value. Zero or more managed app registrations that belong to the user.
         * @param value Value to set for the managedAppRegistrations property.
         */
        set: function (value) {
            this._managedAppRegistrations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "managedDevices", {
        /**
         * Gets the managedDevices property value. The managed devices associated with the user.
         * @returns a managedDevice
         */
        get: function () {
            return this._managedDevices;
        },
        /**
         * Sets the managedDevices property value. The managed devices associated with the user.
         * @param value Value to set for the managedDevices property.
         */
        set: function (value) {
            this._managedDevices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "manager", {
        /**
         * Gets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._manager;
        },
        /**
         * Sets the manager property value. The user or contact that is this user's manager. Read-only. (HTTP Methods: GET, PUT, DELETE.). Supports $expand.
         * @param value Value to set for the manager property.
         */
        set: function (value) {
            this._manager = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "memberOf", {
        /**
         * Gets the memberOf property value. The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._memberOf;
        },
        /**
         * Sets the memberOf property value. The groups, directory roles and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the memberOf property.
         */
        set: function (value) {
            this._memberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "messages", {
        /**
         * Gets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
         * @returns a message
         */
        get: function () {
            return this._messages;
        },
        /**
         * Sets the messages property value. The messages in a mailbox or folder. Read-only. Nullable.
         * @param value Value to set for the messages property.
         */
        set: function (value) {
            this._messages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mobilePhone", {
        /**
         * Gets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mobilePhone;
        },
        /**
         * Sets the mobilePhone property value. The primary cellular telephone number for the user. Read-only for users synced from on-premises directory.  Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mobilePhone property.
         */
        set: function (value) {
            this._mobilePhone = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "mySite", {
        /**
         * Gets the mySite property value. The URL for the user's personal site. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._mySite;
        },
        /**
         * Sets the mySite property value. The URL for the user's personal site. Returned only on $select.
         * @param value Value to set for the mySite property.
         */
        set: function (value) {
            this._mySite = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "oauth2PermissionGrants", {
        /**
         * Gets the oauth2PermissionGrants property value.
         * @returns a oAuth2PermissionGrant
         */
        get: function () {
            return this._oauth2PermissionGrants;
        },
        /**
         * Sets the oauth2PermissionGrants property value.
         * @param value Value to set for the oauth2PermissionGrants property.
         */
        set: function (value) {
            this._oauth2PermissionGrants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "officeLocation", {
        /**
         * Gets the officeLocation property value. The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._officeLocation;
        },
        /**
         * Sets the officeLocation property value. The office location in the user's place of business. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the officeLocation property.
         */
        set: function (value) {
            this._officeLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onenote", {
        /**
         * Gets the onenote property value. Read-only.
         * @returns a onenote
         */
        get: function () {
            return this._onenote;
        },
        /**
         * Sets the onenote property value. Read-only.
         * @param value Value to set for the onenote property.
         */
        set: function (value) {
            this._onenote = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onlineMeetings", {
        /**
         * Gets the onlineMeetings property value.
         * @returns a onlineMeeting
         */
        get: function () {
            return this._onlineMeetings;
        },
        /**
         * Sets the onlineMeetings property value.
         * @param value Value to set for the onlineMeetings property.
         */
        set: function (value) {
            this._onlineMeetings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesDistinguishedName", {
        /**
         * Gets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesDistinguishedName;
        },
        /**
         * Sets the onPremisesDistinguishedName property value. Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
         * @param value Value to set for the onPremisesDistinguishedName property.
         */
        set: function (value) {
            this._onPremisesDistinguishedName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesDomainName", {
        /**
         * Gets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesDomainName;
        },
        /**
         * Sets the onPremisesDomainName property value. Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
         * @param value Value to set for the onPremisesDomainName property.
         */
        set: function (value) {
            this._onPremisesDomainName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesExtensionAttributes", {
        /**
         * Gets the onPremisesExtensionAttributes property value. Contains extensionAttributes 1-15 for the user. Note that the individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties may be set during creation or update. These extension attributes are also known as Exchange custom attributes 1-15. Supports $filter (eq, NOT, ge, le, in).
         * @returns a onPremisesExtensionAttributes
         */
        get: function () {
            return this._onPremisesExtensionAttributes;
        },
        /**
         * Sets the onPremisesExtensionAttributes property value. Contains extensionAttributes 1-15 for the user. Note that the individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, the source of authority for this set of properties is the on-premises and is read-only and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties may be set during creation or update. These extension attributes are also known as Exchange custom attributes 1-15. Supports $filter (eq, NOT, ge, le, in).
         * @param value Value to set for the onPremisesExtensionAttributes property.
         */
        set: function (value) {
            this._onPremisesExtensionAttributes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesImmutableId", {
        /**
         * Gets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, NOT, ge, le, in).
         * @returns a string
         */
        get: function () {
            return this._onPremisesImmutableId;
        },
        /**
         * Sets the onPremisesImmutableId property value. This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user's userPrincipalName (UPN) property. Note: The $ and _ characters cannot be used when specifying this property. Supports $filter (eq, ne, NOT, ge, le, in).
         * @param value Value to set for the onPremisesImmutableId property.
         */
        set: function (value) {
            this._onPremisesImmutableId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesLastSyncDateTime", {
        /**
         * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @returns a Date
         */
        get: function () {
            return this._onPremisesLastSyncDateTime;
        },
        /**
         * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the object was synced with the on-premises directory; for example: '2013-02-16T03:04:54Z'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @param value Value to set for the onPremisesLastSyncDateTime property.
         */
        set: function (value) {
            this._onPremisesLastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesProvisioningErrors", {
        /**
         * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, NOT, ge, le).
         * @returns a onPremisesProvisioningError
         */
        get: function () {
            return this._onPremisesProvisioningErrors;
        },
        /**
         * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning.  Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the onPremisesProvisioningErrors property.
         */
        set: function (value) {
            this._onPremisesProvisioningErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesSamAccountName", {
        /**
         * Gets the onPremisesSamAccountName property value. Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._onPremisesSamAccountName;
        },
        /**
         * Sets the onPremisesSamAccountName property value. Contains the on-premises sAMAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the onPremisesSamAccountName property.
         */
        set: function (value) {
            this._onPremisesSamAccountName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesSecurityIdentifier", {
        /**
         * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesSecurityIdentifier;
        },
        /**
         * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only.
         * @param value Value to set for the onPremisesSecurityIdentifier property.
         */
        set: function (value) {
            this._onPremisesSecurityIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "onPremisesSyncEnabled", {
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
    Object.defineProperty(User.prototype, "onPremisesUserPrincipalName", {
        /**
         * Gets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._onPremisesUserPrincipalName;
        },
        /**
         * Sets the onPremisesUserPrincipalName property value. Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the onPremisesUserPrincipalName property.
         */
        set: function (value) {
            this._onPremisesUserPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "otherMails", {
        /**
         * Gets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user.Supports $filter (eq, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._otherMails;
        },
        /**
         * Sets the otherMails property value. A list of additional email addresses for the user; for example: ['bob@contoso.com', 'Robert@fabrikam.com'].NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user.Supports $filter (eq, NOT, ge, le, in, startsWith).
         * @param value Value to set for the otherMails property.
         */
        set: function (value) {
            this._otherMails = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "outlook", {
        /**
         * Gets the outlook property value. Selective Outlook services available to the user. Read-only. Nullable.
         * @returns a outlookUser
         */
        get: function () {
            return this._outlook;
        },
        /**
         * Sets the outlook property value. Selective Outlook services available to the user. Read-only. Nullable.
         * @param value Value to set for the outlook property.
         */
        set: function (value) {
            this._outlook = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "ownedDevices", {
        /**
         * Gets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._ownedDevices;
        },
        /**
         * Sets the ownedDevices property value. Devices that are owned by the user. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the ownedDevices property.
         */
        set: function (value) {
            this._ownedDevices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "ownedObjects", {
        /**
         * Gets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._ownedObjects;
        },
        /**
         * Sets the ownedObjects property value. Directory objects that are owned by the user. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the ownedObjects property.
         */
        set: function (value) {
            this._ownedObjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "passwordPolicies", {
        /**
         * Gets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword.Supports $filter (ne, NOT).
         * @returns a string
         */
        get: function () {
            return this._passwordPolicies;
        },
        /**
         * Sets the passwordPolicies property value. Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two may be specified together; for example: DisablePasswordExpiration, DisableStrongPassword.Supports $filter (ne, NOT).
         * @param value Value to set for the passwordPolicies property.
         */
        set: function (value) {
            this._passwordPolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "passwordProfile", {
        /**
         * Gets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, NOT, in).
         * @returns a passwordProfile
         */
        get: function () {
            return this._passwordProfile;
        },
        /**
         * Sets the passwordProfile property value. Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. NOTE: For Azure B2C tenants, the forceChangePasswordNextSignIn property should be set to false and instead use custom policies and user flows to force password reset at first logon. See Force password reset at first logon. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the passwordProfile property.
         */
        set: function (value) {
            this._passwordProfile = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "pastProjects", {
        /**
         * Gets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._pastProjects;
        },
        /**
         * Sets the pastProjects property value. A list for the user to enumerate their past projects. Returned only on $select.
         * @param value Value to set for the pastProjects property.
         */
        set: function (value) {
            this._pastProjects = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "people", {
        /**
         * Gets the people property value. Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks.
         * @returns a person
         */
        get: function () {
            return this._people;
        },
        /**
         * Sets the people property value. Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user's communication, collaboration and business relationships. A person is an aggregation of information from across mail, contacts and social networks.
         * @param value Value to set for the people property.
         */
        set: function (value) {
            this._people = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "photo", {
        /**
         * Gets the photo property value. The user's profile photo. Read-only.
         * @returns a profilePhoto
         */
        get: function () {
            return this._photo;
        },
        /**
         * Sets the photo property value. The user's profile photo. Read-only.
         * @param value Value to set for the photo property.
         */
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "photos", {
        /**
         * Gets the photos property value. Read-only. Nullable.
         * @returns a profilePhoto
         */
        get: function () {
            return this._photos;
        },
        /**
         * Sets the photos property value. Read-only. Nullable.
         * @param value Value to set for the photos property.
         */
        set: function (value) {
            this._photos = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "planner", {
        /**
         * Gets the planner property value. Selective Planner services available to the user. Read-only. Nullable.
         * @returns a plannerUser
         */
        get: function () {
            return this._planner;
        },
        /**
         * Sets the planner property value. Selective Planner services available to the user. Read-only. Nullable.
         * @param value Value to set for the planner property.
         */
        set: function (value) {
            this._planner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "postalCode", {
        /**
         * Gets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._postalCode;
        },
        /**
         * Sets the postalCode property value. The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code. Maximum length is 40 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the postalCode property.
         */
        set: function (value) {
            this._postalCode = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "preferredLanguage", {
        /**
         * Gets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._preferredLanguage;
        },
        /**
         * Sets the preferredLanguage property value. The preferred language for the user. Should follow ISO 639-1 Code; for example en-US. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the preferredLanguage property.
         */
        set: function (value) {
            this._preferredLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "preferredName", {
        /**
         * Gets the preferredName property value. The preferred name for the user. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._preferredName;
        },
        /**
         * Sets the preferredName property value. The preferred name for the user. Returned only on $select.
         * @param value Value to set for the preferredName property.
         */
        set: function (value) {
            this._preferredName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "presence", {
        /**
         * Gets the presence property value.
         * @returns a presence
         */
        get: function () {
            return this._presence;
        },
        /**
         * Sets the presence property value.
         * @param value Value to set for the presence property.
         */
        set: function (value) {
            this._presence = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "provisionedPlans", {
        /**
         * Gets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @returns a provisionedPlan
         */
        get: function () {
            return this._provisionedPlans;
        },
        /**
         * Sets the provisionedPlans property value. The plans that are provisioned for the user. Read-only. Not nullable. Supports $filter (eq, NOT, ge, le).
         * @param value Value to set for the provisionedPlans property.
         */
        set: function (value) {
            this._provisionedPlans = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "proxyAddresses", {
        /**
         * Gets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Read-only, Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._proxyAddresses;
        },
        /**
         * Sets the proxyAddresses property value. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. Read-only, Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the proxyAddresses property.
         */
        set: function (value) {
            this._proxyAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "registeredDevices", {
        /**
         * Gets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._registeredDevices;
        },
        /**
         * Sets the registeredDevices property value. Devices that are registered for the user. Read-only. Nullable. Supports $expand.
         * @param value Value to set for the registeredDevices property.
         */
        set: function (value) {
            this._registeredDevices = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "responsibilities", {
        /**
         * Gets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._responsibilities;
        },
        /**
         * Sets the responsibilities property value. A list for the user to enumerate their responsibilities. Returned only on $select.
         * @param value Value to set for the responsibilities property.
         */
        set: function (value) {
            this._responsibilities = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "schools", {
        /**
         * Gets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._schools;
        },
        /**
         * Sets the schools property value. A list for the user to enumerate the schools they have attended. Returned only on $select.
         * @param value Value to set for the schools property.
         */
        set: function (value) {
            this._schools = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "scopedRoleMemberOf", {
        /**
         * Gets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
         * @returns a scopedRoleMembership
         */
        get: function () {
            return this._scopedRoleMemberOf;
        },
        /**
         * Sets the scopedRoleMemberOf property value. The scoped-role administrative unit memberships for this user. Read-only. Nullable.
         * @param value Value to set for the scopedRoleMemberOf property.
         */
        set: function (value) {
            this._scopedRoleMemberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "settings", {
        /**
         * Gets the settings property value. Read-only. Nullable.
         * @returns a userSettings
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. Read-only. Nullable.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "showInAddressList", {
        /**
         * Gets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._showInAddressList;
        },
        /**
         * Sets the showInAddressList property value. true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the showInAddressList property.
         */
        set: function (value) {
            this._showInAddressList = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "signInSessionsValidFromDateTime", {
        /**
         * Gets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset.
         * @returns a Date
         */
        get: function () {
            return this._signInSessionsValidFromDateTime;
        },
        /**
         * Sets the signInSessionsValidFromDateTime property value. Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph).  If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset.
         * @param value Value to set for the signInSessionsValidFromDateTime property.
         */
        set: function (value) {
            this._signInSessionsValidFromDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "skills", {
        /**
         * Gets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
         * @returns a string
         */
        get: function () {
            return this._skills;
        },
        /**
         * Sets the skills property value. A list for the user to enumerate their skills. Returned only on $select.
         * @param value Value to set for the skills property.
         */
        set: function (value) {
            this._skills = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "state", {
        /**
         * Gets the state property value. The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._state;
        },
        /**
         * Sets the state property value. The state or province in the user's address. Maximum length is 128 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the state property.
         */
        set: function (value) {
            this._state = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "streetAddress", {
        /**
         * Gets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._streetAddress;
        },
        /**
         * Sets the streetAddress property value. The street address of the user's place of business. Maximum length is 1024 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the streetAddress property.
         */
        set: function (value) {
            this._streetAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "surname", {
        /**
         * Gets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._surname;
        },
        /**
         * Sets the surname property value. The user's surname (family name or last name). Maximum length is 64 characters. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the surname property.
         */
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "teamwork", {
        /**
         * Gets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
         * @returns a userTeamwork
         */
        get: function () {
            return this._teamwork;
        },
        /**
         * Sets the teamwork property value. A container for Microsoft Teams features available for the user. Read-only. Nullable.
         * @param value Value to set for the teamwork property.
         */
        set: function (value) {
            this._teamwork = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "todo", {
        /**
         * Gets the todo property value. Represents the To Do services available to a user.
         * @returns a todo
         */
        get: function () {
            return this._todo;
        },
        /**
         * Sets the todo property value. Represents the To Do services available to a user.
         * @param value Value to set for the todo property.
         */
        set: function (value) {
            this._todo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "transitiveMemberOf", {
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
    Object.defineProperty(User.prototype, "usageLocation", {
        /**
         * Gets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._usageLocation;
        },
        /**
         * Sets the usageLocation property value. A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries.  Examples include: US, JP, and GB. Not nullable. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the usageLocation property.
         */
        set: function (value) {
            this._usageLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "userPrincipalName", {
        /**
         * Gets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user. Supports $filter (eq, ne, NOT, ge, le, in, startsWith, endsWith) and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._userPrincipalName;
        },
        /**
         * Sets the userPrincipalName property value. The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization.NOTE: While this property can contain accent characters, they can cause access issues to first-party applications for the user. Supports $filter (eq, ne, NOT, ge, le, in, startsWith, endsWith) and $orderBy.
         * @param value Value to set for the userPrincipalName property.
         */
        set: function (value) {
            this._userPrincipalName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "userType", {
        /**
         * Gets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, NOT, in,).
         * @returns a string
         */
        get: function () {
            return this._userType;
        },
        /**
         * Sets the userType property value. A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter (eq, ne, NOT, in,).
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
    User.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["aboutMe", function (o, n) { o.aboutMe = n.getStringValue(); }],
            ["accountEnabled", function (o, n) { o.accountEnabled = n.getBooleanValue(); }],
            ["activities", function (o, n) { o.activities = n.getCollectionOfObjectValues(userActivity_1.UserActivity); }],
            ["ageGroup", function (o, n) { o.ageGroup = n.getStringValue(); }],
            ["agreementAcceptances", function (o, n) { o.agreementAcceptances = n.getCollectionOfObjectValues(agreementAcceptance_1.AgreementAcceptance); }],
            ["appRoleAssignments", function (o, n) { o.appRoleAssignments = n.getCollectionOfObjectValues(appRoleAssignment_1.AppRoleAssignment); }],
            ["assignedLicenses", function (o, n) { o.assignedLicenses = n.getCollectionOfObjectValues(assignedLicense_1.AssignedLicense); }],
            ["assignedPlans", function (o, n) { o.assignedPlans = n.getCollectionOfObjectValues(assignedPlan_1.AssignedPlan); }],
            ["authentication", function (o, n) { o.authentication = n.getObjectValue(authentication_1.Authentication); }],
            ["birthday", function (o, n) { o.birthday = n.getDateValue(); }],
            ["businessPhones", function (o, n) { o.businessPhones = n.getCollectionOfPrimitiveValues(); }],
            ["calendar", function (o, n) { o.calendar = n.getObjectValue(calendar_1.Calendar); }],
            ["calendarGroups", function (o, n) { o.calendarGroups = n.getCollectionOfObjectValues(calendarGroup_1.CalendarGroup); }],
            ["calendars", function (o, n) { o.calendars = n.getCollectionOfObjectValues(calendar_1.Calendar); }],
            ["calendarView", function (o, n) { o.calendarView = n.getCollectionOfObjectValues(event_1.Event); }],
            ["chats", function (o, n) { o.chats = n.getCollectionOfObjectValues(chat_1.Chat); }],
            ["city", function (o, n) { o.city = n.getStringValue(); }],
            ["companyName", function (o, n) { o.companyName = n.getStringValue(); }],
            ["consentProvidedForMinor", function (o, n) { o.consentProvidedForMinor = n.getStringValue(); }],
            ["contactFolders", function (o, n) { o.contactFolders = n.getCollectionOfObjectValues(contactFolder_1.ContactFolder); }],
            ["contacts", function (o, n) { o.contacts = n.getCollectionOfObjectValues(contact_1.Contact); }],
            ["country", function (o, n) { o.country = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["createdObjects", function (o, n) { o.createdObjects = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["creationType", function (o, n) { o.creationType = n.getStringValue(); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["deviceEnrollmentLimit", function (o, n) { o.deviceEnrollmentLimit = n.getNumberValue(); }],
            ["deviceManagementTroubleshootingEvents", function (o, n) { o.deviceManagementTroubleshootingEvents = n.getCollectionOfObjectValues(deviceManagementTroubleshootingEvent_1.DeviceManagementTroubleshootingEvent); }],
            ["directReports", function (o, n) { o.directReports = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["drive", function (o, n) { o.drive = n.getObjectValue(drive_1.Drive); }],
            ["drives", function (o, n) { o.drives = n.getCollectionOfObjectValues(drive_1.Drive); }],
            ["employeeHireDate", function (o, n) { o.employeeHireDate = n.getDateValue(); }],
            ["employeeId", function (o, n) { o.employeeId = n.getStringValue(); }],
            ["employeeOrgData", function (o, n) { o.employeeOrgData = n.getObjectValue(EmployeeOrgData); }],
            ["employeeType", function (o, n) { o.employeeType = n.getStringValue(); }],
            ["events", function (o, n) { o.events = n.getCollectionOfObjectValues(event_1.Event); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["externalUserState", function (o, n) { o.externalUserState = n.getStringValue(); }],
            ["externalUserStateChangeDateTime", function (o, n) { o.externalUserStateChangeDateTime = n.getDateValue(); }],
            ["faxNumber", function (o, n) { o.faxNumber = n.getStringValue(); }],
            ["followedSites", function (o, n) { o.followedSites = n.getCollectionOfObjectValues(site_1.Site); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["hireDate", function (o, n) { o.hireDate = n.getDateValue(); }],
            ["identities", function (o, n) { o.identities = n.getCollectionOfPrimitiveValues(); }],
            ["imAddresses", function (o, n) { o.imAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["inferenceClassification", function (o, n) { o.inferenceClassification = n.getObjectValue(inferenceClassification_1.InferenceClassification); }],
            ["insights", function (o, n) { o.insights = n.getObjectValue(officeGraphInsights_1.OfficeGraphInsights); }],
            ["interests", function (o, n) { o.interests = n.getCollectionOfPrimitiveValues(); }],
            ["isResourceAccount", function (o, n) { o.isResourceAccount = n.getBooleanValue(); }],
            ["jobTitle", function (o, n) { o.jobTitle = n.getStringValue(); }],
            ["joinedTeams", function (o, n) { o.joinedTeams = n.getCollectionOfObjectValues(team_1.Team); }],
            ["lastPasswordChangeDateTime", function (o, n) { o.lastPasswordChangeDateTime = n.getDateValue(); }],
            ["legalAgeGroupClassification", function (o, n) { o.legalAgeGroupClassification = n.getStringValue(); }],
            ["licenseAssignmentStates", function (o, n) { o.licenseAssignmentStates = n.getCollectionOfPrimitiveValues(); }],
            ["licenseDetails", function (o, n) { o.licenseDetails = n.getCollectionOfObjectValues(licenseDetails_1.LicenseDetails); }],
            ["mail", function (o, n) { o.mail = n.getStringValue(); }],
            ["mailboxSettings", function (o, n) { o.mailboxSettings = n.getObjectValue(MailboxSettings); }],
            ["mailFolders", function (o, n) { o.mailFolders = n.getCollectionOfObjectValues(mailFolder_1.MailFolder); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["managedAppRegistrations", function (o, n) { o.managedAppRegistrations = n.getCollectionOfObjectValues(managedAppRegistration_1.ManagedAppRegistration); }],
            ["managedDevices", function (o, n) { o.managedDevices = n.getCollectionOfObjectValues(managedDevice_1.ManagedDevice); }],
            ["manager", function (o, n) { o.manager = n.getObjectValue(directoryObject_1.DirectoryObject); }],
            ["memberOf", function (o, n) { o.memberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["messages", function (o, n) { o.messages = n.getCollectionOfObjectValues(message_1.Message); }],
            ["mobilePhone", function (o, n) { o.mobilePhone = n.getStringValue(); }],
            ["mySite", function (o, n) { o.mySite = n.getStringValue(); }],
            ["oauth2PermissionGrants", function (o, n) { o.oauth2PermissionGrants = n.getCollectionOfObjectValues(oAuth2PermissionGrant_1.OAuth2PermissionGrant); }],
            ["officeLocation", function (o, n) { o.officeLocation = n.getStringValue(); }],
            ["onenote", function (o, n) { o.onenote = n.getObjectValue(onenote_1.Onenote); }],
            ["onlineMeetings", function (o, n) { o.onlineMeetings = n.getCollectionOfObjectValues(onlineMeeting_1.OnlineMeeting); }],
            ["onPremisesDistinguishedName", function (o, n) { o.onPremisesDistinguishedName = n.getStringValue(); }],
            ["onPremisesDomainName", function (o, n) { o.onPremisesDomainName = n.getStringValue(); }],
            ["onPremisesExtensionAttributes", function (o, n) { o.onPremisesExtensionAttributes = n.getObjectValue(OnPremisesExtensionAttributes); }],
            ["onPremisesImmutableId", function (o, n) { o.onPremisesImmutableId = n.getStringValue(); }],
            ["onPremisesLastSyncDateTime", function (o, n) { o.onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesProvisioningErrors", function (o, n) { o.onPremisesProvisioningErrors = n.getCollectionOfPrimitiveValues(); }],
            ["onPremisesSamAccountName", function (o, n) { o.onPremisesSamAccountName = n.getStringValue(); }],
            ["onPremisesSecurityIdentifier", function (o, n) { o.onPremisesSecurityIdentifier = n.getStringValue(); }],
            ["onPremisesSyncEnabled", function (o, n) { o.onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["onPremisesUserPrincipalName", function (o, n) { o.onPremisesUserPrincipalName = n.getStringValue(); }],
            ["otherMails", function (o, n) { o.otherMails = n.getCollectionOfPrimitiveValues(); }],
            ["outlook", function (o, n) { o.outlook = n.getObjectValue(outlookUser_1.OutlookUser); }],
            ["ownedDevices", function (o, n) { o.ownedDevices = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["ownedObjects", function (o, n) { o.ownedObjects = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["passwordPolicies", function (o, n) { o.passwordPolicies = n.getStringValue(); }],
            ["passwordProfile", function (o, n) { o.passwordProfile = n.getObjectValue(PasswordProfile); }],
            ["pastProjects", function (o, n) { o.pastProjects = n.getCollectionOfPrimitiveValues(); }],
            ["people", function (o, n) { o.people = n.getCollectionOfObjectValues(person_1.Person); }],
            ["photo", function (o, n) { o.photo = n.getObjectValue(profilePhoto_1.ProfilePhoto); }],
            ["photos", function (o, n) { o.photos = n.getCollectionOfObjectValues(profilePhoto_1.ProfilePhoto); }],
            ["planner", function (o, n) { o.planner = n.getObjectValue(plannerUser_1.PlannerUser); }],
            ["postalCode", function (o, n) { o.postalCode = n.getStringValue(); }],
            ["preferredLanguage", function (o, n) { o.preferredLanguage = n.getStringValue(); }],
            ["preferredName", function (o, n) { o.preferredName = n.getStringValue(); }],
            ["presence", function (o, n) { o.presence = n.getObjectValue(presence_1.Presence); }],
            ["provisionedPlans", function (o, n) { o.provisionedPlans = n.getCollectionOfObjectValues(provisionedPlan_1.ProvisionedPlan); }],
            ["proxyAddresses", function (o, n) { o.proxyAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["registeredDevices", function (o, n) { o.registeredDevices = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["responsibilities", function (o, n) { o.responsibilities = n.getCollectionOfPrimitiveValues(); }],
            ["schools", function (o, n) { o.schools = n.getCollectionOfPrimitiveValues(); }],
            ["scopedRoleMemberOf", function (o, n) { o.scopedRoleMemberOf = n.getCollectionOfObjectValues(scopedRoleMembership_1.ScopedRoleMembership); }],
            ["settings", function (o, n) { o.settings = n.getObjectValue(userSettings_1.UserSettings); }],
            ["showInAddressList", function (o, n) { o.showInAddressList = n.getBooleanValue(); }],
            ["signInSessionsValidFromDateTime", function (o, n) { o.signInSessionsValidFromDateTime = n.getDateValue(); }],
            ["skills", function (o, n) { o.skills = n.getCollectionOfPrimitiveValues(); }],
            ["state", function (o, n) { o.state = n.getStringValue(); }],
            ["streetAddress", function (o, n) { o.streetAddress = n.getStringValue(); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["teamwork", function (o, n) { o.teamwork = n.getObjectValue(userTeamwork_1.UserTeamwork); }],
            ["todo", function (o, n) { o.todo = n.getObjectValue(todo_1.Todo); }],
            ["transitiveMemberOf", function (o, n) { o.transitiveMemberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["usageLocation", function (o, n) { o.usageLocation = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],
            ["userType", function (o, n) { o.userType = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    User.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeStringValue("aboutMe", this.aboutMe);
        writer.writeBooleanValue("accountEnabled", this.accountEnabled);
        writer.writeCollectionOfObjectValues("activities", this.activities);
        writer.writeStringValue("ageGroup", this.ageGroup);
        writer.writeCollectionOfObjectValues("agreementAcceptances", this.agreementAcceptances);
        writer.writeCollectionOfObjectValues("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfObjectValues("assignedLicenses", this.assignedLicenses);
        writer.writeCollectionOfObjectValues("assignedPlans", this.assignedPlans);
        writer.writeObjectValue("authentication", this.authentication);
        writer.writeDateValue("birthday", this.birthday);
        writer.writeCollectionOfPrimitiveValues("businessPhones", this.businessPhones);
        writer.writeObjectValue("calendar", this.calendar);
        writer.writeCollectionOfObjectValues("calendarGroups", this.calendarGroups);
        writer.writeCollectionOfObjectValues("calendars", this.calendars);
        writer.writeCollectionOfObjectValues("calendarView", this.calendarView);
        writer.writeCollectionOfObjectValues("chats", this.chats);
        writer.writeStringValue("city", this.city);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("consentProvidedForMinor", this.consentProvidedForMinor);
        writer.writeCollectionOfObjectValues("contactFolders", this.contactFolders);
        writer.writeCollectionOfObjectValues("contacts", this.contacts);
        writer.writeStringValue("country", this.country);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues("createdObjects", this.createdObjects);
        writer.writeStringValue("creationType", this.creationType);
        writer.writeStringValue("department", this.department);
        writer.writeNumberValue("deviceEnrollmentLimit", this.deviceEnrollmentLimit);
        writer.writeCollectionOfObjectValues("deviceManagementTroubleshootingEvents", this.deviceManagementTroubleshootingEvents);
        writer.writeCollectionOfObjectValues("directReports", this.directReports);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("drive", this.drive);
        writer.writeCollectionOfObjectValues("drives", this.drives);
        writer.writeDateValue("employeeHireDate", this.employeeHireDate);
        writer.writeStringValue("employeeId", this.employeeId);
        writer.writeObjectValue("employeeOrgData", this.employeeOrgData);
        writer.writeStringValue("employeeType", this.employeeType);
        writer.writeCollectionOfObjectValues("events", this.events);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeStringValue("externalUserState", this.externalUserState);
        writer.writeDateValue("externalUserStateChangeDateTime", this.externalUserStateChangeDateTime);
        writer.writeStringValue("faxNumber", this.faxNumber);
        writer.writeCollectionOfObjectValues("followedSites", this.followedSites);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeDateValue("hireDate", this.hireDate);
        writer.writeCollectionOfPrimitiveValues("identities", this.identities);
        writer.writeCollectionOfPrimitiveValues("imAddresses", this.imAddresses);
        writer.writeObjectValue("inferenceClassification", this.inferenceClassification);
        writer.writeObjectValue("insights", this.insights);
        writer.writeCollectionOfPrimitiveValues("interests", this.interests);
        writer.writeBooleanValue("isResourceAccount", this.isResourceAccount);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeCollectionOfObjectValues("joinedTeams", this.joinedTeams);
        writer.writeDateValue("lastPasswordChangeDateTime", this.lastPasswordChangeDateTime);
        writer.writeStringValue("legalAgeGroupClassification", this.legalAgeGroupClassification);
        writer.writeCollectionOfPrimitiveValues("licenseAssignmentStates", this.licenseAssignmentStates);
        writer.writeCollectionOfObjectValues("licenseDetails", this.licenseDetails);
        writer.writeStringValue("mail", this.mail);
        writer.writeObjectValue("mailboxSettings", this.mailboxSettings);
        writer.writeCollectionOfObjectValues("mailFolders", this.mailFolders);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues("managedAppRegistrations", this.managedAppRegistrations);
        writer.writeCollectionOfObjectValues("managedDevices", this.managedDevices);
        writer.writeObjectValue("manager", this.manager);
        writer.writeCollectionOfObjectValues("memberOf", this.memberOf);
        writer.writeCollectionOfObjectValues("messages", this.messages);
        writer.writeStringValue("mobilePhone", this.mobilePhone);
        writer.writeStringValue("mySite", this.mySite);
        writer.writeCollectionOfObjectValues("oauth2PermissionGrants", this.oauth2PermissionGrants);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeObjectValue("onenote", this.onenote);
        writer.writeCollectionOfObjectValues("onlineMeetings", this.onlineMeetings);
        writer.writeStringValue("onPremisesDistinguishedName", this.onPremisesDistinguishedName);
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        writer.writeObjectValue("onPremisesExtensionAttributes", this.onPremisesExtensionAttributes);
        writer.writeStringValue("onPremisesImmutableId", this.onPremisesImmutableId);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeCollectionOfPrimitiveValues("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeStringValue("onPremisesUserPrincipalName", this.onPremisesUserPrincipalName);
        writer.writeCollectionOfPrimitiveValues("otherMails", this.otherMails);
        writer.writeObjectValue("outlook", this.outlook);
        writer.writeCollectionOfObjectValues("ownedDevices", this.ownedDevices);
        writer.writeCollectionOfObjectValues("ownedObjects", this.ownedObjects);
        writer.writeStringValue("passwordPolicies", this.passwordPolicies);
        writer.writeObjectValue("passwordProfile", this.passwordProfile);
        writer.writeCollectionOfPrimitiveValues("pastProjects", this.pastProjects);
        writer.writeCollectionOfObjectValues("people", this.people);
        writer.writeObjectValue("photo", this.photo);
        writer.writeCollectionOfObjectValues("photos", this.photos);
        writer.writeObjectValue("planner", this.planner);
        writer.writeStringValue("postalCode", this.postalCode);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeStringValue("preferredName", this.preferredName);
        writer.writeObjectValue("presence", this.presence);
        writer.writeCollectionOfObjectValues("provisionedPlans", this.provisionedPlans);
        writer.writeCollectionOfPrimitiveValues("proxyAddresses", this.proxyAddresses);
        writer.writeCollectionOfObjectValues("registeredDevices", this.registeredDevices);
        writer.writeCollectionOfPrimitiveValues("responsibilities", this.responsibilities);
        writer.writeCollectionOfPrimitiveValues("schools", this.schools);
        writer.writeCollectionOfObjectValues("scopedRoleMemberOf", this.scopedRoleMemberOf);
        writer.writeObjectValue("settings", this.settings);
        writer.writeBooleanValue("showInAddressList", this.showInAddressList);
        writer.writeDateValue("signInSessionsValidFromDateTime", this.signInSessionsValidFromDateTime);
        writer.writeCollectionOfPrimitiveValues("skills", this.skills);
        writer.writeStringValue("state", this.state);
        writer.writeStringValue("streetAddress", this.streetAddress);
        writer.writeStringValue("surname", this.surname);
        writer.writeObjectValue("teamwork", this.teamwork);
        writer.writeObjectValue("todo", this.todo);
        writer.writeCollectionOfObjectValues("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeStringValue("usageLocation", this.usageLocation);
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
    ;
    ;
    ;
    return User;
}(directoryObject_1.DirectoryObject));
exports.User = User;
