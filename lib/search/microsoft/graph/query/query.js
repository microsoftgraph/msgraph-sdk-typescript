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
graph.query;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _hitsContainers ?  : SearchHitsContainer[] | undefined;
    _searchTerms ?  : string[] | undefined;
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
    hitsContainers();
    {
        return this._hitsContainers;
    }
    ;
    get;
    searchTerms();
    {
        return this._searchTerms;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["hitsContainers", function (o, n) { o.hitsContainers = n.getCollectionOfPrimitiveValues(); }],
            ["searchTerms", function (o, n) { o.searchTerms = n.getCollectionOfPrimitiveValues(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("hitsContainers", this.hitsContainers),
        writer: writer,
        : .writeCollectionOfPrimitiveValues("searchTerms", this.searchTerms),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    hitsContainers(value, SearchHitsContainer[] | undefined);
    {
        this._hitsContainers = value;
    }
    ;
    set;
    searchTerms(value, string[] | undefined);
    {
        this._searchTerms = value;
    }
    ;
}
