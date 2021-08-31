"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var assignmentOrder_1 = require("../assignmentOrder");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.setOrderResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _newAssignmentOrder ?  : assignmentOrder_1.AssignmentOrder | undefined;
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
    newAssignmentOrder();
    {
        return this._newAssignmentOrder;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["newAssignmentOrder", function (o, n) { o.newAssignmentOrder = n.getObjectValue(assignmentOrder_1.AssignmentOrder); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("newAssignmentOrder", this.newAssignmentOrder),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    newAssignmentOrder(value, assignmentOrder_1.AssignmentOrder | undefined);
    {
        this._newAssignmentOrder = value;
    }
    ;
}
