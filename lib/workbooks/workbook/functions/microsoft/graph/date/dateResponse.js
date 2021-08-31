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
graph.dateResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _day ?  : Json | undefined;
    _month ?  : Json | undefined;
    _year ?  : Json | undefined;
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
    day();
    {
        return this._day;
    }
    ;
    get;
    month();
    {
        return this._month;
    }
    ;
    get;
    year();
    {
        return this._year;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["day", function (o, n) { o.day = n.getObjectValue(Json); }],
            ["month", function (o, n) { o.month = n.getObjectValue(Json); }],
            ["year", function (o, n) { o.year = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("day", this.day),
        writer: writer,
        : .writeObjectValue("month", this.month),
        writer: writer,
        : .writeObjectValue("year", this.year),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    day(value, Json | undefined);
    {
        this._day = value;
    }
    ;
    set;
    month(value, Json | undefined);
    {
        this._month = value;
    }
    ;
    set;
    year(value, Json | undefined);
    {
        this._year = value;
    }
    ;
}
