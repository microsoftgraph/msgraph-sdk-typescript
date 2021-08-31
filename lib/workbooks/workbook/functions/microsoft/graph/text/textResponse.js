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
graph.textResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _formatText ?  : Json | undefined;
    _value ?  : Json | undefined;
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
    formatText();
    {
        return this._formatText;
    }
    ;
    get;
    value();
    {
        return this._value;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["formatText", function (o, n) { o.formatText = n.getObjectValue(Json); }],
            ["value", function (o, n) { o.value = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("formatText", this.formatText),
        writer: writer,
        : .writeObjectValue("value", this.value),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    formatText(value, Json | undefined);
    {
        this._formatText = value;
    }
    ;
    set;
    value(value, Json | undefined);
    {
        this._value = value;
    }
    ;
}
