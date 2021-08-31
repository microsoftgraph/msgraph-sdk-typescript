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
graph.norm_S_DistResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _cumulative ?  : Json | undefined;
    _z ?  : Json | undefined;
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
    z();
    {
        return this._z;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["cumulative", function (o, n) { o.cumulative = n.getObjectValue(Json); }],
            ["z", function (o, n) { o.z = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("cumulative", this.cumulative),
        writer: writer,
        : .writeObjectValue("z", this.z),
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
    z(value, Json | undefined);
    {
        this._z = value;
    }
    ;
}
