import {Microsoft.graph.abortRequestBuilder} from './microsoft/graph/abort/microsoft.graph.abortRequestBuilder';
import {Microsoft.graph.cancelRequestBuilder} from './microsoft/graph/cancel/microsoft.graph.cancelRequestBuilder';
import {Microsoft.graph.redirectRequestBuilder} from './microsoft/graph/redirect/microsoft.graph.redirectRequestBuilder';
import {Microsoft.graph.startRequestBuilder} from './microsoft/graph/start/microsoft.graph.startRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.printJob  */
export class Microsoft.graph.printJobRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.abort(): Microsoft.graph.abortRequestBuilder {
        return new Microsoft.graph.abortRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.cancel(): Microsoft.graph.cancelRequestBuilder {
        return new Microsoft.graph.cancelRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.redirect(): Microsoft.graph.redirectRequestBuilder {
        return new Microsoft.graph.redirectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.start(): Microsoft.graph.startRequestBuilder {
        return new Microsoft.graph.startRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new Microsoft.graph.printJobRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.printJob";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
