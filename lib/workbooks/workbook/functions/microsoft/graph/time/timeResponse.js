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
graph.timeResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _hour ?  : Json | undefined;
    _minute ?  : Json | undefined;
    _second ?  : Json | undefined;
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
    hour();
    {
        return this._hour;
    }
    ;
    get;
    minute();
    {
        return this._minute;
    }
    ;
    get;
    second();
    {
        return this._second;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["hour", function (o, n) { o.hour = n.getObjectValue(Json); }],
            ["minute", function (o, n) { o.minute = n.getObjectValue(Json); }],
            ["second", function (o, n) { o.second = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("hour", this.hour),
        writer: writer,
        : .writeObjectValue("minute", this.minute),
        writer: writer,
        : .writeObjectValue("second", this.second),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    hour(value, Json | undefined);
    {
        this._hour = value;
    }
    ;
    set;
    minute(value, Json | undefined);
    {
        this._minute = value;
    }
    ;
    set;
    second(value, Json | undefined);
    {
        this._second = value;
    }
    ;
}
