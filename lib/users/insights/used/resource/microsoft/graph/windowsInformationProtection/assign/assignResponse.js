"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var targetedManagedAppPolicyAssignment_1 = require("../../../../../../../../../../deviceAppManagement/targetedManagedAppPolicyAssignment");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.assignResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _assignments ?  : targetedManagedAppPolicyAssignment_1.TargetedManagedAppPolicyAssignment[] | undefined;
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
    assignments();
    {
        return this._assignments;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["assignments", function (o, n) { o.assignments = n.getCollectionOfObjectValues(targetedManagedAppPolicyAssignment_1.TargetedManagedAppPolicyAssignment); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("assignments", this.assignments),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    assignments(value, targetedManagedAppPolicyAssignment_1.TargetedManagedAppPolicyAssignment[] | undefined);
    {
        this._assignments = value;
    }
    ;
}
