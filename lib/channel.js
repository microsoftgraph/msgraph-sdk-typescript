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
exports.Channel = void 0;
var chatMessage_1 = require("./chatMessage");
var conversationMember_1 = require("./conversationMember");
var driveItem_1 = require("./driveItem");
var entity_1 = require("./entity");
var teamsTab_1 = require("./teamsTab");
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    /**
     * Instantiates a new channel and sets the default values.
     */
    function Channel() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Channel.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Read only. Timestamp at which the channel was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Read only. Timestamp at which the channel was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "description", {
        /**
         * Gets the description property value. Optional textual description for the channel.
         * @returns a string
         */
        get: function () {
            return this._description;
        },
        /**
         * Sets the description property value. Optional textual description for the channel.
         * @param value Value to set for the description property.
         */
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "displayName", {
        /**
         * Gets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
         * @returns a string
         */
        get: function () {
            return this._displayName;
        },
        /**
         * Sets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
         * @param value Value to set for the displayName property.
         */
        set: function (value) {
            this._displayName = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "email", {
        /**
         * Gets the email property value. The email address for sending messages to the channel. Read-only.
         * @returns a string
         */
        get: function () {
            return this._email;
        },
        /**
         * Sets the email property value. The email address for sending messages to the channel. Read-only.
         * @param value Value to set for the email property.
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "filesFolder", {
        /**
         * Gets the filesFolder property value. Metadata for the location where the channel's files are stored.
         * @returns a driveItem
         */
        get: function () {
            return this._filesFolder;
        },
        /**
         * Sets the filesFolder property value. Metadata for the location where the channel's files are stored.
         * @param value Value to set for the filesFolder property.
         */
        set: function (value) {
            this._filesFolder = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "isFavoriteByDefault", {
        /**
         * Gets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
         * @returns a boolean
         */
        get: function () {
            return this._isFavoriteByDefault;
        },
        /**
         * Sets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
         * @param value Value to set for the isFavoriteByDefault property.
         */
        set: function (value) {
            this._isFavoriteByDefault = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "members", {
        /**
         * Gets the members property value. A collection of membership records associated with the channel.
         * @returns a conversationMember
         */
        get: function () {
            return this._members;
        },
        /**
         * Sets the members property value. A collection of membership records associated with the channel.
         * @param value Value to set for the members property.
         */
        set: function (value) {
            this._members = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "membershipType", {
        /**
         * Gets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. Default: standard.
         * @returns a channelMembershipType
         */
        get: function () {
            return this._membershipType;
        },
        /**
         * Sets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. Default: standard.
         * @param value Value to set for the membershipType property.
         */
        set: function (value) {
            this._membershipType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "messages", {
        /**
         * Gets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
         * @returns a chatMessage
         */
        get: function () {
            return this._messages;
        },
        /**
         * Sets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
         * @param value Value to set for the messages property.
         */
        set: function (value) {
            this._messages = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "tabs", {
        /**
         * Gets the tabs property value. A collection of all the tabs in the channel. A navigation property.
         * @returns a teamsTab
         */
        get: function () {
            return this._tabs;
        },
        /**
         * Sets the tabs property value. A collection of all the tabs in the channel. A navigation property.
         * @param value Value to set for the tabs property.
         */
        set: function (value) {
            this._tabs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Channel.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
         * @param value Value to set for the webUrl property.
         */
        set: function (value) {
            this._webUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Channel.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["email", function (o, n) { o.email = n.getStringValue(); }],
            ["filesFolder", function (o, n) { o.filesFolder = n.getObjectValue(driveItem_1.DriveItem); }],
            ["isFavoriteByDefault", function (o, n) { o.isFavoriteByDefault = n.getBooleanValue(); }],
            ["members", function (o, n) { o.members = n.getCollectionOfObjectValues(conversationMember_1.ConversationMember); }],
            ["membershipType", function (o, n) { o.membershipType = n.getObjectValue(ChannelMembershipType); }],
            ["messages", function (o, n) { o.messages = n.getCollectionOfObjectValues(chatMessage_1.ChatMessage); }],
            ["tabs", function (o, n) { o.tabs = n.getCollectionOfObjectValues(teamsTab_1.TeamsTab); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Channel.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue("filesFolder", this.filesFolder);
        writer.writeBooleanValue("isFavoriteByDefault", this.isFavoriteByDefault);
        writer.writeCollectionOfObjectValues("members", this.members);
        writer.writeObjectValue("membershipType", this.membershipType);
        writer.writeCollectionOfObjectValues("messages", this.messages);
        writer.writeCollectionOfObjectValues("tabs", this.tabs);
        writer.writeStringValue("webUrl", this.webUrl);
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
    return Channel;
}(entity_1.Entity));
exports.Channel = Channel;
