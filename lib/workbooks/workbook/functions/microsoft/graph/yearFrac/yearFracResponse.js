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
graph.yearFracResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _basis ?  : Json | undefined;
    _endDate ?  : Json | undefined;
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
    basis();
    {
        return this._basis;
    }
    ;
    get;
    endDate();
    {
        return this._endDate;
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
            ["basis", function (o, n) { o.basis = n.getObjectValue(Json); }],
            ["endDate", function (o, n) { o.endDate = n.getObjectValue(Json); }],
            ["startDate", function (o, n) { o.startDate = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("basis", this.basis),
        writer: writer,
        : .writeObjectValue("endDate", this.endDate),
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
    basis(value, Json | undefined);
    {
        this._basis = value;
    }
    ;
    set;
    endDate(value, Json | undefined);
    {
        this._endDate = value;
    }
    ;
    set;
    startDate(value, Json | undefined);
    {
        this._startDate = value;
    }
    ;
}
