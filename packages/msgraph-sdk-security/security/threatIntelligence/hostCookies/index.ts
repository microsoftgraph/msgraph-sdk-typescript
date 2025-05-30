/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createHostCookieCollectionResponseFromDiscriminatorValue, createHostCookieFromDiscriminatorValue, serializeHostCookie, type HostCookie, type HostCookieCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { HostCookieItemRequestBuilderNavigationMetadata, HostCookieItemRequestBuilderRequestsMetadata, type HostCookieItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostCookiesRequestBuilder extends BaseRequestBuilder<HostCookiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostCookieId The unique identifier of hostCookie
     * @returns {HostCookieItemRequestBuilder}
     */
     byHostCookieId(hostCookieId: string) : HostCookieItemRequestBuilder;
    /**
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostCookieCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostCookiesRequestBuilderGetQueryParameters> | undefined) : Promise<HostCookieCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostCookies for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostCookie>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HostCookie, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostCookie | undefined>;
    /**
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostCookiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostCookies for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HostCookie, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a hostCookie object.
 */
export interface HostCookiesRequestBuilderGetQueryParameters {
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
export const HostCookiesRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hostCookies{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostCookiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostCookiesRequestBuilderNavigationMetadata: Record<Exclude<keyof HostCookiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostCookieId: {
        requestsMetadata: HostCookieItemRequestBuilderRequestsMetadata,
        navigationMetadata: HostCookieItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["hostCookie%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostCookiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostCookiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostCookieCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostCookiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostCookiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostCookieFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostCookie,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
