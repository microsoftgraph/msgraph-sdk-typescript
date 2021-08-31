"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var mobileAppAssignment_1 = require("../../../../mobileAppAssignment");
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
    _mobileAppAssignments ?  : mobileAppAssignment_1.MobileAppAssignment[] | undefined;
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
    mobileAppAssignments();
    {
        return this._mobileAppAssignments;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["mobileAppAssignments", function (o, n) { o.mobileAppAssignments = n.getCollectionOfObjectValues(mobileAppAssignment_1.MobileAppAssignment); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("mobileAppAssignments", this.mobileAppAssignments),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    mobileAppAssignments(value, mobileAppAssignment_1.MobileAppAssignment[] | undefined);
    {
        this._mobileAppAssignments = value;
    }
    ;
}
