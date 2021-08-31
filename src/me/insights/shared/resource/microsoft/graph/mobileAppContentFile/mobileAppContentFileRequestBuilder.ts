import {Microsoft.graph.commitRequestBuilder} from './microsoft/graph/commit/microsoft.graph.commitRequestBuilder';
import {Microsoft.graph.renewUploadRequestBuilder} from './microsoft/graph/renewUpload/microsoft.graph.renewUploadRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/resource/microsoft.graph.mobileAppContentFile  */
export class Microsoft.graph.mobileAppContentFileRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.commit(): Microsoft.graph.commitRequestBuilder {
        return new Microsoft.graph.commitRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.renewUpload(): Microsoft.graph.renewUploadRequestBuilder {
        return new Microsoft.graph.renewUploadRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new Microsoft.graph.mobileAppContentFileRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.mobileAppContentFile";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
