"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_clearRequestBuilder_1 = require("./microsoft/graph/clear/microsoft.graph.clearRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_clearRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/resource/microsoft.graph.workbookRange  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_clearRequestBuilder_1.graph.workbookRangeRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.clear();
    microsoft_graph_clearRequestBuilder_1.Microsoft.graph.clearRequestBuilder;
    {
        return new microsoft_graph_clearRequestBuilder_1.Microsoft.graph.clearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.delete();
    microsoft_graph_clearRequestBuilder_1.Microsoft.graph.deleteRequestBuilder;
    {
        return new microsoft_graph_clearRequestBuilder_1.Microsoft.graph.deleteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.insert();
    microsoft_graph_clearRequestBuilder_1.Microsoft.graph.insertRequestBuilder;
    {
        return new microsoft_graph_clearRequestBuilder_1.Microsoft.graph.insertRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.merge();
    microsoft_graph_clearRequestBuilder_1.Microsoft.graph.mergeRequestBuilder;
    {
        return new microsoft_graph_clearRequestBuilder_1.Microsoft.graph.mergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.unmerge();
    microsoft_graph_clearRequestBuilder_1.Microsoft.graph.unmergeRequestBuilder;
    {
        return new microsoft_graph_clearRequestBuilder_1.Microsoft.graph.unmergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRange";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
