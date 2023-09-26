import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createDeltaResponseFromDiscriminatorValue } from './deltaResponse';
import { type DeltaResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface DeltaRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * The end date and time of the time range in the function, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00
     */
    endDateTime?: string;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * The start date and time of the time range in the function, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00
     */
    startDateTime?: string;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface DeltaRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: DeltaRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the delta method.
 */
export class DeltaRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeltaRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/events/delta(){?startDateTime*,endDateTime*,%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
    };
    /**
     * Get a set of event resources that have been added, deleted, or updated in a calendarView (a range of events defined by start and end dates) of the user's primary calendar. Typically, synchronizing events in a calendarView in a local store entails a round of multiple delta function calls. The initial call is a full synchronization, and every subsequent delta call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendarView, without having to fetch all the events of that calendar from the server every time.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeltaResponse
     * @see {@link https://learn.microsoft.com/graph/api/event-delta?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DeltaRequestBuilderGetRequestConfiguration | undefined) : Promise<DeltaResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeltaResponse>(requestInfo, createDeltaResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a set of event resources that have been added, deleted, or updated in a calendarView (a range of events defined by start and end dates) of the user's primary calendar. Typically, synchronizing events in a calendarView in a local store entails a round of multiple delta function calls. The initial call is a full synchronization, and every subsequent delta call in the same round gets the incremental changes (additions, deletions, or updates). This allows you to maintain and synchronize a local store of events in the specified calendarView, without having to fetch all the events of that calendar from the server every time.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeltaRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a deltaRequestBuilder
     */
    public withUrl(rawUrl: string) : DeltaRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DeltaRequestBuilder(rawUrl, this.requestAdapter);
    };
}
