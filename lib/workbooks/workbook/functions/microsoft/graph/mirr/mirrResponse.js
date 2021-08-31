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
graph.mirrResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _financeRate ?  : Json | undefined;
    _reinvestRate ?  : Json | undefined;
    _values ?  : Json | undefined;
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
    financeRate();
    {
        return this._financeRate;
    }
    ;
    get;
    reinvestRate();
    {
        return this._reinvestRate;
    }
    ;
    get;
    values();
    {
        return this._values;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["financeRate", function (o, n) { o.financeRate = n.getObjectValue(Json); }],
            ["reinvestRate", function (o, n) { o.reinvestRate = n.getObjectValue(Json); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("financeRate", this.financeRate),
        writer: writer,
        : .writeObjectValue("reinvestRate", this.reinvestRate),
        writer: writer,
        : .writeObjectValue("values", this.values),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    financeRate(value, Json | undefined);
    {
        this._financeRate = value;
    }
    ;
    set;
    reinvestRate(value, Json | undefined);
    {
        this._reinvestRate = value;
    }
    ;
    set;
    values(value, Json | undefined);
    {
        this._values = value;
    }
    ;
}
