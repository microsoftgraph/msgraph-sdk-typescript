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
graph.besselYResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _n ?  : Json | undefined;
    _x ?  : Json | undefined;
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
    n();
    {
        return this._n;
    }
    ;
    get;
    x();
    {
        return this._x;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["n", function (o, n) { o.n = n.getObjectValue(Json); }],
            ["x", function (o, n) { o.x = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("n", this.n),
        writer: writer,
        : .writeObjectValue("x", this.x),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    n(value, Json | undefined);
    {
        this._n = value;
    }
    ;
    set;
    x(value, Json | undefined);
    {
        this._x = value;
    }
    ;
}
