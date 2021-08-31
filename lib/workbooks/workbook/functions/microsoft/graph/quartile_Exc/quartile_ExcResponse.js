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
graph.quartile_ExcResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _array ?  : Json | undefined;
    _quart ?  : Json | undefined;
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
    array();
    {
        return this._array;
    }
    ;
    get;
    quart();
    {
        return this._quart;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["array", function (o, n) { o.array = n.getObjectValue(Json); }],
            ["quart", function (o, n) { o.quart = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("array", this.array),
        writer: writer,
        : .writeObjectValue("quart", this.quart),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    array(value, Json | undefined);
    {
        this._array = value;
    }
    ;
    set;
    quart(value, Json | undefined);
    {
        this._quart = value;
    }
    ;
}
