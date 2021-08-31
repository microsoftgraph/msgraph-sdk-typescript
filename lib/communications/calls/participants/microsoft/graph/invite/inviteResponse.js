"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var invitationParticipantInfo_1 = require("../../../../microsoft/graph/invitationParticipantInfo");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.inviteResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _clientContext ?  : string | undefined;
    _participants ?  : invitationParticipantInfo_1.InvitationParticipantInfo[] | undefined;
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
    clientContext();
    {
        return this._clientContext;
    }
    ;
    get;
    participants();
    {
        return this._participants;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["clientContext", function (o, n) { o.clientContext = n.getStringValue(); }],
            ["participants", function (o, n) { o.participants = n.getCollectionOfObjectValues(invitationParticipantInfo_1.InvitationParticipantInfo); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("clientContext", this.clientContext),
        writer: writer,
        : .writeCollectionOfObjectValues("participants", this.participants),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    clientContext(value, string | undefined);
    {
        this._clientContext = value;
    }
    ;
    set;
    participants(value, invitationParticipantInfo_1.InvitationParticipantInfo[] | undefined);
    {
        this._participants = value;
    }
    ;
}
