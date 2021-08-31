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
graph.powerResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _number ?  : Json | undefined;
    _power ?  : Json | undefined;
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
    power();
    {
        return this._power;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
            ["power", function (o, n) { o.power = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeObjectValue("power", this.power),
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
    power(value, Json | undefined);
    {
        this._power = value;
    }
    ;
}
