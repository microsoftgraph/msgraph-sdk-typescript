import {Calendar} from '../../../../../../../../models/microsoft/graph/';
import {createCalendarFromDiscriminatorValue} from '../../../../../../../../models/microsoft/graph/createCalendarFromDiscriminatorValue';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the accept method.  */
export class AcceptRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new AcceptRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user_id}/mailFolders/{mailFolder_id}/messages/{message_id}/microsoft.graph.calendarSharingMessage/microsoft.graph.accept";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke action accept
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPostRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke action accept
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Calendar
     */
    public post(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Calendar | undefined> {
        const requestInfo = this.createPostRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<Calendar>(requestInfo, createCalendarFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
