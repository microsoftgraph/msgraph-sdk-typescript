import {createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue} from './createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue';
import {ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl} from './index';
import {ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration} from './reminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the reminderView method. */
export class ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
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
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Invoke function reminderView
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ReminderViewWithStartDateTimeWithEndDateTimeResponse
     */
    public get(requestConfiguration?: ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<ReminderViewWithStartDateTimeWithEndDateTimeResponseImpl>(requestInfo, createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
