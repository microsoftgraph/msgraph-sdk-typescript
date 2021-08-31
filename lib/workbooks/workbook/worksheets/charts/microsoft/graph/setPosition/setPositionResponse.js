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
graph.setPositionResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _endCell ?  : Json | undefined;
    _startCell ?  : Json | undefined;
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
    endCell();
    {
        return this._endCell;
    }
    ;
    get;
    startCell();
    {
        return this._startCell;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["endCell", function (o, n) { o.endCell = n.getObjectValue(Json); }],
            ["startCell", function (o, n) { o.startCell = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("endCell", this.endCell),
        writer: writer,
        : .writeObjectValue("startCell", this.startCell),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    endCell(value, Json | undefined);
    {
        this._endCell = value;
    }
    ;
    set;
    startCell(value, Json | undefined);
    {
        this._startCell = value;
    }
    ;
}
