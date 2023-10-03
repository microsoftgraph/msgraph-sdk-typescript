import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { type HostTrackerCollectionResponse } from '../../../../../models/security/';
import { createHostTrackerCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/hostTrackerCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { HostTrackerItemRequestBuilder } from './item/hostTrackerItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TrackersRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
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
     * Show only the first n items
     */
    top?: number;
}
export interface TrackersRequestBuilderGetRequestConfiguration {
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
    queryParameters?: TrackersRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the trackers property of the microsoft.graph.security.host entity.
 */
export class TrackersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the trackers property of the microsoft.graph.security.host entity.
     * @param hostTrackerId The unique identifier of hostTracker
     * @returns a HostTrackerItemRequestBuilder
     */
    public byHostTrackerId(hostTrackerId: string) : HostTrackerItemRequestBuilder {
        if(!hostTrackerId) throw new Error("hostTrackerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostTracker%2Did"] = hostTrackerId
        return new HostTrackerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TrackersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/trackers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of hostTracker resources. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostTrackerCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-trackers?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TrackersRequestBuilderGetRequestConfiguration | undefined) : Promise<HostTrackerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostTrackerCollectionResponse>(requestInfo, createHostTrackerCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of hostTracker resources. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TrackersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a trackersRequestBuilder
     */
    public withUrl(rawUrl: string) : TrackersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TrackersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
