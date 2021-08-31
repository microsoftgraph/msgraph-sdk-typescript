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
graph.getMailTipsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _emailAddresses ?  : string[] | undefined;
    _mailTipsOptions ?  : MailTipsType | undefined;
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
    emailAddresses();
    {
        return this._emailAddresses;
    }
    ;
    get;
    mailTipsOptions();
    {
        return this._mailTipsOptions;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["emailAddresses", function (o, n) { o.emailAddresses = n.getCollectionOfPrimitiveValues(); }],
            ["mailTipsOptions", function (o, n) { o.mailTipsOptions = n.getObjectValue(MailTipsType); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("emailAddresses", this.emailAddresses),
        writer: writer,
        : .writeObjectValue("mailTipsOptions", this.mailTipsOptions),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    emailAddresses(value, string[] | undefined);
    {
        this._emailAddresses = value;
    }
    ;
    set;
    mailTipsOptions(value, MailTipsType | undefined);
    {
        this._mailTipsOptions = value;
    }
    ;
}
