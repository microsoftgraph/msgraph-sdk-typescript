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
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
 */
export interface FederatedIdentityCredentialsWithNameRequestBuilder extends BaseRequestBuilder<FederatedIdentityCredentialsWithNameRequestBuilder> {
    /**
     * Delete a federatedIdentityCredential object from an application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/federatedidentitycredential-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a federatedIdentityCredential object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredential>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/federatedidentitycredential-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialsWithNameRequestBuilderGetQueryParameters> | undefined) : Promise<FederatedIdentityCredential | undefined>;
    /**
     * Create a new federatedIdentityCredential object for an application if it doesn't exist, or update the properties of an existing federatedIdentityCredential object. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredential>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/federatedidentitycredential-upsert?view=graph-rest-1.0|Find more info here}
     */
     patch(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FederatedIdentityCredential | undefined>;
    /**
     * Delete a federatedIdentityCredential object from an application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a federatedIdentityCredential object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialsWithNameRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new federatedIdentityCredential object for an application if it doesn't exist, or update the properties of an existing federatedIdentityCredential object. By configuring a trust relationship between your Microsoft Entra application registration and the identity provider for your compute platform, you can use tokens issued by that platform to authenticate with Microsoft identity platform and call APIs in the Microsoft ecosystem. Maximum of 20 objects can be added to an application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a federatedIdentityCredential object.
 */
export interface FederatedIdentityCredentialsWithNameRequestBuilderGetQueryParameters {
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
export const FederatedIdentityCredentialsWithNameRequestBuilderUriTemplate = "{+baseurl}/applications/{application%2Did}/federatedIdentityCredentials(name='{name}'){?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FederatedIdentityCredentialsWithNameRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FederatedIdentityCredentialsWithNameRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FederatedIdentityCredentialsWithNameRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FederatedIdentityCredentialsWithNameRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFederatedIdentityCredentialFromDiscriminatorValue,
        queryParametersMapper: FederatedIdentityCredentialsWithNameRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FederatedIdentityCredentialsWithNameRequestBuilderUriTemplate,
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
