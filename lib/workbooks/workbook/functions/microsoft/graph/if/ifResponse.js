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
graph.ifResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _logicalTest ?  : Json | undefined;
    _valueIfFalse ?  : Json | undefined;
    _valueIfTrue ?  : Json | undefined;
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
    logicalTest();
    {
        return this._logicalTest;
    }
    ;
    get;
    valueIfFalse();
    {
        return this._valueIfFalse;
    }
    ;
    get;
    valueIfTrue();
    {
        return this._valueIfTrue;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["logicalTest", function (o, n) { o.logicalTest = n.getObjectValue(Json); }],
            ["valueIfFalse", function (o, n) { o.valueIfFalse = n.getObjectValue(Json); }],
            ["valueIfTrue", function (o, n) { o.valueIfTrue = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("logicalTest", this.logicalTest),
        writer: writer,
        : .writeObjectValue("valueIfFalse", this.valueIfFalse),
        writer: writer,
        : .writeObjectValue("valueIfTrue", this.valueIfTrue),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    logicalTest(value, Json | undefined);
    {
        this._logicalTest = value;
    }
    ;
    set;
    valueIfFalse(value, Json | undefined);
    {
        this._valueIfFalse = value;
    }
    ;
    set;
    valueIfTrue(value, Json | undefined);
    {
        this._valueIfTrue = value;
    }
    ;
}
