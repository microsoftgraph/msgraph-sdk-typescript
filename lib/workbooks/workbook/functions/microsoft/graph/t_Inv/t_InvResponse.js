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
graph.t_InvResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _degFreedom ?  : Json | undefined;
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
    degFreedom();
    {
        return this._degFreedom;
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
            ["degFreedom", function (o, n) { o.degFreedom = n.getObjectValue(Json); }],
            ["probability", function (o, n) { o.probability = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("degFreedom", this.degFreedom),
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
    degFreedom(value, Json | undefined);
    {
        this._degFreedom = value;
    }
    ;
    set;
    probability(value, Json | undefined);
    {
        this._probability = value;
    }
    ;
}
