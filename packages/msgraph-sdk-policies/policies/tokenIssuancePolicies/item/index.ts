/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTokenIssuancePolicyFromDiscriminatorValue, serializeTokenIssuancePolicy, type TokenIssuancePolicy } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AppliesToRequestBuilderNavigationMetadata, AppliesToRequestBuilderRequestsMetadata, type AppliesToRequestBuilder } from './appliesTo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.policyRoot entity.
 */
export interface TokenIssuancePolicyItemRequestBuilder extends BaseRequestBuilder<TokenIssuancePolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    get appliesTo(): AppliesToRequestBuilder;
    /**
     * Delete a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The policy that specifies the characteristics of SAML tokens issued by Microsoft Entra ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TokenIssuancePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TokenIssuancePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<TokenIssuancePolicy | undefined>;
    /**
     * Update the properties of a tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TokenIssuancePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: TokenIssuancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TokenIssuancePolicy | undefined>;
    /**
     * Delete a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The policy that specifies the characteristics of SAML tokens issued by Microsoft Entra ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TokenIssuancePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TokenIssuancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The policy that specifies the characteristics of SAML tokens issued by Microsoft Entra ID.
 */
export interface TokenIssuancePolicyItemRequestBuilderGetQueryParameters {
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
export const TokenIssuancePolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/tokenIssuancePolicies/{tokenIssuancePolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TokenIssuancePolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TokenIssuancePolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TokenIssuancePolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appliesTo: {
        requestsMetadata: AppliesToRequestBuilderRequestsMetadata,
        navigationMetadata: AppliesToRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TokenIssuancePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TokenIssuancePolicyItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TokenIssuancePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTokenIssuancePolicyFromDiscriminatorValue,
        queryParametersMapper: TokenIssuancePolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TokenIssuancePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTokenIssuancePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTokenIssuancePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
