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
graph.setDataResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _seriesBy ?  : string | undefined;
    _sourceData ?  : Json | undefined;
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
    seriesBy();
    {
        return this._seriesBy;
    }
    ;
    get;
    sourceData();
    {
        return this._sourceData;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["seriesBy", function (o, n) { o.seriesBy = n.getStringValue(); }],
            ["sourceData", function (o, n) { o.sourceData = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("seriesBy", this.seriesBy),
        writer: writer,
        : .writeObjectValue("sourceData", this.sourceData),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    seriesBy(value, string | undefined);
    {
        this._seriesBy = value;
    }
    ;
    set;
    sourceData(value, Json | undefined);
    {
        this._sourceData = value;
    }
    ;
}
