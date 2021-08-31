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
    _hasHeaders ?  : boolean | undefined;
    _matchCase ?  : boolean | undefined;
    _method ?  : string | undefined;
    _orientation ?  : string | undefined;
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
    hasHeaders();
    {
        return this._hasHeaders;
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
    get;
    orientation();
    {
        return this._orientation;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["fields", function (o, n) { o.fields = n.getCollectionOfPrimitiveValues(); }],
            ["hasHeaders", function (o, n) { o.hasHeaders = n.getBooleanValue(); }],
            ["matchCase", function (o, n) { o.matchCase = n.getBooleanValue(); }],
            ["method", function (o, n) { o.method = n.getStringValue(); }],
            ["orientation", function (o, n) { o.orientation = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("fields", this.fields),
        writer: writer,
        : .writeBooleanValue("hasHeaders", this.hasHeaders),
        writer: writer,
        : .writeBooleanValue("matchCase", this.matchCase),
        writer: writer,
        : .writeStringValue("method", this.method),
        writer: writer,
        : .writeStringValue("orientation", this.orientation),
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
    hasHeaders(value, boolean | undefined);
    {
        this._hasHeaders = value;
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
    set;
    orientation(value, string | undefined);
    {
        this._orientation = value;
    }
    ;
}
