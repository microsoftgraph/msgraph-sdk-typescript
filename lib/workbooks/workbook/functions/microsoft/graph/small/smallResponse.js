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
graph.smallResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _array ?  : Json | undefined;
    _k ?  : Json | undefined;
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
    k();
    {
        return this._k;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["array", function (o, n) { o.array = n.getObjectValue(Json); }],
            ["k", function (o, n) { o.k = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("array", this.array),
        writer: writer,
        : .writeObjectValue("k", this.k),
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
    k(value, Json | undefined);
    {
        this._k = value;
    }
    ;
}
