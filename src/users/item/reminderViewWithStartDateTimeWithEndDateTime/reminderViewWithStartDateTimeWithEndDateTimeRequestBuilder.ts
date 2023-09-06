import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue } from './createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue';
import { type ReminderViewWithStartDateTimeWithEndDateTimeResponse } from './index';
import { type ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration } from './reminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the reminderView method.
 */
export class ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder and sets the default values.
     * @param EndDateTime Usage: EndDateTime='{EndDateTime}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param StartDateTime Usage: StartDateTime='{StartDateTime}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, endDateTime?: string | undefined, startDateTime?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/reminderView(StartDateTime='{StartDateTime}',EndDateTime='{EndDateTime}'){?%24top,%24skip,%24search,%24filter,%24count}");
        this.pathParameters["EndDateTime"] = endDateTime
        this.pathParameters["StartDateTime"] = startDateTime
    };
    /**
     * Invoke function reminderView
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ReminderViewWithStartDateTimeWithEndDateTimeResponse
     */
    public get(requestConfiguration?: ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : Promise<ReminderViewWithStartDateTimeWithEndDateTimeResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ReminderViewWithStartDateTimeWithEndDateTimeResponse>(requestInfo, createReminderViewWithStartDateTimeWithEndDateTimeResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function reminderView
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a reminderViewWithStartDateTimeWithEndDateTimeRequestBuilder
     */
    public withUrl(rawUrl: string) : ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ReminderViewWithStartDateTimeWithEndDateTimeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
