"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_abortRequestBuilder_1 = require("./microsoft/graph/abort/microsoft.graph.abortRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_abortRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.printJob  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_abortRequestBuilder_1.graph.printJobRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.abort();
    microsoft_graph_abortRequestBuilder_1.Microsoft.graph.abortRequestBuilder;
    {
        return new microsoft_graph_abortRequestBuilder_1.Microsoft.graph.abortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.cancel();
    microsoft_graph_abortRequestBuilder_1.Microsoft.graph.cancelRequestBuilder;
    {
        return new microsoft_graph_abortRequestBuilder_1.Microsoft.graph.cancelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.redirect();
    microsoft_graph_abortRequestBuilder_1.Microsoft.graph.redirectRequestBuilder;
    {
        return new microsoft_graph_abortRequestBuilder_1.Microsoft.graph.redirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.start();
    microsoft_graph_abortRequestBuilder_1.Microsoft.graph.startRequestBuilder;
    {
        return new microsoft_graph_abortRequestBuilder_1.Microsoft.graph.startRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.printJob";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
