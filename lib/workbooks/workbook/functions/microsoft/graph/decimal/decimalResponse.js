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
graph.decimalResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _number ?  : Json | undefined;
    _radix ?  : Json | undefined;
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
    number();
    {
        return this._number;
    }
    ;
    get;
    radix();
    {
        return this._radix;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
            ["radix", function (o, n) { o.radix = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeObjectValue("radix", this.radix),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
    set;
    radix(value, Json | undefined);
    {
        this._radix = value;
    }
    ;
}
