"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var invitationParticipantInfo_1 = require("../invitationParticipantInfo");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.redirectResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _callbackUri ?  : string | undefined;
    _targets ?  : invitationParticipantInfo_1.InvitationParticipantInfo[] | undefined;
    _timeout ?  : number | undefined;
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
    callbackUri();
    {
        return this._callbackUri;
    }
    ;
    get;
    targets();
    {
        return this._targets;
    }
    ;
    get;
    timeout();
    {
        return this._timeout;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["callbackUri", function (o, n) { o.callbackUri = n.getStringValue(); }],
            ["targets", function (o, n) { o.targets = n.getCollectionOfObjectValues(invitationParticipantInfo_1.InvitationParticipantInfo); }],
            ["timeout", function (o, n) { o.timeout = n.getNumberValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("callbackUri", this.callbackUri),
        writer: writer,
        : .writeCollectionOfObjectValues("targets", this.targets),
        writer: writer,
        : .writeNumberValue("timeout", this.timeout),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    callbackUri(value, string | undefined);
    {
        this._callbackUri = value;
    }
    ;
    set;
    targets(value, invitationParticipantInfo_1.InvitationParticipantInfo[] | undefined);
    {
        this._targets = value;
    }
    ;
    set;
    timeout(value, number | undefined);
    {
        this._timeout = value;
    }
    ;
}
