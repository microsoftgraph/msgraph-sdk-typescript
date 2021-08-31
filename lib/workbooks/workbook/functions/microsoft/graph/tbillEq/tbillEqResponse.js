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
graph.tbillEqResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _discount ?  : Json | undefined;
    _maturity ?  : Json | undefined;
    _settlement ?  : Json | undefined;
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
    discount();
    {
        return this._discount;
    }
    ;
    get;
    maturity();
    {
        return this._maturity;
    }
    ;
    get;
    settlement();
    {
        return this._settlement;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["discount", function (o, n) { o.discount = n.getObjectValue(Json); }],
            ["maturity", function (o, n) { o.maturity = n.getObjectValue(Json); }],
            ["settlement", function (o, n) { o.settlement = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("discount", this.discount),
        writer: writer,
        : .writeObjectValue("maturity", this.maturity),
        writer: writer,
        : .writeObjectValue("settlement", this.settlement),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    discount(value, Json | undefined);
    {
        this._discount = value;
    }
    ;
    set;
    maturity(value, Json | undefined);
    {
        this._maturity = value;
    }
    ;
    set;
    settlement(value, Json | undefined);
    {
        this._settlement = value;
    }
    ;
}
