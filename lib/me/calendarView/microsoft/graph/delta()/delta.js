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
var calendar_1 = require("../../../../../calendar");
var itemBody_1 = require("../../../../../chats/itemBody");
var dateTimeTimeZone_1 = require("../../../../../dateTimeTimeZone");
var event_1 = require("../../../../../event");
var extension_1 = require("../../../../../extension");
var attachment_1 = require("../../../../../groups/attachment");
var recipient_1 = require("../../../../../groups/recipient");
var multiValueLegacyExtendedProperty_1 = require("../../../../../multiValueLegacyExtendedProperty");
var outlookItem_1 = require("../../../../../outlookItem");
var singleValueLegacyExtendedProperty_1 = require("../../../../../singleValueLegacyExtendedProperty");
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
    _allowNewTimeProposals ?  : boolean | undefined;
    _attachments ?  : attachment_1.Attachment[] | undefined;
    _attendees ?  : Attendee[] | undefined;
    _body ?  : itemBody_1.ItemBody | undefined;
    _bodyPreview ?  : string | undefined;
    _calendar ?  : calendar_1.Calendar | undefined;
    _end ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
    _extensions ?  : extension_1.Extension[] | undefined;
    _hasAttachments ?  : boolean | undefined;
    _hideAttendees ?  : boolean | undefined;
    _iCalUId ?  : string | undefined;
    _importance ?  : Importance | undefined;
    _instances ?  : event_1.Event[] | undefined;
    _isAllDay ?  : boolean | undefined;
    _isCancelled ?  : boolean | undefined;
    _isDraft ?  : boolean | undefined;
    _isOnlineMeeting ?  : boolean | undefined;
    _isOrganizer ?  : boolean | undefined;
    _isReminderOn ?  : boolean | undefined;
    _location ?  : Location | undefined;
    _locations ?  : Location[] | undefined;
    _multiValueExtendedProperties ?  : multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined;
    _onlineMeeting ?  : OnlineMeetingInfo | undefined;
    _onlineMeetingProvider ?  : OnlineMeetingProviderType | undefined;
    _onlineMeetingUrl ?  : string | undefined;
    _organizer ?  : recipient_1.Recipient | undefined;
    _originalEndTimeZone ?  : string | undefined;
    _originalStart ?  : Date | undefined;
    _originalStartTimeZone ?  : string | undefined;
    _recurrence ?  : PatternedRecurrence | undefined;
    _reminderMinutesBeforeStart ?  : number | undefined;
    _responseRequested ?  : boolean | undefined;
    _responseStatus ?  : ResponseStatus | undefined;
    _sensitivity ?  : Sensitivity | undefined;
    _seriesMasterId ?  : string | undefined;
    _showAs ?  : FreeBusyStatus | undefined;
    _singleValueExtendedProperties ?  : singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined;
    _start ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
    _subject ?  : string | undefined;
    _transactionId ?  : string | undefined;
    _type ?  : EventType | undefined;
    _webLink ?  : string | undefined;
    constructor();
    {
        _this = _super.call(this) || this;
    }
    ;
    get;
    allowNewTimeProposals();
    {
        return this._allowNewTimeProposals;
    }
    ;
    get;
    attachments();
    {
        return this._attachments;
    }
    ;
    get;
    attendees();
    {
        return this._attendees;
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
    calendar();
    {
        return this._calendar;
    }
    ;
    get;
    end();
    {
        return this._end;
    }
    ;
    get;
    extensions();
    {
        return this._extensions;
    }
    ;
    get;
    hasAttachments();
    {
        return this._hasAttachments;
    }
    ;
    get;
    hideAttendees();
    {
        return this._hideAttendees;
    }
    ;
    get;
    iCalUId();
    {
        return this._iCalUId;
    }
    ;
    get;
    importance();
    {
        return this._importance;
    }
    ;
    get;
    instances();
    {
        return this._instances;
    }
    ;
    get;
    isAllDay();
    {
        return this._isAllDay;
    }
    ;
    get;
    isCancelled();
    {
        return this._isCancelled;
    }
    ;
    get;
    isDraft();
    {
        return this._isDraft;
    }
    ;
    get;
    isOnlineMeeting();
    {
        return this._isOnlineMeeting;
    }
    ;
    get;
    isOrganizer();
    {
        return this._isOrganizer;
    }
    ;
    get;
    isReminderOn();
    {
        return this._isReminderOn;
    }
    ;
    get;
    location();
    {
        return this._location;
    }
    ;
    get;
    locations();
    {
        return this._locations;
    }
    ;
    get;
    multiValueExtendedProperties();
    {
        return this._multiValueExtendedProperties;
    }
    ;
    get;
    onlineMeeting();
    {
        return this._onlineMeeting;
    }
    ;
    get;
    onlineMeetingProvider();
    {
        return this._onlineMeetingProvider;
    }
    ;
    get;
    onlineMeetingUrl();
    {
        return this._onlineMeetingUrl;
    }
    ;
    get;
    organizer();
    {
        return this._organizer;
    }
    ;
    get;
    originalEndTimeZone();
    {
        return this._originalEndTimeZone;
    }
    ;
    get;
    originalStart();
    {
        return this._originalStart;
    }
    ;
    get;
    originalStartTimeZone();
    {
        return this._originalStartTimeZone;
    }
    ;
    get;
    recurrence();
    {
        return this._recurrence;
    }
    ;
    get;
    reminderMinutesBeforeStart();
    {
        return this._reminderMinutesBeforeStart;
    }
    ;
    get;
    responseRequested();
    {
        return this._responseRequested;
    }
    ;
    get;
    responseStatus();
    {
        return this._responseStatus;
    }
    ;
    get;
    sensitivity();
    {
        return this._sensitivity;
    }
    ;
    get;
    seriesMasterId();
    {
        return this._seriesMasterId;
    }
    ;
    get;
    showAs();
    {
        return this._showAs;
    }
    ;
    get;
    singleValueExtendedProperties();
    {
        return this._singleValueExtendedProperties;
    }
    ;
    get;
    start();
    {
        return this._start;
    }
    ;
    get;
    subject();
    {
        return this._subject;
    }
    ;
    get;
    transactionId();
    {
        return this._transactionId;
    }
    ;
    get;
    type();
    {
        return this._type;
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
        return: new Map(__spreadArray(__spreadArray([], __read(_super.getFieldDeserializers.call(_this)), false), [["allowNewTimeProposals", function (o, n) { o.allowNewTimeProposals = n.getBooleanValue(); }],
            ["attachments", function (o, n) { o.attachments = n.getCollectionOfObjectValues(attachment_1.Attachment); }],
            ["attendees", function (o, n) { o.attendees = n.getCollectionOfPrimitiveValues(); }],
            ["body", function (o, n) { o.body = n.getObjectValue(itemBody_1.ItemBody); }],
            ["bodyPreview", function (o, n) { o.bodyPreview = n.getStringValue(); }],
            ["calendar", function (o, n) { o.calendar = n.getObjectValue(calendar_1.Calendar); }],
            ["end", function (o, n) { o.end = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["extensions", function (o, n) { o.extensions = n.getCollectionOfObjectValues(extension_1.Extension); }],
            ["hasAttachments", function (o, n) { o.hasAttachments = n.getBooleanValue(); }],
            ["hideAttendees", function (o, n) { o.hideAttendees = n.getBooleanValue(); }],
            ["iCalUId", function (o, n) { o.iCalUId = n.getStringValue(); }],
            ["importance", function (o, n) { o.importance = n.getObjectValue(Importance); }],
            ["instances", function (o, n) { o.instances = n.getCollectionOfObjectValues(event_1.Event); }],
            ["isAllDay", function (o, n) { o.isAllDay = n.getBooleanValue(); }],
            ["isCancelled", function (o, n) { o.isCancelled = n.getBooleanValue(); }],
            ["isDraft", function (o, n) { o.isDraft = n.getBooleanValue(); }],
            ["isOnlineMeeting", function (o, n) { o.isOnlineMeeting = n.getBooleanValue(); }],
            ["isOrganizer", function (o, n) { o.isOrganizer = n.getBooleanValue(); }],
            ["isReminderOn", function (o, n) { o.isReminderOn = n.getBooleanValue(); }],
            ["location", function (o, n) { o.location = n.getObjectValue(Location); }],
            ["locations", function (o, n) { o.locations = n.getCollectionOfPrimitiveValues(); }],
            ["multiValueExtendedProperties", function (o, n) { o.multiValueExtendedProperties = n.getCollectionOfObjectValues(multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty); }],
            ["onlineMeeting", function (o, n) { o.onlineMeeting = n.getObjectValue(OnlineMeetingInfo); }],
            ["onlineMeetingProvider", function (o, n) { o.onlineMeetingProvider = n.getObjectValue(OnlineMeetingProviderType); }],
            ["onlineMeetingUrl", function (o, n) { o.onlineMeetingUrl = n.getStringValue(); }],
            ["organizer", function (o, n) { o.organizer = n.getObjectValue(recipient_1.Recipient); }],
            ["originalEndTimeZone", function (o, n) { o.originalEndTimeZone = n.getStringValue(); }],
            ["originalStart", function (o, n) { o.originalStart = n.getDateValue(); }],
            ["originalStartTimeZone", function (o, n) { o.originalStartTimeZone = n.getStringValue(); }],
            ["recurrence", function (o, n) { o.recurrence = n.getObjectValue(PatternedRecurrence); }],
            ["reminderMinutesBeforeStart", function (o, n) { o.reminderMinutesBeforeStart = n.getNumberValue(); }],
            ["responseRequested", function (o, n) { o.responseRequested = n.getBooleanValue(); }],
            ["responseStatus", function (o, n) { o.responseStatus = n.getObjectValue(ResponseStatus); }],
            ["sensitivity", function (o, n) { o.sensitivity = n.getObjectValue(Sensitivity); }],
            ["seriesMasterId", function (o, n) { o.seriesMasterId = n.getStringValue(); }],
            ["showAs", function (o, n) { o.showAs = n.getObjectValue(FreeBusyStatus); }],
            ["singleValueExtendedProperties", function (o, n) { o.singleValueExtendedProperties = n.getCollectionOfObjectValues(singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty); }],
            ["start", function (o, n) { o.start = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
            ["transactionId", function (o, n) { o.transactionId = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getObjectValue(EventType); }],
            ["webLink", function (o, n) { o.webLink = n.getStringValue(); }],], false))
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        super: .serialize(writer),
        writer: writer,
        : .writeBooleanValue("allowNewTimeProposals", this.allowNewTimeProposals),
        writer: writer,
        : .writeCollectionOfObjectValues("attachments", this.attachments),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("attendees", this.attendees),
        writer: writer,
        : .writeObjectValue("body", this.body),
        writer: writer,
        : .writeStringValue("bodyPreview", this.bodyPreview),
        writer: writer,
        : .writeObjectValue("calendar", this.calendar),
        writer: writer,
        : .writeObjectValue("end", this.end),
        writer: writer,
        : .writeCollectionOfObjectValues("extensions", this.extensions),
        writer: writer,
        : .writeBooleanValue("hasAttachments", this.hasAttachments),
        writer: writer,
        : .writeBooleanValue("hideAttendees", this.hideAttendees),
        writer: writer,
        : .writeStringValue("iCalUId", this.iCalUId),
        writer: writer,
        : .writeObjectValue("importance", this.importance),
        writer: writer,
        : .writeCollectionOfObjectValues("instances", this.instances),
        writer: writer,
        : .writeBooleanValue("isAllDay", this.isAllDay),
        writer: writer,
        : .writeBooleanValue("isCancelled", this.isCancelled),
        writer: writer,
        : .writeBooleanValue("isDraft", this.isDraft),
        writer: writer,
        : .writeBooleanValue("isOnlineMeeting", this.isOnlineMeeting),
        writer: writer,
        : .writeBooleanValue("isOrganizer", this.isOrganizer),
        writer: writer,
        : .writeBooleanValue("isReminderOn", this.isReminderOn),
        writer: writer,
        : .writeObjectValue("location", this.location),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("locations", this.locations),
        writer: writer,
        : .writeCollectionOfObjectValues("multiValueExtendedProperties", this.multiValueExtendedProperties),
        writer: writer,
        : .writeObjectValue("onlineMeeting", this.onlineMeeting),
        writer: writer,
        : .writeObjectValue("onlineMeetingProvider", this.onlineMeetingProvider),
        writer: writer,
        : .writeStringValue("onlineMeetingUrl", this.onlineMeetingUrl),
        writer: writer,
        : .writeObjectValue("organizer", this.organizer),
        writer: writer,
        : .writeStringValue("originalEndTimeZone", this.originalEndTimeZone),
        writer: writer,
        : .writeDateValue("originalStart", this.originalStart),
        writer: writer,
        : .writeStringValue("originalStartTimeZone", this.originalStartTimeZone),
        writer: writer,
        : .writeObjectValue("recurrence", this.recurrence),
        writer: writer,
        : .writeNumberValue("reminderMinutesBeforeStart", this.reminderMinutesBeforeStart),
        writer: writer,
        : .writeBooleanValue("responseRequested", this.responseRequested),
        writer: writer,
        : .writeObjectValue("responseStatus", this.responseStatus),
        writer: writer,
        : .writeObjectValue("sensitivity", this.sensitivity),
        writer: writer,
        : .writeStringValue("seriesMasterId", this.seriesMasterId),
        writer: writer,
        : .writeObjectValue("showAs", this.showAs),
        writer: writer,
        : .writeCollectionOfObjectValues("singleValueExtendedProperties", this.singleValueExtendedProperties),
        writer: writer,
        : .writeObjectValue("start", this.start),
        writer: writer,
        : .writeStringValue("subject", this.subject),
        writer: writer,
        : .writeStringValue("transactionId", this.transactionId),
        writer: writer,
        : .writeObjectValue("type", this.type),
        writer: writer,
        : .writeStringValue("webLink", this.webLink)
    };
    set;
    allowNewTimeProposals(value, boolean | undefined);
    {
        this._allowNewTimeProposals = value;
    }
    ;
    set;
    attachments(value, attachment_1.Attachment[] | undefined);
    {
        this._attachments = value;
    }
    ;
    set;
    attendees(value, Attendee[] | undefined);
    {
        this._attendees = value;
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
    calendar(value, calendar_1.Calendar | undefined);
    {
        this._calendar = value;
    }
    ;
    set;
    end(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._end = value;
    }
    ;
    set;
    extensions(value, extension_1.Extension[] | undefined);
    {
        this._extensions = value;
    }
    ;
    set;
    hasAttachments(value, boolean | undefined);
    {
        this._hasAttachments = value;
    }
    ;
    set;
    hideAttendees(value, boolean | undefined);
    {
        this._hideAttendees = value;
    }
    ;
    set;
    iCalUId(value, string | undefined);
    {
        this._iCalUId = value;
    }
    ;
    set;
    importance(value, Importance | undefined);
    {
        this._importance = value;
    }
    ;
    set;
    instances(value, event_1.Event[] | undefined);
    {
        this._instances = value;
    }
    ;
    set;
    isAllDay(value, boolean | undefined);
    {
        this._isAllDay = value;
    }
    ;
    set;
    isCancelled(value, boolean | undefined);
    {
        this._isCancelled = value;
    }
    ;
    set;
    isDraft(value, boolean | undefined);
    {
        this._isDraft = value;
    }
    ;
    set;
    isOnlineMeeting(value, boolean | undefined);
    {
        this._isOnlineMeeting = value;
    }
    ;
    set;
    isOrganizer(value, boolean | undefined);
    {
        this._isOrganizer = value;
    }
    ;
    set;
    isReminderOn(value, boolean | undefined);
    {
        this._isReminderOn = value;
    }
    ;
    set;
    location(value, Location | undefined);
    {
        this._location = value;
    }
    ;
    set;
    locations(value, Location[] | undefined);
    {
        this._locations = value;
    }
    ;
    set;
    multiValueExtendedProperties(value, multiValueLegacyExtendedProperty_1.MultiValueLegacyExtendedProperty[] | undefined);
    {
        this._multiValueExtendedProperties = value;
    }
    ;
    set;
    onlineMeeting(value, OnlineMeetingInfo | undefined);
    {
        this._onlineMeeting = value;
    }
    ;
    set;
    onlineMeetingProvider(value, OnlineMeetingProviderType | undefined);
    {
        this._onlineMeetingProvider = value;
    }
    ;
    set;
    onlineMeetingUrl(value, string | undefined);
    {
        this._onlineMeetingUrl = value;
    }
    ;
    set;
    organizer(value, recipient_1.Recipient | undefined);
    {
        this._organizer = value;
    }
    ;
    set;
    originalEndTimeZone(value, string | undefined);
    {
        this._originalEndTimeZone = value;
    }
    ;
    set;
    originalStart(value, Date | undefined);
    {
        this._originalStart = value;
    }
    ;
    set;
    originalStartTimeZone(value, string | undefined);
    {
        this._originalStartTimeZone = value;
    }
    ;
    set;
    recurrence(value, PatternedRecurrence | undefined);
    {
        this._recurrence = value;
    }
    ;
    set;
    reminderMinutesBeforeStart(value, number | undefined);
    {
        this._reminderMinutesBeforeStart = value;
    }
    ;
    set;
    responseRequested(value, boolean | undefined);
    {
        this._responseRequested = value;
    }
    ;
    set;
    responseStatus(value, ResponseStatus | undefined);
    {
        this._responseStatus = value;
    }
    ;
    set;
    sensitivity(value, Sensitivity | undefined);
    {
        this._sensitivity = value;
    }
    ;
    set;
    seriesMasterId(value, string | undefined);
    {
        this._seriesMasterId = value;
    }
    ;
    set;
    showAs(value, FreeBusyStatus | undefined);
    {
        this._showAs = value;
    }
    ;
    set;
    singleValueExtendedProperties(value, singleValueLegacyExtendedProperty_1.SingleValueLegacyExtendedProperty[] | undefined);
    {
        this._singleValueExtendedProperties = value;
    }
    ;
    set;
    start(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._start = value;
    }
    ;
    set;
    subject(value, string | undefined);
    {
        this._subject = value;
    }
    ;
    set;
    transactionId(value, string | undefined);
    {
        this._transactionId = value;
    }
    ;
    set;
    type(value, EventType | undefined);
    {
        this._type = value;
    }
    ;
    set;
    webLink(value, string | undefined);
    {
        this._webLink = value;
    }
    ;
}
