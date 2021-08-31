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
exports.TeamRequestBuilder = void 0;
var team_1 = require("../../team");
var channelsRequestBuilder_1 = require("../channels/channelsRequestBuilder");
var channelRequestBuilder_1 = require("../channels/item/channelRequestBuilder");
var groupRequestBuilder_1 = require("../group/groupRequestBuilder");
var installedAppsRequestBuilder_1 = require("../installedApps/installedAppsRequestBuilder");
var teamsAppInstallationRequestBuilder_1 = require("../installedApps/item/teamsAppInstallationRequestBuilder");
var conversationMemberRequestBuilder_1 = require("../members/item/conversationMemberRequestBuilder");
var membersRequestBuilder_1 = require("../members/membersRequestBuilder");
var microsoft_graph_archiveRequestBuilder_1 = require("../microsoft/graph/archive/microsoft.graph.archiveRequestBuilder");
var teamsAsyncOperationRequestBuilder_1 = require("../operations/item/teamsAsyncOperationRequestBuilder");
var operationsRequestBuilder_1 = require("../operations/operationsRequestBuilder");
var primaryChannelRequestBuilder_1 = require("../primaryChannel/primaryChannelRequestBuilder");
var scheduleRequestBuilder_1 = require("../schedule/scheduleRequestBuilder");
var templateRequestBuilder_1 = require("../template/templateRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /teams/{team-id}  */
var TeamRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new TeamRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function TeamRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(TeamRequestBuilder.prototype, "channels", {
        get: function () {
            return new channelsRequestBuilder_1.ChannelsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "group", {
        get: function () {
            return new groupRequestBuilder_1.GroupRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "installedApps", {
        get: function () {
            return new installedAppsRequestBuilder_1.InstalledAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "members", {
        get: function () {
            return new membersRequestBuilder_1.MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    TeamRequestBuilder.prototype.archive = function () {
        return new microsoft_graph_archiveRequestBuilder_1.Microsoft.graph.archiveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    TeamRequestBuilder.prototype.clone = function () {
        return new microsoft_graph_archiveRequestBuilder_1.Microsoft.graph.cloneRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    TeamRequestBuilder.prototype.completeMigration = function () {
        return new microsoft_graph_archiveRequestBuilder_1.Microsoft.graph.completeMigrationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    TeamRequestBuilder.prototype.sendActivityNotification = function () {
        return new microsoft_graph_archiveRequestBuilder_1.Microsoft.graph.sendActivityNotificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    TeamRequestBuilder.prototype.unarchive = function () {
        return new microsoft_graph_archiveRequestBuilder_1.Microsoft.graph.unarchiveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(TeamRequestBuilder.prototype, "operations", {
        get: function () {
            return new operationsRequestBuilder_1.OperationsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "primaryChannel", {
        get: function () {
            return new primaryChannelRequestBuilder_1.PrimaryChannelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "schedule", {
        get: function () {
            return new scheduleRequestBuilder_1.ScheduleRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamRequestBuilder.prototype, "template", {
        get: function () {
            return new templateRequestBuilder_1.TemplateRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets an item from the MicrosoftGraph.teams.channels collection
     * @param id Unique identifier of the item
     * @returns a ChannelRequestBuilder
     */
    TeamRequestBuilder.prototype.channelsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new channelRequestBuilder_1.ChannelRequestBuilder(this.currentPath + this.pathSegment + "/channels/" + id, this.httpCore, false);
    };
    ;
    ;
    /**
     * Delete entity from teams
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    TeamRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get entity from teams by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    TeamRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update entity in teams
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    TeamRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete entity from teams
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    TeamRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get entity from teams by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Team
     */
    TeamRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, team_1.Team, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.installedApps collection
     * @param id Unique identifier of the item
     * @returns a TeamsAppInstallationRequestBuilder
     */
    TeamRequestBuilder.prototype.installedAppsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamsAppInstallationRequestBuilder_1.TeamsAppInstallationRequestBuilder(this.currentPath + this.pathSegment + "/installedApps/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.members collection
     * @param id Unique identifier of the item
     * @returns a ConversationMemberRequestBuilder
     */
    TeamRequestBuilder.prototype.membersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new conversationMemberRequestBuilder_1.ConversationMemberRequestBuilder(this.currentPath + this.pathSegment + "/members/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.teams.operations collection
     * @param id Unique identifier of the item
     * @returns a TeamsAsyncOperationRequestBuilder
     */
    TeamRequestBuilder.prototype.operationsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamsAsyncOperationRequestBuilder_1.TeamsAsyncOperationRequestBuilder(this.currentPath + this.pathSegment + "/operations/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update entity in teams
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    TeamRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    return TeamRequestBuilder;
}());
exports.TeamRequestBuilder = TeamRequestBuilder;
