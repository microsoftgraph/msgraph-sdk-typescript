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
graph.seriesSumResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _coefficients ?  : Json | undefined;
    _m ?  : Json | undefined;
    _n ?  : Json | undefined;
    _x ?  : Json | undefined;
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
    coefficients();
    {
        return this._coefficients;
    }
    ;
    get;
    m();
    {
        return this._m;
    }
    ;
    get;
    n();
    {
        return this._n;
    }
    ;
    get;
    x();
    {
        return this._x;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["coefficients", function (o, n) { o.coefficients = n.getObjectValue(Json); }],
            ["m", function (o, n) { o.m = n.getObjectValue(Json); }],
            ["n", function (o, n) { o.n = n.getObjectValue(Json); }],
            ["x", function (o, n) { o.x = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("coefficients", this.coefficients),
        writer: writer,
        : .writeObjectValue("m", this.m),
        writer: writer,
        : .writeObjectValue("n", this.n),
        writer: writer,
        : .writeObjectValue("x", this.x),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    coefficients(value, Json | undefined);
    {
        this._coefficients = value;
    }
    ;
    set;
    m(value, Json | undefined);
    {
        this._m = value;
    }
    ;
    set;
    n(value, Json | undefined);
    {
        this._n = value;
    }
    ;
    set;
    x(value, Json | undefined);
    {
        this._x = value;
    }
    ;
}
