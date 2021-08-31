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
graph.vdbResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cost ?  : Json | undefined;
    _endPeriod ?  : Json | undefined;
    _factor ?  : Json | undefined;
    _life ?  : Json | undefined;
    _noSwitch ?  : Json | undefined;
    _salvage ?  : Json | undefined;
    _startPeriod ?  : Json | undefined;
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
    cost();
    {
        return this._cost;
    }
    ;
    get;
    endPeriod();
    {
        return this._endPeriod;
    }
    ;
    get;
    factor();
    {
        return this._factor;
    }
    ;
    get;
    life();
    {
        return this._life;
    }
    ;
    get;
    noSwitch();
    {
        return this._noSwitch;
    }
    ;
    get;
    salvage();
    {
        return this._salvage;
    }
    ;
    get;
    startPeriod();
    {
        return this._startPeriod;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["cost", function (o, n) { o.cost = n.getObjectValue(Json); }],
            ["endPeriod", function (o, n) { o.endPeriod = n.getObjectValue(Json); }],
            ["factor", function (o, n) { o.factor = n.getObjectValue(Json); }],
            ["life", function (o, n) { o.life = n.getObjectValue(Json); }],
            ["noSwitch", function (o, n) { o.noSwitch = n.getObjectValue(Json); }],
            ["salvage", function (o, n) { o.salvage = n.getObjectValue(Json); }],
            ["startPeriod", function (o, n) { o.startPeriod = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cost", this.cost),
        writer: writer,
        : .writeObjectValue("endPeriod", this.endPeriod),
        writer: writer,
        : .writeObjectValue("factor", this.factor),
        writer: writer,
        : .writeObjectValue("life", this.life),
        writer: writer,
        : .writeObjectValue("noSwitch", this.noSwitch),
        writer: writer,
        : .writeObjectValue("salvage", this.salvage),
        writer: writer,
        : .writeObjectValue("startPeriod", this.startPeriod),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    cost(value, Json | undefined);
    {
        this._cost = value;
    }
    ;
    set;
    endPeriod(value, Json | undefined);
    {
        this._endPeriod = value;
    }
    ;
    set;
    factor(value, Json | undefined);
    {
        this._factor = value;
    }
    ;
    set;
    life(value, Json | undefined);
    {
        this._life = value;
    }
    ;
    set;
    noSwitch(value, Json | undefined);
    {
        this._noSwitch = value;
    }
    ;
    set;
    salvage(value, Json | undefined);
    {
        this._salvage = value;
    }
    ;
    set;
    startPeriod(value, Json | undefined);
    {
        this._startPeriod = value;
    }
    ;
}
