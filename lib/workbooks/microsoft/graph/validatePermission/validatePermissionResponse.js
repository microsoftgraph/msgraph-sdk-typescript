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
graph.validatePermissionResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _challengeToken ?  : string | undefined;
    _password ?  : string | undefined;
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
    challengeToken();
    {
        return this._challengeToken;
    }
    ;
    get;
    password();
    {
        return this._password;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["challengeToken", function (o, n) { o.challengeToken = n.getStringValue(); }],
            ["password", function (o, n) { o.password = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("challengeToken", this.challengeToken),
        writer: writer,
        : .writeStringValue("password", this.password),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    challengeToken(value, string | undefined);
    {
        this._challengeToken = value;
    }
    ;
    set;
    password(value, string | undefined);
    {
        this._password = value;
    }
    ;
}
