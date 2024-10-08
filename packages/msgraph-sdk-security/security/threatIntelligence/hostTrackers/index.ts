/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createHostTrackerCollectionResponseFromDiscriminatorValue, createHostTrackerFromDiscriminatorValue, serializeHostTracker, type HostTracker, type HostTrackerCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { HostTrackerItemRequestBuilderNavigationMetadata, HostTrackerItemRequestBuilderRequestsMetadata, type HostTrackerItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostTrackersRequestBuilder extends BaseRequestBuilder<HostTrackersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostTrackerId The unique identifier of hostTracker
     * @returns {HostTrackerItemRequestBuilder}
     */
     byHostTrackerId(hostTrackerId: string) : HostTrackerItemRequestBuilder;
    /**
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostTrackerCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostTrackersRequestBuilderGetQueryParameters> | undefined) : Promise<HostTrackerCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostTrackers for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostTracker>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HostTracker, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostTracker | undefined>;
    /**
     * Read the properties and relationships of a hostTracker object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostTrackersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostTrackers for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HostTracker, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a hostTracker object.
 */
export interface HostTrackersRequestBuilderGetQueryParameters {
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
export const HostTrackersRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hostTrackers{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostTrackersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostTrackersRequestBuilderNavigationMetadata: Record<Exclude<keyof HostTrackersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostTrackerId: {
        requestsMetadata: HostTrackerItemRequestBuilderRequestsMetadata,
        navigationMetadata: HostTrackerItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["hostTracker%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostTrackersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostTrackersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostTrackerCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostTrackersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostTrackersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostTrackerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostTracker,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
