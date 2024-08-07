/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAgreementCollectionResponseFromDiscriminatorValue, createAgreementFromDiscriminatorValue, serializeAgreement, type Agreement, type AgreementCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AgreementItemRequestBuilderNavigationMetadata, AgreementItemRequestBuilderRequestsMetadata, type AgreementItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agreements property of the microsoft.graph.termsOfUseContainer entity.
 */
export interface AgreementsRequestBuilder extends BaseRequestBuilder<AgreementsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the agreements property of the microsoft.graph.termsOfUseContainer entity.
     * @param agreementId The unique identifier of agreement
     * @returns {AgreementItemRequestBuilder}
     */
     byAgreementId(agreementId: string) : AgreementItemRequestBuilder;
    /**
     * Retrieve a list of agreement objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AgreementCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/termsofusecontainer-list-agreements?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AgreementsRequestBuilderGetQueryParameters> | undefined) : Promise<AgreementCollectionResponse | undefined>;
    /**
     * Create a new agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Agreement>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/termsofusecontainer-post-agreements?view=graph-rest-1.0|Find more info here}
     */
     post(body: Agreement, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Agreement | undefined>;
    /**
     * Retrieve a list of agreement objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgreementsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Agreement, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of agreement objects.
 */
export interface AgreementsRequestBuilderGetQueryParameters {
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
export const AgreementsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/termsOfUse/agreements{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AgreementsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AgreementsRequestBuilderNavigationMetadata: Record<Exclude<keyof AgreementsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAgreementId: {
        requestsMetadata: AgreementItemRequestBuilderRequestsMetadata,
        navigationMetadata: AgreementItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["agreement%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgreementsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AgreementsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AgreementsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AgreementsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAgreementFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAgreement,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
