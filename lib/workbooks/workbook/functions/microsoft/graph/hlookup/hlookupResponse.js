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
graph.hlookupResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _lookupValue ?  : Json | undefined;
    _rangeLookup ?  : Json | undefined;
    _rowIndexNum ?  : Json | undefined;
    _tableArray ?  : Json | undefined;
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
    lookupValue();
    {
        return this._lookupValue;
    }
    ;
    get;
    rangeLookup();
    {
        return this._rangeLookup;
    }
    ;
    get;
    rowIndexNum();
    {
        return this._rowIndexNum;
    }
    ;
    get;
    tableArray();
    {
        return this._tableArray;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["lookupValue", function (o, n) { o.lookupValue = n.getObjectValue(Json); }],
            ["rangeLookup", function (o, n) { o.rangeLookup = n.getObjectValue(Json); }],
            ["rowIndexNum", function (o, n) { o.rowIndexNum = n.getObjectValue(Json); }],
            ["tableArray", function (o, n) { o.tableArray = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("lookupValue", this.lookupValue),
        writer: writer,
        : .writeObjectValue("rangeLookup", this.rangeLookup),
        writer: writer,
        : .writeObjectValue("rowIndexNum", this.rowIndexNum),
        writer: writer,
        : .writeObjectValue("tableArray", this.tableArray),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    lookupValue(value, Json | undefined);
    {
        this._lookupValue = value;
    }
    ;
    set;
    rangeLookup(value, Json | undefined);
    {
        this._rangeLookup = value;
    }
    ;
    set;
    rowIndexNum(value, Json | undefined);
    {
        this._rowIndexNum = value;
    }
    ;
    set;
    tableArray(value, Json | undefined);
    {
        this._tableArray = value;
    }
    ;
}
