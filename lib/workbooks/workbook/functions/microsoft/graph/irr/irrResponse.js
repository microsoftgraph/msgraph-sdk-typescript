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
graph.irrResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _guess ?  : Json | undefined;
    _values ?  : Json | undefined;
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
    guess();
    {
        return this._guess;
    }
    ;
    get;
    values();
    {
        return this._values;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["guess", function (o, n) { o.guess = n.getObjectValue(Json); }],
            ["values", function (o, n) { o.values = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("guess", this.guess),
        writer: writer,
        : .writeObjectValue("values", this.values),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    guess(value, Json | undefined);
    {
        this._guess = value;
    }
    ;
    set;
    values(value, Json | undefined);
    {
        this._values = value;
    }
    ;
}
