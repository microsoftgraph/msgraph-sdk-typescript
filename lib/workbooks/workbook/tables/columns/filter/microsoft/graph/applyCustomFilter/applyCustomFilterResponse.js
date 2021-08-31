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
graph.applyCustomFilterResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _criteria1 ?  : string | undefined;
    _criteria2 ?  : string | undefined;
    _oper ?  : string | undefined;
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
    criteria1();
    {
        return this._criteria1;
    }
    ;
    get;
    criteria2();
    {
        return this._criteria2;
    }
    ;
    get;
    oper();
    {
        return this._oper;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["criteria1", function (o, n) { o.criteria1 = n.getStringValue(); }],
            ["criteria2", function (o, n) { o.criteria2 = n.getStringValue(); }],
            ["oper", function (o, n) { o.oper = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("criteria1", this.criteria1),
        writer: writer,
        : .writeStringValue("criteria2", this.criteria2),
        writer: writer,
        : .writeStringValue("oper", this.oper),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    criteria1(value, string | undefined);
    {
        this._criteria1 = value;
    }
    ;
    set;
    criteria2(value, string | undefined);
    {
        this._criteria2 = value;
    }
    ;
    set;
    oper(value, string | undefined);
    {
        this._oper = value;
    }
    ;
}
