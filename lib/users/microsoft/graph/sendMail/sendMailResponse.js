"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var message_1 = require("../../../../message");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.sendMailResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _message ?  : message_1.Message | undefined;
    _saveToSentItems ?  : boolean | undefined;
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
    message();
    {
        return this._message;
    }
    ;
    get;
    saveToSentItems();
    {
        return this._saveToSentItems;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["message", function (o, n) { o.message = n.getObjectValue(message_1.Message); }],
            ["saveToSentItems", function (o, n) { o.saveToSentItems = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("message", this.message),
        writer: writer,
        : .writeBooleanValue("saveToSentItems", this.saveToSentItems),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    message(value, message_1.Message | undefined);
    {
        this._message = value;
    }
    ;
    set;
    saveToSentItems(value, boolean | undefined);
    {
        this._saveToSentItems = value;
    }
    ;
}
