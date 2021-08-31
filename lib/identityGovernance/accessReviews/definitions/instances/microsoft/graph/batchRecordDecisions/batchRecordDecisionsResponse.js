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
graph.batchRecordDecisionsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _decision ?  : string | undefined;
    _justification ?  : string | undefined;
    _principalId ?  : string | undefined;
    _resourceId ?  : string | undefined;
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
    decision();
    {
        return this._decision;
    }
    ;
    get;
    justification();
    {
        return this._justification;
    }
    ;
    get;
    principalId();
    {
        return this._principalId;
    }
    ;
    get;
    resourceId();
    {
        return this._resourceId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["decision", function (o, n) { o.decision = n.getStringValue(); }],
            ["justification", function (o, n) { o.justification = n.getStringValue(); }],
            ["principalId", function (o, n) { o.principalId = n.getStringValue(); }],
            ["resourceId", function (o, n) { o.resourceId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("decision", this.decision),
        writer: writer,
        : .writeStringValue("justification", this.justification),
        writer: writer,
        : .writeStringValue("principalId", this.principalId),
        writer: writer,
        : .writeStringValue("resourceId", this.resourceId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    decision(value, string | undefined);
    {
        this._decision = value;
    }
    ;
    set;
    justification(value, string | undefined);
    {
        this._justification = value;
    }
    ;
    set;
    principalId(value, string | undefined);
    {
        this._principalId = value;
    }
    ;
    set;
    resourceId(value, string | undefined);
    {
        this._resourceId = value;
    }
    ;
}
