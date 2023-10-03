import { type SwapShiftsChangeRequestCollectionResponse } from '../../../../../models/';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createSwapShiftsChangeRequestFromDiscriminatorValue, deserializeIntoSwapShiftsChangeRequest, serializeSwapShiftsChangeRequest, type SwapShiftsChangeRequest } from '../../../../../models/swapShiftsChangeRequest';
import { createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue } from '../../../../../models/swapShiftsChangeRequestCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SwapShiftsChangeRequestItemRequestBuilder } from './item/swapShiftsChangeRequestItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SwapShiftsChangeRequestsRequestBuilderGetQueryParameters {
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
export interface SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SwapShiftsChangeRequestsRequestBuilderGetQueryParameters;
}
export interface SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export class SwapShiftsChangeRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
     * @param swapShiftsChangeRequestId The unique identifier of swapShiftsChangeRequest
     * @returns a SwapShiftsChangeRequestItemRequestBuilder
     */
    public bySwapShiftsChangeRequestId(swapShiftsChangeRequestId: string) : SwapShiftsChangeRequestItemRequestBuilder {
        if(!swapShiftsChangeRequestId) throw new Error("swapShiftsChangeRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["swapShiftsChangeRequest%2Did"] = swapShiftsChangeRequestId
        return new SwapShiftsChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SwapShiftsChangeRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/team/schedule/swapShiftsChangeRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequestCollectionResponse>(requestInfo, createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create an instance of a swapShiftsChangeRequest object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SwapShiftsChangeRequest
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<SwapShiftsChangeRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SwapShiftsChangeRequest>(requestInfo, createSwapShiftsChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an instance of a swapShiftsChangeRequest object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SwapShiftsChangeRequest, requestConfiguration?: SwapShiftsChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSwapShiftsChangeRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a swapShiftsChangeRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : SwapShiftsChangeRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SwapShiftsChangeRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
