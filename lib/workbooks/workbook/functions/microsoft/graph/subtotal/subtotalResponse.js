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
graph.subtotalResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _functionNum ?  : Json | undefined;
    _values ?  : Json | undefined;
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
    functionNum();
    {
        return this._functionNum;
    }
    ;
    get;
    values();
    {
        return this._values;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["functionNum", function (o, n) { o.functionNum = n.getObjectValue(Json); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("functionNum", this.functionNum),
        writer: writer,
        : .writeObjectValue("values", this.values),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    functionNum(value, Json | undefined);
    {
        this._functionNum = value;
    }
    ;
    set;
    values(value, Json | undefined);
    {
        this._values = value;
    }
    ;
}
