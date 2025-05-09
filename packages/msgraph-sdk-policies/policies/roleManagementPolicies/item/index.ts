/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleManagementPolicyFromDiscriminatorValue, serializeUnifiedRoleManagementPolicy, type UnifiedRoleManagementPolicy } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { EffectiveRulesRequestBuilderNavigationMetadata, EffectiveRulesRequestBuilderRequestsMetadata, type EffectiveRulesRequestBuilder } from './effectiveRules/index.js';
// @ts-ignore
import { RulesRequestBuilderNavigationMetadata, RulesRequestBuilderRequestsMetadata, type RulesRequestBuilder } from './rules/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface UnifiedRoleManagementPolicyItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleManagementPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the effectiveRules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     */
    get effectiveRules(): EffectiveRulesRequestBuilder;
    /**
     * Provides operations to manage the rules property of the microsoft.graph.unifiedRoleManagementPolicy entity.
     */
    get rules(): RulesRequestBuilder;
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the details of a role management policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleManagementPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/unifiedrolemanagementpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleManagementPolicy | undefined>;
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleManagementPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UnifiedRoleManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleManagementPolicy | undefined>;
    /**
     * Delete navigation property roleManagementPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the details of a role management policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleManagementPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UnifiedRoleManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the details of a role management policy.
 */
export interface UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParameters {
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
export const UnifiedRoleManagementPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/roleManagementPolicies/{unifiedRoleManagementPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UnifiedRoleManagementPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UnifiedRoleManagementPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    effectiveRules: {
        requestsMetadata: EffectiveRulesRequestBuilderRequestsMetadata,
        navigationMetadata: EffectiveRulesRequestBuilderNavigationMetadata,
    },
    rules: {
        requestsMetadata: RulesRequestBuilderRequestsMetadata,
        navigationMetadata: RulesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleManagementPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UnifiedRoleManagementPolicyItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UnifiedRoleManagementPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleManagementPolicyFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleManagementPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UnifiedRoleManagementPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleManagementPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleManagementPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
