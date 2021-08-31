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
graph.getAvailableExtensionPropertiesResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _isSyncedFromOnPremises ?  : boolean | undefined;
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
    isSyncedFromOnPremises();
    {
        return this._isSyncedFromOnPremises;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["isSyncedFromOnPremises", function (o, n) { o.isSyncedFromOnPremises = n.getBooleanValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeBooleanValue("isSyncedFromOnPremises", this.isSyncedFromOnPremises),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    isSyncedFromOnPremises(value, boolean | undefined);
    {
        this._isSyncedFromOnPremises = value;
    }
    ;
}
