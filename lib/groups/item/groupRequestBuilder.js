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
exports.GroupRequestBuilder = void 0;
var group_1 = require("../../group");
var acceptedSendersRequestBuilder_1 = require("../acceptedSenders/acceptedSendersRequestBuilder");
var appRoleAssignmentsRequestBuilder_1 = require("../appRoleAssignments/appRoleAssignmentsRequestBuilder");
var appRoleAssignmentRequestBuilder_1 = require("../appRoleAssignments/item/appRoleAssignmentRequestBuilder");
var calendarRequestBuilder_1 = require("../calendar/calendarRequestBuilder");
var calendarViewRequestBuilder_1 = require("../calendarView/calendarViewRequestBuilder");
var eventRequestBuilder_1 = require("../calendarView/item/eventRequestBuilder");
var conversationsRequestBuilder_1 = require("../conversations/conversationsRequestBuilder");
var conversationRequestBuilder_1 = require("../conversations/item/conversationRequestBuilder");
var createdOnBehalfOfRequestBuilder_1 = require("../createdOnBehalfOf/createdOnBehalfOfRequestBuilder");
var driveRequestBuilder_1 = require("../drive/driveRequestBuilder");
var drivesRequestBuilder_1 = require("../drives/drivesRequestBuilder");
var eventsRequestBuilder_1 = require("../events/eventsRequestBuilder");
var extensionsRequestBuilder_1 = require("../extensions/extensionsRequestBuilder");
var extensionRequestBuilder_1 = require("../extensions/item/extensionRequestBuilder");
var groupLifecyclePoliciesRequestBuilder_1 = require("../groupLifecyclePolicies/groupLifecyclePoliciesRequestBuilder");
var groupLifecyclePolicyRequestBuilder_1 = require("../groupLifecyclePolicies/item/groupLifecyclePolicyRequestBuilder");
var memberOfRequestBuilder_1 = require("../memberOf/memberOfRequestBuilder");
var membersRequestBuilder_1 = require("../members/membersRequestBuilder");
var membersWithLicenseErrorsRequestBuilder_1 = require("../membersWithLicenseErrors/membersWithLicenseErrorsRequestBuilder");
var microsoft_graph_addFavoriteRequestBuilder_1 = require("../microsoft/graph/addFavorite/microsoft.graph.addFavoriteRequestBuilder");
var onenoteRequestBuilder_1 = require("../onenote/onenoteRequestBuilder");
var ownersRequestBuilder_1 = require("../owners/ownersRequestBuilder");
var resourceSpecificPermissionGrantRequestBuilder_1 = require("../permissionGrants/item/resourceSpecificPermissionGrantRequestBuilder");
var permissionGrantsRequestBuilder_1 = require("../permissionGrants/permissionGrantsRequestBuilder");
var photoRequestBuilder_1 = require("../photo/photoRequestBuilder");
var profilePhotoRequestBuilder_1 = require("../photos/item/profilePhotoRequestBuilder");
var photosRequestBuilder_1 = require("../photos/photosRequestBuilder");
var plannerRequestBuilder_1 = require("../planner/plannerRequestBuilder");
var rejectedSendersRequestBuilder_1 = require("../rejectedSenders/rejectedSendersRequestBuilder");
var groupSettingRequestBuilder_1 = require("../settings/item/groupSettingRequestBuilder");
var settingsRequestBuilder_1 = require("../settings/settingsRequestBuilder");
var siteRequestBuilder_1 = require("../sites/item/siteRequestBuilder");
var sitesRequestBuilder_1 = require("../sites/sitesRequestBuilder");
var teamRequestBuilder_1 = require("../team/teamRequestBuilder");
var conversationThreadRequestBuilder_1 = require("../threads/item/conversationThreadRequestBuilder");
var threadsRequestBuilder_1 = require("../threads/threadsRequestBuilder");
var transitiveMemberOfRequestBuilder_1 = require("../transitiveMemberOf/transitiveMemberOfRequestBuilder");
var transitiveMembersRequestBuilder_1 = require("../transitiveMembers/transitiveMembersRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /groups/{group-id}  */
var GroupRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new GroupRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function GroupRequestBuilder(currentPath, httpCore, isRawUrl) {
        if (isRawUrl === void 0) { isRawUrl = true; }
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    Object.defineProperty(GroupRequestBuilder.prototype, "acceptedSenders", {
        get: function () {
            return new acceptedSendersRequestBuilder_1.AcceptedSendersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "appRoleAssignments", {
        get: function () {
            return new appRoleAssignmentsRequestBuilder_1.AppRoleAssignmentsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "calendar", {
        get: function () {
            return new calendarRequestBuilder_1.CalendarRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "calendarView", {
        get: function () {
            return new calendarViewRequestBuilder_1.CalendarViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "conversations", {
        get: function () {
            return new conversationsRequestBuilder_1.ConversationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "createdOnBehalfOf", {
        get: function () {
            return new createdOnBehalfOfRequestBuilder_1.CreatedOnBehalfOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "drive", {
        get: function () {
            return new driveRequestBuilder_1.DriveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "drives", {
        get: function () {
            return new drivesRequestBuilder_1.DrivesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "events", {
        get: function () {
            return new eventsRequestBuilder_1.EventsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "extensions", {
        get: function () {
            return new extensionsRequestBuilder_1.ExtensionsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "groupLifecyclePolicies", {
        get: function () {
            return new groupLifecyclePoliciesRequestBuilder_1.GroupLifecyclePoliciesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "memberOf", {
        get: function () {
            return new memberOfRequestBuilder_1.MemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "members", {
        get: function () {
            return new membersRequestBuilder_1.MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "membersWithLicenseErrors", {
        get: function () {
            return new membersWithLicenseErrorsRequestBuilder_1.MembersWithLicenseErrorsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    GroupRequestBuilder.prototype.addFavorite = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.addFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.assignLicense = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.assignLicenseRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.checkGrantedPermissionsForApp = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.checkGrantedPermissionsForAppRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.checkMemberGroups = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.checkMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.checkMemberObjects = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.checkMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.getMemberGroups = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.getMemberGroupsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.getMemberObjects = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.getMemberObjectsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.removeFavorite = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.removeFavoriteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.renew = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.renewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.resetUnseenCount = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.resetUnseenCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.restore = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.restoreRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.subscribeByMail = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.subscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.unsubscribeByMail = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.unsubscribeByMailRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    GroupRequestBuilder.prototype.validateProperties = function () {
        return new microsoft_graph_addFavoriteRequestBuilder_1.Microsoft.graph.validatePropertiesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(GroupRequestBuilder.prototype, "onenote", {
        get: function () {
            return new onenoteRequestBuilder_1.OnenoteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "owners", {
        get: function () {
            return new ownersRequestBuilder_1.OwnersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "permissionGrants", {
        get: function () {
            return new permissionGrantsRequestBuilder_1.PermissionGrantsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "photo", {
        get: function () {
            return new photoRequestBuilder_1.PhotoRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "photos", {
        get: function () {
            return new photosRequestBuilder_1.PhotosRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "planner", {
        get: function () {
            return new plannerRequestBuilder_1.PlannerRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "rejectedSenders", {
        get: function () {
            return new rejectedSendersRequestBuilder_1.RejectedSendersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "settings", {
        get: function () {
            return new settingsRequestBuilder_1.SettingsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "sites", {
        get: function () {
            return new sitesRequestBuilder_1.SitesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "team", {
        get: function () {
            return new teamRequestBuilder_1.TeamRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "threads", {
        get: function () {
            return new threadsRequestBuilder_1.ThreadsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "transitiveMemberOf", {
        get: function () {
            return new transitiveMemberOfRequestBuilder_1.TransitiveMemberOfRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GroupRequestBuilder.prototype, "transitiveMembers", {
        get: function () {
            return new transitiveMembersRequestBuilder_1.TransitiveMembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.groups.appRoleAssignments collection
     * @param id Unique identifier of the item
     * @returns a AppRoleAssignmentRequestBuilder
     */
    GroupRequestBuilder.prototype.appRoleAssignmentsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new appRoleAssignmentRequestBuilder_1.AppRoleAssignmentRequestBuilder(this.currentPath + this.pathSegment + "/appRoleAssignments/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.calendarView collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    GroupRequestBuilder.prototype.calendarViewById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/calendarView/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.conversations collection
     * @param id Unique identifier of the item
     * @returns a ConversationRequestBuilder
     */
    GroupRequestBuilder.prototype.conversationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new conversationRequestBuilder_1.ConversationRequestBuilder(this.currentPath + this.pathSegment + "/conversations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    GroupRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    GroupRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    GroupRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    GroupRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.drives collection
     * @param id Unique identifier of the item
     * @returns a DriveRequestBuilder
     */
    GroupRequestBuilder.prototype.drivesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new driveRequestBuilder_1.DriveRequestBuilder(this.currentPath + this.pathSegment + "/drives/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.events collection
     * @param id Unique identifier of the item
     * @returns a EventRequestBuilder
     */
    GroupRequestBuilder.prototype.eventsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new eventRequestBuilder_1.EventRequestBuilder(this.currentPath + this.pathSegment + "/events/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.extensions collection
     * @param id Unique identifier of the item
     * @returns a ExtensionRequestBuilder
     */
    GroupRequestBuilder.prototype.extensionsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new extensionRequestBuilder_1.ExtensionRequestBuilder(this.currentPath + this.pathSegment + "/extensions/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Group
     */
    GroupRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, group_1.Group, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.groupLifecyclePolicies collection
     * @param id Unique identifier of the item
     * @returns a GroupLifecyclePolicyRequestBuilder
     */
    GroupRequestBuilder.prototype.groupLifecyclePoliciesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupLifecyclePolicyRequestBuilder_1.GroupLifecyclePolicyRequestBuilder(this.currentPath + this.pathSegment + "/groupLifecyclePolicies/" + id, this.httpCore, false);
    };
    ;
    /**
     * Represents an Azure Active Directory object. The directoryObject type is the base type for many other directory entity types.
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    GroupRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.permissionGrants collection
     * @param id Unique identifier of the item
     * @returns a ResourceSpecificPermissionGrantRequestBuilder
     */
    GroupRequestBuilder.prototype.permissionGrantsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new resourceSpecificPermissionGrantRequestBuilder_1.ResourceSpecificPermissionGrantRequestBuilder(this.currentPath + this.pathSegment + "/permissionGrants/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.photos collection
     * @param id Unique identifier of the item
     * @returns a ProfilePhotoRequestBuilder
     */
    GroupRequestBuilder.prototype.photosById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new profilePhotoRequestBuilder_1.ProfilePhotoRequestBuilder(this.currentPath + this.pathSegment + "/photos/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.settings collection
     * @param id Unique identifier of the item
     * @returns a GroupSettingRequestBuilder
     */
    GroupRequestBuilder.prototype.settingsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new groupSettingRequestBuilder_1.GroupSettingRequestBuilder(this.currentPath + this.pathSegment + "/settings/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.sites collection
     * @param id Unique identifier of the item
     * @returns a SiteRequestBuilder
     */
    GroupRequestBuilder.prototype.sitesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new siteRequestBuilder_1.SiteRequestBuilder(this.currentPath + this.pathSegment + "/sites/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.groups.threads collection
     * @param id Unique identifier of the item
     * @returns a ConversationThreadRequestBuilder
     */
    GroupRequestBuilder.prototype.threadsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new conversationThreadRequestBuilder_1.ConversationThreadRequestBuilder(this.currentPath + this.pathSegment + "/threads/" + id, this.httpCore, false);
    };
    ;
    return GroupRequestBuilder;
}());
exports.GroupRequestBuilder = GroupRequestBuilder;
