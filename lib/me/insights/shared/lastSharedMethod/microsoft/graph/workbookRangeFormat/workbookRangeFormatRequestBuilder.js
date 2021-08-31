"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_autofitColumnsRequestBuilder_1 = require("./microsoft/graph/autofitColumns/microsoft.graph.autofitColumnsRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_autofitColumnsRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRangeFormat  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_autofitColumnsRequestBuilder_1.graph.workbookRangeFormatRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.autofitColumns();
    microsoft_graph_autofitColumnsRequestBuilder_1.Microsoft.graph.autofitColumnsRequestBuilder;
    {
        return new microsoft_graph_autofitColumnsRequestBuilder_1.Microsoft.graph.autofitColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.autofitRows();
    microsoft_graph_autofitColumnsRequestBuilder_1.Microsoft.graph.autofitRowsRequestBuilder;
    {
        return new microsoft_graph_autofitColumnsRequestBuilder_1.Microsoft.graph.autofitRowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRangeFormat";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
