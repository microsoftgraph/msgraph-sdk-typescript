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
graph.declineResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _comment ?  : string | undefined;
    _proposedNewTime ?  : TimeSlot | undefined;
    _sendResponse ?  : boolean | undefined;
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
    proposedNewTime();
    {
        return this._proposedNewTime;
    }
    ;
    get;
    sendResponse();
    {
        return this._sendResponse;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["comment", function (o, n) { o.comment = n.getStringValue(); }],
            ["proposedNewTime", function (o, n) { o.proposedNewTime = n.getObjectValue(TimeSlot); }],
            ["sendResponse", function (o, n) { o.sendResponse = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("comment", this.comment),
        writer: writer,
        : .writeObjectValue("proposedNewTime", this.proposedNewTime),
        writer: writer,
        : .writeBooleanValue("sendResponse", this.sendResponse),
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
    proposedNewTime(value, TimeSlot | undefined);
    {
        this._proposedNewTime = value;
    }
    ;
    set;
    sendResponse(value, boolean | undefined);
    {
        this._sendResponse = value;
    }
    ;
}
