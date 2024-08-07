/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createHostPairCollectionResponseFromDiscriminatorValue, createHostPairFromDiscriminatorValue, serializeHostPair, type HostPair, type HostPairCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { HostPairItemRequestBuilderNavigationMetadata, HostPairItemRequestBuilderRequestsMetadata, type HostPairItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostPairs property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostPairsRequestBuilder extends BaseRequestBuilder<HostPairsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostPairs property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostPairId The unique identifier of hostPair
     * @returns {HostPairItemRequestBuilder}
     */
     byHostPairId(hostPairId: string) : HostPairItemRequestBuilder;
    /**
     * Read the properties and relationships of a hostPair object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostPairCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostPairsRequestBuilderGetQueryParameters> | undefined) : Promise<HostPairCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostPairs for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostPair>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HostPair, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostPair | undefined>;
    /**
     * Read the properties and relationships of a hostPair object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostPairsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostPairs for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HostPair, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a hostPair object.
 */
export interface HostPairsRequestBuilderGetQueryParameters {
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
export const HostPairsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hostPairs{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostPairsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostPairsRequestBuilderNavigationMetadata: Record<Exclude<keyof HostPairsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostPairId: {
        requestsMetadata: HostPairItemRequestBuilderRequestsMetadata,
        navigationMetadata: HostPairItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["hostPair%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostPairsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostPairsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostPairCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostPairsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostPairsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostPairFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostPair,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
