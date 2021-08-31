"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var deviceComplianceScheduledActionForRule_1 = require("../../../../deviceComplianceScheduledActionForRule");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.scheduleActionsForRulesResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _deviceComplianceScheduledActionForRules ?  : deviceComplianceScheduledActionForRule_1.DeviceComplianceScheduledActionForRule[] | undefined;
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
    deviceComplianceScheduledActionForRules();
    {
        return this._deviceComplianceScheduledActionForRules;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["deviceComplianceScheduledActionForRules", function (o, n) { o.deviceComplianceScheduledActionForRules = n.getCollectionOfObjectValues(deviceComplianceScheduledActionForRule_1.DeviceComplianceScheduledActionForRule); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("deviceComplianceScheduledActionForRules", this.deviceComplianceScheduledActionForRules),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    deviceComplianceScheduledActionForRules(value, deviceComplianceScheduledActionForRule_1.DeviceComplianceScheduledActionForRule[] | undefined);
    {
        this._deviceComplianceScheduledActionForRules = value;
    }
    ;
}
