import {WorkbookRange} from '../../../../../../../models/microsoft/graph/workbookRange';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/shared/{sharedInsight-id}/resource/microsoft.graph.workbookRange/microsoft.graph.boundingRect(anotherRange='{anotherRange}')  */
export class BoundingRectWithAnotherRangeRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new BoundingRectWithAnotherRangeRequestBuilder and sets the default values.
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter, anotherRange?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/insights/shared/{sharedInsight_id}/resource/microsoft.graph.workbookRange/microsoft.graph.boundingRect(anotherRange='{anotherRange}')";
        const urlTplParams = getPathParameters(pathParameters);
        anotherRange && urlTplParams.set("anotherRange", anotherRange);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function boundingRect
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
     * Invoke function boundingRect
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of BoundingRectWithAnotherRangeResponse
     */
    public get(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookRange | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookRange>(requestInfo, WorkbookRange, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
