"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var printJobConfiguration_1 = require("../../../../../../../../../../me/insights/shared/lastSharedMethod/microsoft/graph/printJob/microsoft/graph/printJobConfiguration");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.redirectResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _configuration ?  : printJobConfiguration_1.PrintJobConfiguration | undefined;
    _destinationPrinterId ?  : string | undefined;
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
    configuration();
    {
        return this._configuration;
    }
    ;
    get;
    destinationPrinterId();
    {
        return this._destinationPrinterId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["configuration", function (o, n) { o.configuration = n.getObjectValue(printJobConfiguration_1.PrintJobConfiguration); }],
            ["destinationPrinterId", function (o, n) { o.destinationPrinterId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("configuration", this.configuration),
        writer: writer,
        : .writeStringValue("destinationPrinterId", this.destinationPrinterId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    configuration(value, printJobConfiguration_1.PrintJobConfiguration | undefined);
    {
        this._configuration = value;
    }
    ;
    set;
    destinationPrinterId(value, string | undefined);
    {
        this._destinationPrinterId = value;
    }
    ;
}
