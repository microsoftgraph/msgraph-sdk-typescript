import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { deserializeIntoSnoozeReminderPostRequestBody } from './deserializeIntoSnoozeReminderPostRequestBody';
import { serializeSnoozeReminderPostRequestBody } from './serializeSnoozeReminderPostRequestBody';
import { type SnoozeReminderPostRequestBody } from './snoozeReminderPostRequestBody';
import { type SnoozeReminderRequestBuilderPostRequestConfiguration } from './snoozeReminderRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the snoozeReminder method.
 */
export class SnoozeReminderRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SnoozeReminderRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/calendar/events/{event%2Did}/instances/{event%2Did1}/snoozeReminder");
    };
    /**
     * Postpone a reminder for an event in a user calendar until a new time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/event-snoozereminder?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SnoozeReminderPostRequestBody, requestConfiguration?: SnoozeReminderRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Postpone a reminder for an event in a user calendar until a new time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SnoozeReminderPostRequestBody, requestConfiguration?: SnoozeReminderRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSnoozeReminderPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a snoozeReminderRequestBuilder
     */
    public withUrl(rawUrl: string) : SnoozeReminderRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SnoozeReminderRequestBuilder(rawUrl, this.requestAdapter);
    };
}
