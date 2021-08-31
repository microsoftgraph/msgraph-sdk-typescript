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
graph.updateWindowsDeviceAccountResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _updateWindowsDeviceAccountActionParameter ?  : UpdateWindowsDeviceAccountActionParameter | undefined;
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
    updateWindowsDeviceAccountActionParameter();
    {
        return this._updateWindowsDeviceAccountActionParameter;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["updateWindowsDeviceAccountActionParameter", function (o, n) { o.updateWindowsDeviceAccountActionParameter = n.getObjectValue(UpdateWindowsDeviceAccountActionParameter); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("updateWindowsDeviceAccountActionParameter", this.updateWindowsDeviceAccountActionParameter),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    updateWindowsDeviceAccountActionParameter(value, UpdateWindowsDeviceAccountActionParameter | undefined);
    {
        this._updateWindowsDeviceAccountActionParameter = value;
    }
    ;
}
