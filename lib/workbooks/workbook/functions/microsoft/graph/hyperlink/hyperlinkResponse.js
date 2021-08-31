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
graph.hyperlinkResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _friendlyName ?  : Json | undefined;
    _linkLocation ?  : Json | undefined;
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
    friendlyName();
    {
        return this._friendlyName;
    }
    ;
    get;
    linkLocation();
    {
        return this._linkLocation;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["friendlyName", function (o, n) { o.friendlyName = n.getObjectValue(Json); }],
            ["linkLocation", function (o, n) { o.linkLocation = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeObjectValue("friendlyName", this.friendlyName),
        writer: writer,
        : .writeObjectValue("linkLocation", this.linkLocation),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    friendlyName(value, Json | undefined);
    {
        this._friendlyName = value;
    }
    ;
    set;
    linkLocation(value, Json | undefined);
    {
        this._linkLocation = value;
    }
    ;
}
