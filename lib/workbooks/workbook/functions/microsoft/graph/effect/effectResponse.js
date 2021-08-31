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
graph.effectResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _nominalRate ?  : Json | undefined;
    _npery ?  : Json | undefined;
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
    nominalRate();
    {
        return this._nominalRate;
    }
    ;
    get;
    npery();
    {
        return this._npery;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["nominalRate", function (o, n) { o.nominalRate = n.getObjectValue(Json); }],
            ["npery", function (o, n) { o.npery = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("nominalRate", this.nominalRate),
        writer: writer,
        : .writeObjectValue("npery", this.npery),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    nominalRate(value, Json | undefined);
    {
        this._nominalRate = value;
    }
    ;
    set;
    npery(value, Json | undefined);
    {
        this._npery = value;
    }
    ;
}
