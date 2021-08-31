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
graph.replaceBResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _newText ?  : Json | undefined;
    _numBytes ?  : Json | undefined;
    _oldText ?  : Json | undefined;
    _startNum ?  : Json | undefined;
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
    newText();
    {
        return this._newText;
    }
    ;
    get;
    numBytes();
    {
        return this._numBytes;
    }
    ;
    get;
    oldText();
    {
        return this._oldText;
    }
    ;
    get;
    startNum();
    {
        return this._startNum;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["newText", function (o, n) { o.newText = n.getObjectValue(Json); }],
            ["numBytes", function (o, n) { o.numBytes = n.getObjectValue(Json); }],
            ["oldText", function (o, n) { o.oldText = n.getObjectValue(Json); }],
            ["startNum", function (o, n) { o.startNum = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("newText", this.newText),
        writer: writer,
        : .writeObjectValue("numBytes", this.numBytes),
        writer: writer,
        : .writeObjectValue("oldText", this.oldText),
        writer: writer,
        : .writeObjectValue("startNum", this.startNum),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    newText(value, Json | undefined);
    {
        this._newText = value;
    }
    ;
    set;
    numBytes(value, Json | undefined);
    {
        this._numBytes = value;
    }
    ;
    set;
    oldText(value, Json | undefined);
    {
        this._oldText = value;
    }
    ;
    set;
    startNum(value, Json | undefined);
    {
        this._startNum = value;
    }
    ;
}
