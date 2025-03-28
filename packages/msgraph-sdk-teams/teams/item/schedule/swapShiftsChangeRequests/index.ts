/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue, createSwapShiftsChangeRequestFromDiscriminatorValue, serializeSwapShiftsChangeRequest, type SwapShiftsChangeRequest, type SwapShiftsChangeRequestCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SwapShiftsChangeRequestItemRequestBuilderRequestsMetadata, type SwapShiftsChangeRequestItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
 */
export interface SwapShiftsChangeRequestsRequestBuilder extends BaseRequestBuilder<SwapShiftsChangeRequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the swapShiftsChangeRequests property of the microsoft.graph.schedule entity.
     * @param swapShiftsChangeRequestId The unique identifier of swapShiftsChangeRequest
     * @returns {SwapShiftsChangeRequestItemRequestBuilder}
     */
     bySwapShiftsChangeRequestId(swapShiftsChangeRequestId: string) : SwapShiftsChangeRequestItemRequestBuilder;
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SwapShiftsChangeRequestCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SwapShiftsChangeRequestsRequestBuilderGetQueryParameters> | undefined) : Promise<SwapShiftsChangeRequestCollectionResponse | undefined>;
    /**
     * Create an instance of a swapShiftsChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SwapShiftsChangeRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/swapshiftschangerequest-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: SwapShiftsChangeRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SwapShiftsChangeRequest | undefined>;
    /**
     * Retrieve a list of swapShiftsChangeRequest objects in the team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SwapShiftsChangeRequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create an instance of a swapShiftsChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SwapShiftsChangeRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of swapShiftsChangeRequest objects in the team.
 */
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
/**
 * Uri template for the request builder.
 */
export const SwapShiftsChangeRequestsRequestBuilderUriTemplate = "{+baseurl}/teams/{team%2Did}/schedule/swapShiftsChangeRequests{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SwapShiftsChangeRequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SwapShiftsChangeRequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof SwapShiftsChangeRequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySwapShiftsChangeRequestId: {
        requestsMetadata: SwapShiftsChangeRequestItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["swapShiftsChangeRequest%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SwapShiftsChangeRequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SwapShiftsChangeRequestsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSwapShiftsChangeRequestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SwapShiftsChangeRequestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SwapShiftsChangeRequestsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSwapShiftsChangeRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSwapShiftsChangeRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
