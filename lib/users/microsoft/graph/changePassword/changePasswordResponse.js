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
graph.changePasswordResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _currentPassword ?  : string | undefined;
    _newPassword ?  : string | undefined;
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
    currentPassword();
    {
        return this._currentPassword;
    }
    ;
    get;
    newPassword();
    {
        return this._newPassword;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["currentPassword", function (o, n) { o.currentPassword = n.getStringValue(); }],
            ["newPassword", function (o, n) { o.newPassword = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("currentPassword", this.currentPassword),
        writer: writer,
        : .writeStringValue("newPassword", this.newPassword),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    currentPassword(value, string | undefined);
    {
        this._currentPassword = value;
    }
    ;
    set;
    newPassword(value, string | undefined);
    {
        this._newPassword = value;
    }
    ;
}
