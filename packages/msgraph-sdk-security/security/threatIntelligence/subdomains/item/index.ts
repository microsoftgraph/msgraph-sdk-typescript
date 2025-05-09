/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createSubdomainFromDiscriminatorValue, serializeSubdomain, type Subdomain } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { HostRequestBuilderRequestsMetadata, type HostRequestBuilder } from './host/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subdomains property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface SubdomainItemRequestBuilder extends BaseRequestBuilder<SubdomainItemRequestBuilder> {
    /**
     * Provides operations to manage the host property of the microsoft.graph.security.subdomain entity.
     */
    get host(): HostRequestBuilder;
    /**
     * Delete navigation property subdomains for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a subdomain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Subdomain>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-subdomain-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SubdomainItemRequestBuilderGetQueryParameters> | undefined) : Promise<Subdomain | undefined>;
    /**
     * Update the navigation property subdomains in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Subdomain>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Subdomain, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Subdomain | undefined>;
    /**
     * Delete navigation property subdomains for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a subdomain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SubdomainItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property subdomains in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Subdomain, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a subdomain object.
 */
export interface SubdomainItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const SubdomainItemRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/subdomains/{subdomain%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SubdomainItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SubdomainItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SubdomainItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    host: {
        requestsMetadata: HostRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SubdomainItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SubdomainItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SubdomainItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSubdomainFromDiscriminatorValue,
        queryParametersMapper: SubdomainItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SubdomainItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSubdomainFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSubdomain,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
