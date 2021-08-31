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
graph.checkinResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _checkInAs ?  : string | undefined;
    _comment ?  : string | undefined;
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
    checkInAs();
    {
        return this._checkInAs;
    }
    ;
    get;
    comment();
    {
        return this._comment;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["checkInAs", function (o, n) { o.checkInAs = n.getStringValue(); }],
            ["comment", function (o, n) { o.comment = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("checkInAs", this.checkInAs),
        writer: writer,
        : .writeStringValue("comment", this.comment),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    checkInAs(value, string | undefined);
    {
        this._checkInAs = value;
    }
    ;
    set;
    comment(value, string | undefined);
    {
        this._comment = value;
    }
    ;
}
