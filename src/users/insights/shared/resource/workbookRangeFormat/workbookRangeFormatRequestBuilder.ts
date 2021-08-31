import {AutofitColumnsRequestBuilder} from './autofitColumns/autofitColumnsRequestBuilder';
import {AutofitRowsRequestBuilder} from './autofitRows/autofitRowsRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/shared/{sharedInsight-id}/resource/microsoft.graph.workbookRangeFormat  */
export class WorkbookRangeFormatRequestBuilder {
    public get autofitColumns(): AutofitColumnsRequestBuilder {
        return new AutofitColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    public get autofitRows(): AutofitRowsRequestBuilder {
        return new AutofitRowsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    /**
     * Instantiates a new workbookRangeFormatRequestBuilder and sets the default values.
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
