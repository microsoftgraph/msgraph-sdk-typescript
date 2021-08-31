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
graph.syncResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _syncType ?  : DeviceManagementExchangeConnectorSyncType | undefined;
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
    syncType();
    {
        return this._syncType;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["syncType", function (o, n) { o.syncType = n.getObjectValue(DeviceManagementExchangeConnectorSyncType); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("syncType", this.syncType),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    syncType(value, DeviceManagementExchangeConnectorSyncType | undefined);
    {
        this._syncType = value;
    }
    ;
}
