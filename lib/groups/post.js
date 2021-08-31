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
exports.Post = void 0;
var itemBody_1 = require("../chats/itemBody");
var extension_1 = require("../extension");
var multiValueLegacyExtendedProperty_1 = require("../multiValueLegacyExtendedProperty");
var outlookItem_1 = require("../outlookItem");
var singleValueLegacyExtendedProperty_1 = require("../singleValueLegacyExtendedProperty");
var attachment_1 = require("./attachment");
var recipient_1 = require("./recipient");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    /**
     * Instantiates a new post and sets the default values.
     */
    function Post() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Post.prototype, "attachments", {
        /**
         * Gets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable.
         * @returns a attachment
         */
        get: function () {
            return this._attachments;
        },
        /**
         * Sets the attachments property value. The collection of fileAttachment, itemAttachment, and referenceAttachment attachments for the post. Read-only. Nullable.
         * @param value Value to set for the attachments property.
         */
        set: function (value) {
            this._attachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "body", {
        /**
         * Gets the body property value. The contents of the post. This is a default property. This property can be null.
         * @returns a itemBody
         */
        get: function () {
            return this._body;
        },
        /**
         * Sets the body property value. The contents of the post. This is a default property. This property can be null.
         * @param value Value to set for the body property.
         */
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "conversationId", {
        /**
         * Gets the conversationId property value. Unique ID of the conversation. Read-only.
         * @returns a string
         */
        get: function () {
            return this._conversationId;
        },
        /**
         * Sets the conversationId property value. Unique ID of the conversation. Read-only.
         * @param value Value to set for the conversationId property.
         */
        set: function (value) {
            this._conversationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "conversationThreadId", {
        /**
         * Gets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
         * @returns a string
         */
        get: function () {
            return this._conversationThreadId;
        },
        /**
         * Sets the conversationThreadId property value. Unique ID of the conversation thread. Read-only.
         * @param value Value to set for the conversationThreadId property.
         */
        set: function (value) {
            this._conversationThreadId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the post. Read-only. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "from", {
        /**
         * Gets the from property value.
         * @returns a recipient
         */
        get: function () {
            return this._from;
        },
        /**
         * Sets the from property value.
         * @param value Value to set for the from property.
         */
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "hasAttachments", {
        /**
         * Gets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
         * @returns a boolean
         */
        get: function () {
            return this._hasAttachments;
        },
        /**
         * Sets the hasAttachments property value. Indicates whether the post has at least one attachment. This is a default property.
         * @param value Value to set for the hasAttachments property.
         */
        set: function (value) {
            this._hasAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "inReplyTo", {
        /**
         * Gets the inReplyTo property value. The earlier post that this post is replying to in the conversationThread. Read-only.
         * @returns a post
         */
        get: function () {
            return this._inReplyTo;
        },
        /**
         * Sets the inReplyTo property value. The earlier post that this post is replying to in the conversationThread. Read-only.
         * @param value Value to set for the inReplyTo property.
         */
        set: function (value) {
            this._inReplyTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the post. Read-only. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "newParticipants", {
        /**
         * Gets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
         * @returns a recipient
         */
        get: function () {
            return this._newParticipants;
        },
        /**
         * Sets the newParticipants property value. Conversation participants that were added to the thread as part of this post.
         * @param value Value to set for the newParticipants property.
         */
        set: function (value) {
            this._newParticipants = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "receivedDateTime", {
        /**
         * Gets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @returns a Date
         */
        get: function () {
            return this._receivedDateTime;
        },
        /**
         * Sets the receivedDateTime property value. Specifies when the post was received. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
         * @param value Value to set for the receivedDateTime property.
         */
        set: function (value) {
            this._receivedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "sender", {
        /**
         * Gets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
         * @returns a recipient
         */
        get: function () {
            return this._sender;
        },
        /**
         * Sets the sender property value. Contains the address of the sender. The value of Sender is assumed to be the address of the authenticated user in the case when Sender is not specified. This is a default property.
         * @param value Value to set for the sender property.
         */
        set: function (value) {
            this._sender = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Post.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the post. Read-only. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Post.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["attachments", function (o, n) { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
            ["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["conversationId", function (o, n) { o.conversationId = n.getStringValue(); }],
            ["conversationThreadId", function (o, n) { o.conversationThreadId = n.getStringValue(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["from", function (o, n) { o.from = n.getObjectValue(recipient_1.Recipient); }],
            ["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["inReplyTo", function (o, n) { o.inReplyTo = n.getObjectValue(Post); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["newParticipants", function (o, n) { o.newParticipants = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["receivedDateTime", function (o, n) { o.receivedDateTime = n.getDateValue(); }],
            ["sender", function (o, n) { o.sender = n.getObjectValue(recipient_1.Recipient); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Post.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("attachments", this.attachments);
        writer.writeObjectValue("body", this.body);
        writer.writeStringValue("conversationId", this.conversationId);
        writer.writeStringValue("conversationThreadId", this.conversationThreadId);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeObjectValue("from", this.from);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeObjectValue("inReplyTo", this.inReplyTo);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeCollectionOfObjectValues("newParticipants", this.newParticipants);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeObjectValue("sender", this.sender);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
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
    return Post;
}(outlookItem_1.OutlookItem));
exports.Post = Post;
