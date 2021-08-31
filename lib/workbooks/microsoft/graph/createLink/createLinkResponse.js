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
graph.createLinkResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _expirationDateTime ?  : Date | undefined;
    _message ?  : string | undefined;
    _password ?  : string | undefined;
    _scope ?  : string | undefined;
    _type ?  : string | undefined;
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
    expirationDateTime();
    {
        return this._expirationDateTime;
    }
    ;
    get;
    message();
    {
        return this._message;
    }
    ;
    get;
    password();
    {
        return this._password;
    }
    ;
    get;
    scope();
    {
        return this._scope;
    }
    ;
    get;
    type();
    {
        return this._type;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getDateValue(); }],
            ["message", function (o, n) { o.message = n.getStringValue(); }],
            ["password", function (o, n) { o.password = n.getStringValue(); }],
            ["scope", function (o, n) { o.scope = n.getStringValue(); }],
            ["type", function (o, n) { o.type = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeDateValue("expirationDateTime", this.expirationDateTime),
        writer: writer,
        : .writeStringValue("message", this.message),
        writer: writer,
        : .writeStringValue("password", this.password),
        writer: writer,
        : .writeStringValue("scope", this.scope),
        writer: writer,
        : .writeStringValue("type", this.type),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    expirationDateTime(value, Date | undefined);
    {
        this._expirationDateTime = value;
    }
    ;
    set;
    message(value, string | undefined);
    {
        this._message = value;
    }
    ;
    set;
    password(value, string | undefined);
    {
        this._password = value;
    }
    ;
    set;
    scope(value, string | undefined);
    {
        this._scope = value;
    }
    ;
    set;
    type(value, string | undefined);
    {
        this._type = value;
    }
    ;
}
