"use strict";
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
exports.MeRequestBuilder = void 0;
var user_1 = require("../invitations/invitedUser/user");
var activitiesRequestBuilder_1 = require("./activities/activitiesRequestBuilder");
var userActivityRequestBuilder_1 = require("./activities/item/userActivityRequestBuilder");
var agreementAcceptancesRequestBuilder_1 = require("./agreementAcceptances/agreementAcceptancesRequestBuilder");
var appRoleAssignmentsRequestBuilder_1 = require("./appRoleAssignments/appRoleAssignmentsRequestBuilder");
var appRoleAssignmentRequestBuilder_1 = require("./appRoleAssignments/item/appRoleAssignmentRequestBuilder");
var authenticationRequestBuilder_1 = require("./authentication/authenticationRequestBuilder");
var calendarRequestBuilder_1 = require("./calendar/calendarRequestBuilder");
var calendarGroupsRequestBuilder_1 = require("./calendarGroups/calendarGroupsRequestBuilder");
var calendarGroupRequestBuilder_1 = require("./calendarGroups/item/calendarGroupRequestBuilder");
var calendarsRequestBuilder_1 = require("./calendars/calendarsRequestBuilder");
var calendarViewRequestBuilder_1 = require("./calendarView/calendarViewRequestBuilder");
var eventRequestBuilder_1 = require("./calendarView/item/eventRequestBuilder");
var chatsRequestBuilder_1 = require("./chats/chatsRequestBuilder");
var chatRequestBuilder_1 = require("./chats/item/chatRequestBuilder");
var contactFoldersRequestBuilder_1 = require("./contactFolders/contactFoldersRequestBuilder");
var contactFolderRequestBuilder_1 = require("./contactFolders/item/contactFolderRequestBuilder");
var contactsRequestBuilder_1 = require("./contacts/contactsRequestBuilder");
var contactRequestBuilder_1 = require("./contacts/item/contactRequestBuilder");
var createdObjectsRequestBuilder_1 = require("./createdObjects/createdObjectsRequestBuilder");
var deviceManagementTroubleshootingEventsRequestBuilder_1 = require("./deviceManagementTroubleshootingEvents/deviceManagementTroubleshootingEventsRequestBuilder");
var deviceManagementTroubleshootingEventRequestBuilder_1 = require("./deviceManagementTroubleshootingEvents/item/deviceManagementTroubleshootingEventRequestBuilder");
var directReportsRequestBuilder_1 = require("./directReports/directReportsRequestBuilder");
var driveRequestBuilder_1 = require("./drive/driveRequestBuilder");
var drivesRequestBuilder_1 = require("./drives/drivesRequestBuilder");
var eventsRequestBuilder_1 = require("./events/eventsRequestBuilder");
var extensionsRequestBuilder_1 = require("./extensions/extensionsRequestBuilder");
var extensionRequestBuilder_1 = require("./extensions/item/extensionRequestBuilder");
var followedSitesRequestBuilder_1 = require("./followedSites/followedSitesRequestBuilder");
var inferenceClassificationRequestBuilder_1 = require("./inferenceClassification/inferenceClassificationRequestBuilder");
var insightsRequestBuilder_1 = require("./insights/insightsRequestBuilder");
var teamRequestBuilder_1 = require("./joinedTeams/item/teamRequestBuilder");
var joinedTeamsRequestBuilder_1 = require("./joinedTeams/joinedTeamsRequestBuilder");
var licenseDetailsRequestBuilder_1 = require("./licenseDetails/licenseDetailsRequestBuilder");
var mailFolderRequestBuilder_1 = require("./mailFolders/item/mailFolderRequestBuilder");
var mailFoldersRequestBuilder_1 = require("./mailFolders/mailFoldersRequestBuilder");
var managedAppRegistrationsRequestBuilder_1 = require("./managedAppRegistrations/managedAppRegistrationsRequestBuilder");
var managedDeviceRequestBuilder_1 = require("./managedDevices/item/managedDeviceRequestBuilder");
var managedDevicesRequestBuilder_1 = require("./managedDevices/managedDevicesRequestBuilder");
var managerRequestBuilder_1 = require("./manager/managerRequestBuilder");
var memberOfRequestBuilder_1 = require("./memberOf/memberOfRequestBuilder");
var messageRequestBuilder_1 = require("./messages/item/messageRequestBuilder");
var messagesRequestBuilder_1 = require("./messages/messagesRequestBuilder");
var microsoft_graph_assignLicenseRequestBuilder_1 = require("./microsoft/graph/assignLicense/microsoft.graph.assignLicenseRequestBuilder");
var oauth2PermissionGrantsRequestBuilder_1 = require("./oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder");
var onenoteRequestBuilder_1 = require("./onenote/onenoteRequestBuilder");
var onlineMeetingRequestBuilder_1 = require("./onlineMeetings/item/onlineMeetingRequestBuilder");
var onlineMeetingsRequestBuilder_1 = require("./onlineMeetings/onlineMeetingsRequestBuilder");
var outlookRequestBuilder_1 = require("./outlook/outlookRequestBuilder");
var ownedDevicesRequestBuilder_1 = require("./ownedDevices/ownedDevicesRequestBuilder");
var ownedObjectsRequestBuilder_1 = require("./ownedObjects/ownedObjectsRequestBuilder");
var personRequestBuilder_1 = require("./people/item/personRequestBuilder");
var peopleRequestBuilder_1 = require("./people/peopleRequestBuilder");
var photoRequestBuilder_1 = require("./photo/photoRequestBuilder");
var profilePhotoRequestBuilder_1 = require("./photos/item/profilePhotoRequestBuilder");
var photosRequestBuilder_1 = require("./photos/photosRequestBuilder");
var plannerRequestBuilder_1 = require("./planner/plannerRequestBuilder");
var presenceRequestBuilder_1 = require("./presence/presenceRequestBuilder");
var registeredDevicesRequestBuilder_1 = require("./registeredDevices/registeredDevicesRequestBuilder");
var scopedRoleMembershipRequestBuilder_1 = require("./scopedRoleMemberOf/item/scopedRoleMembershipRequestBuilder");
var scopedRoleMemberOfRequestBuilder_1 = require("./scopedRoleMemberOf/scopedRoleMemberOfRequestBuilder");
var settingsRequestBuilder_1 = require("./settings/settingsRequestBuilder");
var teamworkRequestBuilder_1 = require("./teamwork/teamworkRequestBuilder");
var todoRequestBuilder_1 = require("./todo/todoRequestBuilder");
var transitiveMemberOfRequestBuilder_1 = require("./transitiveMemberOf/transitiveMemberOfRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me  */
var MeRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new MeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function MeRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/me";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(MeRequestBuilder.prototype, "activities", {
        get: function () {
            return new activitiesRequestBuilder_1.ActivitiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "agreementAcceptances", {
        get: function () {
            return new agreementAcceptancesRequestBuilder_1.AgreementAcceptancesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "appRoleAssignments", {
        get: function () {
            return new appRoleAssignmentsRequestBuilder_1.AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "authentication", {
        get: function () {
            return new authenticationRequestBuilder_1.AuthenticationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "calendar", {
        get: function () {
            return new calendarRequestBuilder_1.CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "calendarGroups", {
        get: function () {
            return new calendarGroupsRequestBuilder_1.CalendarGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "calendars", {
        get: function () {
            return new calendarsRequestBuilder_1.CalendarsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "calendarView", {
        get: function () {
            return new calendarViewRequestBuilder_1.CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "chats", {
        get: function () {
            return new chatsRequestBuilder_1.ChatsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "contactFolders", {
        get: function () {
            return new contactFoldersRequestBuilder_1.ContactFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "contacts", {
        get: function () {
            return new contactsRequestBuilder_1.ContactsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "createdObjects", {
        get: function () {
            return new createdObjectsRequestBuilder_1.CreatedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "deviceManagementTroubleshootingEvents", {
        get: function () {
            return new deviceManagementTroubleshootingEventsRequestBuilder_1.DeviceManagementTroubleshootingEventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "directReports", {
        get: function () {
            return new directReportsRequestBuilder_1.DirectReportsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "drive", {
        get: function () {
            return new driveRequestBuilder_1.DriveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "drives", {
        get: function () {
            return new drivesRequestBuilder_1.DrivesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "events", {
        get: function () {
            return new eventsRequestBuilder_1.EventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "extensions", {
        get: function () {
            return new extensionsRequestBuilder_1.ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "followedSites", {
        get: function () {
            return new followedSitesRequestBuilder_1.FollowedSitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "inferenceClassification", {
        get: function () {
            return new inferenceClassificationRequestBuilder_1.InferenceClassificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "insights", {
        get: function () {
            return new insightsRequestBuilder_1.InsightsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "joinedTeams", {
        get: function () {
            return new joinedTeamsRequestBuilder_1.JoinedTeamsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "licenseDetails", {
        get: function () {
            return new licenseDetailsRequestBuilder_1.LicenseDetailsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "mailFolders", {
        get: function () {
            return new mailFoldersRequestBuilder_1.MailFoldersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "managedAppRegistrations", {
        get: function () {
            return new managedAppRegistrationsRequestBuilder_1.ManagedAppRegistrationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "managedDevices", {
        get: function () {
            return new managedDevicesRequestBuilder_1.ManagedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "manager", {
        get: function () {
            return new managerRequestBuilder_1.ManagerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "memberOf", {
        get: function () {
            return new memberOfRequestBuilder_1.MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "messages", {
        get: function () {
            return new messagesRequestBuilder_1.MessagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    MeRequestBuilder.prototype.assignLicense = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.assignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.changePassword = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.changePasswordRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.checkMemberGroups = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.checkMemberObjects = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.exportPersonalData = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.exportPersonalDataRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.findMeetingTimes = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.findMeetingTimesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.getMailTips = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.getMailTipsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.getMemberGroups = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.getMemberObjects = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.removeAllDevicesFromManagement = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.removeAllDevicesFromManagementRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.reprocessLicenseAssignment = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.reprocessLicenseAssignmentRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.revokeSignInSessions = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.revokeSignInSessionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.sendMail = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.sendMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.translateExchangeIds = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.translateExchangeIdsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    MeRequestBuilder.prototype.wipeManagedAppRegistrationsByDeviceTag = function () {
        return new microsoft_graph_assignLicenseRequestBuilder_1.Microsoft.graph.wipeManagedAppRegistrationsByDeviceTagRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(MeRequestBuilder.prototype, "oauth2PermissionGrants", {
        get: function () {
            return new oauth2PermissionGrantsRequestBuilder_1.Oauth2PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "onenote", {
        get: function () {
            return new onenoteRequestBuilder_1.OnenoteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "onlineMeetings", {
        get: function () {
            return new onlineMeetingsRequestBuilder_1.OnlineMeetingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "outlook", {
        get: function () {
            return new outlookRequestBuilder_1.OutlookRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "ownedDevices", {
        get: function () {
            return new ownedDevicesRequestBuilder_1.OwnedDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "ownedObjects", {
        get: function () {
            return new ownedObjectsRequestBuilder_1.OwnedObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "people", {
        get: function () {
            return new peopleRequestBuilder_1.PeopleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "photo", {
        get: function () {
            return new photoRequestBuilder_1.PhotoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "photos", {
        get: function () {
            return new photosRequestBuilder_1.PhotosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "planner", {
        get: function () {
            return new plannerRequestBuilder_1.PlannerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "presence", {
        get: function () {
            return new presenceRequestBuilder_1.PresenceRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "registeredDevices", {
        get: function () {
            return new registeredDevicesRequestBuilder_1.RegisteredDevicesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "scopedRoleMemberOf", {
        get: function () {
            return new scopedRoleMemberOfRequestBuilder_1.ScopedRoleMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "settings", {
        get: function () {
            return new settingsRequestBuilder_1.SettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "teamwork", {
        get: function () {
            return new teamworkRequestBuilder_1.TeamworkRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "todo", {
        get: function () {
            return new todoRequestBuilder_1.TodoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeRequestBuilder.prototype, "transitiveMemberOf", {
        get: function () {
            return new transitiveMemberOfRequestBuilder_1.TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.me.activities collection
     * @param id Unique identifier of the item
     * @returns a UserActivityRequestBuilder
     */
    MeRequestBuilder.prototype.activitiesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new userActivityRequestBuilder_1.UserActivityRequestBuilder(this.currentPath + this.pathSegment + "/activities/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    MeRequestBuilder.prototype.appRoleAssignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new appRoleAssignmentRequestBuilder_1.AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendarGroups collection
     * @param id Unique identifier of the item
     * @returns a CalendarGroupRequestBuilder
     */
    MeRequestBuilder.prototype.calendarGroupsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new calendarGroupRequestBuilder_1.CalendarGroupRequestBuilder(this.currentPath + this.pathSegment + "/calendarGroups/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendars collection
     * @param id Unique identifier of the item
     * @returns a CalendarRequestBuilder
     */
    MeRequestBuilder.prototype.calendarsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new calendarRequestBuilder_1.CalendarRequestBuilder(this.currentPath + this.pathSegment + "/calendars/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.calendarView collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    MeRequestBuilder.prototype.calendarViewById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.chats collection
     * @param id Unique identifier of the item
     * @returns a ChatRequestBuilder
     */
    MeRequestBuilder.prototype.chatsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new chatRequestBuilder_1.ChatRequestBuilder(this.currentPath + this.pathSegment + "/chats/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.contactFolders collection
     * @param id Unique identifier of the item
     * @returns a ContactFolderRequestBuilder
     */
    MeRequestBuilder.prototype.contactFoldersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new contactFolderRequestBuilder_1.ContactFolderRequestBuilder(this.currentPath + this.pathSegment + "/contactFolders/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.contacts collection
     * @param id Unique identifier of the item
     * @returns a ContactRequestBuilder
     */
    MeRequestBuilder.prototype.contactsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new contactRequestBuilder_1.ContactRequestBuilder(this.currentPath + this.pathSegment + "/contacts/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    MeRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Update me
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    MeRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.httpCore, "application/json", body);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.deviceManagementTroubleshootingEvents collection
     * @param id Unique identifier of the item
     * @returns a DeviceManagementTroubleshootingEventRequestBuilder
     */
    MeRequestBuilder.prototype.deviceManagementTroubleshootingEventsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new deviceManagementTroubleshootingEventRequestBuilder_1.DeviceManagementTroubleshootingEventRequestBuilder(this.currentPath + this.pathSegment + "/deviceManagementTroubleshootingEvents/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.drives collection
     * @param id Unique identifier of the item
     * @returns a DriveRequestBuilder
     */
    MeRequestBuilder.prototype.drivesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new driveRequestBuilder_1.DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.events collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    MeRequestBuilder.prototype.eventsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    MeRequestBuilder.prototype.extensionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new extensionRequestBuilder_1.ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Get me
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of User
     */
    MeRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, user_1.User, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.joinedTeams collection
     * @param id Unique identifier of the item
     * @returns a TeamRequestBuilder
     */
    MeRequestBuilder.prototype.joinedTeamsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamRequestBuilder_1.TeamRequestBuilder(this.currentPath + this.pathSegment + "/joinedTeams/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.licenseDetails collection
     * @param id Unique identifier of the item
     * @returns a LicenseDetailsRequestBuilder
     */
    MeRequestBuilder.prototype.licenseDetailsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new licenseDetailsRequestBuilder_1.LicenseDetailsRequestBuilder(this.currentPath + this.pathSegment + "/licenseDetails/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.mailFolders collection
     * @param id Unique identifier of the item
     * @returns a MailFolderRequestBuilder
     */
    MeRequestBuilder.prototype.mailFoldersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new mailFolderRequestBuilder_1.MailFolderRequestBuilder(this.currentPath + this.pathSegment + "/mailFolders/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.managedDevices collection
     * @param id Unique identifier of the item
     * @returns a ManagedDeviceRequestBuilder
     */
    MeRequestBuilder.prototype.managedDevicesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new managedDeviceRequestBuilder_1.ManagedDeviceRequestBuilder(this.currentPath + this.pathSegment + "/managedDevices/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.messages collection
     * @param id Unique identifier of the item
     * @returns a MessageRequestBuilder
     */
    MeRequestBuilder.prototype.messagesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new messageRequestBuilder_1.MessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.onlineMeetings collection
     * @param id Unique identifier of the item
     * @returns a OnlineMeetingRequestBuilder
     */
    MeRequestBuilder.prototype.onlineMeetingsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new onlineMeetingRequestBuilder_1.OnlineMeetingRequestBuilder(this.currentPath + this.pathSegment + "/onlineMeetings/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update me
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    MeRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.people collection
     * @param id Unique identifier of the item
     * @returns a PersonRequestBuilder
     */
    MeRequestBuilder.prototype.peopleById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new personRequestBuilder_1.PersonRequestBuilder(this.currentPath + this.pathSegment + "/people/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.photos collection
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoRequestBuilder
     */
    MeRequestBuilder.prototype.photosById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new profilePhotoRequestBuilder_1.ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.me.scopedRoleMemberOf collection
     * @param id Unique identifier of the item
     * @returns a ScopedRoleMembershipRequestBuilder
     */
    MeRequestBuilder.prototype.scopedRoleMemberOfById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new scopedRoleMembershipRequestBuilder_1.ScopedRoleMembershipRequestBuilder(this.currentPath + this.pathSegment + "/scopedRoleMemberOf/" + id, this.httpCore, false);
    };
    ;
    return MeRequestBuilder;
}());
exports.MeRequestBuilder = MeRequestBuilder;
