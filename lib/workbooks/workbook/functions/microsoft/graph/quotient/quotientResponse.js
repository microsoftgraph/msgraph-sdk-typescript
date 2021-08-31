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
graph.quotientResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _denominator ?  : Json | undefined;
    _numerator ?  : Json | undefined;
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
    denominator();
    {
        return this._denominator;
    }
    ;
    get;
    numerator();
    {
        return this._numerator;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["denominator", function (o, n) { o.denominator = n.getObjectValue(Json); }],
            ["numerator", function (o, n) { o.numerator = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("denominator", this.denominator),
        writer: writer,
        : .writeObjectValue("numerator", this.numerator),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    denominator(value, Json | undefined);
    {
        this._denominator = value;
    }
    ;
    set;
    numerator(value, Json | undefined);
    {
        this._numerator = value;
    }
    ;
}
