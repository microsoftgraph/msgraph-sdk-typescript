"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microsoft = void 0;
var microsoft_graph_approveRequestBuilder_1 = require("./microsoft/graph/approve/microsoft.graph.approveRequestBuilder");
Object.defineProperty(exports, "Microsoft", { enumerable: true, get: function () { return microsoft_graph_approveRequestBuilder_1.Microsoft; } });
var kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.scheduleChangeRequest  */
var Microsoft = /** @class */ (function () {
    function Microsoft() {
    }
    return Microsoft;
}());
exports.Microsoft = Microsoft;
microsoft_graph_approveRequestBuilder_1.graph.scheduleChangeRequestRequestBuilder;
{
    currentPath: string;
    httpCore: kiota_abstractions_1.HttpCore;
    isRawUrl: boolean;
    get;
    microsoft.graph.approve();
    microsoft_graph_approveRequestBuilder_1.Microsoft.graph.approveRequestBuilder;
    {
        return new microsoft_graph_approveRequestBuilder_1.Microsoft.graph.approveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    get;
    microsoft.graph.decline();
    microsoft_graph_approveRequestBuilder_1.Microsoft.graph.declineRequestBuilder;
    {
        return new microsoft_graph_approveRequestBuilder_1.Microsoft.graph.declineRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    pathSegment: string;
    constructor(currentPath, string, httpCore, kiota_abstractions_1.HttpCore, isRawUrl, boolean = true);
    {
        if (!currentPath)
            throw new Error("currentPath cannot be undefined");
        if (!httpCore)
            throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.scheduleChangeRequest";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    ;
}
