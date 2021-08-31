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
graph.updateDevicePropertiesResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _addressableUserName ?  : string | undefined;
    _displayName ?  : string | undefined;
    _groupTag ?  : string | undefined;
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
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    groupTag();
    {
        return this._groupTag;
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
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["groupTag", function (o, n) { o.groupTag = n.getStringValue(); }],
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
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeStringValue("groupTag", this.groupTag),
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
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    groupTag(value, string | undefined);
    {
        this._groupTag = value;
    }
    ;
    set;
    userPrincipalName(value, string | undefined);
    {
        this._userPrincipalName = value;
    }
    ;
}
