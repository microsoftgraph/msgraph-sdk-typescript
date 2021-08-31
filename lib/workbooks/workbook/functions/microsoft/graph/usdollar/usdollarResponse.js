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
graph.usdollarResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _decimals ?  : Json | undefined;
    _number ?  : Json | undefined;
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
    decimals();
    {
        return this._decimals;
    }
    ;
    get;
    number();
    {
        return this._number;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["decimals", function (o, n) { o.decimals = n.getObjectValue(Json); }],
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("decimals", this.decimals),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    decimals(value, Json | undefined);
    {
        this._decimals = value;
    }
    ;
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
}
