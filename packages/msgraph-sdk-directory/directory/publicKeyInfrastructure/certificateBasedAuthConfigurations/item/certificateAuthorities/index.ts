/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCertificateAuthorityDetailCollectionResponseFromDiscriminatorValue, createCertificateAuthorityDetailFromDiscriminatorValue, serializeCertificateAuthorityDetail, type CertificateAuthorityDetail, type CertificateAuthorityDetailCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CertificateAuthorityDetailItemRequestBuilderRequestsMetadata, type CertificateAuthorityDetailItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certificateAuthorities property of the microsoft.graph.certificateBasedAuthPki entity.
 */
export interface CertificateAuthoritiesRequestBuilder extends BaseRequestBuilder<CertificateAuthoritiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the certificateAuthorities property of the microsoft.graph.certificateBasedAuthPki entity.
     * @param certificateAuthorityDetailId The unique identifier of certificateAuthorityDetail
     * @returns {CertificateAuthorityDetailItemRequestBuilder}
     */
     byCertificateAuthorityDetailId(certificateAuthorityDetailId: string) : CertificateAuthorityDetailItemRequestBuilder;
    /**
     * Get a list of the certificateAuthorityDetail objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityDetailCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthpki-list-certificateauthorities?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CertificateAuthoritiesRequestBuilderGetQueryParameters> | undefined) : Promise<CertificateAuthorityDetailCollectionResponse | undefined>;
    /**
     * Create a new certificateAuthorityDetail object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityDetail>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthpki-post-certificateauthorities?view=graph-rest-1.0|Find more info here}
     */
     post(body: CertificateAuthorityDetail, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CertificateAuthorityDetail | undefined>;
    /**
     * Get a list of the certificateAuthorityDetail objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificateAuthoritiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new certificateAuthorityDetail object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CertificateAuthorityDetail, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the certificateAuthorityDetail objects and their properties.
 */
export interface CertificateAuthoritiesRequestBuilderGetQueryParameters {
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
export const CertificateAuthoritiesRequestBuilderUriTemplate = "{+baseurl}/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki%2Did}/certificateAuthorities{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificateAuthoritiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CertificateAuthoritiesRequestBuilderNavigationMetadata: Record<Exclude<keyof CertificateAuthoritiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCertificateAuthorityDetailId: {
        requestsMetadata: CertificateAuthorityDetailItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["certificateAuthorityDetail%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificateAuthoritiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CertificateAuthoritiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityDetailCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CertificateAuthoritiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CertificateAuthoritiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityDetailFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCertificateAuthorityDetail,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
