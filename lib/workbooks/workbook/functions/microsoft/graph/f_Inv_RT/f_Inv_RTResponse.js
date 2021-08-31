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
graph.f_Inv_RTResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _degFreedom1 ?  : Json | undefined;
    _degFreedom2 ?  : Json | undefined;
    _probability ?  : Json | undefined;
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
    degFreedom1();
    {
        return this._degFreedom1;
    }
    ;
    get;
    degFreedom2();
    {
        return this._degFreedom2;
    }
    ;
    get;
    probability();
    {
        return this._probability;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["degFreedom1", function (o, n) { o.degFreedom1 = n.getObjectValue(Json); }],
            ["degFreedom2", function (o, n) { o.degFreedom2 = n.getObjectValue(Json); }],
            ["probability", function (o, n) { o.probability = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("degFreedom1", this.degFreedom1),
        writer: writer,
        : .writeObjectValue("degFreedom2", this.degFreedom2),
        writer: writer,
        : .writeObjectValue("probability", this.probability),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    degFreedom1(value, Json | undefined);
    {
        this._degFreedom1 = value;
    }
    ;
    set;
    degFreedom2(value, Json | undefined);
    {
        this._degFreedom2 = value;
    }
    ;
    set;
    probability(value, Json | undefined);
    {
        this._probability = value;
    }
    ;
}
