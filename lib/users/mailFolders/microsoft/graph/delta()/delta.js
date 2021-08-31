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
var entity_1 = require("../../../../../entity");
var mailFolder_1 = require("../../../../../mailFolder");
var messageRule_1 = require("../../../../../me/messageRule");
var message_1 = require("../../../../../message");
var multiValueLegacyExtendedProperty_1 = require("../../../../../multiValueLegacyExtendedProperty");
var singleValueLegacyExtendedProperty_1 = require("../../../../../singleValueLegacyExtendedProperty");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.delta;
entity_1.Entity;
implements;
kiota_abstractions_1.Parsable;
{
    _childFolderCount ?  : number | undefined;
    _childFolders ?  : mailFolder_1.MailFolder[] | undefined;
    _displayName ?  : string | undefined;
    _isHidden ?  : boolean | undefined;
    _messageRules ?  : messageRule_1.MessageRule[] | undefined;
    _messages ?  : message_1.Message[] | undefined;
    _multiValueExtendedProperties ?  : multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined;
    _parentFolderId ?  : string | undefined;
    _singleValueExtendedProperties ?  : singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined;
    _totalItemCount ?  : number | undefined;
    _unreadItemCount ?  : number | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    childFolderCount();
    {
        return this._childFolderCount;
    }
    ;
    get;
    childFolders();
    {
        return this._childFolders;
    }
    ;
    get;
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    isHidden();
    {
        return this._isHidden;
    }
    ;
    get;
    messageRules();
    {
        return this._messageRules;
    }
    ;
    get;
    messages();
    {
        return this._messages;
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
    singleValueExtendedProperties();
    {
        return this._singleValueExtendedProperties;
    }
    ;
    get;
    totalItemCount();
    {
        return this._totalItemCount;
    }
    ;
    get;
    unreadItemCount();
    {
        return this._unreadItemCount;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["childFolderCount", function (o, n) { o.childFolderCount = n.getNumberValue(); }],
            ["childFolders", function (o, n) { o.childFolders = n.getCollectionOfObjectValues(mailFolder_1.MailFolder); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["isHidden", function (o, n) { o.isHidden = n.getBooleanValue(); }],
            ["messageRules", function (o, n) { o.messageRules = n.getCollectionOfObjectValues(messageRule_1.MessageRule); }],
            ["messages", function (o, n) { o.messages = n.getCollectionOfObjectValues(message_1.Message); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["totalItemCount", function (o, n) { o.totalItemCount = n.getNumberValue(); }],
            ["unreadItemCount", function (o, n) { o.unreadItemCount = n.getNumberValue(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeNumberValue("childFolderCount", this.childFolderCount),
        writer: writer,
        : .writeCollectionOfObjectValues("childFolders", this.childFolders),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeBooleanValue("isHidden", this.isHidden),
        writer: writer,
        : .writeCollectionOfObjectValues("messageRules", this.messageRules),
        writer: writer,
        : .writeCollectionOfObjectValues("messages", this.messages),
        writer: writer,
        : .writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties),
        writer: writer,
        : .writeStringValue("parentFolderId", this.parentFolderId),
        writer: writer,
        : .writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties),
        writer: writer,
        : .writeNumberValue("totalItemCount", this.totalItemCount),
        writer: writer,
        : .writeNumberValue("unreadItemCount", this.unreadItemCount)
    };
    set;
    childFolderCount(value, number | undefined);
    {
        this._childFolderCount = value;
    }
    ;
    set;
    childFolders(value, mailFolder_1.MailFolder[] | undefined);
    {
        this._childFolders = value;
    }
    ;
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    isHidden(value, boolean | undefined);
    {
        this._isHidden = value;
    }
    ;
    set;
    messageRules(value, messageRule_1.MessageRule[] | undefined);
    {
        this._messageRules = value;
    }
    ;
    set;
    messages(value, message_1.Message[] | undefined);
    {
        this._messages = value;
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
    singleValueExtendedProperties(value, singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined);
    {
        this._singleValueExtendedProperties = value;
    }
    ;
    set;
    totalItemCount(value, number | undefined);
    {
        this._totalItemCount = value;
    }
    ;
    set;
    unreadItemCount(value, number | undefined);
    {
        this._unreadItemCount = value;
    }
    ;
}
