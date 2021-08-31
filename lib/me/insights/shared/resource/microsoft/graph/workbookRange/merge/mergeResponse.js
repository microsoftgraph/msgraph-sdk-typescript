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
graph.mergeResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _across ?  : boolean | undefined;
    _additionalData: Map();
    constructor();
    {
        this._additionalData = new Map();
    }
    ;
    get;
    across();
    {
        return this._across;
    }
    ;
    get;
    additionalData();
    {
        return this._additionalData;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["across", function (o, n) { o.across = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("across", this.across),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    across(value, boolean | undefined);
    {
        this._across = value;
    }
    ;
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
}
