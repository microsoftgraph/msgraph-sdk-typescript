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
graph.applyResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _fields ?  : WorkbookSortField[] | undefined;
    _matchCase ?  : boolean | undefined;
    _method ?  : string | undefined;
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
    fields();
    {
        return this._fields;
    }
    ;
    get;
    matchCase();
    {
        return this._matchCase;
    }
    ;
    get;
    method();
    {
        return this._method;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fields", function (o, n) { o.fields = n.getCollectionOfPrimitiveValues(); }],
            ["matchCase", function (o, n) { o.matchCase = n.getBooleanValue(); }],
            ["method", function (o, n) { o.method = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("fields", this.fields),
        writer: writer,
        : .writeBooleanValue("matchCase", this.matchCase),
        writer: writer,
        : .writeStringValue("method", this.method),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    fields(value, WorkbookSortField[] | undefined);
    {
        this._fields = value;
    }
    ;
    set;
    matchCase(value, boolean | undefined);
    {
        this._matchCase = value;
    }
    ;
    set;
    method(value, string | undefined);
    {
        this._method = value;
    }
    ;
}
