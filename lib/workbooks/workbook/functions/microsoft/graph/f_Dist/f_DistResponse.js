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
graph.f_DistResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cumulative ?  : Json | undefined;
    _degFreedom1 ?  : Json | undefined;
    _degFreedom2 ?  : Json | undefined;
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
    cumulative();
    {
        return this._cumulative;
    }
    ;
    get;
    degFreedom1();
    {
        return this._degFreedom1;
    }
    ;
    get;
    degFreedom2();
    {
        return this._degFreedom2;
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
            ["cumulative", function (o, n) { o.cumulative = n.getObjectValue(Json); }],
            ["degFreedom1", function (o, n) { o.degFreedom1 = n.getObjectValue(Json); }],
            ["degFreedom2", function (o, n) { o.degFreedom2 = n.getObjectValue(Json); }],
            ["x", function (o, n) { o.x = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cumulative", this.cumulative),
        writer: writer,
        : .writeObjectValue("degFreedom1", this.degFreedom1),
        writer: writer,
        : .writeObjectValue("degFreedom2", this.degFreedom2),
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
    cumulative(value, Json | undefined);
    {
        this._cumulative = value;
    }
    ;
    set;
    degFreedom1(value, Json | undefined);
    {
        this._degFreedom1 = value;
    }
    ;
    set;
    degFreedom2(value, Json | undefined);
    {
        this._degFreedom2 = value;
    }
    ;
    set;
    x(value, Json | undefined);
    {
        this._x = value;
    }
    ;
}
