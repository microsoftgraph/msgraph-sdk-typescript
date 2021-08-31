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
graph.findResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _findText ?  : Json | undefined;
    _startNum ?  : Json | undefined;
    _withinText ?  : Json | undefined;
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
    findText();
    {
        return this._findText;
    }
    ;
    get;
    startNum();
    {
        return this._startNum;
    }
    ;
    get;
    withinText();
    {
        return this._withinText;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["findText", function (o, n) { o.findText = n.getObjectValue(Json); }],
            ["startNum", function (o, n) { o.startNum = n.getObjectValue(Json); }],
            ["withinText", function (o, n) { o.withinText = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("findText", this.findText),
        writer: writer,
        : .writeObjectValue("startNum", this.startNum),
        writer: writer,
        : .writeObjectValue("withinText", this.withinText),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    findText(value, Json | undefined);
    {
        this._findText = value;
    }
    ;
    set;
    startNum(value, Json | undefined);
    {
        this._startNum = value;
    }
    ;
    set;
    withinText(value, Json | undefined);
    {
        this._withinText = value;
    }
    ;
}
