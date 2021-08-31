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
graph.romanResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _form ?  : Json | undefined;
    _number ?  : Json | undefined;
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
    form();
    {
        return this._form;
    }
    ;
    get;
    number();
    {
        return this._number;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["form", function (o, n) { o.form = n.getObjectValue(Json); }],
            ["number", function (o, n) { o.number = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("form", this.form),
        writer: writer,
        : .writeObjectValue("number", this.number),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    form(value, Json | undefined);
    {
        this._form = value;
    }
    ;
    set;
    number(value, Json | undefined);
    {
        this._number = value;
    }
    ;
}
