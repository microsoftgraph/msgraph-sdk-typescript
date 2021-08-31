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
graph.assignUserToDeviceResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _addressableUserName ?  : string | undefined;
    _userPrincipalName ?  : string | undefined;
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
    addressableUserName();
    {
        return this._addressableUserName;
    }
    ;
    get;
    userPrincipalName();
    {
        return this._userPrincipalName;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["addressableUserName", function (o, n) { o.addressableUserName = n.getStringValue(); }],
            ["userPrincipalName", function (o, n) { o.userPrincipalName = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("addressableUserName", this.addressableUserName),
        writer: writer,
        : .writeStringValue("userPrincipalName", this.userPrincipalName),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    addressableUserName(value, string | undefined);
    {
        this._addressableUserName = value;
    }
    ;
    set;
    userPrincipalName(value, string | undefined);
    {
        this._userPrincipalName = value;
    }
    ;
}
