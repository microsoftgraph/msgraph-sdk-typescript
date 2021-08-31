"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_assignRequestBuilder_1 = require("./microsoft/graph/assign/microsoft.graph.assignRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_assignRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.windowsInformationProtection  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_assignRequestBuilder_1.graph.windowsInformationProtectionRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.assign();
    microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder;
    {
        return new microsoft_graph_assignRequestBuilder_1.Microsoft.graph.assignRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.windowsInformationProtection";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
