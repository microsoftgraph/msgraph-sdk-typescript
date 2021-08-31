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
graph.randBetweenResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _bottom ?  : Json | undefined;
    _top ?  : Json | undefined;
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
    bottom();
    {
        return this._bottom;
    }
    ;
    get;
    top();
    {
        return this._top;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["bottom", function (o, n) { o.bottom = n.getObjectValue(Json); }],
            ["top", function (o, n) { o.top = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("bottom", this.bottom),
        writer: writer,
        : .writeObjectValue("top", this.top),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    bottom(value, Json | undefined);
    {
        this._bottom = value;
    }
    ;
    set;
    top(value, Json | undefined);
    {
        this._top = value;
    }
    ;
}
