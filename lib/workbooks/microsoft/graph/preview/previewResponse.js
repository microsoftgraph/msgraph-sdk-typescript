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
graph.previewResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _page ?  : string | undefined;
    _zoom ?  : number | undefined;
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
    page();
    {
        return this._page;
    }
    ;
    get;
    zoom();
    {
        return this._zoom;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["page", function (o, n) { o.page = n.getStringValue(); }],
            ["zoom", function (o, n) { o.zoom = n.getNumberValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("page", this.page),
        writer: writer,
        : .writeNumberValue("zoom", this.zoom),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    page(value, string | undefined);
    {
        this._page = value;
    }
    ;
    set;
    zoom(value, number | undefined);
    {
        this._zoom = value;
    }
    ;
}
