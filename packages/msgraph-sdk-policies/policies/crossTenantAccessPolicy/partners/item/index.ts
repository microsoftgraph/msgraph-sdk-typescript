/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue, serializeCrossTenantAccessPolicyConfigurationPartner, type CrossTenantAccessPolicyConfigurationPartner } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { IdentitySynchronizationRequestBuilderRequestsMetadata, type IdentitySynchronizationRequestBuilder } from './identitySynchronization/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the partners property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export interface CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder extends BaseRequestBuilder<CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder> {
    /**
     * Provides operations to manage the identitySynchronization property of the microsoft.graph.crossTenantAccessPolicyConfigurationPartner entity.
     */
    get identitySynchronization(): IdentitySynchronizationRequestBuilder;
    /**
     * Delete a partner-specific configuration in a cross-tenant access policy. If a configuration includes a user synchronization policy, you must first delete the user synchronization policy before you can delete the partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CrossTenantAccessPolicyConfigurationPartner>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetQueryParameters> | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartner | undefined>;
    /**
     * Update the properties of a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CrossTenantAccessPolicyConfigurationPartner>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationpartner-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CrossTenantAccessPolicyConfigurationPartner | undefined>;
    /**
     * Delete a partner-specific configuration in a cross-tenant access policy. If a configuration includes a user synchronization policy, you must first delete the user synchronization policy before you can delete the partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a partner-specific configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a partner-specific configuration.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CrossTenantAccessPolicyConfigurationPartner, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a partner-specific configuration.
 */
export interface CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetQueryParameters {
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
export const CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderUriTemplate = "{+baseurl}/policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner%2DtenantId}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    identitySynchronization: {
        requestsMetadata: IdentitySynchronizationRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue,
        queryParametersMapper: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CrossTenantAccessPolicyConfigurationPartnerTenantItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCrossTenantAccessPolicyConfigurationPartnerFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCrossTenantAccessPolicyConfigurationPartner,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
