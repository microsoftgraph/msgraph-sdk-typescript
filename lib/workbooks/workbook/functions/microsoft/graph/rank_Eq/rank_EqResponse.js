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
graph.rank_EqResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _number ?  : Json | undefined;
    _order ?  : Json | undefined;
    _ref ?  : Json | undefined;
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
    number();
    {
        return this._number;
    }
    ;
    get;
    order();
    {
        return this._order;
    }
    ;
    get;
    ref();
    {
        return this._ref;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
            ["order", function (o, n) { o.order = n.getObjectValue(Json); }],
            ["ref", function (o, n) { o.ref = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeObjectValue("order", this.order),
        writer: writer,
        : .writeObjectValue("ref", this.ref),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
    set;
    order(value, Json | undefined);
    {
        this._order = value;
    }
    ;
    set;
    ref(value, Json | undefined);
    {
        this._ref = value;
    }
    ;
}
