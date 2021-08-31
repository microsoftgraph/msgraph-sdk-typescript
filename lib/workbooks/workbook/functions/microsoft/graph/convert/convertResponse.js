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
graph.convertResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fromUnit ?  : Json | undefined;
    _number ?  : Json | undefined;
    _toUnit ?  : Json | undefined;
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
    fromUnit();
    {
        return this._fromUnit;
    }
    ;
    get;
    number();
    {
        return this._number;
    }
    ;
    get;
    toUnit();
    {
        return this._toUnit;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fromUnit", function (o, n) { o.fromUnit = n.getObjectValue(Json); }],
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
            ["toUnit", function (o, n) { o.toUnit = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("fromUnit", this.fromUnit),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeObjectValue("toUnit", this.toUnit),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    fromUnit(value, Json | undefined);
    {
        this._fromUnit = value;
    }
    ;
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
    set;
    toUnit(value, Json | undefined);
    {
        this._toUnit = value;
    }
    ;
}
