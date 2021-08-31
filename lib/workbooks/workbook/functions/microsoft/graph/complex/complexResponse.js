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
graph.complexResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _iNum ?  : Json | undefined;
    _realNum ?  : Json | undefined;
    _suffix ?  : Json | undefined;
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
    iNum();
    {
        return this._iNum;
    }
    ;
    get;
    realNum();
    {
        return this._realNum;
    }
    ;
    get;
    suffix();
    {
        return this._suffix;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["iNum", function (o, n) { o.iNum = n.getObjectValue(Json); }],
            ["realNum", function (o, n) { o.realNum = n.getObjectValue(Json); }],
            ["suffix", function (o, n) { o.suffix = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("iNum", this.iNum),
        writer: writer,
        : .writeObjectValue("realNum", this.realNum),
        writer: writer,
        : .writeObjectValue("suffix", this.suffix),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    iNum(value, Json | undefined);
    {
        this._iNum = value;
    }
    ;
    set;
    realNum(value, Json | undefined);
    {
        this._realNum = value;
    }
    ;
    set;
    suffix(value, Json | undefined);
    {
        this._suffix = value;
    }
    ;
}
