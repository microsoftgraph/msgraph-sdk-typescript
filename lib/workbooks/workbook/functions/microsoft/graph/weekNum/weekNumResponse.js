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
graph.weekNumResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _returnType ?  : Json | undefined;
    _serialNumber ?  : Json | undefined;
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
    returnType();
    {
        return this._returnType;
    }
    ;
    get;
    serialNumber();
    {
        return this._serialNumber;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["returnType", function (o, n) { o.returnType = n.getObjectValue(Json); }],
            ["serialNumber", function (o, n) { o.serialNumber = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("returnType", this.returnType),
        writer: writer,
        : .writeObjectValue("serialNumber", this.serialNumber),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    returnType(value, Json | undefined);
    {
        this._returnType = value;
    }
    ;
    set;
    serialNumber(value, Json | undefined);
    {
        this._serialNumber = value;
    }
    ;
}
