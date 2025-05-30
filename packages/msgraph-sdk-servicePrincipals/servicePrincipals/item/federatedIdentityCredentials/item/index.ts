/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFederatedIdentityCredentialFromDiscriminatorValue, serializeFederatedIdentityCredential, type FederatedIdentityCredential } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
 */
export interface FederatedIdentityCredentialItemRequestBuilder extends BaseRequestBuilder<FederatedIdentityCredentialItemRequestBuilder> {
    /**
     * Delete navigation property federatedIdentityCredentials for servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredential>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialItemRequestBuilderGetQueryParameters> | undefined) : Promise<FederatedIdentityCredential | undefined>;
    /**
     * Update the navigation property federatedIdentityCredentials in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredential>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FederatedIdentityCredential | undefined>;
    /**
     * Delete navigation property federatedIdentityCredentials for servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property federatedIdentityCredentials in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Federated identities for a specific type of service principal - managed identity. Supports $expand and $filter (/$count eq 0, /$count ne 0).
 */
export interface FederatedIdentityCredentialItemRequestBuilderGetQueryParameters {
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
export const FederatedIdentityCredentialItemRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/federatedIdentityCredentials/{federatedIdentityCredential%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FederatedIdentityCredentialItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FederatedIdentityCredentialItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FederatedIdentityCredentialItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FederatedIdentityCredentialItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFederatedIdentityCredentialFromDiscriminatorValue,
        queryParametersMapper: FederatedIdentityCredentialItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FederatedIdentityCredentialItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFederatedIdentityCredentialFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFederatedIdentityCredential,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
