"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var importedWindowsAutopilotDeviceIdentity_1 = require("../../../../importedWindowsAutopilotDeviceIdentity");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.importResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _importedWindowsAutopilotDeviceIdentities ?  : importedWindowsAutopilotDeviceIdentity_1.ImportedWindowsAutopilotDeviceIdentity[] | undefined;
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
    importedWindowsAutopilotDeviceIdentities();
    {
        return this._importedWindowsAutopilotDeviceIdentities;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["importedWindowsAutopilotDeviceIdentities", function (o, n) { o.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues(importedWindowsAutopilotDeviceIdentity_1.ImportedWindowsAutopilotDeviceIdentity); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("importedWindowsAutopilotDeviceIdentities", this.importedWindowsAutopilotDeviceIdentities),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    importedWindowsAutopilotDeviceIdentities(value, importedWindowsAutopilotDeviceIdentity_1.ImportedWindowsAutopilotDeviceIdentity[] | undefined);
    {
        this._importedWindowsAutopilotDeviceIdentities = value;
    }
    ;
}
