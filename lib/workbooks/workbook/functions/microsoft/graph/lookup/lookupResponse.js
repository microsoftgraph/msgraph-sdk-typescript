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
graph.lookupResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _lookupValue ?  : Json | undefined;
    _lookupVector ?  : Json | undefined;
    _resultVector ?  : Json | undefined;
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
    lookupVector();
    {
        return this._lookupVector;
    }
    ;
    get;
    resultVector();
    {
        return this._resultVector;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["lookupValue", function (o, n) { o.lookupValue = n.getObjectValue(Json); }],
            ["lookupVector", function (o, n) { o.lookupVector = n.getObjectValue(Json); }],
            ["resultVector", function (o, n) { o.resultVector = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("lookupValue", this.lookupValue),
        writer: writer,
        : .writeObjectValue("lookupVector", this.lookupVector),
        writer: writer,
        : .writeObjectValue("resultVector", this.resultVector),
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
    lookupVector(value, Json | undefined);
    {
        this._lookupVector = value;
    }
    ;
    set;
    resultVector(value, Json | undefined);
    {
        this._resultVector = value;
    }
    ;
}
