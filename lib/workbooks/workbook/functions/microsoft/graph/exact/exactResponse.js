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
graph.exactResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _text1 ?  : Json | undefined;
    _text2 ?  : Json | undefined;
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
    text1();
    {
        return this._text1;
    }
    ;
    get;
    text2();
    {
        return this._text2;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["text1", function (o, n) { o.text1 = n.getObjectValue(Json); }],
            ["text2", function (o, n) { o.text2 = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("text1", this.text1),
        writer: writer,
        : .writeObjectValue("text2", this.text2),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    text1(value, Json | undefined);
    {
        this._text1 = value;
    }
    ;
    set;
    text2(value, Json | undefined);
    {
        this._text2 = value;
    }
    ;
}
