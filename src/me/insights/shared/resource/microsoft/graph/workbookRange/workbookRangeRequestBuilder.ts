import {Microsoft.graph.clearRequestBuilder} from './microsoft/graph/clear/microsoft.graph.clearRequestBuilder';
import {Microsoft.graph.deleteRequestBuilder} from './microsoft/graph/delete/microsoft.graph.deleteRequestBuilder';
import {Microsoft.graph.insertRequestBuilder} from './microsoft/graph/insert/microsoft.graph.insertRequestBuilder';
import {Microsoft.graph.mergeRequestBuilder} from './microsoft/graph/merge/microsoft.graph.mergeRequestBuilder';
import {Microsoft.graph.unmergeRequestBuilder} from './microsoft/graph/unmerge/microsoft.graph.unmergeRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/resource/microsoft.graph.workbookRange  */
export class Microsoft.graph.workbookRangeRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.clear(): Microsoft.graph.clearRequestBuilder {
        return new Microsoft.graph.clearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.delete(): Microsoft.graph.deleteRequestBuilder {
        return new Microsoft.graph.deleteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.insert(): Microsoft.graph.insertRequestBuilder {
        return new Microsoft.graph.insertRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.merge(): Microsoft.graph.mergeRequestBuilder {
        return new Microsoft.graph.mergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.unmerge(): Microsoft.graph.unmergeRequestBuilder {
        return new Microsoft.graph.unmergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new Microsoft.graph.workbookRangeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRange";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
