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
graph.hypGeom_DistResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cumulative ?  : Json | undefined;
    _numberPop ?  : Json | undefined;
    _numberSample ?  : Json | undefined;
    _populationS ?  : Json | undefined;
    _sampleS ?  : Json | undefined;
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
    cumulative();
    {
        return this._cumulative;
    }
    ;
    get;
    numberPop();
    {
        return this._numberPop;
    }
    ;
    get;
    numberSample();
    {
        return this._numberSample;
    }
    ;
    get;
    populationS();
    {
        return this._populationS;
    }
    ;
    get;
    sampleS();
    {
        return this._sampleS;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["cumulative", function (o, n) { o.cumulative = n.getObjectValue(Json); }],
            ["numberPop", function (o, n) { o.numberPop = n.getObjectValue(Json); }],
            ["numberSample", function (o, n) { o.numberSample = n.getObjectValue(Json); }],
            ["populationS", function (o, n) { o.populationS = n.getObjectValue(Json); }],
            ["sampleS", function (o, n) { o.sampleS = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cumulative", this.cumulative),
        writer: writer,
        : .writeObjectValue("numberPop", this.numberPop),
        writer: writer,
        : .writeObjectValue("numberSample", this.numberSample),
        writer: writer,
        : .writeObjectValue("populationS", this.populationS),
        writer: writer,
        : .writeObjectValue("sampleS", this.sampleS),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    cumulative(value, Json | undefined);
    {
        this._cumulative = value;
    }
    ;
    set;
    numberPop(value, Json | undefined);
    {
        this._numberPop = value;
    }
    ;
    set;
    numberSample(value, Json | undefined);
    {
        this._numberSample = value;
    }
    ;
    set;
    populationS(value, Json | undefined);
    {
        this._populationS = value;
    }
    ;
    set;
    sampleS(value, Json | undefined);
    {
        this._sampleS = value;
    }
    ;
}
