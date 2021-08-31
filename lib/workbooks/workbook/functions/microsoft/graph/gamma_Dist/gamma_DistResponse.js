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
graph.gamma_DistResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _alpha ?  : Json | undefined;
    _beta ?  : Json | undefined;
    _cumulative ?  : Json | undefined;
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
    alpha();
    {
        return this._alpha;
    }
    ;
    get;
    beta();
    {
        return this._beta;
    }
    ;
    get;
    cumulative();
    {
        return this._cumulative;
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
            ["alpha", function (o, n) { o.alpha = n.getObjectValue(Json); }],
            ["beta", function (o, n) { o.beta = n.getObjectValue(Json); }],
            ["cumulative", function (o, n) { o.cumulative = n.getObjectValue(Json); }],
            ["x", function (o, n) { o.x = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("alpha", this.alpha),
        writer: writer,
        : .writeObjectValue("beta", this.beta),
        writer: writer,
        : .writeObjectValue("cumulative", this.cumulative),
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
    alpha(value, Json | undefined);
    {
        this._alpha = value;
    }
    ;
    set;
    beta(value, Json | undefined);
    {
        this._beta = value;
    }
    ;
    set;
    cumulative(value, Json | undefined);
    {
        this._cumulative = value;
    }
    ;
    set;
    x(value, Json | undefined);
    {
        this._x = value;
    }
    ;
}
