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
exports.ChatMessage = void 0;
var chatMessageHostedContent_1 = require("./chats/chatMessageHostedContent");
var itemBody_1 = require("./chats/itemBody");
var entity_1 = require("./entity");
var ChatMessage = /** @class */ (function (_super) {
    __extends(ChatMessage, _super);
    /**
     * Instantiates a new chatMessage and sets the default values.
     */
    function ChatMessage() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ChatMessage.prototype, "attachments", {
        /**
         * Gets the attachments property value. Attached files. Attachments are currently read-only – sending attachments is not supported.
         * @returns a chatMessageAttachment
         */
        get: function () {
            return this._attachments;
        },
        /**
         * Sets the attachments property value. Attached files. Attachments are currently read-only – sending attachments is not supported.
         * @param value Value to set for the attachments property.
         */
        set: function (value) {
            this._attachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "body", {
        /**
         * Gets the body property value.
         * @returns a itemBody
         */
        get: function () {
            return this._body;
        },
        /**
         * Sets the body property value.
         * @param value Value to set for the body property.
         */
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "channelIdentity", {
        /**
         * Gets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
         * @returns a channelIdentity
         */
        get: function () {
            return this._channelIdentity;
        },
        /**
         * Sets the channelIdentity property value. If the message was sent in a channel, represents identity of the channel.
         * @param value Value to set for the channelIdentity property.
         */
        set: function (value) {
            this._channelIdentity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "chatId", {
        /**
         * Gets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
         * @returns a string
         */
        get: function () {
            return this._chatId;
        },
        /**
         * Sets the chatId property value. If the message was sent in a chat, represents the identity of the chat.
         * @param value Value to set for the chatId property.
         */
        set: function (value) {
            this._chatId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "createdDateTime", {
        /**
         * Gets the createdDateTime property value. Timestamp of when the chat message was created.
         * @returns a Date
         */
        get: function () {
            return this._createdDateTime;
        },
        /**
         * Sets the createdDateTime property value. Timestamp of when the chat message was created.
         * @param value Value to set for the createdDateTime property.
         */
        set: function (value) {
            this._createdDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "deletedDateTime", {
        /**
         * Gets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
         * @returns a Date
         */
        get: function () {
            return this._deletedDateTime;
        },
        /**
         * Sets the deletedDateTime property value. Read only. Timestamp at which the chat message was deleted, or null if not deleted.
         * @param value Value to set for the deletedDateTime property.
         */
        set: function (value) {
            this._deletedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "etag", {
        /**
         * Gets the etag property value. Read-only. Version number of the chat message.
         * @returns a string
         */
        get: function () {
            return this._etag;
        },
        /**
         * Sets the etag property value. Read-only. Version number of the chat message.
         * @param value Value to set for the etag property.
         */
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "from", {
        /**
         * Gets the from property value. Read only. Details of the sender of the chat message.
         * @returns a chatMessageFromIdentitySet
         */
        get: function () {
            return this._from;
        },
        /**
         * Sets the from property value. Read only. Details of the sender of the chat message.
         * @param value Value to set for the from property.
         */
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "hostedContents", {
        /**
         * Gets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
         * @returns a chatMessageHostedContent
         */
        get: function () {
            return this._hostedContents;
        },
        /**
         * Sets the hostedContents property value. Content in a message hosted by Microsoft Teams - for example, images or code snippets.
         * @param value Value to set for the hostedContents property.
         */
        set: function (value) {
            this._hostedContents = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "importance", {
        /**
         * Gets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
         * @returns a chatMessageImportance
         */
        get: function () {
            return this._importance;
        },
        /**
         * Sets the importance property value. The importance of the chat message. The possible values are: normal, high, urgent.
         * @param value Value to set for the importance property.
         */
        set: function (value) {
            this._importance = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "lastEditedDateTime", {
        /**
         * Gets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
         * @returns a Date
         */
        get: function () {
            return this._lastEditedDateTime;
        },
        /**
         * Sets the lastEditedDateTime property value. Read only. Timestamp when edits to the chat message were made. Triggers an 'Edited' flag in the Teams UI. If no edits are made the value is null.
         * @param value Value to set for the lastEditedDateTime property.
         */
        set: function (value) {
            this._lastEditedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "lastModifiedDateTime", {
        /**
         * Gets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
         * @returns a Date
         */
        get: function () {
            return this._lastModifiedDateTime;
        },
        /**
         * Sets the lastModifiedDateTime property value. Read only. Timestamp when the chat message is created (initial setting) or modified, including when a reaction is added or removed.
         * @param value Value to set for the lastModifiedDateTime property.
         */
        set: function (value) {
            this._lastModifiedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "locale", {
        /**
         * Gets the locale property value. Locale of the chat message set by the client. Always set to en-us.
         * @returns a string
         */
        get: function () {
            return this._locale;
        },
        /**
         * Sets the locale property value. Locale of the chat message set by the client. Always set to en-us.
         * @param value Value to set for the locale property.
         */
        set: function (value) {
            this._locale = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "mentions", {
        /**
         * Gets the mentions property value. List of entities mentioned in the chat message. Currently supports user, bot, team, channel.
         * @returns a chatMessageMention
         */
        get: function () {
            return this._mentions;
        },
        /**
         * Sets the mentions property value. List of entities mentioned in the chat message. Currently supports user, bot, team, channel.
         * @param value Value to set for the mentions property.
         */
        set: function (value) {
            this._mentions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "messageType", {
        /**
         * Gets the messageType property value. The type of chat message. The possible value is: message.
         * @returns a chatMessageType
         */
        get: function () {
            return this._messageType;
        },
        /**
         * Sets the messageType property value. The type of chat message. The possible value is: message.
         * @param value Value to set for the messageType property.
         */
        set: function (value) {
            this._messageType = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "policyViolation", {
        /**
         * Gets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
         * @returns a chatMessagePolicyViolation
         */
        get: function () {
            return this._policyViolation;
        },
        /**
         * Sets the policyViolation property value. Defines the properties of a policy violation set by a data loss prevention (DLP) application.
         * @param value Value to set for the policyViolation property.
         */
        set: function (value) {
            this._policyViolation = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "reactions", {
        /**
         * Gets the reactions property value. Reactions for this chat message (for example, Like).
         * @returns a chatMessageReaction
         */
        get: function () {
            return this._reactions;
        },
        /**
         * Sets the reactions property value. Reactions for this chat message (for example, Like).
         * @param value Value to set for the reactions property.
         */
        set: function (value) {
            this._reactions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "replies", {
        /**
         * Gets the replies property value. Replies for a specified message.
         * @returns a chatMessage
         */
        get: function () {
            return this._replies;
        },
        /**
         * Sets the replies property value. Replies for a specified message.
         * @param value Value to set for the replies property.
         */
        set: function (value) {
            this._replies = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "replyToId", {
        /**
         * Gets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
         * @returns a string
         */
        get: function () {
            return this._replyToId;
        },
        /**
         * Sets the replyToId property value. Read-only. ID of the parent chat message or root chat message of the thread. (Only applies to chat messages in channels, not chats.)
         * @param value Value to set for the replyToId property.
         */
        set: function (value) {
            this._replyToId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "subject", {
        /**
         * Gets the subject property value. The subject of the chat message, in plaintext.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value. The subject of the chat message, in plaintext.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "summary", {
        /**
         * Gets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
         * @returns a string
         */
        get: function () {
            return this._summary;
        },
        /**
         * Sets the summary property value. Summary text of the chat message that could be used for push notifications and summary views or fall back views. Only applies to channel chat messages, not chat messages in a chat.
         * @param value Value to set for the summary property.
         */
        set: function (value) {
            this._summary = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ChatMessage.prototype, "webUrl", {
        /**
         * Gets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
         * @returns a string
         */
        get: function () {
            return this._webUrl;
        },
        /**
         * Sets the webUrl property value. Read-only. Link to the message in Microsoft Teams.
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
    ChatMessage.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["attachments", function (o, n) { o.attachments = n.getCollectionOfPrimitiveValues(); }],
            ["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["channelIdentity", function (o, n) { o.channelIdentity = n.getObjectValue(ChannelIdentity); }],
            ["chatId", function (o, n) { o.chatId = n.getStringValue(); }],
            ["createdDateTime", function (o, n) { o.createdDateTime = n.getDateValue(); }],
            ["deletedDateTime", function (o, n) { o.deletedDateTime = n.getDateValue(); }],
            ["etag", function (o, n) { o.etag = n.getStringValue(); }],
            ["from", function (o, n) { o.from = n.getObjectValue(ChatMessageFromIdentitySet); }],
            ["hostedContents", function (o, n) { o.hostedContents = n.getCollectionOfObjectValues(chatMessageHostedContent_1.ChatMessageHostedContent); }],
            ["importance", function (o, n) { o.importance = n.getObjectValue(ChatMessageImportance); }],
            ["lastEditedDateTime", function (o, n) { o.lastEditedDateTime = n.getDateValue(); }],
            ["lastModifiedDateTime", function (o, n) { o.lastModifiedDateTime = n.getDateValue(); }],
            ["locale", function (o, n) { o.locale = n.getStringValue(); }],
            ["mentions", function (o, n) { o.mentions = n.getCollectionOfPrimitiveValues(); }],
            ["messageType", function (o, n) { o.messageType = n.getObjectValue(ChatMessageType); }],
            ["policyViolation", function (o, n) { o.policyViolation = n.getObjectValue(ChatMessagePolicyViolation); }],
            ["reactions", function (o, n) { o.reactions = n.getCollectionOfPrimitiveValues(); }],
            ["replies", function (o, n) { o.replies = n.getCollectionOfObjectValues(ChatMessage); }],
            ["replyToId", function (o, n) { o.replyToId = n.getStringValue(); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["summary", function (o, n) { o.summary = n.getStringValue(); }],
            ["webUrl", function (o, n) { o.webUrl = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ChatMessage.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfPrimitiveValues("attachments", this.attachments);
        writer.writeObjectValue("body", this.body);
        writer.writeObjectValue("channelIdentity", this.channelIdentity);
        writer.writeStringValue("chatId", this.chatId);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("deletedDateTime", this.deletedDateTime);
        writer.writeStringValue("etag", this.etag);
        writer.writeObjectValue("from", this.from);
        writer.writeCollectionOfObjectValues("hostedContents", this.hostedContents);
        writer.writeObjectValue("importance", this.importance);
        writer.writeDateValue("lastEditedDateTime", this.lastEditedDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("locale", this.locale);
        writer.writeCollectionOfPrimitiveValues("mentions", this.mentions);
        writer.writeObjectValue("messageType", this.messageType);
        writer.writeObjectValue("policyViolation", this.policyViolation);
        writer.writeCollectionOfPrimitiveValues("reactions", this.reactions);
        writer.writeCollectionOfObjectValues("replies", this.replies);
        writer.writeStringValue("replyToId", this.replyToId);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("summary", this.summary);
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
    return ChatMessage;
}(entity_1.Entity));
exports.ChatMessage = ChatMessage;
