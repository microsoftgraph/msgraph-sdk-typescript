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
graph.rejectResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _callbackUri ?  : string | undefined;
    _reason ?  : RejectReason | undefined;
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
    callbackUri();
    {
        return this._callbackUri;
    }
    ;
    get;
    reason();
    {
        return this._reason;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["callbackUri", function (o, n) { o.callbackUri = n.getStringValue(); }],
            ["reason", function (o, n) { o.reason = n.getObjectValue(RejectReason); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("callbackUri", this.callbackUri),
        writer: writer,
        : .writeObjectValue("reason", this.reason),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    callbackUri(value, string | undefined);
    {
        this._callbackUri = value;
    }
    ;
    set;
    reason(value, RejectReason | undefined);
    {
        this._reason = value;
    }
    ;
}
