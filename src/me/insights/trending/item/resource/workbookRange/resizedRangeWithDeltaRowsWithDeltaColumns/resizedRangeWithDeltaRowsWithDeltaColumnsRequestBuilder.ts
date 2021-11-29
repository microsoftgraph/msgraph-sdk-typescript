import {WorkbookRange} from '../../../../../../../models/microsoft/graph/workbookRange';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.resizedRange(deltaRows={deltaRows},deltaColumns={deltaColumns})  */
export class ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder and sets the default values.
     * @param deltaColumns Usage: deltaColumns={deltaColumns}
     * @param deltaRows Usage: deltaRows={deltaRows}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter, deltaRows?: number | undefined, deltaColumns?: number | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/insights/trending/{trending_id}/resource/microsoft.graph.workbookRange/microsoft.graph.resizedRange(deltaRows={deltaRows},deltaColumns={deltaColumns})";
        const urlTplParams = getPathParameters(pathParameters);
        deltaRows && urlTplParams.set("deltaRows", deltaRows);
        deltaColumns && urlTplParams.set("deltaColumns", deltaColumns);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function resizedRange
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function resizedRange
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ResizedRangeWithDeltaRowsWithDeltaColumnsResponse
     */
    public get(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookRange | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookRange>(requestInfo, WorkbookRange, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
