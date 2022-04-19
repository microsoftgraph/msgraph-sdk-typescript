import {createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue} from './createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue';
import {ReminderViewWithStartDateTimeWithEndDateTimeResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reminderView method.  */
export class ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder and sets the default values.
     * @param EndDateTime Usage: EndDateTime='{EndDateTime}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param StartDateTime Usage: StartDateTime='{StartDateTime}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, endDateTime?: string | undefined, startDateTime?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/me/microsoft.graph.reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams[""] = endDateTime
        urlTplParams[""] = startDateTime
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function reminderView
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Invoke function reminderView
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReminderViewWithStartDateTimeWithEndDateTimeResponse
     */
    public get(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            headers, options
        );
        return this.requestAdapter?.sendAsync<ReminderViewWithStartDateTimeWithEndDateTimeResponse>(requestInfo, createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
