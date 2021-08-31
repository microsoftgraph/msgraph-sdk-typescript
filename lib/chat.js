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
exports.Chat = void 0;
var chatMessage_1 = require("./chatMessage");
var conversationMember_1 = require("./conversationMember");
var entity_1 = require("./entity");
var teamsAppInstallation_1 = require("./teamsAppInstallation");
var teamsTab_1 = require("./teamsTab");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    /**
     * Instantiates a new chat and sets the default values.
     */
    function Chat() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Chat.prototype, "chatType", {
        /**
         * Gets the chatType property value. Specifies the type of chat. Possible values are:group, oneOnOne and meeting.
         * @returns a chatType
         */
        get: function () {
            return this._chatType;
        },
        /**
         * Sets the chatType property value. Specifies the type of chat. Possible values are:group, oneOnOne and meeting.
         * @param value Value to set for the chatType property.
         */
        set: function (value) {
            this._chatType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Date and time at which the chat was created. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Date and time at which the chat was created. Read-only.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "installedApps", {
        /**
         * Gets the installedApps property value. A collection of all the apps in the chat. Nullable.
         * @returns a teamsAppInstallation
         */
        get: function () {
            return this._installedApps;
        },
        /**
         * Sets the installedApps property value. A collection of all the apps in the chat. Nullable.
         * @param value Value to set for the installedApps property.
         */
        set: function (value) {
            this._installedApps = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "lastUpdatedDateTime", {
        /**
         * Gets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
         * @returns a Date
         */
        get: function () {
            return this._lastUpdatedDateTime;
        },
        /**
         * Sets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
         * @param value Value to set for the lastUpdatedDateTime property.
         */
        set: function (value) {
            this._lastUpdatedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "members", {
        /**
         * Gets the members property value. A collection of all the members in the chat. Nullable.
         * @returns a conversationMember
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. A collection of all the members in the chat. Nullable.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "messages", {
        /**
         * Gets the messages property value. A collection of all the messages in the chat. Nullable.
         * @returns a chatMessage
         */
        get: function () {
            return this._messages;
        },
        /**
         * Sets the messages property value. A collection of all the messages in the chat. Nullable.
         * @param value Value to set for the messages property.
         */
        set: function (value) {
            this._messages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "tabs", {
        /**
         * Gets the tabs property value.
         * @returns a teamsTab
         */
        get: function () {
            return this._tabs;
        },
        /**
         * Sets the tabs property value.
         * @param value Value to set for the tabs property.
         */
        set: function (value) {
            this._tabs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Chat.prototype, "topic", {
        /**
         * Gets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
         * @returns a string
         */
        get: function () {
            return this._topic;
        },
        /**
         * Sets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
         * @param value Value to set for the topic property.
         */
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Chat.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["chatType", function (o, n) { o.chatType = n.getObjectValue(ChatType); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["installedApps", function (o, n) { o.installedApps = n.getCollectionOfObjectValues(teamsAppInstallation_1.TeamsAppInstallation); }],
            ["lastUpdatedDateTime", function (o, n) { o.lastUpdatedDateTime = n.getDateValue(); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(conversationMember_1.ConversationMember); }],
            ["messages", function (o, n) { o.messages = n.getCollectionOfObjectValues(chatMessage_1.ChatMessage); }],
            ["tabs", function (o, n) { o.tabs = n.getCollectionOfObjectValues(teamsTab_1.TeamsTab); }],
            ["topic", function (o, n) { o.topic = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Chat.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeObjectValue("chatType", this.chatType);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues("installedApps", this.installedApps);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeCollectionOfObjectValues("messages", this.messages);
        writer.writeCollectionOfObjectValues("tabs", this.tabs);
        writer.writeStringValue("topic", this.topic);
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
    return Chat;
}(entity_1.Entity));
exports.Chat = Chat;
