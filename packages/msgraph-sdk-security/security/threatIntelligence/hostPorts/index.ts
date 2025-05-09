/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createHostPortCollectionResponseFromDiscriminatorValue, createHostPortFromDiscriminatorValue, serializeHostPort, type HostPort, type HostPortCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { HostPortItemRequestBuilderNavigationMetadata, HostPortItemRequestBuilderRequestsMetadata, type HostPortItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostPorts property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostPortsRequestBuilder extends BaseRequestBuilder<HostPortsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostPorts property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostPortId The unique identifier of hostPort
     * @returns {HostPortItemRequestBuilder}
     */
     byHostPortId(hostPortId: string) : HostPortItemRequestBuilder;
    /**
     * Read the properties and relationships of a hostPort object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostPortCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostPortsRequestBuilderGetQueryParameters> | undefined) : Promise<HostPortCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostPorts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostPort>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HostPort, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostPort | undefined>;
    /**
     * Read the properties and relationships of a hostPort object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostPortsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostPorts for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HostPort, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a hostPort object.
 */
export interface HostPortsRequestBuilderGetQueryParameters {
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
export const HostPortsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hostPorts{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostPortsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostPortsRequestBuilderNavigationMetadata: Record<Exclude<keyof HostPortsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostPortId: {
        requestsMetadata: HostPortItemRequestBuilderRequestsMetadata,
        navigationMetadata: HostPortItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["hostPort%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostPortsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostPortsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostPortCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostPortsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostPortsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostPortFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostPort,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
