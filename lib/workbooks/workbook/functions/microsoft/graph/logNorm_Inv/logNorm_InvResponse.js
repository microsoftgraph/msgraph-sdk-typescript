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
graph.logNorm_InvResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _mean ?  : Json | undefined;
    _probability ?  : Json | undefined;
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
    mean();
    {
        return this._mean;
    }
    ;
    get;
    probability();
    {
        return this._probability;
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
            ["mean", function (o, n) { o.mean = n.getObjectValue(Json); }],
            ["probability", function (o, n) { o.probability = n.getObjectValue(Json); }],
            ["standardDev", function (o, n) { o.standardDev = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("mean", this.mean),
        writer: writer,
        : .writeObjectValue("probability", this.probability),
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
    mean(value, Json | undefined);
    {
        this._mean = value;
    }
    ;
    set;
    probability(value, Json | undefined);
    {
        this._probability = value;
    }
    ;
    set;
    standardDev(value, Json | undefined);
    {
        this._standardDev = value;
    }
    ;
}
