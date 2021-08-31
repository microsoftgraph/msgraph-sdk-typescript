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
graph.bitorResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _number1 ?  : Json | undefined;
    _number2 ?  : Json | undefined;
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
    number1();
    {
        return this._number1;
    }
    ;
    get;
    number2();
    {
        return this._number2;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["number1", function (o, n) { o.number1 = n.getObjectValue(Json); }],
            ["number2", function (o, n) { o.number2 = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("number1", this.number1),
        writer: writer,
        : .writeObjectValue("number2", this.number2),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    number1(value, Json | undefined);
    {
        this._number1 = value;
    }
    ;
    set;
    number2(value, Json | undefined);
    {
        this._number2 = value;
    }
    ;
}
