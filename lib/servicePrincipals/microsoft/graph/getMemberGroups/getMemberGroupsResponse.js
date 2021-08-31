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
graph.getMemberGroupsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _securityEnabledOnly ?  : boolean | undefined;
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
    securityEnabledOnly();
    {
        return this._securityEnabledOnly;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["securityEnabledOnly", function (o, n) { o.securityEnabledOnly = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("securityEnabledOnly", this.securityEnabledOnly),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    securityEnabledOnly(value, boolean | undefined);
    {
        this._securityEnabledOnly = value;
    }
    ;
}
