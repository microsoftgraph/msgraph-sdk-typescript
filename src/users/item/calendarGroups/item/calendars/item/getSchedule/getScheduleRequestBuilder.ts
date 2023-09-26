import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../../models/oDataErrors/oDataError';
import { deserializeIntoGetSchedulePostRequestBody, serializeGetSchedulePostRequestBody, type GetSchedulePostRequestBody } from './getSchedulePostRequestBody';
import { createGetScheduleResponseFromDiscriminatorValue, deserializeIntoGetScheduleResponse, serializeGetScheduleResponse, type GetScheduleResponse } from './getScheduleResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetScheduleRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the getSchedule method.
 */
export class GetScheduleRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetScheduleRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}/getSchedule");
    };
    /**
     * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetScheduleResponse
     * @see {@link https://learn.microsoft.com/graph/api/calendar-getschedule?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetSchedulePostRequestBody, requestConfiguration?: GetScheduleRequestBuilderPostRequestConfiguration | undefined) : Promise<GetScheduleResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetScheduleResponse>(requestInfo, createGetScheduleResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetSchedulePostRequestBody, requestConfiguration?: GetScheduleRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetSchedulePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getScheduleRequestBuilder
     */
    public withUrl(rawUrl: string) : GetScheduleRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetScheduleRequestBuilder(rawUrl, this.requestAdapter);
    };
}
