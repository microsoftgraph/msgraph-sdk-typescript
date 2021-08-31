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
graph.yieldResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _basis ?  : Json | undefined;
    _frequency ?  : Json | undefined;
    _maturity ?  : Json | undefined;
    _pr ?  : Json | undefined;
    _rate ?  : Json | undefined;
    _redemption ?  : Json | undefined;
    _settlement ?  : Json | undefined;
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
    frequency();
    {
        return this._frequency;
    }
    ;
    get;
    maturity();
    {
        return this._maturity;
    }
    ;
    get;
    pr();
    {
        return this._pr;
    }
    ;
    get;
    rate();
    {
        return this._rate;
    }
    ;
    get;
    redemption();
    {
        return this._redemption;
    }
    ;
    get;
    settlement();
    {
        return this._settlement;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["basis", function (o, n) { o.basis = n.getObjectValue(Json); }],
            ["frequency", function (o, n) { o.frequency = n.getObjectValue(Json); }],
            ["maturity", function (o, n) { o.maturity = n.getObjectValue(Json); }],
            ["pr", function (o, n) { o.pr = n.getObjectValue(Json); }],
            ["rate", function (o, n) { o.rate = n.getObjectValue(Json); }],
            ["redemption", function (o, n) { o.redemption = n.getObjectValue(Json); }],
            ["settlement", function (o, n) { o.settlement = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("basis", this.basis),
        writer: writer,
        : .writeObjectValue("frequency", this.frequency),
        writer: writer,
        : .writeObjectValue("maturity", this.maturity),
        writer: writer,
        : .writeObjectValue("pr", this.pr),
        writer: writer,
        : .writeObjectValue("rate", this.rate),
        writer: writer,
        : .writeObjectValue("redemption", this.redemption),
        writer: writer,
        : .writeObjectValue("settlement", this.settlement),
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
    frequency(value, Json | undefined);
    {
        this._frequency = value;
    }
    ;
    set;
    maturity(value, Json | undefined);
    {
        this._maturity = value;
    }
    ;
    set;
    pr(value, Json | undefined);
    {
        this._pr = value;
    }
    ;
    set;
    rate(value, Json | undefined);
    {
        this._rate = value;
    }
    ;
    set;
    redemption(value, Json | undefined);
    {
        this._redemption = value;
    }
    ;
    set;
    settlement(value, Json | undefined);
    {
        this._settlement = value;
    }
    ;
}
