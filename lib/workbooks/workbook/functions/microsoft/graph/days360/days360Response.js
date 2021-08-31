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
graph.days360Response;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _endDate ?  : Json | undefined;
    _method ?  : Json | undefined;
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
    endDate();
    {
        return this._endDate;
    }
    ;
    get;
    method();
    {
        return this._method;
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
            ["endDate", function (o, n) { o.endDate = n.getObjectValue(Json); }],
            ["method", function (o, n) { o.method = n.getObjectValue(Json); }],
            ["startDate", function (o, n) { o.startDate = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("endDate", this.endDate),
        writer: writer,
        : .writeObjectValue("method", this.method),
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
    endDate(value, Json | undefined);
    {
        this._endDate = value;
    }
    ;
    set;
    method(value, Json | undefined);
    {
        this._method = value;
    }
    ;
    set;
    startDate(value, Json | undefined);
    {
        this._startDate = value;
    }
    ;
}
