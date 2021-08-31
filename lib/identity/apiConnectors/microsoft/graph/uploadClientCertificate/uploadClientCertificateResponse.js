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
graph.uploadClientCertificateResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _password ?  : string | undefined;
    _pkcs12Value ?  : string | undefined;
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
    password();
    {
        return this._password;
    }
    ;
    get;
    pkcs12Value();
    {
        return this._pkcs12Value;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["password", function (o, n) { o.password = n.getStringValue(); }],
            ["pkcs12Value", function (o, n) { o.pkcs12Value = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("password", this.password),
        writer: writer,
        : .writeStringValue("pkcs12Value", this.pkcs12Value),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    password(value, string | undefined);
    {
        this._password = value;
    }
    ;
    set;
    pkcs12Value(value, string | undefined);
    {
        this._pkcs12Value = value;
    }
    ;
}
