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
graph.validatePropertiesResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _displayName ?  : string | undefined;
    _entityType ?  : string | undefined;
    _mailNickname ?  : string | undefined;
    _onBehalfOfUserId ?  : string | undefined;
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
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    entityType();
    {
        return this._entityType;
    }
    ;
    get;
    mailNickname();
    {
        return this._mailNickname;
    }
    ;
    get;
    onBehalfOfUserId();
    {
        return this._onBehalfOfUserId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["entityType", function (o, n) { o.entityType = n.getStringValue(); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["onBehalfOfUserId", function (o, n) { o.onBehalfOfUserId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeStringValue("entityType", this.entityType),
        writer: writer,
        : .writeStringValue("mailNickname", this.mailNickname),
        writer: writer,
        : .writeStringValue("onBehalfOfUserId", this.onBehalfOfUserId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    entityType(value, string | undefined);
    {
        this._entityType = value;
    }
    ;
    set;
    mailNickname(value, string | undefined);
    {
        this._mailNickname = value;
    }
    ;
    set;
    onBehalfOfUserId(value, string | undefined);
    {
        this._onBehalfOfUserId = value;
    }
    ;
}
