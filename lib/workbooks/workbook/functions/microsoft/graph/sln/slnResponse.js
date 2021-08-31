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
graph.slnResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cost ?  : Json | undefined;
    _life ?  : Json | undefined;
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
    cost();
    {
        return this._cost;
    }
    ;
    get;
    life();
    {
        return this._life;
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
            ["cost", function (o, n) { o.cost = n.getObjectValue(Json); }],
            ["life", function (o, n) { o.life = n.getObjectValue(Json); }],
            ["salvage", function (o, n) { o.salvage = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cost", this.cost),
        writer: writer,
        : .writeObjectValue("life", this.life),
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
    cost(value, Json | undefined);
    {
        this._cost = value;
    }
    ;
    set;
    life(value, Json | undefined);
    {
        this._life = value;
    }
    ;
    set;
    salvage(value, Json | undefined);
    {
        this._salvage = value;
    }
    ;
}
