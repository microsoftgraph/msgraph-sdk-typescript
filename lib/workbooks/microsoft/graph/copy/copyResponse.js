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
graph.copyResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _name ?  : string | undefined;
    _parentReference ?  : ItemReference | undefined;
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
    name();
    {
        return this._name;
    }
    ;
    get;
    parentReference();
    {
        return this._parentReference;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["name", function (o, n) { o.name = n.getStringValue(); }],
            ["parentReference", function (o, n) { o.parentReference = n.getObjectValue(ItemReference); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("name", this.name),
        writer: writer,
        : .writeObjectValue("parentReference", this.parentReference),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    name(value, string | undefined);
    {
        this._name = value;
    }
    ;
    set;
    parentReference(value, ItemReference | undefined);
    {
        this._parentReference = value;
    }
    ;
}
