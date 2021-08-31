"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var dateTimeTimeZone_1 = require("../../../../dateTimeTimeZone");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.reminderView;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _changeKey ?  : string | undefined;
    _eventEndTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
    _eventId ?  : string | undefined;
    _eventLocation ?  : Location | undefined;
    _eventStartTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
    _eventSubject ?  : string | undefined;
    _eventWebLink ?  : string | undefined;
    _reminderFireTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
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
    changeKey();
    {
        return this._changeKey;
    }
    ;
    get;
    eventEndTime();
    {
        return this._eventEndTime;
    }
    ;
    get;
    eventId();
    {
        return this._eventId;
    }
    ;
    get;
    eventLocation();
    {
        return this._eventLocation;
    }
    ;
    get;
    eventStartTime();
    {
        return this._eventStartTime;
    }
    ;
    get;
    eventSubject();
    {
        return this._eventSubject;
    }
    ;
    get;
    eventWebLink();
    {
        return this._eventWebLink;
    }
    ;
    get;
    reminderFireTime();
    {
        return this._reminderFireTime;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["changeKey", function (o, n) { o.changeKey = n.getStringValue(); }],
            ["eventEndTime", function (o, n) { o.eventEndTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["eventId", function (o, n) { o.eventId = n.getStringValue(); }],
            ["eventLocation", function (o, n) { o.eventLocation = n.getObjectValue(Location); }],
            ["eventStartTime", function (o, n) { o.eventStartTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["eventSubject", function (o, n) { o.eventSubject = n.getStringValue(); }],
            ["eventWebLink", function (o, n) { o.eventWebLink = n.getStringValue(); }],
            ["reminderFireTime", function (o, n) { o.reminderFireTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("changeKey", this.changeKey),
        writer: writer,
        : .writeObjectValue("eventEndTime", this.eventEndTime),
        writer: writer,
        : .writeStringValue("eventId", this.eventId),
        writer: writer,
        : .writeObjectValue("eventLocation", this.eventLocation),
        writer: writer,
        : .writeObjectValue("eventStartTime", this.eventStartTime),
        writer: writer,
        : .writeStringValue("eventSubject", this.eventSubject),
        writer: writer,
        : .writeStringValue("eventWebLink", this.eventWebLink),
        writer: writer,
        : .writeObjectValue("reminderFireTime", this.reminderFireTime),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    changeKey(value, string | undefined);
    {
        this._changeKey = value;
    }
    ;
    set;
    eventEndTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._eventEndTime = value;
    }
    ;
    set;
    eventId(value, string | undefined);
    {
        this._eventId = value;
    }
    ;
    set;
    eventLocation(value, Location | undefined);
    {
        this._eventLocation = value;
    }
    ;
    set;
    eventStartTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._eventStartTime = value;
    }
    ;
    set;
    eventSubject(value, string | undefined);
    {
        this._eventSubject = value;
    }
    ;
    set;
    eventWebLink(value, string | undefined);
    {
        this._eventWebLink = value;
    }
    ;
    set;
    reminderFireTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._reminderFireTime = value;
    }
    ;
}
