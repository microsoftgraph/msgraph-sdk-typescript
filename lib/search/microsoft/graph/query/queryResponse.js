"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var searchRequest_1 = require("./searchRequest");
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
graph.queryResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _requests ?  : searchRequest_1.SearchRequest[] | undefined;
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
    requests();
    {
        return this._requests;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["requests", function (o, n) { o.requests = n.getCollectionOfObjectValues(searchRequest_1.SearchRequest); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfObjectValues("requests", this.requests),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    requests(value, searchRequest_1.SearchRequest[] | undefined);
    {
        this._requests = value;
    }
    ;
}
