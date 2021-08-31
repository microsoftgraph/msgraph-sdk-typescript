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
graph.addResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _address ?  : string | undefined;
    _hasHeaders ?  : boolean | undefined;
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
    address();
    {
        return this._address;
    }
    ;
    get;
    hasHeaders();
    {
        return this._hasHeaders;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["address", function (o, n) { o.address = n.getStringValue(); }],
            ["hasHeaders", function (o, n) { o.hasHeaders = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("address", this.address),
        writer: writer,
        : .writeBooleanValue("hasHeaders", this.hasHeaders),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    address(value, string | undefined);
    {
        this._address = value;
    }
    ;
    set;
    hasHeaders(value, boolean | undefined);
    {
        this._hasHeaders = value;
    }
    ;
}
