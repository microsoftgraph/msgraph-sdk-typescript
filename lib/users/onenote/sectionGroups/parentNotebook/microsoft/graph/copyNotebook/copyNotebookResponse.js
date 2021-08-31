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
graph.copyNotebookResponse;
implements;
kiota_abstractions_1.Parsable;
{
    _additionalData: Map();
    _groupId ?  : string | undefined;
    _notebookFolder ?  : string | undefined;
    _renameAs ?  : string | undefined;
    _siteCollectionId ?  : string | undefined;
    _siteId ?  : string | undefined;
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
    groupId();
    {
        return this._groupId;
    }
    ;
    get;
    notebookFolder();
    {
        return this._notebookFolder;
    }
    ;
    get;
    renameAs();
    {
        return this._renameAs;
    }
    ;
    get;
    siteCollectionId();
    {
        return this._siteCollectionId;
    }
    ;
    get;
    siteId();
    {
        return this._siteId;
    }
    ;
    getFieldDeserializers();
    Map < string, function (item, node) { return void  > {
        return: new Map([
            ["groupId", function (o, n) { o.groupId = n.getStringValue(); }],
            ["notebookFolder", function (o, n) { o.notebookFolder = n.getStringValue(); }],
            ["renameAs", function (o, n) { o.renameAs = n.getStringValue(); }],
            ["siteCollectionId", function (o, n) { o.siteCollectionId = n.getStringValue(); }],
            ["siteId", function (o, n) { o.siteId = n.getStringValue(); }],
        ])
    }; };
    serialize(writer, kiota_abstractions_1.SerializationWriter);
    void {
        if: function (, writer) { },
        throw: new Error("writer cannot be undefined"),
        writer: writer,
        : .writeStringValue("groupId", this.groupId),
        writer: writer,
        : .writeStringValue("notebookFolder", this.notebookFolder),
        writer: writer,
        : .writeStringValue("renameAs", this.renameAs),
        writer: writer,
        : .writeStringValue("siteCollectionId", this.siteCollectionId),
        writer: writer,
        : .writeStringValue("siteId", this.siteId),
        writer: writer,
        : .writeAdditionalData(this.additionalData)
    };
    set;
    additionalData(value, Map(), {
        this: ._additionalData = value
    });
    set;
    groupId(value, string | undefined);
    {
        this._groupId = value;
    }
    ;
    set;
    notebookFolder(value, string | undefined);
    {
        this._notebookFolder = value;
    }
    ;
    set;
    renameAs(value, string | undefined);
    {
        this._renameAs = value;
    }
    ;
    set;
    siteCollectionId(value, string | undefined);
    {
        this._siteCollectionId = value;
    }
    ;
    set;
    siteId(value, string | undefined);
    {
        this._siteId = value;
    }
    ;
}
