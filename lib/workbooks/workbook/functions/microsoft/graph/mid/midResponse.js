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
graph.midResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _numChars ?  : Json | undefined;
    _startNum ?  : Json | undefined;
    _text ?  : Json | undefined;
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
    numChars();
    {
        return this._numChars;
    }
    ;
    get;
    startNum();
    {
        return this._startNum;
    }
    ;
    get;
    text();
    {
        return this._text;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["numChars", function (o, n) { o.numChars = n.getObjectValue(Json); }],
            ["startNum", function (o, n) { o.startNum = n.getObjectValue(Json); }],
            ["text", function (o, n) { o.text = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("numChars", this.numChars),
        writer: writer,
        : .writeObjectValue("startNum", this.startNum),
        writer: writer,
        : .writeObjectValue("text", this.text),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    numChars(value, Json | undefined);
    {
        this._numChars = value;
    }
    ;
    set;
    startNum(value, Json | undefined);
    {
        this._startNum = value;
    }
    ;
    set;
    text(value, Json | undefined);
    {
        this._text = value;
    }
    ;
}
