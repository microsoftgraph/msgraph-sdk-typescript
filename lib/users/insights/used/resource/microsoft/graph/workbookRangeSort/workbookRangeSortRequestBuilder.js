"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_applyRequestBuilder_1 = require("./microsoft/graph/apply/microsoft.graph.applyRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_applyRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/insights/used/{usedInsight-id}/resource/microsoft.graph.workbookRangeSort  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_applyRequestBuilder_1.graph.workbookRangeSortRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.apply();
    microsoft_graph_applyRequestBuilder_1.Microsoft.graph.applyRequestBuilder;
    {
        return new microsoft_graph_applyRequestBuilder_1.Microsoft.graph.applyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRangeSort";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
