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
exports.Message = void 0;
var itemBody_1 = require("./chats/itemBody");
var extension_1 = require("./extension");
var attachment_1 = require("./groups/attachment");
var recipient_1 = require("./groups/recipient");
var multiValueLegacyExtendedProperty_1 = require("./multiValueLegacyExtendedProperty");
var outlookItem_1 = require("./outlookItem");
var singleValueLegacyExtendedProperty_1 = require("./singleValueLegacyExtendedProperty");
var Message = /** @class */ (function (_super) {
    __extends(Message, _super);
    /**
     * Instantiates a new message and sets the default values.
     */
    function Message() {
        return _super.call(this) || this;
    }
    ;
    Object.defineProperty(Message.prototype, "attachments", {
        /**
         * Gets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
         * @returns a attachment
         */
        get: function () {
            return this._attachments;
        },
        /**
         * Sets the attachments property value. The fileAttachment and itemAttachment attachments for the message.
         * @param value Value to set for the attachments property.
         */
        set: function (value) {
            this._attachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "bccRecipients", {
        /**
         * Gets the bccRecipients property value. The Bcc: recipients for the message.
         * @returns a recipient
         */
        get: function () {
            return this._bccRecipients;
        },
        /**
         * Sets the bccRecipients property value. The Bcc: recipients for the message.
         * @param value Value to set for the bccRecipients property.
         */
        set: function (value) {
            this._bccRecipients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "body", {
        /**
         * Gets the body property value. The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
         * @returns a itemBody
         */
        get: function () {
            return this._body;
        },
        /**
         * Sets the body property value. The body of the message. It can be in HTML or text format. Find out about safe HTML in a message body.
         * @param value Value to set for the body property.
         */
        set: function (value) {
            this._body = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "bodyPreview", {
        /**
         * Gets the bodyPreview property value. The first 255 characters of the message body. It is in text format. If the message contains instances of mention, this property would contain a concatenation of these mentions as well.
         * @returns a string
         */
        get: function () {
            return this._bodyPreview;
        },
        /**
         * Sets the bodyPreview property value. The first 255 characters of the message body. It is in text format. If the message contains instances of mention, this property would contain a concatenation of these mentions as well.
         * @param value Value to set for the bodyPreview property.
         */
        set: function (value) {
            this._bodyPreview = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "ccRecipients", {
        /**
         * Gets the ccRecipients property value. The Cc: recipients for the message.
         * @returns a recipient
         */
        get: function () {
            return this._ccRecipients;
        },
        /**
         * Sets the ccRecipients property value. The Cc: recipients for the message.
         * @param value Value to set for the ccRecipients property.
         */
        set: function (value) {
            this._ccRecipients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "conversationId", {
        /**
         * Gets the conversationId property value. The ID of the conversation the email belongs to.
         * @returns a string
         */
        get: function () {
            return this._conversationId;
        },
        /**
         * Sets the conversationId property value. The ID of the conversation the email belongs to.
         * @param value Value to set for the conversationId property.
         */
        set: function (value) {
            this._conversationId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "conversationIndex", {
        /**
         * Gets the conversationIndex property value. Indicates the position of the message within the conversation.
         * @returns a binary
         */
        get: function () {
            return this._conversationIndex;
        },
        /**
         * Sets the conversationIndex property value. Indicates the position of the message within the conversation.
         * @param value Value to set for the conversationIndex property.
         */
        set: function (value) {
            this._conversationIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "extensions", {
        /**
         * Gets the extensions property value. The collection of open extensions defined for the message. Nullable.
         * @returns a extension
         */
        get: function () {
            return this._extensions;
        },
        /**
         * Sets the extensions property value. The collection of open extensions defined for the message. Nullable.
         * @param value Value to set for the extensions property.
         */
        set: function (value) {
            this._extensions = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "flag", {
        /**
         * Gets the flag property value. The flag value that indicates the status, start date, due date, or completion date for the message.
         * @returns a followupFlag
         */
        get: function () {
            return this._flag;
        },
        /**
         * Sets the flag property value. The flag value that indicates the status, start date, due date, or completion date for the message.
         * @param value Value to set for the flag property.
         */
        set: function (value) {
            this._flag = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "from", {
        /**
         * Gets the from property value. The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property, except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
         * @returns a recipient
         */
        get: function () {
            return this._from;
        },
        /**
         * Sets the from property value. The owner of the mailbox from which the message is sent. In most cases, this value is the same as the sender property, except for sharing or delegation scenarios. The value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
         * @param value Value to set for the from property.
         */
        set: function (value) {
            this._from = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "hasAttachments", {
        /**
         * Gets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
         * @returns a boolean
         */
        get: function () {
            return this._hasAttachments;
        },
        /**
         * Sets the hasAttachments property value. Indicates whether the message has attachments. This property doesn't include inline attachments, so if a message contains only inline attachments, this property is false. To verify the existence of inline attachments, parse the body property to look for a src attribute, such as <IMG src='cid:image001.jpg@01D26CD8.6C05F070'>.
         * @param value Value to set for the hasAttachments property.
         */
        set: function (value) {
            this._hasAttachments = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "importance", {
        /**
         * Gets the importance property value. The importance of the message. The possible values are: low, normal, and high.
         * @returns a importance
         */
        get: function () {
            return this._importance;
        },
        /**
         * Sets the importance property value. The importance of the message. The possible values are: low, normal, and high.
         * @param value Value to set for the importance property.
         */
        set: function (value) {
            this._importance = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "inferenceClassification", {
        /**
         * Gets the inferenceClassification property value. The classification of the message for the user, based on inferred relevance or importance, or on an explicit override. The possible values are: focused or other.
         * @returns a inferenceClassificationType
         */
        get: function () {
            return this._inferenceClassification;
        },
        /**
         * Sets the inferenceClassification property value. The classification of the message for the user, based on inferred relevance or importance, or on an explicit override. The possible values are: focused or other.
         * @param value Value to set for the inferenceClassification property.
         */
        set: function (value) {
            this._inferenceClassification = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "internetMessageHeaders", {
        /**
         * Gets the internetMessageHeaders property value. A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the message.  Returned only on applying a $select query option. Read-only.
         * @returns a internetMessageHeader
         */
        get: function () {
            return this._internetMessageHeaders;
        },
        /**
         * Sets the internetMessageHeaders property value. A collection of message headers defined by RFC5322. The set includes message headers indicating the network path taken by a message from the sender to the recipient. It can also contain custom message headers that hold app data for the message.  Returned only on applying a $select query option. Read-only.
         * @param value Value to set for the internetMessageHeaders property.
         */
        set: function (value) {
            this._internetMessageHeaders = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "internetMessageId", {
        /**
         * Gets the internetMessageId property value. The message ID in the format specified by RFC2822.
         * @returns a string
         */
        get: function () {
            return this._internetMessageId;
        },
        /**
         * Sets the internetMessageId property value. The message ID in the format specified by RFC2822.
         * @param value Value to set for the internetMessageId property.
         */
        set: function (value) {
            this._internetMessageId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "isDeliveryReceiptRequested", {
        /**
         * Gets the isDeliveryReceiptRequested property value. Indicates whether a read receipt is requested for the message.
         * @returns a boolean
         */
        get: function () {
            return this._isDeliveryReceiptRequested;
        },
        /**
         * Sets the isDeliveryReceiptRequested property value. Indicates whether a read receipt is requested for the message.
         * @param value Value to set for the isDeliveryReceiptRequested property.
         */
        set: function (value) {
            this._isDeliveryReceiptRequested = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "isDraft", {
        /**
         * Gets the isDraft property value. Indicates whether the message is a draft. A message is a draft if it hasn't been sent yet.
         * @returns a boolean
         */
        get: function () {
            return this._isDraft;
        },
        /**
         * Sets the isDraft property value. Indicates whether the message is a draft. A message is a draft if it hasn't been sent yet.
         * @param value Value to set for the isDraft property.
         */
        set: function (value) {
            this._isDraft = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "isRead", {
        /**
         * Gets the isRead property value. Indicates whether the message has been read.
         * @returns a boolean
         */
        get: function () {
            return this._isRead;
        },
        /**
         * Sets the isRead property value. Indicates whether the message has been read.
         * @param value Value to set for the isRead property.
         */
        set: function (value) {
            this._isRead = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "isReadReceiptRequested", {
        /**
         * Gets the isReadReceiptRequested property value. Indicates whether a read receipt is requested for the message.
         * @returns a boolean
         */
        get: function () {
            return this._isReadReceiptRequested;
        },
        /**
         * Sets the isReadReceiptRequested property value. Indicates whether a read receipt is requested for the message.
         * @param value Value to set for the isReadReceiptRequested property.
         */
        set: function (value) {
            this._isReadReceiptRequested = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "multiValueExtendedProperties", {
        /**
         * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
         * @returns a multiValueLegacyExtendedProperty
         */
        get: function () {
            return this._multiValueExtendedProperties;
        },
        /**
         * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the message. Nullable.
         * @param value Value to set for the multiValueExtendedProperties property.
         */
        set: function (value) {
            this._multiValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "parentFolderId", {
        /**
         * Gets the parentFolderId property value. The unique identifier for the message's parent mailFolder.
         * @returns a string
         */
        get: function () {
            return this._parentFolderId;
        },
        /**
         * Sets the parentFolderId property value. The unique identifier for the message's parent mailFolder.
         * @param value Value to set for the parentFolderId property.
         */
        set: function (value) {
            this._parentFolderId = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "receivedDateTime", {
        /**
         * Gets the receivedDateTime property value. The date and time the message was received.  The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._receivedDateTime;
        },
        /**
         * Sets the receivedDateTime property value. The date and time the message was received.  The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the receivedDateTime property.
         */
        set: function (value) {
            this._receivedDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "replyTo", {
        /**
         * Gets the replyTo property value. The email addresses to use when replying.
         * @returns a recipient
         */
        get: function () {
            return this._replyTo;
        },
        /**
         * Sets the replyTo property value. The email addresses to use when replying.
         * @param value Value to set for the replyTo property.
         */
        set: function (value) {
            this._replyTo = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "sender", {
        /**
         * Gets the sender property value. The account that is actually used to generate the message. In most cases, this value is the same as the from property. You can set this property to a different value when sending a message from a shared mailbox, for a shared calendar, or as a delegate. In any case, the value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
         * @returns a recipient
         */
        get: function () {
            return this._sender;
        },
        /**
         * Sets the sender property value. The account that is actually used to generate the message. In most cases, this value is the same as the from property. You can set this property to a different value when sending a message from a shared mailbox, for a shared calendar, or as a delegate. In any case, the value must correspond to the actual mailbox used. Find out more about setting the from and sender properties of a message.
         * @param value Value to set for the sender property.
         */
        set: function (value) {
            this._sender = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "sentDateTime", {
        /**
         * Gets the sentDateTime property value. The date and time the message was sent.  The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @returns a Date
         */
        get: function () {
            return this._sentDateTime;
        },
        /**
         * Sets the sentDateTime property value. The date and time the message was sent.  The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
         * @param value Value to set for the sentDateTime property.
         */
        set: function (value) {
            this._sentDateTime = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "singleValueExtendedProperties", {
        /**
         * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
         * @returns a singleValueLegacyExtendedProperty
         */
        get: function () {
            return this._singleValueExtendedProperties;
        },
        /**
         * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the message. Nullable.
         * @param value Value to set for the singleValueExtendedProperties property.
         */
        set: function (value) {
            this._singleValueExtendedProperties = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "subject", {
        /**
         * Gets the subject property value. The subject of the message.
         * @returns a string
         */
        get: function () {
            return this._subject;
        },
        /**
         * Sets the subject property value. The subject of the message.
         * @param value Value to set for the subject property.
         */
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "toRecipients", {
        /**
         * Gets the toRecipients property value. The To: recipients for the message.
         * @returns a recipient
         */
        get: function () {
            return this._toRecipients;
        },
        /**
         * Sets the toRecipients property value. The To: recipients for the message.
         * @param value Value to set for the toRecipients property.
         */
        set: function (value) {
            this._toRecipients = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "uniqueBody", {
        /**
         * Gets the uniqueBody property value. The part of the body of the message that is unique to the current message. uniqueBody is not returned by default but can be retrieved for a given message by use of the ?$select=uniqueBody query. It can be in HTML or text format.
         * @returns a itemBody
         */
        get: function () {
            return this._uniqueBody;
        },
        /**
         * Sets the uniqueBody property value. The part of the body of the message that is unique to the current message. uniqueBody is not returned by default but can be retrieved for a given message by use of the ?$select=uniqueBody query. It can be in HTML or text format.
         * @param value Value to set for the uniqueBody property.
         */
        set: function (value) {
            this._uniqueBody = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Message.prototype, "webLink", {
        /**
         * Gets the webLink property value. The URL to open the message in Outlook on the web.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook on the web review pane.The message will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
         * @returns a string
         */
        get: function () {
            return this._webLink;
        },
        /**
         * Sets the webLink property value. The URL to open the message in Outlook on the web.You can append an ispopout argument to the end of the URL to change how the message is displayed. If ispopout is not present or if it is set to 1, then the message is shown in a popout window. If ispopout is set to 0, then the browser will show the message in the Outlook on the web review pane.The message will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame.
         * @param value Value to set for the webLink property.
         */
        set: function (value) {
            this._webLink = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    Message.prototype.getFieldDeserializers = function () {
        return new Map(__spreadArray(__spreadArray([], __read(_super.prototype.getFieldDeserializers.call(this)), false), [["attachments", function (o, n) { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
            ["bccRecipients", function (o, n) { o.bccRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["bodyPreview", function (o, n) { o.bodyPreview = n.getStringValue(); }],
            ["ccRecipients", function (o, n) { o.ccRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["conversationId", function (o, n) { o.conversationId = n.getStringValue(); }],
            ["conversationIndex", function (o, n) { o.conversationIndex = n.getObjectValue(Binary); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["flag", function (o, n) { o.flag = n.getObjectValue(FollowupFlag); }],
            ["from", function (o, n) { o.from = n.getObjectValue(recipient_1.Recipient); }],
            ["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["importance", function (o, n) { o.importance = n.getObjectValue(Importance); }],
            ["inferenceClassification", function (o, n) { o.inferenceClassification = n.getObjectValue(InferenceClassificationType); }],
            ["internetMessageHeaders", function (o, n) { o.internetMessageHeaders = n.getCollectionOfPrimitiveValues(); }],
            ["internetMessageId", function (o, n) { o.internetMessageId = n.getStringValue(); }],
            ["isDeliveryReceiptRequested", function (o, n) { o.isDeliveryReceiptRequested = n.getBooleanValue(); }],
            ["isDraft", function (o, n) { o.isDraft = n.getBooleanValue(); }],
            ["isRead", function (o, n) { o.isRead = n.getBooleanValue(); }],
            ["isReadReceiptRequested", function (o, n) { o.isReadReceiptRequested = n.getBooleanValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["receivedDateTime", function (o, n) { o.receivedDateTime = n.getDateValue(); }],
            ["replyTo", function (o, n) { o.replyTo = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["sender", function (o, n) { o.sender = n.getObjectValue(recipient_1.Recipient); }],
            ["sentDateTime", function (o, n) { o.sentDateTime = n.getDateValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["toRecipients", function (o, n) { o.toRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["uniqueBody", function (o, n) { o.uniqueBody = n.getObjectValue(itemBody_1.ItemBody); }],
            ["webLink", function (o, n) { o.webLink = n.getStringValue(); }],], false));
    };
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    Message.prototype.serialize = function (writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        _super.prototype.serialize.call(this, writer);
        writer.writeCollectionOfObjectValues("attachments", this.attachments);
        writer.writeCollectionOfObjectValues("bccRecipients", this.bccRecipients);
        writer.writeObjectValue("body", this.body);
        writer.writeStringValue("bodyPreview", this.bodyPreview);
        writer.writeCollectionOfObjectValues("ccRecipients", this.ccRecipients);
        writer.writeStringValue("conversationId", this.conversationId);
        writer.writeObjectValue("conversationIndex", this.conversationIndex);
        writer.writeCollectionOfObjectValues("extensions", this.extensions);
        writer.writeObjectValue("flag", this.flag);
        writer.writeObjectValue("from", this.from);
        writer.writeBooleanValue("hasAttachments", this.hasAttachments);
        writer.writeObjectValue("importance", this.importance);
        writer.writeObjectValue("inferenceClassification", this.inferenceClassification);
        writer.writeCollectionOfPrimitiveValues("internetMessageHeaders", this.internetMessageHeaders);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeBooleanValue("isDeliveryReceiptRequested", this.isDeliveryReceiptRequested);
        writer.writeBooleanValue("isDraft", this.isDraft);
        writer.writeBooleanValue("isRead", this.isRead);
        writer.writeBooleanValue("isReadReceiptRequested", this.isReadReceiptRequested);
        writer.writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeDateValue("receivedDateTime", this.receivedDateTime);
        writer.writeCollectionOfObjectValues("replyTo", this.replyTo);
        writer.writeObjectValue("sender", this.sender);
        writer.writeDateValue("sentDateTime", this.sentDateTime);
        writer.writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("subject", this.subject);
        writer.writeCollectionOfObjectValues("toRecipients", this.toRecipients);
        writer.writeObjectValue("uniqueBody", this.uniqueBody);
        writer.writeStringValue("webLink", this.webLink);
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
    return Message;
}(outlookItem_1.OutlookItem));
exports.Message = Message;
