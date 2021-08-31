"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var driveRecipient_1 = require("../../../../../workbooks/microsoft/graph/invite/driveRecipient");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.grantResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _recipients ?  : driveRecipient_1.DriveRecipient[] | undefined;
    _roles ?  : string[] | undefined;
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
    recipients();
    {
        return this._recipients;
    }
    ;
    get;
    roles();
    {
        return this._roles;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["recipients", function (o, n) { o.recipients = n.getCollectionOfObjectValues(driveRecipient_1.DriveRecipient); }],
            ["roles", function (o, n) { o.roles = n.getCollectionOfPrimitiveValues(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("recipients", this.recipients),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("roles", this.roles),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    recipients(value, driveRecipient_1.DriveRecipient[] | undefined);
    {
        this._recipients = value;
    }
    ;
    set;
    roles(value, string[] | undefined);
    {
        this._roles = value;
    }
    ;
}
