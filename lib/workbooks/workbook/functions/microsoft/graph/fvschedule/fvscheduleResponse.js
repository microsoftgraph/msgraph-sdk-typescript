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
graph.fvscheduleResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _principal ?  : Json | undefined;
    _schedule ?  : Json | undefined;
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
    principal();
    {
        return this._principal;
    }
    ;
    get;
    schedule();
    {
        return this._schedule;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["principal", function (o, n) { o.principal = n.getObjectValue(Json); }],
            ["schedule", function (o, n) { o.schedule = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("principal", this.principal),
        writer: writer,
        : .writeObjectValue("schedule", this.schedule),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    principal(value, Json | undefined);
    {
        this._principal = value;
    }
    ;
    set;
    schedule(value, Json | undefined);
    {
        this._schedule = value;
    }
    ;
}
