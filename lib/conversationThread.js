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
exports.ConversationThread = void 0;
var entity_1 = require("./entity");
var post_1 = require("./groups/post");
var recipient_1 = require("./groups/recipient");
var ConversationThread = /** @class */ (function (_super) {
    __extends(ConversationThread, _super);
    /**
     * Instantiates a new conversationThread and sets the default values.
     */
    function ConversationThread() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(ConversationThread.prototype, "ccRecipients", {
        /**
         * Gets the ccRecipients property value. The Cc: recipients for the thread.
         * @returns a recipient
         */
        get: function () {
            return this._ccRecipients;
        },
        /**
         * Sets the ccRecipients property value. The Cc: recipients for the thread.
         * @param value Value to set for the ccRecipients property.
         */
        set: function (value) {
            this._ccRecipients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "hasAttachments", {
        /**
         * Gets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment.
         * @returns a boolean
         */
        get: function () {
            return this._hasAttachments;
        },
        /**
         * Sets the hasAttachments property value. Indicates whether any of the posts within this thread has at least one attachment.
         * @param value Value to set for the hasAttachments property.
         */
        set: function (value) {
            this._hasAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "isLocked", {
        /**
         * Gets the isLocked property value. Indicates if the thread is locked.
         * @returns a boolean
         */
        get: function () {
            return this._isLocked;
        },
        /**
         * Sets the isLocked property value. Indicates if the thread is locked.
         * @param value Value to set for the isLocked property.
         */
        set: function (value) {
            this._isLocked = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "lastDeliveredDateTime", {
        /**
         * Gets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._lastDeliveredDateTime;
        },
        /**
         * Sets the lastDeliveredDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the lastDeliveredDateTime property.
         */
        set: function (value) {
            this._lastDeliveredDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "posts", {
        /**
         * Gets the posts property value. Read-only. Nullable.
         * @returns a post
         */
        get: function () {
            return this._posts;
        },
        /**
         * Sets the posts property value. Read-only. Nullable.
         * @param value Value to set for the posts property.
         */
        set: function (value) {
            this._posts = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "preview", {
        /**
         * Gets the preview property value. A short summary from the body of the latest post in this conversation.
         * @returns a string
         */
        get: function () {
            return this._preview;
        },
        /**
         * Sets the preview property value. A short summary from the body of the latest post in this conversation.
         * @param value Value to set for the preview property.
         */
        set: function (value) {
            this._preview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "topic", {
        /**
         * Gets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
         * @returns a string
         */
        get: function () {
            return this._topic;
        },
        /**
         * Sets the topic property value. The topic of the conversation. This property can be set when the conversation is created, but it cannot be updated.
         * @param value Value to set for the topic property.
         */
        set: function (value) {
            this._topic = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "toRecipients", {
        /**
         * Gets the toRecipients property value. The To: recipients for the thread.
         * @returns a recipient
         */
        get: function () {
            return this._toRecipients;
        },
        /**
         * Sets the toRecipients property value. The To: recipients for the thread.
         * @param value Value to set for the toRecipients property.
         */
        set: function (value) {
            this._toRecipients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ConversationThread.prototype, "uniqueSenders", {
        /**
         * Gets the uniqueSenders property value. All the users that sent a message to this thread.
         * @returns a string
         */
        get: function () {
            return this._uniqueSenders;
        },
        /**
         * Sets the uniqueSenders property value. All the users that sent a message to this thread.
         * @param value Value to set for the uniqueSenders property.
         */
        set: function (value) {
            this._uniqueSenders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    ConversationThread.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["ccRecipients", function (o, n) { o.ccRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["isLocked", function (o, n) { o.isLocked = n.getBooleanValue(); }],
            ["lastDeliveredDateTime", function (o, n) { o.lastDeliveredDateTime = n.getDateValue(); }],
            ["posts", function (o, n) { o.posts = n.getCollectionOfObjectValues(post_1.Post); }],
            ["preview", function (o, n) { o.preview = n.getStringValue(); }],
            ["topic", function (o, n) { o.topic = n.getStringValue(); }],
            ["toRecipients", function (o, n) { o.toRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["uniqueSenders", function (o, n) { o.uniqueSenders = n.getCollectionOfPrimitiveValues(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    ConversationThread.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("ccRecipients", this.ccRecipients);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeBooleanValue("isLocked", this.isLocked);
        writer.writeDateValue("lastDeliveredDateTime", this.lastDeliveredDateTime);
        writer.writeCollectionOfObjectValues("posts", this.posts);
        writer.writeStringValue("preview", this.preview);
        writer.writeStringValue("topic", this.topic);
        writer.writeCollectionOfObjectValues("toRecipients", this.toRecipients);
        writer.writeCollectionOfPrimitiveValues("uniqueSenders", this.uniqueSenders);
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
    return ConversationThread;
}(entity_1.Entity));
exports.ConversationThread = ConversationThread;
