"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_commitRequestBuilder_1 = require("./microsoft/graph/commit/microsoft.graph.commitRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_commitRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/resource/microsoft.graph.mobileAppContentFile  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_commitRequestBuilder_1.graph.mobileAppContentFileRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.commit();
    microsoft_graph_commitRequestBuilder_1.Microsoft.graph.commitRequestBuilder;
    {
        return new microsoft_graph_commitRequestBuilder_1.Microsoft.graph.commitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.renewUpload();
    microsoft_graph_commitRequestBuilder_1.Microsoft.graph.renewUploadRequestBuilder;
    {
        return new microsoft_graph_commitRequestBuilder_1.Microsoft.graph.renewUploadRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.mobileAppContentFile";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
