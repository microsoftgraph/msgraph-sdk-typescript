"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var printDocumentUploadProperties_1 = require("../../../../../../../../shared/lastSharedMethod/microsoft/graph/printDocument/microsoft/graph/printDocumentUploadProperties");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.createUploadSessionResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _properties ?  : printDocumentUploadProperties_1.PrintDocumentUploadProperties | undefined;
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
    properties();
    {
        return this._properties;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["properties", function (o, n) { o.properties = n.getObjectValue(printDocumentUploadProperties_1.PrintDocumentUploadProperties); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("properties", this.properties),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    properties(value, printDocumentUploadProperties_1.PrintDocumentUploadProperties | undefined);
    {
        this._properties = value;
    }
    ;
}
