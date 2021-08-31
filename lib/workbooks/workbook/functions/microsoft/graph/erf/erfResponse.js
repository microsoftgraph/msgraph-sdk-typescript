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
graph.erfResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _lowerLimit ?  : Json | undefined;
    _upperLimit ?  : Json | undefined;
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
    lowerLimit();
    {
        return this._lowerLimit;
    }
    ;
    get;
    upperLimit();
    {
        return this._upperLimit;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["lowerLimit", function (o, n) { o.lowerLimit = n.getObjectValue(Json); }],
            ["upperLimit", function (o, n) { o.upperLimit = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("lowerLimit", this.lowerLimit),
        writer: writer,
        : .writeObjectValue("upperLimit", this.upperLimit),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    lowerLimit(value, Json | undefined);
    {
        this._lowerLimit = value;
    }
    ;
    set;
    upperLimit(value, Json | undefined);
    {
        this._upperLimit = value;
    }
    ;
}
