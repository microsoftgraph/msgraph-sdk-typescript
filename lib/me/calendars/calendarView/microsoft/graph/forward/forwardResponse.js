"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var recipient_1 = require("../../../../../../groups/recipient");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.forwardResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _comment ?  : string | undefined;
    _toRecipients ?  : recipient_1.Recipient[] | undefined;
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
    toRecipients();
    {
        return this._toRecipients;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["comment", function (o, n) { o.comment = n.getStringValue(); }],
            ["toRecipients", function (o, n) { o.toRecipients = n.getCollectionOfObjectValues(recipient_1.Recipient); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("comment", this.comment),
        writer: writer,
        : .writeCollectionOfObjectValues("toRecipients", this.toRecipients),
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
    toRecipients(value, recipient_1.Recipient[] | undefined);
    {
        this._toRecipients = value;
    }
    ;
}
