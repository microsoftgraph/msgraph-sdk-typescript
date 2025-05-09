/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMultiTenantOrganizationPartnerConfigurationTemplateFromDiscriminatorValue, serializeMultiTenantOrganizationPartnerConfigurationTemplate, type MultiTenantOrganizationPartnerConfigurationTemplate } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the multiTenantOrganizationPartnerConfiguration property of the microsoft.graph.policyTemplate entity.
 */
export interface MultiTenantOrganizationPartnerConfigurationRequestBuilder extends BaseRequestBuilder<MultiTenantOrganizationPartnerConfigurationRequestBuilder> {
    /**
     * Delete navigation property multiTenantOrganizationPartnerConfiguration for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MultiTenantOrganizationPartnerConfigurationTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/multitenantorganizationpartnerconfigurationtemplate-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MultiTenantOrganizationPartnerConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<MultiTenantOrganizationPartnerConfigurationTemplate | undefined>;
    /**
     * Update the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MultiTenantOrganizationPartnerConfigurationTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/multitenantorganizationpartnerconfigurationtemplate-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: MultiTenantOrganizationPartnerConfigurationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MultiTenantOrganizationPartnerConfigurationTemplate | undefined>;
    /**
     * Delete navigation property multiTenantOrganizationPartnerConfiguration for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MultiTenantOrganizationPartnerConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MultiTenantOrganizationPartnerConfigurationTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the cross-tenant access policy template with inbound and outbound partner configuration settings for a multitenant organization.
 */
export interface MultiTenantOrganizationPartnerConfigurationRequestBuilderGetQueryParameters {
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
export const MultiTenantOrganizationPartnerConfigurationRequestBuilderUriTemplate = "{+baseurl}/policies/crossTenantAccessPolicy/templates/multiTenantOrganizationPartnerConfiguration{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MultiTenantOrganizationPartnerConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MultiTenantOrganizationPartnerConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MultiTenantOrganizationPartnerConfigurationRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MultiTenantOrganizationPartnerConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMultiTenantOrganizationPartnerConfigurationTemplateFromDiscriminatorValue,
        queryParametersMapper: MultiTenantOrganizationPartnerConfigurationRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MultiTenantOrganizationPartnerConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMultiTenantOrganizationPartnerConfigurationTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMultiTenantOrganizationPartnerConfigurationTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
