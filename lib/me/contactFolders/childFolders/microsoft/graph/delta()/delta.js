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
var contact_1 = require("../../../../../../contact");
var contactFolder_1 = require("../../../../../../contactFolder");
var entity_1 = require("../../../../../../entity");
var multiValueLegacyExtendedProperty_1 = require("../../../../../../multiValueLegacyExtendedProperty");
var singleValueLegacyExtendedProperty_1 = require("../../../../../../singleValueLegacyExtendedProperty");
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
    _childFolders ?  : contactFolder_1.ContactFolder[] | undefined;
    _contacts ?  : contact_1.Contact[] | undefined;
    _displayName ?  : string | undefined;
    _multiValueExtendedProperties ?  : multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined;
    _parentFolderId ?  : string | undefined;
    _singleValueExtendedProperties ?  : singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    childFolders();
    {
        return this._childFolders;
    }
    ;
    get;
    contacts();
    {
        return this._contacts;
    }
    ;
    get;
    displayName();
    {
        return this._displayName;
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
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["childFolders", function (o, n) { o.childFolders = n.getCollectionOfObjectValues(contactFolder_1.ContactFolder); }],
            ["contacts", function (o, n) { o.contacts = n.getCollectionOfObjectValues(contact_1.Contact); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeCollectionOfObjectValues("childFolders", this.childFolders),
        writer: writer,
        : .writeCollectionOfObjectValues("contacts", this.contacts),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties),
        writer: writer,
        : .writeStringValue("parentFolderId", this.parentFolderId),
        writer: writer,
        : .writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties)
    };
    set;
    childFolders(value, contactFolder_1.ContactFolder[] | undefined);
    {
        this._childFolders = value;
    }
    ;
    set;
    contacts(value, contact_1.Contact[] | undefined);
    {
        this._contacts = value;
    }
    ;
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
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
}
