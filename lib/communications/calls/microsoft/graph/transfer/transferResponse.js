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
graph.transferResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _transferTarget ?  : invitationParticipantInfo_1.InvitationParticipantInfo | undefined;
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
    transferTarget();
    {
        return this._transferTarget;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["transferTarget", function (o, n) { o.transferTarget = n.getObjectValue(invitationParticipantInfo_1.InvitationParticipantInfo); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("transferTarget", this.transferTarget),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    transferTarget(value, invitationParticipantInfo_1.InvitationParticipantInfo | undefined);
    {
        this._transferTarget = value;
    }
    ;
}
