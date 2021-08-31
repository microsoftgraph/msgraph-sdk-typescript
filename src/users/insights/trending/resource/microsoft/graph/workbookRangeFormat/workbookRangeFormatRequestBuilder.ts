import {Microsoft.graph.autofitColumnsRequestBuilder} from './microsoft/graph/autofitColumns/microsoft.graph.autofitColumnsRequestBuilder';
import {Microsoft.graph.autofitRowsRequestBuilder} from './microsoft/graph/autofitRows/microsoft.graph.autofitRowsRequestBuilder';
import {HttpCore, HttpMethod, RequestInfo, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRangeFormat  */
export class Microsoft.graph.workbookRangeFormatRequestBuilder {
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get microsoft.graph.autofitColumns(): Microsoft.graph.autofitColumnsRequestBuilder {
        return new Microsoft.graph.autofitColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get microsoft.graph.autofitRows(): Microsoft.graph.autofitRowsRequestBuilder {
        return new Microsoft.graph.autofitRowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new Microsoft.graph.workbookRangeFormatRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRangeFormat";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
}
