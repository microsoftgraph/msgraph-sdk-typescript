import { createTimeOffReasonFromDiscriminatorValue } from '../../../../../../models/createTimeOffReasonFromDiscriminatorValue';
import { deserializeIntoTimeOffReason } from '../../../../../../models/deserializeIntoTimeOffReason';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeTimeOffReason } from '../../../../../../models/serializeTimeOffReason';
import { type TimeOffReason } from '../../../../../../models/timeOffReason';
import { type TimeOffReasonItemRequestBuilderDeleteRequestConfiguration } from './timeOffReasonItemRequestBuilderDeleteRequestConfiguration';
import { type TimeOffReasonItemRequestBuilderGetRequestConfiguration } from './timeOffReasonItemRequestBuilderGetRequestConfiguration';
import { type TimeOffReasonItemRequestBuilderPatchRequestConfiguration } from './timeOffReasonItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the timeOffReasons property of the microsoft.graph.schedule entity.
 */
export class TimeOffReasonItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TimeOffReasonItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/timeOffReasons/{timeOffReason%2Did}{?%24select}");
    };
    /**
     * Mark a timeOffReason as inactive by setting the isActive property. Every team must include at least one timeoff reason. This method does not remove the specified timeOffReason instance. timeOffItem instances that have been assigned this reason remain assigned to this reason.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/timeoffreason-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TimeOffReasonItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a timeOffReason object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffReason
     * @see {@link https://learn.microsoft.com/graph/api/timeoffreason-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TimeOffReasonItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TimeOffReason | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOffReason>(requestInfo, createTimeOffReasonFromDiscriminatorValue, errorMapping);
    };
    /**
     * Replace an existing timeOffReason. If the specified timeOffReason doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TimeOffReason
     * @see {@link https://learn.microsoft.com/graph/api/timeoffreason-put?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TimeOffReason, requestConfiguration?: TimeOffReasonItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TimeOffReason | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TimeOffReason>(requestInfo, createTimeOffReasonFromDiscriminatorValue, errorMapping);
    };
    /**
     * Mark a timeOffReason as inactive by setting the isActive property. Every team must include at least one timeoff reason. This method does not remove the specified timeOffReason instance. timeOffItem instances that have been assigned this reason remain assigned to this reason.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TimeOffReasonItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a timeOffReason object by ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TimeOffReasonItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Replace an existing timeOffReason. If the specified timeOffReason doesn't exist, this method returns 404 Not found.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TimeOffReason, requestConfiguration?: TimeOffReasonItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTimeOffReason);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TimeOffReasonItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TimeOffReasonItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TimeOffReasonItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
