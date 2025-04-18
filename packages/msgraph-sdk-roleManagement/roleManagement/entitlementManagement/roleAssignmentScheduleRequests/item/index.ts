/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue, serializeUnifiedRoleAssignmentScheduleRequest, type UnifiedRoleAssignmentScheduleRequest } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivatedUsingRequestBuilderRequestsMetadata, type ActivatedUsingRequestBuilder } from './activatedUsing/index.js';
// @ts-ignore
import { AppScopeRequestBuilderRequestsMetadata, type AppScopeRequestBuilder } from './appScope/index.js';
// @ts-ignore
import { CancelRequestBuilderRequestsMetadata, type CancelRequestBuilder } from './cancel/index.js';
// @ts-ignore
import { DirectoryScopeRequestBuilderRequestsMetadata, type DirectoryScopeRequestBuilder } from './directoryScope/index.js';
// @ts-ignore
import { PrincipalRequestBuilderRequestsMetadata, type PrincipalRequestBuilder } from './principal/index.js';
// @ts-ignore
import { RoleDefinitionRequestBuilderRequestsMetadata, type RoleDefinitionRequestBuilder } from './roleDefinition/index.js';
// @ts-ignore
import { TargetScheduleRequestBuilderRequestsMetadata, type TargetScheduleRequestBuilder } from './targetSchedule/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity.
 */
export interface UnifiedRoleAssignmentScheduleRequestItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleAssignmentScheduleRequestItemRequestBuilder> {
    /**
     * Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get activatedUsing(): ActivatedUsingRequestBuilder;
    /**
     * Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get appScope(): AppScopeRequestBuilder;
    /**
     * Provides operations to call the cancel method.
     */
    get cancel(): CancelRequestBuilder;
    /**
     * Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get directoryScope(): DirectoryScopeRequestBuilder;
    /**
     * Provides operations to manage the principal property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get principal(): PrincipalRequestBuilder;
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get roleDefinition(): RoleDefinitionRequestBuilder;
    /**
     * Provides operations to manage the targetSchedule property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity.
     */
    get targetSchedule(): TargetScheduleRequestBuilder;
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleAssignmentScheduleRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined>;
    /**
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleAssignmentScheduleRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UnifiedRoleAssignmentScheduleRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined>;
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UnifiedRoleAssignmentScheduleRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Requests for active role assignments to principals through PIM.
 */
export interface UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetQueryParameters {
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
export const UnifiedRoleAssignmentScheduleRequestItemRequestBuilderUriTemplate = "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UnifiedRoleAssignmentScheduleRequestItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UnifiedRoleAssignmentScheduleRequestItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activatedUsing: {
        requestsMetadata: ActivatedUsingRequestBuilderRequestsMetadata,
    },
    appScope: {
        requestsMetadata: AppScopeRequestBuilderRequestsMetadata,
    },
    cancel: {
        requestsMetadata: CancelRequestBuilderRequestsMetadata,
    },
    directoryScope: {
        requestsMetadata: DirectoryScopeRequestBuilderRequestsMetadata,
    },
    principal: {
        requestsMetadata: PrincipalRequestBuilderRequestsMetadata,
    },
    roleDefinition: {
        requestsMetadata: RoleDefinitionRequestBuilderRequestsMetadata,
    },
    targetSchedule: {
        requestsMetadata: TargetScheduleRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleAssignmentScheduleRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleAssignmentScheduleRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
