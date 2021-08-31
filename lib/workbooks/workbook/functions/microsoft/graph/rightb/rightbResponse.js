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
graph.rightbResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _numBytes ?  : Json | undefined;
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
    numBytes();
    {
        return this._numBytes;
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
            ["numBytes", function (o, n) { o.numBytes = n.getObjectValue(Json); }],
            ["text", function (o, n) { o.text = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("numBytes", this.numBytes),
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
    numBytes(value, Json | undefined);
    {
        this._numBytes = value;
    }
    ;
    set;
    text(value, Json | undefined);
    {
        this._text = value;
    }
    ;
}
