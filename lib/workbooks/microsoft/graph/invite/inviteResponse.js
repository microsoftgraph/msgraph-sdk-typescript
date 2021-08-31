"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var driveRecipient_1 = require("./driveRecipient");
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
    _expirationDateTime ?  : string | undefined;
    _message ?  : string | undefined;
    _password ?  : string | undefined;
    _recipients ?  : driveRecipient_1.DriveRecipient[] | undefined;
    _requireSignIn ?  : boolean | undefined;
    _roles ?  : string[] | undefined;
    _sendInvitation ?  : boolean | undefined;
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
    expirationDateTime();
    {
        return this._expirationDateTime;
    }
    ;
    get;
    message();
    {
        return this._message;
    }
    ;
    get;
    password();
    {
        return this._password;
    }
    ;
    get;
    recipients();
    {
        return this._recipients;
    }
    ;
    get;
    requireSignIn();
    {
        return this._requireSignIn;
    }
    ;
    get;
    roles();
    {
        return this._roles;
    }
    ;
    get;
    sendInvitation();
    {
        return this._sendInvitation;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["expirationDateTime", function (o, n) { o.expirationDateTime = n.getStringValue(); }],
            ["message", function (o, n) { o.message = n.getStringValue(); }],
            ["password", function (o, n) { o.password = n.getStringValue(); }],
            ["recipients", function (o, n) { o.recipients = n.getCollectionOfObjectValues(driveRecipient_1.DriveRecipient); }],
            ["requireSignIn", function (o, n) { o.requireSignIn = n.getBooleanValue(); }],
            ["roles", function (o, n) { o.roles = n.getCollectionOfPrimitiveValues(); }],
            ["sendInvitation", function (o, n) { o.sendInvitation = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("expirationDateTime", this.expirationDateTime),
        writer: writer,
        : .writeStringValue("message", this.message),
        writer: writer,
        : .writeStringValue("password", this.password),
        writer: writer,
        : .writeCollectionOfObjectValues("recipients", this.recipients),
        writer: writer,
        : .writeBooleanValue("requireSignIn", this.requireSignIn),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("roles", this.roles),
        writer: writer,
        : .writeBooleanValue("sendInvitation", this.sendInvitation),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    expirationDateTime(value, string | undefined);
    {
        this._expirationDateTime = value;
    }
    ;
    set;
    message(value, string | undefined);
    {
        this._message = value;
    }
    ;
    set;
    password(value, string | undefined);
    {
        this._password = value;
    }
    ;
    set;
    recipients(value, driveRecipient_1.DriveRecipient[] | undefined);
    {
        this._recipients = value;
    }
    ;
    set;
    requireSignIn(value, boolean | undefined);
    {
        this._requireSignIn = value;
    }
    ;
    set;
    roles(value, string[] | undefined);
    {
        this._roles = value;
    }
    ;
    set;
    sendInvitation(value, boolean | undefined);
    {
        this._sendInvitation = value;
    }
    ;
}
