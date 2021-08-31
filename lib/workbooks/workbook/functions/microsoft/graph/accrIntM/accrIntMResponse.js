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
graph.accrIntMResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _basis ?  : Json | undefined;
    _issue ?  : Json | undefined;
    _par ?  : Json | undefined;
    _rate ?  : Json | undefined;
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
    issue();
    {
        return this._issue;
    }
    ;
    get;
    par();
    {
        return this._par;
    }
    ;
    get;
    rate();
    {
        return this._rate;
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
            ["issue", function (o, n) { o.issue = n.getObjectValue(Json); }],
            ["par", function (o, n) { o.par = n.getObjectValue(Json); }],
            ["rate", function (o, n) { o.rate = n.getObjectValue(Json); }],
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
        : .writeObjectValue("issue", this.issue),
        writer: writer,
        : .writeObjectValue("par", this.par),
        writer: writer,
        : .writeObjectValue("rate", this.rate),
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
    issue(value, Json | undefined);
    {
        this._issue = value;
    }
    ;
    set;
    par(value, Json | undefined);
    {
        this._par = value;
    }
    ;
    set;
    rate(value, Json | undefined);
    {
        this._rate = value;
    }
    ;
    set;
    settlement(value, Json | undefined);
    {
        this._settlement = value;
    }
    ;
}
