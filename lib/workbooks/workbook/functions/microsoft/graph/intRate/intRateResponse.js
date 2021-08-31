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
graph.intRateResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _basis ?  : Json | undefined;
    _investment ?  : Json | undefined;
    _maturity ?  : Json | undefined;
    _redemption ?  : Json | undefined;
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
    basis();
    {
        return this._basis;
    }
    ;
    get;
    investment();
    {
        return this._investment;
    }
    ;
    get;
    maturity();
    {
        return this._maturity;
    }
    ;
    get;
    redemption();
    {
        return this._redemption;
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
            ["basis", function (o, n) { o.basis = n.getObjectValue(Json); }],
            ["investment", function (o, n) { o.investment = n.getObjectValue(Json); }],
            ["maturity", function (o, n) { o.maturity = n.getObjectValue(Json); }],
            ["redemption", function (o, n) { o.redemption = n.getObjectValue(Json); }],
            ["settlement", function (o, n) { o.settlement = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("basis", this.basis),
        writer: writer,
        : .writeObjectValue("investment", this.investment),
        writer: writer,
        : .writeObjectValue("maturity", this.maturity),
        writer: writer,
        : .writeObjectValue("redemption", this.redemption),
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
    basis(value, Json | undefined);
    {
        this._basis = value;
    }
    ;
    set;
    investment(value, Json | undefined);
    {
        this._investment = value;
    }
    ;
    set;
    maturity(value, Json | undefined);
    {
        this._maturity = value;
    }
    ;
    set;
    redemption(value, Json | undefined);
    {
        this._redemption = value;
    }
    ;
    set;
    settlement(value, Json | undefined);
    {
        this._settlement = value;
    }
    ;
}
