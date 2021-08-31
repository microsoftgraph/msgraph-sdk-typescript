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
graph.cloneResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _classification ?  : string | undefined;
    _description ?  : string | undefined;
    _displayName ?  : string | undefined;
    _mailNickname ?  : string | undefined;
    _partsToClone ?  : ClonableTeamParts | undefined;
    _visibility ?  : TeamVisibilityType | undefined;
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
    classification();
    {
        return this._classification;
    }
    ;
    get;
    description();
    {
        return this._description;
    }
    ;
    get;
    displayName();
    {
        return this._displayName;
    }
    ;
    get;
    mailNickname();
    {
        return this._mailNickname;
    }
    ;
    get;
    partsToClone();
    {
        return this._partsToClone;
    }
    ;
    get;
    visibility();
    {
        return this._visibility;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["classification", function (o, n) { o.classification = n.getStringValue(); }],
            ["description", function (o, n) { o.description = n.getStringValue(); }],
            ["displayName", function (o, n) { o.displayName = n.getStringValue(); }],
            ["mailNickname", function (o, n) { o.mailNickname = n.getStringValue(); }],
            ["partsToClone", function (o, n) { o.partsToClone = n.getObjectValue(ClonableTeamParts); }],
            ["visibility", function (o, n) { o.visibility = n.getObjectValue(TeamVisibilityType); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("classification", this.classification),
        writer: writer,
        : .writeStringValue("description", this.description),
        writer: writer,
        : .writeStringValue("displayName", this.displayName),
        writer: writer,
        : .writeStringValue("mailNickname", this.mailNickname),
        writer: writer,
        : .writeObjectValue("partsToClone", this.partsToClone),
        writer: writer,
        : .writeObjectValue("visibility", this.visibility),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    classification(value, string | undefined);
    {
        this._classification = value;
    }
    ;
    set;
    description(value, string | undefined);
    {
        this._description = value;
    }
    ;
    set;
    displayName(value, string | undefined);
    {
        this._displayName = value;
    }
    ;
    set;
    mailNickname(value, string | undefined);
    {
        this._mailNickname = value;
    }
    ;
    set;
    partsToClone(value, ClonableTeamParts | undefined);
    {
        this._partsToClone = value;
    }
    ;
    set;
    visibility(value, TeamVisibilityType | undefined);
    {
        this._visibility = value;
    }
    ;
}
