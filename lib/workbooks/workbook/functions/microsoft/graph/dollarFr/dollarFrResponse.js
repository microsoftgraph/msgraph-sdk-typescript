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
graph.dollarFrResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _decimalDollar ?  : Json | undefined;
    _fraction ?  : Json | undefined;
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
    decimalDollar();
    {
        return this._decimalDollar;
    }
    ;
    get;
    fraction();
    {
        return this._fraction;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["decimalDollar", function (o, n) { o.decimalDollar = n.getObjectValue(Json); }],
            ["fraction", function (o, n) { o.fraction = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("decimalDollar", this.decimalDollar),
        writer: writer,
        : .writeObjectValue("fraction", this.fraction),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    decimalDollar(value, Json | undefined);
    {
        this._decimalDollar = value;
    }
    ;
    set;
    fraction(value, Json | undefined);
    {
        this._fraction = value;
    }
    ;
}
