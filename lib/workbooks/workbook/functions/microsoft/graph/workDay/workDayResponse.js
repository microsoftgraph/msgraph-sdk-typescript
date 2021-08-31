"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.workDayResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _days ?  : Json | undefined;
    _holidays ?  : Json | undefined;
    _startDate ?  : Json | undefined;
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
    days();
    {
        return this._days;
    }
    ;
    get;
    holidays();
    {
        return this._holidays;
    }
    ;
    get;
    startDate();
    {
        return this._startDate;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["days", function (o, n) { o.days = n.getObjectValue(Json); }],
            ["holidays", function (o, n) { o.holidays = n.getObjectValue(Json); }],
            ["startDate", function (o, n) { o.startDate = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("days", this.days),
        writer: writer,
        : .writeObjectValue("holidays", this.holidays),
        writer: writer,
        : .writeObjectValue("startDate", this.startDate),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    days(value, Json | undefined);
    {
        this._days = value;
    }
    ;
    set;
    holidays(value, Json | undefined);
    {
        this._holidays = value;
    }
    ;
    set;
    startDate(value, Json | undefined);
    {
        this._startDate = value;
    }
    ;
}
