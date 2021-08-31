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
graph.removeKeyResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _keyId ?  : string | undefined;
    _proof ?  : string | undefined;
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
    keyId();
    {
        return this._keyId;
    }
    ;
    get;
    proof();
    {
        return this._proof;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["keyId", function (o, n) { o.keyId = n.getStringValue(); }],
            ["proof", function (o, n) { o.proof = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("keyId", this.keyId),
        writer: writer,
        : .writeStringValue("proof", this.proof),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    keyId(value, string | undefined);
    {
        this._keyId = value;
    }
    ;
    set;
    proof(value, string | undefined);
    {
        this._proof = value;
    }
    ;
}
