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
graph.confidence_NormResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _alpha ?  : Json | undefined;
    _size ?  : Json | undefined;
    _standardDev ?  : Json | undefined;
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
    alpha();
    {
        return this._alpha;
    }
    ;
    get;
    size();
    {
        return this._size;
    }
    ;
    get;
    standardDev();
    {
        return this._standardDev;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["alpha", function (o, n) { o.alpha = n.getObjectValue(Json); }],
            ["size", function (o, n) { o.size = n.getObjectValue(Json); }],
            ["standardDev", function (o, n) { o.standardDev = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("alpha", this.alpha),
        writer: writer,
        : .writeObjectValue("size", this.size),
        writer: writer,
        : .writeObjectValue("standardDev", this.standardDev),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    alpha(value, Json | undefined);
    {
        this._alpha = value;
    }
    ;
    set;
    size(value, Json | undefined);
    {
        this._size = value;
    }
    ;
    set;
    standardDev(value, Json | undefined);
    {
        this._standardDev = value;
    }
    ;
}
