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
graph.matchResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _lookupArray ?  : Json | undefined;
    _lookupValue ?  : Json | undefined;
    _matchType ?  : Json | undefined;
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
    lookupArray();
    {
        return this._lookupArray;
    }
    ;
    get;
    lookupValue();
    {
        return this._lookupValue;
    }
    ;
    get;
    matchType();
    {
        return this._matchType;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["lookupArray", function (o, n) { o.lookupArray = n.getObjectValue(Json); }],
            ["lookupValue", function (o, n) { o.lookupValue = n.getObjectValue(Json); }],
            ["matchType", function (o, n) { o.matchType = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("lookupArray", this.lookupArray),
        writer: writer,
        : .writeObjectValue("lookupValue", this.lookupValue),
        writer: writer,
        : .writeObjectValue("matchType", this.matchType),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    lookupArray(value, Json | undefined);
    {
        this._lookupArray = value;
    }
    ;
    set;
    lookupValue(value, Json | undefined);
    {
        this._lookupValue = value;
    }
    ;
    set;
    matchType(value, Json | undefined);
    {
        this._matchType = value;
    }
    ;
}
