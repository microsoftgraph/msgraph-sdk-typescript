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
graph.modResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _divisor ?  : Json | undefined;
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
    divisor();
    {
        return this._divisor;
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
            ["divisor", function (o, n) { o.divisor = n.getObjectValue(Json); }],
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("divisor", this.divisor),
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
    divisor(value, Json | undefined);
    {
        this._divisor = value;
    }
    ;
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
}
