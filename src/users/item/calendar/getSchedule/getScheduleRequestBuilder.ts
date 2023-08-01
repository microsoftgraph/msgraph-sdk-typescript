import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createGetScheduleResponseFromDiscriminatorValue} from './createGetScheduleResponseFromDiscriminatorValue';
import {deserializeIntoGetSchedulePostRequestBody} from './deserializeIntoGetSchedulePostRequestBody';
import {deserializeIntoGetScheduleResponse} from './deserializeIntoGetScheduleResponse';
import type {GetSchedulePostRequestBody} from './getSchedulePostRequestBody';
import {GetScheduleRequestBuilderPostRequestConfiguration} from './getScheduleRequestBuilderPostRequestConfiguration';
import type {GetScheduleResponse} from './getScheduleResponse';
import {serializeGetSchedulePostRequestBody} from './serializeGetSchedulePostRequestBody';
import {serializeGetScheduleResponse} from './serializeGetScheduleResponse';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/calendar/getSchedule");
    };
    /**
     * Get the free/busy availability information for a collection of users, distributions lists, or resources (rooms or equipment) for a specified time period.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetScheduleResponse
     * @see {@link https://learn.microsoft.com/graph/api/calendar-getschedule?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetSchedulePostRequestBody | undefined, requestConfiguration?: GetScheduleRequestBuilderPostRequestConfiguration | undefined) : Promise<GetScheduleResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: GetSchedulePostRequestBody | undefined, requestConfiguration?: GetScheduleRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetSchedulePostRequestBody);
        return requestInfo;
    };
}
