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
graph.floor_MathResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _mode ?  : Json | undefined;
    _number ?  : Json | undefined;
    _significance ?  : Json | undefined;
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
    mode();
    {
        return this._mode;
    }
    ;
    get;
    number();
    {
        return this._number;
    }
    ;
    get;
    significance();
    {
        return this._significance;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["mode", function (o, n) { o.mode = n.getObjectValue(Json); }],
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
            ["significance", function (o, n) { o.significance = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("mode", this.mode),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeObjectValue("significance", this.significance),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    mode(value, Json | undefined);
    {
        this._mode = value;
    }
    ;
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
    set;
    significance(value, Json | undefined);
    {
        this._significance = value;
    }
    ;
}
