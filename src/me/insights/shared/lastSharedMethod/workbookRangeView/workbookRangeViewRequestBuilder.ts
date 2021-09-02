import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRangeView  */
export class WorkbookRangeViewRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new WorkbookRangeViewRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRangeView";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/lastSharedMethod/microsoft.graph.workbookRangeView/microsoft.graph.range()
     * @returns a rangeRequestBuilder
     */
    public range() : RangeRequestBuilder {
        return new RangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
}
