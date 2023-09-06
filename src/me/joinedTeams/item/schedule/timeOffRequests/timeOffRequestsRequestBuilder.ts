import { type TimeOffRequestCollectionResponse } from '../../../../../models/';
import { createTimeOffRequestCollectionResponseFromDiscriminatorValue } from '../../../../../models/createTimeOffRequestCollectionResponseFromDiscriminatorValue';
import { createTimeOffRequestFromDiscriminatorValue } from '../../../../../models/createTimeOffRequestFromDiscriminatorValue';
import { deserializeIntoTimeOffRequest } from '../../../../../models/deserializeIntoTimeOffRequest';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeTimeOffRequest } from '../../../../../models/serializeTimeOffRequest';
import { type TimeOffRequest } from '../../../../../models/timeOffRequest';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TimeOffRequestItemRequestBuilder } from './item/timeOffRequestItemRequestBuilder';
import { type TimeOffRequestsRequestBuilderGetRequestConfiguration } from './timeOffRequestsRequestBuilderGetRequestConfiguration';
import { type TimeOffRequestsRequestBuilderPostRequestConfiguration } from './timeOffRequestsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity.
 */
export class TimeOffRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the timeOffRequests property of the microsoft.graph.schedule entity.
     * @param timeOffRequestId The unique identifier of timeOffRequest
     * @returns a TimeOffRequestItemRequestBuilder
     */
    public byTimeOffRequestId(timeOffRequestId: string) : TimeOffRequestItemRequestBuilder {
        if(!timeOffRequestId) throw new Error("timeOffRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["timeOffRequest%2Did"] = timeOffRequestId
        return new TimeOffRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TimeOffRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/timeOffRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Retrieve a list of timeOffRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/timeoffrequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TimeOffRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<TimeOffRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOffRequestCollectionResponse>(requestInfo, createTimeOffRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to timeOffRequests for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffRequest
     */
    public post(body: TimeOffRequest, requestConfiguration?: TimeOffRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<TimeOffRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOffRequest>(requestInfo, createTimeOffRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of timeOffRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TimeOffRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to timeOffRequests for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TimeOffRequest, requestConfiguration?: TimeOffRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTimeOffRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a timeOffRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : TimeOffRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TimeOffRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
