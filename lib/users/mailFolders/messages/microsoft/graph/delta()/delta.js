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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var itemBody_1 = require("../../../../../../chats/itemBody");
var extension_1 = require("../../../../../../extension");
var attachment_1 = require("../../../../../../groups/attachment");
var recipient_1 = require("../../../../../../groups/recipient");
var multiValueLegacyExtendedProperty_1 = require("../../../../../../multiValueLegacyExtendedProperty");
var outlookItem_1 = require("../../../../../../outlookItem");
var singleValueLegacyExtendedProperty_1 = require("../../../../../../singleValueLegacyExtendedProperty");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.delta;
outlookItem_1.OutlookItem;
implements;
kiota_abstractions_1.Parsable;
{
    _attachments ?  : attachment_1.Attachment[] | undefined;
    _bccRecipients ?  : recipient_1.Recipient[] | undefined;
    _body ?  : itemBody_1.ItemBody | undefined;
    _bodyPreview ?  : string | undefined;
    _ccRecipients ?  : recipient_1.Recipient[] | undefined;
    _conversationId ?  : string | undefined;
    _conversationIndex ?  : Binary | undefined;
    _extensions ?  : extension_1.Extension[] | undefined;
    _flag ?  : FollowupFlag | undefined;
    _from ?  : recipient_1.Recipient | undefined;
    _hasAttachments ?  : boolean | undefined;
    _importance ?  : Importance | undefined;
    _inferenceClassification ?  : InferenceClassificationType | undefined;
    _internetMessageHeaders ?  : InternetMessageHeader[] | undefined;
    _internetMessageId ?  : string | undefined;
    _isDeliveryReceiptRequested ?  : boolean | undefined;
    _isDraft ?  : boolean | undefined;
    _isRead ?  : boolean | undefined;
    _isReadReceiptRequested ?  : boolean | undefined;
    _multiValueExtendedProperties ?  : multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined;
    _parentFolderId ?  : string | undefined;
    _receivedDateTime ?  : Date | undefined;
    _replyTo ?  : recipient_1.Recipient[] | undefined;
    _sender ?  : recipient_1.Recipient | undefined;
    _sentDateTime ?  : Date | undefined;
    _singleValueExtendedProperties ?  : singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined;
    _subject ?  : string | undefined;
    _toRecipients ?  : recipient_1.Recipient[] | undefined;
    _uniqueBody ?  : itemBody_1.ItemBody | undefined;
    _webLink ?  : string | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    attachments();
    {
        return this._attachments;
    }
    ;
    get;
    bccRecipients();
    {
        return this._bccRecipients;
    }
    ;
    get;
    body();
    {
        return this._body;
    }
    ;
    get;
    bodyPreview();
    {
        return this._bodyPreview;
    }
    ;
    get;
    ccRecipients();
    {
        return this._ccRecipients;
    }
    ;
    get;
    conversationId();
    {
        return this._conversationId;
    }
    ;
    get;
    conversationIndex();
    {
        return this._conversationIndex;
    }
    ;
    get;
    extensions();
    {
        return this._extensions;
    }
    ;
    get;
    flag();
    {
        return this._flag;
    }
    ;
    get;
    from();
    {
        return this._from;
    }
    ;
    get;
    hasAttachments();
    {
        return this._hasAttachments;
    }
    ;
    get;
    importance();
    {
        return this._importance;
    }
    ;
    get;
    inferenceClassification();
    {
        return this._inferenceClassification;
    }
    ;
    get;
    internetMessageHeaders();
    {
        return this._internetMessageHeaders;
    }
    ;
    get;
    internetMessageId();
    {
        return this._internetMessageId;
    }
    ;
    get;
    isDeliveryReceiptRequested();
    {
        return this._isDeliveryReceiptRequested;
    }
    ;
    get;
    isDraft();
    {
        return this._isDraft;
    }
    ;
    get;
    isRead();
    {
        return this._isRead;
    }
    ;
    get;
    isReadReceiptRequested();
    {
        return this._isReadReceiptRequested;
    }
    ;
    get;
    multiValueExtendedProperties();
    {
        return this._multiValueExtendedProperties;
    }
    ;
    get;
    parentFolderId();
    {
        return this._parentFolderId;
    }
    ;
    get;
    receivedDateTime();
    {
        return this._receivedDateTime;
    }
    ;
    get;
    replyTo();
    {
        return this._replyTo;
    }
    ;
    get;
    sender();
    {
        return this._sender;
    }
    ;
    get;
    sentDateTime();
    {
        return this._sentDateTime;
    }
    ;
    get;
    singleValueExtendedProperties();
    {
        return this._singleValueExtendedProperties;
    }
    ;
    get;
    subject();
    {
        return this._subject;
    }
    ;
    get;
    toRecipients();
    {
        return this._toRecipients;
    }
    ;
    get;
    uniqueBody();
    {
        return this._uniqueBody;
    }
    ;
    get;
    webLink();
    {
        return this._webLink;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["attachments", function (o, n) { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
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
            ["webLink", function (o, n) { o.webLink = n.getStringValue(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeCollectionOfObjectValues("attachments", this.attachments),
        writer: writer,
        : .writeCollectionOfObjectValues("bccRecipients", this.bccRecipients),
        writer: writer,
        : .writeObjectValue("body", this.body),
        writer: writer,
        : .writeStringValue("bodyPreview", this.bodyPreview),
        writer: writer,
        : .writeCollectionOfObjectValues("ccRecipients", this.ccRecipients),
        writer: writer,
        : .writeStringValue("conversationId", this.conversationId),
        writer: writer,
        : .writeObjectValue("conversationIndex", this.conversationIndex),
        writer: writer,
        : .writeCollectionOfObjectValues("extensions", this.extensions),
        writer: writer,
        : .writeObjectValue("flag", this.flag),
        writer: writer,
        : .writeObjectValue("from", this.from),
        writer: writer,
        : .writeBooleanValue("hasAttachments", this.hasAttachments),
        writer: writer,
        : .writeObjectValue("importance", this.importance),
        writer: writer,
        : .writeObjectValue("inferenceClassification", this.inferenceClassification),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("internetMessageHeaders", this.internetMessageHeaders),
        writer: writer,
        : .writeStringValue("internetMessageId", this.internetMessageId),
        writer: writer,
        : .writeBooleanValue("isDeliveryReceiptRequested", this.isDeliveryReceiptRequested),
        writer: writer,
        : .writeBooleanValue("isDraft", this.isDraft),
        writer: writer,
        : .writeBooleanValue("isRead", this.isRead),
        writer: writer,
        : .writeBooleanValue("isReadReceiptRequested", this.isReadReceiptRequested),
        writer: writer,
        : .writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties),
        writer: writer,
        : .writeStringValue("parentFolderId", this.parentFolderId),
        writer: writer,
        : .writeDateValue("receivedDateTime", this.receivedDateTime),
        writer: writer,
        : .writeCollectionOfObjectValues("replyTo", this.replyTo),
        writer: writer,
        : .writeObjectValue("sender", this.sender),
        writer: writer,
        : .writeDateValue("sentDateTime", this.sentDateTime),
        writer: writer,
        : .writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties),
        writer: writer,
        : .writeStringValue("subject", this.subject),
        writer: writer,
        : .writeCollectionOfObjectValues("toRecipients", this.toRecipients),
        writer: writer,
        : .writeObjectValue("uniqueBody", this.uniqueBody),
        writer: writer,
        : .writeStringValue("webLink", this.webLink)
    };
    set;
    attachments(value, attachment_1.Attachment[] | undefined);
    {
        this._attachments = value;
    }
    ;
    set;
    bccRecipients(value, recipient_1.Recipient[] | undefined);
    {
        this._bccRecipients = value;
    }
    ;
    set;
    body(value, itemBody_1.ItemBody | undefined);
    {
        this._body = value;
    }
    ;
    set;
    bodyPreview(value, string | undefined);
    {
        this._bodyPreview = value;
    }
    ;
    set;
    ccRecipients(value, recipient_1.Recipient[] | undefined);
    {
        this._ccRecipients = value;
    }
    ;
    set;
    conversationId(value, string | undefined);
    {
        this._conversationId = value;
    }
    ;
    set;
    conversationIndex(value, Binary | undefined);
    {
        this._conversationIndex = value;
    }
    ;
    set;
    extensions(value, extension_1.Extension[] | undefined);
    {
        this._extensions = value;
    }
    ;
    set;
    flag(value, FollowupFlag | undefined);
    {
        this._flag = value;
    }
    ;
    set;
    from(value, recipient_1.Recipient | undefined);
    {
        this._from = value;
    }
    ;
    set;
    hasAttachments(value, boolean | undefined);
    {
        this._hasAttachments = value;
    }
    ;
    set;
    importance(value, Importance | undefined);
    {
        this._importance = value;
    }
    ;
    set;
    inferenceClassification(value, InferenceClassificationType | undefined);
    {
        this._inferenceClassification = value;
    }
    ;
    set;
    internetMessageHeaders(value, InternetMessageHeader[] | undefined);
    {
        this._internetMessageHeaders = value;
    }
    ;
    set;
    internetMessageId(value, string | undefined);
    {
        this._internetMessageId = value;
    }
    ;
    set;
    isDeliveryReceiptRequested(value, boolean | undefined);
    {
        this._isDeliveryReceiptRequested = value;
    }
    ;
    set;
    isDraft(value, boolean | undefined);
    {
        this._isDraft = value;
    }
    ;
    set;
    isRead(value, boolean | undefined);
    {
        this._isRead = value;
    }
    ;
    set;
    isReadReceiptRequested(value, boolean | undefined);
    {
        this._isReadReceiptRequested = value;
    }
    ;
    set;
    multiValueExtendedProperties(value, multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined);
    {
        this._multiValueExtendedProperties = value;
    }
    ;
    set;
    parentFolderId(value, string | undefined);
    {
        this._parentFolderId = value;
    }
    ;
    set;
    receivedDateTime(value, Date | undefined);
    {
        this._receivedDateTime = value;
    }
    ;
    set;
    replyTo(value, recipient_1.Recipient[] | undefined);
    {
        this._replyTo = value;
    }
    ;
    set;
    sender(value, recipient_1.Recipient | undefined);
    {
        this._sender = value;
    }
    ;
    set;
    sentDateTime(value, Date | undefined);
    {
        this._sentDateTime = value;
    }
    ;
    set;
    singleValueExtendedProperties(value, singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined);
    {
        this._singleValueExtendedProperties = value;
    }
    ;
    set;
    subject(value, string | undefined);
    {
        this._subject = value;
    }
    ;
    set;
    toRecipients(value, recipient_1.Recipient[] | undefined);
    {
        this._toRecipients = value;
    }
    ;
    set;
    uniqueBody(value, itemBody_1.ItemBody | undefined);
    {
        this._uniqueBody = value;
    }
    ;
    set;
    webLink(value, string | undefined);
    {
        this._webLink = value;
    }
    ;
}
