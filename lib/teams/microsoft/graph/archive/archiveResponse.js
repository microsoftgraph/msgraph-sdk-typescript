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
graph.archiveResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _shouldSetSpoSiteReadOnlyForMembers ?  : boolean | undefined;
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
    shouldSetSpoSiteReadOnlyForMembers();
    {
        return this._shouldSetSpoSiteReadOnlyForMembers;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["shouldSetSpoSiteReadOnlyForMembers", function (o, n) { o.shouldSetSpoSiteReadOnlyForMembers = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("shouldSetSpoSiteReadOnlyForMembers", this.shouldSetSpoSiteReadOnlyForMembers),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    shouldSetSpoSiteReadOnlyForMembers(value, boolean | undefined);
    {
        this._shouldSetSpoSiteReadOnlyForMembers = value;
    }
    ;
}
