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
graph.imDivResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _inumber1 ?  : Json | undefined;
    _inumber2 ?  : Json | undefined;
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
    inumber1();
    {
        return this._inumber1;
    }
    ;
    get;
    inumber2();
    {
        return this._inumber2;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["inumber1", function (o, n) { o.inumber1 = n.getObjectValue(Json); }],
            ["inumber2", function (o, n) { o.inumber2 = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("inumber1", this.inumber1),
        writer: writer,
        : .writeObjectValue("inumber2", this.inumber2),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    inumber1(value, Json | undefined);
    {
        this._inumber1 = value;
    }
    ;
    set;
    inumber2(value, Json | undefined);
    {
        this._inumber2 = value;
    }
    ;
}
