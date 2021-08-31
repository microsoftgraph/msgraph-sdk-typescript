"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var dateTimeTimeZone_1 = require("../../../../../dateTimeTimeZone");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.snoozeReminderResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _newReminderTime ?  : dateTimeTimeZone_1.DateTimeTimeZone | undefined;
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
    newReminderTime();
    {
        return this._newReminderTime;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["newReminderTime", function (o, n) { o.newReminderTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("newReminderTime", this.newReminderTime),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    newReminderTime(value, dateTimeTimeZone_1.DateTimeTimeZone | undefined);
    {
        this._newReminderTime = value;
    }
    ;
}
