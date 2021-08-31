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
exports.Group = void 0;
var appRoleAssignment_1 = require("./appRoleAssignment");
var assignedLicense_1 = require("./assignedLicense");
var calendar_1 = require("./calendar");
var conversation_1 = require("./conversation");
var conversationThread_1 = require("./conversationThread");
var directoryObject_1 = require("./directoryObject");
var drive_1 = require("./drive/drive");
var event_1 = require("./event");
var extension_1 = require("./extension");
var groupLifecyclePolicy_1 = require("./groupLifecyclePolicy");
var onenote_1 = require("./groups/onenote/onenote");
var plannerGroup_1 = require("./groups/planner/plannerGroup");
var groupSetting_1 = require("./groupSetting");
var profilePhoto_1 = require("./profilePhoto");
var resourceSpecificPermissionGrant_1 = require("./resourceSpecificPermissionGrant");
var site_1 = require("./site");
var team_1 = require("./team");
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    /**
     * Instantiates a new group and sets the default values.
     */
    function Group() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Group.prototype, "acceptedSenders", {
        /**
         * Gets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
         * @returns a directoryObject
         */
        get: function () {
            return this._acceptedSenders;
        },
        /**
         * Sets the acceptedSenders property value. The list of users or groups that are allowed to create post's or calendar events in this group. If this list is non-empty then only users or groups listed here are allowed to post.
         * @param value Value to set for the acceptedSenders property.
         */
        set: function (value) {
            this._acceptedSenders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "allowExternalSenders", {
        /**
         * Gets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a boolean
         */
        get: function () {
            return this._allowExternalSenders;
        },
        /**
         * Sets the allowExternalSenders property value. Indicates if people external to the organization can send messages to the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the allowExternalSenders property.
         */
        set: function (value) {
            this._allowExternalSenders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "appRoleAssignments", {
        /**
         * Gets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
         * @returns a appRoleAssignment
         */
        get: function () {
            return this._appRoleAssignments;
        },
        /**
         * Sets the appRoleAssignments property value. Represents the app roles a group has been granted for an application. Supports $expand.
         * @param value Value to set for the appRoleAssignments property.
         */
        set: function (value) {
            this._appRoleAssignments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "assignedLabels", {
        /**
         * Gets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
         * @returns a assignedLabel
         */
        get: function () {
            return this._assignedLabels;
        },
        /**
         * Sets the assignedLabels property value. The list of sensitivity label pairs (label ID, label name) associated with a Microsoft 365 group. Returned only on $select.
         * @param value Value to set for the assignedLabels property.
         */
        set: function (value) {
            this._assignedLabels = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "assignedLicenses", {
        /**
         * Gets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
         * @returns a assignedLicense
         */
        get: function () {
            return this._assignedLicenses;
        },
        /**
         * Sets the assignedLicenses property value. The licenses that are assigned to the group. Returned only on $select. Supports $filter (eq). Read-only.
         * @param value Value to set for the assignedLicenses property.
         */
        set: function (value) {
            this._assignedLicenses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "autoSubscribeNewMembers", {
        /**
         * Gets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a boolean
         */
        get: function () {
            return this._autoSubscribeNewMembers;
        },
        /**
         * Sets the autoSubscribeNewMembers property value. Indicates if new members added to the group will be auto-subscribed to receive email notifications. You can set this property in a PATCH request for the group; do not set it in the initial POST request that creates the group. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the autoSubscribeNewMembers property.
         */
        set: function (value) {
            this._autoSubscribeNewMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "calendar", {
        /**
         * Gets the calendar property value. The group's calendar. Read-only.
         * @returns a calendar
         */
        get: function () {
            return this._calendar;
        },
        /**
         * Sets the calendar property value. The group's calendar. Read-only.
         * @param value Value to set for the calendar property.
         */
        set: function (value) {
            this._calendar = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "calendarView", {
        /**
         * Gets the calendarView property value. The calendar view for the calendar. Read-only.
         * @returns a event
         */
        get: function () {
            return this._calendarView;
        },
        /**
         * Sets the calendarView property value. The calendar view for the calendar. Read-only.
         * @param value Value to set for the calendarView property.
         */
        set: function (value) {
            this._calendarView = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "classification", {
        /**
         * Gets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._classification;
        },
        /**
         * Sets the classification property value. Describes a classification for the group (such as low, medium or high business impact). Valid values for this property are defined by creating a ClassificationList setting value, based on the template definition.Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @param value Value to set for the classification property.
         */
        set: function (value) {
            this._classification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "conversations", {
        /**
         * Gets the conversations property value. The group's conversations.
         * @returns a conversation
         */
        get: function () {
            return this._conversations;
        },
        /**
         * Sets the conversations property value. The group's conversations.
         * @param value Value to set for the conversations property.
         */
        set: function (value) {
            this._conversations = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Timestamp of when the group was created. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "createdOnBehalfOf", {
        /**
         * Gets the createdOnBehalfOf property value. The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only.
         * @returns a directoryObject
         */
        get: function () {
            return this._createdOnBehalfOf;
        },
        /**
         * Sets the createdOnBehalfOf property value. The user (or application) that created the group. Note: This is not set if the user is an administrator. Read-only.
         * @param value Value to set for the createdOnBehalfOf property.
         */
        set: function (value) {
            this._createdOnBehalfOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "description", {
        /**
         * Gets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. An optional description for the group. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith) and $search.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "displayName", {
        /**
         * Gets the displayName property value. The display name for the group. This property is required when a group is created and cannot be cleared during updates. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. The display name for the group. This property is required when a group is created and cannot be cleared during updates. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith), $search, and $orderBy.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "drive", {
        /**
         * Gets the drive property value. The group's default drive. Read-only.
         * @returns a drive
         */
        get: function () {
            return this._drive;
        },
        /**
         * Sets the drive property value. The group's default drive. Read-only.
         * @param value Value to set for the drive property.
         */
        set: function (value) {
            this._drive = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "drives", {
        /**
         * Gets the drives property value. The group's drives. Read-only.
         * @returns a drive
         */
        get: function () {
            return this._drives;
        },
        /**
         * Sets the drives property value. The group's drives. Read-only.
         * @param value Value to set for the drives property.
         */
        set: function (value) {
            this._drives = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "events", {
        /**
         * Gets the events property value. The group's events.
         * @returns a event
         */
        get: function () {
            return this._events;
        },
        /**
         * Sets the events property value. The group's events.
         * @param value Value to set for the events property.
         */
        set: function (value) {
            this._events = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "expirationDateTime", {
        /**
         * Gets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @returns a Date
         */
        get: function () {
            return this._expirationDateTime;
        },
        /**
         * Sets the expirationDateTime property value. Timestamp of when the group is set to expire. The value cannot be modified and is automatically populated when the group is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @param value Value to set for the expirationDateTime property.
         */
        set: function (value) {
            this._expirationDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the group. Read-only. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "groupLifecyclePolicies", {
        /**
         * Gets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
         * @returns a groupLifecyclePolicy
         */
        get: function () {
            return this._groupLifecyclePolicies;
        },
        /**
         * Sets the groupLifecyclePolicies property value. The collection of lifecycle policies for this group. Read-only. Nullable.
         * @param value Value to set for the groupLifecyclePolicies property.
         */
        set: function (value) {
            this._groupLifecyclePolicies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "groupTypes", {
        /**
         * Gets the groupTypes property value. Specifies the group type and its membership.  If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.  Returned by default. Supports $filter (eq, NOT).
         * @returns a string
         */
        get: function () {
            return this._groupTypes;
        },
        /**
         * Sets the groupTypes property value. Specifies the group type and its membership.  If the collection contains Unified, the group is a Microsoft 365 group; otherwise, it's either a security group or distribution group. For details, see groups overview.If the collection includes DynamicMembership, the group has dynamic membership; otherwise, membership is static.  Returned by default. Supports $filter (eq, NOT).
         * @param value Value to set for the groupTypes property.
         */
        set: function (value) {
            this._groupTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "hasMembersWithLicenseErrors", {
        /**
         * Gets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
         * @returns a boolean
         */
        get: function () {
            return this._hasMembersWithLicenseErrors;
        },
        /**
         * Sets the hasMembersWithLicenseErrors property value. Indicates whether there are members in this group that have license errors from its group-based license assignment. This property is never returned on a GET operation. You can use it as a $filter argument to get groups that have members with license errors (that is, filter for this property being true).  Supports $filter (eq).
         * @param value Value to set for the hasMembersWithLicenseErrors property.
         */
        set: function (value) {
            this._hasMembersWithLicenseErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "hideFromAddressLists", {
        /**
         * Gets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a boolean
         */
        get: function () {
            return this._hideFromAddressLists;
        },
        /**
         * Sets the hideFromAddressLists property value. true if the group is not displayed in certain parts of the Outlook user interface: in the Address Book, in address lists for selecting message recipients, and in the Browse Groups dialog for searching groups; false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the hideFromAddressLists property.
         */
        set: function (value) {
            this._hideFromAddressLists = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "hideFromOutlookClients", {
        /**
         * Gets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a boolean
         */
        get: function () {
            return this._hideFromOutlookClients;
        },
        /**
         * Sets the hideFromOutlookClients property value. true if the group is not displayed in Outlook clients, such as Outlook for Windows and Outlook on the web, false otherwise. Default value is false. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the hideFromOutlookClients property.
         */
        set: function (value) {
            this._hideFromOutlookClients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "isArchived", {
        /**
         * Gets the isArchived property value.
         * @returns a boolean
         */
        get: function () {
            return this._isArchived;
        },
        /**
         * Sets the isArchived property value.
         * @param value Value to set for the isArchived property.
         */
        set: function (value) {
            this._isArchived = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "isAssignableToRole", {
        /**
         * Gets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role.This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must also be assigned the Directory.AccessAsUser.All permission to set this property. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, NOT).
         * @returns a boolean
         */
        get: function () {
            return this._isAssignableToRole;
        },
        /**
         * Sets the isAssignableToRole property value. Indicates whether this group can be assigned to an Azure Active Directory role.This property can only be set while creating the group and is immutable. If set to true, the securityEnabled property must also be set to true and the group cannot be a dynamic group (that is, groupTypes cannot contain DynamicMembership). Only callers in Global administrator and Privileged role administrator roles can set this property. The caller must also be assigned the Directory.AccessAsUser.All permission to set this property. For more, see Using a group to manage Azure AD role assignmentsReturned by default. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the isAssignableToRole property.
         */
        set: function (value) {
            this._isAssignableToRole = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "isSubscribedByMail", {
        /**
         * Gets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a boolean
         */
        get: function () {
            return this._isSubscribedByMail;
        },
        /**
         * Sets the isSubscribedByMail property value. Indicates whether the signed-in user is subscribed to receive email conversations. Default value is true. Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the isSubscribedByMail property.
         */
        set: function (value) {
            this._isSubscribedByMail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "licenseProcessingState", {
        /**
         * Gets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only.
         * @returns a licenseProcessingState
         */
        get: function () {
            return this._licenseProcessingState;
        },
        /**
         * Sets the licenseProcessingState property value. Indicates status of the group license assignment to all members of the group. Possible values: QueuedForProcessing, ProcessingInProgress, and ProcessingComplete. Returned only on $select. Read-only.
         * @param value Value to set for the licenseProcessingState property.
         */
        set: function (value) {
            this._licenseProcessingState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "mail", {
        /**
         * Gets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mail;
        },
        /**
         * Sets the mail property value. The SMTP address for the group, for example, 'serviceadmins@contoso.onmicrosoft.com'. Returned by default. Read-only. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mail property.
         */
        set: function (value) {
            this._mail = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "mailEnabled", {
        /**
         * Gets the mailEnabled property value. Specifies whether the group is mail-enabled. Returned by default. Supports $filter (eq, ne, NOT).
         * @returns a boolean
         */
        get: function () {
            return this._mailEnabled;
        },
        /**
         * Sets the mailEnabled property value. Specifies whether the group is mail-enabled. Returned by default. Supports $filter (eq, ne, NOT).
         * @param value Value to set for the mailEnabled property.
         */
        set: function (value) {
            this._mailEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "mailNickname", {
        /**
         * Gets the mailNickname property value. The mail alias for the group, unique in the organization. This property must be specified when a group is created. These characters cannot be used in the mailNickName: @()/[]';:.<>,SPACE. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._mailNickname;
        },
        /**
         * Sets the mailNickname property value. The mail alias for the group, unique in the organization. This property must be specified when a group is created. These characters cannot be used in the mailNickName: @()/[]';:.<>,SPACE. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the mailNickname property.
         */
        set: function (value) {
            this._mailNickname = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "memberOf", {
        /**
         * Gets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._memberOf;
        },
        /**
         * Sets the memberOf property value. Groups and administrative units that this group is a member of. HTTP Methods: GET (supported for all groups). Read-only. Nullable. Supports $expand.
         * @param value Value to set for the memberOf property.
         */
        set: function (value) {
            this._memberOf = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "members", {
        /**
         * Gets the members property value. Users, contacts, and groups that are members of this group. HTTP Methods: GET (supported for all groups), POST (supported for security groups and mail-enabled security groups), DELETE (supported only for security groups) Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. Users, contacts, and groups that are members of this group. HTTP Methods: GET (supported for all groups), POST (supported for security groups and mail-enabled security groups), DELETE (supported only for security groups) Read-only. Nullable. Supports $expand.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "membershipRule", {
        /**
         * Gets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._membershipRule;
        },
        /**
         * Sets the membershipRule property value. The rule that determines members for this group if the group is a dynamic group (groupTypes contains DynamicMembership). For more information about the syntax of the membership rule, see Membership Rules syntax. Returned by default. Supports $filter (eq, ne, NOT, ge, le, startsWith).
         * @param value Value to set for the membershipRule property.
         */
        set: function (value) {
            this._membershipRule = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "membershipRuleProcessingState", {
        /**
         * Gets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, NOT, in).
         * @returns a string
         */
        get: function () {
            return this._membershipRuleProcessingState;
        },
        /**
         * Sets the membershipRuleProcessingState property value. Indicates whether the dynamic membership processing is on or paused. Possible values are On or Paused. Returned by default. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the membershipRuleProcessingState property.
         */
        set: function (value) {
            this._membershipRuleProcessingState = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "membersWithLicenseErrors", {
        /**
         * Gets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
         * @returns a directoryObject
         */
        get: function () {
            return this._membersWithLicenseErrors;
        },
        /**
         * Sets the membersWithLicenseErrors property value. A list of group members with license errors from this group-based license assignment. Read-only.
         * @param value Value to set for the membersWithLicenseErrors property.
         */
        set: function (value) {
            this._membersWithLicenseErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onenote", {
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
    Object.defineProperty(Group.prototype, "onPremisesDomainName", {
        /**
         * Gets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesDomainName;
        },
        /**
         * Sets the onPremisesDomainName property value. Contains the on-premises domain FQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
         * @param value Value to set for the onPremisesDomainName property.
         */
        set: function (value) {
            this._onPremisesDomainName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesLastSyncDateTime", {
        /**
         * Gets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @returns a Date
         */
        get: function () {
            return this._onPremisesLastSyncDateTime;
        },
        /**
         * Sets the onPremisesLastSyncDateTime property value. Indicates the last time at which the group was synced with the on-premises directory.The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Read-only. Supports $filter (eq, ne, NOT, ge, le, in).
         * @param value Value to set for the onPremisesLastSyncDateTime property.
         */
        set: function (value) {
            this._onPremisesLastSyncDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesNetBiosName", {
        /**
         * Gets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesNetBiosName;
        },
        /**
         * Sets the onPremisesNetBiosName property value. Contains the on-premises netBios name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Read-only.
         * @param value Value to set for the onPremisesNetBiosName property.
         */
        set: function (value) {
            this._onPremisesNetBiosName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesProvisioningErrors", {
        /**
         * Gets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, NOT).
         * @returns a onPremisesProvisioningError
         */
        get: function () {
            return this._onPremisesProvisioningErrors;
        },
        /**
         * Sets the onPremisesProvisioningErrors property value. Errors when using Microsoft synchronization product during provisioning. Returned by default. Supports $filter (eq, NOT).
         * @param value Value to set for the onPremisesProvisioningErrors property.
         */
        set: function (value) {
            this._onPremisesProvisioningErrors = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesSamAccountName", {
        /**
         * Gets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith). Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesSamAccountName;
        },
        /**
         * Sets the onPremisesSamAccountName property value. Contains the on-premises SAM account name synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect.Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith). Read-only.
         * @param value Value to set for the onPremisesSamAccountName property.
         */
        set: function (value) {
            this._onPremisesSamAccountName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesSecurityIdentifier", {
        /**
         * Gets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter on null values. Read-only.
         * @returns a string
         */
        get: function () {
            return this._onPremisesSecurityIdentifier;
        },
        /**
         * Sets the onPremisesSecurityIdentifier property value. Contains the on-premises security identifier (SID) for the group that was synchronized from on-premises to the cloud. Returned by default. Supports $filter on null values. Read-only.
         * @param value Value to set for the onPremisesSecurityIdentifier property.
         */
        set: function (value) {
            this._onPremisesSecurityIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "onPremisesSyncEnabled", {
        /**
         * Gets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._onPremisesSyncEnabled;
        },
        /**
         * Sets the onPremisesSyncEnabled property value. true if this group is synced from an on-premises directory; false if this group was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Returned by default. Read-only. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the onPremisesSyncEnabled property.
         */
        set: function (value) {
            this._onPremisesSyncEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "owners", {
        /**
         * Gets the owners property value. The owners of the group. The owners are a set of non-admin users who are allowed to modify this object. HTTP Methods: GET (supported for all groups), POST (supported for security groups and mail-enabled security groups), DELETE (supported only for security groups) Read-only. Nullable. Supports $expand.
         * @returns a directoryObject
         */
        get: function () {
            return this._owners;
        },
        /**
         * Sets the owners property value. The owners of the group. The owners are a set of non-admin users who are allowed to modify this object. HTTP Methods: GET (supported for all groups), POST (supported for security groups and mail-enabled security groups), DELETE (supported only for security groups) Read-only. Nullable. Supports $expand.
         * @param value Value to set for the owners property.
         */
        set: function (value) {
            this._owners = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "permissionGrants", {
        /**
         * Gets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
         * @returns a resourceSpecificPermissionGrant
         */
        get: function () {
            return this._permissionGrants;
        },
        /**
         * Sets the permissionGrants property value. The permissions that have been granted for a group to a specific application. Supports $expand.
         * @param value Value to set for the permissionGrants property.
         */
        set: function (value) {
            this._permissionGrants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "photo", {
        /**
         * Gets the photo property value. The group's profile photo.
         * @returns a profilePhoto
         */
        get: function () {
            return this._photo;
        },
        /**
         * Sets the photo property value. The group's profile photo.
         * @param value Value to set for the photo property.
         */
        set: function (value) {
            this._photo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "photos", {
        /**
         * Gets the photos property value. The profile photos owned by the group. Read-only. Nullable.
         * @returns a profilePhoto
         */
        get: function () {
            return this._photos;
        },
        /**
         * Sets the photos property value. The profile photos owned by the group. Read-only. Nullable.
         * @param value Value to set for the photos property.
         */
        set: function (value) {
            this._photos = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "planner", {
        /**
         * Gets the planner property value. Selective Planner services available to the group. Read-only. Nullable.
         * @returns a plannerGroup
         */
        get: function () {
            return this._planner;
        },
        /**
         * Sets the planner property value. Selective Planner services available to the group. Read-only. Nullable.
         * @param value Value to set for the planner property.
         */
        set: function (value) {
            this._planner = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "preferredDataLocation", {
        /**
         * Gets the preferredDataLocation property value. The preferred data location for the group. For more information, see  OneDrive Online Multi-Geo. Returned by default.
         * @returns a string
         */
        get: function () {
            return this._preferredDataLocation;
        },
        /**
         * Sets the preferredDataLocation property value. The preferred data location for the group. For more information, see  OneDrive Online Multi-Geo. Returned by default.
         * @param value Value to set for the preferredDataLocation property.
         */
        set: function (value) {
            this._preferredDataLocation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "preferredLanguage", {
        /**
         * Gets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example 'en-US'. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @returns a string
         */
        get: function () {
            return this._preferredLanguage;
        },
        /**
         * Sets the preferredLanguage property value. The preferred language for a Microsoft 365 group. Should follow ISO 639-1 Code; for example 'en-US'. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in, startsWith).
         * @param value Value to set for the preferredLanguage property.
         */
        set: function (value) {
            this._preferredLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "proxyAddresses", {
        /**
         * Gets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @returns a string
         */
        get: function () {
            return this._proxyAddresses;
        },
        /**
         * Sets the proxyAddresses property value. Email addresses for the group that direct to the same group mailbox. For example: ['SMTP: bob@contoso.com', 'smtp: bob@sales.contoso.com']. The any operator is required for filter expressions on multi-valued properties. Returned by default. Read-only. Not nullable. Supports $filter (eq, NOT, ge, le, startsWith).
         * @param value Value to set for the proxyAddresses property.
         */
        set: function (value) {
            this._proxyAddresses = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "rejectedSenders", {
        /**
         * Gets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
         * @returns a directoryObject
         */
        get: function () {
            return this._rejectedSenders;
        },
        /**
         * Sets the rejectedSenders property value. The list of users or groups that are not allowed to create posts or calendar events in this group. Nullable
         * @param value Value to set for the rejectedSenders property.
         */
        set: function (value) {
            this._rejectedSenders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "renewedDateTime", {
        /**
         * Gets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @returns a Date
         */
        get: function () {
            return this._renewedDateTime;
        },
        /**
         * Sets the renewedDateTime property value. Timestamp of when the group was last renewed. This cannot be modified directly and is only updated via the renew service action. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Returned by default. Supports $filter (eq, ne, NOT, ge, le, in). Read-only.
         * @param value Value to set for the renewedDateTime property.
         */
        set: function (value) {
            this._renewedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "securityEnabled", {
        /**
         * Gets the securityEnabled property value. Specifies whether the group is a security group. Returned by default. Supports $filter (eq, ne, NOT, in).
         * @returns a boolean
         */
        get: function () {
            return this._securityEnabled;
        },
        /**
         * Sets the securityEnabled property value. Specifies whether the group is a security group. Returned by default. Supports $filter (eq, ne, NOT, in).
         * @param value Value to set for the securityEnabled property.
         */
        set: function (value) {
            this._securityEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "securityIdentifier", {
        /**
         * Gets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
         * @returns a string
         */
        get: function () {
            return this._securityIdentifier;
        },
        /**
         * Sets the securityIdentifier property value. Security identifier of the group, used in Windows scenarios. Returned by default.
         * @param value Value to set for the securityIdentifier property.
         */
        set: function (value) {
            this._securityIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "settings", {
        /**
         * Gets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
         * @returns a groupSetting
         */
        get: function () {
            return this._settings;
        },
        /**
         * Sets the settings property value. Settings that can govern this group's behavior, like whether members can invite guest users to the group. Nullable.
         * @param value Value to set for the settings property.
         */
        set: function (value) {
            this._settings = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "sites", {
        /**
         * Gets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
         * @returns a site
         */
        get: function () {
            return this._sites;
        },
        /**
         * Sets the sites property value. The list of SharePoint sites in this group. Access the default site with /sites/root.
         * @param value Value to set for the sites property.
         */
        set: function (value) {
            this._sites = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "team", {
        /**
         * Gets the team property value.
         * @returns a team
         */
        get: function () {
            return this._team;
        },
        /**
         * Sets the team property value.
         * @param value Value to set for the team property.
         */
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "theme", {
        /**
         * Gets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
         * @returns a string
         */
        get: function () {
            return this._theme;
        },
        /**
         * Sets the theme property value. Specifies a Microsoft 365 group's color theme. Possible values are Teal, Purple, Green, Blue, Pink, Orange or Red. Returned by default.
         * @param value Value to set for the theme property.
         */
        set: function (value) {
            this._theme = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "threads", {
        /**
         * Gets the threads property value. The group's conversation threads. Nullable.
         * @returns a conversationThread
         */
        get: function () {
            return this._threads;
        },
        /**
         * Sets the threads property value. The group's conversation threads. Nullable.
         * @param value Value to set for the threads property.
         */
        set: function (value) {
            this._threads = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "transitiveMemberOf", {
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
    Object.defineProperty(Group.prototype, "transitiveMembers", {
        /**
         * Gets the transitiveMembers property value.
         * @returns a directoryObject
         */
        get: function () {
            return this._transitiveMembers;
        },
        /**
         * Sets the transitiveMembers property value.
         * @param value Value to set for the transitiveMembers property.
         */
        set: function (value) {
            this._transitiveMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "unseenCount", {
        /**
         * Gets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @returns a integer
         */
        get: function () {
            return this._unseenCount;
        },
        /**
         * Sets the unseenCount property value. Count of conversations that have received new posts since the signed-in user last visited the group. This property is the same as unseenConversationsCount.Returned only on $select. Supported only on the Get group API (GET /groups/{ID}).
         * @param value Value to set for the unseenCount property.
         */
        set: function (value) {
            this._unseenCount = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "visibility", {
        /**
         * Gets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. See group visibility options to learn more. Returned by default.
         * @returns a string
         */
        get: function () {
            return this._visibility;
        },
        /**
         * Sets the visibility property value. Specifies the group join policy and group content visibility for groups. Possible values are: Private, Public, or Hiddenmembership. Hiddenmembership can be set only for Microsoft 365 groups, when the groups are created. It can't be updated later. Other values of visibility can be updated after group creation. If visibility value is not specified during group creation on Microsoft Graph, a security group is created as Private by default and Microsoft 365 group is Public. See group visibility options to learn more. Returned by default.
         * @param value Value to set for the visibility property.
         */
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Group.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["acceptedSenders", function (o, n) { o.acceptedSenders = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["allowExternalSenders", function (o, n) { o.allowExternalSenders = n.getBooleanValue(); }],
            ["appRoleAssignments", function (o, n) { o.appRoleAssignments = n.getCollectionOfObjectValues(appRoleAssignment_1.AppRoleAssignment); }],
            ["assignedLabels", function (o, n) { o.assignedLabels = n.getCollectionOfPrimitiveValues(); }],
            ["assignedLicenses", function (o, n) { o.assignedLicenses = n.getCollectionOfObjectValues(assignedLicense_1.AssignedLicense); }],
            ["autoSubscribeNewMembers", function (o, n) { o.autoSubscribeNewMembers = n.getBooleanValue(); }],
            ["calendar", function (o, n) { o.calendar = n.getObjectValue(calendar_1.Calendar); }],
            ["calendarView", function (o, n) { o.calendarView = n.getCollectionOfObjectValues(event_1.Event); }],
            ["classification", function (o, n) { o.classification = n.getStringValue(); }],
            ["conversations", function (o, n) { o.conversations = n.getCollectionOfObjectValues(conversation_1.Conversation); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["createdOnBehalfOf", function (o, n) { o.createdOnBehalfOf = n.getObjectValue(directoryObject_1.DirectoryObject); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["drive", function (o, n) { o.drive = n.getObjectValue(drive_1.Drive); }],
            ["drives", function (o, n) { o.drives = n.getCollectionOfObjectValues(drive_1.Drive); }],
            ["events", function (o, n) { o.events = n.getCollectionOfObjectValues(event_1.Event); }],
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["groupLifecyclePolicies", function (o, n) { o.groupLifecyclePolicies = n.getCollectionOfObjectValues(groupLifecyclePolicy_1.GroupLifecyclePolicy); }],
            ["groupTypes", function (o, n) { o.groupTypes = n.getCollectionOfPrimitiveValues(); }],
            ["hasMembersWithLicenseErrors", function (o, n) { o.hasMembersWithLicenseErrors = n.getBooleanValue(); }],
            ["hideFromAddressLists", function (o, n) { o.hideFromAddressLists = n.getBooleanValue(); }],
            ["hideFromOutlookClients", function (o, n) { o.hideFromOutlookClients = n.getBooleanValue(); }],
            ["isArchived", function (o, n) { o.isArchived = n.getBooleanValue(); }],
            ["isAssignableToRole", function (o, n) { o.isAssignableToRole = n.getBooleanValue(); }],
            ["isSubscribedByMail", function (o, n) { o.isSubscribedByMail = n.getBooleanValue(); }],
            ["licenseProcessingState", function (o, n) { o.licenseProcessingState = n.getObjectValue(LicenseProcessingState); }],
            ["mail", function (o, n) { o.mail = n.getStringValue(); }],
            ["mailEnabled", function (o, n) { o.mailEnabled = n.getBooleanValue(); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["memberOf", function (o, n) { o.memberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["membershipRule", function (o, n) { o.membershipRule = n.getStringValue(); }],
            ["membershipRuleProcessingState", function (o, n) { o.membershipRuleProcessingState = n.getStringValue(); }],
            ["membersWithLicenseErrors", function (o, n) { o.membersWithLicenseErrors = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["onenote", function (o, n) { o.onenote = n.getObjectValue(onenote_1.Onenote); }],
            ["onPremisesDomainName", function (o, n) { o.onPremisesDomainName = n.getStringValue(); }],
            ["onPremisesLastSyncDateTime", function (o, n) { o.onPremisesLastSyncDateTime = n.getDateValue(); }],
            ["onPremisesNetBiosName", function (o, n) { o.onPremisesNetBiosName = n.getStringValue(); }],
            ["onPremisesProvisioningErrors", function (o, n) { o.onPremisesProvisioningErrors = n.getCollectionOfPrimitiveValues(); }],
            ["onPremisesSamAccountName", function (o, n) { o.onPremisesSamAccountName = n.getStringValue(); }],
            ["onPremisesSecurityIdentifier", function (o, n) { o.onPremisesSecurityIdentifier = n.getStringValue(); }],
            ["onPremisesSyncEnabled", function (o, n) { o.onPremisesSyncEnabled = n.getBooleanValue(); }],
            ["owners", function (o, n) { o.owners = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["permissionGrants", function (o, n) { o.permissionGrants = n.getCollectionOfObjectValues(resourceSpecificPermissionGrant_1.ResourceSpecificPermissionGrant); }],
            ["photo", function (o, n) { o.photo = n.getObjectValue(profilePhoto_1.ProfilePhoto); }],
            ["photos", function (o, n) { o.photos = n.getCollectionOfObjectValues(profilePhoto_1.ProfilePhoto); }],
            ["planner", function (o, n) { o.planner = n.getObjectValue(plannerGroup_1.PlannerGroup); }],
            ["preferredDataLocation", function (o, n) { o.preferredDataLocation = n.getStringValue(); }],
            ["preferredLanguage", function (o, n) { o.preferredLanguage = n.getStringValue(); }],
            ["proxyAddresses", function (o, n) { o.proxyAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["rejectedSenders", function (o, n) { o.rejectedSenders = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["renewedDateTime", function (o, n) { o.renewedDateTime = n.getDateValue(); }],
            ["securityEnabled", function (o, n) { o.securityEnabled = n.getBooleanValue(); }],
            ["securityIdentifier", function (o, n) { o.securityIdentifier = n.getStringValue(); }],
            ["settings", function (o, n) { o.settings = n.getCollectionOfObjectValues(groupSetting_1.GroupSetting); }],
            ["sites", function (o, n) { o.sites = n.getCollectionOfObjectValues(site_1.Site); }],
            ["team", function (o, n) { o.team = n.getObjectValue(team_1.Team); }],
            ["theme", function (o, n) { o.theme = n.getStringValue(); }],
            ["threads", function (o, n) { o.threads = n.getCollectionOfObjectValues(conversationThread_1.ConversationThread); }],
            ["transitiveMemberOf", function (o, n) { o.transitiveMemberOf = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["transitiveMembers", function (o, n) { o.transitiveMembers = n.getCollectionOfObjectValues(directoryObject_1.DirectoryObject); }],
            ["unseenCount", function (o, n) { o.unseenCount = n.getNumberValue(); }],
            ["visibility", function (o, n) { o.visibility = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Group.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("acceptedSenders", this.acceptedSenders);
        writer.writeBooleanValue("allowExternalSenders", this.allowExternalSenders);
        writer.writeCollectionOfObjectValues("appRoleAssignments", this.appRoleAssignments);
        writer.writeCollectionOfPrimitiveValues("assignedLabels", this.assignedLabels);
        writer.writeCollectionOfObjectValues("assignedLicenses", this.assignedLicenses);
        writer.writeBooleanValue("autoSubscribeNewMembers", this.autoSubscribeNewMembers);
        writer.writeObjectValue("calendar", this.calendar);
        writer.writeCollectionOfObjectValues("calendarView", this.calendarView);
        writer.writeStringValue("classification", this.classification);
        writer.writeCollectionOfObjectValues("conversations", this.conversations);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue("createdOnBehalfOf", this.createdOnBehalfOf);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("drive", this.drive);
        writer.writeCollectionOfObjectValues("drives", this.drives);
        writer.writeCollectionOfObjectValues("events", this.events);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeCollectionOfObjectValues("groupLifecyclePolicies", this.groupLifecyclePolicies);
        writer.writeCollectionOfPrimitiveValues("groupTypes", this.groupTypes);
        writer.writeBooleanValue("hasMembersWithLicenseErrors", this.hasMembersWithLicenseErrors);
        writer.writeBooleanValue("hideFromAddressLists", this.hideFromAddressLists);
        writer.writeBooleanValue("hideFromOutlookClients", this.hideFromOutlookClients);
        writer.writeBooleanValue("isArchived", this.isArchived);
        writer.writeBooleanValue("isAssignableToRole", this.isAssignableToRole);
        writer.writeBooleanValue("isSubscribedByMail", this.isSubscribedByMail);
        writer.writeObjectValue("licenseProcessingState", this.licenseProcessingState);
        writer.writeStringValue("mail", this.mail);
        writer.writeBooleanValue("mailEnabled", this.mailEnabled);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues("memberOf", this.memberOf);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeStringValue("membershipRule", this.membershipRule);
        writer.writeStringValue("membershipRuleProcessingState", this.membershipRuleProcessingState);
        writer.writeCollectionOfObjectValues("membersWithLicenseErrors", this.membersWithLicenseErrors);
        writer.writeObjectValue("onenote", this.onenote);
        writer.writeStringValue("onPremisesDomainName", this.onPremisesDomainName);
        writer.writeDateValue("onPremisesLastSyncDateTime", this.onPremisesLastSyncDateTime);
        writer.writeStringValue("onPremisesNetBiosName", this.onPremisesNetBiosName);
        writer.writeCollectionOfPrimitiveValues("onPremisesProvisioningErrors", this.onPremisesProvisioningErrors);
        writer.writeStringValue("onPremisesSamAccountName", this.onPremisesSamAccountName);
        writer.writeStringValue("onPremisesSecurityIdentifier", this.onPremisesSecurityIdentifier);
        writer.writeBooleanValue("onPremisesSyncEnabled", this.onPremisesSyncEnabled);
        writer.writeCollectionOfObjectValues("owners", this.owners);
        writer.writeCollectionOfObjectValues("permissionGrants", this.permissionGrants);
        writer.writeObjectValue("photo", this.photo);
        writer.writeCollectionOfObjectValues("photos", this.photos);
        writer.writeObjectValue("planner", this.planner);
        writer.writeStringValue("preferredDataLocation", this.preferredDataLocation);
        writer.writeStringValue("preferredLanguage", this.preferredLanguage);
        writer.writeCollectionOfPrimitiveValues("proxyAddresses", this.proxyAddresses);
        writer.writeCollectionOfObjectValues("rejectedSenders", this.rejectedSenders);
        writer.writeDateValue("renewedDateTime", this.renewedDateTime);
        writer.writeBooleanValue("securityEnabled", this.securityEnabled);
        writer.writeStringValue("securityIdentifier", this.securityIdentifier);
        writer.writeCollectionOfObjectValues("settings", this.settings);
        writer.writeCollectionOfObjectValues("sites", this.sites);
        writer.writeObjectValue("team", this.team);
        writer.writeStringValue("theme", this.theme);
        writer.writeCollectionOfObjectValues("threads", this.threads);
        writer.writeCollectionOfObjectValues("transitiveMemberOf", this.transitiveMemberOf);
        writer.writeCollectionOfObjectValues("transitiveMembers", this.transitiveMembers);
        writer.writeNumberValue("unseenCount", this.unseenCount);
        writer.writeStringValue("visibility", this.visibility);
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
    return Group;
}(directoryObject_1.DirectoryObject));
exports.Group = Group;
