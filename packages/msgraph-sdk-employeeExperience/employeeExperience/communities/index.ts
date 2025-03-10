/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCommunityCollectionResponseFromDiscriminatorValue, createCommunityFromDiscriminatorValue, serializeCommunity, type Community, type CommunityCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CommunityItemRequestBuilderNavigationMetadata, CommunityItemRequestBuilderRequestsMetadata, type CommunityItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the communities property of the microsoft.graph.employeeExperience entity.
 */
export interface CommunitiesRequestBuilder extends BaseRequestBuilder<CommunitiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the communities property of the microsoft.graph.employeeExperience entity.
     * @param communityId The unique identifier of community
     * @returns {CommunityItemRequestBuilder}
     */
     byCommunityId(communityId: string) : CommunityItemRequestBuilder;
    /**
     * Get a list of the Viva Engage community objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CommunityCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-list-communities?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CommunitiesRequestBuilderGetQueryParameters> | undefined) : Promise<CommunityCollectionResponse | undefined>;
    /**
     * Create a new community in Viva Engage.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Community>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-post-communities?view=graph-rest-1.0|Find more info here}
     */
     post(body: Community, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Community | undefined>;
    /**
     * Get a list of the Viva Engage community objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CommunitiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new community in Viva Engage.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Community, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the Viva Engage community objects and their properties.
 */
export interface CommunitiesRequestBuilderGetQueryParameters {
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
export const CommunitiesRequestBuilderUriTemplate = "{+baseurl}/employeeExperience/communities{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CommunitiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CommunitiesRequestBuilderNavigationMetadata: Record<Exclude<keyof CommunitiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCommunityId: {
        requestsMetadata: CommunityItemRequestBuilderRequestsMetadata,
        navigationMetadata: CommunityItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["community%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CommunitiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CommunitiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCommunityCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CommunitiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CommunitiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCommunityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCommunity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
