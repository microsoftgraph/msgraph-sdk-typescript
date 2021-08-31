"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var enrollmentConfigurationAssignment_1 = require("../../../../enrollmentConfigurationAssignment");
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
    _enrollmentConfigurationAssignments ?  : enrollmentConfigurationAssignment_1.EnrollmentConfigurationAssignment[] | undefined;
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
    enrollmentConfigurationAssignments();
    {
        return this._enrollmentConfigurationAssignments;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["enrollmentConfigurationAssignments", function (o, n) { o.enrollmentConfigurationAssignments = n.getCollectionOfObjectValues(enrollmentConfigurationAssignment_1.EnrollmentConfigurationAssignment); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("enrollmentConfigurationAssignments", this.enrollmentConfigurationAssignments),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    enrollmentConfigurationAssignments(value, enrollmentConfigurationAssignment_1.EnrollmentConfigurationAssignment[] | undefined);
    {
        this._enrollmentConfigurationAssignments = value;
    }
    ;
}
