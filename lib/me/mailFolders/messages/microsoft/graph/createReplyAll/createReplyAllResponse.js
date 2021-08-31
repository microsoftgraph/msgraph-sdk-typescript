"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var message_1 = require("../../../../../../message");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.createReplyAllResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _comment ?  : string | undefined;
    _message ?  : message_1.Message | undefined;
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
    comment();
    {
        return this._comment;
    }
    ;
    get;
    message();
    {
        return this._message;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["comment", function (o, n) { o.comment = n.getStringValue(); }],
            ["message", function (o, n) { o.message = n.getObjectValue(message_1.Message); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("comment", this.comment),
        writer: writer,
        : .writeObjectValue("message", this.message),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    comment(value, string | undefined);
    {
        this._comment = value;
    }
    ;
    set;
    message(value, message_1.Message | undefined);
    {
        this._message = value;
    }
    ;
}
