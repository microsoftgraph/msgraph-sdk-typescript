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
graph.addResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _comment ?  : string | undefined;
    _name ?  : string | undefined;
    _reference ?  : Json | undefined;
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
    comment();
    {
        return this._comment;
    }
    ;
    get;
    name();
    {
        return this._name;
    }
    ;
    get;
    reference();
    {
        return this._reference;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["comment", function (o, n) { o.comment = n.getStringValue(); }],
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["reference", function (o, n) { o.reference = n.getObjectValue(Json); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("comment", this.comment),
        writer: writer,
        : .writeStringValue("name", this.name),
        writer: writer,
        : .writeObjectValue("reference", this.reference),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    comment(value, string | undefined);
    {
        this._comment = value;
    }
    ;
    set;
    name(value, string | undefined);
    {
        this._name = value;
    }
    ;
    set;
    reference(value, Json | undefined);
    {
        this._reference = value;
    }
    ;
}
