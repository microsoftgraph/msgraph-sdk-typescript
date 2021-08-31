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
graph.pvResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fv ?  : Json | undefined;
    _nper ?  : Json | undefined;
    _pmt ?  : Json | undefined;
    _rate ?  : Json | undefined;
    _type ?  : Json | undefined;
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
    fv();
    {
        return this._fv;
    }
    ;
    get;
    nper();
    {
        return this._nper;
    }
    ;
    get;
    pmt();
    {
        return this._pmt;
    }
    ;
    get;
    rate();
    {
        return this._rate;
    }
    ;
    get;
    type();
    {
        return this._type;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fv", function (o, n) { o.fv = n.getObjectValue(Json); }],
            ["nper", function (o, n) { o.nper = n.getObjectValue(Json); }],
            ["pmt", function (o, n) { o.pmt = n.getObjectValue(Json); }],
            ["rate", function (o, n) { o.rate = n.getObjectValue(Json); }],
            ["type", function (o, n) { o.type = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("fv", this.fv),
        writer: writer,
        : .writeObjectValue("nper", this.nper),
        writer: writer,
        : .writeObjectValue("pmt", this.pmt),
        writer: writer,
        : .writeObjectValue("rate", this.rate),
        writer: writer,
        : .writeObjectValue("type", this.type),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    fv(value, Json | undefined);
    {
        this._fv = value;
    }
    ;
    set;
    nper(value, Json | undefined);
    {
        this._nper = value;
    }
    ;
    set;
    pmt(value, Json | undefined);
    {
        this._pmt = value;
    }
    ;
    set;
    rate(value, Json | undefined);
    {
        this._rate = value;
    }
    ;
    set;
    type(value, Json | undefined);
    {
        this._type = value;
    }
    ;
}
