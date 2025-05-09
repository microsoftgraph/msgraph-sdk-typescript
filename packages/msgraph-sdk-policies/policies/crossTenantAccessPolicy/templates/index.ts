/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPolicyTemplateFromDiscriminatorValue, serializePolicyTemplate, type PolicyTemplate } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MultiTenantOrganizationIdentitySynchronizationRequestBuilderRequestsMetadata, type MultiTenantOrganizationIdentitySynchronizationRequestBuilder } from './multiTenantOrganizationIdentitySynchronization/index.js';
// @ts-ignore
import { MultiTenantOrganizationPartnerConfigurationRequestBuilderRequestsMetadata, type MultiTenantOrganizationPartnerConfigurationRequestBuilder } from './multiTenantOrganizationPartnerConfiguration/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export interface TemplatesRequestBuilder extends BaseRequestBuilder<TemplatesRequestBuilder> {
    /**
     * Provides operations to manage the multiTenantOrganizationIdentitySynchronization property of the microsoft.graph.policyTemplate entity.
     */
    get multiTenantOrganizationIdentitySynchronization(): MultiTenantOrganizationIdentitySynchronizationRequestBuilder;
    /**
     * Provides operations to manage the multiTenantOrganizationPartnerConfiguration property of the microsoft.graph.policyTemplate entity.
     */
    get multiTenantOrganizationPartnerConfiguration(): MultiTenantOrganizationPartnerConfigurationRequestBuilder;
    /**
     * Delete navigation property templates for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the base policy in the directory for multitenant organization settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PolicyTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : Promise<PolicyTemplate | undefined>;
    /**
     * Update the navigation property templates in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PolicyTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: PolicyTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PolicyTemplate | undefined>;
    /**
     * Delete navigation property templates for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the base policy in the directory for multitenant organization settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property templates in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: PolicyTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the base policy in the directory for multitenant organization settings.
 */
export interface TemplatesRequestBuilderGetQueryParameters {
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
export const TemplatesRequestBuilderUriTemplate = "{+baseurl}/policies/crossTenantAccessPolicy/templates{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TemplatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TemplatesRequestBuilderNavigationMetadata: Record<Exclude<keyof TemplatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    multiTenantOrganizationIdentitySynchronization: {
        requestsMetadata: MultiTenantOrganizationIdentitySynchronizationRequestBuilderRequestsMetadata,
    },
    multiTenantOrganizationPartnerConfiguration: {
        requestsMetadata: MultiTenantOrganizationPartnerConfigurationRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TemplatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TemplatesRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TemplatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPolicyTemplateFromDiscriminatorValue,
        queryParametersMapper: TemplatesRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TemplatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPolicyTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePolicyTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
