/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryRoleFromDiscriminatorValue, serializeDirectoryRole, type DirectoryRole } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CheckMemberGroupsRequestBuilderRequestsMetadata, type CheckMemberGroupsRequestBuilder } from './checkMemberGroups/index.js';
// @ts-ignore
import { CheckMemberObjectsRequestBuilderRequestsMetadata, type CheckMemberObjectsRequestBuilder } from './checkMemberObjects/index.js';
// @ts-ignore
import { GetMemberGroupsRequestBuilderRequestsMetadata, type GetMemberGroupsRequestBuilder } from './getMemberGroups/index.js';
// @ts-ignore
import { GetMemberObjectsRequestBuilderRequestsMetadata, type GetMemberObjectsRequestBuilder } from './getMemberObjects/index.js';
// @ts-ignore
import { MembersRequestBuilderNavigationMetadata, MembersRequestBuilderRequestsMetadata, type MembersRequestBuilder } from './members/index.js';
// @ts-ignore
import { RestoreRequestBuilderRequestsMetadata, type RestoreRequestBuilder } from './restore/index.js';
// @ts-ignore
import { ScopedMembersRequestBuilderNavigationMetadata, ScopedMembersRequestBuilderRequestsMetadata, type ScopedMembersRequestBuilder } from './scopedMembers/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directoryRole entities.
 */
export interface DirectoryRoleItemRequestBuilder extends BaseRequestBuilder<DirectoryRoleItemRequestBuilder> {
    /**
     * Provides operations to call the checkMemberGroups method.
     */
    get checkMemberGroups(): CheckMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the checkMemberObjects method.
     */
    get checkMemberObjects(): CheckMemberObjectsRequestBuilder;
    /**
     * Provides operations to call the getMemberGroups method.
     */
    get getMemberGroups(): GetMemberGroupsRequestBuilder;
    /**
     * Provides operations to call the getMemberObjects method.
     */
    get getMemberObjects(): GetMemberObjectsRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.directoryRole entity.
     */
    get members(): MembersRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Provides operations to manage the scopedMembers property of the microsoft.graph.directoryRole entity.
     */
    get scopedMembers(): ScopedMembersRequestBuilder;
    /**
     * Delete entity from directoryRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryRole>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/directoryrole-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DirectoryRoleItemRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryRole | undefined>;
    /**
     * Update entity in directoryRoles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryRole>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DirectoryRole, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DirectoryRole | undefined>;
    /**
     * Delete entity from directoryRoles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DirectoryRoleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in directoryRoles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DirectoryRole, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Microsoft Entra admin center. For details, see Role template IDs.
 */
export interface DirectoryRoleItemRequestBuilderGetQueryParameters {
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
export const DirectoryRoleItemRequestBuilderUriTemplate = "{+baseurl}/directoryRoles/{directoryRole%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DirectoryRoleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryRoleItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectoryRoleItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    checkMemberGroups: {
        requestsMetadata: CheckMemberGroupsRequestBuilderRequestsMetadata,
    },
    checkMemberObjects: {
        requestsMetadata: CheckMemberObjectsRequestBuilderRequestsMetadata,
    },
    getMemberGroups: {
        requestsMetadata: GetMemberGroupsRequestBuilderRequestsMetadata,
    },
    getMemberObjects: {
        requestsMetadata: GetMemberObjectsRequestBuilderRequestsMetadata,
    },
    members: {
        requestsMetadata: MembersRequestBuilderRequestsMetadata,
        navigationMetadata: MembersRequestBuilderNavigationMetadata,
    },
    restore: {
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
    scopedMembers: {
        requestsMetadata: ScopedMembersRequestBuilderRequestsMetadata,
        navigationMetadata: ScopedMembersRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DirectoryRoleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DirectoryRoleItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DirectoryRoleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryRoleFromDiscriminatorValue,
        queryParametersMapper: DirectoryRoleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DirectoryRoleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryRoleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDirectoryRole,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
