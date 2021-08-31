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
graph.negBinom_DistResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cumulative ?  : Json | undefined;
    _numberF ?  : Json | undefined;
    _numberS ?  : Json | undefined;
    _probabilityS ?  : Json | undefined;
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
    numberF();
    {
        return this._numberF;
    }
    ;
    get;
    numberS();
    {
        return this._numberS;
    }
    ;
    get;
    probabilityS();
    {
        return this._probabilityS;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["cumulative", function (o, n) { o.cumulative = n.getObjectValue(Json); }],
            ["numberF", function (o, n) { o.numberF = n.getObjectValue(Json); }],
            ["numberS", function (o, n) { o.numberS = n.getObjectValue(Json); }],
            ["probabilityS", function (o, n) { o.probabilityS = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cumulative", this.cumulative),
        writer: writer,
        : .writeObjectValue("numberF", this.numberF),
        writer: writer,
        : .writeObjectValue("numberS", this.numberS),
        writer: writer,
        : .writeObjectValue("probabilityS", this.probabilityS),
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
    numberF(value, Json | undefined);
    {
        this._numberF = value;
    }
    ;
    set;
    numberS(value, Json | undefined);
    {
        this._numberS = value;
    }
    ;
    set;
    probabilityS(value, Json | undefined);
    {
        this._probabilityS = value;
    }
    ;
}
