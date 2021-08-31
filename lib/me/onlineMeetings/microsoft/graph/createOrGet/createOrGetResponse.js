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
graph.createOrGetResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _chatInfo ?  : ChatInfo | undefined;
    _endDateTime ?  : Date | undefined;
    _externalId ?  : string | undefined;
    _participants ?  : MeetingParticipants | undefined;
    _startDateTime ?  : Date | undefined;
    _subject ?  : string | undefined;
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
    chatInfo();
    {
        return this._chatInfo;
    }
    ;
    get;
    endDateTime();
    {
        return this._endDateTime;
    }
    ;
    get;
    externalId();
    {
        return this._externalId;
    }
    ;
    get;
    participants();
    {
        return this._participants;
    }
    ;
    get;
    startDateTime();
    {
        return this._startDateTime;
    }
    ;
    get;
    subject();
    {
        return this._subject;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["chatInfo", function (o, n) { o.chatInfo = n.getObjectValue(ChatInfo); }],
            ["endDateTime", function (o, n) { o.endDateTime = n.getDateValue(); }],
            ["externalId", function (o, n) { o.externalId = n.getStringValue(); }],
            ["participants", function (o, n) { o.participants = n.getObjectValue(MeetingParticipants); }],
            ["startDateTime", function (o, n) { o.startDateTime = n.getDateValue(); }],
            ["subject", function (o, n) { o.subject = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("chatInfo", this.chatInfo),
        writer: writer,
        : .writeDateValue("endDateTime", this.endDateTime),
        writer: writer,
        : .writeStringValue("externalId", this.externalId),
        writer: writer,
        : .writeObjectValue("participants", this.participants),
        writer: writer,
        : .writeDateValue("startDateTime", this.startDateTime),
        writer: writer,
        : .writeStringValue("subject", this.subject),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    chatInfo(value, ChatInfo | undefined);
    {
        this._chatInfo = value;
    }
    ;
    set;
    endDateTime(value, Date | undefined);
    {
        this._endDateTime = value;
    }
    ;
    set;
    externalId(value, string | undefined);
    {
        this._externalId = value;
    }
    ;
    set;
    participants(value, MeetingParticipants | undefined);
    {
        this._participants = value;
    }
    ;
    set;
    startDateTime(value, Date | undefined);
    {
        this._startDateTime = value;
    }
    ;
    set;
    subject(value, string | undefined);
    {
        this._subject = value;
    }
    ;
}
