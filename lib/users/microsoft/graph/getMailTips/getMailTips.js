"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var recipient_1 = require("../../../../groups/recipient");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.getMailTips;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _automaticReplies ?  : AutomaticRepliesMailTips | undefined;
    _customMailTip ?  : string | undefined;
    _deliveryRestricted ?  : boolean | undefined;
    _emailAddress ?  : EmailAddress | undefined;
    _error ?  : MailTipsError | undefined;
    _externalMemberCount ?  : number | undefined;
    _isModerated ?  : boolean | undefined;
    _mailboxFull ?  : boolean | undefined;
    _maxMessageSize ?  : number | undefined;
    _recipientScope ?  : RecipientScopeType | undefined;
    _recipientSuggestions ?  : recipient_1.Recipient[] | undefined;
    _totalMemberCount ?  : number | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    get;
    automaticReplies();
    {
        return this._automaticReplies;
    }
    ;
    get;
    customMailTip();
    {
        return this._customMailTip;
    }
    ;
    get;
    deliveryRestricted();
    {
        return this._deliveryRestricted;
    }
    ;
    get;
    emailAddress();
    {
        return this._emailAddress;
    }
    ;
    get;
    error();
    {
        return this._error;
    }
    ;
    get;
    externalMemberCount();
    {
        return this._externalMemberCount;
    }
    ;
    get;
    isModerated();
    {
        return this._isModerated;
    }
    ;
    get;
    mailboxFull();
    {
        return this._mailboxFull;
    }
    ;
    get;
    maxMessageSize();
    {
        return this._maxMessageSize;
    }
    ;
    get;
    recipientScope();
    {
        return this._recipientScope;
    }
    ;
    get;
    recipientSuggestions();
    {
        return this._recipientSuggestions;
    }
    ;
    get;
    totalMemberCount();
    {
        return this._totalMemberCount;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["automaticReplies", function (o, n) { o.automaticReplies = n.getObjectValue(AutomaticRepliesMailTips); }],
            ["customMailTip", function (o, n) { o.customMailTip = n.getStringValue(); }],
            ["deliveryRestricted", function (o, n) { o.deliveryRestricted = n.getBooleanValue(); }],
            ["emailAddress", function (o, n) { o.emailAddress = n.getObjectValue(EmailAddress); }],
            ["error", function (o, n) { o.error = n.getObjectValue(MailTipsError); }],
            ["externalMemberCount", function (o, n) { o.externalMemberCount = n.getNumberValue(); }],
            ["isModerated", function (o, n) { o.isModerated = n.getBooleanValue(); }],
            ["mailboxFull", function (o, n) { o.mailboxFull = n.getBooleanValue(); }],
            ["maxMessageSize", function (o, n) { o.maxMessageSize = n.getNumberValue(); }],
            ["recipientScope", function (o, n) { o.recipientScope = n.getObjectValue(RecipientScopeType); }],
            ["recipientSuggestions", function (o, n) { o.recipientSuggestions = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
            ["totalMemberCount", function (o, n) { o.totalMemberCount = n.getNumberValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("automaticReplies", this.automaticReplies),
        writer: writer,
        : .writeStringValue("customMailTip", this.customMailTip),
        writer: writer,
        : .writeBooleanValue("deliveryRestricted", this.deliveryRestricted),
        writer: writer,
        : .writeObjectValue("emailAddress", this.emailAddress),
        writer: writer,
        : .writeObjectValue("error", this.error),
        writer: writer,
        : .writeNumberValue("externalMemberCount", this.externalMemberCount),
        writer: writer,
        : .writeBooleanValue("isModerated", this.isModerated),
        writer: writer,
        : .writeBooleanValue("mailboxFull", this.mailboxFull),
        writer: writer,
        : .writeNumberValue("maxMessageSize", this.maxMessageSize),
        writer: writer,
        : .writeObjectValue("recipientScope", this.recipientScope),
        writer: writer,
        : .writeCollectionOfObjectValues("recipientSuggestions", this.recipientSuggestions),
        writer: writer,
        : .writeNumberValue("totalMemberCount", this.totalMemberCount),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    automaticReplies(value, AutomaticRepliesMailTips | undefined);
    {
        this._automaticReplies = value;
    }
    ;
    set;
    customMailTip(value, string | undefined);
    {
        this._customMailTip = value;
    }
    ;
    set;
    deliveryRestricted(value, boolean | undefined);
    {
        this._deliveryRestricted = value;
    }
    ;
    set;
    emailAddress(value, EmailAddress | undefined);
    {
        this._emailAddress = value;
    }
    ;
    set;
    error(value, MailTipsError | undefined);
    {
        this._error = value;
    }
    ;
    set;
    externalMemberCount(value, number | undefined);
    {
        this._externalMemberCount = value;
    }
    ;
    set;
    isModerated(value, boolean | undefined);
    {
        this._isModerated = value;
    }
    ;
    set;
    mailboxFull(value, boolean | undefined);
    {
        this._mailboxFull = value;
    }
    ;
    set;
    maxMessageSize(value, number | undefined);
    {
        this._maxMessageSize = value;
    }
    ;
    set;
    recipientScope(value, RecipientScopeType | undefined);
    {
        this._recipientScope = value;
    }
    ;
    set;
    recipientSuggestions(value, recipient_1.Recipient[] | undefined);
    {
        this._recipientSuggestions = value;
    }
    ;
    set;
    totalMemberCount(value, number | undefined);
    {
        this._totalMemberCount = value;
    }
    ;
}
