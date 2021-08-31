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
graph.atan2Response;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _xNum ?  : Json | undefined;
    _yNum ?  : Json | undefined;
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
    xNum();
    {
        return this._xNum;
    }
    ;
    get;
    yNum();
    {
        return this._yNum;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["xNum", function (o, n) { o.xNum = n.getObjectValue(Json); }],
            ["yNum", function (o, n) { o.yNum = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("xNum", this.xNum),
        writer: writer,
        : .writeObjectValue("yNum", this.yNum),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    xNum(value, Json | undefined);
    {
        this._xNum = value;
    }
    ;
    set;
    yNum(value, Json | undefined);
    {
        this._yNum = value;
    }
    ;
}
