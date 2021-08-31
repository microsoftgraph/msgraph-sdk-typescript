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
var extension_1 = require("../../../../../../extension");
var multiValueLegacyExtendedProperty_1 = require("../../../../../../multiValueLegacyExtendedProperty");
var outlookItem_1 = require("../../../../../../outlookItem");
var profilePhoto_1 = require("../../../../../../profilePhoto");
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
    _assistantName ?  : string | undefined;
    _birthday ?  : Date | undefined;
    _businessAddress ?  : PhysicalAddress | undefined;
    _businessHomePage ?  : string | undefined;
    _businessPhones ?  : string[] | undefined;
    _children ?  : string[] | undefined;
    _companyName ?  : string | undefined;
    _department ?  : string | undefined;
    _displayName ?  : string | undefined;
    _emailAddresses ?  : EmailAddress[] | undefined;
    _extensions ?  : extension_1.Extension[] | undefined;
    _fileAs ?  : string | undefined;
    _generation ?  : string | undefined;
    _givenName ?  : string | undefined;
    _homeAddress ?  : PhysicalAddress | undefined;
    _homePhones ?  : string[] | undefined;
    _imAddresses ?  : string[] | undefined;
    _initials ?  : string | undefined;
    _jobTitle ?  : string | undefined;
    _manager ?  : string | undefined;
    _middleName ?  : string | undefined;
    _mobilePhone ?  : string | undefined;
    _multiValueExtendedProperties ?  : multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined;
    _nickName ?  : string | undefined;
    _officeLocation ?  : string | undefined;
    _otherAddress ?  : PhysicalAddress | undefined;
    _parentFolderId ?  : string | undefined;
    _personalNotes ?  : string | undefined;
    _photo ?  : profilePhoto_1.ProfilePhoto | undefined;
    _profession ?  : string | undefined;
    _singleValueExtendedProperties ?  : singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined;
    _spouseName ?  : string | undefined;
    _surname ?  : string | undefined;
    _title ?  : string | undefined;
    _yomiCompanyName ?  : string | undefined;
    _yomiGivenName ?  : string | undefined;
    _yomiSurname ?  : string | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    assistantName();
    {
        return this._assistantName;
    }
    ;
    get;
    birthday();
    {
        return this._birthday;
    }
    ;
    get;
    businessAddress();
    {
        return this._businessAddress;
    }
    ;
    get;
    businessHomePage();
    {
        return this._businessHomePage;
    }
    ;
    get;
    businessPhones();
    {
        return this._businessPhones;
    }
    ;
    get;
    children();
    {
        return this._children;
    }
    ;
    get;
    companyName();
    {
        return this._companyName;
    }
    ;
    get;
    department();
    {
        return this._department;
    }
    ;
    get;
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    emailAddresses();
    {
        return this._emailAddresses;
    }
    ;
    get;
    extensions();
    {
        return this._extensions;
    }
    ;
    get;
    fileAs();
    {
        return this._fileAs;
    }
    ;
    get;
    generation();
    {
        return this._generation;
    }
    ;
    get;
    givenName();
    {
        return this._givenName;
    }
    ;
    get;
    homeAddress();
    {
        return this._homeAddress;
    }
    ;
    get;
    homePhones();
    {
        return this._homePhones;
    }
    ;
    get;
    imAddresses();
    {
        return this._imAddresses;
    }
    ;
    get;
    initials();
    {
        return this._initials;
    }
    ;
    get;
    jobTitle();
    {
        return this._jobTitle;
    }
    ;
    get;
    manager();
    {
        return this._manager;
    }
    ;
    get;
    middleName();
    {
        return this._middleName;
    }
    ;
    get;
    mobilePhone();
    {
        return this._mobilePhone;
    }
    ;
    get;
    multiValueExtendedProperties();
    {
        return this._multiValueExtendedProperties;
    }
    ;
    get;
    nickName();
    {
        return this._nickName;
    }
    ;
    get;
    officeLocation();
    {
        return this._officeLocation;
    }
    ;
    get;
    otherAddress();
    {
        return this._otherAddress;
    }
    ;
    get;
    parentFolderId();
    {
        return this._parentFolderId;
    }
    ;
    get;
    personalNotes();
    {
        return this._personalNotes;
    }
    ;
    get;
    photo();
    {
        return this._photo;
    }
    ;
    get;
    profession();
    {
        return this._profession;
    }
    ;
    get;
    singleValueExtendedProperties();
    {
        return this._singleValueExtendedProperties;
    }
    ;
    get;
    spouseName();
    {
        return this._spouseName;
    }
    ;
    get;
    surname();
    {
        return this._surname;
    }
    ;
    get;
    title();
    {
        return this._title;
    }
    ;
    get;
    yomiCompanyName();
    {
        return this._yomiCompanyName;
    }
    ;
    get;
    yomiGivenName();
    {
        return this._yomiGivenName;
    }
    ;
    get;
    yomiSurname();
    {
        return this._yomiSurname;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["assistantName", function (o, n) { o.assistantName = n.getStringValue(); }],
            ["birthday", function (o, n) { o.birthday = n.getDateValue(); }],
            ["businessAddress", function (o, n) { o.businessAddress = n.getObjectValue(PhysicalAddress); }],
            ["businessHomePage", function (o, n) { o.businessHomePage = n.getStringValue(); }],
            ["businessPhones", function (o, n) { o.businessPhones = n.getCollectionOfPrimitiveValues(); }],
            ["children", function (o, n) { o.children = n.getCollectionOfPrimitiveValues(); }],
            ["companyName", function (o, n) { o.companyName = n.getStringValue(); }],
            ["department", function (o, n) { o.department = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["emailAddresses", function (o, n) { o.emailAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["fileAs", function (o, n) { o.fileAs = n.getStringValue(); }],
            ["generation", function (o, n) { o.generation = n.getStringValue(); }],
            ["givenName", function (o, n) { o.givenName = n.getStringValue(); }],
            ["homeAddress", function (o, n) { o.homeAddress = n.getObjectValue(PhysicalAddress); }],
            ["homePhones", function (o, n) { o.homePhones = n.getCollectionOfPrimitiveValues(); }],
            ["imAddresses", function (o, n) { o.imAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["initials", function (o, n) { o.initials = n.getStringValue(); }],
            ["jobTitle", function (o, n) { o.jobTitle = n.getStringValue(); }],
            ["manager", function (o, n) { o.manager = n.getStringValue(); }],
            ["middleName", function (o, n) { o.middleName = n.getStringValue(); }],
            ["mobilePhone", function (o, n) { o.mobilePhone = n.getStringValue(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["nickName", function (o, n) { o.nickName = n.getStringValue(); }],
            ["officeLocation", function (o, n) { o.officeLocation = n.getStringValue(); }],
            ["otherAddress", function (o, n) { o.otherAddress = n.getObjectValue(PhysicalAddress); }],
            ["parentFolderId", function (o, n) { o.parentFolderId = n.getStringValue(); }],
            ["personalNotes", function (o, n) { o.personalNotes = n.getStringValue(); }],
            ["photo", function (o, n) { o.photo = n.getObjectValue(profilePhoto_1.ProfilePhoto); }],
            ["profession", function (o, n) { o.profession = n.getStringValue(); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["spouseName", function (o, n) { o.spouseName = n.getStringValue(); }],
            ["surname", function (o, n) { o.surname = n.getStringValue(); }],
            ["title", function (o, n) { o.title = n.getStringValue(); }],
            ["yomiCompanyName", function (o, n) { o.yomiCompanyName = n.getStringValue(); }],
            ["yomiGivenName", function (o, n) { o.yomiGivenName = n.getStringValue(); }],
            ["yomiSurname", function (o, n) { o.yomiSurname = n.getStringValue(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeStringValue("assistantName", this.assistantName),
        writer: writer,
        : .writeDateValue("birthday", this.birthday),
        writer: writer,
        : .writeObjectValue("businessAddress", this.businessAddress),
        writer: writer,
        : .writeStringValue("businessHomePage", this.businessHomePage),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("businessPhones", this.businessPhones),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("children", this.children),
        writer: writer,
        : .writeStringValue("companyName", this.companyName),
        writer: writer,
        : .writeStringValue("department", this.department),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("emailAddresses", this.emailAddresses),
        writer: writer,
        : .writeCollectionOfObjectValues("extensions", this.extensions),
        writer: writer,
        : .writeStringValue("fileAs", this.fileAs),
        writer: writer,
        : .writeStringValue("generation", this.generation),
        writer: writer,
        : .writeStringValue("givenName", this.givenName),
        writer: writer,
        : .writeObjectValue("homeAddress", this.homeAddress),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("homePhones", this.homePhones),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("imAddresses", this.imAddresses),
        writer: writer,
        : .writeStringValue("initials", this.initials),
        writer: writer,
        : .writeStringValue("jobTitle", this.jobTitle),
        writer: writer,
        : .writeStringValue("manager", this.manager),
        writer: writer,
        : .writeStringValue("middleName", this.middleName),
        writer: writer,
        : .writeStringValue("mobilePhone", this.mobilePhone),
        writer: writer,
        : .writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties),
        writer: writer,
        : .writeStringValue("nickName", this.nickName),
        writer: writer,
        : .writeStringValue("officeLocation", this.officeLocation),
        writer: writer,
        : .writeObjectValue("otherAddress", this.otherAddress),
        writer: writer,
        : .writeStringValue("parentFolderId", this.parentFolderId),
        writer: writer,
        : .writeStringValue("personalNotes", this.personalNotes),
        writer: writer,
        : .writeObjectValue("photo", this.photo),
        writer: writer,
        : .writeStringValue("profession", this.profession),
        writer: writer,
        : .writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties),
        writer: writer,
        : .writeStringValue("spouseName", this.spouseName),
        writer: writer,
        : .writeStringValue("surname", this.surname),
        writer: writer,
        : .writeStringValue("title", this.title),
        writer: writer,
        : .writeStringValue("yomiCompanyName", this.yomiCompanyName),
        writer: writer,
        : .writeStringValue("yomiGivenName", this.yomiGivenName),
        writer: writer,
        : .writeStringValue("yomiSurname", this.yomiSurname)
    };
    set;
    assistantName(value, string | undefined);
    {
        this._assistantName = value;
    }
    ;
    set;
    birthday(value, Date | undefined);
    {
        this._birthday = value;
    }
    ;
    set;
    businessAddress(value, PhysicalAddress | undefined);
    {
        this._businessAddress = value;
    }
    ;
    set;
    businessHomePage(value, string | undefined);
    {
        this._businessHomePage = value;
    }
    ;
    set;
    businessPhones(value, string[] | undefined);
    {
        this._businessPhones = value;
    }
    ;
    set;
    children(value, string[] | undefined);
    {
        this._children = value;
    }
    ;
    set;
    companyName(value, string | undefined);
    {
        this._companyName = value;
    }
    ;
    set;
    department(value, string | undefined);
    {
        this._department = value;
    }
    ;
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    emailAddresses(value, EmailAddress[] | undefined);
    {
        this._emailAddresses = value;
    }
    ;
    set;
    extensions(value, extension_1.Extension[] | undefined);
    {
        this._extensions = value;
    }
    ;
    set;
    fileAs(value, string | undefined);
    {
        this._fileAs = value;
    }
    ;
    set;
    generation(value, string | undefined);
    {
        this._generation = value;
    }
    ;
    set;
    givenName(value, string | undefined);
    {
        this._givenName = value;
    }
    ;
    set;
    homeAddress(value, PhysicalAddress | undefined);
    {
        this._homeAddress = value;
    }
    ;
    set;
    homePhones(value, string[] | undefined);
    {
        this._homePhones = value;
    }
    ;
    set;
    imAddresses(value, string[] | undefined);
    {
        this._imAddresses = value;
    }
    ;
    set;
    initials(value, string | undefined);
    {
        this._initials = value;
    }
    ;
    set;
    jobTitle(value, string | undefined);
    {
        this._jobTitle = value;
    }
    ;
    set;
    manager(value, string | undefined);
    {
        this._manager = value;
    }
    ;
    set;
    middleName(value, string | undefined);
    {
        this._middleName = value;
    }
    ;
    set;
    mobilePhone(value, string | undefined);
    {
        this._mobilePhone = value;
    }
    ;
    set;
    multiValueExtendedProperties(value, multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined);
    {
        this._multiValueExtendedProperties = value;
    }
    ;
    set;
    nickName(value, string | undefined);
    {
        this._nickName = value;
    }
    ;
    set;
    officeLocation(value, string | undefined);
    {
        this._officeLocation = value;
    }
    ;
    set;
    otherAddress(value, PhysicalAddress | undefined);
    {
        this._otherAddress = value;
    }
    ;
    set;
    parentFolderId(value, string | undefined);
    {
        this._parentFolderId = value;
    }
    ;
    set;
    personalNotes(value, string | undefined);
    {
        this._personalNotes = value;
    }
    ;
    set;
    photo(value, profilePhoto_1.ProfilePhoto | undefined);
    {
        this._photo = value;
    }
    ;
    set;
    profession(value, string | undefined);
    {
        this._profession = value;
    }
    ;
    set;
    singleValueExtendedProperties(value, singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined);
    {
        this._singleValueExtendedProperties = value;
    }
    ;
    set;
    spouseName(value, string | undefined);
    {
        this._spouseName = value;
    }
    ;
    set;
    surname(value, string | undefined);
    {
        this._surname = value;
    }
    ;
    set;
    title(value, string | undefined);
    {
        this._title = value;
    }
    ;
    set;
    yomiCompanyName(value, string | undefined);
    {
        this._yomiCompanyName = value;
    }
    ;
    set;
    yomiGivenName(value, string | undefined);
    {
        this._yomiGivenName = value;
    }
    ;
    set;
    yomiSurname(value, string | undefined);
    {
        this._yomiSurname = value;
    }
    ;
}
