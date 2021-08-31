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
graph.dollarDeResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fraction ?  : Json | undefined;
    _fractionalDollar ?  : Json | undefined;
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
    fraction();
    {
        return this._fraction;
    }
    ;
    get;
    fractionalDollar();
    {
        return this._fractionalDollar;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fraction", function (o, n) { o.fraction = n.getObjectValue(Json); }],
            ["fractionalDollar", function (o, n) { o.fractionalDollar = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("fraction", this.fraction),
        writer: writer,
        : .writeObjectValue("fractionalDollar", this.fractionalDollar),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    fraction(value, Json | undefined);
    {
        this._fraction = value;
    }
    ;
    set;
    fractionalDollar(value, Json | undefined);
    {
        this._fractionalDollar = value;
    }
    ;
}
