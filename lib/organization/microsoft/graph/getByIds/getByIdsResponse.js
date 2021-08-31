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
graph.getByIdsResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _ids ?  : string[] | undefined;
    _types ?  : string[] | undefined;
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
    ids();
    {
        return this._ids;
    }
    ;
    get;
    types();
    {
        return this._types;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["ids", function (o, n) { o.ids = n.getCollectionOfPrimitiveValues(); }],
            ["types", function (o, n) { o.types = n.getCollectionOfPrimitiveValues(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("ids", this.ids),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("types", this.types),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    ids(value, string[] | undefined);
    {
        this._ids = value;
    }
    ;
    set;
    types(value, string[] | undefined);
    {
        this._types = value;
    }
    ;
}
