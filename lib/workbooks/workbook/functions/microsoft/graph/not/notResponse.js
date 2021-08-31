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
graph.notResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _logical ?  : Json | undefined;
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
    logical();
    {
        return this._logical;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["logical", function (o, n) { o.logical = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("logical", this.logical),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    logical(value, Json | undefined);
    {
        this._logical = value;
    }
    ;
}
