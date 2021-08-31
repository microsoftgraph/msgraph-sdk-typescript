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
graph.rateResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fv ?  : Json | undefined;
    _guess ?  : Json | undefined;
    _nper ?  : Json | undefined;
    _pmt ?  : Json | undefined;
    _pv ?  : Json | undefined;
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
    guess();
    {
        return this._guess;
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
    pv();
    {
        return this._pv;
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
            ["guess", function (o, n) { o.guess = n.getObjectValue(Json); }],
            ["nper", function (o, n) { o.nper = n.getObjectValue(Json); }],
            ["pmt", function (o, n) { o.pmt = n.getObjectValue(Json); }],
            ["pv", function (o, n) { o.pv = n.getObjectValue(Json); }],
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
        : .writeObjectValue("guess", this.guess),
        writer: writer,
        : .writeObjectValue("nper", this.nper),
        writer: writer,
        : .writeObjectValue("pmt", this.pmt),
        writer: writer,
        : .writeObjectValue("pv", this.pv),
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
    guess(value, Json | undefined);
    {
        this._guess = value;
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
    pv(value, Json | undefined);
    {
        this._pv = value;
    }
    ;
    set;
    type(value, Json | undefined);
    {
        this._type = value;
    }
    ;
}
