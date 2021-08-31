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
graph.translateExchangeIds;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _errorDetails ?  : GenericError | undefined;
    _sourceId ?  : string | undefined;
    _targetId ?  : string | undefined;
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
    errorDetails();
    {
        return this._errorDetails;
    }
    ;
    get;
    sourceId();
    {
        return this._sourceId;
    }
    ;
    get;
    targetId();
    {
        return this._targetId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["errorDetails", function (o, n) { o.errorDetails = n.getObjectValue(GenericError); }],
            ["sourceId", function (o, n) { o.sourceId = n.getStringValue(); }],
            ["targetId", function (o, n) { o.targetId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("errorDetails", this.errorDetails),
        writer: writer,
        : .writeStringValue("sourceId", this.sourceId),
        writer: writer,
        : .writeStringValue("targetId", this.targetId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    errorDetails(value, GenericError | undefined);
    {
        this._errorDetails = value;
    }
    ;
    set;
    sourceId(value, string | undefined);
    {
        this._sourceId = value;
    }
    ;
    set;
    targetId(value, string | undefined);
    {
        this._targetId = value;
    }
    ;
}
