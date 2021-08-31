"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var dateTimeTimeZone_1 = require("../../../../../../dateTimeTimeZone");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.getScheduleResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _availabilityViewInterval ?  : number | undefined;
    _endTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
    _schedules ?  : string[] | undefined;
    _startTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
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
    availabilityViewInterval();
    {
        return this._availabilityViewInterval;
    }
    ;
    get;
    endTime();
    {
        return this._endTime;
    }
    ;
    get;
    schedules();
    {
        return this._schedules;
    }
    ;
    get;
    startTime();
    {
        return this._startTime;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["availabilityViewInterval", function (o, n) { o.availabilityViewInterval = n.getNumberValue(); }],
            ["endTime", function (o, n) { o.endTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["schedules", function (o, n) { o.schedules = n.getCollectionOfPrimitiveValues(); }],
            ["startTime", function (o, n) { o.startTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeNumberValue("availabilityViewInterval", this.availabilityViewInterval),
        writer: writer,
        : .writeObjectValue("endTime", this.endTime),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("schedules", this.schedules),
        writer: writer,
        : .writeObjectValue("startTime", this.startTime),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    availabilityViewInterval(value, number | undefined);
    {
        this._availabilityViewInterval = value;
    }
    ;
    set;
    endTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._endTime = value;
    }
    ;
    set;
    schedules(value, string[] | undefined);
    {
        this._schedules = value;
    }
    ;
    set;
    startTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._startTime = value;
    }
    ;
}
