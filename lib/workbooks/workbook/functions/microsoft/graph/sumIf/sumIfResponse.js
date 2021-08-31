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
graph.sumIfResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _criteria ?  : Json | undefined;
    _range ?  : Json | undefined;
    _sumRange ?  : Json | undefined;
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
    criteria();
    {
        return this._criteria;
    }
    ;
    get;
    range();
    {
        return this._range;
    }
    ;
    get;
    sumRange();
    {
        return this._sumRange;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["criteria", function (o, n) { o.criteria = n.getObjectValue(Json); }],
            ["range", function (o, n) { o.range = n.getObjectValue(Json); }],
            ["sumRange", function (o, n) { o.sumRange = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("criteria", this.criteria),
        writer: writer,
        : .writeObjectValue("range", this.range),
        writer: writer,
        : .writeObjectValue("sumRange", this.sumRange),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    criteria(value, Json | undefined);
    {
        this._criteria = value;
    }
    ;
    set;
    range(value, Json | undefined);
    {
        this._range = value;
    }
    ;
    set;
    sumRange(value, Json | undefined);
    {
        this._sumRange = value;
    }
    ;
}
