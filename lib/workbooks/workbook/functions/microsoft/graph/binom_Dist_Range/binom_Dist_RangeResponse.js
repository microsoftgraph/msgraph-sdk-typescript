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
graph.binom_Dist_RangeResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _numberS ?  : Json | undefined;
    _numberS2 ?  : Json | undefined;
    _probabilityS ?  : Json | undefined;
    _trials ?  : Json | undefined;
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
    numberS();
    {
        return this._numberS;
    }
    ;
    get;
    numberS2();
    {
        return this._numberS2;
    }
    ;
    get;
    probabilityS();
    {
        return this._probabilityS;
    }
    ;
    get;
    trials();
    {
        return this._trials;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["numberS", function (o, n) { o.numberS = n.getObjectValue(Json); }],
            ["numberS2", function (o, n) { o.numberS2 = n.getObjectValue(Json); }],
            ["probabilityS", function (o, n) { o.probabilityS = n.getObjectValue(Json); }],
            ["trials", function (o, n) { o.trials = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("numberS", this.numberS),
        writer: writer,
        : .writeObjectValue("numberS2", this.numberS2),
        writer: writer,
        : .writeObjectValue("probabilityS", this.probabilityS),
        writer: writer,
        : .writeObjectValue("trials", this.trials),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    numberS(value, Json | undefined);
    {
        this._numberS = value;
    }
    ;
    set;
    numberS2(value, Json | undefined);
    {
        this._numberS2 = value;
    }
    ;
    set;
    probabilityS(value, Json | undefined);
    {
        this._probabilityS = value;
    }
    ;
    set;
    trials(value, Json | undefined);
    {
        this._trials = value;
    }
    ;
}
