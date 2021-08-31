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
graph.translateExchangeIdsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _inputIds ?  : string[] | undefined;
    _sourceIdType ?  : ExchangeIdFormat | undefined;
    _targetIdType ?  : ExchangeIdFormat | undefined;
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
    inputIds();
    {
        return this._inputIds;
    }
    ;
    get;
    sourceIdType();
    {
        return this._sourceIdType;
    }
    ;
    get;
    targetIdType();
    {
        return this._targetIdType;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["inputIds", function (o, n) { o.inputIds = n.getCollectionOfPrimitiveValues(); }],
            ["sourceIdType", function (o, n) { o.sourceIdType = n.getObjectValue(ExchangeIdFormat); }],
            ["targetIdType", function (o, n) { o.targetIdType = n.getObjectValue(ExchangeIdFormat); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("inputIds", this.inputIds),
        writer: writer,
        : .writeObjectValue("sourceIdType", this.sourceIdType),
        writer: writer,
        : .writeObjectValue("targetIdType", this.targetIdType),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    inputIds(value, string[] | undefined);
    {
        this._inputIds = value;
    }
    ;
    set;
    sourceIdType(value, ExchangeIdFormat | undefined);
    {
        this._sourceIdType = value;
    }
    ;
    set;
    targetIdType(value, ExchangeIdFormat | undefined);
    {
        this._targetIdType = value;
    }
    ;
}
