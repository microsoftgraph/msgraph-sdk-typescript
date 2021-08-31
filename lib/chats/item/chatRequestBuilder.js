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
exports.ChatRequestBuilder = void 0;
var chat_1 = require("../../chat");
var installedAppsRequestBuilder_1 = require("../installedApps/installedAppsRequestBuilder");
var teamsAppInstallationRequestBuilder_1 = require("../installedApps/item/teamsAppInstallationRequestBuilder");
var conversationMemberRequestBuilder_1 = require("../members/item/conversationMemberRequestBuilder");
var membersRequestBuilder_1 = require("../members/membersRequestBuilder");
var chatMessageRequestBuilder_1 = require("../messages/item/chatMessageRequestBuilder");
var messagesRequestBuilder_1 = require("../messages/messagesRequestBuilder");
var microsoft_graph_sendActivityNotificationRequestBuilder_1 = require("../microsoft/graph/sendActivityNotification/microsoft.graph.sendActivityNotificationRequestBuilder");
var teamsTabRequestBuilder_1 = require("../tabs/item/teamsTabRequestBuilder");
var tabsRequestBuilder_1 = require("../tabs/tabsRequestBuilder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /chats/{chat-id}  */
var ChatRequestBuilder = /** @class */ (function () {
    /**
     * Instantiates a new ChatRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    function ChatRequestBuilder(currentPath, httpCore, isRawUrl) {
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
    Object.defineProperty(ChatRequestBuilder.prototype, "installedApps", {
        get: function () {
            return new installedAppsRequestBuilder_1.InstalledAppsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatRequestBuilder.prototype, "members", {
        get: function () {
            return new membersRequestBuilder_1.MembersRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatRequestBuilder.prototype, "messages", {
        get: function () {
            return new messagesRequestBuilder_1.MessagesRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatRequestBuilder.prototype, "microsoft", {
        get: function () { },
        enumerable: false,
        configurable: true
    });
    ChatRequestBuilder.prototype.sendActivityNotification = function () {
        return new microsoft_graph_sendActivityNotificationRequestBuilder_1.Microsoft.graph.sendActivityNotificationRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    Object.defineProperty(ChatRequestBuilder.prototype, "tabs", {
        get: function () {
            return new tabsRequestBuilder_1.TabsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * Delete entity from chats
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ChatRequestBuilder.prototype.createDeleteRequestInfo = function (h, o) {
        var requestInfo = new kiota_abstractions_1.RequestInfo();
        requestInfo.setUri(this.currentPath, this.pathSegment, this.isRawUrl);
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addMiddlewareOptions.apply(requestInfo, __spreadArray([], __read(o), false));
        return requestInfo;
    };
    ;
    /**
     * Get entity from chats by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @returns a RequestInfo
     */
    ChatRequestBuilder.prototype.createGetRequestInfo = function (q, h, o) {
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
     * Update entity in chats
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @returns a RequestInfo
     */
    ChatRequestBuilder.prototype.createPatchRequestInfo = function (body, h, o) {
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
     * Delete entity from chats
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ChatRequestBuilder.prototype.delete = function (h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createDeleteRequestInfo(h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Get entity from chats by key
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Chat
     */
    ChatRequestBuilder.prototype.get = function (q, h, o, responseHandler) {
        var _a, _b;
        var requestInfo = this.createGetRequestInfo(q, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, chat_1.Chat, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.chats.installedApps collection
     * @param id Unique identifier of the item
     * @returns a TeamsAppInstallationRequestBuilder
     */
    ChatRequestBuilder.prototype.installedAppsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamsAppInstallationRequestBuilder_1.TeamsAppInstallationRequestBuilder(this.currentPath + this.pathSegment + "/installedApps/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.chats.members collection
     * @param id Unique identifier of the item
     * @returns a ConversationMemberRequestBuilder
     */
    ChatRequestBuilder.prototype.membersById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new conversationMemberRequestBuilder_1.ConversationMemberRequestBuilder(this.currentPath + this.pathSegment + "/members/" + id, this.httpCore, false);
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.chats.messages collection
     * @param id Unique identifier of the item
     * @returns a ChatMessageRequestBuilder
     */
    ChatRequestBuilder.prototype.messagesById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new chatMessageRequestBuilder_1.ChatMessageRequestBuilder(this.currentPath + this.pathSegment + "/messages/" + id, this.httpCore, false);
    };
    ;
    /**
     * Update entity in chats
     * @param body
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    ChatRequestBuilder.prototype.patch = function (body, h, o, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        var requestInfo = this.createPatchRequestInfo(body, h, o);
        return (_b = (_a = this.httpCore) === null || _a === void 0 ? void 0 : _a.sendNoResponseContentAsync(requestInfo, responseHandler)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('http core is null'));
    };
    ;
    /**
     * Gets an item from the MicrosoftGraph.chats.tabs collection
     * @param id Unique identifier of the item
     * @returns a TeamsTabRequestBuilder
     */
    ChatRequestBuilder.prototype.tabsById = function (id) {
        if (!id)
            throw new Error("id cannot be undefined");
        return new teamsTabRequestBuilder_1.TeamsTabRequestBuilder(this.currentPath + this.pathSegment + "/tabs/" + id, this.httpCore, false);
    };
    ;
    return ChatRequestBuilder;
}());
exports.ChatRequestBuilder = ChatRequestBuilder;
