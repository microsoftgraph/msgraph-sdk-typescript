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
graph.amorDegrcResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _basis ?  : Json | undefined;
    _cost ?  : Json | undefined;
    _datePurchased ?  : Json | undefined;
    _firstPeriod ?  : Json | undefined;
    _period ?  : Json | undefined;
    _rate ?  : Json | undefined;
    _salvage ?  : Json | undefined;
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
    cost();
    {
        return this._cost;
    }
    ;
    get;
    datePurchased();
    {
        return this._datePurchased;
    }
    ;
    get;
    firstPeriod();
    {
        return this._firstPeriod;
    }
    ;
    get;
    period();
    {
        return this._period;
    }
    ;
    get;
    rate();
    {
        return this._rate;
    }
    ;
    get;
    salvage();
    {
        return this._salvage;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["basis", function (o, n) { o.basis = n.getObjectValue(Json); }],
            ["cost", function (o, n) { o.cost = n.getObjectValue(Json); }],
            ["datePurchased", function (o, n) { o.datePurchased = n.getObjectValue(Json); }],
            ["firstPeriod", function (o, n) { o.firstPeriod = n.getObjectValue(Json); }],
            ["period", function (o, n) { o.period = n.getObjectValue(Json); }],
            ["rate", function (o, n) { o.rate = n.getObjectValue(Json); }],
            ["salvage", function (o, n) { o.salvage = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("basis", this.basis),
        writer: writer,
        : .writeObjectValue("cost", this.cost),
        writer: writer,
        : .writeObjectValue("datePurchased", this.datePurchased),
        writer: writer,
        : .writeObjectValue("firstPeriod", this.firstPeriod),
        writer: writer,
        : .writeObjectValue("period", this.period),
        writer: writer,
        : .writeObjectValue("rate", this.rate),
        writer: writer,
        : .writeObjectValue("salvage", this.salvage),
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
    cost(value, Json | undefined);
    {
        this._cost = value;
    }
    ;
    set;
    datePurchased(value, Json | undefined);
    {
        this._datePurchased = value;
    }
    ;
    set;
    firstPeriod(value, Json | undefined);
    {
        this._firstPeriod = value;
    }
    ;
    set;
    period(value, Json | undefined);
    {
        this._period = value;
    }
    ;
    set;
    rate(value, Json | undefined);
    {
        this._rate = value;
    }
    ;
    set;
    salvage(value, Json | undefined);
    {
        this._salvage = value;
    }
    ;
}
