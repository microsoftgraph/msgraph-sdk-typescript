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
graph.beta_InvResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _a ?  : Json | undefined;
    _additionalData: Map();
    _alpha ?  : Json | undefined;
    _b ?  : Json | undefined;
    _beta ?  : Json | undefined;
    _probability ?  : Json | undefined;
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    a();
    {
        return this._a;
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
    b();
    {
        return this._b;
    }
    ;
    get;
    beta();
    {
        return this._beta;
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
            ["a", function (o, n) { o.a = n.getObjectValue(Json); }],
            ["alpha", function (o, n) { o.alpha = n.getObjectValue(Json); }],
            ["b", function (o, n) { o.b = n.getObjectValue(Json); }],
            ["beta", function (o, n) { o.beta = n.getObjectValue(Json); }],
            ["probability", function (o, n) { o.probability = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("a", this.a),
        writer: writer,
        : .writeObjectValue("alpha", this.alpha),
        writer: writer,
        : .writeObjectValue("b", this.b),
        writer: writer,
        : .writeObjectValue("beta", this.beta),
        writer: writer,
        : .writeObjectValue("probability", this.probability),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    a(value, Json | undefined);
    {
        this._a = value;
    }
    ;
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
    b(value, Json | undefined);
    {
        this._b = value;
    }
    ;
    set;
    beta(value, Json | undefined);
    {
        this._beta = value;
    }
    ;
    set;
    probability(value, Json | undefined);
    {
        this._probability = value;
    }
    ;
}
